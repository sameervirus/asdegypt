<?php

namespace App\Http\Controllers;

use App\Admin\Slide\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;


class WebsiteController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'sliders' => Slider::all(),
        ]);
    }
}
