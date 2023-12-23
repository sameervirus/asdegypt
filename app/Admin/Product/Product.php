<?php

namespace App\Admin\Product;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use InteractsWithMedia;

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(248)
            ->height(217);
    }

    public function tags() {
        return $this->belongsToMany(Tag::class);
    }

    public $timestamps = false;

    //
    protected $guarded = [];
}
