<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //form data
    $postalCode = $_POST["postalCode"];
    $phoneNumber = $_POST["phoneNumber"];

    echo "Form Data:<br>";
    echo "Postal Code: $postalCode<br>";
    echo "Phone Number: $phoneNumber<br>";
}
?>