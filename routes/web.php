<?php


Auth::routes();

Route::group(["middlware" => ["auth"]],function(){
    Route::get('/{any}', function () {
        return view('index');
    })->where("any",".*");

});



