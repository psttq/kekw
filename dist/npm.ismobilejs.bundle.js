"use strict";
(self["webpackChunkkekw"] = self["webpackChunkkekw"] || []).push([["npm.ismobilejs"],{

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmlzbW9iaWxlanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ1U7QUFDckM7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tla3cvLi9ub2RlX21vZHVsZXMvaXNtb2JpbGVqcy9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8va2Vrdy8uL25vZGVfbW9kdWxlcy9pc21vYmlsZWpzL2VzbS9pc01vYmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2lzTW9iaWxlJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2lzTW9iaWxlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBhcHBsZUlwaG9uZSA9IC9pUGhvbmUvaTtcbnZhciBhcHBsZUlwb2QgPSAvaVBvZC9pO1xudmFyIGFwcGxlVGFibGV0ID0gL2lQYWQvaTtcbnZhciBhcHBsZVVuaXZlcnNhbCA9IC9cXGJpT1MtdW5pdmVyc2FsKD86LispTWFjXFxiL2k7XG52YXIgYW5kcm9pZFBob25lID0gL1xcYkFuZHJvaWQoPzouKylNb2JpbGVcXGIvaTtcbnZhciBhbmRyb2lkVGFibGV0ID0gL0FuZHJvaWQvaTtcbnZhciBhbWF6b25QaG9uZSA9IC8oPzpTRDQ5MzBVUnxcXGJTaWxrKD86LispTW9iaWxlXFxiKS9pO1xudmFyIGFtYXpvblRhYmxldCA9IC9TaWxrL2k7XG52YXIgd2luZG93c1Bob25lID0gL1dpbmRvd3MgUGhvbmUvaTtcbnZhciB3aW5kb3dzVGFibGV0ID0gL1xcYldpbmRvd3MoPzouKylBUk1cXGIvaTtcbnZhciBvdGhlckJsYWNrQmVycnkgPSAvQmxhY2tCZXJyeS9pO1xudmFyIG90aGVyQmxhY2tCZXJyeTEwID0gL0JCMTAvaTtcbnZhciBvdGhlck9wZXJhID0gL09wZXJhIE1pbmkvaTtcbnZhciBvdGhlckNocm9tZSA9IC9cXGIoQ3JpT1N8Q2hyb21lKSg/Oi4rKU1vYmlsZS9pO1xudmFyIG90aGVyRmlyZWZveCA9IC9Nb2JpbGUoPzouKylGaXJlZm94XFxiL2k7XG52YXIgaXNBcHBsZVRhYmxldE9uSW9zMTMgPSBmdW5jdGlvbiAobmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiZcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSAmJlxuICAgICAgICB0eXBlb2YgTVNTdHJlYW0gPT09ICd1bmRlZmluZWQnKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVNYXRjaCh1c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZ2V4KSB7IHJldHVybiByZWdleC50ZXN0KHVzZXJBZ2VudCk7IH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vYmlsZShwYXJhbSkge1xuICAgIHZhciBuYXYgPSB7XG4gICAgICAgIHVzZXJBZ2VudDogJycsXG4gICAgICAgIHBsYXRmb3JtOiAnJyxcbiAgICAgICAgbWF4VG91Y2hQb2ludHM6IDBcbiAgICB9O1xuICAgIGlmICghcGFyYW0gJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmF2ID0ge1xuICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgcGxhdGZvcm06IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgICAgICAgICAgIG1heFRvdWNoUG9pbnRzOiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdi51c2VyQWdlbnQgPSBwYXJhbTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyYW0gJiYgcGFyYW0udXNlckFnZW50KSB7XG4gICAgICAgIG5hdiA9IHtcbiAgICAgICAgICAgIHVzZXJBZ2VudDogcGFyYW0udXNlckFnZW50LFxuICAgICAgICAgICAgcGxhdGZvcm06IHBhcmFtLnBsYXRmb3JtLFxuICAgICAgICAgICAgbWF4VG91Y2hQb2ludHM6IHBhcmFtLm1heFRvdWNoUG9pbnRzIHx8IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHVzZXJBZ2VudCA9IG5hdi51c2VyQWdlbnQ7XG4gICAgdmFyIHRtcCA9IHVzZXJBZ2VudC5zcGxpdCgnW0ZCQU4nKTtcbiAgICBpZiAodHlwZW9mIHRtcFsxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdXNlckFnZW50ID0gdG1wWzBdO1xuICAgIH1cbiAgICB0bXAgPSB1c2VyQWdlbnQuc3BsaXQoJ1R3aXR0ZXInKTtcbiAgICBpZiAodHlwZW9mIHRtcFsxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdXNlckFnZW50ID0gdG1wWzBdO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBjcmVhdGVNYXRjaCh1c2VyQWdlbnQpO1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGFwcGxlOiB7XG4gICAgICAgICAgICBwaG9uZTogbWF0Y2goYXBwbGVJcGhvbmUpICYmICFtYXRjaCh3aW5kb3dzUGhvbmUpLFxuICAgICAgICAgICAgaXBvZDogbWF0Y2goYXBwbGVJcG9kKSxcbiAgICAgICAgICAgIHRhYmxldDogIW1hdGNoKGFwcGxlSXBob25lKSAmJlxuICAgICAgICAgICAgICAgIChtYXRjaChhcHBsZVRhYmxldCkgfHwgaXNBcHBsZVRhYmxldE9uSW9zMTMobmF2KSkgJiZcbiAgICAgICAgICAgICAgICAhbWF0Y2god2luZG93c1Bob25lKSxcbiAgICAgICAgICAgIHVuaXZlcnNhbDogbWF0Y2goYXBwbGVVbml2ZXJzYWwpLFxuICAgICAgICAgICAgZGV2aWNlOiAobWF0Y2goYXBwbGVJcGhvbmUpIHx8XG4gICAgICAgICAgICAgICAgbWF0Y2goYXBwbGVJcG9kKSB8fFxuICAgICAgICAgICAgICAgIG1hdGNoKGFwcGxlVGFibGV0KSB8fFxuICAgICAgICAgICAgICAgIG1hdGNoKGFwcGxlVW5pdmVyc2FsKSB8fFxuICAgICAgICAgICAgICAgIGlzQXBwbGVUYWJsZXRPbklvczEzKG5hdikpICYmXG4gICAgICAgICAgICAgICAgIW1hdGNoKHdpbmRvd3NQaG9uZSlcbiAgICAgICAgfSxcbiAgICAgICAgYW1hem9uOiB7XG4gICAgICAgICAgICBwaG9uZTogbWF0Y2goYW1hem9uUGhvbmUpLFxuICAgICAgICAgICAgdGFibGV0OiAhbWF0Y2goYW1hem9uUGhvbmUpICYmIG1hdGNoKGFtYXpvblRhYmxldCksXG4gICAgICAgICAgICBkZXZpY2U6IG1hdGNoKGFtYXpvblBob25lKSB8fCBtYXRjaChhbWF6b25UYWJsZXQpXG4gICAgICAgIH0sXG4gICAgICAgIGFuZHJvaWQ6IHtcbiAgICAgICAgICAgIHBob25lOiAoIW1hdGNoKHdpbmRvd3NQaG9uZSkgJiYgbWF0Y2goYW1hem9uUGhvbmUpKSB8fFxuICAgICAgICAgICAgICAgICghbWF0Y2god2luZG93c1Bob25lKSAmJiBtYXRjaChhbmRyb2lkUGhvbmUpKSxcbiAgICAgICAgICAgIHRhYmxldDogIW1hdGNoKHdpbmRvd3NQaG9uZSkgJiZcbiAgICAgICAgICAgICAgICAhbWF0Y2goYW1hem9uUGhvbmUpICYmXG4gICAgICAgICAgICAgICAgIW1hdGNoKGFuZHJvaWRQaG9uZSkgJiZcbiAgICAgICAgICAgICAgICAobWF0Y2goYW1hem9uVGFibGV0KSB8fCBtYXRjaChhbmRyb2lkVGFibGV0KSksXG4gICAgICAgICAgICBkZXZpY2U6ICghbWF0Y2god2luZG93c1Bob25lKSAmJlxuICAgICAgICAgICAgICAgIChtYXRjaChhbWF6b25QaG9uZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2goYW1hem9uVGFibGV0KSB8fFxuICAgICAgICAgICAgICAgICAgICBtYXRjaChhbmRyb2lkUGhvbmUpIHx8XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoKGFuZHJvaWRUYWJsZXQpKSkgfHxcbiAgICAgICAgICAgICAgICBtYXRjaCgvXFxib2todHRwXFxiL2kpXG4gICAgICAgIH0sXG4gICAgICAgIHdpbmRvd3M6IHtcbiAgICAgICAgICAgIHBob25lOiBtYXRjaCh3aW5kb3dzUGhvbmUpLFxuICAgICAgICAgICAgdGFibGV0OiBtYXRjaCh3aW5kb3dzVGFibGV0KSxcbiAgICAgICAgICAgIGRldmljZTogbWF0Y2god2luZG93c1Bob25lKSB8fCBtYXRjaCh3aW5kb3dzVGFibGV0KVxuICAgICAgICB9LFxuICAgICAgICBvdGhlcjoge1xuICAgICAgICAgICAgYmxhY2tiZXJyeTogbWF0Y2gob3RoZXJCbGFja0JlcnJ5KSxcbiAgICAgICAgICAgIGJsYWNrYmVycnkxMDogbWF0Y2gob3RoZXJCbGFja0JlcnJ5MTApLFxuICAgICAgICAgICAgb3BlcmE6IG1hdGNoKG90aGVyT3BlcmEpLFxuICAgICAgICAgICAgZmlyZWZveDogbWF0Y2gob3RoZXJGaXJlZm94KSxcbiAgICAgICAgICAgIGNocm9tZTogbWF0Y2gob3RoZXJDaHJvbWUpLFxuICAgICAgICAgICAgZGV2aWNlOiBtYXRjaChvdGhlckJsYWNrQmVycnkpIHx8XG4gICAgICAgICAgICAgICAgbWF0Y2gob3RoZXJCbGFja0JlcnJ5MTApIHx8XG4gICAgICAgICAgICAgICAgbWF0Y2gob3RoZXJPcGVyYSkgfHxcbiAgICAgICAgICAgICAgICBtYXRjaChvdGhlckZpcmVmb3gpIHx8XG4gICAgICAgICAgICAgICAgbWF0Y2gob3RoZXJDaHJvbWUpXG4gICAgICAgIH0sXG4gICAgICAgIGFueTogZmFsc2UsXG4gICAgICAgIHBob25lOiBmYWxzZSxcbiAgICAgICAgdGFibGV0OiBmYWxzZVxuICAgIH07XG4gICAgcmVzdWx0LmFueSA9XG4gICAgICAgIHJlc3VsdC5hcHBsZS5kZXZpY2UgfHxcbiAgICAgICAgICAgIHJlc3VsdC5hbmRyb2lkLmRldmljZSB8fFxuICAgICAgICAgICAgcmVzdWx0LndpbmRvd3MuZGV2aWNlIHx8XG4gICAgICAgICAgICByZXN1bHQub3RoZXIuZGV2aWNlO1xuICAgIHJlc3VsdC5waG9uZSA9XG4gICAgICAgIHJlc3VsdC5hcHBsZS5waG9uZSB8fCByZXN1bHQuYW5kcm9pZC5waG9uZSB8fCByZXN1bHQud2luZG93cy5waG9uZTtcbiAgICByZXN1bHQudGFibGV0ID1cbiAgICAgICAgcmVzdWx0LmFwcGxlLnRhYmxldCB8fCByZXN1bHQuYW5kcm9pZC50YWJsZXQgfHwgcmVzdWx0LndpbmRvd3MudGFibGV0O1xuICAgIHJldHVybiByZXN1bHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc01vYmlsZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=