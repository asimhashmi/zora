// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("jquery")
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("local-time").start()
window.dropin = require('braintree-web-drop-in')
window.Rails = Rails

import 'bootstrap'
import "@hotwired/turbo-rails"

document.addEventListener("turbolinks:load", () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
})



// Theme

function ownKeys(t, e) {
  var a,
      r = Object.keys(t);
  return (
      Object.getOwnPropertySymbols &&
          ((a = Object.getOwnPropertySymbols(t)),
          e &&
              (a = a.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
          r.push.apply(r, a)),
      r
  );
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
      var a = null != arguments[e] ? arguments[e] : {};
      e % 2
          ? ownKeys(Object(a), !0).forEach(function (e) {
                _defineProperty(t, e, a[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
          : ownKeys(Object(a)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
            });
  }
  return t;
}
function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
/**
* Finder | Directory & Listings Bootstrap Template
* Copyright 2021 Createx Studio
* Theme core scripts
*
* @author Createx Studio
* @version 1.0.0
*/
!(function () {
  "use strict";
  var t, a, r;
  (function () {
      for (var a = document.querySelectorAll(".password-toggle"), e = 0; e < a.length; e++)
          !(function (e) {
              var t = a[e].querySelector(".form-control");
              a[e].querySelector(".password-toggle-btn").addEventListener(
                  "click",
                  function (e) {
                      "checkbox" === e.target.type && (e.target.checked ? (t.type = "text") : (t.type = "password"));
                  },
                  !1
              );
          })(e);
  })(),
      (function () {
          var e = document.querySelectorAll("[data-format]");
          if (0 !== e.length)
              for (var t = 0; t < e.length; t++) {
                  var a = e[t].dataset.format,
                      r = e[t].dataset.blocks,
                      n = e[t].dataset.delimiter,
                      r = void 0 !== r ? r.split(" ").map(Number) : "",
                      n = void 0 !== n ? n : " ";
                  switch (a) {
                      case "card":
                          new Cleave(e[t], { creditCard: !0 });
                          break;
                      case "cvc":
                          new Cleave(e[t], { numeral: !0, numeralIntegerScale: 3 });
                          break;
                      case "date":
                          new Cleave(e[t], { date: !0, datePattern: ["m", "y"] });
                          break;
                      case "date-long":
                          new Cleave(e[t], { date: !0, delimiter: "-", datePattern: ["Y", "m", "d"] });
                          break;
                      case "time":
                          new Cleave(e[t], { time: !0, datePattern: ["h", "m"] });
                          break;
                      case "custom":
                          new Cleave(e[t], { delimiter: n, blocks: r });
                          break;
                      default:
                          console.error(
                              "Sorry, your format " +
                                  a +
                                  " is not available. You can add it to the theme object method - inputFormatter in src/js/theme.js or choose one from the list of available formats: card, cvc, date, date-long, time or custom."
                          );
                  }
              }
      })(),
      window.addEventListener(
          "load",
          function () {
              var e = document.getElementsByClassName("needs-validation");
              Array.prototype.filter.call(e, function (t) {
                  t.addEventListener(
                      "submit",
                      function (e) {
                          !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated");
                      },
                      !1
                  );
              });
          },
          !1
      ),
      null != (t = document.querySelector(".navbar.fixed-top")) &&
          (t.classList,
          window.addEventListener("scroll", function (e) {
              20 < e.currentTarget.pageYOffset ? t.classList.add("navbar-stuck") : t.classList.remove("navbar-stuck");
          })),
      new SmoothScroll("[data-scroll]", {
          speed: 800,
          speedAsDuration: !0,
          offset: function (e, t) {
              return t.dataset.scrollOffset || 40;
          },
          header: "[data-scroll-header]",
          updateURL: !1,
      }),
      null != (r = document.querySelector(".btn-scroll-top")) &&
          ((a = parseInt(600, 10)),
          window.addEventListener("scroll", function (e) {
              e.currentTarget.pageYOffset > a ? r.classList.add("show") : r.classList.remove("show");
          })),
      [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
          return new bootstrap.Tooltip(e, { trigger: "hover" });
      }),
      [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (e) {
          return new bootstrap.Popover(e);
      }),
      [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
          return new bootstrap.Toast(e);
      }),
      (function () {
          for (var i = document.querySelectorAll(".range-slider"), e = 0; e < i.length; e++)
              !(function (e) {
                  var t = i[e].querySelector(".range-slider-ui"),
                      a = i[e].querySelector(".range-slider-value-min"),
                      r = i[e].querySelector(".range-slider-value-max"),
                      n = {
                          dataStartMin: parseInt(i[e].dataset.startMin, 10),
                          dataStartMax: parseInt(i[e].dataset.startMax, 10),
                          dataMin: parseInt(i[e].dataset.min, 10),
                          dataMax: parseInt(i[e].dataset.max, 10),
                          dataStep: parseInt(i[e].dataset.step, 10),
                      },
                      o = n.dataStartMax ? [n.dataStartMin, n.dataStartMax] : [n.dataStartMin],
                      e = !!n.dataStartMax || "lower";
                  noUiSlider.create(t, {
                      start: o,
                      connect: e,
                      step: n.dataStep,
                      tooltips: !0,
                      range: { min: n.dataMin, max: n.dataMax },
                      format: {
                          to: function (e) {
                              return "$" + parseInt(e, 10);
                          },
                          from: function (e) {
                              return Number(e);
                          },
                      },
                  }),
                      t.noUiSlider.on("update", function (e, t) {
                          e = (e = e[t]).replace(/\D/g, "");
                          t ? r && (r.value = Math.round(e)) : a && (a.value = Math.round(e));
                      }),
                      a &&
                          a.addEventListener("change", function () {
                              t.noUiSlider.set([this.value, null]);
                          }),
                      r &&
                          r.addEventListener("change", function () {
                              t.noUiSlider.set([null, this.value]);
                          });
              })(e);
      })(),
      (function () {
          for (var o = document.querySelectorAll('[data-bs-toggle="select"]'), e = 0; e < o.length; e++)
              !(function (e) {
                  for (var t = o[e].querySelectorAll(".dropdown-item"), a = o[e].querySelector(".dropdown-toggle-label"), r = o[e].querySelector('input[type="hidden"]'), n = 0; n < t.length; n++)
                      t[n].addEventListener("click", function (e) {
                          e.preventDefault();
                          e = this.querySelector(".dropdown-item-label").innerText;
                          (a.innerText = e), null !== r && (r.value = e);
                      });
              })(e);
      })(),
      (function (e, t, a) {
          for (var r = 0; r < e.length; r++) t.call(a, r, e[r]);
      })(document.querySelectorAll(".tns-carousel-wrapper .tns-carousel-inner"), function (e, t) {
          var a =
                  null != t.dataset.carouselOptions && "vertical" === JSON.parse(t.dataset.carouselOptions).axis
                      ? ['<i class="fi-chevron-up"></i>', '<i class="fi-chevron-down"></i>']
                      : ['<i class="fi-chevron-left"></i>', '<i class="fi-chevron-right"></i>'],
              r = { container: t, controlsText: a, navPosition: "bottom", mouseDrag: !0, speed: 500, autoplayHoverPause: !0, autoplayButtonOutput: !1 };
          null != t.dataset.carouselOptions && (o = JSON.parse(t.dataset.carouselOptions));
          var a = Object.assign({}, r, o),
              n = tns(a),
              r = t.closest(".tns-carousel-wrapper"),
              o = (r.querySelectorAll(".tns-item"), n.getInfo()),
              i = r.querySelector(".tns-current-slide"),
              a = r.querySelector(".tns-total-slides");
          r.classList.contains("tns-center") &&
              ((t = o.index),
              o.slideItems[t].classList.add("active"),
              n.events.on("indexChanged", function () {
                  var e = n.getInfo(),
                      t = e.indexCached,
                      a = e.index;
                  e.slideItems[t].classList.remove("active"), e.slideItems[a].classList.add("active");
              })),
              null !== r.querySelector(".tns-slides-count") &&
                  ((i.innerHTML = o.displayIndex),
                  (a.innerHTML = o.slideCount),
                  n.events.on("indexChanged", function () {
                      var e = n.getInfo();
                      i.innerHTML = e.displayIndex;
                  }));
      }),
      (function () {
          var e = document.querySelectorAll(".gallery");
          if (e.length)
              for (var t = 0; t < e.length; t++) {
                  var a = !!e[t].dataset.thumbnails;
                  lightGallery(e[t], { selector: ".gallery-item", download: !1, thumbnail: a, videojs: !0, youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 }, vimeoPlayerParams: { byline: 0, portrait: 0, color: "fd5631" } });
              }
      })(),
      (function () {
          var e = document.querySelectorAll('[data-bs-toggle="lightbox"]');
          if (e.length)
              for (var t = 0; t < e.length; t++)
                  lightGallery(e[t], { selector: "this", download: !1, videojs: !0, youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 }, vimeoPlayerParams: { byline: 0, portrait: 0, color: "fd5631" } });
      })(),
      (function () {
          var e = document.querySelectorAll(".date-picker");
          if (0 !== e.length)
              for (var t = 0; t < e.length; t++) {
                  var a = void 0;
                  null != e[t].dataset.datepickerOptions && (a = JSON.parse(e[t].dataset.datepickerOptions));
                  var r = e[t].classList.contains("date-range") ? { plugins: [new rangePlugin({ input: e[t].dataset.linkedInput })] } : "{}",
                      a = _objectSpread(_objectSpread(_objectSpread({}, { disableMobile: "true" }), r), a);
                  flatpickr(e[t], a);
              }
      })(),
      (function () {
          var i = document.querySelectorAll(".subscription-form");
          if (null !== i) {
              for (var e = 0; e < i.length; e++)
                  !(function (e) {
                      var t = i[e].querySelector('button[type="submit"]'),
                          a = t.innerHTML,
                          r = i[e].querySelector(".form-control"),
                          n = i[e].querySelector(".subscription-form-antispam"),
                          o = i[e].querySelector(".subscription-status");
                      i[e].addEventListener("submit", function (e) {
                          e && e.preventDefault(), "" === n.value && l(this, t, r, a, o);
                      });
                  })(e);
              var l = function (e, t, a, r, n) {
                  t.innerHTML = "Sending...";
                  var o = e.action.replace("/post?", "/post-json?"),
                      e = "&" + a.name + "=" + encodeURIComponent(a.value),
                      i = document.createElement("script");
                  (i.src = o + "&c=callback" + e), document.body.appendChild(i);
                  var l = "callback";
                  window[l] = function (e) {
                      delete window[l],
                          document.body.removeChild(i),
                          (t.innerHTML = r),
                          "success" == e.result
                              ? (a.classList.remove("is-invalid"),
                                a.classList.add("is-valid"),
                                n.classList.remove("status-error"),
                                n.classList.add("status-success"),
                                (n.innerHTML = e.msg),
                                setTimeout(function () {
                                    a.classList.remove("is-valid"), (n.innerHTML = ""), n.classList.remove("status-success");
                                }, 6e3))
                              : (a.classList.remove("is-valid"),
                                a.classList.add("is-invalid"),
                                n.classList.remove("status-success"),
                                n.classList.add("status-error"),
                                (n.innerHTML = e.msg.substring(4)),
                                setTimeout(function () {
                                    a.classList.remove("is-invalid"), (n.innerHTML = ""), n.classList.remove("status-error");
                                }, 6e3));
                  };
              };
          }
      })(),
      (function () {
          var u = document.querySelectorAll(".interactive-map");
          if (0 !== u.length)
              for (var p, e = 0; e < u.length; e++)
                  !(function (c) {
                      var e = u[c].dataset.mapOptions,
                          t = u[c].dataset.mapOptionsJson,
                          d = void 0;
                      if (e && "" !== e) {
                          var a = JSON.parse(e),
                              r = a.mapLayer || "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs",
                              n = a.coordinates || [0, 0],
                              o = a.zoom || 1,
                              e = !1 !== a.scrollWheelZoom,
                              i = a.markers,
                              d = L.map(u[c], { scrollWheelZoom: e }).setView(n, o);
                          if (
                              (L.tileLayer(r, {
                                  tileSize: 512,
                                  zoomOffset: -1,
                                  minZoom: 1,
                                  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                                  crossOrigin: !0,
                              }).addTo(d),
                              i)
                          )
                              for (p = 0; p < i.length; p++) {
                                  var l = i[p].iconUrl,
                                      s = i[p].className,
                                      l = L.icon({
                                          iconUrl: l || "../img/map/marker-icon.png",
                                          iconSize: [25, 39],
                                          iconAnchor: [12, 39],
                                          shadowUrl: "../img/map/marker-shadow.png",
                                          shadowSize: [41, 41],
                                          shadowAnchor: [13, 41],
                                          popupAnchor: [1, -28],
                                          className: s,
                                      }),
                                      s = i[p].popup,
                                      l = L.marker(i[p].coordinates, { icon: l }).addTo(d);
                                  s && l.bindPopup(s);
                              }
                      } else
                          t && "" !== t
                              ? fetch(t)
                                    .then(function (e) {
                                        return e.json();
                                    })
                                    .then(function (e) {
                                        var t = e.mapLayer || "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs",
                                            a = e.coordinates || [0, 0],
                                            r = e.zoom || 1,
                                            n = !1 !== e.scrollWheelZoom,
                                            o = e.markers;
                                        if (
                                            ((d = L.map(u[c], { scrollWheelZoom: n }).setView(a, r)),
                                            L.tileLayer(t, {
                                                tileSize: 512,
                                                zoomOffset: -1,
                                                minZoom: 1,
                                                attribution:
                                                    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                                                crossOrigin: !0,
                                            }).addTo(d),
                                            o)
                                        )
                                            for (var i = 0; i < o.length; i++) {
                                                var l = o[i].iconUrl,
                                                    s = o[i].className,
                                                    l = L.icon({
                                                        iconUrl: l || "../img/map/marker-icon.png",
                                                        iconSize: [25, 39],
                                                        iconAnchor: [12, 39],
                                                        shadowUrl: "../img/map/marker-shadow.png",
                                                        shadowSize: [41, 41],
                                                        shadowAnchor: [13, 41],
                                                        popupAnchor: [1, -28],
                                                        className: s,
                                                    }),
                                                    s = o[i].popup,
                                                    l = L.marker(o[i].coordinates, { icon: l }).addTo(d);
                                                s && l.bindPopup(s);
                                            }
                                    })
                              : ((d = L.map(u[c]).setView([0, 0], 1)),
                                L.tileLayer("https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs", {
                                    tileSize: 512,
                                    zoomOffset: -1,
                                    minZoom: 1,
                                    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                                    crossOrigin: !0,
                                }).addTo(d));
                  })(e);
      })(),
      (function () {
          for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t]);
      })(),
      (function () {
          var e = document.querySelectorAll(".file-uploader");
          if (0 !== e.length) {
              "undefined" != typeof FilePondPluginFileValidateType && FilePond.registerPlugin(FilePondPluginFileValidateType),
                  "undefined" != typeof FilePondPluginFileValidateSize && FilePond.registerPlugin(FilePondPluginFileValidateSize),
                  "undefined" != typeof FilePondPluginImagePreview && FilePond.registerPlugin(FilePondPluginImagePreview),
                  "undefined" != typeof FilePondPluginImageCrop && FilePond.registerPlugin(FilePondPluginImageCrop),
                  "undefined" != typeof FilePondPluginImageResize && FilePond.registerPlugin(FilePondPluginImageResize),
                  "undefined" != typeof FilePondPluginImageTransform && FilePond.registerPlugin(FilePondPluginImageTransform);
              for (var t = 0; t < e.length; t++) FilePond.create(e[t]);
          }
      })(),
      (function () {
          var r = document.querySelectorAll("[data-bs-binded-element]");
          if (0 !== r.length)
              for (var e = 0; e < r.length; e++)
                  !(function (e) {
                      var t = document.querySelector(r[e].dataset.bsBindedElement),
                          a = r[e].dataset.bsUnsetValue;
                      "SELECT" === r[e].tagName
                          ? r[e].addEventListener("change", function (e) {
                                t.innerText = e.target.value;
                            })
                          : r[e].classList.contains("date-picker")
                          ? r[e].addEventListener("change", function (e) {
                                "" !== e.target.value ? (t.innerText = e.target.value) : (t.innerText = a);
                            })
                          : r[e].addEventListener("keyup", function (e) {
                                "" !== e.target.value ? (t.innerText = e.target.value) : (t.innerText = a);
                            });
                  })(e);
      })(),
      (function () {
          var e = document.querySelectorAll("[data-master-checkbox-for]");
          if (0 !== e.length)
              for (var t = 0; t < e.length; t++)
                  e[t].addEventListener("change", function () {
                      var e = document.querySelector(this.dataset.masterCheckboxFor).querySelectorAll('input[type="checkbox"]');
                      if (this.checked) for (var t = 0; t < e.length; t++) (e[t].checked = !0), e[t].dataset.checkboxToggleClass && document.querySelector(e[t].dataset.bsTarget).classList.add(e[t].dataset.checkboxToggleClass);
                      else for (var a = 0; a < e.length; a++) (e[a].checked = !1), e[a].dataset.checkboxToggleClass && document.querySelector(e[a].dataset.bsTarget).classList.remove(e[a].dataset.checkboxToggleClass);
                  });
      })(),
      (function () {
          for (var e = document.querySelectorAll("[data-bs-toggle-class]"), t = 0; t < e.length; t++)
              e[t].addEventListener("click", function (e) {
                  e.preventDefault();
                  var t = document.querySelector(e.currentTarget.dataset.bsTarget),
                      e = e.currentTarget.dataset.bsToggleClass;
                  t.classList.toggle(e);
              });
      })();
})();

// Simple bar

