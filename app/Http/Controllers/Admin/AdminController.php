<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Admin\Product\Product;
use App\Admin\Wproduct;
use App\Admin\Pproduct;
use App\Admin\Post;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AdminController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

    public function home_products()
    {
        return view('admin.products.home_products', [
            'products' => DB::table('home_products')->get()
        ]);
    }

    public function update_products(Request $request)
    {
        $request->validate([
            'products' => 'required|array',
        ]);
        if ($request->products) {
            foreach ($request->products as $key => $p) {
                DB::table('home_products')->where('id', $key + 1)->update(['product_id' => $p]);
            }
        }
        flash()->overlay('Successfully Updated', 'Success');
        return redirect()->route('home_products');
    }

    public function index()
    {
    }

    public function upload_img(Request $request)
    {
        $path = $request->file('file')->storeAs('files', $request->file('file')->getClientOriginalName(), 'uploads');

        return json_encode(['location' => $path]);
    }

    public function reorder(Request $request)
    {
        $i = 1;
        foreach ($request->item as $value) {
            DB::table($request->table)
                ->where('id', $value)
                ->update(['sort_order' => $i]);
            $i++;
        }

        return 1;
    }

    public function preorder(Request $request)
    {
        $order = str_replace('^', '-', json_encode($request->product));
        DB::table('pages')
            ->where('page', 'product_order')
            ->update(['content' => $order]);

        return 1;
    }

    public function delimg(Request $request)
    {
        $product = Product::findOrFail($request->id);

        $product->deleteMedia($request->imgs);

        flash('Successfully Deleted')->success();

        return 'ok';
    }

    public function wdelimg(Request $request)
    {
        $product = Wproduct::findOrFail($request->id);

        $product->deleteMedia($request->imgs);

        flash('Successfully Deleted')->success();

        return 'ok';
    }

    public function delimgpost(Request $request)
    {
        $product = Post::findOrFail($request->id);

        $product->deleteMedia($request->imgs);

        flash('Successfully Deleted')->success();

        return 'ok';
    }

    public function pdelimg(Request $request)
    {
        $product = Pproduct::findOrFail($request->id);

        $product->deleteMedia($request->imgs);

        flash('Successfully Deleted')->success();

        return 'ok';
    }

    public function feedbacks()
    {
        $items = \DB::table('feedbacks')->paginate(15);
        return view('admin.feedbacks.index', compact('items'));
    }

    public function products_registration()
    {
        $registeredProducts = \DB::table('product_registration')->paginate(15);
        return view('admin.register_products', compact('registeredProducts'));
    }

    public function favimg(Request $request)
    {
        $product = Product::findOrFail($request->id);
        foreach ($product->getMedia('images') as $item) {
            $item->forgetCustomProperty('fav');
            $item->save();
        }

        $image = Media::find($request->imgs);

        $image->setCustomProperty('fav', true);

        $image->save();

        return 'ok';
    }
}
