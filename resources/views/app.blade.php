<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{app()->getLocale() == 'ar' ? 'rtl':'ltr'}}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'ASDEgypt') }}</title>

        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/' . \App\Admin\SiteContent\Sitecontent::where('code', 'favicon')->first()->content) }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/' . \App\Admin\SiteContent\Sitecontent::where('code', 'favicon')->first()->content) }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
