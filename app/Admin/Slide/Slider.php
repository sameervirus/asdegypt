<?php

namespace App\Admin\Slide;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    //
    protected $fillable = [
        'desktop_image', 'mobile_image', 'header', 'header_ar', 'caption', 'caption_ar', 'sort'
    ];
}