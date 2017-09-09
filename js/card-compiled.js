(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['card'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " "
      + container.escapeExpression(container.lambda((depth0 != null ? depth0.colour : depth0), depth0));
  },"3":function(container,depth0,helpers,partials,data) {
    return " "
      + container.escapeExpression(container.lambda((depth0 != null ? depth0.brightness : depth0), depth0));
  },"5":function(container,depth0,helpers,partials,data) {
    return " "
      + container.escapeExpression(container.lambda(depth0, depth0));
  },"7":function(container,depth0,helpers,partials,data) {
    var stack1;

    return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.size : depth0),{"name":"with","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  },"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

    return "width: "
      + alias2(alias1((depth0 != null ? depth0.width : depth0), depth0))
      + "; height: "
      + alias2(alias1((depth0 != null ? depth0.height : depth0), depth0))
      + ";";
  },"10":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.style : depth0), depth0));
  },"12":function(container,depth0,helpers,partials,data) {
    var stack1;

    return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.title : depth0)) != null ? stack1.text : stack1), depth0));
  },"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

    return "    <div class=\"card-image\">\r\n      "
      + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"with","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\r\n      "
      + ((stack1 = helpers["if"].call(alias1,((stack1 = (data && data.root)) && stack1.title),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\r\n    </div>\r\n";
  },"15":function(container,depth0,helpers,partials,data) {
    var stack1;

    return "<img src=\""
      + container.escapeExpression(container.lambda((depth0 != null ? depth0.src : depth0), depth0))
      + "\""
      + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.style : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + ">";
  },"16":function(container,depth0,helpers,partials,data) {
    return " style=\""
      + container.escapeExpression(container.lambda((depth0 != null ? depth0.style : depth0), depth0))
      + "\"";
  },"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

    return "<span class=\"card-title "
      + alias2(alias1(((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.colour), depth0))
      + "-text "
      + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.brightness),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\">"
      + alias2(alias1(((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.text), depth0))
      + "</span>";
  },"19":function(container,depth0,helpers,partials,data) {
    var stack1;

    return "text-"
      + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.brightness), depth0));
  },"21":function(container,depth0,helpers,partials,data) {
    var stack1;

    return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  },"22":function(container,depth0,helpers,partials,data) {
    var stack1;

    return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"with","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  },"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

    return "<span class=\"card-title "
      + alias2(alias1((depth0 != null ? depth0.colour : depth0), depth0))
      + "-text "
      + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.brightness : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\">"
      + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
      + "</span>";
  },"24":function(container,depth0,helpers,partials,data) {
    return "text-"
      + container.escapeExpression(container.lambda((depth0 != null ? depth0.brightness : depth0), depth0));
  },"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

    return "<p class=\""
      + alias2(alias1((depth0 != null ? depth0.colour : depth0), depth0))
      + "-text "
      + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.brightness : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\">"
      + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
      + "</p>";
  },"28":function(container,depth0,helpers,partials,data) {
    var stack1;

    return "    <div class=\"card-action\">\r\n      "
      + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.actions : depth0)) != null ? stack1.urls : stack1),{"name":"each","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\r\n    </div>\r\n";
  },"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

    return "<a href=\""
      + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
      + "\">\r\n        <span class=\""
      + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.colour),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.brightness),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\">"
      + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
      + "</span>\r\n      </a>";
  },"30":function(container,depth0,helpers,partials,data) {
    var stack1;

    return " "
      + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.colour), depth0))
      + "-text";
  },"32":function(container,depth0,helpers,partials,data) {
    var stack1;

    return " text-"
      + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.title)) && stack1.brightness), depth0));
  },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

    return "<div class=\"card"
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colour : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.brightness : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\"\r\n     style=\""
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.size : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + " "
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.style : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\"\r\n     data-name=\""
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\">\r\n"
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\r\n  <div class=\"card-content\">\r\n    "
      + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\r\n    "
      + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"with","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "\r\n  </div>\r\n\r\n"
      + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "</div>";
  },"useData":true});
})();