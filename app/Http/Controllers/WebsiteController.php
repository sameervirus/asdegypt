<?php

namespace App\Http\Controllers;

use App\Admin\Pages\Page;
use App\Admin\SiteContent\Sitecontent;
use App\Admin\Slide\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;


class WebsiteController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'sliders' => Slider::all(),
            'pages' => Page::all()
        ]);
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function contacts()
    {
        $locale = App::getLocale();
            $site_content = Sitecontent::where('lang', $locale)->pluck('content', 'code');
        return Inertia::render('Contacts', [
            'data' => $site_content
        ]);
    }
}
