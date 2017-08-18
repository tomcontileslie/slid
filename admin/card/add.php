<?php

include "../utils.php";

if (is_logged_in()) {
    // load existing data
    $data = $_POST["data"];
    $inp = file_get_contents("../../misc/info.json");

    // backup current data
    file_put_contents("../../misc/info.json.backup", $inp);

    // modify existing data
    $tempArray = json_decode($inp);
    array_push($tempArray, json_decode($data));
    $jsonData = json_encode($tempArray, JSON_UNESCAPED_SLASHES);

    // save the modified data
    file_put_contents("../../misc/info.json", $jsonData);

    // tell the user we're done
    echo "SUCCESS";
} else {
    echo "FAILURE:You must be logged in!";
}

// and die
die();