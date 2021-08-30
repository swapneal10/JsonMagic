// JSON Magic Postman Template
const templateUrl = "https://github.com/swapneal10/JsonMagic/blob/1567d0a78b475dfcbe59f8d592cce55aa2c26185/postman-viz-jsonmagic-template.html"

// Load template
pm.sendRequest(templateUrl,  (_, res) => { 
    var template = res.text()
    var data = pm.response.json()
    pm.visualizer.set(template, data )
});
