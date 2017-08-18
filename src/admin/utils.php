<?php session_start();

$GLOBALS["CONFIG"] = include('config.php');

/**
 * Redirects the user to another url
 * @param string $url the url to redirect to
 * @param int $statusCode optional status code, defaults to 302
 */
function redirect($url, $statusCode = 302) {
    header('Location: ' . $url, true, $statusCode);
    die();
}

/**
 * Checks if the current user is logged in
 * @return bool true if logged in
 */
function is_logged_in() {
    return isset($_SESSION["USERNAME"]);
}

/**
 * Tries to login as the specified user
 * @param string $username the desired username
 * @param string $password the desired password
 * @return bool true if login was successful, false otherwise
 */
function try_login($username, $password) {
    // try match default admin login
    if ($GLOBALS["CONFIG"]->admin_enabled &&
        $username === $GLOBALS["CONFIG"]->admin_username &&
        $password === $GLOBALS["CONFIG"]->admin_password) {

        login_as($username);
        return true;
    }

    // todo space for mysql checking here

    return false;
}

/**
 * Logs in as the specified user. Note, this <b>does not</b> check for password
 * equality or even if the user exists. Use {@link try_login} instead.
 * @param string $username the desired username
 */
function login_as($username) {
    // todo we really should check for username validity at least
    $_SESSION["USERNAME"] = $username;
}
