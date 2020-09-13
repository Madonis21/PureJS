var homeJSModule = 
    (
    function() {
        var _test = "javascript";

        var _shadow_template = document.getElementById('home-template-id');
        var _root = document.getElementById('root');
        // var _root_host = _root.attachShadow({mode: 'open'});
        var clone = _shadow_template.content.cloneNode(true);

        _root.appendChild(clone);


        return {
            handleChange: function() {
                        console.log("hello", _test);
            },
            loadAboutScreen: function() {
              window.location.pathname = '/about';
            }
        }
      }
    )();
