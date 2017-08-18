<?php session_start();

include "../utils.php";

if (is_logged_in()) {
    // load existing data
    $data = $_POST["data"];
    $inp = get_with_backup();

    // modify existing data
    $tempArray = json_decode($inp);
    array_push($tempArray, json_decode($data));
    $jsonData = json_encode($tempArray, JSON_UNESCAPED_SLASHES);

    // save the modified data
    file_put_contents("../../misc/info.json", $jsonData);

    // tell the user we're done
    echo "SUCCESS";
} else {
    echo "CARD ADDITION FAILURE: You must be logged in!";
}

// and die
die();