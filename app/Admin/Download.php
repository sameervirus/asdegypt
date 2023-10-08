<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Download extends Model implements HasMedia
{
	use InteractsWithMedia;

	protected $fillable = [
		'type', 'name', 'name_ar', 'description', 'description_ar', 'link', 'sort_order',
	];

	public function registerMediaCollections(): void
	{
		$this
			->addMediaCollection('download_img')
			->singleFile();
		$this
			->addMediaCollection('download_file')
			->singleFile();
	}
}
