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

/**
 * Adds an option to a select dropdown
 * @param {HTMLSelectElement} select the select element
 * @param {string} key the text to be displayed in the option
 * @param value the value when submitted or 'key' if omitted
 */
function addOptionToSelect(select, key, value) {
  if (value == null) {
    value = key;
  }

  select.options.add(new Option(key, value));
}

/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, where each x is replaced with a random
 * hexadecimal digit from 0 to f, and y is replaced with a random hexadecimal digit from 8 to b.
 * @author https://gist.github.com/jed/982883
 * @param a placeholder
 * @returns {*} the uuid
 */
function uuidv4(a) {
  return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuidv4)
}

/**
 * Turns an undefined value to an empty string
 * @param val the value
 */
function undefinedToEmpty(val) {
  return val === undefined ? "" : val;
}