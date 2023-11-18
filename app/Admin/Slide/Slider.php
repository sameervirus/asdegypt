<?php

namespace App\Admin\Slide;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    //
    protected $fillable = [
        'image','header','caption','header_ar','caption_ar','sort',
    ];
}
