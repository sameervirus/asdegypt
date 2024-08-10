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

    $message = '';

    // Handle Desktop Image
    $desktopFileName = '';
    if ($request->hasFile('desktop_image')) {
      $desktopFile = $request->file('desktop_image');
      $desktopHandle = new UploadClass($desktopFile);

      if ($desktopHandle->uploaded) {
        $desktopHandle->image_resize = true;
        $desktopHandle->image_ratio_x = true;
        $desktopHandle->image_y = 720;
        $desktopHandle->process('images/slider');

        if ($desktopHandle->processed) {
          $desktopFileName = $desktopHandle->file_dst_name;
          $desktopHandle->clean();
        } else {
          $message = 'Error processing desktop image: ' . $desktopHandle->error;
          return back()->with('message', $message);
        }
      } else {
        $message = 'No desktop image uploaded.';
        return back()->with('message', $message);
      }
    }

    // Handle Mobile Image
    $mobileFileName = '';
    if ($request->hasFile('mobile_image')) {
      $mobileFile = $request->file('mobile_image');
      $mobileHandle = new UploadClass($mobileFile);

      if ($mobileHandle->uploaded) {
        $mobileHandle->image_resize = true;
        $mobileHandle->image_ratio_y = true;
        $mobileHandle->image_x = 640;
        $mobileHandle->process('images/slider');

        if ($mobileHandle->processed) {
          $mobileFileName = $mobileHandle->file_dst_name;
          $mobileHandle->clean();
        } else {
          $message = 'Error processing mobile image: ' . $mobileHandle->error;
          return back()->with('message', $message);
        }
      } else {
        $message = 'No mobile image uploaded.';
        return back()->with('message', $message);
      }
    }

    // Default values if images are not uploaded
    $desktopFileName = $desktopFileName ?: null;
    $mobileFileName = $mobileFileName ?: null;

    // Get other data from the request
    $header = $request->filled('header') ? $request->header : '';
    $header_ar = $request->filled('header_ar') ? $request->header_ar : '';
    $caption = $request->filled('caption') ? $request->caption : '';
    $caption_ar = $request->filled('caption_ar') ? $request->caption_ar : '';

    // Create the slider
    Slider::create([
      'desktop_image' => $desktopFileName,
      'mobile_image' => $mobileFileName,
      'header' => $header,
      'header_ar' => $header_ar,
      'caption' => $caption,
      'caption_ar' => $caption_ar,
      'sort' => $order
    ]);

    $message = 'Successfully Added';
    return back()->with('message', $message);
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

    // Handle Desktop Image
    if ($request->file('desktop_image')) {
      $desktopHandle = new UploadClass($request->file('desktop_image'));

      if ($desktopHandle->uploaded) {
        $desktopHandle->image_resize = true;
        $desktopHandle->image_ratio_x = true;
        $desktopHandle->image_y = 648;
        $desktopHandle->process('images/slider');

        if ($desktopHandle->processed) {
          \File::delete('images/slider/' . $slider->desktop_image);
          $slider->desktop_image = $desktopHandle->file_dst_name;
          $desktopHandle->clean();
        } else {
          $message = 'Error processing desktop image: ' . $desktopHandle->error;
          return back()->with('message', $message);
        }
      }
    }

    // Handle Mobile Image
    if ($request->file('mobile_image')) {
      $mobileHandle = new UploadClass($request->file('mobile_image'));

      if ($mobileHandle->uploaded) {
        $mobileHandle->image_resize = true;
        $mobileHandle->image_ratio_y = true;
        $mobileHandle->image_x = 640;
        $mobileHandle->process('images/slider');

        if ($mobileHandle->processed) {
          \File::delete('images/slider/' . $slider->mobile_image);
          $slider->mobile_image = $mobileHandle->file_dst_name;
          $mobileHandle->clean();
        } else {
          $message = 'Error processing mobile image: ' . $mobileHandle->error;
          return back()->with('message', $message);
        }
      }
    }

    $slider->save();

    $message = 'Successfully Updated';

    return back()->with('message', $message);
  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $slider = Slider::findOrFail($id);

    // Delete desktop and mobile images
    \File::delete('images/slider/' . $slider->desktop_image);
    \File::delete('images/slider/' . $slider->mobile_image);

    // Delete the slider record from the database
    $slider->delete();

    return back()->with('message', 'Successfully Deleted!');
  }
}