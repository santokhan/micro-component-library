<?php

if ($_SERVER['REQUEST_URI']) {
    $path = $_SERVER['REQUEST_URI'];
    // $path =  '/library/components/accordion/default.html';
    require_once __DIR__.'/..'.$path.'.html';
}

function fetch($data){
    echo '<pre>';
    print_r($data);
    echo'</pre>';
}
?>