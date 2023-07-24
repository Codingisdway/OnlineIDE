<?php
    $language=strtolower($_POST['language']);
    $code=$_POST['code'];
    $random=substr(md5(mt_rand()),0,7);
    $filepath="temp/" . $random . "." . $language;
    $programFile=fopen($filepath,"w");
    fwrite($programFile,$code);
    fclose($programFile);

    if($language=="php"){
        $output=shell_exec()
    }