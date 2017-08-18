/**
 * Requires the inclusion of &lt;a id="downloadAnchorElem" style="display:none"&gt;&lt;/a&gt; in the html displayed
 * @param data the type of data to be downloaded (e.g. text/javascript)
 * @param filename the name of the file to download
 * @param content the content of the file to download
 */
function downloadFile(data, filename, content) {
  var dataStr = "data:" + data + ";charset=utf-8," + encodeURIComponent(content);
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", filename);
  dlAnchorElem.click();
}

/**
 * Gets a parameter from a url by it's name, or null if not found
 * @param name the name of the parameter
 * @param url the url to search in
 * @returns {*} the value of the parameter or null if not found
 */
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  url = url.toLowerCase(); // This is just to avoid case sensitiveness
  name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}