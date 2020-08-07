(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"colour") || (depth0 != null ? lookupProperty(depth0,"colour") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"colour","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":41}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"brightness") || (depth0 != null ? lookupProperty(depth0,"brightness") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"brightness","hash":{},"data":data,"loc":{"start":{"line":1,"column":67},"end":{"line":1,"column":81}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression(container.lambda(depth0, depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"size") : depth0),{"name":"with","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":84}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":54}}}) : helper)))
    + "; height: "
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":2,"column":64},"end":{"line":2,"column":74}}}) : helper)))
    + ";";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"style") || (depth0 != null ? lookupProperty(depth0,"style") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"style","hash":{},"data":data,"loc":{"start":{"line":2,"column":105},"end":{"line":2,"column":114}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0));
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card-image\">\n      "
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"with","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":87}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title")),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":181}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":6,"column":31},"end":{"line":6,"column":38}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"style") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":39},"end":{"line":6,"column":77}}})) != null ? stack1 : "")
    + ">";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"style") || (depth0 != null ? lookupProperty(depth0,"style") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"style","hash":{},"data":data,"loc":{"start":{"line":6,"column":60},"end":{"line":6,"column":69}}}) : helper)))
    + "\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"card-title "
    + alias2(alias1(((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"colour")), depth0))
    + "-text "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"brightness")),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":77},"end":{"line":7,"column":145}}})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"text")), depth0))
    + "</span>";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "text-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"brightness")), depth0));
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":21},"end":{"line":12,"column":166}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"with","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":34},"end":{"line":12,"column":159}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"card-title "
    + alias4(((helper = (helper = lookupProperty(helpers,"colour") || (depth0 != null ? lookupProperty(depth0,"colour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colour","hash":{},"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":83}}}) : helper)))
    + "-text "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"brightness") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":89},"end":{"line":12,"column":133}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":12,"column":135},"end":{"line":12,"column":143}}}) : helper)))
    + "</span>";
},"24":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "text-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"brightness") || (depth0 != null ? lookupProperty(depth0,"brightness") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"brightness","hash":{},"data":data,"loc":{"start":{"line":12,"column":112},"end":{"line":12,"column":126}}}) : helper)));
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"colour") || (depth0 != null ? lookupProperty(depth0,"colour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colour","hash":{},"data":data,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":41}}}) : helper)))
    + "-text "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"brightness") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":47},"end":{"line":13,"column":91}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":13,"column":93},"end":{"line":13,"column":103}}}) : helper))) != null ? stack1 : "")
    + "</p>";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card-action\">\n      "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"actions") : depth0)) != null ? lookupProperty(stack1,"urls") : stack1),{"name":"each","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":18,"column":37},"end":{"line":18,"column":44}}}) : helper)))
    + "\">\n        <span class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"colour")),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":21},"end":{"line":19,"column":82}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"brightness")),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":82},"end":{"line":19,"column":151}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":19,"column":153},"end":{"line":19,"column":161}}}) : helper)))
    + "</span>\n      </a>";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"colour")), depth0))
    + "-text";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " text-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"title"))) && lookupProperty(stack1,"brightness")), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"colour") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":48}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"brightness") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":88}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":88},"end":{"line":1,"column":120}}})) != null ? stack1 : "")
    + "\"\n     style=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"size") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":91}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"style") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":92},"end":{"line":2,"column":121}}})) != null ? stack1 : "")
    + "\"\n     data-name=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":16},"end":{"line":3,"column":50}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"card-content\">\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":177}}})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"with","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":116}}})) != null ? stack1 : "")
    + "\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"actions") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":22,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();