/**
* SimpleBar.js - v5.3.3
* Scrollbars, simpler.
* https://grsmto.github.io/simplebar/
*
* Made by Adrien Denat from a fork by Jonathan Nicol
* Under MIT License
*/

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = t || self).SimpleBar = e());
})(this, function () {
  "use strict";
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function e(t, e) {
      return t((e = { exports: {} }), e.exports), e.exports;
  }
  var r,
      n,
      i,
      o = "object",
      s = function (t) {
          return t && t.Math == Math && t;
      },
      a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(),
      c = function (t) {
          try {
              return !!t();
          } catch (t) {
              return !0;
          }
      },
      l = !c(function () {
          return (
              7 !=
              Object.defineProperty({}, "a", {
                  get: function () {
                      return 7;
                  },
              }).a
          );
      }),
      u = {}.propertyIsEnumerable,
      f = Object.getOwnPropertyDescriptor,
      h = {
          f:
              f && !u.call({ 1: 2 }, 1)
                  ? function (t) {
                        var e = f(this, t);
                        return !!e && e.enumerable;
                    }
                  : u,
      },
      d = function (t, e) {
          return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      },
      p = {}.toString,
      v = function (t) {
          return p.call(t).slice(8, -1);
      },
      g = "".split,
      y = c(function () {
          return !Object("z").propertyIsEnumerable(0);
      })
          ? function (t) {
                return "String" == v(t) ? g.call(t, "") : Object(t);
            }
          : Object,
      b = function (t) {
          if (null == t) throw TypeError("Can't call method on " + t);
          return t;
      },
      m = function (t) {
          return y(b(t));
      },
      x = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
      },
      E = function (t, e) {
          if (!x(t)) return t;
          var r, n;
          if (e && "function" == typeof (r = t.toString) && !x((n = r.call(t)))) return n;
          if ("function" == typeof (r = t.valueOf) && !x((n = r.call(t)))) return n;
          if (!e && "function" == typeof (r = t.toString) && !x((n = r.call(t)))) return n;
          throw TypeError("Can't convert object to primitive value");
      },
      w = {}.hasOwnProperty,
      O = function (t, e) {
          return w.call(t, e);
      },
      _ = a.document,
      S = x(_) && x(_.createElement),
      A = function (t) {
          return S ? _.createElement(t) : {};
      },
      k =
          !l &&
          !c(function () {
              return (
                  7 !=
                  Object.defineProperty(A("div"), "a", {
                      get: function () {
                          return 7;
                      },
                  }).a
              );
          }),
      L = Object.getOwnPropertyDescriptor,
      M = {
          f: l
              ? L
              : function (t, e) {
                    if (((t = m(t)), (e = E(e, !0)), k))
                        try {
                            return L(t, e);
                        } catch (t) {}
                    if (O(t, e)) return d(!h.f.call(t, e), t[e]);
                },
      },
      T = function (t) {
          if (!x(t)) throw TypeError(String(t) + " is not an object");
          return t;
      },
      j = Object.defineProperty,
      R = {
          f: l
              ? j
              : function (t, e, r) {
                    if ((T(t), (e = E(e, !0)), T(r), k))
                        try {
                            return j(t, e, r);
                        } catch (t) {}
                    if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t;
                },
      },
      W = l
          ? function (t, e, r) {
                return R.f(t, e, d(1, r));
            }
          : function (t, e, r) {
                return (t[e] = r), t;
            },
      z = function (t, e) {
          try {
              W(a, t, e);
          } catch (r) {
              a[t] = e;
          }
          return e;
      },
      C = e(function (t) {
          var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
          (t.exports = function (t, r) {
              return e[t] || (e[t] = void 0 !== r ? r : {});
          })("versions", []).push({ version: "3.2.1", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
      }),
      N = C("native-function-to-string", Function.toString),
      I = a.WeakMap,
      D = "function" == typeof I && /native code/.test(N.call(I)),
      P = 0,
      V = Math.random(),
      F = function (t) {
          return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36);
      },
      B = C("keys"),
      H = function (t) {
          return B[t] || (B[t] = F(t));
      },
      q = {},
      $ = a.WeakMap;
  if (D) {
      var X = new $(),
          Y = X.get,
          G = X.has,
          U = X.set;
      (r = function (t, e) {
          return U.call(X, t, e), e;
      }),
          (n = function (t) {
              return Y.call(X, t) || {};
          }),
          (i = function (t) {
              return G.call(X, t);
          });
  } else {
      var Q = H("state");
      (q[Q] = !0),
          (r = function (t, e) {
              return W(t, Q, e), e;
          }),
          (n = function (t) {
              return O(t, Q) ? t[Q] : {};
          }),
          (i = function (t) {
              return O(t, Q);
          });
  }
  var K = {
          set: r,
          get: n,
          has: i,
          enforce: function (t) {
              return i(t) ? n(t) : r(t, {});
          },
          getterFor: function (t) {
              return function (e) {
                  var r;
                  if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                  return r;
              };
          },
      },
      J = e(function (t) {
          var e = K.get,
              r = K.enforce,
              n = String(N).split("toString");
          C("inspectSource", function (t) {
              return N.call(t);
          }),
              (t.exports = function (t, e, i, o) {
                  var s = !!o && !!o.unsafe,
                      c = !!o && !!o.enumerable,
                      l = !!o && !!o.noTargetGet;
                  "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), (r(i).source = n.join("string" == typeof e ? e : ""))),
                      t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? (t[e] = i) : W(t, e, i)) : c ? (t[e] = i) : z(e, i);
              })(Function.prototype, "toString", function () {
                  return ("function" == typeof this && e(this).source) || N.call(this);
              });
      }),
      Z = a,
      tt = function (t) {
          return "function" == typeof t ? t : void 0;
      },
      et = function (t, e) {
          return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : (Z[t] && Z[t][e]) || (a[t] && a[t][e]);
      },
      rt = Math.ceil,
      nt = Math.floor,
      it = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? nt : rt)(t);
      },
      ot = Math.min,
      st = function (t) {
          return t > 0 ? ot(it(t), 9007199254740991) : 0;
      },
      at = Math.max,
      ct = Math.min,
      lt = function (t) {
          return function (e, r, n) {
              var i,
                  o = m(e),
                  s = st(o.length),
                  a = (function (t, e) {
                      var r = it(t);
                      return r < 0 ? at(r + e, 0) : ct(r, e);
                  })(n, s);
              if (t && r != r) {
                  for (; s > a; ) if ((i = o[a++]) != i) return !0;
              } else for (; s > a; a++) if ((t || a in o) && o[a] === r) return t || a || 0;
              return !t && -1;
          };
      },
      ut = { includes: lt(!0), indexOf: lt(!1) }.indexOf,
      ft = function (t, e) {
          var r,
              n = m(t),
              i = 0,
              o = [];
          for (r in n) !O(q, r) && O(n, r) && o.push(r);
          for (; e.length > i; ) O(n, (r = e[i++])) && (~ut(o, r) || o.push(r));
          return o;
      },
      ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      dt = ht.concat("length", "prototype"),
      pt = {
          f:
              Object.getOwnPropertyNames ||
              function (t) {
                  return ft(t, dt);
              },
      },
      vt = { f: Object.getOwnPropertySymbols },
      gt =
          et("Reflect", "ownKeys") ||
          function (t) {
              var e = pt.f(T(t)),
                  r = vt.f;
              return r ? e.concat(r(t)) : e;
          },
      yt = function (t, e) {
          for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
              var s = r[o];
              O(t, s) || n(t, s, i(e, s));
          }
      },
      bt = /#|\.prototype\./,
      mt = function (t, e) {
          var r = Et[xt(t)];
          return r == Ot || (r != wt && ("function" == typeof e ? c(e) : !!e));
      },
      xt = (mt.normalize = function (t) {
          return String(t).replace(bt, ".").toLowerCase();
      }),
      Et = (mt.data = {}),
      wt = (mt.NATIVE = "N"),
      Ot = (mt.POLYFILL = "P"),
      _t = mt,
      St = M.f,
      At = function (t, e) {
          var r,
              n,
              i,
              o,
              s,
              c = t.target,
              l = t.global,
              u = t.stat;
          if ((r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype))
              for (n in e) {
                  if (((o = e[n]), (i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n]), !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i)) {
                      if (typeof o == typeof i) continue;
                      yt(o, i);
                  }
                  (t.sham || (i && i.sham)) && W(o, "sham", !0), J(r, n, o, t);
              }
      },
      kt = function (t) {
          if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
          return t;
      },
      Lt = function (t, e, r) {
          if ((kt(t), void 0 === e)) return t;
          switch (r) {
              case 0:
                  return function () {
                      return t.call(e);
                  };
              case 1:
                  return function (r) {
                      return t.call(e, r);
                  };
              case 2:
                  return function (r, n) {
                      return t.call(e, r, n);
                  };
              case 3:
                  return function (r, n, i) {
                      return t.call(e, r, n, i);
                  };
          }
          return function () {
              return t.apply(e, arguments);
          };
      },
      Mt = function (t) {
          return Object(b(t));
      },
      Tt =
          Array.isArray ||
          function (t) {
              return "Array" == v(t);
          },
      jt =
          !!Object.getOwnPropertySymbols &&
          !c(function () {
              return !String(Symbol());
          }),
      Rt = a.Symbol,
      Wt = C("wks"),
      zt = function (t) {
          return Wt[t] || (Wt[t] = (jt && Rt[t]) || (jt ? Rt : F)("Symbol." + t));
      },
      Ct = zt("species"),
      Nt = function (t, e) {
          var r;
          return Tt(t) && ("function" != typeof (r = t.constructor) || (r !== Array && !Tt(r.prototype)) ? x(r) && null === (r = r[Ct]) && (r = void 0) : (r = void 0)), new (void 0 === r ? Array : r)(0 === e ? 0 : e);
      },
      It = [].push,
      Dt = function (t) {
          var e = 1 == t,
              r = 2 == t,
              n = 3 == t,
              i = 4 == t,
              o = 6 == t,
              s = 5 == t || o;
          return function (a, c, l, u) {
              for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++)
                  if ((s || b in p) && ((h = v((f = p[b]), b, d)), t))
                      if (e) x[b] = h;
                      else if (h)
                          switch (t) {
                              case 3:
                                  return !0;
                              case 5:
                                  return f;
                              case 6:
                                  return b;
                              case 2:
                                  It.call(x, f);
                          }
                      else if (i) return !1;
              return o ? -1 : n || i ? i : x;
          };
      },
      Pt = { forEach: Dt(0), map: Dt(1), filter: Dt(2), some: Dt(3), every: Dt(4), find: Dt(5), findIndex: Dt(6) },
      Vt = function (t, e) {
          var r = [][t];
          return (
              !r ||
              !c(function () {
                  r.call(
                      null,
                      e ||
                          function () {
                              throw 1;
                          },
                      1
                  );
              })
          );
      },
      Ft = Pt.forEach,
      Bt = Vt("forEach")
          ? function (t) {
                return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          : [].forEach;
  At({ target: "Array", proto: !0, forced: [].forEach != Bt }, { forEach: Bt });
  var Ht = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
  };
  for (var qt in Ht) {
      var $t = a[qt],
          Xt = $t && $t.prototype;
      if (Xt && Xt.forEach !== Bt)
          try {
              W(Xt, "forEach", Bt);
          } catch (t) {
              Xt.forEach = Bt;
          }
  }
  var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement),
      Gt = zt("species"),
      Ut = Pt.filter;
  At(
      {
          target: "Array",
          proto: !0,
          forced: !(function (t) {
              return !c(function () {
                  var e = [];
                  return (
                      ((e.constructor = {})[Gt] = function () {
                          return { foo: 1 };
                      }),
                      1 !== e[t](Boolean).foo
                  );
              });
          })("filter"),
      },
      {
          filter: function (t) {
              return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
      }
  );
  var Qt =
          Object.keys ||
          function (t) {
              return ft(t, ht);
          },
      Kt = l
          ? Object.defineProperties
          : function (t, e) {
                T(t);
                for (var r, n = Qt(e), i = n.length, o = 0; i > o; ) R.f(t, (r = n[o++]), e[r]);
                return t;
            },
      Jt = et("document", "documentElement"),
      Zt = H("IE_PROTO"),
      te = function () {},
      ee = function () {
          var t,
              e = A("iframe"),
              r = ht.length;
          for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), ee = t.F; r--; ) delete ee.prototype[ht[r]];
          return ee();
      },
      re =
          Object.create ||
          function (t, e) {
              var r;
              return null !== t ? ((te.prototype = T(t)), (r = new te()), (te.prototype = null), (r[Zt] = t)) : (r = ee()), void 0 === e ? r : Kt(r, e);
          };
  q[Zt] = !0;
  var ne = zt("unscopables"),
      ie = Array.prototype;
  null == ie[ne] && W(ie, ne, re(null));
  var oe,
      se,
      ae,
      ce = function (t) {
          ie[ne][t] = !0;
      },
      le = {},
      ue = !c(function () {
          function t() {}
          return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
      }),
      fe = H("IE_PROTO"),
      he = Object.prototype,
      de = ue
          ? Object.getPrototypeOf
          : function (t) {
                return (t = Mt(t)), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null;
            },
      pe = zt("iterator"),
      ve = !1;
  [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : (ve = !0)),
      null == oe && (oe = {}),
      O(oe, pe) ||
          W(oe, pe, function () {
              return this;
          });
  var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve },
      ye = R.f,
      be = zt("toStringTag"),
      me = function (t, e, r) {
          t && !O((t = r ? t : t.prototype), be) && ye(t, be, { configurable: !0, value: e });
      },
      xe = ge.IteratorPrototype,
      Ee = function () {
          return this;
      },
      we =
          Object.setPrototypeOf ||
          ("__proto__" in {}
              ? (function () {
                    var t,
                        e = !1,
                        r = {};
                    try {
                        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), (e = r instanceof Array);
                    } catch (t) {}
                    return function (r, n) {
                        return (
                            T(r),
                            (function (t) {
                                if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                            })(n),
                            e ? t.call(r, n) : (r.__proto__ = n),
                            r
                        );
                    };
                })()
              : void 0),
      Oe = ge.IteratorPrototype,
      _e = ge.BUGGY_SAFARI_ITERATORS,
      Se = zt("iterator"),
      Ae = function () {
          return this;
      },
      ke = function (t, e, r, n, i, o, s) {
          !(function (t, e, r) {
              var n = e + " Iterator";
              (t.prototype = re(xe, { next: d(1, r) })), me(t, n, !1), (le[n] = Ee);
          })(r, e, n);
          var a,
              c,
              l,
              u = function (t) {
                  if (t === i && g) return g;
                  if (!_e && t in p) return p[t];
                  switch (t) {
                      case "keys":
                      case "values":
                      case "entries":
                          return function () {
                              return new r(this, t);
                          };
                  }
                  return function () {
                      return new r(this);
                  };
              },
              f = e + " Iterator",
              h = !1,
              p = t.prototype,
              v = p[Se] || p["@@iterator"] || (i && p[i]),
              g = (!_e && v) || u(i),
              y = ("Array" == e && p.entries) || v;
          if (
              (y && ((a = de(y.call(new t()))), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))),
              "values" == i &&
                  v &&
                  "values" !== v.name &&
                  ((h = !0),
                  (g = function () {
                      return v.call(this);
                  })),
              p[Se] !== g && W(p, Se, g),
              (le[e] = g),
              i)
          )
              if (((c = { values: u("values"), keys: o ? g : u("keys"), entries: u("entries") }), s)) for (l in c) (!_e && !h && l in p) || J(p, l, c[l]);
              else At({ target: e, proto: !0, forced: _e || h }, c);
          return c;
      },
      Le = K.set,
      Me = K.getterFor("Array Iterator"),
      Te = ke(
          Array,
          "Array",
          function (t, e) {
              Le(this, { type: "Array Iterator", target: m(t), index: 0, kind: e });
          },
          function () {
              var t = Me(this),
                  e = t.target,
                  r = t.kind,
                  n = t.index++;
              return !e || n >= e.length ? ((t.target = void 0), { value: void 0, done: !0 }) : "keys" == r ? { value: n, done: !1 } : "values" == r ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 };
          },
          "values"
      );
  (le.Arguments = le.Array), ce("keys"), ce("values"), ce("entries");
  var je = Object.assign,
      Re =
          !je ||
          c(function () {
              var t = {},
                  e = {},
                  r = Symbol();
              return (
                  (t[r] = 7),
                  "abcdefghijklmnopqrst".split("").forEach(function (t) {
                      e[t] = t;
                  }),
                  7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("")
              );
          })
              ? function (t, e) {
                    for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i; )
                        for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d; ) (a = u[d++]), (l && !s.call(c, a)) || (r[a] = c[a]);
                    return r;
                }
              : je;
  At({ target: "Object", stat: !0, forced: Object.assign !== Re }, { assign: Re });
  var We = zt("toStringTag"),
      ze =
          "Arguments" ==
          v(
              (function () {
                  return arguments;
              })()
          ),
      Ce = function (t) {
          var e, r, n;
          return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, e) {
                    try {
                        return t[e];
                    } catch (t) {}
                })((e = Object(t)), We))
              ? r
              : ze
              ? v(e)
              : "Object" == (n = v(e)) && "function" == typeof e.callee
              ? "Arguments"
              : n;
      },
      Ne = {};
  Ne[zt("toStringTag")] = "z";
  var Ie =
          "[object z]" !== String(Ne)
              ? function () {
                    return "[object " + Ce(this) + "]";
                }
              : Ne.toString,
      De = Object.prototype;
  Ie !== De.toString && J(De, "toString", Ie, { unsafe: !0 });
  var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff",
      Ve = "[" + Pe + "]",
      Fe = RegExp("^" + Ve + Ve + "*"),
      Be = RegExp(Ve + Ve + "*$"),
      He = function (t) {
          return function (e) {
              var r = String(b(e));
              return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r;
          };
      },
      qe = { start: He(1), end: He(2), trim: He(3) }.trim,
      $e = a.parseInt,
      Xe = /^[+-]?0[Xx]/,
      Ye =
          8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16")
              ? function (t, e) {
                    var r = qe(String(t));
                    return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10));
                }
              : $e;
  At({ global: !0, forced: parseInt != Ye }, { parseInt: Ye });
  var Ge = function (t) {
          return function (e, r) {
              var n,
                  i,
                  o = String(b(e)),
                  s = it(r),
                  a = o.length;
              return s < 0 || s >= a
                  ? t
                      ? ""
                      : void 0
                  : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343
                  ? t
                      ? o.charAt(s)
                      : n
                  : t
                  ? o.slice(s, s + 2)
                  : i - 56320 + ((n - 55296) << 10) + 65536;
          };
      },
      Ue = { codeAt: Ge(!1), charAt: Ge(!0) },
      Qe = Ue.charAt,
      Ke = K.set,
      Je = K.getterFor("String Iterator");
  ke(
      String,
      "String",
      function (t) {
          Ke(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
          var t,
              e = Je(this),
              r = e.string,
              n = e.index;
          return n >= r.length ? { value: void 0, done: !0 } : ((t = Qe(r, n)), (e.index += t.length), { value: t, done: !1 });
      }
  );
  var Ze = function (t, e, r) {
          for (var n in e) J(t, n, e[n], r);
          return t;
      },
      tr = !c(function () {
          return Object.isExtensible(Object.preventExtensions({}));
      }),
      er = e(function (t) {
          var e = R.f,
              r = F("meta"),
              n = 0,
              i =
                  Object.isExtensible ||
                  function () {
                      return !0;
                  },
              o = function (t) {
                  e(t, r, { value: { objectID: "O" + ++n, weakData: {} } });
              },
              s = (t.exports = {
                  REQUIRED: !1,
                  fastKey: function (t, e) {
                      if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                      if (!O(t, r)) {
                          if (!i(t)) return "F";
                          if (!e) return "E";
                          o(t);
                      }
                      return t[r].objectID;
                  },
                  getWeakData: function (t, e) {
                      if (!O(t, r)) {
                          if (!i(t)) return !0;
                          if (!e) return !1;
                          o(t);
                      }
                      return t[r].weakData;
                  },
                  onFreeze: function (t) {
                      return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t;
                  },
              });
          q[r] = !0;
      }),
      rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
      nr = Array.prototype,
      ir = zt("iterator"),
      or = function (t, e, r, n) {
          try {
              return n ? e(T(r)[0], r[1]) : e(r);
          } catch (e) {
              var i = t.return;
              throw (void 0 !== i && T(i.call(t)), e);
          }
      },
      sr = e(function (t) {
          var e = function (t, e) {
              (this.stopped = t), (this.result = e);
          };
          (t.exports = function (t, r, n, i, o) {
              var s,
                  a,
                  c,
                  l,
                  u,
                  f,
                  h,
                  d = Lt(r, n, i ? 2 : 1);
              if (o) s = t;
              else {
                  if (
                      "function" !=
                      typeof (a = (function (t) {
                          if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)];
                      })(t))
                  )
                      throw TypeError("Target is not iterable");
                  if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
                      for (c = 0, l = st(t.length); l > c; c++) if ((u = i ? d(T((f = t[c]))[0], f[1]) : d(t[c])) && u instanceof e) return u;
                      return new e(!1);
                  }
                  s = a.call(t);
              }
              for (; !(f = s.next()).done; ) if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
              return new e(!1);
          }).stop = function (t) {
              return new e(!0, t);
          };
      }),
      ar = function (t, e, r) {
          if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
          return t;
      },
      cr = zt("iterator"),
      lr = !1;
  try {
      var ur = 0,
          fr = {
              next: function () {
                  return { done: !!ur++ };
              },
              return: function () {
                  lr = !0;
              },
          };
      (fr[cr] = function () {
          return this;
      }),
          Array.from(fr, function () {
              throw 2;
          });
  } catch (t) {}
  var hr = function (t, e, r, n, i) {
          var o = a[t],
              s = o && o.prototype,
              l = o,
              u = n ? "set" : "add",
              f = {},
              h = function (t) {
                  var e = s[t];
                  J(
                      s,
                      t,
                      "add" == t
                          ? function (t) {
                                return e.call(this, 0 === t ? 0 : t), this;
                            }
                          : "delete" == t
                          ? function (t) {
                                return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
                            }
                          : "get" == t
                          ? function (t) {
                                return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                            }
                          : "has" == t
                          ? function (t) {
                                return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
                            }
                          : function (t, r) {
                                return e.call(this, 0 === t ? 0 : t, r), this;
                            }
                  );
              };
          if (
              _t(
                  t,
                  "function" != typeof o ||
                      !(
                          i ||
                          (s.forEach &&
                              !c(function () {
                                  new o().entries().next();
                              }))
                      )
              )
          )
              (l = r.getConstructor(e, t, n, u)), (er.REQUIRED = !0);
          else if (_t(t, !0)) {
              var d = new l(),
                  p = d[u](i ? {} : -0, 1) != d,
                  v = c(function () {
                      d.has(1);
                  }),
                  g = (function (t, e) {
                      if (!e && !lr) return !1;
                      var r = !1;
                      try {
                          var n = {};
                          (n[cr] = function () {
                              return {
                                  next: function () {
                                      return { done: (r = !0) };
                                  },
                              };
                          }),
                              t(n);
                      } catch (t) {}
                      return r;
                  })(function (t) {
                      new o(t);
                  }),
                  y =
                      !i &&
                      c(function () {
                          for (var t = new o(), e = 5; e--; ) t[u](e, e);
                          return !t.has(-0);
                      });
              g ||
                  (((l = e(function (e, r) {
                      ar(e, l, t);
                      var i = (function (t, e, r) {
                          var n, i;
                          return we && "function" == typeof (n = e.constructor) && n !== r && x((i = n.prototype)) && i !== r.prototype && we(t, i), t;
                      })(new o(), e, l);
                      return null != r && sr(r, i[u], i, n), i;
                  })).prototype = s),
                  (s.constructor = l)),
                  (v || y) && (h("delete"), h("has"), n && h("get")),
                  (y || p) && h(u),
                  i && s.clear && delete s.clear;
          }
          return (f[t] = l), At({ global: !0, forced: l != o }, f), me(l, t), i || r.setStrong(l, t, n), l;
      },
      dr = er.getWeakData,
      pr = K.set,
      vr = K.getterFor,
      gr = Pt.find,
      yr = Pt.findIndex,
      br = 0,
      mr = function (t) {
          return t.frozen || (t.frozen = new xr());
      },
      xr = function () {
          this.entries = [];
      },
      Er = function (t, e) {
          return gr(t.entries, function (t) {
              return t[0] === e;
          });
      };
  xr.prototype = {
      get: function (t) {
          var e = Er(this, t);
          if (e) return e[1];
      },
      has: function (t) {
          return !!Er(this, t);
      },
      set: function (t, e) {
          var r = Er(this, t);
          r ? (r[1] = e) : this.entries.push([t, e]);
      },
      delete: function (t) {
          var e = yr(this.entries, function (e) {
              return e[0] === t;
          });
          return ~e && this.entries.splice(e, 1), !!~e;
      },
  };
  var wr = {
          getConstructor: function (t, e, r, n) {
              var i = t(function (t, o) {
                      ar(t, i, e), pr(t, { type: e, id: br++, frozen: void 0 }), null != o && sr(o, t[n], t, r);
                  }),
                  o = vr(e),
                  s = function (t, e, r) {
                      var n = o(t),
                          i = dr(T(e), !0);
                      return !0 === i ? mr(n).set(e, r) : (i[n.id] = r), t;
                  };
              return (
                  Ze(i.prototype, {
                      delete: function (t) {
                          var e = o(this);
                          if (!x(t)) return !1;
                          var r = dr(t);
                          return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id];
                      },
                      has: function (t) {
                          var e = o(this);
                          if (!x(t)) return !1;
                          var r = dr(t);
                          return !0 === r ? mr(e).has(t) : r && O(r, e.id);
                      },
                  }),
                  Ze(
                      i.prototype,
                      r
                          ? {
                                get: function (t) {
                                    var e = o(this);
                                    if (x(t)) {
                                        var r = dr(t);
                                        return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0;
                                    }
                                },
                                set: function (t, e) {
                                    return s(this, t, e);
                                },
                            }
                          : {
                                add: function (t) {
                                    return s(this, t, !0);
                                },
                            }
                  ),
                  i
              );
          },
      },
      Or =
          (e(function (t) {
              var e,
                  r = K.enforce,
                  n = !a.ActiveXObject && "ActiveXObject" in a,
                  i = Object.isExtensible,
                  o = function (t) {
                      return function () {
                          return t(this, arguments.length ? arguments[0] : void 0);
                      };
                  },
                  s = (t.exports = hr("WeakMap", o, wr, !0, !0));
              if (D && n) {
                  (e = wr.getConstructor(o, "WeakMap", !0)), (er.REQUIRED = !0);
                  var c = s.prototype,
                      l = c.delete,
                      u = c.has,
                      f = c.get,
                      h = c.set;
                  Ze(c, {
                      delete: function (t) {
                          if (x(t) && !i(t)) {
                              var n = r(this);
                              return n.frozen || (n.frozen = new e()), l.call(this, t) || n.frozen.delete(t);
                          }
                          return l.call(this, t);
                      },
                      has: function (t) {
                          if (x(t) && !i(t)) {
                              var n = r(this);
                              return n.frozen || (n.frozen = new e()), u.call(this, t) || n.frozen.has(t);
                          }
                          return u.call(this, t);
                      },
                      get: function (t) {
                          if (x(t) && !i(t)) {
                              var n = r(this);
                              return n.frozen || (n.frozen = new e()), u.call(this, t) ? f.call(this, t) : n.frozen.get(t);
                          }
                          return f.call(this, t);
                      },
                      set: function (t, n) {
                          if (x(t) && !i(t)) {
                              var o = r(this);
                              o.frozen || (o.frozen = new e()), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n);
                          } else h.call(this, t, n);
                          return this;
                      },
                  });
              }
          }),
          zt("iterator")),
      _r = zt("toStringTag"),
      Sr = Te.values;
  for (var Ar in Ht) {
      var kr = a[Ar],
          Lr = kr && kr.prototype;
      if (Lr) {
          if (Lr[Or] !== Sr)
              try {
                  W(Lr, Or, Sr);
              } catch (t) {
                  Lr[Or] = Sr;
              }
          if ((Lr[_r] || W(Lr, _r, Ar), Ht[Ar]))
              for (var Mr in Te)
                  if (Lr[Mr] !== Te[Mr])
                      try {
                          W(Lr, Mr, Te[Mr]);
                      } catch (t) {
                          Lr[Mr] = Te[Mr];
                      }
      }
  }
  var Tr = "Expected a function",
      jr = NaN,
      Rr = "[object Symbol]",
      Wr = /^\s+|\s+$/g,
      zr = /^[-+]0x[0-9a-f]+$/i,
      Cr = /^0b[01]+$/i,
      Nr = /^0o[0-7]+$/i,
      Ir = parseInt,
      Dr = "object" == typeof t && t && t.Object === Object && t,
      Pr = "object" == typeof self && self && self.Object === Object && self,
      Vr = Dr || Pr || Function("return this")(),
      Fr = Object.prototype.toString,
      Br = Math.max,
      Hr = Math.min,
      qr = function () {
          return Vr.Date.now();
      };
  function $r(t, e, r) {
      var n,
          i,
          o,
          s,
          a,
          c,
          l = 0,
          u = !1,
          f = !1,
          h = !0;
      if ("function" != typeof t) throw new TypeError(Tr);
      function d(e) {
          var r = n,
              o = i;
          return (n = i = void 0), (l = e), (s = t.apply(o, r));
      }
      function p(t) {
          var r = t - c;
          return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
      }
      function v() {
          var t = qr();
          if (p(t)) return g(t);
          a = setTimeout(
              v,
              (function (t) {
                  var r = e - (t - c);
                  return f ? Hr(r, o - (t - l)) : r;
              })(t)
          );
      }
      function g(t) {
          return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
      }
      function y() {
          var t = qr(),
              r = p(t);
          if (((n = arguments), (i = this), (c = t), r)) {
              if (void 0 === a)
                  return (function (t) {
                      return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
                  })(c);
              if (f) return (a = setTimeout(v, e)), d(c);
          }
          return void 0 === a && (a = setTimeout(v, e)), s;
      }
      return (
          (e = Yr(e) || 0),
          Xr(r) && ((u = !!r.leading), (o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o), (h = "trailing" in r ? !!r.trailing : h)),
          (y.cancel = function () {
              void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
          }),
          (y.flush = function () {
              return void 0 === a ? s : g(qr());
          }),
          y
      );
  }
  function Xr(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
  }
  function Yr(t) {
      if ("number" == typeof t) return t;
      if (
          (function (t) {
              return (
                  "symbol" == typeof t ||
                  ((function (t) {
                      return !!t && "object" == typeof t;
                  })(t) &&
                      Fr.call(t) == Rr)
              );
          })(t)
      )
          return jr;
      if (Xr(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = Xr(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(Wr, "");
      var r = Cr.test(t);
      return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t;
  }
  var Gr = function (t, e, r) {
          var n = !0,
              i = !0;
          if ("function" != typeof t) throw new TypeError(Tr);
          return Xr(r) && ((n = "leading" in r ? !!r.leading : n), (i = "trailing" in r ? !!r.trailing : i)), $r(t, e, { leading: n, maxWait: e, trailing: i });
      },
      Ur = "Expected a function",
      Qr = NaN,
      Kr = "[object Symbol]",
      Jr = /^\s+|\s+$/g,
      Zr = /^[-+]0x[0-9a-f]+$/i,
      tn = /^0b[01]+$/i,
      en = /^0o[0-7]+$/i,
      rn = parseInt,
      nn = "object" == typeof t && t && t.Object === Object && t,
      on = "object" == typeof self && self && self.Object === Object && self,
      sn = nn || on || Function("return this")(),
      an = Object.prototype.toString,
      cn = Math.max,
      ln = Math.min,
      un = function () {
          return sn.Date.now();
      };
  function fn(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
  }
  function hn(t) {
      if ("number" == typeof t) return t;
      if (
          (function (t) {
              return (
                  "symbol" == typeof t ||
                  ((function (t) {
                      return !!t && "object" == typeof t;
                  })(t) &&
                      an.call(t) == Kr)
              );
          })(t)
      )
          return Qr;
      if (fn(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = fn(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(Jr, "");
      var r = tn.test(t);
      return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t;
  }
  var dn = function (t, e, r) {
          var n,
              i,
              o,
              s,
              a,
              c,
              l = 0,
              u = !1,
              f = !1,
              h = !0;
          if ("function" != typeof t) throw new TypeError(Ur);
          function d(e) {
              var r = n,
                  o = i;
              return (n = i = void 0), (l = e), (s = t.apply(o, r));
          }
          function p(t) {
              var r = t - c;
              return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
          }
          function v() {
              var t = un();
              if (p(t)) return g(t);
              a = setTimeout(
                  v,
                  (function (t) {
                      var r = e - (t - c);
                      return f ? ln(r, o - (t - l)) : r;
                  })(t)
              );
          }
          function g(t) {
              return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
          }
          function y() {
              var t = un(),
                  r = p(t);
              if (((n = arguments), (i = this), (c = t), r)) {
                  if (void 0 === a)
                      return (function (t) {
                          return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
                      })(c);
                  if (f) return (a = setTimeout(v, e)), d(c);
              }
              return void 0 === a && (a = setTimeout(v, e)), s;
          }
          return (
              (e = hn(e) || 0),
              fn(r) && ((u = !!r.leading), (o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o), (h = "trailing" in r ? !!r.trailing : h)),
              (y.cancel = function () {
                  void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
              }),
              (y.flush = function () {
                  return void 0 === a ? s : g(un());
              }),
              y
          );
      },
      pn = "Expected a function",
      vn = "__lodash_hash_undefined__",
      gn = "[object Function]",
      yn = "[object GeneratorFunction]",
      bn = /^\[object .+?Constructor\]$/,
      mn = "object" == typeof t && t && t.Object === Object && t,
      xn = "object" == typeof self && self && self.Object === Object && self,
      En = mn || xn || Function("return this")();
  var wn = Array.prototype,
      On = Function.prototype,
      _n = Object.prototype,
      Sn = En["__core-js_shared__"],
      An = (function () {
          var t = /[^.]+$/.exec((Sn && Sn.keys && Sn.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
      })(),
      kn = On.toString,
      Ln = _n.hasOwnProperty,
      Mn = _n.toString,
      Tn = RegExp(
          "^" +
              kn
                  .call(Ln)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
              "$"
      ),
      jn = wn.splice,
      Rn = Vn(En, "Map"),
      Wn = Vn(Object, "create");
  function zn(t) {
      var e = -1,
          r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
      }
  }
  function Cn(t) {
      var e = -1,
          r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
      }
  }
  function Nn(t) {
      var e = -1,
          r = t ? t.length : 0;
      for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
      }
  }
  function In(t, e) {
      for (var r, n, i = t.length; i--; ) if ((r = t[i][0]) === (n = e) || (r != r && n != n)) return i;
      return -1;
  }
  function Dn(t) {
      return (
          !(!Bn(t) || ((e = t), An && An in e)) &&
          ((function (t) {
              var e = Bn(t) ? Mn.call(t) : "";
              return e == gn || e == yn;
          })(t) ||
          (function (t) {
              var e = !1;
              if (null != t && "function" != typeof t.toString)
                  try {
                      e = !!(t + "");
                  } catch (t) {}
              return e;
          })(t)
              ? Tn
              : bn
          ).test(
              (function (t) {
                  if (null != t) {
                      try {
                          return kn.call(t);
                      } catch (t) {}
                      try {
                          return t + "";
                      } catch (t) {}
                  }
                  return "";
              })(t)
          )
      );
      var e;
  }
  function Pn(t, e) {
      var r,
          n,
          i = t.__data__;
      return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map;
  }
  function Vn(t, e) {
      var r = (function (t, e) {
          return null == t ? void 0 : t[e];
      })(t, e);
      return Dn(r) ? r : void 0;
  }
  function Fn(t, e) {
      if ("function" != typeof t || (e && "function" != typeof e)) throw new TypeError(pn);
      var r = function () {
          var n = arguments,
              i = e ? e.apply(this, n) : n[0],
              o = r.cache;
          if (o.has(i)) return o.get(i);
          var s = t.apply(this, n);
          return (r.cache = o.set(i, s)), s;
      };
      return (r.cache = new (Fn.Cache || Nn)()), r;
  }
  function Bn(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
  }
  (zn.prototype.clear = function () {
      this.__data__ = Wn ? Wn(null) : {};
  }),
      (zn.prototype.delete = function (t) {
          return this.has(t) && delete this.__data__[t];
      }),
      (zn.prototype.get = function (t) {
          var e = this.__data__;
          if (Wn) {
              var r = e[t];
              return r === vn ? void 0 : r;
          }
          return Ln.call(e, t) ? e[t] : void 0;
      }),
      (zn.prototype.has = function (t) {
          var e = this.__data__;
          return Wn ? void 0 !== e[t] : Ln.call(e, t);
      }),
      (zn.prototype.set = function (t, e) {
          return (this.__data__[t] = Wn && void 0 === e ? vn : e), this;
      }),
      (Cn.prototype.clear = function () {
          this.__data__ = [];
      }),
      (Cn.prototype.delete = function (t) {
          var e = this.__data__,
              r = In(e, t);
          return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0);
      }),
      (Cn.prototype.get = function (t) {
          var e = this.__data__,
              r = In(e, t);
          return r < 0 ? void 0 : e[r][1];
      }),
      (Cn.prototype.has = function (t) {
          return In(this.__data__, t) > -1;
      }),
      (Cn.prototype.set = function (t, e) {
          var r = this.__data__,
              n = In(r, t);
          return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
      }),
      (Nn.prototype.clear = function () {
          this.__data__ = { hash: new zn(), map: new (Rn || Cn)(), string: new zn() };
      }),
      (Nn.prototype.delete = function (t) {
          return Pn(this, t).delete(t);
      }),
      (Nn.prototype.get = function (t) {
          return Pn(this, t).get(t);
      }),
      (Nn.prototype.has = function (t) {
          return Pn(this, t).has(t);
      }),
      (Nn.prototype.set = function (t, e) {
          return Pn(this, t).set(t, e), this;
      }),
      (Fn.Cache = Nn);
  var Hn = Fn,
      qn = (function () {
          if ("undefined" != typeof Map) return Map;
          function t(t, e) {
              var r = -1;
              return (
                  t.some(function (t, n) {
                      return t[0] === e && ((r = n), !0);
                  }),
                  r
              );
          }
          return (function () {
              function e() {
                  this.__entries__ = [];
              }
              return (
                  Object.defineProperty(e.prototype, "size", {
                      get: function () {
                          return this.__entries__.length;
                      },
                      enumerable: !0,
                      configurable: !0,
                  }),
                  (e.prototype.get = function (e) {
                      var r = t(this.__entries__, e),
                          n = this.__entries__[r];
                      return n && n[1];
                  }),
                  (e.prototype.set = function (e, r) {
                      var n = t(this.__entries__, e);
                      ~n ? (this.__entries__[n][1] = r) : this.__entries__.push([e, r]);
                  }),
                  (e.prototype.delete = function (e) {
                      var r = this.__entries__,
                          n = t(r, e);
                      ~n && r.splice(n, 1);
                  }),
                  (e.prototype.has = function (e) {
                      return !!~t(this.__entries__, e);
                  }),
                  (e.prototype.clear = function () {
                      this.__entries__.splice(0);
                  }),
                  (e.prototype.forEach = function (t, e) {
                      void 0 === e && (e = null);
                      for (var r = 0, n = this.__entries__; r < n.length; r++) {
                          var i = n[r];
                          t.call(e, i[1], i[0]);
                      }
                  }),
                  e
              );
          })();
      })(),
      $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
      Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
      Yn =
          "function" == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(Xn)
              : function (t) {
                    return setTimeout(function () {
                        return t(Date.now());
                    }, 1e3 / 60);
                },
      Gn = 2;
  var Un = 20,
      Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Kn = "undefined" != typeof MutationObserver,
      Jn = (function () {
          function t() {
              (this.connected_ = !1),
                  (this.mutationEventsAdded_ = !1),
                  (this.mutationsObserver_ = null),
                  (this.observers_ = []),
                  (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                  (this.refresh = (function (t, e) {
                      var r = !1,
                          n = !1,
                          i = 0;
                      function o() {
                          r && ((r = !1), t()), n && a();
                      }
                      function s() {
                          Yn(o);
                      }
                      function a() {
                          var t = Date.now();
                          if (r) {
                              if (t - i < Gn) return;
                              n = !0;
                          } else (r = !0), (n = !1), setTimeout(s, e);
                          i = t;
                      }
                      return a;
                  })(this.refresh.bind(this), Un));
          }
          return (
              (t.prototype.addObserver = function (t) {
                  ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
              }),
              (t.prototype.removeObserver = function (t) {
                  var e = this.observers_,
                      r = e.indexOf(t);
                  ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_();
              }),
              (t.prototype.refresh = function () {
                  this.updateObservers_() && this.refresh();
              }),
              (t.prototype.updateObservers_ = function () {
                  var t = this.observers_.filter(function (t) {
                      return t.gatherActive(), t.hasActive();
                  });
                  return (
                      t.forEach(function (t) {
                          return t.broadcastActive();
                      }),
                      t.length > 0
                  );
              }),
              (t.prototype.connect_ = function () {
                  $n &&
                      !this.connected_ &&
                      (document.addEventListener("transitionend", this.onTransitionEnd_),
                      window.addEventListener("resize", this.refresh),
                      Kn
                          ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))
                          : (document.addEventListener("DOMSubtreeModified", this.refresh), (this.mutationEventsAdded_ = !0)),
                      (this.connected_ = !0));
              }),
              (t.prototype.disconnect_ = function () {
                  $n &&
                      this.connected_ &&
                      (document.removeEventListener("transitionend", this.onTransitionEnd_),
                      window.removeEventListener("resize", this.refresh),
                      this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                      this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                      (this.mutationsObserver_ = null),
                      (this.mutationEventsAdded_ = !1),
                      (this.connected_ = !1));
              }),
              (t.prototype.onTransitionEnd_ = function (t) {
                  var e = t.propertyName,
                      r = void 0 === e ? "" : e;
                  Qn.some(function (t) {
                      return !!~r.indexOf(t);
                  }) && this.refresh();
              }),
              (t.getInstance = function () {
                  return this.instance_ || (this.instance_ = new t()), this.instance_;
              }),
              (t.instance_ = null),
              t
          );
      })(),
      Zn = function (t, e) {
          for (var r = 0, n = Object.keys(e); r < n.length; r++) {
              var i = n[r];
              Object.defineProperty(t, i, { value: e[i], enumerable: !1, writable: !1, configurable: !0 });
          }
          return t;
      },
      ti = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || Xn;
      },
      ei = ai(0, 0, 0, 0);
  function ri(t) {
      return parseFloat(t) || 0;
  }
  function ni(t) {
      for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      return e.reduce(function (e, r) {
          return e + ri(t["border-" + r + "-width"]);
      }, 0);
  }
  function ii(t) {
      var e = t.clientWidth,
          r = t.clientHeight;
      if (!e && !r) return ei;
      var n = ti(t).getComputedStyle(t),
          i = (function (t) {
              for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
                  var i = n[r],
                      o = t["padding-" + i];
                  e[i] = ri(o);
              }
              return e;
          })(n),
          o = i.left + i.right,
          s = i.top + i.bottom,
          a = ri(n.width),
          c = ri(n.height);
      if (
          ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o), Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)),
          !(function (t) {
              return t === ti(t).document.documentElement;
          })(t))
      ) {
          var l = Math.round(a + o) - e,
              u = Math.round(c + s) - r;
          1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u);
      }
      return ai(i.left, i.top, a, c);
  }
  var oi =
      "undefined" != typeof SVGGraphicsElement
          ? function (t) {
                return t instanceof ti(t).SVGGraphicsElement;
            }
          : function (t) {
                return t instanceof ti(t).SVGElement && "function" == typeof t.getBBox;
            };
  function si(t) {
      return $n
          ? oi(t)
              ? (function (t) {
                    var e = t.getBBox();
                    return ai(0, 0, e.width, e.height);
                })(t)
              : ii(t)
          : ei;
  }
  function ai(t, e, r, n) {
      return { x: t, y: e, width: r, height: n };
  }
  var ci = (function () {
          function t(t) {
              (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = ai(0, 0, 0, 0)), (this.target = t);
          }
          return (
              (t.prototype.isActive = function () {
                  var t = si(this.target);
                  return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
              }),
              (t.prototype.broadcastRect = function () {
                  var t = this.contentRect_;
                  return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
              }),
              t
          );
      })(),
      li = function (t, e) {
          var r,
              n,
              i,
              o,
              s,
              a,
              c,
              l =
                  ((n = (r = e).x),
                  (i = r.y),
                  (o = r.width),
                  (s = r.height),
                  (a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                  (c = Object.create(a.prototype)),
                  Zn(c, { x: n, y: i, width: o, height: s, top: i, right: n + o, bottom: s + i, left: n }),
                  c);
          Zn(this, { target: t, contentRect: l });
      },
      ui = (function () {
          function t(t, e, r) {
              if (((this.activeObservations_ = []), (this.observations_ = new qn()), "function" != typeof t)) throw new TypeError("The callback provided as parameter 1 is not a function.");
              (this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r);
          }
          return (
              (t.prototype.observe = function (t) {
                  if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                  if ("undefined" != typeof Element && Element instanceof Object) {
                      if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                      var e = this.observations_;
                      e.has(t) || (e.set(t, new ci(t)), this.controller_.addObserver(this), this.controller_.refresh());
                  }
              }),
              (t.prototype.unobserve = function (t) {
                  if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                  if ("undefined" != typeof Element && Element instanceof Object) {
                      if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                      var e = this.observations_;
                      e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
                  }
              }),
              (t.prototype.disconnect = function () {
                  this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
              }),
              (t.prototype.gatherActive = function () {
                  var t = this;
                  this.clearActive(),
                      this.observations_.forEach(function (e) {
                          e.isActive() && t.activeObservations_.push(e);
                      });
              }),
              (t.prototype.broadcastActive = function () {
                  if (this.hasActive()) {
                      var t = this.callbackCtx_,
                          e = this.activeObservations_.map(function (t) {
                              return new li(t.target, t.broadcastRect());
                          });
                      this.callback_.call(t, e, t), this.clearActive();
                  }
              }),
              (t.prototype.clearActive = function () {
                  this.activeObservations_.splice(0);
              }),
              (t.prototype.hasActive = function () {
                  return this.activeObservations_.length > 0;
              }),
              t
          );
      })(),
      fi = "undefined" != typeof WeakMap ? new WeakMap() : new qn(),
      hi = function t(e) {
          if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          var r = Jn.getInstance(),
              n = new ui(e, r, this);
          fi.set(this, n);
      };
  ["observe", "unobserve", "disconnect"].forEach(function (t) {
      hi.prototype[t] = function () {
          var e;
          return (e = fi.get(this))[t].apply(e, arguments);
      };
  });
  var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
      pi = function (t) {
          return function (e, r, n, i) {
              kt(r);
              var o = Mt(e),
                  s = y(o),
                  a = st(o.length),
                  c = t ? a - 1 : 0,
                  l = t ? -1 : 1;
              if (n < 2)
                  for (;;) {
                      if (c in s) {
                          (i = s[c]), (c += l);
                          break;
                      }
                      if (((c += l), t ? c < 0 : a <= c)) throw TypeError("Reduce of empty array with no initial value");
                  }
              for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
              return i;
          };
      },
      vi = { left: pi(!1), right: pi(!0) }.left;
  At(
      { target: "Array", proto: !0, forced: Vt("reduce") },
      {
          reduce: function (t) {
              return vi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          },
      }
  );
  var gi = R.f,
      yi = Function.prototype,
      bi = yi.toString,
      mi = /^\s*function ([^ (]*)/;
  !l ||
      "name" in yi ||
      gi(yi, "name", {
          configurable: !0,
          get: function () {
              try {
                  return bi.call(this).match(mi)[1];
              } catch (t) {
                  return "";
              }
          },
      });
  var xi,
      Ei,
      wi = function () {
          var t = T(this),
              e = "";
          return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
      },
      Oi = RegExp.prototype.exec,
      _i = String.prototype.replace,
      Si = Oi,
      Ai = ((xi = /a/), (Ei = /b*/g), Oi.call(xi, "a"), Oi.call(Ei, "a"), 0 !== xi.lastIndex || 0 !== Ei.lastIndex),
      ki = void 0 !== /()??/.exec("")[1];
  (Ai || ki) &&
      (Si = function (t) {
          var e,
              r,
              n,
              i,
              o = this;
          return (
              ki && (r = new RegExp("^" + o.source + "$(?!\\s)", wi.call(o))),
              Ai && (e = o.lastIndex),
              (n = Oi.call(o, t)),
              Ai && n && (o.lastIndex = o.global ? n.index + n[0].length : e),
              ki &&
                  n &&
                  n.length > 1 &&
                  _i.call(n[0], r, function () {
                      for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0);
                  }),
              n
          );
      });
  var Li = Si;
  At({ target: "RegExp", proto: !0, forced: /./.exec !== Li }, { exec: Li });
  var Mi = zt("species"),
      Ti = !c(function () {
          var t = /./;
          return (
              (t.exec = function () {
                  var t = [];
                  return (t.groups = { a: "7" }), t;
              }),
              "7" !== "".replace(t, "$<a>")
          );
      }),
      ji = !c(function () {
          var t = /(?:)/,
              e = t.exec;
          t.exec = function () {
              return e.apply(this, arguments);
          };
          var r = "ab".split(t);
          return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
      }),
      Ri = function (t, e, r, n) {
          var i = zt(t),
              o = !c(function () {
                  var e = {};
                  return (
                      (e[i] = function () {
                          return 7;
                      }),
                      7 != ""[t](e)
                  );
              }),
              s =
                  o &&
                  !c(function () {
                      var e = !1,
                          r = /a/;
                      return (
                          (r.exec = function () {
                              return (e = !0), null;
                          }),
                          "split" === t &&
                              ((r.constructor = {}),
                              (r.constructor[Mi] = function () {
                                  return r;
                              })),
                          r[i](""),
                          !e
                      );
                  });
          if (!o || !s || ("replace" === t && !Ti) || ("split" === t && !ji)) {
              var a = /./[i],
                  l = r(i, ""[t], function (t, e, r, n, i) {
                      return e.exec === Li ? (o && !i ? { done: !0, value: a.call(e, r, n) } : { done: !0, value: t.call(r, e, n) }) : { done: !1 };
                  }),
                  u = l[0],
                  f = l[1];
              J(String.prototype, t, u),
                  J(
                      RegExp.prototype,
                      i,
                      2 == e
                          ? function (t, e) {
                                return f.call(t, this, e);
                            }
                          : function (t) {
                                return f.call(t, this);
                            }
                  ),
                  n && W(RegExp.prototype[i], "sham", !0);
          }
      },
      Wi = Ue.charAt,
      zi = function (t, e, r) {
          return e + (r ? Wi(t, e).length : 1);
      },
      Ci = function (t, e) {
          var r = t.exec;
          if ("function" == typeof r) {
              var n = r.call(t, e);
              if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
              return n;
          }
          if ("RegExp" !== v(t)) throw TypeError("RegExp#exec called on incompatible receiver");
          return Li.call(t, e);
      };
  Ri("match", 1, function (t, e, r) {
      return [
          function (e) {
              var r = b(this),
                  n = null == e ? void 0 : e[t];
              return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
          },
          function (t) {
              var n = r(e, t, this);
              if (n.done) return n.value;
              var i = T(t),
                  o = String(this);
              if (!i.global) return Ci(i, o);
              var s = i.unicode;
              i.lastIndex = 0;
              for (var a, c = [], l = 0; null !== (a = Ci(i, o)); ) {
                  var u = String(a[0]);
                  (c[l] = u), "" === u && (i.lastIndex = zi(o, st(i.lastIndex), s)), l++;
              }
              return 0 === l ? null : c;
          },
      ];
  });
  var Ni = Math.max,
      Ii = Math.min,
      Di = Math.floor,
      Pi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      Vi = /\$([$&'`]|\d\d?)/g;
  Ri("replace", 2, function (t, e, r) {
      return [
          function (r, n) {
              var i = b(this),
                  o = null == r ? void 0 : r[t];
              return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
          },
          function (t, i) {
              var o = r(e, t, this, i);
              if (o.done) return o.value;
              var s = T(t),
                  a = String(this),
                  c = "function" == typeof i;
              c || (i = String(i));
              var l = s.global;
              if (l) {
                  var u = s.unicode;
                  s.lastIndex = 0;
              }
              for (var f = []; ; ) {
                  var h = Ci(s, a);
                  if (null === h) break;
                  if ((f.push(h), !l)) break;
                  "" === String(h[0]) && (s.lastIndex = zi(a, st(s.lastIndex), u));
              }
              for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
                  h = f[g];
                  for (var y = String(h[0]), b = Ni(Ii(it(h.index), a.length), 0), m = [], x = 1; x < h.length; x++) m.push(void 0 === (d = h[x]) ? d : String(d));
                  var E = h.groups;
                  if (c) {
                      var w = [y].concat(m, b, a);
                      void 0 !== E && w.push(E);
                      var O = String(i.apply(void 0, w));
                  } else O = n(y, a, b, m, E, i);
                  b >= v && ((p += a.slice(v, b) + O), (v = b + y.length));
              }
              return p + a.slice(v);
          },
      ];
      function n(t, r, n, i, o, s) {
          var a = n + t.length,
              c = i.length,
              l = Vi;
          return (
              void 0 !== o && ((o = Mt(o)), (l = Pi)),
              e.call(s, l, function (e, s) {
                  var l;
                  switch (s.charAt(0)) {
                      case "$":
                          return "$";
                      case "&":
                          return t;
                      case "`":
                          return r.slice(0, n);
                      case "'":
                          return r.slice(a);
                      case "<":
                          l = o[s.slice(1, -1)];
                          break;
                      default:
                          var u = +s;
                          if (0 === u) return e;
                          if (u > c) {
                              var f = Di(u / 10);
                              return 0 === f ? e : f <= c ? (void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1)) : e;
                          }
                          l = i[u - 1];
                  }
                  return void 0 === l ? "" : l;
              })
          );
      }
  });
  var Fi = function (t) {
      return Array.prototype.reduce.call(
          t,
          function (t, e) {
              var r = e.name.match(/data-simplebar-(.+)/);
              if (r) {
                  var n = r[1].replace(/\W+(.)/g, function (t, e) {
                      return e.toUpperCase();
                  });
                  switch (e.value) {
                      case "true":
                          t[n] = !0;
                          break;
                      case "false":
                          t[n] = !1;
                          break;
                      case void 0:
                          t[n] = !0;
                          break;
                      default:
                          t[n] = e.value;
                  }
              }
              return t;
          },
          {}
      );
  };
  function Bi(t) {
      return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window;
  }
  function Hi(t) {
      return t && t.ownerDocument ? t.ownerDocument : document;
  }
  var qi = null,
      $i = null;
  function Xi(t) {
      if (null === qi) {
          var e = Hi(t);
          if (void 0 === e) return (qi = 0);
          var r = e.body,
              n = e.createElement("div");
          n.classList.add("simplebar-hide-scrollbar"), r.appendChild(n);
          var i = n.getBoundingClientRect().right;
          r.removeChild(n), (qi = i);
      }
      return qi;
  }
  Yt &&
      window.addEventListener("resize", function () {
          $i !== window.devicePixelRatio && (($i = window.devicePixelRatio), (qi = null));
      });
  var Yi = (function () {
      function t(e, r) {
          var n = this;
          (this.onScroll = function () {
              var t = Bi(n.el);
              n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), (n.scrollXTicking = !0)), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), (n.scrollYTicking = !0));
          }),
              (this.scrollX = function () {
                  n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), (n.scrollXTicking = !1);
              }),
              (this.scrollY = function () {
                  n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), (n.scrollYTicking = !1);
              }),
              (this.onMouseEnter = function () {
                  n.showScrollbar("x"), n.showScrollbar("y");
              }),
              (this.onMouseMove = function (t) {
                  (n.mouseX = t.clientX), (n.mouseY = t.clientY), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
              }),
              (this.onMouseLeave = function () {
                  n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), (n.mouseX = -1), (n.mouseY = -1);
              }),
              (this.onWindowResize = function () {
                  (n.scrollbarWidth = n.getScrollbarWidth()), n.hideNativeScrollbar();
              }),
              (this.hideScrollbars = function () {
                  (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
                      (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
                      n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), (n.axis.y.isVisible = !1)),
                      n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), (n.axis.x.isVisible = !1));
              }),
              (this.onPointerEvent = function (t) {
                  var e, r;
                  (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
                      (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
                      (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)),
                      (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)),
                      (e || r) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          "mousedown" === t.type &&
                              (e && ((n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect()), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")),
                              r && ((n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect()), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))));
              }),
              (this.drag = function (e) {
                  var r = n.axis[n.draggedAxis].track,
                      i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                      o = n.axis[n.draggedAxis].scrollbar,
                      s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                      a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                  e.preventDefault(), e.stopPropagation();
                  var c = ((("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size)) * (s - a);
                  "x" === n.draggedAxis && ((c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c), (c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c)),
                      (n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c);
              }),
              (this.onEndDrag = function (t) {
                  var e = Hi(n.el),
                      r = Bi(n.el);
                  t.preventDefault(),
                      t.stopPropagation(),
                      n.el.classList.remove(n.classNames.dragging),
                      e.removeEventListener("mousemove", n.drag, !0),
                      e.removeEventListener("mouseup", n.onEndDrag, !0),
                      (n.removePreventClickId = r.setTimeout(function () {
                          e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), (n.removePreventClickId = null);
                      }));
              }),
              (this.preventClick = function (t) {
                  t.preventDefault(), t.stopPropagation();
              }),
              (this.el = e),
              (this.minScrollbarWidth = 20),
              (this.options = Object.assign({}, t.defaultOptions, {}, r)),
              (this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames)),
              (this.axis = {
                  x: {
                      scrollOffsetAttr: "scrollLeft",
                      sizeAttr: "width",
                      scrollSizeAttr: "scrollWidth",
                      offsetSizeAttr: "offsetWidth",
                      offsetAttr: "left",
                      overflowAttr: "overflowX",
                      dragOffset: 0,
                      isOverflowing: !0,
                      isVisible: !1,
                      forceVisible: !1,
                      track: {},
                      scrollbar: {},
                  },
                  y: {
                      scrollOffsetAttr: "scrollTop",
                      sizeAttr: "height",
                      scrollSizeAttr: "scrollHeight",
                      offsetSizeAttr: "offsetHeight",
                      offsetAttr: "top",
                      overflowAttr: "overflowY",
                      dragOffset: 0,
                      isOverflowing: !0,
                      isVisible: !1,
                      forceVisible: !1,
                      track: {},
                      scrollbar: {},
                  },
              }),
              (this.removePreventClickId = null),
              t.instances.has(this.el) ||
                  ((this.recalculate = Gr(this.recalculate.bind(this), 64)),
                  (this.onMouseMove = Gr(this.onMouseMove.bind(this), 64)),
                  (this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout)),
                  (this.onWindowResize = dn(this.onWindowResize.bind(this), 64, { leading: !0 })),
                  (t.getRtlHelpers = Hn(t.getRtlHelpers)),
                  this.init());
      }
      (t.getRtlHelpers = function () {
          var e = document.createElement("div");
          e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var r = e.firstElementChild;
          document.body.appendChild(r);
          var n = r.firstElementChild;
          r.scrollLeft = 0;
          var i = t.getOffset(r),
              o = t.getOffset(n);
          r.scrollLeft = 999;
          var s = t.getOffset(n);
          return { isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0, isRtlScrollbarInverted: i.left !== o.left };
      }),
          (t.getOffset = function (t) {
              var e = t.getBoundingClientRect(),
                  r = Hi(t),
                  n = Bi(t);
              return { top: e.top + (n.pageYOffset || r.documentElement.scrollTop), left: e.left + (n.pageXOffset || r.documentElement.scrollLeft) };
          });
      var e = t.prototype;
      return (
          (e.init = function () {
              t.instances.set(this.el, this), Yt && (this.initDOM(), (this.scrollbarWidth = this.getScrollbarWidth()), this.recalculate(), this.initListeners());
          }),
          (e.initDOM = function () {
              var t = this;
              if (
                  Array.prototype.filter.call(this.el.children, function (e) {
                      return e.classList.contains(t.classNames.wrapper);
                  }).length
              )
                  (this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper)),
                      (this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper)),
                      (this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl)),
                      (this.offsetEl = this.el.querySelector("." + this.classNames.offset)),
                      (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
                      (this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder)),
                      (this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl)),
                      (this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl)),
                      (this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal)),
                      (this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical));
              else {
                  for (
                      this.wrapperEl = document.createElement("div"),
                          this.contentWrapperEl = document.createElement("div"),
                          this.offsetEl = document.createElement("div"),
                          this.maskEl = document.createElement("div"),
                          this.contentEl = document.createElement("div"),
                          this.placeholderEl = document.createElement("div"),
                          this.heightAutoObserverWrapperEl = document.createElement("div"),
                          this.heightAutoObserverEl = document.createElement("div"),
                          this.wrapperEl.classList.add(this.classNames.wrapper),
                          this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                          this.offsetEl.classList.add(this.classNames.offset),
                          this.maskEl.classList.add(this.classNames.mask),
                          this.contentEl.classList.add(this.classNames.contentEl),
                          this.placeholderEl.classList.add(this.classNames.placeholder),
                          this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                          this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);
                      this.el.firstChild;

                  )
                      this.contentEl.appendChild(this.el.firstChild);
                  this.contentWrapperEl.appendChild(this.contentEl),
                      this.offsetEl.appendChild(this.contentWrapperEl),
                      this.maskEl.appendChild(this.offsetEl),
                      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                      this.wrapperEl.appendChild(this.maskEl),
                      this.wrapperEl.appendChild(this.placeholderEl),
                      this.el.appendChild(this.wrapperEl);
              }
              if (!this.axis.x.track.el || !this.axis.y.track.el) {
                  var e = document.createElement("div"),
                      r = document.createElement("div");
                  e.classList.add(this.classNames.track),
                      r.classList.add(this.classNames.scrollbar),
                      e.appendChild(r),
                      (this.axis.x.track.el = e.cloneNode(!0)),
                      this.axis.x.track.el.classList.add(this.classNames.horizontal),
                      (this.axis.y.track.el = e.cloneNode(!0)),
                      this.axis.y.track.el.classList.add(this.classNames.vertical),
                      this.el.appendChild(this.axis.x.track.el),
                      this.el.appendChild(this.axis.y.track.el);
              }
              (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar)),
                  (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar)),
                  this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
                  this.el.setAttribute("data-simplebar", "init");
          }),
          (e.initListeners = function () {
              var t = this,
                  e = Bi(this.el);
              this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
                  ["mousedown", "click", "dblclick"].forEach(function (e) {
                      t.el.addEventListener(e, t.onPointerEvent, !0);
                  }),
                  ["touchstart", "touchend", "touchmove"].forEach(function (e) {
                      t.el.addEventListener(e, t.onPointerEvent, { capture: !0, passive: !0 });
                  }),
                  this.el.addEventListener("mousemove", this.onMouseMove),
                  this.el.addEventListener("mouseleave", this.onMouseLeave),
                  this.contentWrapperEl.addEventListener("scroll", this.onScroll),
                  e.addEventListener("resize", this.onWindowResize);
              var r = !1,
                  n = e.ResizeObserver || di;
              (this.resizeObserver = new n(function () {
                  r && t.recalculate();
              })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  e.requestAnimationFrame(function () {
                      r = !0;
                  }),
                  (this.mutationObserver = new e.MutationObserver(this.recalculate)),
                  this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
          }),
          (e.recalculate = function () {
              var t = Bi(this.el);
              (this.elStyles = t.getComputedStyle(this.el)), (this.isRtl = "rtl" === this.elStyles.direction);
              var e = this.heightAutoObserverEl.offsetHeight <= 1,
                  r = this.heightAutoObserverEl.offsetWidth <= 1,
                  n = this.contentEl.offsetWidth,
                  i = this.contentWrapperEl.offsetWidth,
                  o = this.elStyles.overflowX,
                  s = this.elStyles.overflowY;
              (this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft),
                  (this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft);
              var a = this.contentEl.scrollHeight,
                  c = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = e ? "auto" : "100%"), (this.placeholderEl.style.width = r ? n + "px" : "auto"), (this.placeholderEl.style.height = a + "px");
              var l = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = c > n),
                  (this.axis.y.isOverflowing = a > l),
                  (this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing),
                  (this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing),
                  (this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible),
                  (this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible),
                  this.hideNativeScrollbar();
              var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                  f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f),
                  (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u),
                  (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                  (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                  (this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px"),
                  (this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px"),
                  this.positionScrollbar("x"),
                  this.positionScrollbar("y"),
                  this.toggleTrackVisibility("x"),
                  this.toggleTrackVisibility("y");
          }),
          (e.getScrollbarSize = function (t) {
              if ((void 0 === t && (t = "y"), !this.axis[t].isOverflowing)) return 0;
              var e,
                  r = this.contentEl[this.axis[t].scrollSizeAttr],
                  n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                  i = n / r;
              return (e = Math.max(~~(i * n), this.options.scrollbarMinSize)), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e;
          }),
          (e.positionScrollbar = function (e) {
              if ((void 0 === e && (e = "y"), this.axis[e].isOverflowing)) {
                  var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                      n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                      i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                      o = this.axis[e].scrollbar,
                      s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                      a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
                      c = ~~((n - o.size) * a);
                  (c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c), (o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)");
              }
          }),
          (e.toggleTrackVisibility = function (t) {
              void 0 === t && (t = "y");
              var e = this.axis[t].track.el,
                  r = this.axis[t].scrollbar.el;
              this.axis[t].isOverflowing || this.axis[t].forceVisible
                  ? ((e.style.visibility = "visible"), (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll"))
                  : ((e.style.visibility = "hidden"), (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden")),
                  this.axis[t].isOverflowing ? (r.style.display = "block") : (r.style.display = "none");
          }),
          (e.hideNativeScrollbar = function () {
              (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0),
                  (this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0);
          }),
          (e.onMouseMoveForAxis = function (t) {
              void 0 === t && (t = "y"),
                  (this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect()),
                  (this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect()),
                  this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
                  this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover);
          }),
          (e.onMouseLeaveForAxis = function (t) {
              void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (e.showScrollbar = function (t) {
              void 0 === t && (t = "y");
              var e = this.axis[t].scrollbar.el;
              this.axis[t].isVisible || (e.classList.add(this.classNames.visible), (this.axis[t].isVisible = !0)), this.options.autoHide && this.hideScrollbars();
          }),
          (e.onDragStart = function (t, e) {
              void 0 === e && (e = "y");
              var r = Hi(this.el),
                  n = Bi(this.el),
                  i = this.axis[e].scrollbar,
                  o = "y" === e ? t.pageY : t.pageX;
              (this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr]),
                  (this.draggedAxis = e),
                  this.el.classList.add(this.classNames.dragging),
                  r.addEventListener("mousemove", this.drag, !0),
                  r.addEventListener("mouseup", this.onEndDrag, !0),
                  null === this.removePreventClickId
                      ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0))
                      : (n.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
          }),
          (e.onTrackClick = function (t, e) {
              var r = this;
              if ((void 0 === e && (e = "y"), this.options.clickOnTrack)) {
                  var n = Bi(this.el);
                  this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                  var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                      o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                      s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                      a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                      c = -1 === a ? s - o : s + o;
                  !(function t() {
                      var i, o;
                      -1 === a
                          ? s > c && ((s -= r.options.clickOnTrackSpeed), r.contentWrapperEl.scrollTo((((i = {})[r.axis[e].offsetAttr] = s), i)), n.requestAnimationFrame(t))
                          : s < c && ((s += r.options.clickOnTrackSpeed), r.contentWrapperEl.scrollTo((((o = {})[r.axis[e].offsetAttr] = s), o)), n.requestAnimationFrame(t));
                  })();
              }
          }),
          (e.getContentElement = function () {
              return this.contentEl;
          }),
          (e.getScrollElement = function () {
              return this.contentWrapperEl;
          }),
          (e.getScrollbarWidth = function () {
              try {
                  return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Xi(this.el);
              } catch (t) {
                  return Xi(this.el);
              }
          }),
          (e.removeListeners = function () {
              var t = this,
                  e = Bi(this.el);
              this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
                  ["mousedown", "click", "dblclick"].forEach(function (e) {
                      t.el.removeEventListener(e, t.onPointerEvent, !0);
                  }),
                  ["touchstart", "touchend", "touchmove"].forEach(function (e) {
                      t.el.removeEventListener(e, t.onPointerEvent, { capture: !0, passive: !0 });
                  }),
                  this.el.removeEventListener("mousemove", this.onMouseMove),
                  this.el.removeEventListener("mouseleave", this.onMouseLeave),
                  this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
                  e.removeEventListener("resize", this.onWindowResize),
                  this.mutationObserver && this.mutationObserver.disconnect(),
                  this.resizeObserver && this.resizeObserver.disconnect(),
                  this.recalculate.cancel(),
                  this.onMouseMove.cancel(),
                  this.hideScrollbars.cancel(),
                  this.onWindowResize.cancel();
          }),
          (e.unMount = function () {
              this.removeListeners(), t.instances.delete(this.el);
          }),
          (e.isWithinBounds = function (t) {
              return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
          }),
          (e.findChild = function (t, e) {
              var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
              return Array.prototype.filter.call(t.children, function (t) {
                  return r.call(t, e);
              })[0];
          }),
          t
      );
  })();
  return (
      (Yi.defaultOptions = {
          autoHide: !0,
          forceVisible: !1,
          clickOnTrack: !0,
          clickOnTrackSpeed: 40,
          classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
          },
          scrollbarMinSize: 25,
          scrollbarMaxSize: 0,
          timeout: 1e3,
      }),
      (Yi.instances = new WeakMap()),
      (Yi.initDOMLoadedElements = function () {
          document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (t) {
                  "init" === t.getAttribute("data-simplebar") || Yi.instances.has(t) || new Yi(t, Fi(t.attributes));
              });
      }),
      (Yi.removeObserver = function () {
          this.globalObserver.disconnect();
      }),
      (Yi.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver && ((this.globalObserver = new MutationObserver(Yi.handleMutations)), this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
              "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll)
                  ? window.setTimeout(this.initDOMLoadedElements)
                  : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
      }),
      (Yi.handleMutations = function (t) {
          t.forEach(function (t) {
              Array.prototype.forEach.call(t.addedNodes, function (t) {
                  1 === t.nodeType &&
                      (t.hasAttribute("data-simplebar")
                          ? !Yi.instances.has(t) && new Yi(t, Fi(t.attributes))
                          : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function (t) {
                                "init" === t.getAttribute("data-simplebar") || Yi.instances.has(t) || new Yi(t, Fi(t.attributes));
                            }));
              }),
                  Array.prototype.forEach.call(t.removedNodes, function (t) {
                      1 === t.nodeType &&
                          (t.hasAttribute('[data-simplebar="init"]')
                              ? Yi.instances.has(t) && Yi.instances.get(t).unMount()
                              : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function (t) {
                                    Yi.instances.has(t) && Yi.instances.get(t).unMount();
                                }));
                  });
          });
      }),
      (Yi.getOptions = Fi),
      Yt && Yi.initHtmlApi(),
      Yi
  );
});

