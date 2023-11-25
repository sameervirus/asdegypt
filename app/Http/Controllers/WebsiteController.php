<?php

namespace App\Http\Controllers;

use App\Admin\Distributor;
use App\Admin\Pages\Page;
use App\Admin\Post;
use App\Admin\Product\Product;
use App\Admin\SiteContent\Sitecontent;
use App\Admin\Slide\Slider;
use App\Http\Resources\ProductImagesResource;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;


class WebsiteController extends Controller
{
    public function index()
    {
        $ids = DB::table('home_products')->pluck('product_id')->toArray();

        return Inertia::render('Home', [
            'sliders' => Slider::all(),
            'pages' => Page::all(),
            'features' => ProductResource::collection(Product::whereIn('id', $ids)->get())
        ]);
    }

    public function about()
    {
        return Inertia::render('About', [
            'pages' => Page::all(),
        ]);
    }

    public function news()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return Inertia::render('News', [
            'news' => $posts
        ]);
    }

    public function post($slug)
    {
        $post = Post::where('slug', $slug)->first();
        return Inertia::render('Post', [
            'post' => $post
        ]);
    }

    public function reference()
    {
        return Inertia::render('Reference', [
            'pages' => Page::all(),
        ]);
    }

    public function distributors()
    {
        return Inertia::render('Distributors', [
            'distributors' => Distributor::all()
        ]);
    }

    public function contacts()
    {
        $locale = App::getLocale();
            $site_content = Sitecontent::where('lang', $locale)->pluck('content', 'code');
        return Inertia::render('Contacts', [
            'data' => $site_content
        ]);
    }

    public function products()
    {
        return Inertia::render('Products/Products');
    }

    public function agents($agent)
    {
        $agent_products = ProductResource::collection(Product::where('agent', $agent)->groupBy('category')->orderBy('id')->get());
        return Inertia::render('Products/Agent', [
            'agent_products' => $agent_products
        ]);
    }

    public function category($agent, $category)
    {
        $products = ProductResource::collection(Product::where('agent', $agent)->where('category', $category)->orderBy('id')->get());
        $categories = ProductResource::collection(Product::where('agent', $agent)->groupBy('category')->orderBy('id')->get());

        return Inertia::render('Products/Category', [
            'agent_products' => $products,
            'agent_categories' => $categories
        ]);
    }

    public function model($agent, $category, $model)
    {
        $product = Product::where('model', $model)->first();
        $products = Product::where('agent', $agent)->where('category', $category)->orderBy('id')->get();
        $image = $product->getMedia('images')->where('custom_properties.fav', true)->first();

        return Inertia::render('Products/Model', [
            'product' => $product,
            'agent_products' => $products,
            'images' => ProductImagesResource::collection($product->getMedia('images')),
            'fav_image' => $image ? $image->getFullUrl() : null
        ]);
    }

    public function create()
    {
        return inertia('Registration/Create');
    }

    public function store(Request $request)
    {
        // Validation rules
        $rules = [
            'serial' => 'required|string|max:255',
            'purchase_date' => 'required|date',
            'name' => 'required|string|max:255',
            'files.*' => 'nullable|file|mimes:jpeg,png,mp4|max:5120', // 5 MB limit
        ];

        // Validate the request data
        $validatedData = $request->validate($rules);

        try {
            // Handle file uploads
            $filePaths = [];
            if ($request->hasFile('files')) {
                foreach ($request->file('files') as $file) {
                    $fileName = $file->store('public/product_files'); // Store file in storage/app/product_files
                    $filePaths[] = str_replace('public/', '', $fileName);
                }
            }

            // Insert into the database using the DB class
            $productId = DB::table('product_registration')->insertGetId([
                'serial' => $validatedData['serial'],
                'purchase_date' => $validatedData['purchase_date'],
                'name' => $validatedData['name'],
                'files' => json_encode($filePaths), // Store file paths in the 'files' column
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Assuming the insertion was successful, you can send a success message.
            return inertia('Registration/Create')->with('success', 'Product registered successfully!');
        } catch (\Exception $e) {
            // If an exception occurs (e.g., database error), you can send an error message.
            return inertia('Registration/Create')->with('error', 'Failed to register product. Please try again.');
        }
    }
}
