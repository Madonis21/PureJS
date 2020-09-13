function manageRoutes() {
  var htmlElem, xhttpobj;
  var pathname = window.location.pathname;
  var currentRoute = routes.filter((route) => route.path === pathname);
  var collection = document.getElementsByTagName("div");

  for (let elem of collection) {
    htmlElem = elem.getAttribute("include-html");
    if (htmlElem && htmlElem === currentRoute[0].component) {
      xhttpobj = new XMLHttpRequest();
      xhttpobj.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elem.innerHTML = this.responseText;
            callJSFile(htmlElem);
          }
          if (this.status == 404) {
            elem.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elem.removeAttribute("include-html");
          manageRoutes();
        }
      };
      xhttpobj.open("GET", htmlElem, true);
      xhttpobj.send();
      /* Exit the function: */
      return;
    }
  }
}

function includeScript(file) {
  var script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;
  document.getElementsByTagName("head").item(0).appendChild(script);
}

function callJSFile(file) {
  // Constructing JS File path
  var jsFile = file.split("/").slice(-1)[0].split(".")[0] + ".js";
  var jsFilePath = file.split("/");
  jsFilePath[jsFilePath.length - 1] = jsFile.toString();
  jsFilePath = jsFilePath.join("/");

  // including script tag in html
  includeScript(jsFilePath);
}

// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("include-html");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             elmnt.innerHTML = this.responseText;
//             callJSFile(file);
//           }
//           if (this.status == 404) {
//             elmnt.innerHTML = "Page not found.";
//           }
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("include-html");
//           includeHTML();
//         }
//       };
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
// }
manageRoutes();
// includeHTML();
