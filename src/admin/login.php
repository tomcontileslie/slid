<?php session_start();

include "utils.php";

// no point being here if they're logged in
if (is_logged_in()) {
    redirect("index.php");
}

// okay time to log them in
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (try_login($_POST["username"], $_POST["password"])) {
        redirect("index.php");
    } else {
        redirect("login.php?failed=1");
    }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <!-- STYLES !-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css" integrity="sha256-oiVjjd5Fuot9f/fgwH5IBBjsOA7TDdcfSK5I2EZ0zMw=" crossorigin="" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.8/sweetalert2.min.css" integrity="sha256-fzppLPp25b5mADxpqFQxFE3B7tqJZUmVELA0u42SUic=" crossorigin="" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- SCRIPTS !-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js" integrity="sha256-Ff9bGnIM3a8Yj4saIp6RH8xkb1rQZpHqoFw/6m08fgA=" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.8/sweetalert2.min.js" integrity="sha256-Z4BkI8Ze4gr38zEFLTgsqniinjcOKTEAsty3I18eyrA=" crossorigin=""></script>

    <script src="../js/common.js"></script>
    <script type="text/javascript">
      var USING_PHP = "<?php echo "TRUE" ?>" === "TRUE";

      //if (!USING_PHP) {
      //  window.location.replace("index.php");
      //}

      $(document).ready(function() {
        if (getParameterByName("failed") !== null) {
          swal("Error", "Incorrect username or password!", "error");
        } else if (getParameterByName("timeout") !== null) {
          swal("Timeout", "You have been logged out due to inactivity.", "warning");
        } else if (getParameterByName("logged_out") !== null) {
          swal("Logged out", "You have been logged out successfully.", "success");
        }
      });
    </script>

    <!-- MISC !-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>lid - login</title>
  </head>

  <body class="grey lighten-4">
    <div class="center-align">
      <h1 class="light-blue-text">lid</h1>
      <h5>Please login to continue.</h5>

      <div style="display: inline-block; padding-top: 0.8em">
        <form class="z-depth-2 white" method="post" action="login.php" style="padding: 1.5em 3em 0.8em;">
          <div class="row">
            <div class="input-field col s12">
              <input id="username" type="text" class="validate" name="username">
              <label for="username">Enter your username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" name="password">
              <label for="password">Enter your password</label>
            </div>
          </div>
          <div class="row">
            <button class="btn light-blue waves-effect waves-light" type="submit" name="action">
              <i class="material-icons left">send</i> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
