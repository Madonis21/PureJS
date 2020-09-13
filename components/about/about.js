var aboutModule = (function() {
    var _test = "about";

    var _shadow_template = document.getElementById('about-template-id');
    var _root = document.getElementById('root');
    // var _root_host = _root.attachShadow({mode: 'open'});
    var clone = _shadow_template.content.cloneNode(true);

    _root.appendChild(clone);

    return {
            handleChange: function() {
                        console.log("about", _test);
            }
    }
})();
