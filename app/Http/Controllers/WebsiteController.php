<?php

namespace App\Http\Controllers;

use App\Admin\Distributor;
use App\Admin\Pages\Page;
use App\Admin\Post;
use App\Admin\Product\Product;
use App\Admin\SiteContent\Sitecontent;
use App\Admin\Slide\Slider;
use App\Http\Resources\ProductImagesResource;
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
            'features' => Product::whereIn('id', $ids)->get()
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
        $agent_products = Product::where('agent', $agent)->groupBy('category')->orderBy('id')->get();
        return Inertia::render('Products/Agent', [
            'agent_products' => $agent_products
        ]);
    }

    public function category($agent, $category)
    {
        $products = Product::where('agent', $agent)->where('category', $category)->orderBy('id')->get();
        $categories = Product::where('agent', $agent)->groupBy('category')->orderBy('id')->get();

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
        return $request->all();
    }
}