//  Smooth Scroll (polyfills)

/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element &&
  !Element.prototype.closest &&
  (Element.prototype.closest = function (e) {
      var t,
          n = (this.document || this.ownerDocument).querySelectorAll(e),
          o = this;
      do {
          for (t = n.length; 0 <= --t && n.item(t) !== o; );
      } while (t < 0 && (o = o.parentElement));
      return o;
  }),
  (function () {
      if ("function" == typeof window.CustomEvent) return;
      function e(e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
      }
      (e.prototype = window.Event.prototype), (window.CustomEvent = e);
  })(),
  (function () {
      for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
          (window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"]), (window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"]);
      window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (e, t) {
              var n = new Date().getTime(),
                  o = Math.max(0, 16 - (n - r)),
                  a = window.setTimeout(function () {
                      e(n + o);
                  }, o);
              return (r = n + o), a;
          }),
          window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
              });
  })(),
  (function (e, t) {
      "function" == typeof define && define.amd
          ? define([], function () {
                return t(e);
            })
          : "object" == typeof exports
          ? (module.exports = t(e))
          : (e.SmoothScroll = t(e));
  })("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (M) {
      "use strict";
      var q = {
              ignore: "[data-scroll-ignore]",
              header: null,
              topOnEmptyHash: !0,
              speed: 500,
              speedAsDuration: !1,
              durationMax: null,
              durationMin: null,
              clip: !0,
              offset: 0,
              easing: "easeInOutCubic",
              customEasing: null,
              updateURL: !0,
              popstate: !0,
              emitEvents: !0,
          },
          I = function () {
              var n = {};
              return (
                  Array.prototype.forEach.call(arguments, function (e) {
                      for (var t in e) {
                          if (!e.hasOwnProperty(t)) return;
                          n[t] = e[t];
                      }
                  }),
                  n
              );
          },
          r = function (e) {
              "#" === e.charAt(0) && (e = e.substr(1));
              for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                  if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                  (1 <= t && t <= 31) || 127 == t || (0 === a && 48 <= t && t <= 57) || (1 === a && 48 <= t && t <= 57 && 45 === i)
                      ? (r += "\\" + t.toString(16) + " ")
                      : (r += 128 <= t || 45 === t || 95 === t || (48 <= t && t <= 57) || (65 <= t && t <= 90) || (97 <= t && t <= 122) ? n.charAt(a) : "\\" + n.charAt(a));
              }
              return "#" + r;
          },
          F = function () {
              return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
          },
          L = function (e) {
              return e ? ((t = e), parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
              var t;
          },
          x = function (e, t, n) {
              0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), (e.style.outline = "none")), M.scrollTo(0, t));
          },
          H = function (e, t, n, o) {
              if (t.emitEvents && "function" == typeof M.CustomEvent) {
                  var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } });
                  document.dispatchEvent(a);
              }
          };
      return function (o, e) {
          var b,
              a,
              A,
              O,
              C = {};
          (C.cancelScroll = function (e) {
              cancelAnimationFrame(O), (O = null), e || H("scrollCancel", b);
          }),
              (C.animateScroll = function (a, r, e) {
                  C.cancelScroll();
                  var i = I(b || q, e || {}),
                      c = "[object Number]" === Object.prototype.toString.call(a),
                      t = c || !a.tagName ? null : a;
                  if (c || t) {
                      var s = M.pageYOffset;
                      i.header && !A && (A = document.querySelector(i.header));
                      var n,
                          o,
                          u,
                          l,
                          m,
                          d,
                          f,
                          h,
                          p = L(A),
                          g = c
                              ? a
                              : (function (e, t, n, o) {
                                    var a = 0;
                                    if (e.offsetParent) for (; (a += e.offsetTop), (e = e.offsetParent); );
                                    return (a = Math.max(a - t - n, 0)), o && (a = Math.min(a, F() - M.innerHeight)), a;
                                })(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip),
                          y = g - s,
                          v = F(),
                          w = 0,
                          S = ((n = y), (u = (o = i).speedAsDuration ? o.speed : Math.abs((n / 1e3) * o.speed)), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)),
                          E = function (e) {
                              var t, n, o;
                              l || (l = e),
                                  (w += e - l),
                                  (d =
                                      s +
                                      y *
                                          ((n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m),
                                          "easeInQuad" === (t = i).easing && (o = n * n),
                                          "easeOutQuad" === t.easing && (o = n * (2 - n)),
                                          "easeInOutQuad" === t.easing && (o = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                                          "easeInCubic" === t.easing && (o = n * n * n),
                                          "easeOutCubic" === t.easing && (o = --n * n * n + 1),
                                          "easeInOutCubic" === t.easing && (o = n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                                          "easeInQuart" === t.easing && (o = n * n * n * n),
                                          "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n),
                                          "easeInOutQuart" === t.easing && (o = n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                                          "easeInQuint" === t.easing && (o = n * n * n * n * n),
                                          "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n),
                                          "easeInOutQuint" === t.easing && (o = n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n),
                                          t.customEasing && (o = t.customEasing(n)),
                                          o || n)),
                                  M.scrollTo(0, Math.floor(d)),
                                  (function (e, t) {
                                      var n = M.pageYOffset;
                                      if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                  })(d, g) || ((O = M.requestAnimationFrame(E)), (l = e));
                          };
                      0 === M.pageYOffset && M.scrollTo(0, 0),
                          (f = a),
                          (h = i),
                          c || (history.pushState && h.updateURL && history.pushState({ smoothScroll: JSON.stringify(h), anchor: f.id }, document.title, f === document.documentElement ? "#top" : "#" + f.id)),
                          "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), C.cancelScroll(!0), M.requestAnimationFrame(E));
                  }
              });
          var t = function (e) {
                  if (
                      !e.defaultPrevented &&
                      !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
                      "closest" in e.target &&
                      (a = e.target.closest(o)) &&
                      "a" === a.tagName.toLowerCase() &&
                      !e.target.closest(b.ignore) &&
                      a.hostname === M.location.hostname &&
                      a.pathname === M.location.pathname &&
                      /#/.test(a.href)
                  ) {
                      var t, n;
                      try {
                          t = r(decodeURIComponent(a.hash));
                      } catch (e) {
                          t = r(a.hash);
                      }
                      if ("#" === t) {
                          if (!b.topOnEmptyHash) return;
                          n = document.documentElement;
                      } else n = document.querySelector(t);
                      (n = n || "#top" !== t ? n : document.documentElement) &&
                          (e.preventDefault(),
                          (function (e) {
                              if (history.replaceState && e.updateURL && !history.state) {
                                  var t = M.location.hash;
                                  (t = t || ""), history.replaceState({ smoothScroll: JSON.stringify(e), anchor: t || M.pageYOffset }, document.title, t || M.location.href);
                              }
                          })(b),
                          C.animateScroll(n, a));
                  }
              },
              n = function (e) {
                  if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                      var t = history.state.anchor;
                      ("string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor)))) || C.animateScroll(t, null, { updateURL: !1 });
                  }
              };
          C.destroy = function () {
              b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), C.cancelScroll(), (O = A = a = b = null));
          };
          return (
              (function () {
                  if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype))
                      throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                  C.destroy(), (b = I(q, e || {})), (A = b.header ? document.querySelector(b.header) : null), document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
              })(),
              C
          );
      };
  });

