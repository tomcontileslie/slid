<?php session_start();

include "utils.php";

// delete the session
session_unset();
session_destroy();

// now redirect
redirect("login.php?logged_out=1");

die();