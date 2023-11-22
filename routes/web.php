<?php

use App\Admin\Product\Product;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DistributorController;
use App\Http\Controllers\Admin\DownloadController;
use App\Http\Controllers\Admin\Pages\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Admin\SiteContent\SitecontentController;
use App\Http\Controllers\Admin\Slide\SliderController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebsiteController;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware('locale')->group(function() {
    Route::get('/', [WebsiteController::class, 'index']);
    Route::get('/about', [WebsiteController::class, 'about']);
    Route::get('/news', [WebsiteController::class, 'news']);
    Route::get('/news/{slug}', [WebsiteController::class, 'post']);
    Route::get('/reference', [WebsiteController::class, 'reference']);
    Route::get('/distributors', [WebsiteController::class, 'distributors']);
    Route::get('/contact-us', [WebsiteController::class, 'contacts']);
    Route::get('/products', [WebsiteController::class, 'products']);
    Route::get('/products/{agent}', [WebsiteController::class, 'agents']);
    Route::get('/products/{agent}/{category}', [WebsiteController::class, 'category']);
    Route::get('/products/{agent}/{category}/{model}', [WebsiteController::class, 'model']);

    Route::get('/product-registration', [WebsiteController::class, 'create'])->name('registration.create');
    Route::post('/product-registration', [WebsiteController::class, 'store'])->name('registration.store');

});

Route::post('/lang-switch', [LanguageController::class, 'store'])->name('language.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

// Route::get('up', function () {
//     $directory = '/home/asdekfkk/public_html/images/';

//     $iterator = new RecursiveIteratorIterator(
//         new RecursiveDirectoryIterator($directory, RecursiveDirectoryIterator::SKIP_DOTS),
//         RecursiveIteratorIterator::SELF_FIRST
//     );

//     foreach ($iterator as $file) {
//         if ($file->isFile() && in_array(strtolower($file->getExtension()), ['jpeg','jpg', 'gif', 'png'])) {
//             $filename = $file->getFilename();
//             $filepath = $file->getPathName();
//             // Check if the file ends with _1 to _9 and if it has been added to the array
//             if (
//                 preg_match('/_(?:[1-9])\./', $filename) === 0 
//                 && str_contains($filename, 'large_')
//                 && !str_contains($file->getPathname(), '/old')) 
//             {
//                 $name = str_replace('large_', '', str_replace('.'.$file->getExtension(), '', $filename));
//                 $product = Product::where('model', $name)->where('published', 0)->first();
//                 if($product) {
//                     $product
//                         ->addMedia($filepath)
//                         ->preservingOriginal()
//                         ->withCustomProperties(['fav' => true])
//                         ->toMediaCollection('images');
//                     for ($i = 1; $i <= 9; $i++) {
//                         $new_path = rtrim($filepath, ".jpg") . "_{$i}.jpg";
//                         if(file_exists($new_path)) {
//                             $product
//                                 ->addMedia($new_path)
//                                 ->preservingOriginal()
//                                 ->toMediaCollection('images');
//                         }
//                     }
//                     $product->published = 1;
//                     $product->save();
//                 }
//             }
//         }
//     }

//     return $filepath ?? '';
// });

Route::get('test', function() {
    return new ProductResource(Product::where('id', 33)->first());
});

Route::group(["middleware" => ["auth"], "prefix" => "admin"], function () {
    Route::get("/", [SitecontentController::class, 'index']);

    Route::post("/reorder", [AdminController::class, "reorder"])->name("reorder");
    Route::post("/preorder", [AdminController::class, "preorder"])->name(
        "preorder"
    );
    Route::post("/delimg", [AdminController::class, "delimg"])->name("delimg");
    Route::post("/delimgpost", [AdminController::class, "delimgpost"])->name(
        "delimg_post"
    );
    Route::post("/upload/img", [AdminController::class, "upload_img"]);

    Route::resource("slider", SliderController::class);
    Route::resource("posts", PostController::class);
    Route::resource("sitecontent", SitecontentController::class);
    Route::resource("products", ProductController::class);
    Route::post("/wdelimg", [AdminController::class, "wdelimg"])->name("wdelimg");
    Route::post("/pdelimg", [AdminController::class, "pdelimg"])->name("pdelimg");
    Route::post("/favimg", [AdminController::class, "favimg"])->name("favimg");
    Route::get("/home-products", [AdminController::class, "home_products"])->name("home_products");
    Route::post("/home-products", [AdminController::class, "update_products"])->name("update_products");

    Route::resource("/pages", PageController::class);
    Route::get("/pages-video", [PageController::class, "video"])->name(
        "pages.video"
    );

    Route::resource("downloads", DownloadController::class);
    Route::resource("posts", PostController::class);
    Route::resource("distributors", DistributorController::class);

    Route::get("/feedbacks", [AdminController::class, "feedbacks"])->name(
        "feedbacks.index"
    );
});