// Tiny Slider

var tns = (function () {
  var t = window,
      Ai =
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.msRequestAnimationFrame ||
          function (t) {
              return setTimeout(t, 16);
          },
      e = window,
      Ni =
          e.cancelAnimationFrame ||
          e.mozCancelAnimationFrame ||
          function (t) {
              clearTimeout(t);
          };
  function Li() {
      for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++) if (null !== (t = arguments[a])) for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
      return i;
  }
  function Bi(t) {
      return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
  }
  function Si(t, e, n, i) {
      if (i)
          try {
              t.setItem(e, n);
          } catch (t) {}
      return n;
  }
  function Hi() {
      var t = document,
          e = t.body;
      return e || ((e = t.createElement("body")).fake = !0), e;
  }
  var n = document.documentElement;
  function Oi(t) {
      var e = "";
      return t.fake && ((e = n.style.overflow), (t.style.background = ""), (t.style.overflow = n.style.overflow = "hidden"), n.appendChild(t)), e;
  }
  function Di(t, e) {
      t.fake && (t.remove(), (n.style.overflow = e), n.offsetHeight);
  }
  function ki(t, e, n, i) {
      "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i);
  }
  function Ri(t) {
      return ("insertRule" in t ? t.cssRules : t.rules).length;
  }
  function Ii(t, e, n) {
      for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
  }
  var i = "classList" in document.createElement("_"),
      Pi = i
          ? function (t, e) {
                return t.classList.contains(e);
            }
          : function (t, e) {
                return 0 <= t.className.indexOf(e);
            },
      zi = i
          ? function (t, e) {
                Pi(t, e) || t.classList.add(e);
            }
          : function (t, e) {
                Pi(t, e) || (t.className += " " + e);
            },
      Wi = i
          ? function (t, e) {
                Pi(t, e) && t.classList.remove(e);
            }
          : function (t, e) {
                Pi(t, e) && (t.className = t.className.replace(e, ""));
            };
  function qi(t, e) {
      return t.hasAttribute(e);
  }
  function Fi(t, e) {
      return t.getAttribute(e);
  }
  function r(t) {
      return void 0 !== t.item;
  }
  function ji(t, e) {
      if (((t = r(t) || t instanceof Array ? t : [t]), "[object Object]" === Object.prototype.toString.call(e))) for (var n = t.length; n--; ) for (var i in e) t[n].setAttribute(i, e[i]);
  }
  function Vi(t, e) {
      t = r(t) || t instanceof Array ? t : [t];
      for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; ) for (var a = n; a--; ) t[i].removeAttribute(e[a]);
  }
  function Gi(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
      return e;
  }
  function Qi(t, e) {
      "none" !== t.style.display && (t.style.display = "none");
  }
  function Xi(t, e) {
      "none" === t.style.display && (t.style.display = "");
  }
  function Yi(t) {
      return "none" !== window.getComputedStyle(t).display;
  }
  function Ki(e) {
      if ("string" == typeof e) {
          var n = [e],
              i = e.charAt(0).toUpperCase() + e.substr(1);
          ["Webkit", "Moz", "ms", "O"].forEach(function (t) {
              ("ms" === t && "transform" !== e) || n.push(t + i);
          }),
              (e = n);
      }
      for (var t = document.createElement("fakeelement"), a = (e.length, 0); a < e.length; a++) {
          var r = e[a];
          if (void 0 !== t.style[r]) return r;
      }
      return !1;
  }
  function Ji(t, e) {
      var n = !1;
      return /^Webkit/.test(t) ? (n = "webkit" + e + "End") : /^O/.test(t) ? (n = "o" + e + "End") : t && (n = e.toLowerCase() + "end"), n;
  }
  var a = !1;
  try {
      var o = Object.defineProperty({}, "passive", {
          get: function () {
              a = !0;
          },
      });
      window.addEventListener("test", null, o);
  } catch (t) {}
  var u = !!a && { passive: !0 };
  function Ui(t, e, n) {
      for (var i in e) {
          var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
          t.addEventListener(i, e[i], a);
      }
  }
  function _i(t, e) {
      for (var n in e) {
          var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
          t.removeEventListener(n, e[n], i);
      }
  }
  function Zi() {
      return {
          topics: {},
          on: function (t, e) {
              (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
          },
          off: function (t, e) {
              if (this.topics[t])
                  for (var n = 0; n < this.topics[t].length; n++)
                      if (this.topics[t][n] === e) {
                          this.topics[t].splice(n, 1);
                          break;
                      }
          },
          emit: function (e, n) {
              (n.type = e),
                  this.topics[e] &&
                      this.topics[e].forEach(function (t) {
                          t(n, e);
                      });
          },
      };
  }
  Object.keys ||
      (Object.keys = function (t) {
          var e = [];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
          return e;
      }),
      "remove" in Element.prototype ||
          (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
          });
  var $i = function (H) {
      H = Li(
          {
              container: ".slider",
              mode: "carousel",
              axis: "horizontal",
              items: 1,
              gutter: 0,
              edgePadding: 0,
              fixedWidth: !1,
              autoWidth: !1,
              viewportMax: !1,
              slideBy: 1,
              center: !1,
              controls: !0,
              controlsPosition: "top",
              controlsText: ["prev", "next"],
              controlsContainer: !1,
              prevButton: !1,
              nextButton: !1,
              nav: !0,
              navPosition: "top",
              navContainer: !1,
              navAsThumbnails: !1,
              arrowKeys: !1,
              speed: 300,
              autoplay: !1,
              autoplayPosition: "top",
              autoplayTimeout: 5e3,
              autoplayDirection: "forward",
              autoplayText: ["start", "stop"],
              autoplayHoverPause: !1,
              autoplayButton: !1,
              autoplayButtonOutput: !0,
              autoplayResetOnVisibility: !0,
              animateIn: "tns-fadeIn",
              animateOut: "tns-fadeOut",
              animateNormal: "tns-normal",
              animateDelay: !1,
              loop: !0,
              rewind: !1,
              autoHeight: !1,
              responsive: !1,
              lazyload: !1,
              lazyloadSelector: ".tns-lazy-img",
              touch: !0,
              mouseDrag: !1,
              swipeAngle: 15,
              nested: !1,
              preventActionWhenRunning: !1,
              preventScrollOnTouch: !1,
              freezable: !0,
              onInit: !1,
              useLocalStorage: !0,
              nonce: !1,
          },
          H || {}
      );
      var O = document,
          m = window,
          a = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
          e = {},
          n = H.useLocalStorage;
      if (n) {
          var t = navigator.userAgent,
              i = new Date();
          try {
              (e = m.localStorage) ? (e.setItem(i, i), (n = e.getItem(i) == i), e.removeItem(i)) : (n = !1), n || (e = {});
          } catch (t) {
              n = !1;
          }
          n &&
              (e.tnsApp &&
                  e.tnsApp !== t &&
                  ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (t) {
                      e.removeItem(t);
                  }),
              (localStorage.tnsApp = t));
      }
      var y = e.tC
              ? Bi(e.tC)
              : Si(
                    e,
                    "tC",
                    (function () {
                        var t = document,
                            e = Hi(),
                            n = Oi(e),
                            i = t.createElement("div"),
                            a = !1;
                        e.appendChild(i);
                        try {
                            for (var r, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++)
                                if (((r = u[l]), (i.style.width = r), 100 === i.offsetWidth)) {
                                    a = r.replace(o, "");
                                    break;
                                }
                        } catch (t) {}
                        return e.fake ? Di(e, n) : i.remove(), a;
                    })(),
                    n
                ),
          g = e.tPL
              ? Bi(e.tPL)
              : Si(
                    e,
                    "tPL",
                    (function () {
                        var t,
                            e = document,
                            n = Hi(),
                            i = Oi(n),
                            a = e.createElement("div"),
                            r = e.createElement("div"),
                            o = "";
                        (a.className = "tns-t-subp2"), (r.className = "tns-t-ct");
                        for (var u = 0; u < 70; u++) o += "<div></div>";
                        return (r.innerHTML = o), a.appendChild(r), n.appendChild(a), (t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2), n.fake ? Di(n, i) : a.remove(), t;
                    })(),
                    n
                ),
          D = e.tMQ
              ? Bi(e.tMQ)
              : Si(
                    e,
                    "tMQ",
                    (function () {
                        if (window.matchMedia || window.msMatchMedia) return !0;
                        var t,
                            e = document,
                            n = Hi(),
                            i = Oi(n),
                            a = e.createElement("div"),
                            r = e.createElement("style"),
                            o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                        return (
                            (r.type = "text/css"),
                            (a.className = "tns-mq-test"),
                            n.appendChild(r),
                            n.appendChild(a),
                            r.styleSheet ? (r.styleSheet.cssText = o) : r.appendChild(e.createTextNode(o)),
                            (t = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position),
                            n.fake ? Di(n, i) : a.remove(),
                            "absolute" === t
                        );
                    })(),
                    n
                ),
          r = e.tTf ? Bi(e.tTf) : Si(e, "tTf", Ki("transform"), n),
          o = e.t3D
              ? Bi(e.t3D)
              : Si(
                    e,
                    "t3D",
                    (function (t) {
                        if (!t) return !1;
                        if (!window.getComputedStyle) return !1;
                        var e,
                            n = document,
                            i = Hi(),
                            a = Oi(i),
                            r = n.createElement("p"),
                            o = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                        return (
                            (o += "transform"),
                            i.insertBefore(r, null),
                            (r.style[t] = "translate3d(1px,1px,1px)"),
                            (e = window.getComputedStyle(r).getPropertyValue(o)),
                            i.fake ? Di(i, a) : r.remove(),
                            void 0 !== e && 0 < e.length && "none" !== e
                        );
                    })(r),
                    n
                ),
          x = e.tTDu ? Bi(e.tTDu) : Si(e, "tTDu", Ki("transitionDuration"), n),
          u = e.tTDe ? Bi(e.tTDe) : Si(e, "tTDe", Ki("transitionDelay"), n),
          b = e.tADu ? Bi(e.tADu) : Si(e, "tADu", Ki("animationDuration"), n),
          l = e.tADe ? Bi(e.tADe) : Si(e, "tADe", Ki("animationDelay"), n),
          s = e.tTE ? Bi(e.tTE) : Si(e, "tTE", Ji(x, "Transition"), n),
          c = e.tAE ? Bi(e.tAE) : Si(e, "tAE", Ji(b, "Animation"), n),
          f = m.console && "function" == typeof m.console.warn,
          d = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
          v = {};
      if (
          (d.forEach(function (t) {
              if ("string" == typeof H[t]) {
                  var e = H[t],
                      n = O.querySelector(e);
                  if (((v[t] = e), !n || !n.nodeName)) return void (f && console.warn("Can't find", H[t]));
                  H[t] = n;
              }
          }),
          !(H.container.children.length < 1))
      ) {
          var k = H.responsive,
              R = H.nested,
              I = "carousel" === H.mode;
          if (k) {
              0 in k && ((H = Li(H, k[0])), delete k[0]);
              var p = {};
              for (var h in k) {
                  var w = k[h];
                  (w = "number" == typeof w ? { items: w } : w), (p[h] = w);
              }
              (k = p), (p = null);
          }
          if (
              (I ||
                  (function t(e) {
                      for (var n in e) I || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]);
                  })(H),
              !I)
          ) {
              (H.axis = "horizontal"), (H.slideBy = "page"), (H.edgePadding = !1);
              var P = H.animateIn,
                  z = H.animateOut,
                  C = H.animateDelay,
                  W = H.animateNormal;
          }
          var M,
              q,
              F = "horizontal" === H.axis,
              T = O.createElement("div"),
              j = O.createElement("div"),
              V = H.container,
              E = V.parentNode,
              A = V.outerHTML,
              G = V.children,
              Q = G.length,
              X = rn(),
              Y = !1;
          k && En(), I && (V.className += " tns-vpfix");
          var N,
              L,
              B,
              S,
              K,
              J,
              U,
              _,
              Z,
              $ = H.autoWidth,
              tt = sn("fixedWidth"),
              et = sn("edgePadding"),
              nt = sn("gutter"),
              it = un(),
              at = sn("center"),
              rt = $ ? 1 : Math.floor(sn("items")),
              ot = sn("slideBy"),
              ut = H.viewportMax || H.fixedWidthViewportWidth,
              lt = sn("arrowKeys"),
              st = sn("speed"),
              ct = H.rewind,
              ft = !ct && H.loop,
              dt = sn("autoHeight"),
              vt = sn("controls"),
              pt = sn("controlsText"),
              ht = sn("nav"),
              mt = sn("touch"),
              yt = sn("mouseDrag"),
              gt = sn("autoplay"),
              xt = sn("autoplayTimeout"),
              bt = sn("autoplayText"),
              wt = sn("autoplayHoverPause"),
              Ct = sn("autoplayResetOnVisibility"),
              Mt = ((U = null), (_ = sn("nonce")), (Z = document.createElement("style")), U && Z.setAttribute("media", U), _ && Z.setAttribute("nonce", _), document.querySelector("head").appendChild(Z), Z.sheet ? Z.sheet : Z.styleSheet),
              Tt = H.lazyload,
              Et = H.lazyloadSelector,
              At = [],
              Nt = ft
                  ? ((K = (function () {
                        {
                            if ($ || (tt && !ut)) return Q - 1;
                            var t = tt ? "fixedWidth" : "items",
                                e = [];
                            if (((tt || H[t] < Q) && e.push(H[t]), k))
                                for (var n in k) {
                                    var i = k[n][t];
                                    i && (tt || i < Q) && e.push(i);
                                }
                            return e.length || e.push(0), Math.ceil(tt ? ut / Math.min.apply(null, e) : Math.max.apply(null, e));
                        }
                    })()),
                    (J = I ? Math.ceil((5 * K - Q) / 2) : 4 * K - Q),
                    (J = Math.max(K, J)),
                    ln("edgePadding") ? J + 1 : J)
                  : 0,
              Lt = I ? Q + 2 * Nt : Q + Nt,
              Bt = !((!tt && !$) || ft),
              St = tt ? _n() : null,
              Ht = !I || !ft,
              Ot = F ? "left" : "top",
              Dt = "",
              kt = "",
              Rt = tt
                  ? function () {
                        return at && !ft ? Q - 1 : Math.ceil(-St / (tt + nt));
                    }
                  : $
                  ? function () {
                        for (var t = 0; t < Lt; t++) if (N[t] >= -St) return t;
                    }
                  : function () {
                        return at && I && !ft ? Q - 1 : ft || I ? Math.max(0, Lt - Math.ceil(rt)) : Lt - 1;
                    },
              It = en(sn("startIndex")),
              Pt = It,
              zt = (tn(), 0),
              Wt = $ ? null : Rt(),
              qt = H.preventActionWhenRunning,
              Ft = H.swipeAngle,
              jt = !Ft || "?",
              Vt = !1,
              Gt = H.onInit,
              Qt = new Zi(),
              Xt = " tns-slider tns-" + H.mode,
              Yt = V.id || ((S = window.tnsId), (window.tnsId = S ? S + 1 : 1), "tns" + window.tnsId),
              Kt = sn("disable"),
              Jt = !1,
              Ut = H.freezable,
              _t = !(!Ut || $) && Tn(),
              Zt = !1,
              $t = {
                  click: oi,
                  keydown: function (t) {
                      t = pi(t);
                      var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                      0 <= e && (0 === e ? we.disabled || oi(t, -1) : Ce.disabled || oi(t, 1));
                  },
              },
              te = {
                  click: function (t) {
                      if (Vt) {
                          if (qt) return;
                          ai();
                      }
                      var e = hi((t = pi(t)));
                      for (; e !== Ae && !qi(e, "data-nav"); ) e = e.parentNode;
                      if (qi(e, "data-nav")) {
                          var n = (Se = Number(Fi(e, "data-nav"))),
                              i = tt || $ ? (n * Q) / Le : n * rt,
                              a = le ? n : Math.min(Math.ceil(i), Q - 1);
                          ri(a, t), He === n && (Pe && fi(), (Se = -1));
                      }
                  },
                  keydown: function (t) {
                      t = pi(t);
                      var e = O.activeElement;
                      if (!qi(e, "data-nav")) return;
                      var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode),
                          i = Number(Fi(e, "data-nav"));
                      0 <= n && (0 === n ? 0 < i && vi(Ee[i - 1]) : 1 === n ? i < Le - 1 && vi(Ee[i + 1]) : ri((Se = i), t));
                  },
              },
              ee = {
                  mouseover: function () {
                      Pe && (li(), (ze = !0));
                  },
                  mouseout: function () {
                      ze && (ui(), (ze = !1));
                  },
              },
              ne = {
                  visibilitychange: function () {
                      O.hidden ? Pe && (li(), (qe = !0)) : qe && (ui(), (qe = !1));
                  },
              },
              ie = {
                  keydown: function (t) {
                      t = pi(t);
                      var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                      0 <= e && oi(t, 0 === e ? -1 : 1);
                  },
              },
              ae = { touchstart: xi, touchmove: bi, touchend: wi, touchcancel: wi },
              re = { mousedown: xi, mousemove: bi, mouseup: wi, mouseleave: wi },
              oe = ln("controls"),
              ue = ln("nav"),
              le = !!$ || H.navAsThumbnails,
              se = ln("autoplay"),
              ce = ln("touch"),
              fe = ln("mouseDrag"),
              de = "tns-slide-active",
              ve = "tns-slide-cloned",
              pe = "tns-complete",
              he = {
                  load: function (t) {
                      kn(hi(t));
                  },
                  error: function (t) {
                      (e = hi(t)), zi(e, "failed"), Rn(e);
                      var e;
                  },
              },
              me = "force" === H.preventScrollOnTouch;
          if (oe)
              var ye,
                  ge,
                  xe = H.controlsContainer,
                  be = H.controlsContainer ? H.controlsContainer.outerHTML : "",
                  we = H.prevButton,
                  Ce = H.nextButton,
                  Me = H.prevButton ? H.prevButton.outerHTML : "",
                  Te = H.nextButton ? H.nextButton.outerHTML : "";
          if (ue)
              var Ee,
                  Ae = H.navContainer,
                  Ne = H.navContainer ? H.navContainer.outerHTML : "",
                  Le = $ ? Q : Mi(),
                  Be = 0,
                  Se = -1,
                  He = an(),
                  Oe = He,
                  De = "tns-nav-active",
                  ke = "Carousel Page ",
                  Re = " (Current Slide)";
          if (se)
              var Ie,
                  Pe,
                  ze,
                  We,
                  qe,
                  Fe = "forward" === H.autoplayDirection ? 1 : -1,
                  je = H.autoplayButton,
                  Ve = H.autoplayButton ? H.autoplayButton.outerHTML : "",
                  Ge = ["<span class='tns-visually-hidden'>", " animation</span>"];
          if (ce || fe)
              var Qe,
                  Xe,
                  Ye = {},
                  Ke = {},
                  Je = !1,
                  Ue = F
                      ? function (t, e) {
                            return t.x - e.x;
                        }
                      : function (t, e) {
                            return t.y - e.y;
                        };
          $ || $e(Kt || _t),
              r && ((Ot = r), (Dt = "translate"), o ? ((Dt += F ? "3d(" : "3d(0px, "), (kt = F ? ", 0px, 0px)" : ", 0px)")) : ((Dt += F ? "X(" : "Y("), (kt = ")"))),
              I && (V.className = V.className.replace("tns-vpfix", "")),
              (function () {
                  ln("gutter");
                  (T.className = "tns-outer"), (j.className = "tns-inner"), (T.id = Yt + "-ow"), (j.id = Yt + "-iw"), "" === V.id && (V.id = Yt);
                  (Xt += g || $ ? " tns-subpixel" : " tns-no-subpixel"), (Xt += y ? " tns-calc" : " tns-no-calc"), $ && (Xt += " tns-autowidth");
                  (Xt += " tns-" + H.axis), (V.className += Xt), I ? (((M = O.createElement("div")).id = Yt + "-mw"), (M.className = "tns-ovh"), T.appendChild(M), M.appendChild(j)) : T.appendChild(j);
                  if (dt) {
                      var t = M || j;
                      t.className += " tns-ah";
                  }
                  if (
                      (E.insertBefore(T, V),
                      j.appendChild(V),
                      Ii(G, function (t, e) {
                          zi(t, "tns-item"), t.id || (t.id = Yt + "-item" + e), !I && W && zi(t, W), ji(t, { "aria-hidden": "true", tabindex: "-1" });
                      }),
                      Nt)
                  ) {
                      for (var e = O.createDocumentFragment(), n = O.createDocumentFragment(), i = Nt; i--; ) {
                          var a = i % Q,
                              r = G[a].cloneNode(!0);
                          if ((zi(r, ve), Vi(r, "id"), n.insertBefore(r, n.firstChild), I)) {
                              var o = G[Q - 1 - a].cloneNode(!0);
                              zi(o, ve), Vi(o, "id"), e.appendChild(o);
                          }
                      }
                      V.insertBefore(e, V.firstChild), V.appendChild(n), (G = V.children);
                  }
              })(),
              (function () {
                  if (!I)
                      for (var t = It, e = It + Math.min(Q, rt); t < e; t++) {
                          var n = G[t];
                          (n.style.left = (100 * (t - It)) / rt + "%"), zi(n, P), Wi(n, W);
                      }
                  F &&
                      (g || $
                          ? (ki(Mt, "#" + Yt + " > .tns-item", "font-size:" + m.getComputedStyle(G[0]).fontSize + ";", Ri(Mt)), ki(Mt, "#" + Yt, "font-size:0;", Ri(Mt)))
                          : I &&
                            Ii(G, function (t, e) {
                                var n;
                                t.style.marginLeft = ((n = e), y ? y + "(" + 100 * n + "% / " + Lt + ")" : (100 * n) / Lt + "%");
                            }));
                  if (D) {
                      if (x) {
                          var i = M && H.autoHeight ? hn(H.speed) : "";
                          ki(Mt, "#" + Yt + "-mw", i, Ri(Mt));
                      }
                      (i = cn(H.edgePadding, H.gutter, H.fixedWidth, H.speed, H.autoHeight)),
                          ki(Mt, "#" + Yt + "-iw", i, Ri(Mt)),
                          I && ((i = F && !$ ? "width:" + fn(H.fixedWidth, H.gutter, H.items) + ";" : ""), x && (i += hn(st)), ki(Mt, "#" + Yt, i, Ri(Mt))),
                          (i = F && !$ ? dn(H.fixedWidth, H.gutter, H.items) : ""),
                          H.gutter && (i += vn(H.gutter)),
                          I || (x && (i += hn(st)), b && (i += mn(st))),
                          i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt));
                  } else {
                      I && dt && (M.style[x] = st / 1e3 + "s"), (j.style.cssText = cn(et, nt, tt, dt)), I && F && !$ && (V.style.width = fn(tt, nt, rt));
                      var i = F && !$ ? dn(tt, nt, rt) : "";
                      nt && (i += vn(nt)), i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt));
                  }
                  if (k && D)
                      for (var a in k) {
                          a = parseInt(a);
                          var r = k[a],
                              i = "",
                              o = "",
                              u = "",
                              l = "",
                              s = "",
                              c = $ ? null : sn("items", a),
                              f = sn("fixedWidth", a),
                              d = sn("speed", a),
                              v = sn("edgePadding", a),
                              p = sn("autoHeight", a),
                              h = sn("gutter", a);
                          x && M && sn("autoHeight", a) && "speed" in r && (o = "#" + Yt + "-mw{" + hn(d) + "}"),
                              ("edgePadding" in r || "gutter" in r) && (u = "#" + Yt + "-iw{" + cn(v, h, f, d, p) + "}"),
                              I && F && !$ && ("fixedWidth" in r || "items" in r || (tt && "gutter" in r)) && (l = "width:" + fn(f, h, c) + ";"),
                              x && "speed" in r && (l += hn(d)),
                              l && (l = "#" + Yt + "{" + l + "}"),
                              ("fixedWidth" in r || (tt && "gutter" in r) || (!I && "items" in r)) && (s += dn(f, h, c)),
                              "gutter" in r && (s += vn(h)),
                              !I && "speed" in r && (x && (s += hn(d)), b && (s += mn(d))),
                              s && (s = "#" + Yt + " > .tns-item{" + s + "}"),
                              (i = o + u + l + s) && Mt.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", Mt.cssRules.length);
                      }
              })(),
              yn();
          var _e = ft
                  ? I
                      ? function () {
                            var t = zt,
                                e = Wt;
                            (t += ot), (e -= ot), et ? ((t += 1), (e -= 1)) : tt && (it + nt) % (tt + nt) && (e -= 1), Nt && (e < It ? (It -= Q) : It < t && (It += Q));
                        }
                      : function () {
                            if (Wt < It) for (; zt + Q <= It; ) It -= Q;
                            else if (It < zt) for (; It <= Wt - Q; ) It += Q;
                        }
                  : function () {
                        It = Math.max(zt, Math.min(Wt, It));
                    },
              Ze = I
                  ? function () {
                        var e, n, i, a, t, r, o, u, l, s, c;
                        Jn(V, ""),
                            x || !st
                                ? (ti(), (st && Yi(V)) || ai())
                                : ((e = V),
                                  (n = Ot),
                                  (i = Dt),
                                  (a = kt),
                                  (t = Zn()),
                                  (r = st),
                                  (o = ai),
                                  (u = Math.min(r, 10)),
                                  (l = 0 <= t.indexOf("%") ? "%" : "px"),
                                  (t = t.replace(l, "")),
                                  (s = Number(e.style[n].replace(i, "").replace(a, "").replace(l, ""))),
                                  (c = ((t - s) / r) * u),
                                  setTimeout(function t() {
                                      (r -= u), (s += c), (e.style[n] = i + s + l + a), 0 < r ? setTimeout(t, u) : o();
                                  }, u)),
                            F || Ci();
                    }
                  : function () {
                        At = [];
                        var t = {};
                        (t[s] = t[c] = ai), _i(G[Pt], t), Ui(G[It], t), ei(Pt, P, z, !0), ei(It, W, P), (s && c && st && Yi(V)) || ai();
                    };
          return {
              version: "2.9.3",
              getInfo: Ei,
              events: Qt,
              goTo: ri,
              play: function () {
                  gt && !Pe && (ci(), (We = !1));
              },
              pause: function () {
                  Pe && (fi(), (We = !0));
              },
              isOn: Y,
              updateSliderHeight: Fn,
              refresh: yn,
              destroy: function () {
                  if (
                      ((Mt.disabled = !0),
                      Mt.ownerNode && Mt.ownerNode.remove(),
                      _i(m, { resize: Cn }),
                      lt && _i(O, ie),
                      xe && _i(xe, $t),
                      Ae && _i(Ae, te),
                      _i(V, ee),
                      _i(V, ne),
                      je && _i(je, { click: di }),
                      gt && clearInterval(Ie),
                      I && s)
                  ) {
                      var t = {};
                      (t[s] = ai), _i(V, t);
                  }
                  mt && _i(V, ae), yt && _i(V, re);
                  var r = [A, be, Me, Te, Ne, Ve];
                  for (var e in (d.forEach(function (t, e) {
                      var n = "container" === t ? T : H[t];
                      if ("object" == typeof n && n) {
                          var i = !!n.previousElementSibling && n.previousElementSibling,
                              a = n.parentNode;
                          (n.outerHTML = r[e]), (H[t] = i ? i.nextElementSibling : a.firstElementChild);
                      }
                  }),
                  (d = P = z = C = W = F = T = j = V = E = A = G = Q = q = X = $ = tt = et = nt = it = rt = ot = ut = lt = st = ct = ft = dt = Mt = Tt = N = At = Nt = Lt = Bt = St = Ht = Ot = Dt = kt = Rt = It = Pt = zt = Wt = Ft = jt = Vt = Gt = Qt = Xt = Yt = Kt = Jt = Ut = _t = Zt = $t = te = ee = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = pe = he = L = vt = pt = xe = be = we = Ce = ye = ge = ht = Ae = Ne = Ee = Le = Be = Se = He = Oe = De = ke = Re = gt = xt = Fe = bt = wt = je = Ve = Ct = Ge = Ie = Pe = ze = We = qe = Ye = Ke = Qe = Je = Xe = Ue = mt = yt = null),
                  this))
                      "rebuild" !== e && (this[e] = null);
                  Y = !1;
              },
              rebuild: function () {
                  return $i(Li(H, v));
              },
          };
      }
      function $e(t) {
          t && (vt = ht = mt = yt = lt = gt = wt = Ct = !1);
      }
      function tn() {
          for (var t = I ? It - Nt : It; t < 0; ) t += Q;
          return (t % Q) + 1;
      }
      function en(t) {
          return (t = t ? Math.max(0, Math.min(ft ? Q - 1 : Q - rt, t)) : 0), I ? t + Nt : t;
      }
      function nn(t) {
          for (null == t && (t = It), I && (t -= Nt); t < 0; ) t += Q;
          return Math.floor(t % Q);
      }
      function an() {
          var t,
              e = nn();
          return (t = le ? e : tt || $ ? Math.ceil(((e + 1) * Le) / Q - 1) : Math.floor(e / rt)), !ft && I && It === Wt && (t = Le - 1), t;
      }
      function rn() {
          return m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth;
      }
      function on(t) {
          return "top" === t ? "afterbegin" : "beforeend";
      }
      function un() {
          var t = et ? 2 * et - nt : 0;
          return (
              (function t(e) {
                  if (null != e) {
                      var n,
                          i,
                          a = O.createElement("div");
                      return e.appendChild(a), (i = (n = a.getBoundingClientRect()).right - n.left), a.remove(), i || t(e.parentNode);
                  }
              })(E) - t
          );
      }
      function ln(t) {
          if (H[t]) return !0;
          if (k) for (var e in k) if (k[e][t]) return !0;
          return !1;
      }
      function sn(t, e) {
          if ((null == e && (e = X), "items" === t && tt)) return Math.floor((it + nt) / (tt + nt)) || 1;
          var n = H[t];
          if (k) for (var i in k) e >= parseInt(i) && t in k[i] && (n = k[i][t]);
          return "slideBy" === t && "page" === n && (n = sn("items")), I || ("slideBy" !== t && "items" !== t) || (n = Math.floor(n)), n;
      }
      function cn(t, e, n, i, a) {
          var r = "";
          if (void 0 !== t) {
              var o = t;
              e && (o -= e), (r = F ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;");
          } else if (e && !n) {
              var u = "-" + e + "px";
              r = "margin: 0 " + (F ? u + " 0 0" : "0 " + u + " 0") + ";";
          }
          return !I && a && x && i && (r += hn(i)), r;
      }
      function fn(t, e, n) {
          return t ? (t + e) * Lt + "px" : y ? y + "(" + 100 * Lt + "% / " + n + ")" : (100 * Lt) / n + "%";
      }
      function dn(t, e, n) {
          var i;
          if (t) i = t + e + "px";
          else {
              I || (n = Math.floor(n));
              var a = I ? Lt : n;
              i = y ? y + "(100% / " + a + ")" : 100 / a + "%";
          }
          return (i = "width:" + i), "inner" !== R ? i + ";" : i + " !important;";
      }
      function vn(t) {
          var e = "";
          !1 !== t && (e = (F ? "padding-" : "margin-") + (F ? "right" : "bottom") + ": " + t + "px;");
          return e;
      }
      function pn(t, e) {
          var n = t.substring(0, t.length - e).toLowerCase();
          return n && (n = "-" + n + "-"), n;
      }
      function hn(t) {
          return pn(x, 18) + "transition-duration:" + t / 1e3 + "s;";
      }
      function mn(t) {
          return pn(b, 17) + "animation-duration:" + t / 1e3 + "s;";
      }
      function yn() {
          if (ln("autoHeight") || $ || !F) {
              var t = V.querySelectorAll("img");
              Ii(t, function (t) {
                  var e = t.src;
                  Tt || (e && e.indexOf("data:image") < 0 ? ((t.src = ""), Ui(t, he), zi(t, "loading"), (t.src = e)) : kn(t));
              }),
                  Ai(function () {
                      zn(Gi(t), function () {
                          L = !0;
                      });
                  }),
                  ln("autoHeight") && (t = In(It, Math.min(It + rt - 1, Lt - 1))),
                  Tt
                      ? gn()
                      : Ai(function () {
                            zn(Gi(t), gn);
                        });
          } else I && $n(), bn(), wn();
      }
      function gn() {
          if ($ && 1 < Q) {
              var i = ft ? It : Q - 1;
              !(function t() {
                  var e = G[i].getBoundingClientRect().left,
                      n = G[i - 1].getBoundingClientRect().right;
                  Math.abs(e - n) <= 1
                      ? xn()
                      : setTimeout(function () {
                            t();
                        }, 16);
              })();
          } else xn();
      }
      function xn() {
          (F && !$) || (jn(), $ ? ((St = _n()), Ut && (_t = Tn()), (Wt = Rt()), $e(Kt || _t)) : Ci()), I && $n(), bn(), wn();
      }
      function bn() {
          if (
              (Vn(),
              T.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Hn() + "</span>  of " + Q + "</div>"),
              (B = T.querySelector(".tns-liveregion .current")),
              se)
          ) {
              var t = gt ? "stop" : "start";
              je
                  ? ji(je, { "data-action": t })
                  : H.autoplayButtonOutput && (T.insertAdjacentHTML(on(H.autoplayPosition), '<button type="button" data-action="' + t + '">' + Ge[0] + t + Ge[1] + bt[0] + "</button>"), (je = T.querySelector("[data-action]"))),
                  je && Ui(je, { click: di }),
                  gt && (ci(), wt && Ui(V, ee), Ct && Ui(V, ne));
          }
          if (ue) {
              if (Ae)
                  ji(Ae, { "aria-label": "Carousel Pagination" }),
                      Ii((Ee = Ae.children), function (t, e) {
                          ji(t, { "data-nav": e, tabindex: "-1", "aria-label": ke + (e + 1), "aria-controls": Yt });
                      });
              else {
                  for (var e = "", n = le ? "" : 'style="display:none"', i = 0; i < Q; i++) e += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + Yt + '" ' + n + ' aria-label="' + ke + (i + 1) + '"></button>';
                  (e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>"), T.insertAdjacentHTML(on(H.navPosition), e), (Ae = T.querySelector(".tns-nav")), (Ee = Ae.children);
              }
              if ((Ti(), x)) {
                  var a = x.substring(0, x.length - 18).toLowerCase(),
                      r = "transition: all " + st / 1e3 + "s";
                  a && (r = "-" + a + "-" + r), ki(Mt, "[aria-controls^=" + Yt + "-item]", r, Ri(Mt));
              }
              ji(Ee[He], { "aria-label": ke + (He + 1) + Re }), Vi(Ee[He], "tabindex"), zi(Ee[He], De), Ui(Ae, te);
          }
          oe &&
              (xe ||
                  (we && Ce) ||
                  (T.insertAdjacentHTML(
                      on(H.controlsPosition),
                      '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
                          Yt +
                          '">' +
                          pt[0] +
                          '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
                          Yt +
                          '">' +
                          pt[1] +
                          "</button></div>"
                  ),
                  (xe = T.querySelector(".tns-controls"))),
              (we && Ce) || ((we = xe.children[0]), (Ce = xe.children[1])),
              H.controlsContainer && ji(xe, { "aria-label": "Carousel Navigation", tabindex: "0" }),
              (H.controlsContainer || (H.prevButton && H.nextButton)) && ji([we, Ce], { "aria-controls": Yt, tabindex: "-1" }),
              (H.controlsContainer || (H.prevButton && H.nextButton)) && (ji(we, { "data-controls": "prev" }), ji(Ce, { "data-controls": "next" })),
              (ye = Qn(we)),
              (ge = Qn(Ce)),
              Kn(),
              xe ? Ui(xe, $t) : (Ui(we, $t), Ui(Ce, $t))),
              An();
      }
      function wn() {
          if (I && s) {
              var t = {};
              (t[s] = ai), Ui(V, t);
          }
          mt && Ui(V, ae, H.preventScrollOnTouch),
              yt && Ui(V, re),
              lt && Ui(O, ie),
              "inner" === R
                  ? Qt.on("outerResized", function () {
                        Mn(), Qt.emit("innerLoaded", Ei());
                    })
                  : (k || tt || $ || dt || !F) && Ui(m, { resize: Cn }),
              dt && ("outer" === R ? Qt.on("innerLoaded", Pn) : Kt || Pn()),
              Dn(),
              Kt ? Bn() : _t && Ln(),
              Qt.on("indexChanged", Wn),
              "inner" === R && Qt.emit("innerLoaded", Ei()),
              "function" == typeof Gt && Gt(Ei()),
              (Y = !0);
      }
      function Cn(t) {
          Ai(function () {
              Mn(pi(t));
          });
      }
      function Mn(t) {
          if (Y) {
              "outer" === R && Qt.emit("outerResized", Ei(t)), (X = rn());
              var e,
                  n = q,
                  i = !1;
              k && (En(), (e = n !== q) && Qt.emit("newBreakpointStart", Ei(t)));
              var a,
                  r,
                  o,
                  u,
                  l = rt,
                  s = Kt,
                  c = _t,
                  f = lt,
                  d = vt,
                  v = ht,
                  p = mt,
                  h = yt,
                  m = gt,
                  y = wt,
                  g = Ct,
                  x = It;
              if (e) {
                  var b = tt,
                      w = dt,
                      C = pt,
                      M = at,
                      T = bt;
                  if (!D)
                      var E = nt,
                          A = et;
              }
              if (
                  ((lt = sn("arrowKeys")),
                  (vt = sn("controls")),
                  (ht = sn("nav")),
                  (mt = sn("touch")),
                  (at = sn("center")),
                  (yt = sn("mouseDrag")),
                  (gt = sn("autoplay")),
                  (wt = sn("autoplayHoverPause")),
                  (Ct = sn("autoplayResetOnVisibility")),
                  e &&
                      ((Kt = sn("disable")),
                      (tt = sn("fixedWidth")),
                      (st = sn("speed")),
                      (dt = sn("autoHeight")),
                      (pt = sn("controlsText")),
                      (bt = sn("autoplayText")),
                      (xt = sn("autoplayTimeout")),
                      D || ((et = sn("edgePadding")), (nt = sn("gutter")))),
                  $e(Kt),
                  (it = un()),
                  (F && !$) || Kt || (jn(), F || (Ci(), (i = !0))),
                  (tt || $) && ((St = _n()), (Wt = Rt())),
                  (e || tt) && ((rt = sn("items")), (ot = sn("slideBy")), (r = rt !== l) && (tt || $ || (Wt = Rt()), _e())),
                  e &&
                      Kt !== s &&
                      (Kt
                          ? Bn()
                          : (function () {
                                if (!Jt) return;
                                if (((Mt.disabled = !1), (V.className += Xt), $n(), ft)) for (var t = Nt; t--; ) I && Xi(G[t]), Xi(G[Lt - t - 1]);
                                if (!I)
                                    for (var e = It, n = It + Q; e < n; e++) {
                                        var i = G[e],
                                            a = e < It + rt ? P : W;
                                        (i.style.left = (100 * (e - It)) / rt + "%"), zi(i, a);
                                    }
                                Nn(), (Jt = !1);
                            })()),
                  Ut &&
                      (e || tt || $) &&
                      (_t = Tn()) !== c &&
                      (_t
                          ? (ti(Zn(en(0))), Ln())
                          : (!(function () {
                                if (!Zt) return;
                                et && D && (j.style.margin = "");
                                if (Nt) for (var t = "tns-transparent", e = Nt; e--; ) I && Wi(G[e], t), Wi(G[Lt - e - 1], t);
                                Nn(), (Zt = !1);
                            })(),
                            (i = !0))),
                  $e(Kt || _t),
                  gt || (wt = Ct = !1),
                  lt !== f && (lt ? Ui(O, ie) : _i(O, ie)),
                  vt !== d && (vt ? (xe ? Xi(xe) : (we && Xi(we), Ce && Xi(Ce))) : xe ? Qi(xe) : (we && Qi(we), Ce && Qi(Ce))),
                  ht !== v && (ht ? (Xi(Ae), Ti()) : Qi(Ae)),
                  mt !== p && (mt ? Ui(V, ae, H.preventScrollOnTouch) : _i(V, ae)),
                  yt !== h && (yt ? Ui(V, re) : _i(V, re)),
                  gt !== m && (gt ? (je && Xi(je), Pe || We || ci()) : (je && Qi(je), Pe && fi())),
                  wt !== y && (wt ? Ui(V, ee) : _i(V, ee)),
                  Ct !== g && (Ct ? Ui(O, ne) : _i(O, ne)),
                  e)
              ) {
                  if (((tt === b && at === M) || (i = !0), dt !== w && (dt || (j.style.height = "")), vt && pt !== C && ((we.innerHTML = pt[0]), (Ce.innerHTML = pt[1])), je && bt !== T)) {
                      var N = gt ? 1 : 0,
                          L = je.innerHTML,
                          B = L.length - T[N].length;
                      L.substring(B) === T[N] && (je.innerHTML = L.substring(0, B) + bt[N]);
                  }
              } else at && (tt || $) && (i = !0);
              if (
                  ((r || (tt && !$)) && ((Le = Mi()), Ti()),
                  (a = It !== x) ? (Qt.emit("indexChanged", Ei()), (i = !0)) : r ? a || Wn() : (tt || $) && (Dn(), Vn(), Sn()),
                  r &&
                      !I &&
                      (function () {
                          for (var t = It + Math.min(Q, rt), e = Lt; e--; ) {
                              var n = G[e];
                              It <= e && e < t ? (zi(n, "tns-moving"), (n.style.left = (100 * (e - It)) / rt + "%"), zi(n, P), Wi(n, W)) : n.style.left && ((n.style.left = ""), zi(n, W), Wi(n, P)), Wi(n, z);
                          }
                          setTimeout(function () {
                              Ii(G, function (t) {
                                  Wi(t, "tns-moving");
                              });
                          }, 300);
                      })(),
                  !Kt && !_t)
              ) {
                  if (e && !D && ((et === A && nt === E) || (j.style.cssText = cn(et, nt, tt, st, dt)), F)) {
                      I && (V.style.width = fn(tt, nt, rt));
                      var S = dn(tt, nt, rt) + vn(nt);
                      (u = Ri((o = Mt)) - 1), "deleteRule" in o ? o.deleteRule(u) : o.removeRule(u), ki(Mt, "#" + Yt + " > .tns-item", S, Ri(Mt));
                  }
                  dt && Pn(), i && ($n(), (Pt = It));
              }
              e && Qt.emit("newBreakpointEnd", Ei(t));
          }
      }
      function Tn() {
          if (!tt && !$) return Q <= (at ? rt - (rt - 1) / 2 : rt);
          var t = tt ? (tt + nt) * Q : N[Q],
              e = et ? it + 2 * et : it + nt;
          return at && (e -= tt ? (it - tt) / 2 : (it - (N[It + 1] - N[It] - nt)) / 2), t <= e;
      }
      function En() {
          for (var t in ((q = 0), k)) (t = parseInt(t)) <= X && (q = t);
      }
      function An() {
          !gt && je && Qi(je), !ht && Ae && Qi(Ae), vt || (xe ? Qi(xe) : (we && Qi(we), Ce && Qi(Ce)));
      }
      function Nn() {
          gt && je && Xi(je), ht && Ae && Xi(Ae), vt && (xe ? Xi(xe) : (we && Xi(we), Ce && Xi(Ce)));
      }
      function Ln() {
          if (!Zt) {
              if ((et && (j.style.margin = "0px"), Nt)) for (var t = "tns-transparent", e = Nt; e--; ) I && zi(G[e], t), zi(G[Lt - e - 1], t);
              An(), (Zt = !0);
          }
      }
      function Bn() {
          if (!Jt) {
              if (((Mt.disabled = !0), (V.className = V.className.replace(Xt.substring(1), "")), Vi(V, ["style"]), ft)) for (var t = Nt; t--; ) I && Qi(G[t]), Qi(G[Lt - t - 1]);
              if (((F && I) || Vi(j, ["style"]), !I))
                  for (var e = It, n = It + Q; e < n; e++) {
                      var i = G[e];
                      Vi(i, ["style"]), Wi(i, P), Wi(i, W);
                  }
              An(), (Jt = !0);
          }
      }
      function Sn() {
          var t = Hn();
          B.innerHTML !== t && (B.innerHTML = t);
      }
      function Hn() {
          var t = On(),
              e = t[0] + 1,
              n = t[1] + 1;
          return e === n ? e + "" : e + " to " + n;
      }
      function On(t) {
          null == t && (t = Zn());
          var n,
              i,
              a,
              r = It;
          if ((at || et ? ($ || tt) && ((i = -(parseFloat(t) + et)), (a = i + it + 2 * et)) : $ && ((i = N[It]), (a = i + it)), $))
              N.forEach(function (t, e) {
                  e < Lt && ((at || et) && t <= i + 0.5 && (r = e), 0.5 <= a - t && (n = e));
              });
          else {
              if (tt) {
                  var e = tt + nt;
                  at || et ? ((r = Math.floor(i / e)), (n = Math.ceil(a / e - 1))) : (n = r + Math.ceil(it / e) - 1);
              } else if (at || et) {
                  var o = rt - 1;
                  if ((at ? ((r -= o / 2), (n = It + o / 2)) : (n = It + o), et)) {
                      var u = (et * rt) / it;
                      (r -= u), (n += u);
                  }
                  (r = Math.floor(r)), (n = Math.ceil(n));
              } else n = r + rt - 1;
              (r = Math.max(r, 0)), (n = Math.min(n, Lt - 1));
          }
          return [r, n];
      }
      function Dn() {
          if (Tt && !Kt) {
              var t = On();
              t.push(Et),
                  In.apply(null, t).forEach(function (t) {
                      if (!Pi(t, pe)) {
                          var e = {};
                          (e[s] = function (t) {
                              t.stopPropagation();
                          }),
                              Ui(t, e),
                              Ui(t, he),
                              (t.src = Fi(t, "data-src"));
                          var n = Fi(t, "data-srcset");
                          n && (t.srcset = n), zi(t, "loading");
                      }
                  });
          }
      }
      function kn(t) {
          zi(t, "loaded"), Rn(t);
      }
      function Rn(t) {
          zi(t, pe), Wi(t, "loading"), _i(t, he);
      }
      function In(t, e, n) {
          var i = [];
          for (n || (n = "img"); t <= e; )
              Ii(G[t].querySelectorAll(n), function (t) {
                  i.push(t);
              }),
                  t++;
          return i;
      }
      function Pn() {
          var t = In.apply(null, On());
          Ai(function () {
              zn(t, Fn);
          });
      }
      function zn(n, t) {
          return L
              ? t()
              : (n.forEach(function (t, e) {
                    !Tt && t.complete && Rn(t), Pi(t, pe) && n.splice(e, 1);
                }),
                n.length
                    ? void Ai(function () {
                          zn(n, t);
                      })
                    : t());
      }
      function Wn() {
          Dn(),
              Vn(),
              Sn(),
              Kn(),
              (function () {
                  if (ht && ((He = 0 <= Se ? Se : an()), (Se = -1), He !== Oe)) {
                      var t = Ee[Oe],
                          e = Ee[He];
                      ji(t, { tabindex: "-1", "aria-label": ke + (Oe + 1) }), Wi(t, De), ji(e, { "aria-label": ke + (He + 1) + Re }), Vi(e, "tabindex"), zi(e, De), (Oe = He);
                  }
              })();
      }
      function qn(t, e) {
          for (var n = [], i = t, a = Math.min(t + e, Lt); i < a; i++) n.push(G[i].offsetHeight);
          return Math.max.apply(null, n);
      }
      function Fn() {
          var t = dt ? qn(It, rt) : qn(Nt, Q),
              e = M || j;
          e.style.height !== t && (e.style.height = t + "px");
      }
      function jn() {
          N = [0];
          var n = F ? "left" : "top",
              i = F ? "right" : "bottom",
              a = G[0].getBoundingClientRect()[n];
          Ii(G, function (t, e) {
              e && N.push(t.getBoundingClientRect()[n] - a), e === Lt - 1 && N.push(t.getBoundingClientRect()[i] - a);
          });
      }
      function Vn() {
          var t = On(),
              n = t[0],
              i = t[1];
          Ii(G, function (t, e) {
              n <= e && e <= i ? qi(t, "aria-hidden") && (Vi(t, ["aria-hidden", "tabindex"]), zi(t, de)) : qi(t, "aria-hidden") || (ji(t, { "aria-hidden": "true", tabindex: "-1" }), Wi(t, de));
          });
      }
      function Gn(t) {
          return t.nodeName.toLowerCase();
      }
      function Qn(t) {
          return "button" === Gn(t);
      }
      function Xn(t) {
          return "true" === t.getAttribute("aria-disabled");
      }
      function Yn(t, e, n) {
          t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
      }
      function Kn() {
          if (vt && !ct && !ft) {
              var t = ye ? we.disabled : Xn(we),
                  e = ge ? Ce.disabled : Xn(Ce),
                  n = It <= zt,
                  i = !ct && Wt <= It;
              n && !t && Yn(ye, we, !0), !n && t && Yn(ye, we, !1), i && !e && Yn(ge, Ce, !0), !i && e && Yn(ge, Ce, !1);
          }
      }
      function Jn(t, e) {
          x && (t.style[x] = e);
      }
      function Un(t) {
          return null == t && (t = It), $ ? (it - (et ? nt : 0) - (N[t + 1] - N[t] - nt)) / 2 : tt ? (it - tt) / 2 : (rt - 1) / 2;
      }
      function _n() {
          var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Lt : N[Lt]);
          return at && !ft && (t = tt ? -(tt + nt) * (Lt - 1) - Un() : Un(Lt - 1) - N[Lt - 1]), 0 < t && (t = 0), t;
      }
      function Zn(t) {
          var e;
          if ((null == t && (t = It), F && !$))
              if (tt) (e = -(tt + nt) * t), at && (e += Un());
              else {
                  var n = r ? Lt : rt;
                  at && (t -= Un()), (e = (100 * -t) / n);
              }
          else (e = -N[t]), at && $ && (e += Un());
          return Bt && (e = Math.max(e, St)), (e += !F || $ || tt ? "px" : "%");
      }
      function $n(t) {
          Jn(V, "0s"), ti(t);
      }
      function ti(t) {
          null == t && (t = Zn()), (V.style[Ot] = Dt + t + kt);
      }
      function ei(t, e, n, i) {
          var a = t + rt;
          ft || (a = Math.min(a, Lt));
          for (var r = t; r < a; r++) {
              var o = G[r];
              i || (o.style.left = (100 * (r - It)) / rt + "%"), C && u && (o.style[u] = o.style[l] = (C * (r - t)) / 1e3 + "s"), Wi(o, e), zi(o, n), i && At.push(o);
          }
      }
      function ni(t, e) {
          Ht && _e(), (It !== Pt || e) && (Qt.emit("indexChanged", Ei()), Qt.emit("transitionStart", Ei()), dt && Pn(), Pe && t && 0 <= ["click", "keydown"].indexOf(t.type) && fi(), (Vt = !0), Ze());
      }
      function ii(t) {
          return t.toLowerCase().replace(/-/g, "");
      }
      function ai(t) {
          if (I || Vt) {
              if ((Qt.emit("transitionEnd", Ei(t)), !I && 0 < At.length))
                  for (var e = 0; e < At.length; e++) {
                      var n = At[e];
                      (n.style.left = ""), l && u && ((n.style[l] = ""), (n.style[u] = "")), Wi(n, z), zi(n, W);
                  }
              if (!t || (!I && t.target.parentNode === V) || (t.target === V && ii(t.propertyName) === ii(Ot))) {
                  if (!Ht) {
                      var i = It;
                      _e(), It !== i && (Qt.emit("indexChanged", Ei()), $n());
                  }
                  "inner" === R && Qt.emit("innerLoaded", Ei()), (Vt = !1), (Pt = It);
              }
          }
      }
      function ri(t, e) {
          if (!_t)
              if ("prev" === t) oi(e, -1);
              else if ("next" === t) oi(e, 1);
              else {
                  if (Vt) {
                      if (qt) return;
                      ai();
                  }
                  var n = nn(),
                      i = 0;
                  if (
                      ("first" === t ? (i = -n) : "last" === t ? (i = I ? Q - rt - n : Q - 1 - n) : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(Q - 1, t))), (i = t - n))),
                      !I && i && Math.abs(i) < rt)
                  ) {
                      var a = 0 < i ? 1 : -1;
                      i += zt <= It + i - Q ? Q * a : 2 * Q * a * -1;
                  }
                  (It += i), I && ft && (It < zt && (It += Q), Wt < It && (It -= Q)), nn(It) !== nn(Pt) && ni(e);
              }
      }
      function oi(t, e) {
          if (Vt) {
              if (qt) return;
              ai();
          }
          var n;
          if (!e) {
              for (var i = hi((t = pi(t))); i !== xe && [we, Ce].indexOf(i) < 0; ) i = i.parentNode;
              var a = [we, Ce].indexOf(i);
              0 <= a && ((n = !0), (e = 0 === a ? -1 : 1));
          }
          if (ct) {
              if (It === zt && -1 === e) return void ri("last", t);
              if (It === Wt && 1 === e) return void ri("first", t);
          }
          e && ((It += ot * e), $ && (It = Math.floor(It)), ni(n || (t && "keydown" === t.type) ? t : null));
      }
      function ui() {
          (Ie = setInterval(function () {
              oi(null, Fe);
          }, xt)),
              (Pe = !0);
      }
      function li() {
          clearInterval(Ie), (Pe = !1);
      }
      function si(t, e) {
          ji(je, { "data-action": t }), (je.innerHTML = Ge[0] + t + Ge[1] + e);
      }
      function ci() {
          ui(), je && si("stop", bt[1]);
      }
      function fi() {
          li(), je && si("start", bt[0]);
      }
      function di() {
          Pe ? (fi(), (We = !0)) : (ci(), (We = !1));
      }
      function vi(t) {
          t.focus();
      }
      function pi(t) {
          return mi((t = t || m.event)) ? t.changedTouches[0] : t;
      }
      function hi(t) {
          return t.target || m.event.srcElement;
      }
      function mi(t) {
          return 0 <= t.type.indexOf("touch");
      }
      function yi(t) {
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function gi() {
          return (a = Ke.y - Ye.y), (r = Ke.x - Ye.x), (t = Math.atan2(a, r) * (180 / Math.PI)), (e = Ft), (n = !1), (i = Math.abs(90 - Math.abs(t))), 90 - e <= i ? (n = "horizontal") : i <= e && (n = "vertical"), n === H.axis;
          var t, e, n, i, a, r;
      }
      function xi(t) {
          if (Vt) {
              if (qt) return;
              ai();
          }
          gt && Pe && li(), (Je = !0), Xe && (Ni(Xe), (Xe = null));
          var e = pi(t);
          Qt.emit(mi(t) ? "touchStart" : "dragStart", Ei(t)),
              !mi(t) && 0 <= ["img", "a"].indexOf(Gn(hi(t))) && yi(t),
              (Ke.x = Ye.x = e.clientX),
              (Ke.y = Ye.y = e.clientY),
              I && ((Qe = parseFloat(V.style[Ot].replace(Dt, ""))), Jn(V, "0s"));
      }
      function bi(t) {
          if (Je) {
              var e = pi(t);
              (Ke.x = e.clientX),
                  (Ke.y = e.clientY),
                  I
                      ? Xe ||
                        (Xe = Ai(function () {
                            !(function t(e) {
                                if (!jt) return void (Je = !1);
                                Ni(Xe);
                                Je &&
                                    (Xe = Ai(function () {
                                        t(e);
                                    }));
                                "?" === jt && (jt = gi());
                                if (jt) {
                                    !me && mi(e) && (me = !0);
                                    try {
                                        e.type && Qt.emit(mi(e) ? "touchMove" : "dragMove", Ei(e));
                                    } catch (t) {}
                                    var n = Qe,
                                        i = Ue(Ke, Ye);
                                    if (!F || tt || $) (n += i), (n += "px");
                                    else {
                                        var a = r ? (i * rt * 100) / ((it + nt) * Lt) : (100 * i) / (it + nt);
                                        (n += a), (n += "%");
                                    }
                                    V.style[Ot] = Dt + n + kt;
                                }
                            })(t);
                        }))
                      : ("?" === jt && (jt = gi()), jt && (me = !0)),
                  ("boolean" != typeof t.cancelable || t.cancelable) && me && t.preventDefault();
          }
      }
      function wi(i) {
          if (Je) {
              Xe && (Ni(Xe), (Xe = null)), I && Jn(V, ""), (Je = !1);
              var t = pi(i);
              (Ke.x = t.clientX), (Ke.y = t.clientY);
              var a = Ue(Ke, Ye);
              if (Math.abs(a)) {
                  if (!mi(i)) {
                      var n = hi(i);
                      Ui(n, {
                          click: function t(e) {
                              yi(e), _i(n, { click: t });
                          },
                      });
                  }
                  I
                      ? (Xe = Ai(function () {
                            if (F && !$) {
                                var t = (-a * rt) / (it + nt);
                                (t = 0 < a ? Math.floor(t) : Math.ceil(t)), (It += t);
                            } else {
                                var e = -(Qe + a);
                                if (e <= 0) It = zt;
                                else if (e >= N[Lt - 1]) It = Wt;
                                else for (var n = 0; n < Lt && e >= N[n]; ) e > N[(It = n)] && a < 0 && (It += 1), n++;
                            }
                            ni(i, a), Qt.emit(mi(i) ? "touchEnd" : "dragEnd", Ei(i));
                        }))
                      : jt && oi(i, 0 < a ? -1 : 1);
              }
          }
          "auto" === H.preventScrollOnTouch && (me = !1), Ft && (jt = "?"), gt && !Pe && ui();
      }
      function Ci() {
          (M || j).style.height = N[It + rt] - N[It] + "px";
      }
      function Mi() {
          var t = tt ? ((tt + nt) * Q) / it : Q / rt;
          return Math.min(Math.ceil(t), Q);
      }
      function Ti() {
          if (ht && !le && Le !== Be) {
              var t = Be,
                  e = Le,
                  n = Xi;
              for (Le < Be && ((t = Le), (e = Be), (n = Qi)); t < e; ) n(Ee[t]), t++;
              Be = Le;
          }
      }
      function Ei(t) {
          return {
              container: V,
              slideItems: G,
              navContainer: Ae,
              navItems: Ee,
              controlsContainer: xe,
              hasControls: oe,
              prevButton: we,
              nextButton: Ce,
              items: rt,
              slideBy: ot,
              cloneCount: Nt,
              slideCount: Q,
              slideCountNew: Lt,
              index: It,
              indexCached: Pt,
              displayIndex: tn(),
              navCurrentIndex: He,
              navCurrentIndexCached: Oe,
              pages: Le,
              pagesCached: Be,
              sheet: Mt,
              isOn: Y,
              event: t || {},
          };
      }
      f && console.warn("No slides found in", H.container);
  };
  return $i;
})();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

