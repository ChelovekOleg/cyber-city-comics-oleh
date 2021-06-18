<?php

$num = $_GET["num"];

if($num > 0){
    $url = "https://xkcd.com/".$num ."/info.0.json";
}else{
    $url = "https://xkcd.com/info.0.json";
}


$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);


$resp = curl_exec($curl);
curl_close($curl);
header('Content-Type: application/json');
echo json_encode($resp);