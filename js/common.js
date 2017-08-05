/**
 * Requires the inclusion of &lt;a id="downloadAnchorElem" style="display:none"&gt;&lt;/a&gt; in the html displayed
 */
function downloadFile(data, filename, content) {
  var dataStr = "data:" + data + ";charset=utf-8," + encodeURIComponent(content);
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", filename);
  dlAnchorElem.click();
}