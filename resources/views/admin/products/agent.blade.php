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
                        <h2>Main Website Content <small>after make your changes press save change buttom to take active</small></h2>
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
                        @if(true)
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="x_panel">
                                <div class="x_title">
                                    <h2>Manage Agents</h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <!-- Agent list table -->
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>Agent ID</th>
                                            <th>Agent Name</th>
                                            <th>Current Image</th>
                                            <th>Replace Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach(\App\Admin\Product\Product::groupBy('agent')->get() as $agent)
                                            <tr>
                                            <td>1</td>
                                            <td>{{ str_replace('_', ' ', $agent->agent)}}</td>
                                            <td><img src="{{'/images/' . $agent->agent . '.png'}}?v={{ time() }}" alt="Agent 1 Image" class="img-thumbnail"></td>
                                            <td><button class="btn btn-primary" data-toggle="modal" data-target="#replaceImageModal" data-agent-id="{{$agent->agent}}">Replace Image</button></td>
                                            </tr>
                                            @endforeach                                            
                                        </tbody>
                                    </table>

                                    <!-- Modal for image replacement -->
                                    <div class="modal fade" id="replaceImageModal" tabindex="-1" role="dialog" aria-labelledby="replaceImageModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="replaceImageModalLabel">Replace Agent Image</h5>
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
                                                    <input type="file" class="form-control" id="agentImage" name="file">
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

                        @endif
                    </div>
                </div>
            </div>
        </div>
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
