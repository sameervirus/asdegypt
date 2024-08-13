<div class="form-group">
    <label for="agent" class="col-md-2 control-label">Agent</label>
    <div class="col-md-5">
        <input type="text" class="form-control" list="agents" id="agent" name="agent" required placeholder="Choose Agent or add" value="{{ $item->agent ?? '' }}" {{ @$item && $item->agent ? 'disabled' : '' }} oninput="filterCategories(this.value)">
        <datalist id="agents">
            @foreach(\App\Admin\Product\Product::groupBy('agent')->select('agent')->get() as $agent)
                <option value="{{$agent->agent}}" {{ @$item && $item->agent == $agent->agent ? 'selected' : '' }} />
            @endforeach
        </datalist>
        <p class="form-helper">Ex: ITAL GARAGE = ital_garage</p>
    </div>
    <div class="col-md-5">
        <input type="text" class="form-control" name="agent_ar" required placeholder="الوكيل" value="{{ $item->agent_ar ?? '' }}" {{ @$item && $item->agent ? 'disabled' : '' }}>
    </div>
</div>

<div class="form-group">
    <label for="category" class="col-md-2 control-label">Category</label>
    <div class="col-md-5">
        <input type="text" class="form-control" list="categories" id="category" name="category" required placeholder="Choose Category" value="{{ $item->category ?? '' }}">
        <datalist id="categories">
            
        </datalist>
        <p class="form-helper">Ex: Carpet Cleaner = carpet_cleaner</p>
    </div>
    <div class="col-md-5">
        <input type="text" class="form-control" id="category_ar" name="category_ar" required placeholder="التصنيف" value="{{ $item->category_ar ?? '' }}">
    </div>
</div>

<div class="form-group">
    <label for="name" class="col-md-2 control-label">Model المنتج</label>

    <div class="col-md-5">
        <input id="name" type="text" class="form-control" name="model" required placeholder="Product Name" value="{{ $item->model ?? '' }}">
    </div>
    <div class="col-md-5">
        <input type="text" class="form-control" name="model_ar"  value="{{ $item->model_ar ?? '' }}" required placeholder="اسم المنتج بالعربي">

    </div>
</div>

<div class="form-group">
    <label for="description" class="col-md-2 control-label">Features المواصفات</label>

    <div class="col-md-5">
        <textarea type="text" name="features" id="description" class="form-control" row="4" placeholder="Features">{!! $item->features ?? '' !!}</textarea>
    </div>
    <div class="col-md-5">
        <textarea type="text" name="features_ar" class="form-control" row="4" placeholder="المواصفات">{!! $item->features_ar ?? '' !!}</textarea>
    </div>
</div>

<div class="form-group">
    <label for="technical_data" class="col-md-2 control-label">Technical Data المواصفات الفنية</label>

    <div class="col-md-5">
        <textarea type="text" name="technical_data" id="technical_data" class="form-control" row="4" placeholder="Technical Data">{!! $item->technical_data ?? '' !!}</textarea>
    </div>
    <div class="col-md-5">
        <textarea type="text" name="technical_data_ar" class="form-control" row="4" placeholder="المواصفات الفنية">{!! $item->technical_data_ar ?? '' !!}</textarea>
    </div>
</div>

<div class="form-group">
    <label for="accessories" class="col-md-2 control-label">Accessories الملحقات</label>

    <div class="col-md-5">
        <textarea type="text" name="accessories" id="accessories" class="form-control" row="4" placeholder="Accessories">{!! $item->accessories ?? '' !!}</textarea>
    </div>
    <div class="col-md-5">
        <textarea type="text" name="accessories_ar" class="form-control" row="4" placeholder="الملحقات">{!! $item->accessories_ar ?? '' !!}</textarea>
    </div>
</div>

<div class="form-group">
    <label for="optional" class="col-md-2 control-label">Optional الخيارات</label>

    <div class="col-md-5">
        <textarea type="text" name="optional" id="optional" class="form-control" row="4" placeholder="Optional">{!! $item->optional ?? '' !!}</textarea>
    </div>
    <div class="col-md-5">
        <textarea type="text" name="optional_ar" class="form-control" row="4" placeholder="الخيارات">{!! $item->optional_ar ?? '' !!}</textarea>
    </div>
</div>

<div class="form-group">
    <label for="tags" class="col-md-2 control-label">tags المجالات</label>

    <div class="col-md-10">
        <select class="form-control" id="tags" name="tags[]" multiple="multiple">
            @foreach(\App\Models\Tag::all() as $tag)
            <option value="{{$tag->id}}" {{in_array($tag->id, @$pt ?? []) ? 'selected' : ''}}>{{ $tag->name }}</option>
            @endforeach
        </select>
    </div>
</div>

<div class="form-group">
    <label for="data_sheet" class="col-md-2 control-label">Data Sheet التحميلات</label>

    <div class="col-md-10">
        <input id="data_sheet" type="file" class="form-control" 
        name="data_sheet" value="{{ $item->data_sheet ?? '' }}" placeholder="التحميلات">
    </div>
</div>

<div class="form-group{{ $errors->has('img') ? ' has-error' : '' }}">
    <label for="img" class="col-md-2 control-label">Product Images</label>
    
    <div class="col-md-10">
        <input id="img" type="file" class="form-control" name="file[]" value="" accept="image/*" multiple {{ @$item ? '' : 'required' }}>
        <p class="help-block">Use High resolution images</p>
    </div>
</div>