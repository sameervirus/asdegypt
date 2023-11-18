<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'language' => ['required', 'string', 'max:2']
        ]);
        app()->setLocale($request->language);
        session(['locale' => $request->language]);

        return redirect()->back();
    }
}