(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Category.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Category.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: '',
      isEdit: false,
      form: new Form({
        id: '',
        name: ''
      })
    };
  },
  methods: {
    del: function del(id) {
      var _this = this;

      swal.fire({
        title: 'Вы уверены что хотите удалить категорию?',
        text: "Категория будет удалена безвозвратно",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да удалить!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/category/' + id).then(function (response) {
            _this.getCategory();
          });
          swal.fire('Удалено!', 'Категория успешно удалена!', 'success');
        }
      });
    },
    edit: function edit(category) {
      $('#adcategory').modal('show');
      this.isEdit = true;
      this.form.fill(category);
    },
    showModal: function showModal() {
      this.form.reset();
      $('#adcategory').modal('show');
    },
    saveCategory: function saveCategory() {
      var _this2 = this;

      this.form.post('/category').then(function (response) {
        $('#adcategory').modal('hide');

        _this2.getCategory();

        toast.fire({
          icon: 'success',
          title: 'Категория успешно сохранена'
        });
      });
    },
    editCategory: function editCategory() {
      var _this3 = this;

      this.form.put('/category/' + this.form.id).then(function (response) {
        $('#adcategory').modal('hide');

        _this3.getCategory();

        toast.fire({
          icon: 'success',
          title: 'Категория успешно обновлена!'
        });
      });
    },
    getCategory: function getCategory() {
      var _this4 = this;

      axios.get('/category').then(function (response) {
        _this4.categories = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.getCategory();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Category.vue?vue&type=template&id=637c3e58&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Category.vue?vue&type=template&id=637c3e58& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("h1", { staticClass: "h3 mb-2 text-gray-800" }, [_vm._v("Категории")]),
    _vm._v(" "),
    _c("div", { staticClass: "card shadow mb-4" }, [
      _c("div", { staticClass: "card-header py-3" }, [
        _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
          _vm._v("Таблица категорий")
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-info float-right",
            staticStyle: { color: "#ffffff" },
            on: { click: _vm.showModal }
          },
          [_vm._v("Добавить "), _c("i", { staticClass: "fas fa-plus" })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "div",
            {
              staticClass: "dataTables_wrapper dt-bootstrap4",
              attrs: { id: "dataTable_wrapper" }
            },
            [
              _vm._m(0),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-bordered dataTable",
                      staticStyle: { width: "100%" },
                      attrs: {
                        id: "dataTable",
                        width: "100%",
                        cellspacing: "0",
                        role: "grid",
                        "aria-describedby": "dataTable_info"
                      }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.categories, function(category) {
                          return _c(
                            "tr",
                            { staticClass: "odd", attrs: { role: "row" } },
                            [
                              _c("td", { staticClass: "sorting_1" }, [
                                _vm._v(_vm._s(category.id))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(category.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.edit(category)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-edit" })]
                                ),
                                _vm._v(
                                  "\n                        /\n                        "
                                ),
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.del(category.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-trash-alt",
                                      staticStyle: { color: "red" }
                                    })
                                  ]
                                )
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "adcategory",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                !_vm.isEdit
                  ? _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" }
                      },
                      [_vm._v("Добавление категории")]
                    )
                  : _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" }
                      },
                      [_vm._v("Редактирование категории")]
                    ),
                _vm._v(" "),
                _vm._m(4)
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.isEdit ? _vm.editCategory() : _vm.saveCategory()
                    },
                    keydown: function($event) {
                      return _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Название")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("name") },
                          attrs: { type: "text", name: "name" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Закрыть")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { disabled: _vm.form.busy, type: "submit" }
                      },
                      [_vm._v("Сохранить")]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-6" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_length",
            attrs: { id: "dataTable_length" }
          },
          [
            _c("label", [
              _vm._v("Show "),
              _c(
                "select",
                {
                  staticClass:
                    "custom-select custom-select-sm form-control form-control-sm",
                  attrs: {
                    name: "dataTable_length",
                    "aria-controls": "dataTable"
                  }
                },
                [
                  _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                  _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                  _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                  _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
                ]
              ),
              _vm._v(" entries")
            ])
          ]
        )
      ]),
      _c("div", { staticClass: "col-sm-12 col-md-6" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_filter",
            attrs: { id: "dataTable_filter" }
          },
          [
            _c("label", [
              _vm._v("Search:"),
              _c("input", {
                staticClass: "form-control form-control-sm",
                attrs: {
                  type: "search",
                  placeholder: "",
                  "aria-controls": "dataTable"
                }
              })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { attrs: { role: "row" } }, [
        _c(
          "th",
          {
            staticClass: "sorting_asc",
            staticStyle: { width: "161px" },
            attrs: {
              tabindex: "0",
              "aria-controls": "dataTable",
              rowspan: "1",
              colspan: "1",
              "aria-sort": "ascending",
              "aria-label": "Name: activate to sort column descending"
            }
          },
          [_vm._v("№")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "sorting",
            staticStyle: { width: "247px" },
            attrs: {
              tabindex: "0",
              "aria-controls": "dataTable",
              rowspan: "1",
              colspan: "1",
              "aria-label": "Position: activate to sort column ascending"
            }
          },
          [_vm._v("Название")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "sorting",
            staticStyle: { width: "116px" },
            attrs: {
              tabindex: "0",
              "aria-controls": "dataTable",
              rowspan: "1",
              colspan: "1",
              "aria-label": "Office: activate to sort column ascending"
            }
          },
          [_vm._v("действия")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("th", { attrs: { rowspan: "1", colspan: "1" } }, [_vm._v("№")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "1", colspan: "1" } }, [
          _vm._v("Название")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "1", colspan: "1" } }, [
          _vm._v("Действие")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-5" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_info",
            attrs: {
              id: "dataTable_info",
              role: "status",
              "aria-live": "polite"
            }
          },
          [_vm._v("Showing 1 to 10 of 57 entries")]
        )
      ]),
      _c("div", { staticClass: "col-sm-12 col-md-7" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_paginate paging_simple_numbers",
            attrs: { id: "dataTable_paginate" }
          },
          [
            _c("ul", { staticClass: "pagination" }, [
              _c(
                "li",
                {
                  staticClass: "paginate_button page-item previous disabled",
                  attrs: { id: "dataTable_previous" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: {
                        href: "#",
                        "aria-controls": "dataTable",
                        "data-dt-idx": "0",
                        tabindex: "0"
                      }
                    },
                    [_vm._v("Previous")]
                  )
                ]
              ),
              _c("li", { staticClass: "paginate_button page-item active" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-controls": "dataTable",
                      "data-dt-idx": "1",
                      tabindex: "0"
                    }
                  },
                  [_vm._v("1")]
                )
              ]),
              _c("li", { staticClass: "paginate_button page-item " }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-controls": "dataTable",
                      "data-dt-idx": "2",
                      tabindex: "0"
                    }
                  },
                  [_vm._v("2")]
                )
              ]),
              _c("li", { staticClass: "paginate_button page-item " }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-controls": "dataTable",
                      "data-dt-idx": "3",
                      tabindex: "0"
                    }
                  },
                  [_vm._v("3")]
                )
              ]),
              _c("li", { staticClass: "paginate_button page-item " }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-controls": "dataTable",
                      "data-dt-idx": "4",
                      tabindex: "0"
                    }
                  },
                  [_vm._v("4")]
                )
              ]),
              _c("li", { staticClass: "paginate_button page-item " }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-controls": "dataTable",
                      "data-dt-idx": "5",
                      tabindex: "0"
                    }
                  },
                  [_vm._v("5")]
                )
              ]),
              _c("li", { staticClass: "paginate_button page-item " }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: {
                      href: "#",
                      "aria-controls": "dataTable",
                      "data-dt-idx": "6",
                      tabindex: "0"
                    }
                  },
                  [_vm._v("6")]
                )
              ]),
              _c(
                "li",
                {
                  staticClass: "paginate_button page-item next",
                  attrs: { id: "dataTable_next" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: {
                        href: "#",
                        "aria-controls": "dataTable",
                        "data-dt-idx": "7",
                        tabindex: "0"
                      }
                    },
                    [_vm._v("Next")]
                  )
                ]
              )
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/category/Category.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/category/Category.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_637c3e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=637c3e58& */ "./resources/js/components/category/Category.vue?vue&type=template&id=637c3e58&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/category/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_637c3e58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_637c3e58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/Category.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/category/Category.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/Category.vue?vue&type=template&id=637c3e58&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/category/Category.vue?vue&type=template&id=637c3e58& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_637c3e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=637c3e58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Category.vue?vue&type=template&id=637c3e58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_637c3e58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_637c3e58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);