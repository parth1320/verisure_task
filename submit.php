<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //form data
    $postalCode = $_POST["postalCode"];
    $phoneNumber = $_POST["phoneNumber"];



    $data = array(
        "api_key"=>"1234",
        "country_code"=>'DE',
        "web_campaign" => "Test-Funnel-build",
        "phone" => $phoneNumber,
        "postalcode" => $postalCode,
    );

    $jsonData = json_encode($data);

    $apiUrl = "https://www.verisure.de/api/maia-pro/lead/post/";

    $ch = curl_init($apiUrl);

    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Error: ' . curl_error($ch);
    }

    curl_close($ch);

    echo $response;

}
?>
