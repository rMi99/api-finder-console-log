function injectScript() {
   
    var scriptElements = document.getElementsByTagName('script');
    
    for (var i = 0; i < scriptElements.length; i++) {
        var script = scriptElements[i];
  
        console.log(script.src); 
        
        // If you want to inject a new script programmatically, you can do so like this:
        // var newScript = document.createElement('script');
        // newScript.src = 'path_to_your_script.js';
        // document.head.appendChild(newScript);
    }
}

injectScript();
