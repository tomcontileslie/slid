<?php

include "../utils.php";

// check if we've got a session going
if (session_id() == "") {
    session_start();
}

// check if they're logged in
if (isset($_SESSION["USERNAME"])) {
    // check last session time
    if (isset($_SESSION["LAST_ACTIVITY"]) && (time() - $_SESSION["LAST_ACTIVITY"] > 1800)) {
        // last request was more than 30 minutes ago so destroy the session
        session_unset();
        session_destroy();

        // now redirect
        redirect("index.php?timeout=1");
    }

    // check session creation time
    if (!isset($_SESSION["CREATED"])) {
        $_SESSION["CREATED"] = time();
    } else if (time() - $_SESSION["CREATED"] > 1800) {
        // change session ID for the current session and invalidate old session ID
        session_regenerate_id(true);
        $_SESSION["CREATED"] = time();
    }

    // update last activity time stamp
    $_SESSION["LAST_ACTIVITY"] = time();
} else {
    // they're not logged in so send them to go do that
    redirect("index.php");
}

die();
