<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DistributorController;
use App\Http\Controllers\Admin\DownloadController;
use App\Http\Controllers\Admin\Pages\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\Product\PproductController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Admin\Product\WproductController;
use App\Http\Controllers\Admin\SiteContent\SitecontentController;
use App\Http\Controllers\Admin\Slide\SliderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Foundation\Application;
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

Route::get('/', [WebsiteController::class, 'index']);
Route::get('/about', [WebsiteController::class, 'about']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


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
    Route::resource("wproducts", WproductController::class);
    Route::resource("pproducts", PproductController::class);
    Route::post("/wdelimg", [AdminController::class, "wdelimg"])->name("wdelimg");
    Route::post("/pdelimg", [AdminController::class, "pdelimg"])->name("pdelimg");

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
