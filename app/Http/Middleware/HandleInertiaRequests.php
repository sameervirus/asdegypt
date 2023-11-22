<?php

namespace App\Http\Middleware;

use App\Admin\Product\Product;
use App\Admin\SiteContent\Sitecontent;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = App::getLocale();
        $site_content = Sitecontent::all();
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'site_content' => $site_content,
            'language' => fn () => translations(base_path('lang/' . app()->getLocale() . '.json')),
            'products' => ProductResource::collection(Product::orderBy('sort_order', 'asc')->groupBy('agent')->get()),
            'csrf' => csrf_token(),
            'locale' => fn () => app()->getLocale()
        ];
    }
}
