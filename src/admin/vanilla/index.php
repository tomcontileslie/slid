<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- STYLES !-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css" integrity="sha256-oiVjjd5Fuot9f/fgwH5IBBjsOA7TDdcfSK5I2EZ0zMw=" crossorigin="" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="stylesheet" href="../../css/style.css">

    <!-- SCRIPTS !-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.runtime.min.js" integrity="sha256-PGAt5UMOl8/WYTv2mCI/uKmVbQBP6VP++Jp8coXnxjY=" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js" integrity="sha256-Ff9bGnIM3a8Yj4saIp6RH8xkb1rQZpHqoFw/6m08fgA=" crossorigin=""></script>

    <script type="text/javascript">
      var USING_PHP = "<?php echo "TRUE" ?>" === "TRUE";
      var FS_ACCESS = "<?php echo (is_writable("../misc/info.json") ? "TRUE" : "") ?>" === "TRUE";
    </script>
    <script src="../../js/common.js" type="text/javascript"></script>
    <script src="../../js/vanilla-modifier.js" type="text/javascript"></script>
    <script src="../../js/admin.js" type="text/javascript"></script>
    <script src="../../js/card-compiled.js" type="text/javascript"></script>

    <!-- MISC !-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <base target="_blank">

    <title>lid - admin</title>
  </head>
  <body>
    <nav>
      <div class="nav-wrapper valign-wrapper cyan">
        <a href="#" class="brand-logo center">lid admin</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="../../index.html" title="Home">Home</a></li>
          <li><a href="https://github.com/Kezz101/lid/issues" title="Bugs">Bugs</a></li>
          <li><a href="https://github.com/Kezz101/lid" title="Source">Source</a></li>
        </ul>
        <a href="#" data-activates="side-nav" class="button-collapse left"><i class="material-icons">menu</i></a>
        <ul id="side-nav" class="side-nav">
          <li><a href="../../index.html"><i class="material-icons left">home</i>Home</a></li>
          <li><a href="https://github.com/Kezz101/lid/issues"><i class="material-icons left">bug_report</i>Bugs</a></li>
          <li><a href="https://github.com/Kezz101/lid"><i class="material-icons left">code</i>Source</a></li>
        </ul>
      </div>
    </nav>

    <div class="row container">
      <div class="col s12 m9 l10">
        <div id="status" class="section scrollspy">
          <h4>Status</h4>
          <div class="row">
            <div class="col s4 center-align">
              <i id="status_php" class="large material-icons">help_outline</i>
              <h5>PHP</h5>
              <span>
                Using PHP will enable automatic card editing without the need for constant uploading and downloading.
                PHP is also essential for advanced access control.
              </span>
            </div>
            <div class="col s4 center-align" id="status_cors_block" style="display: none">
              <i id="status_cors" class="large material-icons">help_outline</i>
              <h5>CORS</h5>
              <span>
                Without PHP lid can't access the information database unless you prevent your web browser from using
                the Cross-Origin Resource Sharing mechanism.
              </span>
            </div>
            <div class="col s4 center-align" id="status_fs_block" style="display: none;">
              <i id="status_fs" class="large material-icons">help_outline</i>
              <h5>Filesystem</h5>
              <span>
                Without access to the filesystem, lid can't use PHP to automatically edit the information database.
              </span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div id="add" class="section scrollspy">
          <h4>Add Card</h4>
          <div class="row">
            <form id="add-form" class="col s12 m12 l6" action="javascript:void(0);" onsubmit="return addCardSubmit();">
              <div class="input-field col s6">
                <select id="add-colour" class="icons select-colour" data-brightness="add-brightness">
                  <option value="" selected>Transparent</option>
                  <option value="red" data-icon="../img/colours/transparent.png" class="red left circle">Red</option>
                  <option value="pink" data-icon="../img/colours/transparent.png" class="pink left circle">Pink</option>
                  <option value="purple" data-icon="../img/colours/transparent.png" class="purple left circle">Purple</option>
                  <option value="deep-purple" data-icon="../img/colours/transparent.png" class="deep-purple left circle">Deep Purple</option>
                  <option value="indigo" data-icon="../img/colours/transparent.png" class="indigo left circle">Indigo</option>
                  <option value="blue" data-icon="../img/colours/transparent.png" class="blue left circle">Blue</option>
                  <option value="cyan" data-icon="../img/colours/transparent.png" class="cyan left circle">Cyan</option>
                  <option value="teal" data-icon="../img/colours/transparent.png" class="teal left circle">Teal</option>
                  <option value="green" data-icon="../img/colours/transparent.png" class="green left circle">Green</option>
                  <option value="light-green" data-icon="../img/colours/transparent.png" class="light-green left circle">Light Green</option>
                  <option value="lime" data-icon="../img/colours/transparent.png" class="lime left circle">Lime</option>
                  <option value="yellow" data-icon="../img/colours/transparent.png" class="yellow left circle">Yellow</option>
                  <option value="amber" data-icon="../img/colours/transparent.png" class="amber left circle">Amber</option>
                  <option value="orange" data-icon="../img/colours/transparent.png" class="orange left circle">Orange</option>
                  <option value="deep-orange" data-icon="../img/colours/transparent.png" class="deep-orange left circle">Deep Orange</option>
                  <option value="brown" data-icon="../img/colours/transparent.png" class="brown left circle">Brown</option>
                  <option value="grey" data-icon="../img/colours/transparent.png" class="grey left circle">Gray</option>
                  <option value="blue-grey" data-icon="../img/colours/transparent.png" class="blue-grey left circle">Blue Gray</option>
                  <option value="black" data-icon="../img/colours/transparent.png" class="black left circle">Black</option>
                  <option value="white" data-icon="../img/colours/transparent.png" class="white left circle">White</option>
                </select>
                <label for="add-colour">Background colour</label>
              </div>
              <div class="input-field col s6">
                <select id="add-brightness" class="icons">
                  <option value="" selected>Default</option>
                  <optgroup label="Lighten">
                    <option value="lighten-1" data-icon="../img/colours/transparent.png" class="lighten-1 left circle" data-prev="">1</option>
                    <option value="lighten-2" data-icon="../img/colours/transparent.png" class="lighten-2 left circle" data-prev="">2</option>
                    <option value="lighten-3" data-icon="../img/colours/transparent.png" class="lighten-3 left circle" data-prev="">3</option>
                    <option value="lighten-4" data-icon="../img/colours/transparent.png" class="lighten-4 left circle" data-prev="">4</option>
                    <option value="lighten-5" data-icon="../img/colours/transparent.png" class="lighten-5 left circle" data-prev="">5</option>
                  </optgroup>
                  <optgroup label="Darken">
                    <option value="darken-1" data-icon="../img/colours/transparent.png" class="darken-1 left circle" data-prev="">1</option>
                    <option value="darken-2" data-icon="../img/colours/transparent.png" class="darken-2 left circle" data-prev="">2</option>
                    <option value="darken-3" data-icon="../img/colours/transparent.png" class="darken-3 left circle" data-prev="">3</option>
                    <option value="darken-4" data-icon="../img/colours/transparent.png" class="darken-4 left circle" data-prev="">4</option>
                  </optgroup>
                  <optgroup id="add-brightness-accent" label="Accent">
                    <option value="accent-1" data-icon="../img/colours/transparent.png" class="accent-1 left circle" data-prev="">1</option>
                    <option value="accent-2" data-icon="../img/colours/transparent.png" class="accent-2 left circle" data-prev="">2</option>
                    <option value="accent-3" data-icon="../img/colours/transparent.png" class="accent-3 left circle" data-prev="">3</option>
                    <option value="accent-4" data-icon="../img/colours/transparent.png" class="accent-4 left circle" data-prev="">4</option>
                  </optgroup>
                </select>
                <label for="add-brightness">Background brightness</label>
              </div>
              <div class="input-field col s12">
                <div id="add-tags"></div>
                <label>Tags</label>
              </div>
              <div class="input-field col s6">
                <select id="add-title-colour" class="icons select-colour" data-brightness="add-title-brightness">
                  <option value="red" data-icon="../img/colours/transparent.png" class="red left circle">Red</option>
                  <option value="pink" data-icon="../img/colours/transparent.png" class="pink left circle">Pink</option>
                  <option value="purple" data-icon="../img/colours/transparent.png" class="purple left circle">Purple</option>
                  <option value="deep-purple" data-icon="../img/colours/transparent.png" class="deep-purple left circle">Deep Purple</option>
                  <option value="indigo" data-icon="../img/colours/transparent.png" class="indigo left circle">Indigo</option>
                  <option value="blue" data-icon="../img/colours/transparent.png" class="blue left circle">Blue</option>
                  <option value="cyan" data-icon="../img/colours/transparent.png" class="cyan left circle">Cyan</option>
                  <option value="teal" data-icon="../img/colours/transparent.png" class="teal left circle">Teal</option>
                  <option value="green" data-icon="../img/colours/transparent.png" class="green left circle">Green</option>
                  <option value="light-green" data-icon="../img/colours/transparent.png" class="light-green left circle">Light Green</option>
                  <option value="lime" data-icon="../img/colours/transparent.png" class="lime left circle">Lime</option>
                  <option value="yellow" data-icon="../img/colours/transparent.png" class="yellow left circle">Yellow</option>
                  <option value="amber" data-icon="../img/colours/transparent.png" class="amber left circle">Amber</option>
                  <option value="orange" data-icon="../img/colours/transparent.png" class="orange left circle">Orange</option>
                  <option value="deep-orange" data-icon="../img/colours/transparent.png" class="deep-orange left circle">Deep Orange</option>
                  <option value="brown" data-icon="../img/colours/transparent.png" class="brown left circle">Brown</option>
                  <option value="grey" data-icon="../img/colours/transparent.png" class="grey left circle">Gray</option>
                  <option value="blue-grey" data-icon="../img/colours/transparent.png" class="blue-grey left circle">Blue Gray</option>
                  <option value="black" data-icon="../img/colours/transparent.png" class="black left circle" selected="">Black</option>
                  <option value="white" data-icon="../img/colours/transparent.png" class="white left circle">White</option>
                </select>
                <label for="add-title-colour">Title text colour</label>
              </div>
              <div class="input-field col s6">
                <select id="add-title-brightness" class="icons">
                  <option value="" selected>Default</option>
                  <optgroup label="Lighten">
                    <option value="lighten-1" data-icon="../img/colours/transparent.png" class="lighten-1 left circle" data-prev="">1</option>
                    <option value="lighten-2" data-icon="../img/colours/transparent.png" class="lighten-2 left circle" data-prev="">2</option>
                    <option value="lighten-3" data-icon="../img/colours/transparent.png" class="lighten-3 left circle" data-prev="">3</option>
                    <option value="lighten-4" data-icon="../img/colours/transparent.png" class="lighten-4 left circle" data-prev="">4</option>
                    <option value="lighten-5" data-icon="../img/colours/transparent.png" class="lighten-5 left circle" data-prev="">5</option>
                  </optgroup>
                  <optgroup label="Darken">
                    <option value="darken-1" data-icon="../img/colours/transparent.png" class="darken-1 left circle" data-prev="">1</option>
                    <option value="darken-2" data-icon="../img/colours/transparent.png" class="darken-2 left circle" data-prev="">2</option>
                    <option value="darken-3" data-icon="../img/colours/transparent.png" class="darken-3 left circle" data-prev="">3</option>
                    <option value="darken-4" data-icon="../img/colours/transparent.png" class="darken-4 left circle" data-prev="">4</option>
                  </optgroup>
                  <optgroup id="add-title-brightness-accent" label="Accent">
                    <option value="accent-1" data-icon="../img/colours/transparent.png" class="accent-1 left circle" data-prev="">1</option>
                    <option value="accent-2" data-icon="../img/colours/transparent.png" class="accent-2 left circle" data-prev="">2</option>
                    <option value="accent-3" data-icon="../img/colours/transparent.png" class="accent-3 left circle" data-prev="">3</option>
                    <option value="accent-4" data-icon="../img/colours/transparent.png" class="accent-4 left circle" data-prev="">4</option>
                  </optgroup>
                </select>
                <label for="add-title-brightness">Title text brightness</label>
              </div>
              <div class="input-field col s6">
                <input id="add-title" type="text">
                <label for="add-title">Title</label>
              </div>
              <div class="col s3">
                <label class="switch-header">Image header</label>
                <div class="switch" style="padding-top: 7px">
                  <label>
                    <input id="add-image" type="checkbox">
                    <span class="lever"></span>
                  </label>
                </div>
              </div>
              <div class="col s3">
                <label class="switch-header">Advanced settings</label>
                <div class="switch" style="padding-top: 7px;">
                  <label>
                    <input id="add-adv" type="checkbox">
                    <span class="lever"></span>
                  </label>
                </div>
              </div>
              <div class="row" style="margin-bottom: 0 !important;"></div>
              <div class="img-hide input-field col s12" style="display: none;">
                <input id="add-img" type="url">
                <label for="add-img">Image URL</label>
              </div>
              <div class="input-field col s6">
                <select id="add-desc-colour" class="icons select-colour" data-brightness="add-desc-brightness">
                  <option value="red" data-icon="../img/colours/transparent.png" class="red left circle">Red</option>
                  <option value="pink" data-icon="../img/colours/transparent.png" class="pink left circle">Pink</option>
                  <option value="purple" data-icon="../img/colours/transparent.png" class="purple left circle">Purple</option>
                  <option value="deep-purple" data-icon="../img/colours/transparent.png" class="deep-purple left circle">Deep Purple</option>
                  <option value="indigo" data-icon="../img/colours/transparent.png" class="indigo left circle">Indigo</option>
                  <option value="blue" data-icon="../img/colours/transparent.png" class="blue left circle">Blue</option>
                  <option value="cyan" data-icon="../img/colours/transparent.png" class="cyan left circle">Cyan</option>
                  <option value="teal" data-icon="../img/colours/transparent.png" class="teal left circle">Teal</option>
                  <option value="green" data-icon="../img/colours/transparent.png" class="green left circle">Green</option>
                  <option value="light-green" data-icon="../img/colours/transparent.png" class="light-green left circle">Light Green</option>
                  <option value="lime" data-icon="../img/colours/transparent.png" class="lime left circle">Lime</option>
                  <option value="yellow" data-icon="../img/colours/transparent.png" class="yellow left circle">Yellow</option>
                  <option value="amber" data-icon="../img/colours/transparent.png" class="amber left circle">Amber</option>
                  <option value="orange" data-icon="../img/colours/transparent.png" class="orange left circle">Orange</option>
                  <option value="deep-orange" data-icon="../img/colours/transparent.png" class="deep-orange left circle">Deep Orange</option>
                  <option value="brown" data-icon="../img/colours/transparent.png" class="brown left circle">Brown</option>
                  <option value="grey" data-icon="../img/colours/transparent.png" class="grey left circle">Gray</option>
                  <option value="blue-grey" data-icon="../img/colours/transparent.png" class="blue-grey left circle">Blue Gray</option>
                  <option value="black" data-icon="../img/colours/transparent.png" class="black left circle" selected>Black</option>
                  <option value="white" data-icon="../img/colours/transparent.png" class="white left circle">White</option>
                </select>
                <label for="add-desc-colour">Description text colour</label>
              </div>
              <div class="input-field col s6">
                <select id="add-desc-brightness" class="icons">
                  <option value="" selected>Default</option>
                  <optgroup label="Lighten">
                    <option value="lighten-1" data-icon="../img/colours/transparent.png" class="lighten-1 left circle" data-prev="">1</option>
                    <option value="lighten-2" data-icon="../img/colours/transparent.png" class="lighten-2 left circle" data-prev="">2</option>
                    <option value="lighten-3" data-icon="../img/colours/transparent.png" class="lighten-3 left circle" data-prev="">3</option>
                    <option value="lighten-4" data-icon="../img/colours/transparent.png" class="lighten-4 left circle" data-prev="">4</option>
                    <option value="lighten-5" data-icon="../img/colours/transparent.png" class="lighten-5 left circle" data-prev="">5</option>
                  </optgroup>
                  <optgroup label="Darken">
                    <option value="darken-1" data-icon="../img/colours/transparent.png" class="darken-1 left circle" data-prev="">1</option>
                    <option value="darken-2" data-icon="../img/colours/transparent.png" class="darken-2 left circle" data-prev="">2</option>
                    <option value="darken-3" data-icon="../img/colours/transparent.png" class="darken-3 left circle" data-prev="">3</option>
                    <option value="darken-4" data-icon="../img/colours/transparent.png" class="darken-4 left circle" data-prev="">4</option>
                  </optgroup>
                  <optgroup id="add-desc-brightness-accent" label="Accent">
                    <option value="accent-1" data-icon="../img/colours/transparent.png" class="accent-1 left circle" data-prev="">1</option>
                    <option value="accent-2" data-icon="../img/colours/transparent.png" class="accent-2 left circle" data-prev="">2</option>
                    <option value="accent-3" data-icon="../img/colours/transparent.png" class="accent-3 left circle" data-prev="">3</option>
                    <option value="accent-4" data-icon="../img/colours/transparent.png" class="accent-4 left circle" data-prev="">4</option>
                  </optgroup>
                </select>
                <label for="add-desc-brightness">Description text brightness</label>
              </div>
              <div class="input-field col s12">
                <textarea id="add-desc" class="materialize-textarea"></textarea>
                <label for="add-desc">Description</label>
              </div>
              <div id="add-chips" class="col s12"></div>
              <div class="col s5 input-field">
                <input id="add-chip-title" type="text">
                <label for="add-chip-title">Action title</label>
              </div>
              <div class="col s5 input-field">
                <input id="add-chip-url" type="text">
                <label for="add-chip-url">Action URL</label>
              </div>
              <div class="col s2 " style="padding-top: 7px;">
                <a id="add-chip" class="waves-effect waves-light btn cyan darken-2 disabled">Add</a>
              </div>
              <div id="add-adv-hide" style="display: none;">
                <div class="input-field col s12">
                  <input id="add-style" type="text">
                  <label for="add-style">Card CSS</label>
                </div>
                <div class="input-field col s12 img-hide" style="display: none;">
                  <input id="add-img-style" type="text">
                  <label for="add-img-style">Image CSS</label>
                </div>
              </div>
              <button class="btn waves-effect waves-light cyan darken-2" id="add-submit" type="submit">
                Add Card
              </button>
            </form>
            <div class="col s12 m12 l6">
              <div id="add-preview"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col hide-on-small-only m3 l2">
        <ul class="section table-of-contents">
          <li><a href="#status">Status</a></li>
          <li><a href="#add">Add Card</a></li>
        </ul>
      </div>
    </div>

    <a id="downloadAnchorElem" style="display:none"></a>
  </body>
</html>