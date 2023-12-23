@extends('admin.admin')
 
@section('title', 'Site Content')

@section ('cssFiles')
    <style type="text/css">
      .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .inputfile + label {
          font-size: 1.25em;
          font-weight: 700;
          color: white;
          background-color: black;
          display: inline-block;
          padding: 0 20px;
      }

      .inputfile:focus + label,
      .inputfile + label:hover {
          background-color: red;
      }
      .inputfile + label {
        cursor: pointer; /* "hand" cursor */
      }
      .thumbnail .image {height: auto!important;}
      .favicon, .logo {height: 150px!important;}
    </style>
@endsection

@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3>Site Content <small></small></h3>
            </div>
            <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for...">
                        <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Go!</button>
                    </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>
        @if (session('message'))
            <div id="back-message" class="alert alert-success alert-dismissible fade in" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                <strong>Oh yeah!</strong> {{session('message')}}
             </div>
        @endif
        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
                </ul>
            </div>
        @endif
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Products <small></small></h2>
                        <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            </li>
                            <li><a class="close-link"><i class="fa fa-close"></i></a>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <form class="form-horizontal form-label-left">
                            <div class="form-group">
                                <label class="control-label col-md-3 col-sm-3 col-xs-12 text-right">Select Agent</label>
                                <div class="col-md-9 col-sm-9 col-xs-12">
                                  <select class="form-control" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                                    <option>Choose Agent</option>
                                    @foreach(\App\Admin\Product\Product::groupBy('agent')->select('agent')->get() as $agent)
                                    <option value="{{route('categories', ['agent' => $agent->agent])}}" {{ @$categories && $categories->first()->agent == $agent->agent ? 'selected' : '' }}>{{ \Str::title(str_replace('_', ' ', $agent->agent)) }}</option>
                                    @endforeach
                                  </select>
                                </div>
                            </div>
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
        @isset($categories)
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Main Website Content</h2>
                        <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>                                
                            </li>
                            <li><a class="close-link"><i class="fa fa-close"></i></a>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="x_panel">
                                <div class="x_title">
                                    <h2>Manage Category</h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <!-- Agent list table -->
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th>Agent Name</th>
                                            <th>Current Image</th>
                                            <th>Replace Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($categories as $category)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ Str::title(str_replace('_', ' ', $category->category))}}</td>
                                                <td>
                                                    @php
                                                        $imageUrl = '/images/' . $category->category . '.png';
                                                    @endphp
                                                    @if (file_exists(public_path($imageUrl)))
                                                        <img src="{{ asset($imageUrl) }}?v={{ time() }}" alt="Category Image" class="img-thumbnail">
                                                    @else
                                                        <img src="{{ asset('/images/250x250-Placeholder.png') }}" alt="Placeholder Image" class="img-thumbnail">
                                                    @endif
                                                </td>
                                                <td>
                                                    <button class="btn btn-primary" data-toggle="modal" data-target="#replaceImageModal" data-agent-id="{{$category->category}}">Replace Image</button>
                                                </td>
                                            </tr>
                                        @endforeach                                          
                                        </tbody>
                                    </table>

                                    <!-- Modal for image replacement -->
                                    <div class="modal fade" id="replaceImageModal" tabindex="-1" role="dialog" aria-labelledby="replaceImageModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="replaceImageModalLabel">Replace Image</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <!-- Form for image replacement -->
                                                <form action="/admin/agents" method="post" enctype="multipart/form-data">
                                                {{ csrf_field() }}
                                                <div class="form-group">
                                                    <label for="agentImage">New Image:</label>
                                                    <input type="file" accept="image/png, image/jpeg" class="form-control" id="agentImage" name="file">
                                                </div>
                                                <input type="hidden" id="agentIdInput" name="agent_name">
                                                <button type="submit" class="btn btn-primary">Upload Image</button>
                                                </form>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endisset
    </div>
</div>
@endsection

@section('jsFiles')
    
<script>
  // JavaScript to dynamically set the agent ID when the modal is shown
  $('#replaceImageModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var agentId = button.data('agent-id'); // Extract info from data-* attributes
      var modal = $(this);

      // Update the agent ID input in the modal form
      modal.find('#agentIdInput').val(agentId);
  });
</script>

@endsection
