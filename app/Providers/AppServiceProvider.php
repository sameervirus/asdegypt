<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        view()->composer('layouts.app', function ($view) {
            $locale = \App::getLocale();
            $site_content = \App\Admin\SiteContent\Sitecontent::where('lang', $locale)->pluck('content', 'code');
            $view->with('site_content', $site_content);
        });

        view()->composer('admin.side', function ($view) {
            $locale = \App::getLocale();
            $pages = \App\Admin\Pages\Page::all();
            $view->with('pages', $pages);
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
