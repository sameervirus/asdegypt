<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'accessories' => $this->accessories,
            'accessories_ar' => $this->accessories_ar,
            'agent' => $this->agent,
            'agent_ar' => $this->agent_ar,
            'category' => $this->category,
            'category_ar' => $this->category_ar,
            'data_sheet' => $this->data_sheet,
            'features' => $this->features,
            'features_ar' => $this->features_ar,
            'id' => $this->id,
            'model' => $this->model,
            'model_ar' => $this->model_ar,
            'optional' => $this->optional,
            'optional_ar' => $this->optional_ar,
            'published' => $this->published,
            'sort_order' => $this->sort_order,
            'technical_data' => $this->technical_data,
            'technical_data_ar' => $this->technical_data_ar,
            'tags' => $this->tags,
            'fav_image' => optional($this->getMedia('images')->where('custom_properties.fav', true)->first())->getUrl(),
            'fav_image_thumbnail' => optional($this->getMedia('images')->where('custom_properties.fav', true)->first())->getUrl('thumb'),
            'images' => ProductImagesResource::collection($this->getMedia('images'))
        ];
    }
}
