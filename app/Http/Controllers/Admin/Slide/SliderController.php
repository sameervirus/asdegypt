<?php

namespace App\Http\Controllers\Admin\Slide;

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('memory_limit', '2048M');

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Admin\Slide\Slider;
use App\Classes\Upload as UploadClass;

class SliderController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
    $slider = Slider::all();

    return view('admin.slide.slider', [
      'slider' => $slider
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {

    $order = Slider::max('sort');

    $order = $order + 1;

    $massage = '';

    $handle = new UploadClass($request->file('file'));

    if ($handle->uploaded) {
      $handle->image_resize         = true;
      $handle->image_ratio_x        = true;
      $handle->image_y              = 648;
      $handle->process('images/slider');

      if ($handle->processed) {
        $massage = 'Successfully Added';
        $file_name = $handle->file_dst_name;
        $handle->clean();
        $header = $caption = $header_ar = $caption_ar = '';
        if ($request->filled('header'))  $header = $request->header;
        if ($request->filled('header_ar'))  $header_ar = $request->header_ar;
        if ($request->filled('caption'))  $caption = $request->caption;
        if ($request->filled('caption_ar'))  $caption_ar = $request->caption_ar;

        Slider::create([
          'image' => $file_name,
          'header' => $header,
          'header_ar' => $header_ar,
          'caption' => $caption,
          'caption_ar' => $caption_ar,
          'sort' => $order
        ]);
      } else {
        $massage = 'error : ' . $handle->error;
      }
    }

    return back()->with('message', $massage);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $slider = Slider::findOrFail($id);

    $slider->header = $request->header;
    $slider->header_ar = $request->header_ar;
    $slider->caption = $request->caption;
    $slider->caption_ar = $request->caption_ar;

    if ($request->file('file')) {

      $handle = new UploadClass($request->file('file'));

      if ($handle->uploaded) {
        $handle->image_resize         = true;
        $handle->image_ratio_x        = true;
        $handle->image_y              = 648;
        $handle->process('images/slider');

        if ($handle->processed) {
          \File::delete('images/slider/' . $slider->image);
          $massage = 'ok';
          $slider->image = $handle->file_dst_name;
          $handle->clean();
        } else {
          $massage = 'error : ' . $handle->error;
        }
      }
    }

    $slider->save();

    $massage = 'Successfully Updated';

    return back()->with('message', $massage);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
    $slider = Slider::findOrFail($id);
    \File::delete('images/slider/' . $slider->image);
    Slider::findOrFail($id)->delete();

    return back()->with('message', 'Successfully Deleted!');
  }
}