// Parallax

!(function (t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t();
  }
})(function () {
  return (function t(e, i, n) {
      function o(r, a) {
          if (!i[r]) {
              if (!e[r]) {
                  var l = "function" == typeof require && require;
                  if (!a && l) return l(r, !0);
                  if (s) return s(r, !0);
                  var h = new Error("Cannot find module '" + r + "'");
                  throw ((h.code = "MODULE_NOT_FOUND"), h);
              }
              var u = (i[r] = { exports: {} });
              e[r][0].call(
                  u.exports,
                  function (t) {
                      var i = e[r][1][t];
                      return o(i || t);
                  },
                  u,
                  u.exports,
                  t,
                  e,
                  i,
                  n
              );
          }
          return i[r].exports;
      }
      for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
      return o;
  })(
      {
          1: [
              function (t, e, i) {
                  "use strict";
                  function n(t) {
                      if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                      return Object(t);
                  }
                  var o = Object.getOwnPropertySymbols,
                      s = Object.prototype.hasOwnProperty,
                      r = Object.prototype.propertyIsEnumerable;
                  e.exports = (function () {
                      try {
                          if (!Object.assign) return !1;
                          var t = new String("abc");
                          if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
                          for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                          if (
                              "0123456789" !==
                              Object.getOwnPropertyNames(e)
                                  .map(function (t) {
                                      return e[t];
                                  })
                                  .join("")
                          )
                              return !1;
                          var n = {};
                          return (
                              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                                  n[t] = t;
                              }),
                              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                          );
                      } catch (t) {
                          return !1;
                      }
                  })()
                      ? Object.assign
                      : function (t, e) {
                            for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                                i = Object(arguments[h]);
                                for (var u in i) s.call(i, u) && (l[u] = i[u]);
                                if (o) {
                                    a = o(i);
                                    for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
                                }
                            }
                            return l;
                        };
              },
              {},
          ],
          2: [
              function (t, e, i) {
                  (function (t) {
                      (function () {
                          var i, n, o, s, r, a;
                          "undefined" != typeof performance && null !== performance && performance.now
                              ? (e.exports = function () {
                                    return performance.now();
                                })
                              : void 0 !== t && null !== t && t.hrtime
                              ? ((e.exports = function () {
                                    return (i() - r) / 1e6;
                                }),
                                (n = t.hrtime),
                                (s = (i = function () {
                                    var t;
                                    return 1e9 * (t = n())[0] + t[1];
                                })()),
                                (a = 1e9 * t.uptime()),
                                (r = s - a))
                              : Date.now
                              ? ((e.exports = function () {
                                    return Date.now() - o;
                                }),
                                (o = Date.now()))
                              : ((e.exports = function () {
                                    return new Date().getTime() - o;
                                }),
                                (o = new Date().getTime()));
                      }.call(this));
                  }.call(this, t("_process")));
              },
              { _process: 3 },
          ],
          3: [
              function (t, e, i) {
                  function n() {
                      throw new Error("setTimeout has not been defined");
                  }
                  function o() {
                      throw new Error("clearTimeout has not been defined");
                  }
                  function s(t) {
                      if (c === setTimeout) return setTimeout(t, 0);
                      if ((c === n || !c) && setTimeout) return (c = setTimeout), setTimeout(t, 0);
                      try {
                          return c(t, 0);
                      } catch (e) {
                          try {
                              return c.call(null, t, 0);
                          } catch (e) {
                              return c.call(this, t, 0);
                          }
                      }
                  }
                  function r(t) {
                      if (d === clearTimeout) return clearTimeout(t);
                      if ((d === o || !d) && clearTimeout) return (d = clearTimeout), clearTimeout(t);
                      try {
                          return d(t);
                      } catch (e) {
                          try {
                              return d.call(null, t);
                          } catch (e) {
                              return d.call(this, t);
                          }
                      }
                  }
                  function a() {
                      v && p && ((v = !1), p.length ? (f = p.concat(f)) : (y = -1), f.length && l());
                  }
                  function l() {
                      if (!v) {
                          var t = s(a);
                          v = !0;
                          for (var e = f.length; e; ) {
                              for (p = f, f = []; ++y < e; ) p && p[y].run();
                              (y = -1), (e = f.length);
                          }
                          (p = null), (v = !1), r(t);
                      }
                  }
                  function h(t, e) {
                      (this.fun = t), (this.array = e);
                  }
                  function u() {}
                  var c,
                      d,
                      m = (e.exports = {});
                  !(function () {
                      try {
                          c = "function" == typeof setTimeout ? setTimeout : n;
                      } catch (t) {
                          c = n;
                      }
                      try {
                          d = "function" == typeof clearTimeout ? clearTimeout : o;
                      } catch (t) {
                          d = o;
                      }
                  })();
                  var p,
                      f = [],
                      v = !1,
                      y = -1;
                  (m.nextTick = function (t) {
                      var e = new Array(arguments.length - 1);
                      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                      f.push(new h(t, e)), 1 !== f.length || v || s(l);
                  }),
                      (h.prototype.run = function () {
                          this.fun.apply(null, this.array);
                      }),
                      (m.title = "browser"),
                      (m.browser = !0),
                      (m.env = {}),
                      (m.argv = []),
                      (m.version = ""),
                      (m.versions = {}),
                      (m.on = u),
                      (m.addListener = u),
                      (m.once = u),
                      (m.off = u),
                      (m.removeListener = u),
                      (m.removeAllListeners = u),
                      (m.emit = u),
                      (m.prependListener = u),
                      (m.prependOnceListener = u),
                      (m.listeners = function (t) {
                          return [];
                      }),
                      (m.binding = function (t) {
                          throw new Error("process.binding is not supported");
                      }),
                      (m.cwd = function () {
                          return "/";
                      }),
                      (m.chdir = function (t) {
                          throw new Error("process.chdir is not supported");
                      }),
                      (m.umask = function () {
                          return 0;
                      });
              },
              {},
          ],
          4: [
              function (t, e, i) {
                  (function (i) {
                      for (
                          var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0;
                          !a && h < s.length;
                          h++
                      )
                          (a = o[s[h] + "Request" + r]), (l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r]);
                      if (!a || !l) {
                          var u = 0,
                              c = 0,
                              d = [];
                          (a = function (t) {
                              if (0 === d.length) {
                                  var e = n(),
                                      i = Math.max(0, 1e3 / 60 - (e - u));
                                  (u = i + e),
                                      setTimeout(function () {
                                          var t = d.slice(0);
                                          d.length = 0;
                                          for (var e = 0; e < t.length; e++)
                                              if (!t[e].cancelled)
                                                  try {
                                                      t[e].callback(u);
                                                  } catch (t) {
                                                      setTimeout(function () {
                                                          throw t;
                                                      }, 0);
                                                  }
                                      }, Math.round(i));
                              }
                              return d.push({ handle: ++c, callback: t, cancelled: !1 }), c;
                          }),
                              (l = function (t) {
                                  for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0);
                              });
                      }
                      (e.exports = function (t) {
                          return a.call(o, t);
                      }),
                          (e.exports.cancel = function () {
                              l.apply(o, arguments);
                          }),
                          (e.exports.polyfill = function () {
                              (o.requestAnimationFrame = a), (o.cancelAnimationFrame = l);
                          });
                  }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
              },
              { "performance-now": 2 },
          ],
          5: [
              function (t, e, i) {
                  "use strict";
                  function n(t, e) {
                      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                  }
                  var o = (function () {
                          function t(t, e) {
                              for (var i = 0; i < e.length; i++) {
                                  var n = e[i];
                                  (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                              }
                          }
                          return function (e, i, n) {
                              return i && t(e.prototype, i), n && t(e, n), e;
                          };
                      })(),
                      s = t("raf"),
                      r = t("object-assign"),
                      a = {
                          propertyCache: {},
                          vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
                          clamp: function (t, e, i) {
                              return e < i ? (t < e ? e : t > i ? i : t) : t < i ? i : t > e ? e : t;
                          },
                          data: function (t, e) {
                              return a.deserialize(t.getAttribute("data-" + e));
                          },
                          deserialize: function (t) {
                              return "true" === t || ("false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t));
                          },
                          camelCase: function (t) {
                              return t.replace(/-+(.)?/g, function (t, e) {
                                  return e ? e.toUpperCase() : "";
                              });
                          },
                          accelerate: function (t) {
                              a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden");
                          },
                          transformSupport: function (t) {
                              for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
                                  if ((null !== a.vendors[l] ? ((s = a.vendors[l][0] + "transform"), (r = a.vendors[l][1] + "Transform")) : ((s = "transform"), (r = "transform")), void 0 !== e.style[r])) {
                                      i = !0;
                                      break;
                                  }
                              switch (t) {
                                  case "2D":
                                      o = i;
                                      break;
                                  case "3D":
                                      if (i) {
                                          var u = document.body || document.createElement("body"),
                                              c = document.documentElement,
                                              d = c.style.overflow,
                                              m = !1;
                                          document.body || ((m = !0), (c.style.overflow = "hidden"), c.appendChild(u), (u.style.overflow = "hidden"), (u.style.background = "")),
                                              u.appendChild(e),
                                              (e.style[r] = "translate3d(1px,1px,1px)"),
                                              (o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n),
                                              (c.style.overflow = d),
                                              u.removeChild(e),
                                              m && (u.removeAttribute("style"), u.parentNode.removeChild(u));
                                      }
                              }
                              return o;
                          },
                          css: function (t, e, i) {
                              var n = a.propertyCache[e];
                              if (!n)
                                  for (var o = 0, s = a.vendors.length; o < s; o++)
                                      if (((n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e), void 0 !== t.style[n])) {
                                          a.propertyCache[e] = n;
                                          break;
                                      }
                              t.style[n] = i;
                          },
                      },
                      l = {
                          relativeInput: !1,
                          clipRelativeInput: !1,
                          inputElement: null,
                          hoverOnly: !1,
                          calibrationThreshold: 100,
                          calibrationDelay: 500,
                          supportDelay: 500,
                          calibrateX: !1,
                          calibrateY: !0,
                          invertX: !0,
                          invertY: !0,
                          limitX: !1,
                          limitY: !1,
                          scalarX: 10,
                          scalarY: 10,
                          frictionX: 0.1,
                          frictionY: 0.1,
                          originX: 0.5,
                          originY: 0.5,
                          pointerEvents: !1,
                          precision: 1,
                          onReady: null,
                          selector: null,
                      },
                      h = (function () {
                          function t(e, i) {
                              n(this, t), (this.element = e);
                              var o = {
                                  calibrateX: a.data(this.element, "calibrate-x"),
                                  calibrateY: a.data(this.element, "calibrate-y"),
                                  invertX: a.data(this.element, "invert-x"),
                                  invertY: a.data(this.element, "invert-y"),
                                  limitX: a.data(this.element, "limit-x"),
                                  limitY: a.data(this.element, "limit-y"),
                                  scalarX: a.data(this.element, "scalar-x"),
                                  scalarY: a.data(this.element, "scalar-y"),
                                  frictionX: a.data(this.element, "friction-x"),
                                  frictionY: a.data(this.element, "friction-y"),
                                  originX: a.data(this.element, "origin-x"),
                                  originY: a.data(this.element, "origin-y"),
                                  pointerEvents: a.data(this.element, "pointer-events"),
                                  precision: a.data(this.element, "precision"),
                                  relativeInput: a.data(this.element, "relative-input"),
                                  clipRelativeInput: a.data(this.element, "clip-relative-input"),
                                  hoverOnly: a.data(this.element, "hover-only"),
                                  inputElement: document.querySelector(a.data(this.element, "input-element")),
                                  selector: a.data(this.element, "selector"),
                              };
                              for (var s in o) null === o[s] && delete o[s];
                              r(this, l, o, i),
                                  this.inputElement || (this.inputElement = this.element),
                                  (this.calibrationTimer = null),
                                  (this.calibrationFlag = !0),
                                  (this.enabled = !1),
                                  (this.depthsX = []),
                                  (this.depthsY = []),
                                  (this.raf = null),
                                  (this.bounds = null),
                                  (this.elementPositionX = 0),
                                  (this.elementPositionY = 0),
                                  (this.elementWidth = 0),
                                  (this.elementHeight = 0),
                                  (this.elementCenterX = 0),
                                  (this.elementCenterY = 0),
                                  (this.elementRangeX = 0),
                                  (this.elementRangeY = 0),
                                  (this.calibrationX = 0),
                                  (this.calibrationY = 0),
                                  (this.inputX = 0),
                                  (this.inputY = 0),
                                  (this.motionX = 0),
                                  (this.motionY = 0),
                                  (this.velocityX = 0),
                                  (this.velocityY = 0),
                                  (this.onMouseMove = this.onMouseMove.bind(this)),
                                  (this.onDeviceOrientation = this.onDeviceOrientation.bind(this)),
                                  (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                                  (this.onOrientationTimer = this.onOrientationTimer.bind(this)),
                                  (this.onMotionTimer = this.onMotionTimer.bind(this)),
                                  (this.onCalibrationTimer = this.onCalibrationTimer.bind(this)),
                                  (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                                  (this.onWindowResize = this.onWindowResize.bind(this)),
                                  (this.windowWidth = null),
                                  (this.windowHeight = null),
                                  (this.windowCenterX = null),
                                  (this.windowCenterY = null),
                                  (this.windowRadiusX = null),
                                  (this.windowRadiusY = null),
                                  (this.portrait = !1),
                                  (this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)),
                                  (this.motionSupport = !!window.DeviceMotionEvent && !this.desktop),
                                  (this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop),
                                  (this.orientationStatus = 0),
                                  (this.motionStatus = 0),
                                  this.initialise();
                          }
                          return (
                              o(t, [
                                  {
                                      key: "initialise",
                                      value: function () {
                                          void 0 === this.transform2DSupport && ((this.transform2DSupport = a.transformSupport("2D")), (this.transform3DSupport = a.transformSupport("3D"))),
                                              this.transform3DSupport && a.accelerate(this.element),
                                              "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"),
                                              this.pointerEvents || (this.element.style.pointerEvents = "none"),
                                              this.updateLayers(),
                                              this.updateDimensions(),
                                              this.enable(),
                                              this.queueCalibration(this.calibrationDelay);
                                      },
                                  },
                                  {
                                      key: "doReadyCallback",
                                      value: function () {
                                          this.onReady && this.onReady();
                                      },
                                  },
                                  {
                                      key: "updateLayers",
                                      value: function () {
                                          this.selector ? (this.layers = this.element.querySelectorAll(this.selector)) : (this.layers = this.element.children),
                                              this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."),
                                              (this.depthsX = []),
                                              (this.depthsY = []);
                                          for (var t = 0; t < this.layers.length; t++) {
                                              var e = this.layers[t];
                                              this.transform3DSupport && a.accelerate(e), (e.style.position = t ? "absolute" : "relative"), (e.style.display = "block"), (e.style.left = 0), (e.style.top = 0);
                                              var i = a.data(e, "depth") || 0;
                                              this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i);
                                          }
                                      },
                                  },
                                  {
                                      key: "updateDimensions",
                                      value: function () {
                                          (this.windowWidth = window.innerWidth),
                                              (this.windowHeight = window.innerHeight),
                                              (this.windowCenterX = this.windowWidth * this.originX),
                                              (this.windowCenterY = this.windowHeight * this.originY),
                                              (this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX)),
                                              (this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY));
                                      },
                                  },
                                  {
                                      key: "updateBounds",
                                      value: function () {
                                          (this.bounds = this.inputElement.getBoundingClientRect()),
                                              (this.elementPositionX = this.bounds.left),
                                              (this.elementPositionY = this.bounds.top),
                                              (this.elementWidth = this.bounds.width),
                                              (this.elementHeight = this.bounds.height),
                                              (this.elementCenterX = this.elementWidth * this.originX),
                                              (this.elementCenterY = this.elementHeight * this.originY),
                                              (this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX)),
                                              (this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY));
                                      },
                                  },
                                  {
                                      key: "queueCalibration",
                                      value: function (t) {
                                          clearTimeout(this.calibrationTimer), (this.calibrationTimer = setTimeout(this.onCalibrationTimer, t));
                                      },
                                  },
                                  {
                                      key: "enable",
                                      value: function () {
                                          this.enabled ||
                                              ((this.enabled = !0),
                                              this.orientationSupport
                                                  ? ((this.portrait = !1), window.addEventListener("deviceorientation", this.onDeviceOrientation), (this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)))
                                                  : this.motionSupport
                                                  ? ((this.portrait = !1), window.addEventListener("devicemotion", this.onDeviceMotion), (this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)))
                                                  : ((this.calibrationX = 0), (this.calibrationY = 0), (this.portrait = !1), window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()),
                                              window.addEventListener("resize", this.onWindowResize),
                                              (this.raf = s(this.onAnimationFrame)));
                                      },
                                  },
                                  {
                                      key: "disable",
                                      value: function () {
                                          this.enabled &&
                                              ((this.enabled = !1),
                                              this.orientationSupport
                                                  ? window.removeEventListener("deviceorientation", this.onDeviceOrientation)
                                                  : this.motionSupport
                                                  ? window.removeEventListener("devicemotion", this.onDeviceMotion)
                                                  : window.removeEventListener("mousemove", this.onMouseMove),
                                              window.removeEventListener("resize", this.onWindowResize),
                                              s.cancel(this.raf));
                                      },
                                  },
                                  {
                                      key: "calibrate",
                                      value: function (t, e) {
                                          (this.calibrateX = void 0 === t ? this.calibrateX : t), (this.calibrateY = void 0 === e ? this.calibrateY : e);
                                      },
                                  },
                                  {
                                      key: "invert",
                                      value: function (t, e) {
                                          (this.invertX = void 0 === t ? this.invertX : t), (this.invertY = void 0 === e ? this.invertY : e);
                                      },
                                  },
                                  {
                                      key: "friction",
                                      value: function (t, e) {
                                          (this.frictionX = void 0 === t ? this.frictionX : t), (this.frictionY = void 0 === e ? this.frictionY : e);
                                      },
                                  },
                                  {
                                      key: "scalar",
                                      value: function (t, e) {
                                          (this.scalarX = void 0 === t ? this.scalarX : t), (this.scalarY = void 0 === e ? this.scalarY : e);
                                      },
                                  },
                                  {
                                      key: "limit",
                                      value: function (t, e) {
                                          (this.limitX = void 0 === t ? this.limitX : t), (this.limitY = void 0 === e ? this.limitY : e);
                                      },
                                  },
                                  {
                                      key: "origin",
                                      value: function (t, e) {
                                          (this.originX = void 0 === t ? this.originX : t), (this.originY = void 0 === e ? this.originY : e);
                                      },
                                  },
                                  {
                                      key: "setInputElement",
                                      value: function (t) {
                                          (this.inputElement = t), this.updateDimensions();
                                      },
                                  },
                                  {
                                      key: "setPosition",
                                      value: function (t, e, i) {
                                          (e = e.toFixed(this.precision) + "px"),
                                              (i = i.toFixed(this.precision) + "px"),
                                              this.transform3DSupport
                                                  ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)")
                                                  : this.transform2DSupport
                                                  ? a.css(t, "transform", "translate(" + e + "," + i + ")")
                                                  : ((t.style.left = e), (t.style.top = i));
                                      },
                                  },
                                  {
                                      key: "onOrientationTimer",
                                      value: function () {
                                          this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), (this.orientationSupport = !1), this.enable()) : this.doReadyCallback();
                                      },
                                  },
                                  {
                                      key: "onMotionTimer",
                                      value: function () {
                                          this.motionSupport && 0 === this.motionStatus ? (this.disable(), (this.motionSupport = !1), this.enable()) : this.doReadyCallback();
                                      },
                                  },
                                  {
                                      key: "onCalibrationTimer",
                                      value: function () {
                                          this.calibrationFlag = !0;
                                      },
                                  },
                                  {
                                      key: "onWindowResize",
                                      value: function () {
                                          this.updateDimensions();
                                      },
                                  },
                                  {
                                      key: "onAnimationFrame",
                                      value: function () {
                                          this.updateBounds();
                                          var t = this.inputX - this.calibrationX,
                                              e = this.inputY - this.calibrationY;
                                          (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0),
                                              this.portrait
                                                  ? ((this.motionX = this.calibrateX ? e : this.inputY), (this.motionY = this.calibrateY ? t : this.inputX))
                                                  : ((this.motionX = this.calibrateX ? t : this.inputX), (this.motionY = this.calibrateY ? e : this.inputY)),
                                              (this.motionX *= this.elementWidth * (this.scalarX / 100)),
                                              (this.motionY *= this.elementHeight * (this.scalarY / 100)),
                                              isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)),
                                              isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)),
                                              (this.velocityX += (this.motionX - this.velocityX) * this.frictionX),
                                              (this.velocityY += (this.motionY - this.velocityY) * this.frictionY);
                                          for (var i = 0; i < this.layers.length; i++) {
                                              var n = this.layers[i],
                                                  o = this.depthsX[i],
                                                  r = this.depthsY[i],
                                                  l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                                  h = this.velocityY * (r * (this.invertY ? -1 : 1));
                                              this.setPosition(n, l, h);
                                          }
                                          this.raf = s(this.onAnimationFrame);
                                      },
                                  },
                                  {
                                      key: "rotate",
                                      value: function (t, e) {
                                          var i = (t || 0) / 30,
                                              n = (e || 0) / 30,
                                              o = this.windowHeight > this.windowWidth;
                                          this.portrait !== o && ((this.portrait = o), (this.calibrationFlag = !0)),
                                              this.calibrationFlag && ((this.calibrationFlag = !1), (this.calibrationX = i), (this.calibrationY = n)),
                                              (this.inputX = i),
                                              (this.inputY = n);
                                      },
                                  },
                                  {
                                      key: "onDeviceOrientation",
                                      value: function (t) {
                                          var e = t.beta,
                                              i = t.gamma;
                                          null !== e && null !== i && ((this.orientationStatus = 1), this.rotate(e, i));
                                      },
                                  },
                                  {
                                      key: "onDeviceMotion",
                                      value: function (t) {
                                          var e = t.rotationRate.beta,
                                              i = t.rotationRate.gamma;
                                          null !== e && null !== i && ((this.motionStatus = 1), this.rotate(e, i));
                                      },
                                  },
                                  {
                                      key: "onMouseMove",
                                      value: function (t) {
                                          var e = t.clientX,
                                              i = t.clientY;
                                          if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight))
                                              return (this.inputX = 0), void (this.inputY = 0);
                                          this.relativeInput
                                              ? (this.clipRelativeInput &&
                                                    ((e = Math.max(e, this.elementPositionX)),
                                                    (e = Math.min(e, this.elementPositionX + this.elementWidth)),
                                                    (i = Math.max(i, this.elementPositionY)),
                                                    (i = Math.min(i, this.elementPositionY + this.elementHeight))),
                                                this.elementRangeX &&
                                                    this.elementRangeY &&
                                                    ((this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX), (this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)))
                                              : this.windowRadiusX && this.windowRadiusY && ((this.inputX = (e - this.windowCenterX) / this.windowRadiusX), (this.inputY = (i - this.windowCenterY) / this.windowRadiusY));
                                      },
                                  },
                                  {
                                      key: "destroy",
                                      value: function () {
                                          this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                                          for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                                          delete this.element, delete this.layers;
                                      },
                                  },
                                  {
                                      key: "version",
                                      value: function () {
                                          return "3.1.0";
                                      },
                                  },
                              ]),
                              t
                          );
                      })();
                  e.exports = h;
              },
              { "object-assign": 1, raf: 4 },
          ],
      },
      {},
      [5]
  )(5);
});
//# sourceMappingURL=parallax.min.js.map


