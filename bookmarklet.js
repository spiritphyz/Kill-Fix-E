 javascript:(function() {var scrollPreventers = ['signup_wall_prevent_scroll', 'no-scroll']; var elements = document.querySelectorAll('body *'); for (var i = 0; i < elements.length; i += 1) {if (window.getComputedStyle(elements[i]).position === 'fixed') {elements[i].parentNode.removeChild(elements[i]); } } var overlays = document.querySelectorAll('div[id*=signup_wall_wrapper]'); for (var i = 0; i < overlays.length; i += 1) {overlays[i].parentNode.removeChild(overlays[i]); } scrollPreventers.forEach(function(className) {if (document.body.classList.contains(className)) {document.body.classList.remove(className); } }); } )();