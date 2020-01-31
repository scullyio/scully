function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['polyfills-es5'],
  {
    /***/
    '../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/es5-polyfills.js':
      /*!***********************************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/es5-polyfills.js ***!
    \***********************************************************************************************************************************/

      /*! no exports provided */

      /***/
      function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesModelsEs5PolyfillsJs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! core-js/es/symbol */
          '../../node_modules/core-js/es/symbol/index.js'
        );
        /* harmony import */

        var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */

        var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! core-js/modules/es.function.bind */
          '../../node_modules/core-js/modules/es.function.bind.js'
        );
        /* harmony import */

        var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */

        var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! core-js/modules/es.function.name */
          '../../node_modules/core-js/modules/es.function.name.js'
        );
        /* harmony import */

        var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */

        var core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! core-js/modules/es.function.has-instance */
          '../../node_modules/core-js/modules/es.function.has-instance.js'
        );
        /* harmony import */

        var core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */

        var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! core-js/modules/es.object.create */
          '../../node_modules/core-js/modules/es.object.create.js'
        );
        /* harmony import */

        var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */

        var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! core-js/modules/es.object.define-property */
          '../../node_modules/core-js/modules/es.object.define-property.js'
        );
        /* harmony import */

        var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */

        var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! core-js/modules/es.object.define-properties */
          '../../node_modules/core-js/modules/es.object.define-properties.js'
        );
        /* harmony import */

        var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */

        var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! core-js/modules/es.object.get-own-property-descriptor */
          '../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
        );
        /* harmony import */

        var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__
          );
        /* harmony import */

        var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! core-js/modules/es.object.get-prototype-of */
          '../../node_modules/core-js/modules/es.object.get-prototype-of.js'
        );
        /* harmony import */

        var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
        /* harmony import */

        var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! core-js/modules/es.object.keys */
          '../../node_modules/core-js/modules/es.object.keys.js'
        );
        /* harmony import */

        var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
        /* harmony import */

        var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! core-js/modules/es.object.get-own-property-names */
          '../../node_modules/core-js/modules/es.object.get-own-property-names.js'
        );
        /* harmony import */

        var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__
          );
        /* harmony import */

        var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! core-js/modules/es.object.freeze */
          '../../node_modules/core-js/modules/es.object.freeze.js'
        );
        /* harmony import */

        var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__);
        /* harmony import */

        var core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! core-js/modules/es.object.seal */
          '../../node_modules/core-js/modules/es.object.seal.js'
        );
        /* harmony import */

        var core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12__);
        /* harmony import */

        var core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! core-js/modules/es.object.prevent-extensions */
          '../../node_modules/core-js/modules/es.object.prevent-extensions.js'
        );
        /* harmony import */

        var core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13__);
        /* harmony import */

        var core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! core-js/modules/es.object.is-frozen */
          '../../node_modules/core-js/modules/es.object.is-frozen.js'
        );
        /* harmony import */

        var core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14__);
        /* harmony import */

        var core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! core-js/modules/es.object.is-sealed */
          '../../node_modules/core-js/modules/es.object.is-sealed.js'
        );
        /* harmony import */

        var core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15__);
        /* harmony import */

        var core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! core-js/modules/es.object.is-extensible */
          '../../node_modules/core-js/modules/es.object.is-extensible.js'
        );
        /* harmony import */

        var core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16__);
        /* harmony import */

        var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! core-js/modules/es.object.assign */
          '../../node_modules/core-js/modules/es.object.assign.js'
        );
        /* harmony import */

        var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17__);
        /* harmony import */

        var core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! core-js/modules/es.object.is */
          '../../node_modules/core-js/modules/es.object.is.js'
        );
        /* harmony import */

        var core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18__);
        /* harmony import */

        var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! core-js/modules/es.object.set-prototype-of */
          '../../node_modules/core-js/modules/es.object.set-prototype-of.js'
        );
        /* harmony import */

        var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19__);
        /* harmony import */

        var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! core-js/modules/es.object.to-string */
          '../../node_modules/core-js/modules/es.object.to-string.js'
        );
        /* harmony import */

        var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20__);
        /* harmony import */

        var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! core-js/modules/es.array.concat */
          '../../node_modules/core-js/modules/es.array.concat.js'
        );
        /* harmony import */

        var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_21___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_21__);
        /* harmony import */

        var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! core-js/modules/es.array.is-array */
          '../../node_modules/core-js/modules/es.array.is-array.js'
        );
        /* harmony import */

        var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_22___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_22__);
        /* harmony import */

        var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! core-js/modules/es.array.from */
          '../../node_modules/core-js/modules/es.array.from.js'
        );
        /* harmony import */

        var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_23___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_23__);
        /* harmony import */

        var core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! core-js/modules/es.array.of */
          '../../node_modules/core-js/modules/es.array.of.js'
        );
        /* harmony import */

        var core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_24___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_24__);
        /* harmony import */

        var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! core-js/modules/es.array.join */
          '../../node_modules/core-js/modules/es.array.join.js'
        );
        /* harmony import */

        var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_25___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_25__);
        /* harmony import */

        var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! core-js/modules/es.array.slice */
          '../../node_modules/core-js/modules/es.array.slice.js'
        );
        /* harmony import */

        var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_26___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_26__);
        /* harmony import */

        var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! core-js/modules/es.array.splice */
          '../../node_modules/core-js/modules/es.array.splice.js'
        );
        /* harmony import */

        var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_27___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_27__);
        /* harmony import */

        var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! core-js/modules/es.array.sort */
          '../../node_modules/core-js/modules/es.array.sort.js'
        );
        /* harmony import */

        var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_28___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_28__);
        /* harmony import */

        var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! core-js/modules/es.array.for-each */
          '../../node_modules/core-js/modules/es.array.for-each.js'
        );
        /* harmony import */

        var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_29___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_29__);
        /* harmony import */

        var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! core-js/modules/es.array.map */
          '../../node_modules/core-js/modules/es.array.map.js'
        );
        /* harmony import */

        var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_30___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_30__);
        /* harmony import */

        var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! core-js/modules/es.array.filter */
          '../../node_modules/core-js/modules/es.array.filter.js'
        );
        /* harmony import */

        var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_31___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_31__);
        /* harmony import */

        var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! core-js/modules/es.array.some */
          '../../node_modules/core-js/modules/es.array.some.js'
        );
        /* harmony import */

        var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_32___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_32__);
        /* harmony import */

        var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! core-js/modules/es.array.every */
          '../../node_modules/core-js/modules/es.array.every.js'
        );
        /* harmony import */

        var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_33___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_33__);
        /* harmony import */

        var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! core-js/modules/es.array.reduce */
          '../../node_modules/core-js/modules/es.array.reduce.js'
        );
        /* harmony import */

        var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_34___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_34__);
        /* harmony import */

        var core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! core-js/modules/es.array.reduce-right */
          '../../node_modules/core-js/modules/es.array.reduce-right.js'
        );
        /* harmony import */

        var core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_35___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_35__);
        /* harmony import */

        var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! core-js/modules/es.array.index-of */
          '../../node_modules/core-js/modules/es.array.index-of.js'
        );
        /* harmony import */

        var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_36___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_36__);
        /* harmony import */

        var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! core-js/modules/es.array.last-index-of */
          '../../node_modules/core-js/modules/es.array.last-index-of.js'
        );
        /* harmony import */

        var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_37___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_37__);
        /* harmony import */

        var core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! core-js/modules/es.array.copy-within */
          '../../node_modules/core-js/modules/es.array.copy-within.js'
        );
        /* harmony import */

        var core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_38___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_38__);
        /* harmony import */

        var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! core-js/modules/es.array.fill */
          '../../node_modules/core-js/modules/es.array.fill.js'
        );
        /* harmony import */

        var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_39___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_39__);
        /* harmony import */

        var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! core-js/modules/es.array.find */
          '../../node_modules/core-js/modules/es.array.find.js'
        );
        /* harmony import */

        var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_40___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_40__);
        /* harmony import */

        var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! core-js/modules/es.array.find-index */
          '../../node_modules/core-js/modules/es.array.find-index.js'
        );
        /* harmony import */

        var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_41___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_41__);
        /* harmony import */

        var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! core-js/modules/es.array.iterator */
          '../../node_modules/core-js/modules/es.array.iterator.js'
        );
        /* harmony import */

        var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_42___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_42__);
        /* harmony import */

        var core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
          /*! core-js/modules/es.string.from-code-point */
          '../../node_modules/core-js/modules/es.string.from-code-point.js'
        );
        /* harmony import */

        var core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_43___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_43__);
        /* harmony import */

        var core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
          /*! core-js/modules/es.string.raw */
          '../../node_modules/core-js/modules/es.string.raw.js'
        );
        /* harmony import */

        var core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_44___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_44__);
        /* harmony import */

        var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
          /*! core-js/modules/es.string.trim */
          '../../node_modules/core-js/modules/es.string.trim.js'
        );
        /* harmony import */

        var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_45___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_45__);
        /* harmony import */

        var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
          /*! core-js/modules/es.string.iterator */
          '../../node_modules/core-js/modules/es.string.iterator.js'
        );
        /* harmony import */

        var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_46___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_46__);
        /* harmony import */

        var core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
          /*! core-js/modules/es.string.code-point-at */
          '../../node_modules/core-js/modules/es.string.code-point-at.js'
        );
        /* harmony import */

        var core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_47___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_47__);
        /* harmony import */

        var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
          /*! core-js/modules/es.string.ends-with */
          '../../node_modules/core-js/modules/es.string.ends-with.js'
        );
        /* harmony import */

        var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_48___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_48__);
        /* harmony import */

        var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
          /*! core-js/modules/es.string.includes */
          '../../node_modules/core-js/modules/es.string.includes.js'
        );
        /* harmony import */

        var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_49___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_49__);
        /* harmony import */

        var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
          /*! core-js/modules/es.string.repeat */
          '../../node_modules/core-js/modules/es.string.repeat.js'
        );
        /* harmony import */

        var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_50___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_50__);
        /* harmony import */

        var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
          /*! core-js/modules/es.string.starts-with */
          '../../node_modules/core-js/modules/es.string.starts-with.js'
        );
        /* harmony import */

        var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_51___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_51__);
        /* harmony import */

        var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
          /*! core-js/modules/es.string.anchor */
          '../../node_modules/core-js/modules/es.string.anchor.js'
        );
        /* harmony import */

        var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_52___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_52__);
        /* harmony import */

        var core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
          /*! core-js/modules/es.string.big */
          '../../node_modules/core-js/modules/es.string.big.js'
        );
        /* harmony import */

        var core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_53___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_53__);
        /* harmony import */

        var core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
          /*! core-js/modules/es.string.blink */
          '../../node_modules/core-js/modules/es.string.blink.js'
        );
        /* harmony import */

        var core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_54___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_54__);
        /* harmony import */

        var core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
          /*! core-js/modules/es.string.bold */
          '../../node_modules/core-js/modules/es.string.bold.js'
        );
        /* harmony import */

        var core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_55___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_55__);
        /* harmony import */

        var core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
          /*! core-js/modules/es.string.fixed */
          '../../node_modules/core-js/modules/es.string.fixed.js'
        );
        /* harmony import */

        var core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_56___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_56__);
        /* harmony import */

        var core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
          /*! core-js/modules/es.string.fontcolor */
          '../../node_modules/core-js/modules/es.string.fontcolor.js'
        );
        /* harmony import */

        var core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_57___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_57__);
        /* harmony import */

        var core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
          /*! core-js/modules/es.string.fontsize */
          '../../node_modules/core-js/modules/es.string.fontsize.js'
        );
        /* harmony import */

        var core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_58___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_58__);
        /* harmony import */

        var core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
          /*! core-js/modules/es.string.italics */
          '../../node_modules/core-js/modules/es.string.italics.js'
        );
        /* harmony import */

        var core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_59___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_59__);
        /* harmony import */

        var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
          /*! core-js/modules/es.string.link */
          '../../node_modules/core-js/modules/es.string.link.js'
        );
        /* harmony import */

        var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_60___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_60__);
        /* harmony import */

        var core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
          /*! core-js/modules/es.string.small */
          '../../node_modules/core-js/modules/es.string.small.js'
        );
        /* harmony import */

        var core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_61___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_61__);
        /* harmony import */

        var core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
          /*! core-js/modules/es.string.strike */
          '../../node_modules/core-js/modules/es.string.strike.js'
        );
        /* harmony import */

        var core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_62___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_62__);
        /* harmony import */

        var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
          /*! core-js/modules/es.string.sub */
          '../../node_modules/core-js/modules/es.string.sub.js'
        );
        /* harmony import */

        var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_63___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_63__);
        /* harmony import */

        var core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
          /*! core-js/modules/es.string.sup */
          '../../node_modules/core-js/modules/es.string.sup.js'
        );
        /* harmony import */

        var core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_64___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_64__);
        /* harmony import */

        var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
          /*! core-js/modules/es.string.match */
          '../../node_modules/core-js/modules/es.string.match.js'
        );
        /* harmony import */

        var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_65___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_65__);
        /* harmony import */

        var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
          /*! core-js/modules/es.string.replace */
          '../../node_modules/core-js/modules/es.string.replace.js'
        );
        /* harmony import */

        var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_66___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_66__);
        /* harmony import */

        var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
          /*! core-js/modules/es.string.search */
          '../../node_modules/core-js/modules/es.string.search.js'
        );
        /* harmony import */

        var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_67___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_67__);
        /* harmony import */

        var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
          /*! core-js/modules/es.string.split */
          '../../node_modules/core-js/modules/es.string.split.js'
        );
        /* harmony import */

        var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_68___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_68__);
        /* harmony import */

        var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
          /*! core-js/modules/es.parse-int */
          '../../node_modules/core-js/modules/es.parse-int.js'
        );
        /* harmony import */

        var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_69___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_69__);
        /* harmony import */

        var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
          /*! core-js/modules/es.parse-float */
          '../../node_modules/core-js/modules/es.parse-float.js'
        );
        /* harmony import */

        var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_70___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_70__);
        /* harmony import */

        var core_js_es_number__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
          /*! core-js/es/number */
          '../../node_modules/core-js/es/number/index.js'
        );
        /* harmony import */

        var core_js_es_number__WEBPACK_IMPORTED_MODULE_71___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_71__);
        /* harmony import */

        var core_js_es_math__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
          /*! core-js/es/math */
          '../../node_modules/core-js/es/math/index.js'
        );
        /* harmony import */

        var core_js_es_math__WEBPACK_IMPORTED_MODULE_72___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_72__);
        /* harmony import */

        var core_js_es_date__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
          /*! core-js/es/date */
          '../../node_modules/core-js/es/date/index.js'
        );
        /* harmony import */

        var core_js_es_date__WEBPACK_IMPORTED_MODULE_73___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_73__);
        /* harmony import */

        var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
          /*! core-js/es/regexp */
          '../../node_modules/core-js/es/regexp/index.js'
        );
        /* harmony import */

        var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_74___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_es_regexp__WEBPACK_IMPORTED_MODULE_74__);
        /* harmony import */

        var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
          /*! core-js/modules/es.map */
          '../../node_modules/core-js/modules/es.map.js'
        );
        /* harmony import */

        var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_75___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_75__);
        /* harmony import */

        var core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
          /*! core-js/modules/es.weak-map */
          '../../node_modules/core-js/modules/es.weak-map.js'
        );
        /* harmony import */

        var core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_76___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_76__);
        /* harmony import */

        var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
          /*! core-js/modules/es.set */
          '../../node_modules/core-js/modules/es.set.js'
        );
        /* harmony import */

        var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_77___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_77__);
        /* harmony import */

        var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
          /*! core-js/modules/web.dom-collections.for-each */
          '../../node_modules/core-js/modules/web.dom-collections.for-each.js'
        );
        /* harmony import */

        var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_78___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_78__);
        /* harmony import */

        var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
          /*! core-js/modules/web.dom-collections.iterator */
          '../../node_modules/core-js/modules/web.dom-collections.iterator.js'
        );
        /* harmony import */

        var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_79___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_79__);
        /* harmony import */

        var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
          /*! core-js/modules/es.promise */
          '../../node_modules/core-js/modules/es.promise.js'
        );
        /* harmony import */

        var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_80___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_80__);
        /* harmony import */

        var core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
          /*! core-js/modules/es.json.to-string-tag */
          '../../node_modules/core-js/modules/es.json.to-string-tag.js'
        );
        /* harmony import */

        var core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_81___default =
          /*#__PURE__*/
          __webpack_require__.n(core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_81__);
        /* harmony import */

        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
          /*! regenerator-runtime/runtime */
          '../../node_modules/regenerator-runtime/runtime.js'
        );
        /* harmony import */

        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_82___default =
          /*#__PURE__*/
          __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_82__);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        // ES2015 symbol capabilities
        // ES2015 function capabilities
        // ES2015 object capabilities
        // ES2015 array capabilities
        // ES2015 string capabilities

        /***/
      },

    /***/
    '../../node_modules/core-js/es/date/index.js':
      /*!********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/es/date/index.js ***!
    \********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsEsDateIndexJs(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es.date.now */
          '../../node_modules/core-js/modules/es.date.now.js'
        );

        __webpack_require__(
          /*! ../../modules/es.date.to-json */
          '../../node_modules/core-js/modules/es.date.to-json.js'
        );

        __webpack_require__(
          /*! ../../modules/es.date.to-iso-string */
          '../../node_modules/core-js/modules/es.date.to-iso-string.js'
        );

        __webpack_require__(
          /*! ../../modules/es.date.to-string */
          '../../node_modules/core-js/modules/es.date.to-string.js'
        );

        __webpack_require__(
          /*! ../../modules/es.date.to-primitive */
          '../../node_modules/core-js/modules/es.date.to-primitive.js'
        );

        var path = __webpack_require__(
          /*! ../../internals/path */
          '../../node_modules/core-js/internals/path.js'
        );

        module.exports = path.Date;
        /***/
      },

    /***/
    '../../node_modules/core-js/es/math/index.js':
      /*!********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/es/math/index.js ***!
    \********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsEsMathIndexJs(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es.math.acosh */
          '../../node_modules/core-js/modules/es.math.acosh.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.asinh */
          '../../node_modules/core-js/modules/es.math.asinh.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.atanh */
          '../../node_modules/core-js/modules/es.math.atanh.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.cbrt */
          '../../node_modules/core-js/modules/es.math.cbrt.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.clz32 */
          '../../node_modules/core-js/modules/es.math.clz32.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.cosh */
          '../../node_modules/core-js/modules/es.math.cosh.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.expm1 */
          '../../node_modules/core-js/modules/es.math.expm1.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.fround */
          '../../node_modules/core-js/modules/es.math.fround.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.hypot */
          '../../node_modules/core-js/modules/es.math.hypot.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.imul */
          '../../node_modules/core-js/modules/es.math.imul.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.log10 */
          '../../node_modules/core-js/modules/es.math.log10.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.log1p */
          '../../node_modules/core-js/modules/es.math.log1p.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.log2 */
          '../../node_modules/core-js/modules/es.math.log2.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.sign */
          '../../node_modules/core-js/modules/es.math.sign.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.sinh */
          '../../node_modules/core-js/modules/es.math.sinh.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.tanh */
          '../../node_modules/core-js/modules/es.math.tanh.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.to-string-tag */
          '../../node_modules/core-js/modules/es.math.to-string-tag.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.trunc */
          '../../node_modules/core-js/modules/es.math.trunc.js'
        );

        var path = __webpack_require__(
          /*! ../../internals/path */
          '../../node_modules/core-js/internals/path.js'
        );

        module.exports = path.Math;
        /***/
      },

    /***/
    '../../node_modules/core-js/es/number/index.js':
      /*!**********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/es/number/index.js ***!
    \**********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsEsNumberIndexJs(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es.number.constructor */
          '../../node_modules/core-js/modules/es.number.constructor.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.epsilon */
          '../../node_modules/core-js/modules/es.number.epsilon.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.is-finite */
          '../../node_modules/core-js/modules/es.number.is-finite.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.is-integer */
          '../../node_modules/core-js/modules/es.number.is-integer.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.is-nan */
          '../../node_modules/core-js/modules/es.number.is-nan.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.is-safe-integer */
          '../../node_modules/core-js/modules/es.number.is-safe-integer.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.max-safe-integer */
          '../../node_modules/core-js/modules/es.number.max-safe-integer.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.min-safe-integer */
          '../../node_modules/core-js/modules/es.number.min-safe-integer.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.parse-float */
          '../../node_modules/core-js/modules/es.number.parse-float.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.parse-int */
          '../../node_modules/core-js/modules/es.number.parse-int.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.to-fixed */
          '../../node_modules/core-js/modules/es.number.to-fixed.js'
        );

        __webpack_require__(
          /*! ../../modules/es.number.to-precision */
          '../../node_modules/core-js/modules/es.number.to-precision.js'
        );

        var path = __webpack_require__(
          /*! ../../internals/path */
          '../../node_modules/core-js/internals/path.js'
        );

        module.exports = path.Number;
        /***/
      },

    /***/
    '../../node_modules/core-js/es/regexp/index.js':
      /*!**********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/es/regexp/index.js ***!
    \**********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsEsRegexpIndexJs(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es.regexp.constructor */
          '../../node_modules/core-js/modules/es.regexp.constructor.js'
        );

        __webpack_require__(
          /*! ../../modules/es.regexp.to-string */
          '../../node_modules/core-js/modules/es.regexp.to-string.js'
        );

        __webpack_require__(
          /*! ../../modules/es.regexp.exec */
          '../../node_modules/core-js/modules/es.regexp.exec.js'
        );

        __webpack_require__(
          /*! ../../modules/es.regexp.flags */
          '../../node_modules/core-js/modules/es.regexp.flags.js'
        );

        __webpack_require__(
          /*! ../../modules/es.regexp.sticky */
          '../../node_modules/core-js/modules/es.regexp.sticky.js'
        );

        __webpack_require__(
          /*! ../../modules/es.regexp.test */
          '../../node_modules/core-js/modules/es.regexp.test.js'
        );

        __webpack_require__(
          /*! ../../modules/es.string.match */
          '../../node_modules/core-js/modules/es.string.match.js'
        );

        __webpack_require__(
          /*! ../../modules/es.string.replace */
          '../../node_modules/core-js/modules/es.string.replace.js'
        );

        __webpack_require__(
          /*! ../../modules/es.string.search */
          '../../node_modules/core-js/modules/es.string.search.js'
        );

        __webpack_require__(
          /*! ../../modules/es.string.split */
          '../../node_modules/core-js/modules/es.string.split.js'
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/es/symbol/index.js':
      /*!**********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/es/symbol/index.js ***!
    \**********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsEsSymbolIndexJs(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../../modules/es.array.concat */
          '../../node_modules/core-js/modules/es.array.concat.js'
        );

        __webpack_require__(
          /*! ../../modules/es.object.to-string */
          '../../node_modules/core-js/modules/es.object.to-string.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol */
          '../../node_modules/core-js/modules/es.symbol.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.async-iterator */
          '../../node_modules/core-js/modules/es.symbol.async-iterator.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.description */
          '../../node_modules/core-js/modules/es.symbol.description.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.has-instance */
          '../../node_modules/core-js/modules/es.symbol.has-instance.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.is-concat-spreadable */
          '../../node_modules/core-js/modules/es.symbol.is-concat-spreadable.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.iterator */
          '../../node_modules/core-js/modules/es.symbol.iterator.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.match */
          '../../node_modules/core-js/modules/es.symbol.match.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.match-all */
          '../../node_modules/core-js/modules/es.symbol.match-all.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.replace */
          '../../node_modules/core-js/modules/es.symbol.replace.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.search */
          '../../node_modules/core-js/modules/es.symbol.search.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.species */
          '../../node_modules/core-js/modules/es.symbol.species.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.split */
          '../../node_modules/core-js/modules/es.symbol.split.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.to-primitive */
          '../../node_modules/core-js/modules/es.symbol.to-primitive.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.to-string-tag */
          '../../node_modules/core-js/modules/es.symbol.to-string-tag.js'
        );

        __webpack_require__(
          /*! ../../modules/es.symbol.unscopables */
          '../../node_modules/core-js/modules/es.symbol.unscopables.js'
        );

        __webpack_require__(
          /*! ../../modules/es.math.to-string-tag */
          '../../node_modules/core-js/modules/es.math.to-string-tag.js'
        );

        __webpack_require__(
          /*! ../../modules/es.json.to-string-tag */
          '../../node_modules/core-js/modules/es.json.to-string-tag.js'
        );

        var path = __webpack_require__(
          /*! ../../internals/path */
          '../../node_modules/core-js/internals/path.js'
        );

        module.exports = path.Symbol;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/a-function.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/a-function.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
        module.exports = function(it) {
          if (typeof it != 'function') {
            throw TypeError(String(it) + ' is not a function');
          }

          return it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/a-possible-prototype.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/a-possible-prototype.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsAPossiblePrototypeJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        module.exports = function(it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + ' as a prototype');
          }

          return it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/add-to-unscopables.js':
      /*!***********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/add-to-unscopables.js ***!
    \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsAddToUnscopablesJs(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var create = __webpack_require__(
          /*! ../internals/object-create */
          '../../node_modules/core-js/internals/object-create.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var UNSCOPABLES = wellKnownSymbol('unscopables');
        var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        if (ArrayPrototype[UNSCOPABLES] == undefined) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null),
          });
        } // add a key to Array.prototype[@@unscopables]

        module.exports = function(key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/advance-string-index.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/advance-string-index.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsAdvanceStringIndexJs(module, exports, __webpack_require__) {
        'use strict';

        var charAt = __webpack_require__(
          /*! ../internals/string-multibyte */
          '../../node_modules/core-js/internals/string-multibyte.js'
        ).charAt; // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex

        module.exports = function(S, index, unicode) {
          return index + (unicode ? charAt(S, index).length : 1);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/an-instance.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/an-instance.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsAnInstanceJs(module, exports) {
        module.exports = function(it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
          }

          return it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/an-object.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/an-object.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        module.exports = function(it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
          }

          return it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-copy-within.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-copy-within.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayCopyWithinJs(module, exports, __webpack_require__) {
        'use strict';

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          '../../node_modules/core-js/internals/to-absolute-index.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var min = Math.min; // `Array.prototype.copyWithin` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

        module.exports =
          [].copyWithin ||
          function copyWithin(
            target,
            /* = 0 */
            start
            /* = 0, end = @length */
          ) {
            var O = toObject(this);
            var len = toLength(O.length);
            var to = toAbsoluteIndex(target, len);
            var from = toAbsoluteIndex(start, len);
            var end = arguments.length > 2 ? arguments[2] : undefined;
            var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
            var inc = 1;

            if (from < to && to < from + count) {
              inc = -1;
              from += count - 1;
              to += count - 1;
            }

            while (count-- > 0) {
              if (from in O) O[to] = O[from];
              else delete O[to];
              to += inc;
              from += inc;
            }

            return O;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-fill.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-fill.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayFillJs(module, exports, __webpack_require__) {
        'use strict';

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          '../../node_modules/core-js/internals/to-absolute-index.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        ); // `Array.prototype.fill` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.fill

        module.exports = function fill(
          value
          /* , start = 0, end = @length */
        ) {
          var O = toObject(this);
          var length = toLength(O.length);
          var argumentsLength = arguments.length;
          var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
          var end = argumentsLength > 2 ? arguments[2] : undefined;
          var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

          while (endPos > index) {
            O[index++] = value;
          }

          return O;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-for-each.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-for-each.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayForEachJs(module, exports, __webpack_require__) {
        'use strict';

        var $forEach = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).forEach;

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        ); // `Array.prototype.forEach` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

        module.exports = sloppyArrayMethod('forEach')
          ? function forEach(
              callbackfn
              /* , thisArg */
            ) {
              return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
          : [].forEach;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-from.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-from.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayFromJs(module, exports, __webpack_require__) {
        'use strict';

        var bind = __webpack_require__(
          /*! ../internals/bind-context */
          '../../node_modules/core-js/internals/bind-context.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var callWithSafeIterationClosing = __webpack_require__(
          /*! ../internals/call-with-safe-iteration-closing */
          '../../node_modules/core-js/internals/call-with-safe-iteration-closing.js'
        );

        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */
          '../../node_modules/core-js/internals/is-array-iterator-method.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var createProperty = __webpack_require__(
          /*! ../internals/create-property */
          '../../node_modules/core-js/internals/create-property.js'
        );

        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */
          '../../node_modules/core-js/internals/get-iterator-method.js'
        ); // `Array.from` method implementation
        // https://tc39.github.io/ecma262/#sec-array.from

        module.exports = function from(
          arrayLike
          /* , mapfn = undefined, thisArg = undefined */
        ) {
          var O = toObject(arrayLike);
          var C = typeof this == 'function' ? this : Array;
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          var index = 0;
          var iteratorMethod = getIteratorMethod(O);
          var length, result, step, iterator, next;
          if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

          if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
            iterator = iteratorMethod.call(O);
            next = iterator.next;
            result = new C();

            for (; !(step = next.call(iterator)).done; index++) {
              createProperty(
                result,
                index,
                mapping
                  ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
                  : step.value
              );
            }
          } else {
            length = toLength(O.length);
            result = new C(length);

            for (; length > index; index++) {
              createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
          }

          result.length = index;
          return result;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-includes.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-includes.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          '../../node_modules/core-js/internals/to-absolute-index.js'
        ); // `Array.prototype.{ indexOf, includes }` methods implementation

        var createMethod = function createMethod(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value; // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare

            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++]; // eslint-disable-next-line no-self-compare

                if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-iteration.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-iteration.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayIterationJs(module, exports, __webpack_require__) {
        var bind = __webpack_require__(
          /*! ../internals/bind-context */
          '../../node_modules/core-js/internals/bind-context.js'
        );

        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          '../../node_modules/core-js/internals/indexed-object.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */
          '../../node_modules/core-js/internals/array-species-create.js'
        );

        var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

        var createMethod = function createMethod(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
            var value, result;

            for (; length > index; index++) {
              if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);

                if (TYPE) {
                  if (IS_MAP) target[index] = result;
                  // map
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true;
                      // some

                      case 5:
                        return value;
                      // find

                      case 6:
                        return index;
                      // findIndex

                      case 2:
                        push.call(target, value);
                      // filter
                    }
                  else if (IS_EVERY) return false; // every
                }
              }
            }

            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };

        module.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
          forEach: createMethod(0),
          // `Array.prototype.map` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.map
          map: createMethod(1),
          // `Array.prototype.filter` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.filter
          filter: createMethod(2),
          // `Array.prototype.some` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.some
          some: createMethod(3),
          // `Array.prototype.every` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.every
          every: createMethod(4),
          // `Array.prototype.find` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.find
          find: createMethod(5),
          // `Array.prototype.findIndex` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod(6),
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-last-index-of.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-last-index-of.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayLastIndexOfJs(module, exports, __webpack_require__) {
        'use strict';

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        );

        var min = Math.min;
        var nativeLastIndexOf = [].lastIndexOf;
        var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
        var SLOPPY_METHOD = sloppyArrayMethod('lastIndexOf'); // `Array.prototype.lastIndexOf` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

        module.exports =
          NEGATIVE_ZERO || SLOPPY_METHOD
            ? function lastIndexOf(
                searchElement
                /* , fromIndex = @[*-1] */
              ) {
                // convert -0 to +0
                if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
                var O = toIndexedObject(this);
                var length = toLength(O.length);
                var index = length - 1;
                if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
                if (index < 0) index = length + index;

                for (; index >= 0; index--) {
                  if (index in O && O[index] === searchElement) return index || 0;
                }

                return -1;
              }
            : nativeLastIndexOf;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-method-has-species-support.js':
      /*!*************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-method-has-species-support.js ***!
    \*************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayMethodHasSpeciesSupportJs(
        module,
        exports,
        __webpack_require__
      ) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var V8_VERSION = __webpack_require__(
          /*! ../internals/v8-version */
          '../../node_modules/core-js/internals/v8-version.js'
        );

        var SPECIES = wellKnownSymbol('species');

        module.exports = function(METHOD_NAME) {
          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/677
          return (
            V8_VERSION >= 51 ||
            !fails(function() {
              var array = [];
              var constructor = (array.constructor = {});

              constructor[SPECIES] = function() {
                return {
                  foo: 1,
                };
              };

              return array[METHOD_NAME](Boolean).foo !== 1;
            })
          );
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-reduce.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-reduce.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArrayReduceJs(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          '../../node_modules/core-js/internals/indexed-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        ); // `Array.prototype.{ reduce, reduceRight }` methods implementation

        var createMethod = function createMethod(IS_RIGHT) {
          return function(that, callbackfn, argumentsLength, memo) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self = IndexedObject(O);
            var length = toLength(O.length);
            var index = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              while (true) {
                if (index in self) {
                  memo = self[index];
                  index += i;
                  break;
                }

                index += i;

                if (IS_RIGHT ? index < 0 : length <= index) {
                  throw TypeError('Reduce of empty array with no initial value');
                }
              }

            for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
              if (index in self) {
                memo = callbackfn(memo, self[index], index, O);
              }
            }

            return memo;
          };
        };

        module.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
          left: createMethod(false),
          // `Array.prototype.reduceRight` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
          right: createMethod(true),
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/array-species-create.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/array-species-create.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsArraySpeciesCreateJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var isArray = __webpack_require__(
          /*! ../internals/is-array */
          '../../node_modules/core-js/internals/is-array.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
        // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

        module.exports = function(originalArray, length) {
          var C;

          if (isArray(originalArray)) {
            C = originalArray.constructor; // cross-realm fallback

            if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }

          return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/bind-context.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/bind-context.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsBindContextJs(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        ); // optional / simple context binding

        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;

          switch (length) {
            case 0:
              return function() {
                return fn.call(that);
              };

            case 1:
              return function(a) {
                return fn.call(that, a);
              };

            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };

            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }

          return function() /* ...args */
          {
            return fn.apply(that, arguments);
          };
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/call-with-safe-iteration-closing.js':
      /*!*************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
    \*************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCallWithSafeIterationClosingJs(
        module,
        exports,
        __webpack_require__
      ) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        ); // call something on iterator step with safe closing on error

        module.exports = function(iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
          } catch (error) {
            var returnMethod = iterator['return'];
            if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
            throw error;
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/check-correctness-of-iteration.js':
      /*!***********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
    \***********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCheckCorrectnessOfIterationJs(
        module,
        exports,
        __webpack_require__
      ) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var SAFE_CLOSING = false;

        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function next() {
              return {
                done: !!called++,
              };
            },
            return: function _return() {
              SAFE_CLOSING = true;
            },
          };

          iteratorWithReturn[ITERATOR] = function() {
            return this;
          }; // eslint-disable-next-line no-throw-literal

          Array.from(iteratorWithReturn, function() {
            throw 2;
          });
        } catch (error) {
          /* empty */
        }

        module.exports = function(exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
          var ITERATION_SUPPORT = false;

          try {
            var object = {};

            object[ITERATOR] = function() {
              return {
                next: function next() {
                  return {
                    done: (ITERATION_SUPPORT = true),
                  };
                },
              };
            };

            exec(object);
          } catch (error) {
            /* empty */
          }

          return ITERATION_SUPPORT;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/classof-raw.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/classof-raw.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/classof.js':
      /*!************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/classof.js ***!
    \************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsClassofJs(module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */
          '../../node_modules/core-js/internals/to-string-tag-support.js'
        );

        var classofRaw = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

        var CORRECT_ARGUMENTS =
          classofRaw(
            (function() {
              return arguments;
            })()
          ) == 'Arguments'; // fallback for IE11 Script Access Denied error

        var tryGet = function tryGet(it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        }; // getting tag from ES6+ `Object.prototype.toString`

        module.exports = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function(it) {
              var O, tag, result;
              return it === undefined
                ? 'Undefined'
                : it === null
                ? 'Null' // @@toStringTag case
                : typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) == 'string'
                ? tag // builtinTag case
                : CORRECT_ARGUMENTS
                ? classofRaw(O) // ES3 arguments fallback
                : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function'
                ? 'Arguments'
                : result;
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/collection-strong.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/collection-strong.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCollectionStrongJs(module, exports, __webpack_require__) {
        'use strict';

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var create = __webpack_require__(
          /*! ../internals/object-create */
          '../../node_modules/core-js/internals/object-create.js'
        );

        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */
          '../../node_modules/core-js/internals/redefine-all.js'
        );

        var bind = __webpack_require__(
          /*! ../internals/bind-context */
          '../../node_modules/core-js/internals/bind-context.js'
        );

        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */
          '../../node_modules/core-js/internals/an-instance.js'
        );

        var iterate = __webpack_require__(
          /*! ../internals/iterate */
          '../../node_modules/core-js/internals/iterate.js'
        );

        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */
          '../../node_modules/core-js/internals/define-iterator.js'
        );

        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */
          '../../node_modules/core-js/internals/set-species.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var fastKey = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        ).fastKey;

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        module.exports = {
          getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0,
              });
              if (!DESCRIPTORS) that.size = 0;
              if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
            });
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

            var define = function define(that, key, value) {
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              var previous, index; // change existing entry

              if (entry) {
                entry.value = value; // create new entry
              } else {
                state.last = entry = {
                  index: (index = fastKey(key, true)),
                  key: key,
                  value: value,
                  previous: (previous = state.last),
                  next: undefined,
                  removed: false,
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++; // add to index

                if (index !== 'F') state.index[index] = entry;
              }

              return that;
            };

            var getEntry = function getEntry(that, key) {
              var state = getInternalState(that); // fast case

              var index = fastKey(key);
              var entry;
              if (index !== 'F') return state.index[index]; // frozen object case

              for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key) return entry;
              }
            };

            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;

                while (entry) {
                  entry.removed = true;
                  if (entry.previous) entry.previous = entry.previous.next = undefined;
                  delete data[entry.index];
                  entry = entry.next;
                }

                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              delete: function _delete(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);

                if (entry) {
                  var next = entry.next;
                  var prev = entry.previous;
                  delete state.index[entry.index];
                  entry.removed = true;
                  if (prev) prev.next = next;
                  if (next) next.previous = prev;
                  if (state.first == entry) state.first = next;
                  if (state.last == entry) state.last = prev;
                  if (DESCRIPTORS) state.size--;
                  else that.size--;
                }

                return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(
                callbackfn
                /* , that = undefined */
              ) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;

                while ((entry = entry ? entry.next : state.first)) {
                  boundFunction(entry.value, entry.key, this); // revert to the last existing entry

                  while (entry && entry.removed) {
                    entry = entry.previous;
                  }
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(this, key);
              },
            });
            redefineAll(
              C.prototype,
              IS_MAP
                ? {
                    // 23.1.3.6 Map.prototype.get(key)
                    get: function get(key) {
                      var entry = getEntry(this, key);
                      return entry && entry.value;
                    },
                    // 23.1.3.9 Map.prototype.set(key, value)
                    set: function set(key, value) {
                      return define(this, key === 0 ? 0 : key, value);
                    },
                  }
                : {
                    // 23.2.3.1 Set.prototype.add(value)
                    add: function add(value) {
                      return define(this, (value = value === 0 ? 0 : value), value);
                    },
                  }
            );
            if (DESCRIPTORS)
              defineProperty(C.prototype, 'size', {
                get: function get() {
                  return getInternalState(this).size;
                },
              });
            return C;
          },
          setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
            var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

            defineIterator(
              C,
              CONSTRUCTOR_NAME,
              function(iterated, kind) {
                setInternalState(this, {
                  type: ITERATOR_NAME,
                  target: iterated,
                  state: getInternalCollectionState(iterated),
                  kind: kind,
                  last: undefined,
                });
              },
              function() {
                var state = getInternalIteratorState(this);
                var kind = state.kind;
                var entry = state.last; // revert to the last existing entry

                while (entry && entry.removed) {
                  entry = entry.previous;
                } // get next entry

                if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                  // or finish the iteration
                  state.target = undefined;
                  return {
                    value: undefined,
                    done: true,
                  };
                } // return step by kind

                if (kind == 'keys')
                  return {
                    value: entry.key,
                    done: false,
                  };
                if (kind == 'values')
                  return {
                    value: entry.value,
                    done: false,
                  };
                return {
                  value: [entry.key, entry.value],
                  done: false,
                };
              },
              IS_MAP ? 'entries' : 'values',
              !IS_MAP,
              true
            ); // add [@@species], 23.1.2.2, 23.2.2.2

            setSpecies(CONSTRUCTOR_NAME);
          },
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/collection-weak.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/collection-weak.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCollectionWeakJs(module, exports, __webpack_require__) {
        'use strict';

        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */
          '../../node_modules/core-js/internals/redefine-all.js'
        );

        var getWeakData = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        ).getWeakData;

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */
          '../../node_modules/core-js/internals/an-instance.js'
        );

        var iterate = __webpack_require__(
          /*! ../internals/iterate */
          '../../node_modules/core-js/internals/iterate.js'
        );

        var ArrayIterationModule = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        );

        var $has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        var find = ArrayIterationModule.find;
        var findIndex = ArrayIterationModule.findIndex;
        var id = 0; // fallback for uncaught frozen keys

        var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
          return store.frozen || (store.frozen = new UncaughtFrozenStore());
        };

        var UncaughtFrozenStore = function UncaughtFrozenStore() {
          this.entries = [];
        };

        var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
          return find(store.entries, function(it) {
            return it[0] === key;
          });
        };

        UncaughtFrozenStore.prototype = {
          get: function get(key) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) return entry[1];
          },
          has: function has(key) {
            return !!findUncaughtFrozen(this, key);
          },
          set: function set(key, value) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) entry[1] = value;
            else this.entries.push([key, value]);
          },
          delete: function _delete(key) {
            var index = findIndex(this.entries, function(it) {
              return it[0] === key;
            });
            if (~index) this.entries.splice(index, 1);
            return !!~index;
          },
        };
        module.exports = {
          getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                id: id++,
                frozen: undefined,
              });
              if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
            });
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

            var define = function define(that, key, value) {
              var state = getInternalState(that);
              var data = getWeakData(anObject(key), true);
              if (data === true) uncaughtFrozenStore(state).set(key, value);
              else data[state.id] = value;
              return that;
            };

            redefineAll(C.prototype, {
              // 23.3.3.2 WeakMap.prototype.delete(key)
              // 23.4.3.3 WeakSet.prototype.delete(value)
              delete: function _delete(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state)['delete'](key);
                return data && $has(data, state.id) && delete data[state.id];
              },
              // 23.3.3.4 WeakMap.prototype.has(key)
              // 23.4.3.4 WeakSet.prototype.has(value)
              has: function has(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).has(key);
                return data && $has(data, state.id);
              },
            });
            redefineAll(
              C.prototype,
              IS_MAP
                ? {
                    // 23.3.3.3 WeakMap.prototype.get(key)
                    get: function get(key) {
                      var state = getInternalState(this);

                      if (isObject(key)) {
                        var data = getWeakData(key);
                        if (data === true) return uncaughtFrozenStore(state).get(key);
                        return data ? data[state.id] : undefined;
                      }
                    },
                    // 23.3.3.5 WeakMap.prototype.set(key, value)
                    set: function set(key, value) {
                      return define(this, key, value);
                    },
                  }
                : {
                    // 23.4.3.1 WeakSet.prototype.add(value)
                    add: function add(value) {
                      return define(this, value, true);
                    },
                  }
            );
            return C;
          },
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/collection.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/collection.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCollectionJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          '../../node_modules/core-js/internals/is-forced.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var InternalMetadataModule = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        );

        var iterate = __webpack_require__(
          /*! ../internals/iterate */
          '../../node_modules/core-js/internals/iterate.js'
        );

        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */
          '../../node_modules/core-js/internals/an-instance.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */
          '../../node_modules/core-js/internals/check-correctness-of-iteration.js'
        );

        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        );

        var inheritIfRequired = __webpack_require__(
          /*! ../internals/inherit-if-required */
          '../../node_modules/core-js/internals/inherit-if-required.js'
        );

        module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
          var ADDER = IS_MAP ? 'set' : 'add';
          var NativeConstructor = global[CONSTRUCTOR_NAME];
          var NativePrototype = NativeConstructor && NativeConstructor.prototype;
          var Constructor = NativeConstructor;
          var exported = {};

          var fixMethod = function fixMethod(KEY) {
            var nativeMethod = NativePrototype[KEY];
            redefine(
              NativePrototype,
              KEY,
              KEY == 'add'
                ? function add(value) {
                    nativeMethod.call(this, value === 0 ? 0 : value);
                    return this;
                  }
                : KEY == 'delete'
                ? function(key) {
                    return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
                  }
                : KEY == 'get'
                ? function get(key) {
                    return IS_WEAK && !isObject(key)
                      ? undefined
                      : nativeMethod.call(this, key === 0 ? 0 : key);
                  }
                : KEY == 'has'
                ? function has(key) {
                    return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
                  }
                : function set(key, value) {
                    nativeMethod.call(this, key === 0 ? 0 : key, value);
                    return this;
                  }
            );
          }; // eslint-disable-next-line max-len

          if (
            isForced(
              CONSTRUCTOR_NAME,
              typeof NativeConstructor != 'function' ||
                !(
                  IS_WEAK ||
                  (NativePrototype.forEach &&
                    !fails(function() {
                      new NativeConstructor().entries().next();
                    }))
                )
            )
          ) {
            // create collection constructor
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            InternalMetadataModule.REQUIRED = true;
          } else if (isForced(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor(); // early implementations not supports chaining

            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

            var THROWS_ON_PRIMITIVES = fails(function() {
              instance.has(1);
            }); // most early implementations doesn't supports iterables, most modern - not close it correctly
            // eslint-disable-next-line no-new

            var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
              new NativeConstructor(iterable);
            }); // for early implementations -0 and +0 not the same

            var BUGGY_ZERO =
              !IS_WEAK &&
              fails(function() {
                // V8 ~ Chromium 42- fails only with 5+ elements
                var $instance = new NativeConstructor();
                var index = 5;

                while (index--) {
                  $instance[ADDER](index, index);
                }

                return !$instance.has(-0);
              });

            if (!ACCEPT_ITERABLES) {
              Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
                return that;
              });
              Constructor.prototype = NativePrototype;
              NativePrototype.constructor = Constructor;
            }

            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod('delete');
              fixMethod('has');
              IS_MAP && fixMethod('get');
            }

            if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

            if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
          }

          exported[CONSTRUCTOR_NAME] = Constructor;
          $(
            {
              global: true,
              forced: Constructor != NativeConstructor,
            },
            exported
          );
          setToStringTag(Constructor, CONSTRUCTOR_NAME);
          if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
          return Constructor;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/copy-constructor-properties.js':
      /*!********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/copy-constructor-properties.js ***!
    \********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var ownKeys = __webpack_require__(
          /*! ../internals/own-keys */
          '../../node_modules/core-js/internals/own-keys.js'
        );

        var getOwnPropertyDescriptorModule = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        module.exports = function(target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/correct-is-regexp-logic.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCorrectIsRegexpLogicJs(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var MATCH = wellKnownSymbol('match');

        module.exports = function(METHOD_NAME) {
          var regexp = /./;

          try {
            '/./'[METHOD_NAME](regexp);
          } catch (e) {
            try {
              regexp[MATCH] = false;
              return '/./'[METHOD_NAME](regexp);
            } catch (f) {
              /* empty */
            }
          }

          return false;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/correct-prototype-getter.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/correct-prototype-getter.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCorrectPrototypeGetterJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        module.exports = !fails(function() {
          function F() {
            /* empty */
          }

          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/create-html.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/create-html.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCreateHtmlJs(module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
        // https://tc39.github.io/ecma262/#sec-createhtml

        module.exports = function(string, tag, attribute, value) {
          var S = String(requireObjectCoercible(string));
          var p1 = '<' + tag;
          if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
          return p1 + '>' + S + '</' + tag + '>';
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/create-iterator-constructor.js':
      /*!********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/create-iterator-constructor.js ***!
    \********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCreateIteratorConstructorJs(module, exports, __webpack_require__) {
        'use strict';

        var IteratorPrototype = __webpack_require__(
          /*! ../internals/iterators-core */
          '../../node_modules/core-js/internals/iterators-core.js'
        ).IteratorPrototype;

        var create = __webpack_require__(
          /*! ../internals/object-create */
          '../../node_modules/core-js/internals/object-create.js'
        );

        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          '../../node_modules/core-js/internals/create-property-descriptor.js'
        );

        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        );

        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          '../../node_modules/core-js/internals/iterators.js'
        );

        var returnThis = function returnThis() {
          return this;
        };

        module.exports = function(IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + ' Iterator';
          IteratorConstructor.prototype = create(IteratorPrototype, {
            next: createPropertyDescriptor(1, next),
          });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/create-non-enumerable-property.js':
      /*!***********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/create-non-enumerable-property.js ***!
    \***********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCreateNonEnumerablePropertyJs(
        module,
        exports,
        __webpack_require__
      ) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          '../../node_modules/core-js/internals/create-property-descriptor.js'
        );

        module.exports = DESCRIPTORS
          ? function(object, key, value) {
              return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/create-property-descriptor.js':
      /*!*******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/create-property-descriptor.js ***!
    \*******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/create-property.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/create-property.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsCreatePropertyJs(module, exports, __webpack_require__) {
        'use strict';

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          '../../node_modules/core-js/internals/create-property-descriptor.js'
        );

        module.exports = function(object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object)
            definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
          else object[propertyKey] = value;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/date-to-iso-string.js':
      /*!***********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/date-to-iso-string.js ***!
    \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDateToIsoStringJs(module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var padStart = __webpack_require__(
          /*! ../internals/string-pad */
          '../../node_modules/core-js/internals/string-pad.js'
        ).start;

        var abs = Math.abs;
        var DatePrototype = Date.prototype;
        var getTime = DatePrototype.getTime;
        var nativeDateToISOString = DatePrototype.toISOString; // `Date.prototype.toISOString` method implementation
        // https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
        // PhantomJS / old WebKit fails here:

        module.exports =
          fails(function() {
            return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
          }) ||
          !fails(function() {
            nativeDateToISOString.call(new Date(NaN));
          })
            ? function toISOString() {
                if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
                var date = this;
                var year = date.getUTCFullYear();
                var milliseconds = date.getUTCMilliseconds();
                var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
                return (
                  sign +
                  padStart(abs(year), sign ? 6 : 4, 0) +
                  '-' +
                  padStart(date.getUTCMonth() + 1, 2, 0) +
                  '-' +
                  padStart(date.getUTCDate(), 2, 0) +
                  'T' +
                  padStart(date.getUTCHours(), 2, 0) +
                  ':' +
                  padStart(date.getUTCMinutes(), 2, 0) +
                  ':' +
                  padStart(date.getUTCSeconds(), 2, 0) +
                  '.' +
                  padStart(milliseconds, 3, 0) +
                  'Z'
                );
              }
            : nativeDateToISOString;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/date-to-primitive.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/date-to-primitive.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDateToPrimitiveJs(module, exports, __webpack_require__) {
        'use strict';

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        module.exports = function(hint) {
          if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
            throw TypeError('Incorrect hint');
          }

          return toPrimitive(anObject(this), hint !== 'number');
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/define-iterator.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/define-iterator.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDefineIteratorJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createIteratorConstructor = __webpack_require__(
          /*! ../internals/create-iterator-constructor */
          '../../node_modules/core-js/internals/create-iterator-constructor.js'
        );

        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */
          '../../node_modules/core-js/internals/object-get-prototype-of.js'
        );

        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */
          '../../node_modules/core-js/internals/object-set-prototype-of.js'
        );

        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          '../../node_modules/core-js/internals/iterators.js'
        );

        var IteratorsCore = __webpack_require__(
          /*! ../internals/iterators-core */
          '../../node_modules/core-js/internals/iterators-core.js'
        );

        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol('iterator');
        var KEYS = 'keys';
        var VALUES = 'values';
        var ENTRIES = 'entries';

        var returnThis = function returnThis() {
          return this;
        };

        module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);

          var getIterationMethod = function getIterationMethod(KIND) {
            if (KIND === DEFAULT && defaultIterator) return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };

              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };

              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }

            return function() {
              return new IteratorConstructor(this);
            };
          };

          var TO_STRING_TAG = NAME + ' Iterator';
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator =
            IterablePrototype[ITERATOR] ||
            IterablePrototype['@@iterator'] ||
            (DEFAULT && IterablePrototype[DEFAULT]);
          var defaultIterator = (!BUGGY_SAFARI_ITERATORS && nativeIterator) || getIterationMethod(DEFAULT);
          var anyNativeIterator =
            NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY; // fix native

          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

            if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                  createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              } // Set @@toStringTag to native iterators

              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
            }
          } // fix Array#{values, @@iterator}.name in V8 / FF

          if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            INCORRECT_VALUES_NAME = true;

            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          } // define iterator

          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
          }

          Iterators[NAME] = defaultIterator; // export additional methods

          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES),
            };
            if (FORCED)
              for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $(
                {
                  target: NAME,
                  proto: true,
                  forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME,
                },
                methods
              );
          }

          return methods;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/define-well-known-symbol.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/define-well-known-symbol.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDefineWellKnownSymbolJs(module, exports, __webpack_require__) {
        var path = __webpack_require__(
          /*! ../internals/path */
          '../../node_modules/core-js/internals/path.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var wrappedWellKnownSymbolModule = __webpack_require__(
          /*! ../internals/wrapped-well-known-symbol */
          '../../node_modules/core-js/internals/wrapped-well-known-symbol.js'
        );

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        module.exports = function(NAME) {
          var Symbol = path.Symbol || (path.Symbol = {});
          if (!has(Symbol, NAME))
            defineProperty(Symbol, NAME, {
              value: wrappedWellKnownSymbolModule.f(NAME),
            });
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/descriptors.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/descriptors.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        ); // Thank's IE8 for his funny defineProperty

        module.exports = !fails(function() {
          return (
            Object.defineProperty({}, 'a', {
              get: function get() {
                return 7;
              },
            }).a != 7
          );
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/document-create-element.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/document-create-element.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var document = global.document; // typeof document.createElement is 'object' in old IE

        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function(it) {
          return EXISTS ? document.createElement(it) : {};
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/dom-iterables.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/dom-iterables.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsDomIterablesJs(module, exports) {
        // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
        module.exports = {
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
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/enum-bug-keys.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/enum-bug-keys.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
        // IE8- don't enum bug keys
        module.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/export.js':
      /*!***********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/export.js ***!
    \***********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */
          '../../node_modules/core-js/internals/set-global.js'
        );

        var copyConstructorProperties = __webpack_require__(
          /*! ../internals/copy-constructor-properties */
          '../../node_modules/core-js/internals/copy-constructor-properties.js'
        );

        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          '../../node_modules/core-js/internals/is-forced.js'
        );
        /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */

        module.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;

          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global[TARGET] || {}).prototype;
          }

          if (target)
            for (key in source) {
              sourceProperty = source[key];

              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];

              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              } // add a flag to not completely full polyfills

              if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, 'sham', true);
              } // extend global

              redefine(target, key, sourceProperty, options);
            }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/fails.js':
      /*!**********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/fails.js ***!
    \**********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsFailsJs(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js':
      /*!***************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
    \***************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsFixRegexpWellKnownSymbolLogicJs(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict';

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var regexpExec = __webpack_require__(
          /*! ../internals/regexp-exec */
          '../../node_modules/core-js/internals/regexp-exec.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var SPECIES = wellKnownSymbol('species');
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
          // #replace needs built-in support for named groups.
          // #match works fine because it just return the exec results, even if it has
          // a "grops" property.
          var re = /./;

          re.exec = function() {
            var result = [];
            result.groups = {
              a: '7',
            };
            return result;
          };

          return ''.replace(re, '$<a>') !== '7';
        }); // IE <= 11 replaces $0 with the whole match, as if it was $&
        // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

        var REPLACE_KEEPS_$0 = (function() {
          return 'a'.replace(/./, '$0') === '$0';
        })(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        // Weex JS has frozen built-in prototypes, so use try / catch wrapper

        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
          var re = /(?:)/;
          var originalExec = re.exec;

          re.exec = function() {
            return originalExec.apply(this, arguments);
          };

          var result = 'ab'.split(re);
          return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
        });

        module.exports = function(KEY, length, exec, sham) {
          var SYMBOL = wellKnownSymbol(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function() {
            // String methods call symbol-named RegEp methods
            var O = {};

            O[SYMBOL] = function() {
              return 7;
            };

            return ''[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC =
            DELEGATES_TO_SYMBOL &&
            !fails(function() {
              // Symbol-named RegExp methods call .exec
              var execCalled = false;
              var re = /a/;

              if (KEY === 'split') {
                // We can't use real regex here since it causes deoptimization
                // and serious performance degradation in V8
                // https://github.com/zloirock/core-js/issues/306
                re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
                // a new one. We need to return the patched regex when creating the new one.

                re.constructor = {};

                re.constructor[SPECIES] = function() {
                  return re;
                };

                re.flags = '';
                re[SYMBOL] = /./[SYMBOL];
              }

              re.exec = function() {
                execCalled = true;
                return null;
              };

              re[SYMBOL]('');
              return !execCalled;
            });

          if (
            !DELEGATES_TO_SYMBOL ||
            !DELEGATES_TO_EXEC ||
            (KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0)) ||
            (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
          ) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(
              SYMBOL,
              ''[KEY],
              function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                if (regexp.exec === regexpExec) {
                  if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                    // The native String method already delegates to @@method (this
                    // polyfilled function), leasing to infinite recursion.
                    // We avoid it by directly calling the native @@method method.
                    return {
                      done: true,
                      value: nativeRegExpMethod.call(regexp, str, arg2),
                    };
                  }

                  return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2),
                  };
                }

                return {
                  done: false,
                };
              },
              {
                REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
              }
            );
            var stringMethod = methods[0];
            var regexMethod = methods[1];
            redefine(String.prototype, KEY, stringMethod);
            redefine(
              RegExp.prototype,
              SYMBOL,
              length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                ? // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                  function(string, arg) {
                    return regexMethod.call(string, this, arg);
                  } // 21.2.5.6 RegExp.prototype[@@match](string)
                : // 21.2.5.9 RegExp.prototype[@@search](string)
                  function(string) {
                    return regexMethod.call(string, this);
                  }
            );
          }

          if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/forced-string-html-method.js':
      /*!******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/forced-string-html-method.js ***!
    \******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsForcedStringHtmlMethodJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        ); // check the existence of a method, lowercase
        // of a tag and escaping quotes in arguments

        module.exports = function(METHOD_NAME) {
          return fails(function() {
            var test = ''[METHOD_NAME]('"');
            return test !== test.toLowerCase() || test.split('"').length > 3;
          });
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/forced-string-trim-method.js':
      /*!******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/forced-string-trim-method.js ***!
    \******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsForcedStringTrimMethodJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */
          '../../node_modules/core-js/internals/whitespaces.js'
        );

        var non = '\u200B\x85\u180E'; // check that a method works with the correct list
        // of whitespaces and has a correct name

        module.exports = function(METHOD_NAME) {
          return fails(function() {
            return (
              !!whitespaces[METHOD_NAME]() ||
              non[METHOD_NAME]() != non ||
              whitespaces[METHOD_NAME].name !== METHOD_NAME
            );
          });
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/freezing.js':
      /*!*************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/freezing.js ***!
    \*************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsFreezingJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        module.exports = !fails(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/function-bind.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/function-bind.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsFunctionBindJs(module, exports, __webpack_require__) {
        'use strict';

        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var slice = [].slice;
        var factories = {};

        var construct = function construct(C, argsLength, args) {
          if (!(argsLength in factories)) {
            for (var list = [], i = 0; i < argsLength; i++) {
              list[i] = 'a[' + i + ']';
            } // eslint-disable-next-line no-new-func

            factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
          }

          return factories[argsLength](C, args);
        }; // `Function.prototype.bind` method implementation
        // https://tc39.github.io/ecma262/#sec-function.prototype.bind

        module.exports =
          Function.bind ||
          function bind(
            that
            /* , ...args */
          ) {
            var fn = aFunction(this);
            var partArgs = slice.call(arguments, 1);

            var boundFunction = function bound() /* args... */
            {
              var args = partArgs.concat(slice.call(arguments));
              return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
            };

            if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
            return boundFunction;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/get-built-in.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/get-built-in.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
        var path = __webpack_require__(
          /*! ../internals/path */
          '../../node_modules/core-js/internals/path.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var aFunction = function aFunction(variable) {
          return typeof variable == 'function' ? variable : undefined;
        };

        module.exports = function(namespace, method) {
          return arguments.length < 2
            ? aFunction(path[namespace]) || aFunction(global[namespace])
            : (path[namespace] && path[namespace][method]) ||
                (global[namespace] && global[namespace][method]);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/get-iterator-method.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/get-iterator-method.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsGetIteratorMethodJs(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof */
          '../../node_modules/core-js/internals/classof.js'
        );

        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          '../../node_modules/core-js/internals/iterators.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');

        module.exports = function(it) {
          if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/global.js':
      /*!***********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/global.js ***!
    \***********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsGlobalJs(module, exports) {
        var check = function check(it) {
          return it && it.Math == Math && it;
        }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

        module.exports = // eslint-disable-next-line no-undef
          check(typeof globalThis == 'object' && globalThis) ||
          check(typeof window == 'object' && window) ||
          check(typeof self == 'object' && self) ||
          check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
          Function('return this')();
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/has.js':
      /*!********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/has.js ***!
    \********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsHasJs(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/hidden-keys.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/hidden-keys.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
        module.exports = {};
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/host-report-errors.js':
      /*!***********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/host-report-errors.js ***!
    \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsHostReportErrorsJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        module.exports = function(a, b) {
          var console = global.console;

          if (console && console.error) {
            arguments.length === 1 ? console.error(a) : console.error(a, b);
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/html.js':
      /*!*********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/html.js ***!
    \*********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsHtmlJs(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          '../../node_modules/core-js/internals/get-built-in.js'
        );

        module.exports = getBuiltIn('document', 'documentElement');
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/ie8-dom-define.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/ie8-dom-define.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */
          '../../node_modules/core-js/internals/document-create-element.js'
        ); // Thank's IE8 for his funny defineProperty

        module.exports =
          !DESCRIPTORS &&
          !fails(function() {
            return (
              Object.defineProperty(createElement('div'), 'a', {
                get: function get() {
                  return 7;
                },
              }).a != 7
            );
          });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/indexed-object.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/indexed-object.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

        module.exports = fails(function() {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object('z').propertyIsEnumerable(0);
        })
          ? function(it) {
              return classof(it) == 'String' ? split.call(it, '') : Object(it);
            }
          : Object;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/inherit-if-required.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/inherit-if-required.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsInheritIfRequiredJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */
          '../../node_modules/core-js/internals/object-set-prototype-of.js'
        ); // makes subclassing work correct for wrapped built-ins

        module.exports = function($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
            // it can work only with native `setPrototypeOf`
            setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (NewTarget = dummy.constructor) == 'function' &&
            NewTarget !== Wrapper &&
            isObject((NewTargetPrototype = NewTarget.prototype)) &&
            NewTargetPrototype !== Wrapper.prototype
          )
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/inspect-source.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/inspect-source.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsInspectSourceJs(module, exports, __webpack_require__) {
        var store = __webpack_require__(
          /*! ../internals/shared-store */
          '../../node_modules/core-js/internals/shared-store.js'
        );

        var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

        if (typeof store.inspectSource != 'function') {
          store.inspectSource = function(it) {
            return functionToString.call(it);
          };
        }

        module.exports = store.inspectSource;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/internal-metadata.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/internal-metadata.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsInternalMetadataJs(module, exports, __webpack_require__) {
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          '../../node_modules/core-js/internals/hidden-keys.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var uid = __webpack_require__(
          /*! ../internals/uid */
          '../../node_modules/core-js/internals/uid.js'
        );

        var FREEZING = __webpack_require__(
          /*! ../internals/freezing */
          '../../node_modules/core-js/internals/freezing.js'
        );

        var METADATA = uid('meta');
        var id = 0;

        var isExtensible =
          Object.isExtensible ||
          function() {
            return true;
          };

        var setMetadata = function setMetadata(it) {
          defineProperty(it, METADATA, {
            value: {
              objectID: 'O' + ++id,
              // object ID
              weakData: {}, // weak collections IDs
            },
          });
        };

        var fastKey = function fastKey(it, create) {
          // return a primitive with prefix
          if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F'; // not necessary to add metadata

            if (!create) return 'E'; // add missing metadata

            setMetadata(it); // return object ID
          }

          return it[METADATA].objectID;
        };

        var getWeakData = function getWeakData(it, create) {
          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true; // not necessary to add metadata

            if (!create) return false; // add missing metadata

            setMetadata(it); // return the store of weak collections IDs
          }

          return it[METADATA].weakData;
        }; // add metadata on freeze-family methods calling

        var onFreeze = function onFreeze(it) {
          if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
          return it;
        };

        var meta = (module.exports = {
          REQUIRED: false,
          fastKey: fastKey,
          getWeakData: getWeakData,
          onFreeze: onFreeze,
        });
        hiddenKeys[METADATA] = true;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/internal-state.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/internal-state.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/native-weak-map */
          '../../node_modules/core-js/internals/native-weak-map.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var objectHas = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */
          '../../node_modules/core-js/internals/shared-key.js'
        );

        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          '../../node_modules/core-js/internals/hidden-keys.js'
        );

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function enforce(it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function getterFor(TYPE) {
          return function(it) {
            var state;

            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }

            return state;
          };
        };

        if (NATIVE_WEAK_MAP) {
          var store = new WeakMap();
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;

          set = function set(it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
          };

          get = function get(it) {
            return wmget.call(store, it) || {};
          };

          has = function has(it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;

          set = function set(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };

          get = function get(it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };

          has = function has(it) {
            return objectHas(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-array-iterator-method.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-array-iterator-method.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsArrayIteratorMethodJs(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          '../../node_modules/core-js/internals/iterators.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var ArrayPrototype = Array.prototype; // check on default Array iterator

        module.exports = function(it) {
          return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-array.js':
      /*!*************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-array.js ***!
    \*************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsArrayJs(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        ); // `IsArray` abstract operation
        // https://tc39.github.io/ecma262/#sec-isarray

        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return classof(arg) == 'Array';
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-forced.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-forced.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var replacement = /#|\.prototype\./;

        var isForced = function isForced(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL
            ? true
            : value == NATIVE
            ? false
            : typeof detection == 'function'
            ? fails(detection)
            : !!detection;
        };

        var normalize = (isForced.normalize = function(string) {
          return String(string)
            .replace(replacement, '.')
            .toLowerCase();
        });

        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = 'N');
        var POLYFILL = (isForced.POLYFILL = 'P');
        module.exports = isForced;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-integer.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-integer.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsIntegerJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var floor = Math.floor; // `Number.isInteger` method implementation
        // https://tc39.github.io/ecma262/#sec-number.isinteger

        module.exports = function isInteger(it) {
          return !isObject(it) && isFinite(it) && floor(it) === it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-ios.js':
      /*!***********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-ios.js ***!
    \***********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsIosJs(module, exports, __webpack_require__) {
        var userAgent = __webpack_require__(
          /*! ../internals/user-agent */
          '../../node_modules/core-js/internals/user-agent.js'
        );

        module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-object.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-object.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
        module.exports = function(it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-pure.js':
      /*!************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-pure.js ***!
    \************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsPureJs(module, exports) {
        module.exports = false;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/is-regexp.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/is-regexp.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIsRegexpJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
        // https://tc39.github.io/ecma262/#sec-isregexp

        module.exports = function(it) {
          var isRegExp;
          return (
            isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp')
          );
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/iterate.js':
      /*!************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/iterate.js ***!
    \************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIterateJs(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */
          '../../node_modules/core-js/internals/is-array-iterator-method.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var bind = __webpack_require__(
          /*! ../internals/bind-context */
          '../../node_modules/core-js/internals/bind-context.js'
        );

        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */
          '../../node_modules/core-js/internals/get-iterator-method.js'
        );

        var callWithSafeIterationClosing = __webpack_require__(
          /*! ../internals/call-with-safe-iteration-closing */
          '../../node_modules/core-js/internals/call-with-safe-iteration-closing.js'
        );

        var Result = function Result(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };

        var iterate = (module.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
          var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
          var iterator, iterFn, index, length, result, next, step;

          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

            if (isArrayIteratorMethod(iterFn)) {
              for (index = 0, length = toLength(iterable.length); length > index; index++) {
                result = AS_ENTRIES
                  ? boundFunction(anObject((step = iterable[index]))[0], step[1])
                  : boundFunction(iterable[index]);
                if (result && result instanceof Result) return result;
              }

              return new Result(false);
            }

            iterator = iterFn.call(iterable);
          }

          next = iterator.next;

          while (!(step = next.call(iterator)).done) {
            result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
            if (typeof result == 'object' && result && result instanceof Result) return result;
          }

          return new Result(false);
        });

        iterate.stop = function(result) {
          return new Result(true, result);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/iterators-core.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/iterators-core.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIteratorsCoreJs(module, exports, __webpack_require__) {
        'use strict';

        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */
          '../../node_modules/core-js/internals/object-get-prototype-of.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var BUGGY_SAFARI_ITERATORS = false;

        var returnThis = function returnThis() {
          return this;
        }; // `%IteratorPrototype%` object
        // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object

        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

        if ([].keys) {
          arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

          if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }

        if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }

        module.exports = {
          IteratorPrototype: IteratorPrototype,
          BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/iterators.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/iterators.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsIteratorsJs(module, exports) {
        module.exports = {};
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/math-expm1.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/math-expm1.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsMathExpm1Js(module, exports) {
        var nativeExpm1 = Math.expm1;
        var exp = Math.exp; // `Math.expm1` method implementation
        // https://tc39.github.io/ecma262/#sec-math.expm1

        module.exports =
          !nativeExpm1 || // Old FF bug
          nativeExpm1(10) > 22025.465794806719 ||
          nativeExpm1(10) < 22025.4657948067165168 || // Tor Browser bug
          nativeExpm1(-2e-17) != -2e-17
            ? function expm1(x) {
                return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + (x * x) / 2 : exp(x) - 1;
              }
            : nativeExpm1;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/math-fround.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/math-fround.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsMathFroundJs(module, exports, __webpack_require__) {
        var sign = __webpack_require__(
          /*! ../internals/math-sign */
          '../../node_modules/core-js/internals/math-sign.js'
        );

        var abs = Math.abs;
        var pow = Math.pow;
        var EPSILON = pow(2, -52);
        var EPSILON32 = pow(2, -23);
        var MAX32 = pow(2, 127) * (2 - EPSILON32);
        var MIN32 = pow(2, -126);

        var roundTiesToEven = function roundTiesToEven(n) {
          return n + 1 / EPSILON - 1 / EPSILON;
        }; // `Math.fround` method implementation
        // https://tc39.github.io/ecma262/#sec-math.fround

        module.exports =
          Math.fround ||
          function fround(x) {
            var $abs = abs(x);
            var $sign = sign(x);
            var a, result;
            if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
            a = (1 + EPSILON32 / EPSILON) * $abs;
            result = a - (a - $abs); // eslint-disable-next-line no-self-compare

            if (result > MAX32 || result != result) return $sign * Infinity;
            return $sign * result;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/math-log1p.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/math-log1p.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsMathLog1pJs(module, exports) {
        var log = Math.log; // `Math.log1p` method implementation
        // https://tc39.github.io/ecma262/#sec-math.log1p

        module.exports =
          Math.log1p ||
          function log1p(x) {
            return (x = +x) > -1e-8 && x < 1e-8 ? x - (x * x) / 2 : log(1 + x);
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/math-sign.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/math-sign.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsMathSignJs(module, exports) {
        // `Math.sign` method implementation
        // https://tc39.github.io/ecma262/#sec-math.sign
        module.exports =
          Math.sign ||
          function sign(x) {
            // eslint-disable-next-line no-self-compare
            return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/microtask.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/microtask.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsMicrotaskJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var macrotask = __webpack_require__(
          /*! ../internals/task */
          '../../node_modules/core-js/internals/task.js'
        ).set;

        var IS_IOS = __webpack_require__(
          /*! ../internals/is-ios */
          '../../node_modules/core-js/internals/is-ios.js'
        );

        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var IS_NODE = classof(process) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

        var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
        var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
        var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

        if (!queueMicrotask) {
          flush = function flush() {
            var parent, fn;
            if (IS_NODE && (parent = process.domain)) parent.exit();

            while (head) {
              fn = head.fn;
              head = head.next;

              try {
                fn();
              } catch (error) {
                if (head) notify();
                else last = undefined;
                throw error;
              }
            }

            last = undefined;
            if (parent) parent.enter();
          }; // Node.js

          if (IS_NODE) {
            notify = function notify() {
              process.nextTick(flush);
            }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
          } else if (MutationObserver && !IS_IOS) {
            toggle = true;
            node = document.createTextNode('');
            new MutationObserver(flush).observe(node, {
              characterData: true,
            });

            notify = function notify() {
              node.data = toggle = !toggle;
            }; // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            promise = Promise.resolve(undefined);
            then = promise.then;

            notify = function notify() {
              then.call(promise, flush);
            }; // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function notify() {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }
        }

        module.exports =
          queueMicrotask ||
          function(fn) {
            var task = {
              fn: fn,
              next: undefined,
            };
            if (last) last.next = task;

            if (!head) {
              head = task;
              notify();
            }

            last = task;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/native-promise-constructor.js':
      /*!*******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/native-promise-constructor.js ***!
    \*******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsNativePromiseConstructorJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        module.exports = global.Promise;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/native-symbol.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/native-symbol.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsNativeSymbolJs(module, exports, __webpack_require__) {
        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function() {
            // Chrome 38 Symbol has incorrect toString conversion
            // eslint-disable-next-line no-undef
            return !String(Symbol());
          });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/native-weak-map.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/native-weak-map.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */
          '../../node_modules/core-js/internals/inspect-source.js'
        );

        var WeakMap = global.WeakMap;
        module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/new-promise-capability.js':
      /*!***************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/new-promise-capability.js ***!
    \***************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsNewPromiseCapabilityJs(module, exports, __webpack_require__) {
        'use strict';

        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        );

        var PromiseCapability = function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }; // 25.4.1.5 NewPromiseCapability(C)

        module.exports.f = function(C) {
          return new PromiseCapability(C);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/not-a-regexp.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/not-a-regexp.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsNotARegexpJs(module, exports, __webpack_require__) {
        var isRegExp = __webpack_require__(
          /*! ../internals/is-regexp */
          '../../node_modules/core-js/internals/is-regexp.js'
        );

        module.exports = function(it) {
          if (isRegExp(it)) {
            throw TypeError("The method doesn't accept regular expressions");
          }

          return it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/number-is-finite.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/number-is-finite.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsNumberIsFiniteJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var globalIsFinite = global.isFinite; // `Number.isFinite` method
        // https://tc39.github.io/ecma262/#sec-number.isfinite

        module.exports =
          Number.isFinite ||
          function isFinite(it) {
            return typeof it == 'number' && globalIsFinite(it);
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-assign.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-assign.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectAssignJs(module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var objectKeys = __webpack_require__(
          /*! ../internals/object-keys */
          '../../node_modules/core-js/internals/object-keys.js'
        );

        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */
          '../../node_modules/core-js/internals/object-get-own-property-symbols.js'
        );

        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */
          '../../node_modules/core-js/internals/object-property-is-enumerable.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          '../../node_modules/core-js/internals/indexed-object.js'
        );

        var nativeAssign = Object.assign;
        var defineProperty = Object.defineProperty; // `Object.assign` method
        // https://tc39.github.io/ecma262/#sec-object.assign

        module.exports =
          !nativeAssign ||
          fails(function() {
            // should have correct order of operations (Edge bug)
            if (
              DESCRIPTORS &&
              nativeAssign(
                {
                  b: 1,
                },
                nativeAssign(
                  defineProperty({}, 'a', {
                    enumerable: true,
                    get: function get() {
                      defineProperty(this, 'b', {
                        value: 3,
                        enumerable: false,
                      });
                    },
                  }),
                  {
                    b: 2,
                  }
                )
              ).b !== 1
            )
              return true; // should work with symbols and should have deterministic property order (V8 bug)

            var A = {};
            var B = {}; // eslint-disable-next-line no-undef

            var symbol = Symbol();
            var alphabet = 'abcdefghijklmnopqrst';
            A[symbol] = 7;
            alphabet.split('').forEach(function(chr) {
              B[chr] = chr;
            });
            return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
          })
            ? function assign(target, source) {
                // eslint-disable-line no-unused-vars
                var T = toObject(target);
                var argumentsLength = arguments.length;
                var index = 1;
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                var propertyIsEnumerable = propertyIsEnumerableModule.f;

                while (argumentsLength > index) {
                  var S = IndexedObject(arguments[index++]);
                  var keys = getOwnPropertySymbols
                    ? objectKeys(S).concat(getOwnPropertySymbols(S))
                    : objectKeys(S);
                  var length = keys.length;
                  var j = 0;
                  var key;

                  while (length > j) {
                    key = keys[j++];
                    if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
                  }
                }

                return T;
              }
            : nativeAssign;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-create.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-create.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectCreateJs(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var defineProperties = __webpack_require__(
          /*! ../internals/object-define-properties */
          '../../node_modules/core-js/internals/object-define-properties.js'
        );

        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */
          '../../node_modules/core-js/internals/enum-bug-keys.js'
        );

        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          '../../node_modules/core-js/internals/hidden-keys.js'
        );

        var html = __webpack_require__(
          /*! ../internals/html */
          '../../node_modules/core-js/internals/html.js'
        );

        var documentCreateElement = __webpack_require__(
          /*! ../internals/document-create-element */
          '../../node_modules/core-js/internals/document-create-element.js'
        );

        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */
          '../../node_modules/core-js/internals/shared-key.js'
        );

        var GT = '>';
        var LT = '<';
        var PROTOTYPE = 'prototype';
        var SCRIPT = 'script';
        var IE_PROTO = sharedKey('IE_PROTO');

        var EmptyConstructor = function EmptyConstructor() {
          /* empty */
        };

        var scriptTag = function scriptTag(content) {
          return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
        }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype

        var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
          activeXDocument.write(scriptTag(''));
          activeXDocument.close();
          var temp = activeXDocument.parentWindow.Object;
          activeXDocument = null; // avoid memory leak

          return temp;
        }; // Create object with fake `null` prototype: use iframe Object with cleared prototype

        var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = documentCreateElement('iframe');
          var JS = 'java' + SCRIPT + ':';
          var iframeDocument;
          iframe.style.display = 'none';
          html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag('document.F=Object'));
          iframeDocument.close();
          return iframeDocument.F;
        }; // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug

        var activeXDocument;

        var _NullProtoObject = function NullProtoObject() {
          try {
            /* global ActiveXObject */
            activeXDocument = document.domain && new ActiveXObject('htmlfile');
          } catch (error) {
            /* ignore */
          }

          _NullProtoObject = activeXDocument
            ? NullProtoObjectViaActiveX(activeXDocument)
            : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;

          while (length--) {
            delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          }

          return _NullProtoObject();
        };

        hiddenKeys[IE_PROTO] = true; // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;

            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

              result[IE_PROTO] = O;
            } else result = _NullProtoObject();

            return Properties === undefined ? result : defineProperties(result, Properties);
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-define-properties.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-define-properties.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var objectKeys = __webpack_require__(
          /*! ../internals/object-keys */
          '../../node_modules/core-js/internals/object-keys.js'
        ); // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties

        module.exports = DESCRIPTORS
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = objectKeys(Properties);
              var length = keys.length;
              var index = 0;
              var key;

              while (length > index) {
                definePropertyModule.f(O, (key = keys[index++]), Properties[key]);
              }

              return O;
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-define-property.js':
      /*!***************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-define-property.js ***!
    \***************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */
          '../../node_modules/core-js/internals/ie8-dom-define.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty

        exports.f = DESCRIPTORS
          ? nativeDefineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-get-own-property-descriptor.js':
      /*!***************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
    \***************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(
        module,
        exports,
        __webpack_require__
      ) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */
          '../../node_modules/core-js/internals/object-property-is-enumerable.js'
        );

        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          '../../node_modules/core-js/internals/create-property-descriptor.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */
          '../../node_modules/core-js/internals/ie8-dom-define.js'
        );

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

        exports.f = DESCRIPTORS
          ? nativeGetOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-get-own-property-names-external.js':
      /*!*******************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-get-own-property-names-external.js ***!
    \*******************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesExternalJs(
        module,
        exports,
        __webpack_require__
      ) {
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var nativeGetOwnPropertyNames = __webpack_require__(
          /*! ../internals/object-get-own-property-names */
          '../../node_modules/core-js/internals/object-get-own-property-names.js'
        ).f;

        var toString = {}.toString;
        var windowNames =
          typeof window == 'object' && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];

        var getWindowNames = function getWindowNames(it) {
          try {
            return nativeGetOwnPropertyNames(it);
          } catch (error) {
            return windowNames.slice();
          }
        }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == '[object Window]'
            ? getWindowNames(it)
            : nativeGetOwnPropertyNames(toIndexedObject(it));
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-get-own-property-names.js':
      /*!**********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-get-own-property-names.js ***!
    \**********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */
          '../../node_modules/core-js/internals/object-keys-internal.js'
        );

        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */
          '../../node_modules/core-js/internals/enum-bug-keys.js'
        );

        var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-get-own-property-symbols.js':
      /*!************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
    \************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-get-prototype-of.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-get-prototype-of.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */
          '../../node_modules/core-js/internals/shared-key.js'
        );

        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
          /*! ../internals/correct-prototype-getter */
          '../../node_modules/core-js/internals/correct-prototype-getter.js'
        );

        var IE_PROTO = sharedKey('IE_PROTO');
        var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.getprototypeof

        module.exports = CORRECT_PROTOTYPE_GETTER
          ? Object.getPrototypeOf
          : function(O) {
              O = toObject(O);
              if (has(O, IE_PROTO)) return O[IE_PROTO];

              if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
              }

              return O instanceof Object ? ObjectPrototype : null;
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-keys-internal.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-keys-internal.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var indexOf = __webpack_require__(
          /*! ../internals/array-includes */
          '../../node_modules/core-js/internals/array-includes.js'
        ).indexOf;

        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          '../../node_modules/core-js/internals/hidden-keys.js'
        );

        module.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;

          for (key in O) {
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          } // Don't enum bug & hidden keys

          while (names.length > i) {
            if (has(O, (key = names[i++]))) {
              ~indexOf(result, key) || result.push(key);
            }
          }

          return result;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-keys.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-keys.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */
          '../../node_modules/core-js/internals/object-keys-internal.js'
        );

        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */
          '../../node_modules/core-js/internals/enum-bug-keys.js'
        ); // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys

        module.exports =
          Object.keys ||
          function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-property-is-enumerable.js':
      /*!**********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-property-is-enumerable.js ***!
    \**********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
        'use strict';

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !nativePropertyIsEnumerable.call(
            {
              1: 2,
            },
            1
          ); // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : nativePropertyIsEnumerable;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-set-prototype-of.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-set-prototype-of.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var aPossiblePrototype = __webpack_require__(
          /*! ../internals/a-possible-prototype */
          '../../node_modules/core-js/internals/a-possible-prototype.js'
        ); // `Object.setPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.

        /* eslint-disable no-proto */

        module.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function() {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;

                try {
                  setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
                  setter.call(test, []);
                  CORRECT_SETTER = test instanceof Array;
                } catch (error) {
                  /* empty */
                }

                return function setPrototypeOf(O, proto) {
                  anObject(O);
                  aPossiblePrototype(proto);
                  if (CORRECT_SETTER) setter.call(O, proto);
                  else O.__proto__ = proto;
                  return O;
                };
              })()
            : undefined);
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/object-to-string.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/object-to-string.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsObjectToStringJs(module, exports, __webpack_require__) {
        'use strict';

        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */
          '../../node_modules/core-js/internals/to-string-tag-support.js'
        );

        var classof = __webpack_require__(
          /*! ../internals/classof */
          '../../node_modules/core-js/internals/classof.js'
        ); // `Object.prototype.toString` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

        module.exports = TO_STRING_TAG_SUPPORT
          ? {}.toString
          : function toString() {
              return '[object ' + classof(this) + ']';
            };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/own-keys.js':
      /*!*************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/own-keys.js ***!
    \*************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          '../../node_modules/core-js/internals/get-built-in.js'
        );

        var getOwnPropertyNamesModule = __webpack_require__(
          /*! ../internals/object-get-own-property-names */
          '../../node_modules/core-js/internals/object-get-own-property-names.js'
        );

        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */
          '../../node_modules/core-js/internals/object-get-own-property-symbols.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        ); // all object keys, includes non-enumerable and symbols

        module.exports =
          getBuiltIn('Reflect', 'ownKeys') ||
          function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/parse-float.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/parse-float.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsParseFloatJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var trim = __webpack_require__(
          /*! ../internals/string-trim */
          '../../node_modules/core-js/internals/string-trim.js'
        ).trim;

        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */
          '../../node_modules/core-js/internals/whitespaces.js'
        );

        var nativeParseFloat = global.parseFloat;
        var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
        // https://tc39.github.io/ecma262/#sec-parsefloat-string

        module.exports = FORCED
          ? function parseFloat(string) {
              var trimmedString = trim(String(string));
              var result = nativeParseFloat(trimmedString);
              return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
            }
          : nativeParseFloat;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/parse-int.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/parse-int.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsParseIntJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var trim = __webpack_require__(
          /*! ../internals/string-trim */
          '../../node_modules/core-js/internals/string-trim.js'
        ).trim;

        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */
          '../../node_modules/core-js/internals/whitespaces.js'
        );

        var nativeParseInt = global.parseInt;
        var hex = /^[+-]?0[Xx]/;
        var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22; // `parseInt` method
        // https://tc39.github.io/ecma262/#sec-parseint-string-radix

        module.exports = FORCED
          ? function parseInt(string, radix) {
              var S = trim(String(string));
              return nativeParseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
            }
          : nativeParseInt;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/path.js':
      /*!*********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/path.js ***!
    \*********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        module.exports = global;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/perform.js':
      /*!************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/perform.js ***!
    \************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsPerformJs(module, exports) {
        module.exports = function(exec) {
          try {
            return {
              error: false,
              value: exec(),
            };
          } catch (error) {
            return {
              error: true,
              value: error,
            };
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/promise-resolve.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/promise-resolve.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsPromiseResolveJs(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var newPromiseCapability = __webpack_require__(
          /*! ../internals/new-promise-capability */
          '../../node_modules/core-js/internals/new-promise-capability.js'
        );

        module.exports = function(C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/redefine-all.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/redefine-all.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRedefineAllJs(module, exports, __webpack_require__) {
        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        module.exports = function(target, src, options) {
          for (var key in src) {
            redefine(target, key, src[key], options);
          }

          return target;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/redefine.js':
      /*!*************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/redefine.js ***!
    \*************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */
          '../../node_modules/core-js/internals/set-global.js'
        );

        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */
          '../../node_modules/core-js/internals/inspect-source.js'
        );

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split('String');
        (module.exports = function(O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;

          if (typeof value == 'function') {
            if (typeof key == 'string' && !has(value, 'name'))
              createNonEnumerableProperty(value, 'name', key);
            enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
          }

          if (O === global) {
            if (simple) O[key] = value;
            else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }

          if (simple) O[key] = value;
          else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
          return (typeof this == 'function' && getInternalState(this).source) || inspectSource(this);
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/regexp-exec-abstract.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/regexp-exec-abstract.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRegexpExecAbstractJs(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ./classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var regexpExec = __webpack_require__(
          /*! ./regexp-exec */
          '../../node_modules/core-js/internals/regexp-exec.js'
        ); // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec

        module.exports = function(R, S) {
          var exec = R.exec;

          if (typeof exec === 'function') {
            var result = exec.call(R, S);

            if (typeof result !== 'object') {
              throw TypeError('RegExp exec method returned something other than an Object or null');
            }

            return result;
          }

          if (classof(R) !== 'RegExp') {
            throw TypeError('RegExp#exec called on incompatible receiver');
          }

          return regexpExec.call(R, S);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/regexp-exec.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/regexp-exec.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRegexpExecJs(module, exports, __webpack_require__) {
        'use strict';

        var regexpFlags = __webpack_require__(
          /*! ./regexp-flags */
          '../../node_modules/core-js/internals/regexp-flags.js'
        );

        var stickyHelpers = __webpack_require__(
          /*! ./regexp-sticky-helpers */
          '../../node_modules/core-js/internals/regexp-sticky-helpers.js'
        );

        var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.

        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;

        var UPDATES_LAST_INDEX_WRONG = (function() {
          var re1 = /a/;
          var re2 = /b*/g;
          nativeExec.call(re1, 'a');
          nativeExec.call(re2, 'a');
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        })();

        var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = regexpFlags.call(re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;

            if (sticky) {
              flags = flags.replace('y', '');

              if (flags.indexOf('g') === -1) {
                flags += 'g';
              }

              strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

              if (re.lastIndex > 0 && (!re.multiline || (re.multiline && str[re.lastIndex - 1] !== '\n'))) {
                source = '(?: ' + source + ')';
                strCopy = ' ' + strCopy;
                charsAdded++;
              } // ^(? + rx + ) is needed, in combination with some str slicing, to
              // simulate the 'y' flag.

              reCopy = new RegExp('^(?:' + source + ')', flags);
            }

            if (NPCG_INCLUDED) {
              reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
            }

            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
            match = nativeExec.call(sticky ? reCopy : re, strCopy);

            if (sticky) {
              if (match) {
                match.input = match.input.slice(charsAdded);
                match[0] = match[0].slice(charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
              } else re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }

            if (NPCG_INCLUDED && match && match.length > 1) {
              // Fix browsers whose `exec` methods don't consistently return `undefined`
              // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
              nativeReplace.call(match[0], reCopy, function() {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
            }

            return match;
          };
        }

        module.exports = patchedExec;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/regexp-flags.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/regexp-flags.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRegexpFlagsJs(module, exports, __webpack_require__) {
        'use strict';

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        ); // `RegExp.prototype.flags` getter implementation
        // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags

        module.exports = function() {
          var that = anObject(this);
          var result = '';
          if (that.global) result += 'g';
          if (that.ignoreCase) result += 'i';
          if (that.multiline) result += 'm';
          if (that.dotAll) result += 's';
          if (that.unicode) result += 'u';
          if (that.sticky) result += 'y';
          return result;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/regexp-sticky-helpers.js':
      /*!**************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/regexp-sticky-helpers.js ***!
    \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRegexpStickyHelpersJs(module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ./fails */
          '../../node_modules/core-js/internals/fails.js'
        ); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
        // so we use an intermediate function.

        function RE(s, f) {
          return RegExp(s, f);
        }

        exports.UNSUPPORTED_Y = fails(function() {
          // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
          var re = RE('a', 'y');
          re.lastIndex = 2;
          return re.exec('abcd') != null;
        });
        exports.BROKEN_CARET = fails(function() {
          // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
          var re = RE('^r', 'gy');
          re.lastIndex = 2;
          return re.exec('str') != null;
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/require-object-coercible.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/require-object-coercible.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/same-value.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/same-value.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSameValueJs(module, exports) {
        // `SameValue` abstract operation
        // https://tc39.github.io/ecma262/#sec-samevalue
        module.exports =
          Object.is ||
          function is(x, y) {
            // eslint-disable-next-line no-self-compare
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/set-global.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/set-global.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        module.exports = function(key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }

          return value;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/set-species.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/set-species.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSetSpeciesJs(module, exports, __webpack_require__) {
        'use strict';

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          '../../node_modules/core-js/internals/get-built-in.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var SPECIES = wellKnownSymbol('species');

        module.exports = function(CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;

          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function get() {
                return this;
              },
            });
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/set-to-string-tag.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/set-to-string-tag.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSetToStringTagJs(module, exports, __webpack_require__) {
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');

        module.exports = function(it, TAG, STATIC) {
          if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, {
              configurable: true,
              value: TAG,
            });
          }
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/shared-key.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/shared-key.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
        var shared = __webpack_require__(
          /*! ../internals/shared */
          '../../node_modules/core-js/internals/shared.js'
        );

        var uid = __webpack_require__(
          /*! ../internals/uid */
          '../../node_modules/core-js/internals/uid.js'
        );

        var keys = shared('keys');

        module.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/shared-store.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/shared-store.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSharedStoreJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */
          '../../node_modules/core-js/internals/set-global.js'
        );

        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || setGlobal(SHARED, {});
        module.exports = store;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/shared.js':
      /*!***********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/shared.js ***!
    \***********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var store = __webpack_require__(
          /*! ../internals/shared-store */
          '../../node_modules/core-js/internals/shared-store.js'
        );

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: '3.6.0',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/sloppy-array-method.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/sloppy-array-method.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSloppyArrayMethodJs(module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        module.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return (
            !method ||
            !fails(function() {
              // eslint-disable-next-line no-useless-call,no-throw-literal
              method.call(
                null,
                argument ||
                  function() {
                    throw 1;
                  },
                1
              );
            })
          );
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/species-constructor.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/species-constructor.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsSpeciesConstructorJs(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
        // https://tc39.github.io/ecma262/#sec-speciesconstructor

        module.exports = function(O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined
            ? defaultConstructor
            : aFunction(S);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/string-multibyte.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/string-multibyte.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsStringMultibyteJs(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        ); // `String.prototype.{ codePointAt, at }` methods implementation

        var createMethod = function createMethod(CONVERT_TO_STRING) {
          return function($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
            first = S.charCodeAt(position);
            return first < 0xd800 ||
              first > 0xdbff ||
              position + 1 === size ||
              (second = S.charCodeAt(position + 1)) < 0xdc00 ||
              second > 0xdfff
              ? CONVERT_TO_STRING
                ? S.charAt(position)
                : first
              : CONVERT_TO_STRING
              ? S.slice(position, position + 2)
              : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
          };
        };

        module.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
          codeAt: createMethod(false),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: createMethod(true),
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/string-pad.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/string-pad.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsStringPadJs(module, exports, __webpack_require__) {
        // https://github.com/tc39/proposal-string-pad-start-end
        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var repeat = __webpack_require__(
          /*! ../internals/string-repeat */
          '../../node_modules/core-js/internals/string-repeat.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

        var createMethod = function createMethod(IS_END) {
          return function($this, maxLength, fillString) {
            var S = String(requireObjectCoercible($this));
            var stringLength = S.length;
            var fillStr = fillString === undefined ? ' ' : String(fillString);
            var intMaxLength = toLength(maxLength);
            var fillLen, stringFiller;
            if (intMaxLength <= stringLength || fillStr == '') return S;
            fillLen = intMaxLength - stringLength;
            stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
            if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
            return IS_END ? S + stringFiller : stringFiller + S;
          };
        };

        module.exports = {
          // `String.prototype.padStart` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
          start: createMethod(false),
          // `String.prototype.padEnd` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.padend
          end: createMethod(true),
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/string-repeat.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/string-repeat.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsStringRepeatJs(module, exports, __webpack_require__) {
        'use strict';

        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        ); // `String.prototype.repeat` method implementation
        // https://tc39.github.io/ecma262/#sec-string.prototype.repeat

        module.exports =
          ''.repeat ||
          function repeat(count) {
            var str = String(requireObjectCoercible(this));
            var result = '';
            var n = toInteger(count);
            if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

            for (; n > 0; (n >>>= 1) && (str += str)) {
              if (n & 1) result += str;
            }

            return result;
          };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/string-trim.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/string-trim.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsStringTrimJs(module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var whitespaces = __webpack_require__(
          /*! ../internals/whitespaces */
          '../../node_modules/core-js/internals/whitespaces.js'
        );

        var whitespace = '[' + whitespaces + ']';
        var ltrim = RegExp('^' + whitespace + whitespace + '*');
        var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

        var createMethod = function createMethod(TYPE) {
          return function($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
          };
        };

        module.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
          start: createMethod(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
          end: createMethod(2),
          // `String.prototype.trim` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.trim
          trim: createMethod(3),
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/task.js':
      /*!*********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/task.js ***!
    \*********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsTaskJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var bind = __webpack_require__(
          /*! ../internals/bind-context */
          '../../node_modules/core-js/internals/bind-context.js'
        );

        var html = __webpack_require__(
          /*! ../internals/html */
          '../../node_modules/core-js/internals/html.js'
        );

        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */
          '../../node_modules/core-js/internals/document-create-element.js'
        );

        var IS_IOS = __webpack_require__(
          /*! ../internals/is-ios */
          '../../node_modules/core-js/internals/is-ios.js'
        );

        var location = global.location;
        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;

        var run = function run(id) {
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };

        var runner = function runner(id) {
          return function() {
            run(id);
          };
        };

        var listener = function listener(event) {
          run(event.data);
        };

        var post = function post(id) {
          // old engines have not location.origin
          global.postMessage(id + '', location.protocol + '//' + location.host);
        }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:

        if (!set || !clear) {
          set = function setImmediate(fn) {
            var args = [];
            var i = 1;

            while (arguments.length > i) {
              args.push(arguments[i++]);
            }

            queue[++counter] = function() {
              // eslint-disable-next-line no-new-func
              (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
            };

            defer(counter);
            return counter;
          };

          clear = function clearImmediate(id) {
            delete queue[id];
          }; // Node.js 0.8-

          if (classof(process) == 'process') {
            defer = function defer(id) {
              process.nextTick(runner(id));
            }; // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function defer(id) {
              Dispatch.now(runner(id));
            }; // Browsers with MessageChannel, includes WebWorkers
            // except iOS - https://github.com/zloirock/core-js/issues/624
          } else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            global.addEventListener &&
            typeof postMessage == 'function' &&
            !global.importScripts &&
            !fails(post)
          ) {
            defer = post;
            global.addEventListener('message', listener, false); // IE8-
          } else if (ONREADYSTATECHANGE in createElement('script')) {
            defer = function defer(id) {
              html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run(id);
              };
            }; // Rest old browsers
          } else {
            defer = function defer(id) {
              setTimeout(runner(id), 0);
            };
          }
        }

        module.exports = {
          set: set,
          clear: clear,
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/this-number-value.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/this-number-value.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsThisNumberValueJs(module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        ); // `thisNumberValue` abstract operation
        // https://tc39.github.io/ecma262/#sec-thisnumbervalue

        module.exports = function(value) {
          if (typeof value != 'number' && classof(value) != 'Number') {
            throw TypeError('Incorrect invocation');
          }

          return +value;
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-absolute-index.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-absolute-index.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var max = Math.max;
        var min = Math.min; // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

        module.exports = function(index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-indexed-object.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-indexed-object.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          '../../node_modules/core-js/internals/indexed-object.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        module.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-integer.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-integer.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor; // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger

        module.exports = function(argument) {
          return isNaN((argument = +argument)) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-length.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-length.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var min = Math.min; // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength

        module.exports = function(argument) {
          return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-object.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-object.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        ); // `ToObject` abstract operation
        // https://tc39.github.io/ecma262/#sec-toobject

        module.exports = function(argument) {
          return Object(requireObjectCoercible(argument));
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-primitive.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-primitive.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        ); // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string

        module.exports = function(input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (
            PREFERRED_STRING &&
            typeof (fn = input.toString) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (typeof (fn = input.valueOf) == 'function' && !isObject((val = fn.call(input)))) return val;
          if (
            !PREFERRED_STRING &&
            typeof (fn = input.toString) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/to-string-tag-support.js':
      /*!**************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/to-string-tag-support.js ***!
    \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsToStringTagSupportJs(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var test = {};
        test[TO_STRING_TAG] = 'z';
        module.exports = String(test) === '[object z]';
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/uid.js':
      /*!********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/uid.js ***!
    \********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsUidJs(module, exports) {
        var id = 0;
        var postfix = Math.random();

        module.exports = function(key) {
          return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/use-symbol-as-uid.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/use-symbol-as-uid.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsUseSymbolAsUidJs(module, exports, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */
          '../../node_modules/core-js/internals/native-symbol.js'
        );

        module.exports =
          NATIVE_SYMBOL && // eslint-disable-next-line no-undef
          !Symbol.sham && // eslint-disable-next-line no-undef
          typeof Symbol() == 'symbol';
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/user-agent.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/user-agent.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsUserAgentJs(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          '../../node_modules/core-js/internals/get-built-in.js'
        );

        module.exports = getBuiltIn('navigator', 'userAgent') || '';
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/v8-version.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/v8-version.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsV8VersionJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var userAgent = __webpack_require__(
          /*! ../internals/user-agent */
          '../../node_modules/core-js/internals/user-agent.js'
        );

        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;

        if (v8) {
          match = v8.split('.');
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);

          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = match[1];
          }
        }

        module.exports = version && +version;
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/well-known-symbol.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/well-known-symbol.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var shared = __webpack_require__(
          /*! ../internals/shared */
          '../../node_modules/core-js/internals/shared.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var uid = __webpack_require__(
          /*! ../internals/uid */
          '../../node_modules/core-js/internals/uid.js'
        );

        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */
          '../../node_modules/core-js/internals/native-symbol.js'
        );

        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */
          '../../node_modules/core-js/internals/use-symbol-as-uid.js'
        );

        var WellKnownSymbolsStore = shared('wks');
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

        module.exports = function(name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
            else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
          }

          return WellKnownSymbolsStore[name];
        };
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/whitespaces.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/whitespaces.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsWhitespacesJs(module, exports) {
        // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len
        module.exports =
          '\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
        /***/
      },

    /***/
    '../../node_modules/core-js/internals/wrapped-well-known-symbol.js':
      /*!******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
    \******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsInternalsWrappedWellKnownSymbolJs(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        exports.f = wellKnownSymbol;
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.concat.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.concat.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayConcatJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var isArray = __webpack_require__(
          /*! ../internals/is-array */
          '../../node_modules/core-js/internals/is-array.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var createProperty = __webpack_require__(
          /*! ../internals/create-property */
          '../../node_modules/core-js/internals/create-property.js'
        );

        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */
          '../../node_modules/core-js/internals/array-species-create.js'
        );

        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */
          '../../node_modules/core-js/internals/array-method-has-species-support.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var V8_VERSION = __webpack_require__(
          /*! ../internals/v8-version */
          '../../node_modules/core-js/internals/v8-version.js'
        );

        var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
        var MAX_SAFE_INTEGER = 0x1fffffffffffff;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/679

        var IS_CONCAT_SPREADABLE_SUPPORT =
          V8_VERSION >= 51 ||
          !fails(function() {
            var array = [];
            array[IS_CONCAT_SPREADABLE] = false;
            return array.concat()[0] !== array;
          });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

        var isConcatSpreadable = function isConcatSpreadable(O) {
          if (!isObject(O)) return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== undefined ? !!spreadable : isArray(O);
        };

        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.concat
        // with adding support of @@isConcatSpreadable and @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: FORCED,
          },
          {
            concat: function concat(arg) {
              // eslint-disable-line no-unused-vars
              var O = toObject(this);
              var A = arraySpeciesCreate(O, 0);
              var n = 0;
              var i, k, length, len, E;

              for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];

                if (isConcatSpreadable(E)) {
                  len = toLength(E.length);
                  if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

                  for (k = 0; k < len; k++, n++) {
                    if (k in E) createProperty(A, n, E[k]);
                  }
                } else {
                  if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                  createProperty(A, n++, E);
                }
              }

              A.length = n;
              return A;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.copy-within.js':
      /*!***********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.copy-within.js ***!
    \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayCopyWithinJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var copyWithin = __webpack_require__(
          /*! ../internals/array-copy-within */
          '../../node_modules/core-js/internals/array-copy-within.js'
        );

        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */
          '../../node_modules/core-js/internals/add-to-unscopables.js'
        ); // `Array.prototype.copyWithin` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

        $(
          {
            target: 'Array',
            proto: true,
          },
          {
            copyWithin: copyWithin,
          }
        ); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        addToUnscopables('copyWithin');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.every.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.every.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayEveryJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $every = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).every;

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        ); // `Array.prototype.every` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.every

        $(
          {
            target: 'Array',
            proto: true,
            forced: sloppyArrayMethod('every'),
          },
          {
            every: function every(
              callbackfn
              /* , thisArg */
            ) {
              return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.fill.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.fill.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayFillJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fill = __webpack_require__(
          /*! ../internals/array-fill */
          '../../node_modules/core-js/internals/array-fill.js'
        );

        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */
          '../../node_modules/core-js/internals/add-to-unscopables.js'
        ); // `Array.prototype.fill` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.fill

        $(
          {
            target: 'Array',
            proto: true,
          },
          {
            fill: fill,
          }
        ); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        addToUnscopables('fill');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.filter.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.filter.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayFilterJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $filter = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).filter;

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */
          '../../node_modules/core-js/internals/array-method-has-species-support.js'
        );

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

        var USES_TO_LENGTH =
          HAS_SPECIES_SUPPORT &&
          !fails(function() {
            [].filter.call(
              {
                length: -1,
                0: 1,
              },
              function(it) {
                throw it;
              }
            );
          }); // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        // with adding support of @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH,
          },
          {
            filter: function filter(
              callbackfn
              /* , thisArg */
            ) {
              return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.find-index.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.find-index.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayFindIndexJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $findIndex = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).findIndex;

        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */
          '../../node_modules/core-js/internals/add-to-unscopables.js'
        );

        var FIND_INDEX = 'findIndex';
        var SKIPS_HOLES = true; // Shouldn't skip holes

        if (FIND_INDEX in [])
          Array(1)[FIND_INDEX](function() {
            SKIPS_HOLES = false;
          }); // `Array.prototype.findIndex` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.findindex

        $(
          {
            target: 'Array',
            proto: true,
            forced: SKIPS_HOLES,
          },
          {
            findIndex: function findIndex(
              callbackfn
              /* , that = undefined */
            ) {
              return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        ); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        addToUnscopables(FIND_INDEX);
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.find.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.find.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayFindJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $find = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).find;

        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */
          '../../node_modules/core-js/internals/add-to-unscopables.js'
        );

        var FIND = 'find';
        var SKIPS_HOLES = true; // Shouldn't skip holes

        if (FIND in [])
          Array(1)[FIND](function() {
            SKIPS_HOLES = false;
          }); // `Array.prototype.find` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.find

        $(
          {
            target: 'Array',
            proto: true,
            forced: SKIPS_HOLES,
          },
          {
            find: function find(
              callbackfn
              /* , that = undefined */
            ) {
              return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        ); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        addToUnscopables(FIND);
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.for-each.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.for-each.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayForEachJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var forEach = __webpack_require__(
          /*! ../internals/array-for-each */
          '../../node_modules/core-js/internals/array-for-each.js'
        ); // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

        $(
          {
            target: 'Array',
            proto: true,
            forced: [].forEach != forEach,
          },
          {
            forEach: forEach,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.from.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.from.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayFromJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var from = __webpack_require__(
          /*! ../internals/array-from */
          '../../node_modules/core-js/internals/array-from.js'
        );

        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */
          '../../node_modules/core-js/internals/check-correctness-of-iteration.js'
        );

        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
          Array.from(iterable);
        }); // `Array.from` method
        // https://tc39.github.io/ecma262/#sec-array.from

        $(
          {
            target: 'Array',
            stat: true,
            forced: INCORRECT_ITERATION,
          },
          {
            from: from,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.index-of.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.index-of.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayIndexOfJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $indexOf = __webpack_require__(
          /*! ../internals/array-includes */
          '../../node_modules/core-js/internals/array-includes.js'
        ).indexOf;

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        );

        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
        var SLOPPY_METHOD = sloppyArrayMethod('indexOf'); // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

        $(
          {
            target: 'Array',
            proto: true,
            forced: NEGATIVE_ZERO || SLOPPY_METHOD,
          },
          {
            indexOf: function indexOf(
              searchElement
              /* , fromIndex = 0 */
            ) {
              return NEGATIVE_ZERO // convert -0 to +0
                ? nativeIndexOf.apply(this, arguments) || 0
                : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.is-array.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.is-array.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayIsArrayJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isArray = __webpack_require__(
          /*! ../internals/is-array */
          '../../node_modules/core-js/internals/is-array.js'
        ); // `Array.isArray` method
        // https://tc39.github.io/ecma262/#sec-array.isarray

        $(
          {
            target: 'Array',
            stat: true,
          },
          {
            isArray: isArray,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.iterator.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.iterator.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayIteratorJs(module, exports, __webpack_require__) {
        'use strict';

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var addToUnscopables = __webpack_require__(
          /*! ../internals/add-to-unscopables */
          '../../node_modules/core-js/internals/add-to-unscopables.js'
        );

        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          '../../node_modules/core-js/internals/iterators.js'
        );

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */
          '../../node_modules/core-js/internals/define-iterator.js'
        );

        var ARRAY_ITERATOR = 'Array Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.entries
        // `Array.prototype.keys` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.keys
        // `Array.prototype.values` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.values
        // `Array.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
        // `CreateArrayIterator` internal method
        // https://tc39.github.io/ecma262/#sec-createarrayiterator

        module.exports = defineIterator(
          Array,
          'Array',
          function(iterated, kind) {
            setInternalState(this, {
              type: ARRAY_ITERATOR,
              target: toIndexedObject(iterated),
              // target
              index: 0,
              // next index
              kind: kind, // kind
            }); // `%ArrayIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
          },
          function() {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;

            if (!target || index >= target.length) {
              state.target = undefined;
              return {
                value: undefined,
                done: true,
              };
            }

            if (kind == 'keys')
              return {
                value: index,
                done: false,
              };
            if (kind == 'values')
              return {
                value: target[index],
                done: false,
              };
            return {
              value: [index, target[index]],
              done: false,
            };
          },
          'values'
        ); // argumentsList[@@iterator] is %ArrayProto_values%
        // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
        // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

        Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.join.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.join.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayJoinJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          '../../node_modules/core-js/internals/indexed-object.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        );

        var nativeJoin = [].join;
        var ES3_STRINGS = IndexedObject != Object;
        var SLOPPY_METHOD = sloppyArrayMethod('join', ','); // `Array.prototype.join` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.join

        $(
          {
            target: 'Array',
            proto: true,
            forced: ES3_STRINGS || SLOPPY_METHOD,
          },
          {
            join: function join(separator) {
              return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.last-index-of.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.last-index-of.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayLastIndexOfJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var lastIndexOf = __webpack_require__(
          /*! ../internals/array-last-index-of */
          '../../node_modules/core-js/internals/array-last-index-of.js'
        ); // `Array.prototype.lastIndexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

        $(
          {
            target: 'Array',
            proto: true,
            forced: lastIndexOf !== [].lastIndexOf,
          },
          {
            lastIndexOf: lastIndexOf,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.map.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.map.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayMapJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $map = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).map;

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */
          '../../node_modules/core-js/internals/array-method-has-species-support.js'
        );

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

        var USES_TO_LENGTH =
          HAS_SPECIES_SUPPORT &&
          !fails(function() {
            [].map.call(
              {
                length: -1,
                0: 1,
              },
              function(it) {
                throw it;
              }
            );
          }); // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        // with adding support of @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH,
          },
          {
            map: function map(
              callbackfn
              /* , thisArg */
            ) {
              return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.of.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.of.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayOfJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var createProperty = __webpack_require__(
          /*! ../internals/create-property */
          '../../node_modules/core-js/internals/create-property.js'
        );

        var ISNT_GENERIC = fails(function() {
          function F() {
            /* empty */
          }

          return !(Array.of.call(F) instanceof F);
        }); // `Array.of` method
        // https://tc39.github.io/ecma262/#sec-array.of
        // WebKit Array.of isn't generic

        $(
          {
            target: 'Array',
            stat: true,
            forced: ISNT_GENERIC,
          },
          {
            of: function of() /* ...args */
            {
              var index = 0;
              var argumentsLength = arguments.length;
              var result = new (typeof this == 'function' ? this : Array)(argumentsLength);

              while (argumentsLength > index) {
                createProperty(result, index, arguments[index++]);
              }

              result.length = argumentsLength;
              return result;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.reduce-right.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.reduce-right.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayReduceRightJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $reduceRight = __webpack_require__(
          /*! ../internals/array-reduce */
          '../../node_modules/core-js/internals/array-reduce.js'
        ).right;

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        ); // `Array.prototype.reduceRight` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright

        $(
          {
            target: 'Array',
            proto: true,
            forced: sloppyArrayMethod('reduceRight'),
          },
          {
            reduceRight: function reduceRight(
              callbackfn
              /* , initialValue */
            ) {
              return $reduceRight(
                this,
                callbackfn,
                arguments.length,
                arguments.length > 1 ? arguments[1] : undefined
              );
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.reduce.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.reduce.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArrayReduceJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $reduce = __webpack_require__(
          /*! ../internals/array-reduce */
          '../../node_modules/core-js/internals/array-reduce.js'
        ).left;

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        ); // `Array.prototype.reduce` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.reduce

        $(
          {
            target: 'Array',
            proto: true,
            forced: sloppyArrayMethod('reduce'),
          },
          {
            reduce: function reduce(
              callbackfn
              /* , initialValue */
            ) {
              return $reduce(
                this,
                callbackfn,
                arguments.length,
                arguments.length > 1 ? arguments[1] : undefined
              );
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.slice.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.slice.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArraySliceJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var isArray = __webpack_require__(
          /*! ../internals/is-array */
          '../../node_modules/core-js/internals/is-array.js'
        );

        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          '../../node_modules/core-js/internals/to-absolute-index.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var createProperty = __webpack_require__(
          /*! ../internals/create-property */
          '../../node_modules/core-js/internals/create-property.js'
        );

        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */
          '../../node_modules/core-js/internals/array-method-has-species-support.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var SPECIES = wellKnownSymbol('species');
        var nativeSlice = [].slice;
        var max = Math.max; // `Array.prototype.slice` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.slice
        // fallback for not array-like ES3 strings and DOM objects

        $(
          {
            target: 'Array',
            proto: true,
            forced: !arrayMethodHasSpeciesSupport('slice'),
          },
          {
            slice: function slice(start, end) {
              var O = toIndexedObject(this);
              var length = toLength(O.length);
              var k = toAbsoluteIndex(start, length);
              var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

              var Constructor, result, n;

              if (isArray(O)) {
                Constructor = O.constructor; // cross-realm fallback

                if (
                  typeof Constructor == 'function' &&
                  (Constructor === Array || isArray(Constructor.prototype))
                ) {
                  Constructor = undefined;
                } else if (isObject(Constructor)) {
                  Constructor = Constructor[SPECIES];
                  if (Constructor === null) Constructor = undefined;
                }

                if (Constructor === Array || Constructor === undefined) {
                  return nativeSlice.call(O, k, fin);
                }
              }

              result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

              for (n = 0; k < fin; k++, n++) {
                if (k in O) createProperty(result, n, O[k]);
              }

              result.length = n;
              return result;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.some.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.some.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArraySomeJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $some = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).some;

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        ); // `Array.prototype.some` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.some

        $(
          {
            target: 'Array',
            proto: true,
            forced: sloppyArrayMethod('some'),
          },
          {
            some: function some(
              callbackfn
              /* , thisArg */
            ) {
              return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.sort.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.sort.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArraySortJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var sloppyArrayMethod = __webpack_require__(
          /*! ../internals/sloppy-array-method */
          '../../node_modules/core-js/internals/sloppy-array-method.js'
        );

        var test = [];
        var nativeSort = test.sort; // IE8-

        var FAILS_ON_UNDEFINED = fails(function() {
          test.sort(undefined);
        }); // V8 bug

        var FAILS_ON_NULL = fails(function() {
          test.sort(null);
        }); // Old WebKit

        var SLOPPY_METHOD = sloppyArrayMethod('sort');
        var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD; // `Array.prototype.sort` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.sort

        $(
          {
            target: 'Array',
            proto: true,
            forced: FORCED,
          },
          {
            sort: function sort(comparefn) {
              return comparefn === undefined
                ? nativeSort.call(toObject(this))
                : nativeSort.call(toObject(this), aFunction(comparefn));
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.array.splice.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.array.splice.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsArraySpliceJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          '../../node_modules/core-js/internals/to-absolute-index.js'
        );

        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */
          '../../node_modules/core-js/internals/array-species-create.js'
        );

        var createProperty = __webpack_require__(
          /*! ../internals/create-property */
          '../../node_modules/core-js/internals/create-property.js'
        );

        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */
          '../../node_modules/core-js/internals/array-method-has-species-support.js'
        );

        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 0x1fffffffffffff;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.splice
        // with adding support of @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: !arrayMethodHasSpeciesSupport('splice'),
          },
          {
            splice: function splice(
              start,
              deleteCount
              /* , ...items */
            ) {
              var O = toObject(this);
              var len = toLength(O.length);
              var actualStart = toAbsoluteIndex(start, len);
              var argumentsLength = arguments.length;
              var insertCount, actualDeleteCount, A, k, from, to;

              if (argumentsLength === 0) {
                insertCount = actualDeleteCount = 0;
              } else if (argumentsLength === 1) {
                insertCount = 0;
                actualDeleteCount = len - actualStart;
              } else {
                insertCount = argumentsLength - 2;
                actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
              }

              if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
                throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
              }

              A = arraySpeciesCreate(O, actualDeleteCount);

              for (k = 0; k < actualDeleteCount; k++) {
                from = actualStart + k;
                if (from in O) createProperty(A, k, O[from]);
              }

              A.length = actualDeleteCount;

              if (insertCount < actualDeleteCount) {
                for (k = actualStart; k < len - actualDeleteCount; k++) {
                  from = k + actualDeleteCount;
                  to = k + insertCount;
                  if (from in O) O[to] = O[from];
                  else delete O[to];
                }

                for (k = len; k > len - actualDeleteCount + insertCount; k--) {
                  delete O[k - 1];
                }
              } else if (insertCount > actualDeleteCount) {
                for (k = len - actualDeleteCount; k > actualStart; k--) {
                  from = k + actualDeleteCount - 1;
                  to = k + insertCount - 1;
                  if (from in O) O[to] = O[from];
                  else delete O[to];
                }
              }

              for (k = 0; k < insertCount; k++) {
                O[k + actualStart] = arguments[k + 2];
              }

              O.length = len - actualDeleteCount + insertCount;
              return A;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.date.now.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.date.now.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsDateNowJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        ); // `Date.now` method
        // https://tc39.github.io/ecma262/#sec-date.now

        $(
          {
            target: 'Date',
            stat: true,
          },
          {
            now: function now() {
              return new Date().getTime();
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.date.to-iso-string.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.date.to-iso-string.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsDateToIsoStringJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var toISOString = __webpack_require__(
          /*! ../internals/date-to-iso-string */
          '../../node_modules/core-js/internals/date-to-iso-string.js'
        ); // `Date.prototype.toISOString` method
        // https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
        // PhantomJS / old WebKit has a broken implementations

        $(
          {
            target: 'Date',
            proto: true,
            forced: Date.prototype.toISOString !== toISOString,
          },
          {
            toISOString: toISOString,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.date.to-json.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.date.to-json.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsDateToJsonJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        var FORCED = fails(function() {
          return (
            new Date(NaN).toJSON() !== null ||
            Date.prototype.toJSON.call({
              toISOString: function toISOString() {
                return 1;
              },
            }) !== 1
          );
        }); // `Date.prototype.toJSON` method
        // https://tc39.github.io/ecma262/#sec-date.prototype.tojson

        $(
          {
            target: 'Date',
            proto: true,
            forced: FORCED,
          },
          {
            // eslint-disable-next-line no-unused-vars
            toJSON: function toJSON(key) {
              var O = toObject(this);
              var pv = toPrimitive(O);
              return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.date.to-primitive.js':
      /*!***********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.date.to-primitive.js ***!
    \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsDateToPrimitiveJs(module, exports, __webpack_require__) {
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var dateToPrimitive = __webpack_require__(
          /*! ../internals/date-to-primitive */
          '../../node_modules/core-js/internals/date-to-primitive.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
        var DatePrototype = Date.prototype; // `Date.prototype[@@toPrimitive]` method
        // https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive

        if (!(TO_PRIMITIVE in DatePrototype)) {
          createNonEnumerableProperty(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.date.to-string.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.date.to-string.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsDateToStringJs(module, exports, __webpack_require__) {
        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var DatePrototype = Date.prototype;
        var INVALID_DATE = 'Invalid Date';
        var TO_STRING = 'toString';
        var nativeDateToString = DatePrototype[TO_STRING];
        var getTime = DatePrototype.getTime; // `Date.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-date.prototype.tostring

        if (new Date(NaN) + '' != INVALID_DATE) {
          redefine(DatePrototype, TO_STRING, function toString() {
            var value = getTime.call(this); // eslint-disable-next-line no-self-compare

            return value === value ? nativeDateToString.call(this) : INVALID_DATE;
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.function.bind.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.function.bind.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsFunctionBindJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var bind = __webpack_require__(
          /*! ../internals/function-bind */
          '../../node_modules/core-js/internals/function-bind.js'
        ); // `Function.prototype.bind` method
        // https://tc39.github.io/ecma262/#sec-function.prototype.bind

        $(
          {
            target: 'Function',
            proto: true,
          },
          {
            bind: bind,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.function.has-instance.js':
      /*!***************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.function.has-instance.js ***!
    \***************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsFunctionHasInstanceJs(module, exports, __webpack_require__) {
        'use strict';

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */
          '../../node_modules/core-js/internals/object-get-prototype-of.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var HAS_INSTANCE = wellKnownSymbol('hasInstance');
        var FunctionPrototype = Function.prototype; // `Function.prototype[@@hasInstance]` method
        // https://tc39.github.io/ecma262/#sec-function.prototype-@@hasinstance

        if (!(HAS_INSTANCE in FunctionPrototype)) {
          definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, {
            value: function value(O) {
              if (typeof this != 'function' || !isObject(O)) return false;
              if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

              while ((O = getPrototypeOf(O))) {
                if (this.prototype === O) return true;
              }

              return false;
            },
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.function.name.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.function.name.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsFunctionNameJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name'; // Function instances `.name` property
        // https://tc39.github.io/ecma262/#sec-function-instances-name

        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function get() {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return '';
              }
            },
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.json.to-string-tag.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.json.to-string-tag.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsJsonToStringTagJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        ); // JSON[@@toStringTag] property
        // https://tc39.github.io/ecma262/#sec-json-@@tostringtag

        setToStringTag(global.JSON, 'JSON', true);
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.map.js':
      /*!*********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.map.js ***!
    \*********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMapJs(module, exports, __webpack_require__) {
        'use strict';

        var collection = __webpack_require__(
          /*! ../internals/collection */
          '../../node_modules/core-js/internals/collection.js'
        );

        var collectionStrong = __webpack_require__(
          /*! ../internals/collection-strong */
          '../../node_modules/core-js/internals/collection-strong.js'
        ); // `Map` constructor
        // https://tc39.github.io/ecma262/#sec-map-objects

        module.exports = collection(
          'Map',
          function(init) {
            return function Map() {
              return init(this, arguments.length ? arguments[0] : undefined);
            };
          },
          collectionStrong
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.acosh.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.acosh.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathAcoshJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var log1p = __webpack_require__(
          /*! ../internals/math-log1p */
          '../../node_modules/core-js/internals/math-log1p.js'
        );

        var nativeAcosh = Math.acosh;
        var log = Math.log;
        var sqrt = Math.sqrt;
        var LN2 = Math.LN2;
        var FORCED =
          !nativeAcosh || // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
          Math.floor(nativeAcosh(Number.MAX_VALUE)) != 710 || // Tor Browser bug: Math.acosh(Infinity) -> NaN
          nativeAcosh(Infinity) != Infinity; // `Math.acosh` method
        // https://tc39.github.io/ecma262/#sec-math.acosh

        $(
          {
            target: 'Math',
            stat: true,
            forced: FORCED,
          },
          {
            acosh: function acosh(x) {
              return (x = +x) < 1
                ? NaN
                : x > 94906265.62425156
                ? log(x) + LN2
                : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.asinh.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.asinh.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathAsinhJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var nativeAsinh = Math.asinh;
        var log = Math.log;
        var sqrt = Math.sqrt;

        function asinh(x) {
          return !isFinite((x = +x)) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
        } // `Math.asinh` method
        // https://tc39.github.io/ecma262/#sec-math.asinh
        // Tor Browser bug: Math.asinh(0) -> -0

        $(
          {
            target: 'Math',
            stat: true,
            forced: !(nativeAsinh && 1 / nativeAsinh(0) > 0),
          },
          {
            asinh: asinh,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.atanh.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.atanh.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathAtanhJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var nativeAtanh = Math.atanh;
        var log = Math.log; // `Math.atanh` method
        // https://tc39.github.io/ecma262/#sec-math.atanh
        // Tor Browser bug: Math.atanh(-0) -> 0

        $(
          {
            target: 'Math',
            stat: true,
            forced: !(nativeAtanh && 1 / nativeAtanh(-0) < 0),
          },
          {
            atanh: function atanh(x) {
              return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.cbrt.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.cbrt.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathCbrtJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var sign = __webpack_require__(
          /*! ../internals/math-sign */
          '../../node_modules/core-js/internals/math-sign.js'
        );

        var abs = Math.abs;
        var pow = Math.pow; // `Math.cbrt` method
        // https://tc39.github.io/ecma262/#sec-math.cbrt

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            cbrt: function cbrt(x) {
              return sign((x = +x)) * pow(abs(x), 1 / 3);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.clz32.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.clz32.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathClz32Js(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var floor = Math.floor;
        var log = Math.log;
        var LOG2E = Math.LOG2E; // `Math.clz32` method
        // https://tc39.github.io/ecma262/#sec-math.clz32

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            clz32: function clz32(x) {
              return (x >>>= 0) ? 31 - floor(log(x + 0.5) * LOG2E) : 32;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.cosh.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.cosh.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathCoshJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var expm1 = __webpack_require__(
          /*! ../internals/math-expm1 */
          '../../node_modules/core-js/internals/math-expm1.js'
        );

        var nativeCosh = Math.cosh;
        var abs = Math.abs;
        var E = Math.E; // `Math.cosh` method
        // https://tc39.github.io/ecma262/#sec-math.cosh

        $(
          {
            target: 'Math',
            stat: true,
            forced: !nativeCosh || nativeCosh(710) === Infinity,
          },
          {
            cosh: function cosh(x) {
              var t = expm1(abs(x) - 1) + 1;
              return (t + 1 / (t * E * E)) * (E / 2);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.expm1.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.expm1.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathExpm1Js(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var expm1 = __webpack_require__(
          /*! ../internals/math-expm1 */
          '../../node_modules/core-js/internals/math-expm1.js'
        ); // `Math.expm1` method
        // https://tc39.github.io/ecma262/#sec-math.expm1

        $(
          {
            target: 'Math',
            stat: true,
            forced: expm1 != Math.expm1,
          },
          {
            expm1: expm1,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.fround.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.fround.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathFroundJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fround = __webpack_require__(
          /*! ../internals/math-fround */
          '../../node_modules/core-js/internals/math-fround.js'
        ); // `Math.fround` method
        // https://tc39.github.io/ecma262/#sec-math.fround

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            fround: fround,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.hypot.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.hypot.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathHypotJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $hypot = Math.hypot;
        var abs = Math.abs;
        var sqrt = Math.sqrt; // Chrome 77 bug
        // https://bugs.chromium.org/p/v8/issues/detail?id=9546

        var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
        // https://tc39.github.io/ecma262/#sec-math.hypot

        $(
          {
            target: 'Math',
            stat: true,
            forced: BUGGY,
          },
          {
            hypot: function hypot(value1, value2) {
              // eslint-disable-line no-unused-vars
              var sum = 0;
              var i = 0;
              var aLen = arguments.length;
              var larg = 0;
              var arg, div;

              while (i < aLen) {
                arg = abs(arguments[i++]);

                if (larg < arg) {
                  div = larg / arg;
                  sum = sum * div * div + 1;
                  larg = arg;
                } else if (arg > 0) {
                  div = arg / larg;
                  sum += div * div;
                } else sum += arg;
              }

              return larg === Infinity ? Infinity : larg * sqrt(sum);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.imul.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.imul.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathImulJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var nativeImul = Math.imul;
        var FORCED = fails(function() {
          return nativeImul(0xffffffff, 5) != -5 || nativeImul.length != 2;
        }); // `Math.imul` method
        // https://tc39.github.io/ecma262/#sec-math.imul
        // some WebKit versions fails with big numbers, some has wrong arity

        $(
          {
            target: 'Math',
            stat: true,
            forced: FORCED,
          },
          {
            imul: function imul(x, y) {
              var UINT16 = 0xffff;
              var xn = +x;
              var yn = +y;
              var xl = UINT16 & xn;
              var yl = UINT16 & yn;
              return (
                0 | (xl * yl + ((((UINT16 & (xn >>> 16)) * yl + xl * (UINT16 & (yn >>> 16))) << 16) >>> 0))
              );
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.log10.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.log10.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathLog10Js(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var log = Math.log;
        var LOG10E = Math.LOG10E; // `Math.log10` method
        // https://tc39.github.io/ecma262/#sec-math.log10

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            log10: function log10(x) {
              return log(x) * LOG10E;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.log1p.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.log1p.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathLog1pJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var log1p = __webpack_require__(
          /*! ../internals/math-log1p */
          '../../node_modules/core-js/internals/math-log1p.js'
        ); // `Math.log1p` method
        // https://tc39.github.io/ecma262/#sec-math.log1p

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            log1p: log1p,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.log2.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.log2.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathLog2Js(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var log = Math.log;
        var LN2 = Math.LN2; // `Math.log2` method
        // https://tc39.github.io/ecma262/#sec-math.log2

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            log2: function log2(x) {
              return log(x) / LN2;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.sign.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.sign.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathSignJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var sign = __webpack_require__(
          /*! ../internals/math-sign */
          '../../node_modules/core-js/internals/math-sign.js'
        ); // `Math.sign` method
        // https://tc39.github.io/ecma262/#sec-math.sign

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            sign: sign,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.sinh.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.sinh.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathSinhJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var expm1 = __webpack_require__(
          /*! ../internals/math-expm1 */
          '../../node_modules/core-js/internals/math-expm1.js'
        );

        var abs = Math.abs;
        var exp = Math.exp;
        var E = Math.E;
        var FORCED = fails(function() {
          return Math.sinh(-2e-17) != -2e-17;
        }); // `Math.sinh` method
        // https://tc39.github.io/ecma262/#sec-math.sinh
        // V8 near Chromium 38 has a problem with very small numbers

        $(
          {
            target: 'Math',
            stat: true,
            forced: FORCED,
          },
          {
            sinh: function sinh(x) {
              return abs((x = +x)) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.tanh.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.tanh.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathTanhJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var expm1 = __webpack_require__(
          /*! ../internals/math-expm1 */
          '../../node_modules/core-js/internals/math-expm1.js'
        );

        var exp = Math.exp; // `Math.tanh` method
        // https://tc39.github.io/ecma262/#sec-math.tanh

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            tanh: function tanh(x) {
              var a = expm1((x = +x));
              var b = expm1(-x);
              return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.to-string-tag.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.to-string-tag.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathToStringTagJs(module, exports, __webpack_require__) {
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        ); // Math[@@toStringTag] property
        // https://tc39.github.io/ecma262/#sec-math-@@tostringtag

        setToStringTag(Math, 'Math', true);
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.math.trunc.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.math.trunc.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsMathTruncJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var ceil = Math.ceil;
        var floor = Math.floor; // `Math.trunc` method
        // https://tc39.github.io/ecma262/#sec-math.trunc

        $(
          {
            target: 'Math',
            stat: true,
          },
          {
            trunc: function trunc(it) {
              return (it > 0 ? floor : ceil)(it);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.constructor.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.constructor.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberConstructorJs(module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          '../../node_modules/core-js/internals/is-forced.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var inheritIfRequired = __webpack_require__(
          /*! ../internals/inherit-if-required */
          '../../node_modules/core-js/internals/inherit-if-required.js'
        );

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var create = __webpack_require__(
          /*! ../internals/object-create */
          '../../node_modules/core-js/internals/object-create.js'
        );

        var getOwnPropertyNames = __webpack_require__(
          /*! ../internals/object-get-own-property-names */
          '../../node_modules/core-js/internals/object-get-own-property-names.js'
        ).f;

        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var trim = __webpack_require__(
          /*! ../internals/string-trim */
          '../../node_modules/core-js/internals/string-trim.js'
        ).trim;

        var NUMBER = 'Number';
        var NativeNumber = global[NUMBER];
        var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

        var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
        // https://tc39.github.io/ecma262/#sec-tonumber

        var toNumber = function toNumber(argument) {
          var it = toPrimitive(argument, false);
          var first, third, radix, maxCode, digits, length, index, code;

          if (typeof it == 'string' && it.length > 2) {
            it = trim(it);
            first = it.charCodeAt(0);

            if (first === 43 || first === 45) {
              third = it.charCodeAt(2);
              if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
            } else if (first === 48) {
              switch (it.charCodeAt(1)) {
                case 66:
                case 98:
                  radix = 2;
                  maxCode = 49;
                  break;
                // fast equal of /^0b[01]+$/i

                case 79:
                case 111:
                  radix = 8;
                  maxCode = 55;
                  break;
                // fast equal of /^0o[0-7]+$/i

                default:
                  return +it;
              }

              digits = it.slice(2);
              length = digits.length;

              for (index = 0; index < length; index++) {
                code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols

                if (code < 48 || code > maxCode) return NaN;
              }

              return parseInt(digits, radix);
            }
          }

          return +it;
        }; // `Number` constructor
        // https://tc39.github.io/ecma262/#sec-number-constructor

        if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
          var NumberWrapper = function Number(value) {
            var it = arguments.length < 1 ? 0 : value;
            var dummy = this;
            return dummy instanceof NumberWrapper && // check on 1..constructor(foo) case
              (BROKEN_CLASSOF
                ? fails(function() {
                    NumberPrototype.valueOf.call(dummy);
                  })
                : classof(dummy) != NUMBER)
              ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper)
              : toNumber(it);
          };

          for (
            var keys = DESCRIPTORS
                ? getOwnPropertyNames(NativeNumber)
                : // ES3:
                  (
                    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
                    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                  ).split(','),
              j = 0,
              key;
            keys.length > j;
            j++
          ) {
            if (has(NativeNumber, (key = keys[j])) && !has(NumberWrapper, key)) {
              defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
            }
          }

          NumberWrapper.prototype = NumberPrototype;
          NumberPrototype.constructor = NumberWrapper;
          redefine(global, NUMBER, NumberWrapper);
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.epsilon.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.epsilon.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberEpsilonJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        ); // `Number.EPSILON` constant
        // https://tc39.github.io/ecma262/#sec-number.epsilon

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            EPSILON: Math.pow(2, -52),
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.is-finite.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.is-finite.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberIsFiniteJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var numberIsFinite = __webpack_require__(
          /*! ../internals/number-is-finite */
          '../../node_modules/core-js/internals/number-is-finite.js'
        ); // `Number.isFinite` method
        // https://tc39.github.io/ecma262/#sec-number.isfinite

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            isFinite: numberIsFinite,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.is-integer.js':
      /*!***********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.is-integer.js ***!
    \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberIsIntegerJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isInteger = __webpack_require__(
          /*! ../internals/is-integer */
          '../../node_modules/core-js/internals/is-integer.js'
        ); // `Number.isInteger` method
        // https://tc39.github.io/ecma262/#sec-number.isinteger

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            isInteger: isInteger,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.is-nan.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.is-nan.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberIsNanJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        ); // `Number.isNaN` method
        // https://tc39.github.io/ecma262/#sec-number.isnan

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            isNaN: function isNaN(number) {
              // eslint-disable-next-line no-self-compare
              return number != number;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.is-safe-integer.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.is-safe-integer.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberIsSafeIntegerJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isInteger = __webpack_require__(
          /*! ../internals/is-integer */
          '../../node_modules/core-js/internals/is-integer.js'
        );

        var abs = Math.abs; // `Number.isSafeInteger` method
        // https://tc39.github.io/ecma262/#sec-number.issafeinteger

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            isSafeInteger: function isSafeInteger(number) {
              return isInteger(number) && abs(number) <= 0x1fffffffffffff;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.max-safe-integer.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.max-safe-integer.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberMaxSafeIntegerJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        ); // `Number.MAX_SAFE_INTEGER` constant
        // https://tc39.github.io/ecma262/#sec-number.max_safe_integer

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            MAX_SAFE_INTEGER: 0x1fffffffffffff,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.min-safe-integer.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.min-safe-integer.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberMinSafeIntegerJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        ); // `Number.MIN_SAFE_INTEGER` constant
        // https://tc39.github.io/ecma262/#sec-number.min_safe_integer

        $(
          {
            target: 'Number',
            stat: true,
          },
          {
            MIN_SAFE_INTEGER: -0x1fffffffffffff,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.parse-float.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.parse-float.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberParseFloatJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var parseFloat = __webpack_require__(
          /*! ../internals/parse-float */
          '../../node_modules/core-js/internals/parse-float.js'
        ); // `Number.parseFloat` method
        // https://tc39.github.io/ecma262/#sec-number.parseFloat

        $(
          {
            target: 'Number',
            stat: true,
            forced: Number.parseFloat != parseFloat,
          },
          {
            parseFloat: parseFloat,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.parse-int.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.parse-int.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberParseIntJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var parseInt = __webpack_require__(
          /*! ../internals/parse-int */
          '../../node_modules/core-js/internals/parse-int.js'
        ); // `Number.parseInt` method
        // https://tc39.github.io/ecma262/#sec-number.parseint

        $(
          {
            target: 'Number',
            stat: true,
            forced: Number.parseInt != parseInt,
          },
          {
            parseInt: parseInt,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.to-fixed.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.to-fixed.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberToFixedJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var thisNumberValue = __webpack_require__(
          /*! ../internals/this-number-value */
          '../../node_modules/core-js/internals/this-number-value.js'
        );

        var repeat = __webpack_require__(
          /*! ../internals/string-repeat */
          '../../node_modules/core-js/internals/string-repeat.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var nativeToFixed = (1.0).toFixed;
        var floor = Math.floor;

        var pow = function pow(x, n, acc) {
          return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
        };

        var log = function log(x) {
          var n = 0;
          var x2 = x;

          while (x2 >= 4096) {
            n += 12;
            x2 /= 4096;
          }

          while (x2 >= 2) {
            n += 1;
            x2 /= 2;
          }

          return n;
        };

        var FORCED =
          (nativeToFixed &&
            ((0.00008).toFixed(3) !== '0.000' ||
              (0.9).toFixed(0) !== '1' ||
              (1.255).toFixed(2) !== '1.25' ||
              (1000000000000000128.0).toFixed(0) !== '1000000000000000128')) ||
          !fails(function() {
            // V8 ~ Android 4.3-
            nativeToFixed.call({});
          }); // `Number.prototype.toFixed` method
        // https://tc39.github.io/ecma262/#sec-number.prototype.tofixed

        $(
          {
            target: 'Number',
            proto: true,
            forced: FORCED,
          },
          {
            // eslint-disable-next-line max-statements
            toFixed: function toFixed(fractionDigits) {
              var number = thisNumberValue(this);
              var fractDigits = toInteger(fractionDigits);
              var data = [0, 0, 0, 0, 0, 0];
              var sign = '';
              var result = '0';
              var e, z, j, k;

              var multiply = function multiply(n, c) {
                var index = -1;
                var c2 = c;

                while (++index < 6) {
                  c2 += n * data[index];
                  data[index] = c2 % 1e7;
                  c2 = floor(c2 / 1e7);
                }
              };

              var divide = function divide(n) {
                var index = 6;
                var c = 0;

                while (--index >= 0) {
                  c += data[index];
                  data[index] = floor(c / n);
                  c = (c % n) * 1e7;
                }
              };

              var dataToString = function dataToString() {
                var index = 6;
                var s = '';

                while (--index >= 0) {
                  if (s !== '' || index === 0 || data[index] !== 0) {
                    var t = String(data[index]);
                    s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
                  }
                }

                return s;
              };

              if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare

              if (number != number) return 'NaN';
              if (number <= -1e21 || number >= 1e21) return String(number);

              if (number < 0) {
                sign = '-';
                number = -number;
              }

              if (number > 1e-21) {
                e = log(number * pow(2, 69, 1)) - 69;
                z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
                z *= 0x10000000000000;
                e = 52 - e;

                if (e > 0) {
                  multiply(0, z);
                  j = fractDigits;

                  while (j >= 7) {
                    multiply(1e7, 0);
                    j -= 7;
                  }

                  multiply(pow(10, j, 1), 0);
                  j = e - 1;

                  while (j >= 23) {
                    divide(1 << 23);
                    j -= 23;
                  }

                  divide(1 << j);
                  multiply(1, 1);
                  divide(2);
                  result = dataToString();
                } else {
                  multiply(0, z);
                  multiply(1 << -e, 0);
                  result = dataToString() + repeat.call('0', fractDigits);
                }
              }

              if (fractDigits > 0) {
                k = result.length;
                result =
                  sign +
                  (k <= fractDigits
                    ? '0.' + repeat.call('0', fractDigits - k) + result
                    : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
              } else {
                result = sign + result;
              }

              return result;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.number.to-precision.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.number.to-precision.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsNumberToPrecisionJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var thisNumberValue = __webpack_require__(
          /*! ../internals/this-number-value */
          '../../node_modules/core-js/internals/this-number-value.js'
        );

        var nativeToPrecision = (1.0).toPrecision;
        var FORCED =
          fails(function() {
            // IE7-
            return nativeToPrecision.call(1, undefined) !== '1';
          }) ||
          !fails(function() {
            // V8 ~ Android 4.3-
            nativeToPrecision.call({});
          }); // `Number.prototype.toPrecision` method
        // https://tc39.github.io/ecma262/#sec-number.prototype.toprecision

        $(
          {
            target: 'Number',
            proto: true,
            forced: FORCED,
          },
          {
            toPrecision: function toPrecision(precision) {
              return precision === undefined
                ? nativeToPrecision.call(thisNumberValue(this))
                : nativeToPrecision.call(thisNumberValue(this), precision);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.assign.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.assign.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectAssignJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var assign = __webpack_require__(
          /*! ../internals/object-assign */
          '../../node_modules/core-js/internals/object-assign.js'
        ); // `Object.assign` method
        // https://tc39.github.io/ecma262/#sec-object.assign

        $(
          {
            target: 'Object',
            stat: true,
            forced: Object.assign !== assign,
          },
          {
            assign: assign,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.create.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.create.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectCreateJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var create = __webpack_require__(
          /*! ../internals/object-create */
          '../../node_modules/core-js/internals/object-create.js'
        ); // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create

        $(
          {
            target: 'Object',
            stat: true,
            sham: !DESCRIPTORS,
          },
          {
            create: create,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.define-properties.js':
      /*!******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.define-properties.js ***!
    \******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var defineProperties = __webpack_require__(
          /*! ../internals/object-define-properties */
          '../../node_modules/core-js/internals/object-define-properties.js'
        ); // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties

        $(
          {
            target: 'Object',
            stat: true,
            forced: !DESCRIPTORS,
            sham: !DESCRIPTORS,
          },
          {
            defineProperties: defineProperties,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.define-property.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.define-property.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectDefinePropertyJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var objectDefinePropertyModile = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ); // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty

        $(
          {
            target: 'Object',
            stat: true,
            forced: !DESCRIPTORS,
            sham: !DESCRIPTORS,
          },
          {
            defineProperty: objectDefinePropertyModile.f,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.freeze.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.freeze.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectFreezeJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var FREEZING = __webpack_require__(
          /*! ../internals/freezing */
          '../../node_modules/core-js/internals/freezing.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var onFreeze = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        ).onFreeze;

        var nativeFreeze = Object.freeze;
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeFreeze(1);
        }); // `Object.freeze` method
        // https://tc39.github.io/ecma262/#sec-object.freeze

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !FREEZING,
          },
          {
            freeze: function freeze(it) {
              return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js':
      /*!****************************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
    \****************************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectGetOwnPropertyDescriptorJs(
        module,
        exports,
        __webpack_require__
      ) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var nativeGetOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeGetOwnPropertyDescriptor(1);
        });
        var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

        $(
          {
            target: 'Object',
            stat: true,
            forced: FORCED,
            sham: !DESCRIPTORS,
          },
          {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
              return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.get-own-property-names.js':
      /*!***********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.get-own-property-names.js ***!
    \***********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var nativeGetOwnPropertyNames = __webpack_require__(
          /*! ../internals/object-get-own-property-names-external */
          '../../node_modules/core-js/internals/object-get-own-property-names-external.js'
        ).f;

        var FAILS_ON_PRIMITIVES = fails(function() {
          return !Object.getOwnPropertyNames(1);
        }); // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
          },
          {
            getOwnPropertyNames: nativeGetOwnPropertyNames,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.get-prototype-of.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.get-prototype-of.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var nativeGetPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */
          '../../node_modules/core-js/internals/object-get-prototype-of.js'
        );

        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
          /*! ../internals/correct-prototype-getter */
          '../../node_modules/core-js/internals/correct-prototype-getter.js'
        );

        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeGetPrototypeOf(1);
        }); // `Object.getPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.getprototypeof

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !CORRECT_PROTOTYPE_GETTER,
          },
          {
            getPrototypeOf: function getPrototypeOf(it) {
              return nativeGetPrototypeOf(toObject(it));
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.is-extensible.js':
      /*!**************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.is-extensible.js ***!
    \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectIsExtensibleJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var nativeIsExtensible = Object.isExtensible;
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeIsExtensible(1);
        }); // `Object.isExtensible` method
        // https://tc39.github.io/ecma262/#sec-object.isextensible

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
          },
          {
            isExtensible: function isExtensible(it) {
              return isObject(it) ? (nativeIsExtensible ? nativeIsExtensible(it) : true) : false;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.is-frozen.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.is-frozen.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectIsFrozenJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var nativeIsFrozen = Object.isFrozen;
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeIsFrozen(1);
        }); // `Object.isFrozen` method
        // https://tc39.github.io/ecma262/#sec-object.isfrozen

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
          },
          {
            isFrozen: function isFrozen(it) {
              return isObject(it) ? (nativeIsFrozen ? nativeIsFrozen(it) : false) : true;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.is-sealed.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.is-sealed.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectIsSealedJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var nativeIsSealed = Object.isSealed;
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeIsSealed(1);
        }); // `Object.isSealed` method
        // https://tc39.github.io/ecma262/#sec-object.issealed

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
          },
          {
            isSealed: function isSealed(it) {
              return isObject(it) ? (nativeIsSealed ? nativeIsSealed(it) : false) : true;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.is.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.is.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectIsJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var is = __webpack_require__(
          /*! ../internals/same-value */
          '../../node_modules/core-js/internals/same-value.js'
        ); // `Object.is` method
        // https://tc39.github.io/ecma262/#sec-object.is

        $(
          {
            target: 'Object',
            stat: true,
          },
          {
            is: is,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.keys.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.keys.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectKeysJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var nativeKeys = __webpack_require__(
          /*! ../internals/object-keys */
          '../../node_modules/core-js/internals/object-keys.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeKeys(1);
        }); // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
          },
          {
            keys: function keys(it) {
              return nativeKeys(toObject(it));
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.prevent-extensions.js':
      /*!*******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.prevent-extensions.js ***!
    \*******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectPreventExtensionsJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var onFreeze = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        ).onFreeze;

        var FREEZING = __webpack_require__(
          /*! ../internals/freezing */
          '../../node_modules/core-js/internals/freezing.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var nativePreventExtensions = Object.preventExtensions;
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativePreventExtensions(1);
        }); // `Object.preventExtensions` method
        // https://tc39.github.io/ecma262/#sec-object.preventextensions

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !FREEZING,
          },
          {
            preventExtensions: function preventExtensions(it) {
              return nativePreventExtensions && isObject(it) ? nativePreventExtensions(onFreeze(it)) : it;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.seal.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.seal.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectSealJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var onFreeze = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        ).onFreeze;

        var FREEZING = __webpack_require__(
          /*! ../internals/freezing */
          '../../node_modules/core-js/internals/freezing.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var nativeSeal = Object.seal;
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeSeal(1);
        }); // `Object.seal` method
        // https://tc39.github.io/ecma262/#sec-object.seal

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !FREEZING,
          },
          {
            seal: function seal(it) {
              return nativeSeal && isObject(it) ? nativeSeal(onFreeze(it)) : it;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.set-prototype-of.js':
      /*!*****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.set-prototype-of.js ***!
    \*****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */
          '../../node_modules/core-js/internals/object-set-prototype-of.js'
        ); // `Object.setPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.setprototypeof

        $(
          {
            target: 'Object',
            stat: true,
          },
          {
            setPrototypeOf: setPrototypeOf,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.object.to-string.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.object.to-string.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsObjectToStringJs(module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */
          '../../node_modules/core-js/internals/to-string-tag-support.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var toString = __webpack_require__(
          /*! ../internals/object-to-string */
          '../../node_modules/core-js/internals/object-to-string.js'
        ); // `Object.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, 'toString', toString, {
            unsafe: true,
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.parse-float.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.parse-float.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsParseFloatJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var parseFloatImplementation = __webpack_require__(
          /*! ../internals/parse-float */
          '../../node_modules/core-js/internals/parse-float.js'
        ); // `parseFloat` method
        // https://tc39.github.io/ecma262/#sec-parsefloat-string

        $(
          {
            global: true,
            forced: parseFloat != parseFloatImplementation,
          },
          {
            parseFloat: parseFloatImplementation,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.parse-int.js':
      /*!***************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.parse-int.js ***!
    \***************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsParseIntJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var parseIntImplementation = __webpack_require__(
          /*! ../internals/parse-int */
          '../../node_modules/core-js/internals/parse-int.js'
        ); // `parseInt` method
        // https://tc39.github.io/ecma262/#sec-parseint-string-radix

        $(
          {
            global: true,
            forced: parseInt != parseIntImplementation,
          },
          {
            parseInt: parseIntImplementation,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.promise.js':
      /*!*************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.promise.js ***!
    \*************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsPromiseJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          '../../node_modules/core-js/internals/get-built-in.js'
        );

        var NativePromise = __webpack_require__(
          /*! ../internals/native-promise-constructor */
          '../../node_modules/core-js/internals/native-promise-constructor.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */
          '../../node_modules/core-js/internals/redefine-all.js'
        );

        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        );

        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */
          '../../node_modules/core-js/internals/set-species.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var aFunction = __webpack_require__(
          /*! ../internals/a-function */
          '../../node_modules/core-js/internals/a-function.js'
        );

        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */
          '../../node_modules/core-js/internals/an-instance.js'
        );

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          '../../node_modules/core-js/internals/classof-raw.js'
        );

        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */
          '../../node_modules/core-js/internals/inspect-source.js'
        );

        var iterate = __webpack_require__(
          /*! ../internals/iterate */
          '../../node_modules/core-js/internals/iterate.js'
        );

        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */
          '../../node_modules/core-js/internals/check-correctness-of-iteration.js'
        );

        var speciesConstructor = __webpack_require__(
          /*! ../internals/species-constructor */
          '../../node_modules/core-js/internals/species-constructor.js'
        );

        var task = __webpack_require__(
          /*! ../internals/task */
          '../../node_modules/core-js/internals/task.js'
        ).set;

        var microtask = __webpack_require__(
          /*! ../internals/microtask */
          '../../node_modules/core-js/internals/microtask.js'
        );

        var promiseResolve = __webpack_require__(
          /*! ../internals/promise-resolve */
          '../../node_modules/core-js/internals/promise-resolve.js'
        );

        var hostReportErrors = __webpack_require__(
          /*! ../internals/host-report-errors */
          '../../node_modules/core-js/internals/host-report-errors.js'
        );

        var newPromiseCapabilityModule = __webpack_require__(
          /*! ../internals/new-promise-capability */
          '../../node_modules/core-js/internals/new-promise-capability.js'
        );

        var perform = __webpack_require__(
          /*! ../internals/perform */
          '../../node_modules/core-js/internals/perform.js'
        );

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          '../../node_modules/core-js/internals/is-forced.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var V8_VERSION = __webpack_require__(
          /*! ../internals/v8-version */
          '../../node_modules/core-js/internals/v8-version.js'
        );

        var SPECIES = wellKnownSymbol('species');
        var PROMISE = 'Promise';
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var PromiseConstructor = NativePromise;
        var TypeError = global.TypeError;
        var document = global.document;
        var process = global.process;
        var $fetch = getBuiltIn('fetch');
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var IS_NODE = classof(process) == 'process';
        var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
        var UNHANDLED_REJECTION = 'unhandledrejection';
        var REJECTION_HANDLED = 'rejectionhandled';
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
        var FORCED = isForced(PROMISE, function() {
          var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);

          if (!GLOBAL_CORE_JS_PROMISE) {
            // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
            // We can't detect it synchronously, so just check versions
            if (V8_VERSION === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

            if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
          } // We need Promise#finally in the pure version for preventing prototype pollution

          if (IS_PURE && !PromiseConstructor.prototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes
          // deoptimization and performance degradation
          // https://github.com/zloirock/core-js/issues/679

          if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

          var promise = PromiseConstructor.resolve(1);

          var FakePromise = function FakePromise(exec) {
            exec(
              function() {
                /* empty */
              },
              function() {
                /* empty */
              }
            );
          };

          var constructor = (promise.constructor = {});
          constructor[SPECIES] = FakePromise;
          return !(
            promise.then(function() {
              /* empty */
            }) instanceof FakePromise
          );
        });
        var INCORRECT_ITERATION =
          FORCED ||
          !checkCorrectnessOfIteration(function(iterable) {
            PromiseConstructor.all(iterable)['catch'](function() {
              /* empty */
            });
          }); // helpers

        var isThenable = function isThenable(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };

        var notify = function notify(promise, state, isReject) {
          if (state.notified) return;
          state.notified = true;
          var chain = state.reactions;
          microtask(function() {
            var value = state.value;
            var ok = state.state == FULFILLED;
            var index = 0; // variable length - can't use forEach

            while (chain.length > index) {
              var reaction = chain[index++];
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;

              try {
                if (handler) {
                  if (!ok) {
                    if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
                    state.rejection = HANDLED;
                  }

                  if (handler === true) result = value;
                  else {
                    if (domain) domain.enter();
                    result = handler(value); // can throw

                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }

                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if ((then = isThenable(result))) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (error) {
                if (domain && !exited) domain.exit();
                reject(error);
              }
            }

            state.reactions = [];
            state.notified = false;
            if (isReject && !state.rejection) onUnhandled(promise, state);
          });
        };

        var dispatchEvent = function dispatchEvent(name, promise, reason) {
          var event, handler;

          if (DISPATCH_EVENT) {
            event = document.createEvent('Event');
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name, false, true);
            global.dispatchEvent(event);
          } else
            event = {
              promise: promise,
              reason: reason,
            };

          if ((handler = global['on' + name])) handler(event);
          else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
        };

        var onUnhandled = function onUnhandled(promise, state) {
          task.call(global, function() {
            var value = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;

            if (IS_UNHANDLED) {
              result = perform(function() {
                if (IS_NODE) {
                  process.emit('unhandledRejection', value, promise);
                } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
              }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

              state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
              if (result.error) throw result.value;
            }
          });
        };

        var isUnhandled = function isUnhandled(state) {
          return state.rejection !== HANDLED && !state.parent;
        };

        var onHandleUnhandled = function onHandleUnhandled(promise, state) {
          task.call(global, function() {
            if (IS_NODE) {
              process.emit('rejectionHandled', promise);
            } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
          });
        };

        var bind = function bind(fn, promise, state, unwrap) {
          return function(value) {
            fn(promise, state, value, unwrap);
          };
        };

        var internalReject = function internalReject(promise, state, value, unwrap) {
          if (state.done) return;
          state.done = true;
          if (unwrap) state = unwrap;
          state.value = value;
          state.state = REJECTED;
          notify(promise, state, true);
        };

        var internalResolve = function internalResolve(promise, state, value, unwrap) {
          if (state.done) return;
          state.done = true;
          if (unwrap) state = unwrap;

          try {
            if (promise === value) throw TypeError("Promise can't be resolved itself");
            var then = isThenable(value);

            if (then) {
              microtask(function() {
                var wrapper = {
                  done: false,
                };

                try {
                  then.call(
                    value,
                    bind(internalResolve, promise, wrapper, state),
                    bind(internalReject, promise, wrapper, state)
                  );
                } catch (error) {
                  internalReject(promise, wrapper, error, state);
                }
              });
            } else {
              state.value = value;
              state.state = FULFILLED;
              notify(promise, state, false);
            }
          } catch (error) {
            internalReject(
              promise,
              {
                done: false,
              },
              error,
              state
            );
          }
        }; // constructor polyfill

        if (FORCED) {
          // 25.4.3.1 Promise(executor)
          PromiseConstructor = function Promise(executor) {
            anInstance(this, PromiseConstructor, PROMISE);
            aFunction(executor);
            Internal.call(this);
            var state = getInternalState(this);

            try {
              executor(bind(internalResolve, this, state), bind(internalReject, this, state));
            } catch (error) {
              internalReject(this, state, error);
            }
          }; // eslint-disable-next-line no-unused-vars

          Internal = function Promise(executor) {
            setInternalState(this, {
              type: PROMISE,
              done: false,
              notified: false,
              parent: false,
              reactions: [],
              rejection: false,
              state: PENDING,
              value: undefined,
            });
          };

          Internal.prototype = redefineAll(PromiseConstructor.prototype, {
            // `Promise.prototype.then` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.then
            then: function then(onFulfilled, onRejected) {
              var state = getInternalPromiseState(this);
              var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
              reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected == 'function' && onRejected;
              reaction.domain = IS_NODE ? process.domain : undefined;
              state.parent = true;
              state.reactions.push(reaction);
              if (state.state != PENDING) notify(this, state, false);
              return reaction.promise;
            },
            // `Promise.prototype.catch` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
            catch: function _catch(onRejected) {
              return this.then(undefined, onRejected);
            },
          });

          OwnPromiseCapability = function OwnPromiseCapability() {
            var promise = new Internal();
            var state = getInternalState(promise);
            this.promise = promise;
            this.resolve = bind(internalResolve, promise, state);
            this.reject = bind(internalReject, promise, state);
          };

          newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
            return C === PromiseConstructor || C === PromiseWrapper
              ? new OwnPromiseCapability(C)
              : newGenericPromiseCapability(C);
          };

          if (!IS_PURE && typeof NativePromise == 'function') {
            nativeThen = NativePromise.prototype.then; // wrap native Promise#then for native async functions

            redefine(
              NativePromise.prototype,
              'then',
              function then(onFulfilled, onRejected) {
                var that = this;
                return new PromiseConstructor(function(resolve, reject) {
                  nativeThen.call(that, resolve, reject);
                }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
              },
              {
                unsafe: true,
              }
            ); // wrap fetch result

            if (typeof $fetch == 'function')
              $(
                {
                  global: true,
                  enumerable: true,
                  forced: true,
                },
                {
                  // eslint-disable-next-line no-unused-vars
                  fetch: function fetch(
                    input
                    /* , init */
                  ) {
                    return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
                  },
                }
              );
          }
        }

        $(
          {
            global: true,
            wrap: true,
            forced: FORCED,
          },
          {
            Promise: PromiseConstructor,
          }
        );
        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);
        PromiseWrapper = getBuiltIn(PROMISE); // statics

        $(
          {
            target: PROMISE,
            stat: true,
            forced: FORCED,
          },
          {
            // `Promise.reject` method
            // https://tc39.github.io/ecma262/#sec-promise.reject
            reject: function reject(r) {
              var capability = newPromiseCapability(this);
              capability.reject.call(undefined, r);
              return capability.promise;
            },
          }
        );
        $(
          {
            target: PROMISE,
            stat: true,
            forced: IS_PURE || FORCED,
          },
          {
            // `Promise.resolve` method
            // https://tc39.github.io/ecma262/#sec-promise.resolve
            resolve: function resolve(x) {
              return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
            },
          }
        );
        $(
          {
            target: PROMISE,
            stat: true,
            forced: INCORRECT_ITERATION,
          },
          {
            // `Promise.all` method
            // https://tc39.github.io/ecma262/#sec-promise.all
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function() {
                var $promiseResolve = aFunction(C.resolve);
                var values = [];
                var counter = 0;
                var remaining = 1;
                iterate(iterable, function(promise) {
                  var index = counter++;
                  var alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  $promiseResolve.call(C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.error) reject(result.value);
              return capability.promise;
            },
            // `Promise.race` method
            // https://tc39.github.io/ecma262/#sec-promise.race
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function() {
                var $promiseResolve = aFunction(C.resolve);
                iterate(iterable, function(promise) {
                  $promiseResolve.call(C, promise).then(capability.resolve, reject);
                });
              });
              if (result.error) reject(result.value);
              return capability.promise;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.regexp.constructor.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.regexp.constructor.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsRegexpConstructorJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          '../../node_modules/core-js/internals/is-forced.js'
        );

        var inheritIfRequired = __webpack_require__(
          /*! ../internals/inherit-if-required */
          '../../node_modules/core-js/internals/inherit-if-required.js'
        );

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var getOwnPropertyNames = __webpack_require__(
          /*! ../internals/object-get-own-property-names */
          '../../node_modules/core-js/internals/object-get-own-property-names.js'
        ).f;

        var isRegExp = __webpack_require__(
          /*! ../internals/is-regexp */
          '../../node_modules/core-js/internals/is-regexp.js'
        );

        var getFlags = __webpack_require__(
          /*! ../internals/regexp-flags */
          '../../node_modules/core-js/internals/regexp-flags.js'
        );

        var stickyHelpers = __webpack_require__(
          /*! ../internals/regexp-sticky-helpers */
          '../../node_modules/core-js/internals/regexp-sticky-helpers.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var setInternalState = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        ).set;

        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */
          '../../node_modules/core-js/internals/set-species.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var MATCH = wellKnownSymbol('match');
        var NativeRegExp = global.RegExp;
        var RegExpPrototype = NativeRegExp.prototype;
        var re1 = /a/g;
        var re2 = /a/g; // "new" should create a new object, old webkit bug

        var CORRECT_NEW = new NativeRegExp(re1) !== re1;
        var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
        var FORCED =
          DESCRIPTORS &&
          isForced(
            'RegExp',
            !CORRECT_NEW ||
              UNSUPPORTED_Y ||
              fails(function() {
                re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

                return (
                  NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i'
                );
              })
          ); // `RegExp` constructor
        // https://tc39.github.io/ecma262/#sec-regexp-constructor

        if (FORCED) {
          var RegExpWrapper = function RegExp(pattern, flags) {
            var thisIsRegExp = this instanceof RegExpWrapper;
            var patternIsRegExp = isRegExp(pattern);
            var flagsAreUndefined = flags === undefined;
            var sticky;

            if (
              !thisIsRegExp &&
              patternIsRegExp &&
              pattern.constructor === RegExpWrapper &&
              flagsAreUndefined
            ) {
              return pattern;
            }

            if (CORRECT_NEW) {
              if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
            } else if (pattern instanceof RegExpWrapper) {
              if (flagsAreUndefined) flags = getFlags.call(pattern);
              pattern = pattern.source;
            }

            if (UNSUPPORTED_Y) {
              sticky = !!flags && flags.indexOf('y') > -1;
              if (sticky) flags = flags.replace(/y/g, '');
            }

            var result = inheritIfRequired(
              CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
              thisIsRegExp ? this : RegExpPrototype,
              RegExpWrapper
            );
            if (UNSUPPORTED_Y && sticky)
              setInternalState(result, {
                sticky: sticky,
              });
            return result;
          };

          var proxy = function proxy(key) {
            key in RegExpWrapper ||
              defineProperty(RegExpWrapper, key, {
                configurable: true,
                get: function get() {
                  return NativeRegExp[key];
                },
                set: function set(it) {
                  NativeRegExp[key] = it;
                },
              });
          };

          var keys = getOwnPropertyNames(NativeRegExp);
          var index = 0;

          while (keys.length > index) {
            proxy(keys[index++]);
          }

          RegExpPrototype.constructor = RegExpWrapper;
          RegExpWrapper.prototype = RegExpPrototype;
          redefine(global, 'RegExp', RegExpWrapper);
        } // https://tc39.github.io/ecma262/#sec-get-regexp-@@species

        setSpecies('RegExp');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.regexp.exec.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.regexp.exec.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsRegexpExecJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var exec = __webpack_require__(
          /*! ../internals/regexp-exec */
          '../../node_modules/core-js/internals/regexp-exec.js'
        );

        $(
          {
            target: 'RegExp',
            proto: true,
            forced: /./.exec !== exec,
          },
          {
            exec: exec,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.regexp.flags.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.regexp.flags.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsRegexpFlagsJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var objectDefinePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var regExpFlags = __webpack_require__(
          /*! ../internals/regexp-flags */
          '../../node_modules/core-js/internals/regexp-flags.js'
        );

        var UNSUPPORTED_Y = __webpack_require__(
          /*! ../internals/regexp-sticky-helpers */
          '../../node_modules/core-js/internals/regexp-sticky-helpers.js'
        ).UNSUPPORTED_Y; // `RegExp.prototype.flags` getter
        // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags

        if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
          objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
            configurable: true,
            get: regExpFlags,
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.regexp.sticky.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.regexp.sticky.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsRegexpStickyJs(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var UNSUPPORTED_Y = __webpack_require__(
          /*! ../internals/regexp-sticky-helpers */
          '../../node_modules/core-js/internals/regexp-sticky-helpers.js'
        ).UNSUPPORTED_Y;

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var getInternalState = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        ).get;

        var RegExpPrototype = RegExp.prototype; // `RegExp.prototype.sticky` getter

        if (DESCRIPTORS && UNSUPPORTED_Y) {
          defineProperty(RegExp.prototype, 'sticky', {
            configurable: true,
            get: function get() {
              if (this === RegExpPrototype) return undefined; // We can't use InternalStateModule.getterFor because
              // we don't add metadata for regexps created by a literal.

              if (this instanceof RegExp) {
                return !!getInternalState(this).sticky;
              }

              throw TypeError('Incompatible receiver, RegExp required');
            },
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.regexp.test.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.regexp.test.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsRegexpTestJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var DELEGATES_TO_EXEC = (function() {
          var execCalled = false;
          var re = /[ac]/;

          re.exec = function() {
            execCalled = true;
            return /./.exec.apply(this, arguments);
          };

          return re.test('abc') === true && execCalled;
        })();

        var nativeTest = /./.test;
        $(
          {
            target: 'RegExp',
            proto: true,
            forced: !DELEGATES_TO_EXEC,
          },
          {
            test: function test(str) {
              if (typeof this.exec !== 'function') {
                return nativeTest.call(this, str);
              }

              var result = this.exec(str);

              if (result !== null && !isObject(result)) {
                throw new Error('RegExp exec method returned something other than an Object or null');
              }

              return !!result;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.regexp.to-string.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.regexp.to-string.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsRegexpToStringJs(module, exports, __webpack_require__) {
        'use strict';

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var flags = __webpack_require__(
          /*! ../internals/regexp-flags */
          '../../node_modules/core-js/internals/regexp-flags.js'
        );

        var TO_STRING = 'toString';
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];
        var NOT_GENERIC = fails(function() {
          return (
            nativeToString.call({
              source: 'a',
              flags: 'b',
            }) != '/a/b'
          );
        }); // FF44- RegExp#toString has a wrong name

        var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

        if (NOT_GENERIC || INCORRECT_NAME) {
          redefine(
            RegExp.prototype,
            TO_STRING,
            function toString() {
              var R = anObject(this);
              var p = String(R.source);
              var rf = R.flags;
              var f = String(
                rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf
              );
              return '/' + p + '/' + f;
            },
            {
              unsafe: true,
            }
          );
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.set.js':
      /*!*********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.set.js ***!
    \*********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSetJs(module, exports, __webpack_require__) {
        'use strict';

        var collection = __webpack_require__(
          /*! ../internals/collection */
          '../../node_modules/core-js/internals/collection.js'
        );

        var collectionStrong = __webpack_require__(
          /*! ../internals/collection-strong */
          '../../node_modules/core-js/internals/collection-strong.js'
        ); // `Set` constructor
        // https://tc39.github.io/ecma262/#sec-set-objects

        module.exports = collection(
          'Set',
          function(init) {
            return function Set() {
              return init(this, arguments.length ? arguments[0] : undefined);
            };
          },
          collectionStrong
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.anchor.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.anchor.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringAnchorJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.anchor` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.anchor

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('anchor'),
          },
          {
            anchor: function anchor(name) {
              return createHTML(this, 'a', 'name', name);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.big.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.big.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringBigJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.big` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.big

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('big'),
          },
          {
            big: function big() {
              return createHTML(this, 'big', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.blink.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.blink.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringBlinkJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.blink` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.blink

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('blink'),
          },
          {
            blink: function blink() {
              return createHTML(this, 'blink', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.bold.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.bold.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringBoldJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.bold` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.bold

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('bold'),
          },
          {
            bold: function bold() {
              return createHTML(this, 'b', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.code-point-at.js':
      /*!**************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.code-point-at.js ***!
    \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringCodePointAtJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var codeAt = __webpack_require__(
          /*! ../internals/string-multibyte */
          '../../node_modules/core-js/internals/string-multibyte.js'
        ).codeAt; // `String.prototype.codePointAt` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat

        $(
          {
            target: 'String',
            proto: true,
          },
          {
            codePointAt: function codePointAt(pos) {
              return codeAt(this, pos);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.ends-with.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.ends-with.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringEndsWithJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var notARegExp = __webpack_require__(
          /*! ../internals/not-a-regexp */
          '../../node_modules/core-js/internals/not-a-regexp.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var correctIsRegExpLogic = __webpack_require__(
          /*! ../internals/correct-is-regexp-logic */
          '../../node_modules/core-js/internals/correct-is-regexp-logic.js'
        );

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var nativeEndsWith = ''.endsWith;
        var min = Math.min;
        var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

        var MDN_POLYFILL_BUG =
          !IS_PURE &&
          !CORRECT_IS_REGEXP_LOGIC &&
          !!(function() {
            var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
            return descriptor && !descriptor.writable;
          })(); // `String.prototype.endsWith` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.endswith

        $(
          {
            target: 'String',
            proto: true,
            forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC,
          },
          {
            endsWith: function endsWith(
              searchString
              /* , endPosition = @length */
            ) {
              var that = String(requireObjectCoercible(this));
              notARegExp(searchString);
              var endPosition = arguments.length > 1 ? arguments[1] : undefined;
              var len = toLength(that.length);
              var end = endPosition === undefined ? len : min(toLength(endPosition), len);
              var search = String(searchString);
              return nativeEndsWith
                ? nativeEndsWith.call(that, search, end)
                : that.slice(end - search.length, end) === search;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.fixed.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.fixed.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringFixedJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.fixed` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.fixed

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('fixed'),
          },
          {
            fixed: function fixed() {
              return createHTML(this, 'tt', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.fontcolor.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.fontcolor.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringFontcolorJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.fontcolor` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.fontcolor

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('fontcolor'),
          },
          {
            fontcolor: function fontcolor(color) {
              return createHTML(this, 'font', 'color', color);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.fontsize.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.fontsize.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringFontsizeJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.fontsize` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.fontsize

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('fontsize'),
          },
          {
            fontsize: function fontsize(size) {
              return createHTML(this, 'font', 'size', size);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.from-code-point.js':
      /*!****************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.from-code-point.js ***!
    \****************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringFromCodePointJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          '../../node_modules/core-js/internals/to-absolute-index.js'
        );

        var fromCharCode = String.fromCharCode;
        var nativeFromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

        var INCORRECT_LENGTH = !!nativeFromCodePoint && nativeFromCodePoint.length != 1; // `String.fromCodePoint` method
        // https://tc39.github.io/ecma262/#sec-string.fromcodepoint

        $(
          {
            target: 'String',
            stat: true,
            forced: INCORRECT_LENGTH,
          },
          {
            fromCodePoint: function fromCodePoint(x) {
              // eslint-disable-line no-unused-vars
              var elements = [];
              var length = arguments.length;
              var i = 0;
              var code;

              while (length > i) {
                code = +arguments[i++];
                if (toAbsoluteIndex(code, 0x10ffff) !== code)
                  throw RangeError(code + ' is not a valid code point');
                elements.push(
                  code < 0x10000
                    ? fromCharCode(code)
                    : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00)
                );
              }

              return elements.join('');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.includes.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.includes.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringIncludesJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var notARegExp = __webpack_require__(
          /*! ../internals/not-a-regexp */
          '../../node_modules/core-js/internals/not-a-regexp.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var correctIsRegExpLogic = __webpack_require__(
          /*! ../internals/correct-is-regexp-logic */
          '../../node_modules/core-js/internals/correct-is-regexp-logic.js'
        ); // `String.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.includes

        $(
          {
            target: 'String',
            proto: true,
            forced: !correctIsRegExpLogic('includes'),
          },
          {
            includes: function includes(
              searchString
              /* , position = 0 */
            ) {
              return !!~String(requireObjectCoercible(this)).indexOf(
                notARegExp(searchString),
                arguments.length > 1 ? arguments[1] : undefined
              );
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.italics.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.italics.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringItalicsJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.italics` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.italics

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('italics'),
          },
          {
            italics: function italics() {
              return createHTML(this, 'i', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.iterator.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.iterator.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringIteratorJs(module, exports, __webpack_require__) {
        'use strict';

        var charAt = __webpack_require__(
          /*! ../internals/string-multibyte */
          '../../node_modules/core-js/internals/string-multibyte.js'
        ).charAt;

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */
          '../../node_modules/core-js/internals/define-iterator.js'
        );

        var STRING_ITERATOR = 'String Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

        defineIterator(
          String,
          'String',
          function(iterated) {
            setInternalState(this, {
              type: STRING_ITERATOR,
              string: String(iterated),
              index: 0,
            }); // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
          },
          function next() {
            var state = getInternalState(this);
            var string = state.string;
            var index = state.index;
            var point;
            if (index >= string.length)
              return {
                value: undefined,
                done: true,
              };
            point = charAt(string, index);
            state.index += point.length;
            return {
              value: point,
              done: false,
            };
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.link.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.link.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringLinkJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.link` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.link

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('link'),
          },
          {
            link: function link(url) {
              return createHTML(this, 'a', 'href', url);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.match.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.match.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringMatchJs(module, exports, __webpack_require__) {
        'use strict';

        var fixRegExpWellKnownSymbolLogic = __webpack_require__(
          /*! ../internals/fix-regexp-well-known-symbol-logic */
          '../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var advanceStringIndex = __webpack_require__(
          /*! ../internals/advance-string-index */
          '../../node_modules/core-js/internals/advance-string-index.js'
        );

        var regExpExec = __webpack_require__(
          /*! ../internals/regexp-exec-abstract */
          '../../node_modules/core-js/internals/regexp-exec-abstract.js'
        ); // @@match logic

        fixRegExpWellKnownSymbolLogic('match', 1, function(MATCH, nativeMatch, maybeCallNative) {
          return [
            // `String.prototype.match` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.match
            function match(regexp) {
              var O = requireObjectCoercible(this);
              var matcher = regexp == undefined ? undefined : regexp[MATCH];
              return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
            }, // `RegExp.prototype[@@match]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
            function(regexp) {
              var res = maybeCallNative(nativeMatch, regexp, this);
              if (res.done) return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              if (!rx.global) return regExpExec(rx, S);
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
              var A = [];
              var n = 0;
              var result;

              while ((result = regExpExec(rx, S)) !== null) {
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === '')
                  rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
              }

              return n === 0 ? null : A;
            },
          ];
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.raw.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.raw.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringRawJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        ); // `String.raw` method
        // https://tc39.github.io/ecma262/#sec-string.raw

        $(
          {
            target: 'String',
            stat: true,
          },
          {
            raw: function raw(template) {
              var rawTemplate = toIndexedObject(template.raw);
              var literalSegments = toLength(rawTemplate.length);
              var argumentsLength = arguments.length;
              var elements = [];
              var i = 0;

              while (literalSegments > i) {
                elements.push(String(rawTemplate[i++]));
                if (i < argumentsLength) elements.push(String(arguments[i]));
              }

              return elements.join('');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.repeat.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.repeat.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringRepeatJs(module, exports, __webpack_require__) {
        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var repeat = __webpack_require__(
          /*! ../internals/string-repeat */
          '../../node_modules/core-js/internals/string-repeat.js'
        ); // `String.prototype.repeat` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.repeat

        $(
          {
            target: 'String',
            proto: true,
          },
          {
            repeat: repeat,
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.replace.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.replace.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringReplaceJs(module, exports, __webpack_require__) {
        'use strict';

        var fixRegExpWellKnownSymbolLogic = __webpack_require__(
          /*! ../internals/fix-regexp-well-known-symbol-logic */
          '../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */
          '../../node_modules/core-js/internals/to-integer.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var advanceStringIndex = __webpack_require__(
          /*! ../internals/advance-string-index */
          '../../node_modules/core-js/internals/advance-string-index.js'
        );

        var regExpExec = __webpack_require__(
          /*! ../internals/regexp-exec-abstract */
          '../../node_modules/core-js/internals/regexp-exec-abstract.js'
        );

        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

        var maybeToString = function maybeToString(it) {
          return it === undefined ? it : String(it);
        }; // @@replace logic

        fixRegExpWellKnownSymbolLogic('replace', 2, function(
          REPLACE,
          nativeReplace,
          maybeCallNative,
          reason
        ) {
          return [
            // `String.prototype.replace` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.replace
            function replace(searchValue, replaceValue) {
              var O = requireObjectCoercible(this);
              var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
              return replacer !== undefined
                ? replacer.call(searchValue, O, replaceValue)
                : nativeReplace.call(String(O), searchValue, replaceValue);
            }, // `RegExp.prototype[@@replace]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
            function(regexp, replaceValue) {
              if (
                reason.REPLACE_KEEPS_$0 ||
                (typeof replaceValue === 'string' && replaceValue.indexOf('$0') === -1)
              ) {
                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                if (res.done) return res.value;
              }

              var rx = anObject(regexp);
              var S = String(this);
              var functionalReplace = typeof replaceValue === 'function';
              if (!functionalReplace) replaceValue = String(replaceValue);
              var global = rx.global;

              if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
              }

              var results = [];

              while (true) {
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === '')
                  rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              }

              var accumulatedResult = '';
              var nextSourcePosition = 0;

              for (var i = 0; i < results.length; i++) {
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = []; // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

                for (var j = 1; j < result.length; j++) {
                  captures.push(maybeToString(result[j]));
                }

                var namedCaptures = result.groups;

                if (functionalReplace) {
                  var replacerArgs = [matched].concat(captures, position, S);
                  if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                  var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else {
                  replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                }

                if (position >= nextSourcePosition) {
                  accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                  nextSourcePosition = position + matched.length;
                }
              }

              return accumulatedResult + S.slice(nextSourcePosition);
            },
          ]; // https://tc39.github.io/ecma262/#sec-getsubstitution

          function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

            if (namedCaptures !== undefined) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }

            return nativeReplace.call(replacement, symbols, function(match, ch) {
              var capture;

              switch (ch.charAt(0)) {
                case '$':
                  return '$';

                case '&':
                  return matched;

                case '`':
                  return str.slice(0, position);

                case "'":
                  return str.slice(tailPos);

                case '<':
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;

                default:
                  // \d\d?
                  var n = +ch;
                  if (n === 0) return match;

                  if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m)
                      return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                  }

                  capture = captures[n - 1];
              }

              return capture === undefined ? '' : capture;
            });
          }
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.search.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.search.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringSearchJs(module, exports, __webpack_require__) {
        'use strict';

        var fixRegExpWellKnownSymbolLogic = __webpack_require__(
          /*! ../internals/fix-regexp-well-known-symbol-logic */
          '../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var sameValue = __webpack_require__(
          /*! ../internals/same-value */
          '../../node_modules/core-js/internals/same-value.js'
        );

        var regExpExec = __webpack_require__(
          /*! ../internals/regexp-exec-abstract */
          '../../node_modules/core-js/internals/regexp-exec-abstract.js'
        ); // @@search logic

        fixRegExpWellKnownSymbolLogic('search', 1, function(SEARCH, nativeSearch, maybeCallNative) {
          return [
            // `String.prototype.search` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.search
            function search(regexp) {
              var O = requireObjectCoercible(this);
              var searcher = regexp == undefined ? undefined : regexp[SEARCH];
              return searcher !== undefined
                ? searcher.call(regexp, O)
                : new RegExp(regexp)[SEARCH](String(O));
            }, // `RegExp.prototype[@@search]` method
            // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
            function(regexp) {
              var res = maybeCallNative(nativeSearch, regexp, this);
              if (res.done) return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              var previousLastIndex = rx.lastIndex;
              if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
              var result = regExpExec(rx, S);
              if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
              return result === null ? -1 : result.index;
            },
          ];
        });
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.small.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.small.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringSmallJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.small` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.small

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('small'),
          },
          {
            small: function small() {
              return createHTML(this, 'small', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.split.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.split.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringSplitJs(module, exports, __webpack_require__) {
        'use strict';

        var fixRegExpWellKnownSymbolLogic = __webpack_require__(
          /*! ../internals/fix-regexp-well-known-symbol-logic */
          '../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js'
        );

        var isRegExp = __webpack_require__(
          /*! ../internals/is-regexp */
          '../../node_modules/core-js/internals/is-regexp.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var speciesConstructor = __webpack_require__(
          /*! ../internals/species-constructor */
          '../../node_modules/core-js/internals/species-constructor.js'
        );

        var advanceStringIndex = __webpack_require__(
          /*! ../internals/advance-string-index */
          '../../node_modules/core-js/internals/advance-string-index.js'
        );

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var callRegExpExec = __webpack_require__(
          /*! ../internals/regexp-exec-abstract */
          '../../node_modules/core-js/internals/regexp-exec-abstract.js'
        );

        var regexpExec = __webpack_require__(
          /*! ../internals/regexp-exec */
          '../../node_modules/core-js/internals/regexp-exec.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var arrayPush = [].push;
        var min = Math.min;
        var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

        var SUPPORTS_Y = !fails(function() {
          return !RegExp(MAX_UINT32, 'y');
        }); // @@split logic

        fixRegExpWellKnownSymbolLogic(
          'split',
          2,
          function(SPLIT, nativeSplit, maybeCallNative) {
            var internalSplit;

            if (
              'abbc'.split(/(b)*/)[1] == 'c' ||
              'test'.split(/(?:)/, -1).length != 4 ||
              'ab'.split(/(?:ab)*/).length != 2 ||
              '.'.split(/(.?)(.?)/).length != 4 ||
              '.'.split(/()()/).length > 1 ||
              ''.split(/.?/).length
            ) {
              // based on es5-shim implementation, need to rework it
              internalSplit = function internalSplit(separator, limit) {
                var string = String(requireObjectCoercible(this));
                var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

                if (!isRegExp(separator)) {
                  return nativeSplit.call(string, separator, lim);
                }

                var output = [];
                var flags =
                  (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
                var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

                var separatorCopy = new RegExp(separator.source, flags + 'g');
                var match, lastIndex, lastLength;

                while ((match = regexpExec.call(separatorCopy, string))) {
                  lastIndex = separatorCopy.lastIndex;

                  if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    if (match.length > 1 && match.index < string.length)
                      arrayPush.apply(output, match.slice(1));
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= lim) break;
                  }

                  if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
                }

                if (lastLastIndex === string.length) {
                  if (lastLength || !separatorCopy.test('')) output.push('');
                } else output.push(string.slice(lastLastIndex));

                return output.length > lim ? output.slice(0, lim) : output;
              }; // Chakra, V8
            } else if ('0'.split(undefined, 0).length) {
              internalSplit = function internalSplit(separator, limit) {
                return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
              };
            } else internalSplit = nativeSplit;

            return [
              // `String.prototype.split` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.split
              function split(separator, limit) {
                var O = requireObjectCoercible(this);
                var splitter = separator == undefined ? undefined : separator[SPLIT];
                return splitter !== undefined
                  ? splitter.call(separator, O, limit)
                  : internalSplit.call(String(O), separator, limit);
              }, // `RegExp.prototype[@@split]` method
              // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
              //
              // NOTE: This cannot be properly polyfilled in engines that don't support
              // the 'y' flag.
              function(regexp, limit) {
                var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
                if (res.done) return res.value;
                var rx = anObject(regexp);
                var S = String(this);
                var C = speciesConstructor(rx, RegExp);
                var unicodeMatching = rx.unicode;
                var flags =
                  (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
                // simulate the 'y' flag.

                var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                var p = 0;
                var q = 0;
                var A = [];

                while (q < S.length) {
                  splitter.lastIndex = SUPPORTS_Y ? q : 0;
                  var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                  var e;

                  if (
                    z === null ||
                    (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                  ) {
                    q = advanceStringIndex(S, q, unicodeMatching);
                  } else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;

                    for (var i = 1; i <= z.length - 1; i++) {
                      A.push(z[i]);
                      if (A.length === lim) return A;
                    }

                    q = p = e;
                  }
                }

                A.push(S.slice(p));
                return A;
              },
            ];
          },
          !SUPPORTS_Y
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.starts-with.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.starts-with.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringStartsWithJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          '../../node_modules/core-js/internals/to-length.js'
        );

        var notARegExp = __webpack_require__(
          /*! ../internals/not-a-regexp */
          '../../node_modules/core-js/internals/not-a-regexp.js'
        );

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          '../../node_modules/core-js/internals/require-object-coercible.js'
        );

        var correctIsRegExpLogic = __webpack_require__(
          /*! ../internals/correct-is-regexp-logic */
          '../../node_modules/core-js/internals/correct-is-regexp-logic.js'
        );

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var nativeStartsWith = ''.startsWith;
        var min = Math.min;
        var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

        var MDN_POLYFILL_BUG =
          !IS_PURE &&
          !CORRECT_IS_REGEXP_LOGIC &&
          !!(function() {
            var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
            return descriptor && !descriptor.writable;
          })(); // `String.prototype.startsWith` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.startswith

        $(
          {
            target: 'String',
            proto: true,
            forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC,
          },
          {
            startsWith: function startsWith(
              searchString
              /* , position = 0 */
            ) {
              var that = String(requireObjectCoercible(this));
              notARegExp(searchString);
              var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
              var search = String(searchString);
              return nativeStartsWith
                ? nativeStartsWith.call(that, search, index)
                : that.slice(index, index + search.length) === search;
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.strike.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.strike.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringStrikeJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.strike` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.strike

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('strike'),
          },
          {
            strike: function strike() {
              return createHTML(this, 'strike', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.sub.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.sub.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringSubJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.sub` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.sub

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('sub'),
          },
          {
            sub: function sub() {
              return createHTML(this, 'sub', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.sup.js':
      /*!****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.sup.js ***!
    \****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringSupJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var createHTML = __webpack_require__(
          /*! ../internals/create-html */
          '../../node_modules/core-js/internals/create-html.js'
        );

        var forcedStringHTMLMethod = __webpack_require__(
          /*! ../internals/forced-string-html-method */
          '../../node_modules/core-js/internals/forced-string-html-method.js'
        ); // `String.prototype.sup` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.sup

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringHTMLMethod('sup'),
          },
          {
            sup: function sup() {
              return createHTML(this, 'sup', '', '');
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.string.trim.js':
      /*!*****************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.string.trim.js ***!
    \*****************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsStringTrimJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var $trim = __webpack_require__(
          /*! ../internals/string-trim */
          '../../node_modules/core-js/internals/string-trim.js'
        ).trim;

        var forcedStringTrimMethod = __webpack_require__(
          /*! ../internals/forced-string-trim-method */
          '../../node_modules/core-js/internals/forced-string-trim-method.js'
        ); // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringTrimMethod('trim'),
          },
          {
            trim: function trim() {
              return $trim(this);
            },
          }
        );
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.async-iterator.js':
      /*!***************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.async-iterator.js ***!
    \***************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolAsyncIteratorJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.asyncIterator` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.asynciterator

        defineWellKnownSymbol('asyncIterator');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.description.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.description.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolDescriptionJs(module, exports, __webpack_require__) {
        'use strict'; // `Symbol.prototype.description` getter
        // https://tc39.github.io/ecma262/#sec-symbol.prototype.description

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        ).f;

        var copyConstructorProperties = __webpack_require__(
          /*! ../internals/copy-constructor-properties */
          '../../node_modules/core-js/internals/copy-constructor-properties.js'
        );

        var NativeSymbol = global.Symbol;

        if (
          DESCRIPTORS &&
          typeof NativeSymbol == 'function' &&
          (!('description' in NativeSymbol.prototype) || // Safari 12 bug
            NativeSymbol().description !== undefined)
        ) {
          var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

          var SymbolWrapper = function Symbol() {
            var description =
              arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
            var result =
              this instanceof SymbolWrapper
                ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
                : description === undefined
                ? NativeSymbol()
                : NativeSymbol(description);
            if (description === '') EmptyStringDescriptionStore[result] = true;
            return result;
          };

          copyConstructorProperties(SymbolWrapper, NativeSymbol);
          var symbolPrototype = (SymbolWrapper.prototype = NativeSymbol.prototype);
          symbolPrototype.constructor = SymbolWrapper;
          var symbolToString = symbolPrototype.toString;

          var _native = String(NativeSymbol('test')) == 'Symbol(test)';

          var regexp = /^Symbol\((.*)\)[^)]+$/;
          defineProperty(symbolPrototype, 'description', {
            configurable: true,
            get: function description() {
              var symbol = isObject(this) ? this.valueOf() : this;
              var string = symbolToString.call(symbol);
              if (has(EmptyStringDescriptionStore, symbol)) return '';
              var desc = _native ? string.slice(7, -1) : string.replace(regexp, '$1');
              return desc === '' ? undefined : desc;
            },
          });
          $(
            {
              global: true,
              forced: true,
            },
            {
              Symbol: SymbolWrapper,
            }
          );
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.has-instance.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.has-instance.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolHasInstanceJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.hasInstance` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.hasinstance

        defineWellKnownSymbol('hasInstance');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.is-concat-spreadable.js':
      /*!*********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.is-concat-spreadable.js ***!
    \*********************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolIsConcatSpreadableJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.isConcatSpreadable` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable

        defineWellKnownSymbol('isConcatSpreadable');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.iterator.js':
      /*!*********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.iterator.js ***!
    \*********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolIteratorJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.iterator` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.iterator

        defineWellKnownSymbol('iterator');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.js':
      /*!************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.js ***!
    \************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolJs(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          '../../node_modules/core-js/internals/export.js'
        );

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          '../../node_modules/core-js/internals/get-built-in.js'
        );

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          '../../node_modules/core-js/internals/is-pure.js'
        );

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          '../../node_modules/core-js/internals/descriptors.js'
        );

        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */
          '../../node_modules/core-js/internals/native-symbol.js'
        );

        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */
          '../../node_modules/core-js/internals/use-symbol-as-uid.js'
        );

        var fails = __webpack_require__(
          /*! ../internals/fails */
          '../../node_modules/core-js/internals/fails.js'
        );

        var has = __webpack_require__(
          /*! ../internals/has */
          '../../node_modules/core-js/internals/has.js'
        );

        var isArray = __webpack_require__(
          /*! ../internals/is-array */
          '../../node_modules/core-js/internals/is-array.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          '../../node_modules/core-js/internals/an-object.js'
        );

        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          '../../node_modules/core-js/internals/to-object.js'
        );

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          '../../node_modules/core-js/internals/to-indexed-object.js'
        );

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          '../../node_modules/core-js/internals/to-primitive.js'
        );

        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          '../../node_modules/core-js/internals/create-property-descriptor.js'
        );

        var nativeObjectCreate = __webpack_require__(
          /*! ../internals/object-create */
          '../../node_modules/core-js/internals/object-create.js'
        );

        var objectKeys = __webpack_require__(
          /*! ../internals/object-keys */
          '../../node_modules/core-js/internals/object-keys.js'
        );

        var getOwnPropertyNamesModule = __webpack_require__(
          /*! ../internals/object-get-own-property-names */
          '../../node_modules/core-js/internals/object-get-own-property-names.js'
        );

        var getOwnPropertyNamesExternal = __webpack_require__(
          /*! ../internals/object-get-own-property-names-external */
          '../../node_modules/core-js/internals/object-get-own-property-names-external.js'
        );

        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */
          '../../node_modules/core-js/internals/object-get-own-property-symbols.js'
        );

        var getOwnPropertyDescriptorModule = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          '../../node_modules/core-js/internals/object-get-own-property-descriptor.js'
        );

        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          '../../node_modules/core-js/internals/object-define-property.js'
        );

        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */
          '../../node_modules/core-js/internals/object-property-is-enumerable.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var redefine = __webpack_require__(
          /*! ../internals/redefine */
          '../../node_modules/core-js/internals/redefine.js'
        );

        var shared = __webpack_require__(
          /*! ../internals/shared */
          '../../node_modules/core-js/internals/shared.js'
        );

        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */
          '../../node_modules/core-js/internals/shared-key.js'
        );

        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          '../../node_modules/core-js/internals/hidden-keys.js'
        );

        var uid = __webpack_require__(
          /*! ../internals/uid */
          '../../node_modules/core-js/internals/uid.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var wrappedWellKnownSymbolModule = __webpack_require__(
          /*! ../internals/wrapped-well-known-symbol */
          '../../node_modules/core-js/internals/wrapped-well-known-symbol.js'
        );

        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        );

        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          '../../node_modules/core-js/internals/set-to-string-tag.js'
        );

        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        );

        var $forEach = __webpack_require__(
          /*! ../internals/array-iteration */
          '../../node_modules/core-js/internals/array-iteration.js'
        ).forEach;

        var HIDDEN = sharedKey('hidden');
        var SYMBOL = 'Symbol';
        var PROTOTYPE = 'prototype';
        var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(SYMBOL);
        var ObjectPrototype = Object[PROTOTYPE];
        var $Symbol = global.Symbol;
        var $stringify = getBuiltIn('JSON', 'stringify');
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
        var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
        var AllSymbols = shared('symbols');
        var ObjectPrototypeSymbols = shared('op-symbols');
        var StringToSymbolRegistry = shared('string-to-symbol-registry');
        var SymbolToStringRegistry = shared('symbol-to-string-registry');
        var WellKnownSymbolsStore = shared('wks');
        var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

        var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

        var setSymbolDescriptor =
          DESCRIPTORS &&
          fails(function() {
            return (
              nativeObjectCreate(
                nativeDefineProperty({}, 'a', {
                  get: function get() {
                    return nativeDefineProperty(this, 'a', {
                      value: 7,
                    }).a;
                  },
                })
              ).a != 7
            );
          })
            ? function(O, P, Attributes) {
                var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
                if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
                nativeDefineProperty(O, P, Attributes);

                if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
                  nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
                }
              }
            : nativeDefineProperty;

        var wrap = function wrap(tag, description) {
          var symbol = (AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]));
          setInternalState(symbol, {
            type: SYMBOL,
            tag: tag,
            description: description,
          });
          if (!DESCRIPTORS) symbol.description = description;
          return symbol;
        };

        var isSymbol =
          NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol'
            ? function(it) {
                return typeof it == 'symbol';
              }
            : function(it) {
                return Object(it) instanceof $Symbol;
              };

        var $defineProperty = function defineProperty(O, P, Attributes) {
          if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
          anObject(O);
          var key = toPrimitive(P, true);
          anObject(Attributes);

          if (has(AllSymbols, key)) {
            if (!Attributes.enumerable) {
              if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
              O[HIDDEN][key] = true;
            } else {
              if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
              Attributes = nativeObjectCreate(Attributes, {
                enumerable: createPropertyDescriptor(0, false),
              });
            }

            return setSymbolDescriptor(O, key, Attributes);
          }

          return nativeDefineProperty(O, key, Attributes);
        };

        var $defineProperties = function defineProperties(O, Properties) {
          anObject(O);
          var properties = toIndexedObject(Properties);
          var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
          $forEach(keys, function(key) {
            if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key))
              $defineProperty(O, key, properties[key]);
          });
          return O;
        };

        var $create = function create(O, Properties) {
          return Properties === undefined
            ? nativeObjectCreate(O)
            : $defineProperties(nativeObjectCreate(O), Properties);
        };

        var $propertyIsEnumerable = function propertyIsEnumerable(V) {
          var P = toPrimitive(V, true);
          var enumerable = nativePropertyIsEnumerable.call(this, P);
          if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
          return enumerable || !has(this, P) || !has(AllSymbols, P) || (has(this, HIDDEN) && this[HIDDEN][P])
            ? enumerable
            : true;
        };

        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
          var it = toIndexedObject(O);
          var key = toPrimitive(P, true);
          if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
          var descriptor = nativeGetOwnPropertyDescriptor(it, key);

          if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
            descriptor.enumerable = true;
          }

          return descriptor;
        };

        var $getOwnPropertyNames = function getOwnPropertyNames(O) {
          var names = nativeGetOwnPropertyNames(toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
          });
          return result;
        };

        var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
          var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
          var names = nativeGetOwnPropertyNames(
            IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O)
          );
          var result = [];
          $forEach(names, function(key) {
            if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
              result.push(AllSymbols[key]);
            }
          });
          return result;
        }; // `Symbol` constructor
        // https://tc39.github.io/ecma262/#sec-symbol-constructor

        if (!NATIVE_SYMBOL) {
          $Symbol = function Symbol() {
            if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
            var description =
              !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
            var tag = uid(description);

            var setter = function setter(value) {
              if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
              setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
            };

            if (DESCRIPTORS && USE_SETTER)
              setSymbolDescriptor(ObjectPrototype, tag, {
                configurable: true,
                set: setter,
              });
            return wrap(tag, description);
          };

          redefine($Symbol[PROTOTYPE], 'toString', function toString() {
            return getInternalState(this).tag;
          });
          propertyIsEnumerableModule.f = $propertyIsEnumerable;
          definePropertyModule.f = $defineProperty;
          getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
          getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
          getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

          if (DESCRIPTORS) {
            // https://github.com/tc39/proposal-Symbol-description
            nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
              configurable: true,
              get: function description() {
                return getInternalState(this).description;
              },
            });

            if (!IS_PURE) {
              redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
                unsafe: true,
              });
            }
          }
        }

        if (!USE_SYMBOL_AS_UID) {
          wrappedWellKnownSymbolModule.f = function(name) {
            return wrap(wellKnownSymbol(name), name);
          };
        }

        $(
          {
            global: true,
            wrap: true,
            forced: !NATIVE_SYMBOL,
            sham: !NATIVE_SYMBOL,
          },
          {
            Symbol: $Symbol,
          }
        );
        $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
          defineWellKnownSymbol(name);
        });
        $(
          {
            target: SYMBOL,
            stat: true,
            forced: !NATIVE_SYMBOL,
          },
          {
            // `Symbol.for` method
            // https://tc39.github.io/ecma262/#sec-symbol.for
            for: function _for(key) {
              var string = String(key);
              if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
              var symbol = $Symbol(string);
              StringToSymbolRegistry[string] = symbol;
              SymbolToStringRegistry[symbol] = string;
              return symbol;
            },
            // `Symbol.keyFor` method
            // https://tc39.github.io/ecma262/#sec-symbol.keyfor
            keyFor: function keyFor(sym) {
              if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
              if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
            },
            useSetter: function useSetter() {
              USE_SETTER = true;
            },
            useSimple: function useSimple() {
              USE_SETTER = false;
            },
          }
        );
        $(
          {
            target: 'Object',
            stat: true,
            forced: !NATIVE_SYMBOL,
            sham: !DESCRIPTORS,
          },
          {
            // `Object.create` method
            // https://tc39.github.io/ecma262/#sec-object.create
            create: $create,
            // `Object.defineProperty` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperty
            defineProperty: $defineProperty,
            // `Object.defineProperties` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperties
            defineProperties: $defineProperties,
            // `Object.getOwnPropertyDescriptor` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          }
        );
        $(
          {
            target: 'Object',
            stat: true,
            forced: !NATIVE_SYMBOL,
          },
          {
            // `Object.getOwnPropertyNames` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
            getOwnPropertyNames: $getOwnPropertyNames,
            // `Object.getOwnPropertySymbols` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
            getOwnPropertySymbols: $getOwnPropertySymbols,
          }
        ); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443

        $(
          {
            target: 'Object',
            stat: true,
            forced: fails(function() {
              getOwnPropertySymbolsModule.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
              return getOwnPropertySymbolsModule.f(toObject(it));
            },
          }
        ); // `JSON.stringify` method behavior with symbols
        // https://tc39.github.io/ecma262/#sec-json.stringify

        if ($stringify) {
          var FORCED_JSON_STRINGIFY =
            !NATIVE_SYMBOL ||
            fails(function() {
              var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

              return (
                $stringify([symbol]) != '[null]' || // WebKit converts symbol values to JSON as null
                $stringify({
                  a: symbol,
                }) != '{}' || // V8 throws on boxed symbols
                $stringify(Object(symbol)) != '{}'
              );
            });
          $(
            {
              target: 'JSON',
              stat: true,
              forced: FORCED_JSON_STRINGIFY,
            },
            {
              // eslint-disable-next-line no-unused-vars
              stringify: function stringify(it, replacer, space) {
                var args = [it];
                var index = 1;
                var $replacer;

                while (arguments.length > index) {
                  args.push(arguments[index++]);
                }

                $replacer = replacer;
                if ((!isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined

                if (!isArray(replacer))
                  replacer = function replacer(key, value) {
                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                  };
                args[1] = replacer;
                return $stringify.apply(null, args);
              },
            }
          );
        } // `Symbol.prototype[@@toPrimitive]` method
        // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive

        if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
          createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        } // `Symbol.prototype[@@toStringTag]` property
        // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag

        setToStringTag($Symbol, SYMBOL);
        hiddenKeys[HIDDEN] = true;
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.match-all.js':
      /*!**********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.match-all.js ***!
    \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolMatchAllJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.matchAll` well-known symbol

        defineWellKnownSymbol('matchAll');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.match.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.match.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolMatchJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.match` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.match

        defineWellKnownSymbol('match');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.replace.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.replace.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolReplaceJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.replace` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.replace

        defineWellKnownSymbol('replace');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.search.js':
      /*!*******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.search.js ***!
    \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolSearchJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.search` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.search

        defineWellKnownSymbol('search');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.species.js':
      /*!********************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.species.js ***!
    \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolSpeciesJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.species` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.species

        defineWellKnownSymbol('species');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.split.js':
      /*!******************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.split.js ***!
    \******************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolSplitJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.split` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.split

        defineWellKnownSymbol('split');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.to-primitive.js':
      /*!*************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.to-primitive.js ***!
    \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolToPrimitiveJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.toPrimitive` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.toprimitive

        defineWellKnownSymbol('toPrimitive');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.to-string-tag.js':
      /*!**************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
    \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolToStringTagJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.toStringTag` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.tostringtag

        defineWellKnownSymbol('toStringTag');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.symbol.unscopables.js':
      /*!************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.symbol.unscopables.js ***!
    \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsSymbolUnscopablesJs(module, exports, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(
          /*! ../internals/define-well-known-symbol */
          '../../node_modules/core-js/internals/define-well-known-symbol.js'
        ); // `Symbol.unscopables` well-known symbol
        // https://tc39.github.io/ecma262/#sec-symbol.unscopables

        defineWellKnownSymbol('unscopables');
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/es.weak-map.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/es.weak-map.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesEsWeakMapJs(module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */
          '../../node_modules/core-js/internals/redefine-all.js'
        );

        var InternalMetadataModule = __webpack_require__(
          /*! ../internals/internal-metadata */
          '../../node_modules/core-js/internals/internal-metadata.js'
        );

        var collection = __webpack_require__(
          /*! ../internals/collection */
          '../../node_modules/core-js/internals/collection.js'
        );

        var collectionWeak = __webpack_require__(
          /*! ../internals/collection-weak */
          '../../node_modules/core-js/internals/collection-weak.js'
        );

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          '../../node_modules/core-js/internals/is-object.js'
        );

        var enforceIternalState = __webpack_require__(
          /*! ../internals/internal-state */
          '../../node_modules/core-js/internals/internal-state.js'
        ).enforce;

        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/native-weak-map */
          '../../node_modules/core-js/internals/native-weak-map.js'
        );

        var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
        var isExtensible = Object.isExtensible;
        var InternalWeakMap;

        var wrapper = function wrapper(init) {
          return function WeakMap() {
            return init(this, arguments.length ? arguments[0] : undefined);
          };
        }; // `WeakMap` constructor
        // https://tc39.github.io/ecma262/#sec-weakmap-constructor

        var $WeakMap = (module.exports = collection('WeakMap', wrapper, collectionWeak)); // IE11 WeakMap frozen keys fix
        // We can't use feature detection because it crash some old IE builds
        // https://github.com/zloirock/core-js/issues/485

        if (NATIVE_WEAK_MAP && IS_IE11) {
          InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
          InternalMetadataModule.REQUIRED = true;
          var WeakMapPrototype = $WeakMap.prototype;
          var nativeDelete = WeakMapPrototype['delete'];
          var nativeHas = WeakMapPrototype.has;
          var nativeGet = WeakMapPrototype.get;
          var nativeSet = WeakMapPrototype.set;
          redefineAll(WeakMapPrototype, {
            delete: function _delete(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeDelete.call(this, key) || state.frozen['delete'](key);
              }

              return nativeDelete.call(this, key);
            },
            has: function has(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) || state.frozen.has(key);
              }

              return nativeHas.call(this, key);
            },
            get: function get(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
              }

              return nativeGet.call(this, key);
            },
            set: function set(key, value) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
              } else nativeSet.call(this, key, value);

              return this;
            },
          });
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/web.dom-collections.for-each.js':
      /*!*******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
    \*******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesWebDomCollectionsForEachJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var DOMIterables = __webpack_require__(
          /*! ../internals/dom-iterables */
          '../../node_modules/core-js/internals/dom-iterables.js'
        );

        var forEach = __webpack_require__(
          /*! ../internals/array-for-each */
          '../../node_modules/core-js/internals/array-for-each.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

          if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
            try {
              createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
            } catch (error) {
              CollectionPrototype.forEach = forEach;
            }
        }
        /***/
      },

    /***/
    '../../node_modules/core-js/modules/web.dom-collections.iterator.js':
      /*!*******************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
    \*******************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesCoreJsModulesWebDomCollectionsIteratorJs(module, exports, __webpack_require__) {
        var global = __webpack_require__(
          /*! ../internals/global */
          '../../node_modules/core-js/internals/global.js'
        );

        var DOMIterables = __webpack_require__(
          /*! ../internals/dom-iterables */
          '../../node_modules/core-js/internals/dom-iterables.js'
        );

        var ArrayIteratorMethods = __webpack_require__(
          /*! ../modules/es.array.iterator */
          '../../node_modules/core-js/modules/es.array.iterator.js'
        );

        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          '../../node_modules/core-js/internals/create-non-enumerable-property.js'
        );

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          '../../node_modules/core-js/internals/well-known-symbol.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var ArrayValues = ArrayIteratorMethods.values;

        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;

          if (CollectionPrototype) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[ITERATOR] !== ArrayValues)
              try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
              } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues;
              }

            if (!CollectionPrototype[TO_STRING_TAG]) {
              createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
            }

            if (DOMIterables[COLLECTION_NAME])
              for (var METHOD_NAME in ArrayIteratorMethods) {
                // some Chrome versions have non-configurable methods on DOMTokenList
                if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                  try {
                    createNonEnumerableProperty(
                      CollectionPrototype,
                      METHOD_NAME,
                      ArrayIteratorMethods[METHOD_NAME]
                    );
                  } catch (error) {
                    CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                  }
              }
          }
        }
        /***/
      },

    /***/
    '../../node_modules/regenerator-runtime/runtime.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/regenerator-runtime/runtime.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesRegeneratorRuntimeRuntimeJs(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var runtime = (function(exports) {
          'use strict';

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.

          var $Symbol = typeof Symbol === 'function' ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || '@@iterator';
          var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
          var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.

            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }

          exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.

          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: 'normal',
                arg: fn.call(obj, arg),
              };
            } catch (err) {
              return {
                type: 'throw',
                arg: err,
              };
            }
          }

          var GenStateSuspendedStart = 'suspendedStart';
          var GenStateSuspendedYield = 'suspendedYield';
          var GenStateExecuting = 'executing';
          var GenStateCompleted = 'completed'; // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.

          var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.

          function Generator() {}

          function GeneratorFunction() {}

          function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.

          var IteratorPrototype = {};

          IteratorPrototype[iteratorSymbol] = function() {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
            IteratorPrototype
          ));
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = 'GeneratorFunction'; // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.

          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function(method) {
              prototype[method] = function(arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === 'function' && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === 'GeneratorFunction'
              : false;
          };

          exports.mark = function(genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;

              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = 'GeneratorFunction';
              }
            }

            genFun.prototype = Object.create(Gp);
            return genFun;
          }; // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.

          exports.awrap = function(arg) {
            return {
              __await: arg,
            };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);

              if (record.type === 'throw') {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;

                if (value && typeof value === 'object' && hasOwn.call(value, '__await')) {
                  return Promise.resolve(value.__await).then(
                    function(value) {
                      invoke('next', value, resolve, reject);
                    },
                    function(err) {
                      invoke('throw', err, resolve, reject);
                    }
                  );
                }

                return Promise.resolve(value).then(
                  function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke('throw', error, resolve, reject);
                  }
                );
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function(resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise = // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            } // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).

            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);

          AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
          };

          exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.

          exports.async = function(innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function(result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error('Generator is already running');
              }

              if (state === GenStateCompleted) {
                if (method === 'throw') {
                  throw arg;
                } // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume

                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;

                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);

                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === 'next') {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === 'throw') {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === 'return') {
                  context.abrupt('return', context.arg);
                }

                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);

                if (record.type === 'normal') {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === 'throw') {
                  state = GenStateCompleted; // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.

                  context.method = 'throw';
                  context.arg = record.arg;
                }
              }
            };
          } // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.

          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];

            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === 'throw') {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator['return']) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = 'return';
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === 'throw') {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = 'throw';
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === 'throw') {
              context.method = 'throw';
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = 'throw';
              context.arg = new TypeError('iterator result is not an object');
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

              context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.

              if (context.method !== 'return') {
                context.method = 'next';
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            } // The delegate iterator is finished, so forget it and continue with
            // the outer generator.

            context.delegate = null;
            return ContinueSentinel;
          } // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.

          defineIteratorMethods(Gp);
          Gp[toStringTagSymbol] = 'Generator'; // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.

          Gp[iteratorSymbol] = function() {
            return this;
          };

          Gp.toString = function() {
            return '[object Generator]';
          };

          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0],
            };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = 'normal';
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [
              {
                tryLoc: 'root',
              },
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function(object) {
            var keys = [];

            for (var key in object) {
              keys.push(key);
            }

            keys.reverse(); // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.

            return function next() {
              while (keys.length) {
                var key = keys.pop();

                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              } // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.

              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];

              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === 'function') {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;
                    return next;
                  };

                return (next.next = next);
              }
            } // Return an iterator with no values.

            return {
              next: doneResult,
            };
          }

          exports.values = values;

          function doneResult() {
            return {
              value: undefined,
              done: true,
            };
          }

          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0; // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.

              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;
              this.method = 'next';
              this.arg = undefined;
              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === 't' && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;

              if (rootRecord.type === 'throw') {
                throw rootRecord.arg;
              }

              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;

              function handle(loc, caught) {
                record.type = 'throw';
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = 'next';
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === 'root') {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle('end');
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc');
                  var hasFinally = hasOwn.call(entry, 'finallyLoc');

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error('try statement without catch or finally');
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, 'finallyLoc') &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === 'break' || type === 'continue') &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = 'next';
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if (record.type === 'throw') {
                throw record.arg;
              }

              if (record.type === 'break' || record.type === 'continue') {
                this.next = record.arg;
              } else if (record.type === 'return') {
                this.rval = this.arg = record.arg;
                this.method = 'return';
                this.next = 'end';
              } else if (record.type === 'normal' && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;

                  if (record.type === 'throw') {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }

                  return thrown;
                }
              } // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.

              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === 'next') {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          }; // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.

          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          true ? module.exports : undefined
        );

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          Function('r', 'regeneratorRuntime = r')(runtime);
        }
        /***/
      },

    /***/
    '../../node_modules/zone.js/dist/task-tracking.js':
      /*!*************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/zone.js/dist/task-tracking.js ***!
    \*************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesZoneJsDistTaskTrackingJs(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * @license Angular v0.10.2
         * (c) 2010-2019 Google LLC. https://angular.io/
         * License: MIT
         */

        (function(factory) {
          true
            ? !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            : undefined;
        })(function() {
          'use strict';
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          /**
           * A `TaskTrackingZoneSpec` allows one to track all outstanding Tasks.
           *
           * This is useful in tests. For example to see which tasks are preventing a test from completing
           * or an automated way of releasing all of the event listeners at the end of the test.
           */

          var TaskTrackingZoneSpec =
            /** @class */
            (function() {
              function TaskTrackingZoneSpec() {
                this.name = 'TaskTrackingZone';
                this.microTasks = [];
                this.macroTasks = [];
                this.eventTasks = [];
                this.properties = {
                  TaskTrackingZone: this,
                };
              }

              TaskTrackingZoneSpec.get = function() {
                return Zone.current.get('TaskTrackingZone');
              };

              TaskTrackingZoneSpec.prototype.getTasksFor = function(type) {
                switch (type) {
                  case 'microTask':
                    return this.microTasks;

                  case 'macroTask':
                    return this.macroTasks;

                  case 'eventTask':
                    return this.eventTasks;
                }

                throw new Error('Unknown task format: ' + type);
              };

              TaskTrackingZoneSpec.prototype.onScheduleTask = function(
                parentZoneDelegate,
                currentZone,
                targetZone,
                task
              ) {
                task['creationLocation'] = new Error("Task '" + task.type + "' from '" + task.source + "'.");
                var tasks = this.getTasksFor(task.type);
                tasks.push(task);
                return parentZoneDelegate.scheduleTask(targetZone, task);
              };

              TaskTrackingZoneSpec.prototype.onCancelTask = function(
                parentZoneDelegate,
                currentZone,
                targetZone,
                task
              ) {
                var tasks = this.getTasksFor(task.type);

                for (var i = 0; i < tasks.length; i++) {
                  if (tasks[i] == task) {
                    tasks.splice(i, 1);
                    break;
                  }
                }

                return parentZoneDelegate.cancelTask(targetZone, task);
              };

              TaskTrackingZoneSpec.prototype.onInvokeTask = function(
                parentZoneDelegate,
                currentZone,
                targetZone,
                task,
                applyThis,
                applyArgs
              ) {
                if (task.type === 'eventTask')
                  return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
                var tasks = this.getTasksFor(task.type);

                for (var i = 0; i < tasks.length; i++) {
                  if (tasks[i] == task) {
                    tasks.splice(i, 1);
                    break;
                  }
                }

                return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
              };

              TaskTrackingZoneSpec.prototype.clearEvents = function() {
                while (this.eventTasks.length) {
                  Zone.current.cancelTask(this.eventTasks[0]);
                }
              };

              return TaskTrackingZoneSpec;
            })(); // Export the class so that new instances can be created with proper
          // constructor params.

          Zone['TaskTrackingZoneSpec'] = TaskTrackingZoneSpec;
        });
        /***/
      },

    /***/
    '../../node_modules/zone.js/dist/zone-evergreen.js':
      /*!**************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/zone.js/dist/zone-evergreen.js ***!
    \**************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * @license Angular v0.10.2
         * (c) 2010-2019 Google LLC. https://angular.io/
         * License: MIT
         */

        (function(factory) {
          true
            ? !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            : undefined;
        })(function() {
          'use strict';
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          var Zone$1 = (function(global) {
            var performance = global['performance'];

            function mark(name) {
              performance && performance['mark'] && performance['mark'](name);
            }

            function performanceMeasure(name, label) {
              performance && performance['measure'] && performance['measure'](name, label);
            }

            mark('Zone'); // Initialize before it's accessed below.
            // __Zone_symbol_prefix global can be used to override the default zone
            // symbol prefix with a custom one if needed.

            var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

            function __symbol__(name) {
              return symbolPrefix + name;
            }

            var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

            if (global['Zone']) {
              // if global['Zone'] already exists (maybe zone.js was already loaded or
              // some other lib also registered a global object named Zone), we may need
              // to throw an error, but sometimes user may not want this error.
              // For example,
              // we have two web pages, page1 includes zone.js, page2 doesn't.
              // and the 1st time user load page1 and page2, everything work fine,
              // but when user load page2 again, error occurs because global['Zone'] already exists.
              // so we add a flag to let user choose whether to throw this error or not.
              // By default, if existing Zone is from zone.js, we will not throw the error.
              if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                throw new Error('Zone already loaded.');
              } else {
                return global['Zone'];
              }
            }

            var Zone =
              /*#__PURE__*/
              (function() {
                function Zone(parent, zoneSpec) {
                  _classCallCheck(this, Zone);

                  this._parent = parent;
                  this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                  this._properties = (zoneSpec && zoneSpec.properties) || {};
                  this._zoneDelegate = new ZoneDelegate(
                    this,
                    this._parent && this._parent._zoneDelegate,
                    zoneSpec
                  );
                }

                _createClass(
                  Zone,
                  [
                    {
                      key: 'get',
                      value: function get(key) {
                        var zone = this.getZoneWith(key);
                        if (zone) return zone._properties[key];
                      },
                    },
                    {
                      key: 'getZoneWith',
                      value: function getZoneWith(key) {
                        var current = this;

                        while (current) {
                          if (current._properties.hasOwnProperty(key)) {
                            return current;
                          }

                          current = current._parent;
                        }

                        return null;
                      },
                    },
                    {
                      key: 'fork',
                      value: function fork(zoneSpec) {
                        if (!zoneSpec) throw new Error('ZoneSpec required!');
                        return this._zoneDelegate.fork(this, zoneSpec);
                      },
                    },
                    {
                      key: 'wrap',
                      value: function wrap(callback, source) {
                        if (typeof callback !== 'function') {
                          throw new Error('Expecting function got: ' + callback);
                        }

                        var _callback = this._zoneDelegate.intercept(this, callback, source);

                        var zone = this;
                        return function() {
                          return zone.runGuarded(_callback, this, arguments, source);
                        };
                      },
                    },
                    {
                      key: 'run',
                      value: function run(callback, applyThis, applyArgs, source) {
                        _currentZoneFrame = {
                          parent: _currentZoneFrame,
                          zone: this,
                        };

                        try {
                          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                        } finally {
                          _currentZoneFrame = _currentZoneFrame.parent;
                        }
                      },
                    },
                    {
                      key: 'runGuarded',
                      value: function runGuarded(callback) {
                        var applyThis =
                          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
                        var source = arguments.length > 3 ? arguments[3] : undefined;
                        _currentZoneFrame = {
                          parent: _currentZoneFrame,
                          zone: this,
                        };

                        try {
                          try {
                            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                          } catch (error) {
                            if (this._zoneDelegate.handleError(this, error)) {
                              throw error;
                            }
                          }
                        } finally {
                          _currentZoneFrame = _currentZoneFrame.parent;
                        }
                      },
                    },
                    {
                      key: 'runTask',
                      value: function runTask(task, applyThis, applyArgs) {
                        if (task.zone != this) {
                          throw new Error(
                            'A task can only be run in the zone of creation! (Creation: ' +
                              (task.zone || NO_ZONE).name +
                              '; Execution: ' +
                              this.name +
                              ')'
                          );
                        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                        // will run in notScheduled(canceled) state, we should not try to
                        // run such kind of task but just return

                        if (
                          task.state === notScheduled &&
                          (task.type === eventTask || task.type === macroTask)
                        ) {
                          return;
                        }

                        var reEntryGuard = task.state != running;
                        reEntryGuard && task._transitionTo(running, scheduled);
                        task.runCount++;
                        var previousTask = _currentTask;
                        _currentTask = task;
                        _currentZoneFrame = {
                          parent: _currentZoneFrame,
                          zone: this,
                        };

                        try {
                          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                            task.cancelFn = undefined;
                          }

                          try {
                            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                          } catch (error) {
                            if (this._zoneDelegate.handleError(this, error)) {
                              throw error;
                            }
                          }
                        } finally {
                          // if the task's state is notScheduled or unknown, then it has already been cancelled
                          // we should not reset the state to scheduled
                          if (task.state !== notScheduled && task.state !== unknown) {
                            if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                              reEntryGuard && task._transitionTo(scheduled, running);
                            } else {
                              task.runCount = 0;

                              this._updateTaskCount(task, -1);

                              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                            }
                          }

                          _currentZoneFrame = _currentZoneFrame.parent;
                          _currentTask = previousTask;
                        }
                      },
                    },
                    {
                      key: 'scheduleTask',
                      value: function scheduleTask(task) {
                        if (task.zone && task.zone !== this) {
                          // check if the task was rescheduled, the newZone
                          // should not be the children of the original zone
                          var newZone = this;

                          while (newZone) {
                            if (newZone === task.zone) {
                              throw Error(
                                'can not reschedule task to '
                                  .concat(this.name, ' which is descendants of the original zone ')
                                  .concat(task.zone.name)
                              );
                            }

                            newZone = newZone.parent;
                          }
                        }

                        task._transitionTo(scheduling, notScheduled);

                        var zoneDelegates = [];
                        task._zoneDelegates = zoneDelegates;
                        task._zone = this;

                        try {
                          task = this._zoneDelegate.scheduleTask(this, task);
                        } catch (err) {
                          // should set task's state to unknown when scheduleTask throw error
                          // because the err may from reschedule, so the fromState maybe notScheduled
                          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?

                          this._zoneDelegate.handleError(this, err);

                          throw err;
                        }

                        if (task._zoneDelegates === zoneDelegates) {
                          // we have to check because internally the delegate can reschedule the task.
                          this._updateTaskCount(task, 1);
                        }

                        if (task.state == scheduling) {
                          task._transitionTo(scheduled, scheduling);
                        }

                        return task;
                      },
                    },
                    {
                      key: 'scheduleMicroTask',
                      value: function scheduleMicroTask(source, callback, data, customSchedule) {
                        return this.scheduleTask(
                          new ZoneTask(microTask, source, callback, data, customSchedule, undefined)
                        );
                      },
                    },
                    {
                      key: 'scheduleMacroTask',
                      value: function scheduleMacroTask(
                        source,
                        callback,
                        data,
                        customSchedule,
                        customCancel
                      ) {
                        return this.scheduleTask(
                          new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel)
                        );
                      },
                    },
                    {
                      key: 'scheduleEventTask',
                      value: function scheduleEventTask(
                        source,
                        callback,
                        data,
                        customSchedule,
                        customCancel
                      ) {
                        return this.scheduleTask(
                          new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel)
                        );
                      },
                    },
                    {
                      key: 'cancelTask',
                      value: function cancelTask(task) {
                        if (task.zone != this)
                          throw new Error(
                            'A task can only be cancelled in the zone of creation! (Creation: ' +
                              (task.zone || NO_ZONE).name +
                              '; Execution: ' +
                              this.name +
                              ')'
                          );

                        task._transitionTo(canceling, scheduled, running);

                        try {
                          this._zoneDelegate.cancelTask(this, task);
                        } catch (err) {
                          // if error occurs when cancelTask, transit the state to unknown
                          task._transitionTo(unknown, canceling);

                          this._zoneDelegate.handleError(this, err);

                          throw err;
                        }

                        this._updateTaskCount(task, -1);

                        task._transitionTo(notScheduled, canceling);

                        task.runCount = 0;
                        return task;
                      },
                    },
                    {
                      key: '_updateTaskCount',
                      value: function _updateTaskCount(task, count) {
                        var zoneDelegates = task._zoneDelegates;

                        if (count == -1) {
                          task._zoneDelegates = null;
                        }

                        for (var i = 0; i < zoneDelegates.length; i++) {
                          zoneDelegates[i]._updateTaskCount(task.type, count);
                        }
                      },
                    },
                    {
                      key: 'parent',
                      get: function get() {
                        return this._parent;
                      },
                    },
                    {
                      key: 'name',
                      get: function get() {
                        return this._name;
                      },
                    },
                  ],
                  [
                    {
                      key: 'assertZonePatched',
                      value: function assertZonePatched() {
                        if (global['Promise'] !== patches['ZoneAwarePromise']) {
                          throw new Error(
                            'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                              'has been overwritten.\n' +
                              'Most likely cause is that a Promise polyfill has been loaded ' +
                              'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                              'If you must load one, do so before loading zone.js.)'
                          );
                        }
                      },
                    },
                    {
                      key: '__load_patch',
                      // tslint:disable-next-line:require-internal-with-underscore
                      value: function __load_patch(name, fn) {
                        if (patches.hasOwnProperty(name)) {
                          if (checkDuplicate) {
                            throw Error('Already loaded patch: ' + name);
                          }
                        } else if (!global['__Zone_disable_' + name]) {
                          var perfName = 'Zone:' + name;
                          mark(perfName);
                          patches[name] = fn(global, Zone, _api);
                          performanceMeasure(perfName, perfName);
                        }
                      },
                    },
                    {
                      key: 'root',
                      get: function get() {
                        var zone = Zone.current;

                        while (zone.parent) {
                          zone = zone.parent;
                        }

                        return zone;
                      },
                    },
                    {
                      key: 'current',
                      get: function get() {
                        return _currentZoneFrame.zone;
                      },
                    },
                    {
                      key: 'currentTask',
                      get: function get() {
                        return _currentTask;
                      },
                    },
                  ]
                );

                return Zone;
              })(); // tslint:disable-next-line:require-internal-with-underscore

            Zone.__symbol__ = __symbol__;
            var DELEGATE_ZS = {
              name: '',
              onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
                return delegate.hasTask(target, hasTaskState);
              },
              onScheduleTask: function onScheduleTask(delegate, _, target, task) {
                return delegate.scheduleTask(target, task);
              },
              onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
                return delegate.invokeTask(target, task, applyThis, applyArgs);
              },
              onCancelTask: function onCancelTask(delegate, _, target, task) {
                return delegate.cancelTask(target, task);
              },
            };

            var ZoneDelegate =
              /*#__PURE__*/
              (function() {
                function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                  _classCallCheck(this, ZoneDelegate);

                  this._taskCounts = {
                    microTask: 0,
                    macroTask: 0,
                    eventTask: 0,
                  };
                  this.zone = zone;
                  this._parentDelegate = parentDelegate;
                  this._forkZS =
                    zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                  this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                  this._forkCurrZone =
                    zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                  this._interceptZS =
                    zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                  this._interceptDlgt =
                    zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                  this._interceptCurrZone =
                    zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                  this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                  this._invokeDlgt =
                    zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                  this._invokeCurrZone =
                    zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                  this._handleErrorZS =
                    zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                  this._handleErrorDlgt =
                    zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                  this._handleErrorCurrZone =
                    zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                  this._scheduleTaskZS =
                    zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                  this._scheduleTaskDlgt =
                    zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                  this._scheduleTaskCurrZone =
                    zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                  this._invokeTaskZS =
                    zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                  this._invokeTaskDlgt =
                    zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                  this._invokeTaskCurrZone =
                    zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                  this._cancelTaskZS =
                    zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                  this._cancelTaskDlgt =
                    zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                  this._cancelTaskCurrZone =
                    zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                  this._hasTaskZS = null;
                  this._hasTaskDlgt = null;
                  this._hasTaskDlgtOwner = null;
                  this._hasTaskCurrZone = null;
                  var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                  var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

                  if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;

                    if (!zoneSpec.onScheduleTask) {
                      this._scheduleTaskZS = DELEGATE_ZS;
                      this._scheduleTaskDlgt = parentDelegate;
                      this._scheduleTaskCurrZone = this.zone;
                    }

                    if (!zoneSpec.onInvokeTask) {
                      this._invokeTaskZS = DELEGATE_ZS;
                      this._invokeTaskDlgt = parentDelegate;
                      this._invokeTaskCurrZone = this.zone;
                    }

                    if (!zoneSpec.onCancelTask) {
                      this._cancelTaskZS = DELEGATE_ZS;
                      this._cancelTaskDlgt = parentDelegate;
                      this._cancelTaskCurrZone = this.zone;
                    }
                  }
                }

                _createClass(ZoneDelegate, [
                  {
                    key: 'fork',
                    value: function fork(targetZone, zoneSpec) {
                      return this._forkZS
                        ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
                        : new Zone(targetZone, zoneSpec);
                    },
                  },
                  {
                    key: 'intercept',
                    value: function intercept(targetZone, callback, source) {
                      return this._interceptZS
                        ? this._interceptZS.onIntercept(
                            this._interceptDlgt,
                            this._interceptCurrZone,
                            targetZone,
                            callback,
                            source
                          )
                        : callback;
                    },
                  },
                  {
                    key: 'invoke',
                    value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
                      return this._invokeZS
                        ? this._invokeZS.onInvoke(
                            this._invokeDlgt,
                            this._invokeCurrZone,
                            targetZone,
                            callback,
                            applyThis,
                            applyArgs,
                            source
                          )
                        : callback.apply(applyThis, applyArgs);
                    },
                  },
                  {
                    key: 'handleError',
                    value: function handleError(targetZone, error) {
                      return this._handleErrorZS
                        ? this._handleErrorZS.onHandleError(
                            this._handleErrorDlgt,
                            this._handleErrorCurrZone,
                            targetZone,
                            error
                          )
                        : true;
                    },
                  },
                  {
                    key: 'scheduleTask',
                    value: function scheduleTask(targetZone, task) {
                      var returnTask = task;

                      if (this._scheduleTaskZS) {
                        if (this._hasTaskZS) {
                          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                        } // clang-format off

                        returnTask = this._scheduleTaskZS.onScheduleTask(
                          this._scheduleTaskDlgt,
                          this._scheduleTaskCurrZone,
                          targetZone,
                          task
                        ); // clang-format on

                        if (!returnTask) returnTask = task;
                      } else {
                        if (task.scheduleFn) {
                          task.scheduleFn(task);
                        } else if (task.type == microTask) {
                          scheduleMicroTask(task);
                        } else {
                          throw new Error('Task is missing scheduleFn.');
                        }
                      }

                      return returnTask;
                    },
                  },
                  {
                    key: 'invokeTask',
                    value: function invokeTask(targetZone, task, applyThis, applyArgs) {
                      return this._invokeTaskZS
                        ? this._invokeTaskZS.onInvokeTask(
                            this._invokeTaskDlgt,
                            this._invokeTaskCurrZone,
                            targetZone,
                            task,
                            applyThis,
                            applyArgs
                          )
                        : task.callback.apply(applyThis, applyArgs);
                    },
                  },
                  {
                    key: 'cancelTask',
                    value: function cancelTask(targetZone, task) {
                      var value;

                      if (this._cancelTaskZS) {
                        value = this._cancelTaskZS.onCancelTask(
                          this._cancelTaskDlgt,
                          this._cancelTaskCurrZone,
                          targetZone,
                          task
                        );
                      } else {
                        if (!task.cancelFn) {
                          throw Error('Task is not cancelable');
                        }

                        value = task.cancelFn(task);
                      }

                      return value;
                    },
                  },
                  {
                    key: 'hasTask',
                    value: function hasTask(targetZone, isEmpty) {
                      // hasTask should not throw error so other ZoneDelegate
                      // can still trigger hasTask callback
                      try {
                        this._hasTaskZS &&
                          this._hasTaskZS.onHasTask(
                            this._hasTaskDlgt,
                            this._hasTaskCurrZone,
                            targetZone,
                            isEmpty
                          );
                      } catch (err) {
                        this.handleError(targetZone, err);
                      }
                    }, // tslint:disable-next-line:require-internal-with-underscore
                  },
                  {
                    key: '_updateTaskCount',
                    value: function _updateTaskCount(type, count) {
                      var counts = this._taskCounts;
                      var prev = counts[type];
                      var next = (counts[type] = prev + count);

                      if (next < 0) {
                        throw new Error('More tasks executed then were scheduled.');
                      }

                      if (prev == 0 || next == 0) {
                        var isEmpty = {
                          microTask: counts['microTask'] > 0,
                          macroTask: counts['macroTask'] > 0,
                          eventTask: counts['eventTask'] > 0,
                          change: type,
                        };
                        this.hasTask(this.zone, isEmpty);
                      }
                    },
                  },
                ]);

                return ZoneDelegate;
              })();

            var ZoneTask =
              /*#__PURE__*/
              (function() {
                function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
                  _classCallCheck(this, ZoneTask);

                  // tslint:disable-next-line:require-internal-with-underscore
                  this._zone = null;
                  this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

                  this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

                  this._state = 'notScheduled';
                  this.type = type;
                  this.source = source;
                  this.data = options;
                  this.scheduleFn = scheduleFn;
                  this.cancelFn = cancelFn;

                  if (!callback) {
                    throw new Error('callback is not defined');
                  }

                  this.callback = callback;
                  var self = this; // TODO: @JiaLiPassion options should have interface

                  if (type === eventTask && options && options.useG) {
                    this.invoke = ZoneTask.invokeTask;
                  } else {
                    this.invoke = function() {
                      return ZoneTask.invokeTask.call(global, self, this, arguments);
                    };
                  }
                }

                _createClass(
                  ZoneTask,
                  [
                    {
                      key: 'cancelScheduleRequest',
                      value: function cancelScheduleRequest() {
                        this._transitionTo(notScheduled, scheduling);
                      }, // tslint:disable-next-line:require-internal-with-underscore
                    },
                    {
                      key: '_transitionTo',
                      value: function _transitionTo(toState, fromState1, fromState2) {
                        if (this._state === fromState1 || this._state === fromState2) {
                          this._state = toState;

                          if (toState == notScheduled) {
                            this._zoneDelegates = null;
                          }
                        } else {
                          throw new Error(
                            ''
                              .concat(this.type, " '")
                              .concat(this.source, "': can not transition to '")
                              .concat(toState, "', expecting state '")
                              .concat(fromState1, "'")
                              .concat(fromState2 ? " or '" + fromState2 + "'" : '', ", was '")
                              .concat(this._state, "'.")
                          );
                        }
                      },
                    },
                    {
                      key: 'toString',
                      value: function toString() {
                        if (this.data && typeof this.data.handleId !== 'undefined') {
                          return this.data.handleId.toString();
                        } else {
                          return Object.prototype.toString.call(this);
                        }
                      }, // add toJSON method to prevent cyclic error when
                      // call JSON.stringify(zoneTask)
                    },
                    {
                      key: 'toJSON',
                      value: function toJSON() {
                        return {
                          type: this.type,
                          state: this.state,
                          source: this.source,
                          zone: this.zone.name,
                          runCount: this.runCount,
                        };
                      },
                    },
                    {
                      key: 'zone',
                      get: function get() {
                        return this._zone;
                      },
                    },
                    {
                      key: 'state',
                      get: function get() {
                        return this._state;
                      },
                    },
                  ],
                  [
                    {
                      key: 'invokeTask',
                      value: function invokeTask(task, target, args) {
                        if (!task) {
                          task = this;
                        }

                        _numberOfNestedTaskFrames++;

                        try {
                          task.runCount++;
                          return task.zone.runTask(task, target, args);
                        } finally {
                          if (_numberOfNestedTaskFrames == 1) {
                            drainMicroTaskQueue();
                          }

                          _numberOfNestedTaskFrames--;
                        }
                      },
                    },
                  ]
                );

                return ZoneTask;
              })(); //////////////////////////////////////////////////////
            //////////////////////////////////////////////////////
            ///  MICROTASK QUEUE
            //////////////////////////////////////////////////////
            //////////////////////////////////////////////////////

            var symbolSetTimeout = __symbol__('setTimeout');

            var symbolPromise = __symbol__('Promise');

            var symbolThen = __symbol__('then');

            var _microTaskQueue = [];
            var _isDrainingMicrotaskQueue = false;
            var nativeMicroTaskQueuePromise;

            function scheduleMicroTask(task) {
              // if we are not running in any task, and there has not been anything scheduled
              // we must bootstrap the initial task creation by manually scheduling the drain
              if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (!nativeMicroTaskQueuePromise) {
                  if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                  }
                }

                if (nativeMicroTaskQueuePromise) {
                  var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

                  if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                  }

                  nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                } else {
                  global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
              }

              task && _microTaskQueue.push(task);
            }

            function drainMicroTaskQueue() {
              if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;

                while (_microTaskQueue.length) {
                  var queue = _microTaskQueue;
                  _microTaskQueue = [];

                  for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];

                    try {
                      task.zone.runTask(task, null, null);
                    } catch (error) {
                      _api.onUnhandledError(error);
                    }
                  }
                }

                _api.microtaskDrainDone();

                _isDrainingMicrotaskQueue = false;
              }
            } //////////////////////////////////////////////////////
            //////////////////////////////////////////////////////
            ///  BOOTSTRAP
            //////////////////////////////////////////////////////
            //////////////////////////////////////////////////////

            var NO_ZONE = {
              name: 'NO ZONE',
            };
            var notScheduled = 'notScheduled',
              scheduling = 'scheduling',
              scheduled = 'scheduled',
              running = 'running',
              canceling = 'canceling',
              unknown = 'unknown';
            var microTask = 'microTask',
              macroTask = 'macroTask',
              eventTask = 'eventTask';
            var patches = {};
            var _api = {
              symbol: __symbol__,
              currentZoneFrame: function currentZoneFrame() {
                return _currentZoneFrame;
              },
              onUnhandledError: noop,
              microtaskDrainDone: noop,
              scheduleMicroTask: scheduleMicroTask,
              showUncaughtError: function showUncaughtError() {
                return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
              },
              patchEventTarget: function patchEventTarget() {
                return [];
              },
              patchOnProperties: noop,
              patchMethod: function patchMethod() {
                return noop;
              },
              bindArguments: function bindArguments() {
                return [];
              },
              patchThen: function patchThen() {
                return noop;
              },
              patchMacroTask: function patchMacroTask() {
                return noop;
              },
              setNativePromise: function setNativePromise(NativePromise) {
                // sometimes NativePromise.resolve static function
                // is not ready yet, (such as core-js/es6.promise)
                // so we need to check here.
                if (NativePromise && typeof NativePromise.resolve === 'function') {
                  nativeMicroTaskQueuePromise = NativePromise.resolve(0);
                }
              },
              patchEventPrototype: function patchEventPrototype() {
                return noop;
              },
              isIEOrEdge: function isIEOrEdge() {
                return false;
              },
              getGlobalObjects: function getGlobalObjects() {
                return undefined;
              },
              ObjectDefineProperty: function ObjectDefineProperty() {
                return noop;
              },
              ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
                return undefined;
              },
              ObjectCreate: function ObjectCreate() {
                return undefined;
              },
              ArraySlice: function ArraySlice() {
                return [];
              },
              patchClass: function patchClass() {
                return noop;
              },
              wrapWithCurrentZone: function wrapWithCurrentZone() {
                return noop;
              },
              filterProperties: function filterProperties() {
                return [];
              },
              attachOriginToPatched: function attachOriginToPatched() {
                return noop;
              },
              _redefineProperty: function _redefineProperty() {
                return noop;
              },
              patchCallbacks: function patchCallbacks() {
                return noop;
              },
            };
            var _currentZoneFrame = {
              parent: null,
              zone: new Zone(null, null),
            };
            var _currentTask = null;
            var _numberOfNestedTaskFrames = 0;

            function noop() {}

            performanceMeasure('Zone', 'Zone');
            return (global['Zone'] = Zone);
          })((typeof window !== 'undefined' && window) || (typeof self !== 'undefined' && self) || global);
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          Zone.__load_patch('ZoneAwarePromise', function(global, Zone, api) {
            var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var ObjectDefineProperty = Object.defineProperty;

            function readableObjectToString(obj) {
              if (obj && obj.toString === Object.prototype.toString) {
                var className = obj.constructor && obj.constructor.name;
                return (className ? className : '') + ': ' + JSON.stringify(obj);
              }

              return obj ? obj.toString() : Object.prototype.toString.call(obj);
            }

            var __symbol__ = api.symbol;
            var _uncaughtPromiseErrors = [];

            var symbolPromise = __symbol__('Promise');

            var symbolThen = __symbol__('then');

            var creationTrace = '__creationTrace__';

            api.onUnhandledError = function(e) {
              if (api.showUncaughtError()) {
                var rejection = e && e.rejection;

                if (rejection) {
                  console.error(
                    'Unhandled Promise rejection:',
                    rejection instanceof Error ? rejection.message : rejection,
                    '; Zone:',
                    e.zone.name,
                    '; Task:',
                    e.task && e.task.source,
                    '; Value:',
                    rejection,
                    rejection instanceof Error ? rejection.stack : undefined
                  );
                } else {
                  console.error(e);
                }
              }
            };

            api.microtaskDrainDone = function() {
              while (_uncaughtPromiseErrors.length) {
                var _loop = function _loop() {
                  var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

                  try {
                    uncaughtPromiseError.zone.runGuarded(function() {
                      throw uncaughtPromiseError;
                    });
                  } catch (error) {
                    handleUnhandledRejection(error);
                  }
                };

                while (_uncaughtPromiseErrors.length) {
                  _loop();
                }
              }
            };

            var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

            function handleUnhandledRejection(e) {
              api.onUnhandledError(e);

              try {
                var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

                if (handler && typeof handler === 'function') {
                  handler.call(this, e);
                }
              } catch (err) {}
            }

            function isThenable(value) {
              return value && value.then;
            }

            function forwardResolution(value) {
              return value;
            }

            function forwardRejection(rejection) {
              return ZoneAwarePromise.reject(rejection);
            }

            var symbolState = __symbol__('state');

            var symbolValue = __symbol__('value');

            var symbolFinally = __symbol__('finally');

            var symbolParentPromiseValue = __symbol__('parentPromiseValue');

            var symbolParentPromiseState = __symbol__('parentPromiseState');

            var source = 'Promise.then';
            var UNRESOLVED = null;
            var RESOLVED = true;
            var REJECTED = false;
            var REJECTED_NO_CATCH = 0;

            function makeResolver(promise, state) {
              return function(v) {
                try {
                  resolvePromise(promise, state, v);
                } catch (err) {
                  resolvePromise(promise, false, err);
                } // Do not return value or you will break the Promise spec.
              };
            }

            var once = function once() {
              var wasCalled = false;
              return function wrapper(wrappedFunction) {
                return function() {
                  if (wasCalled) {
                    return;
                  }

                  wasCalled = true;
                  wrappedFunction.apply(null, arguments);
                };
              };
            };

            var TYPE_ERROR = 'Promise resolved with itself';

            var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution

            function resolvePromise(promise, state, value) {
              var onceWrapper = once();

              if (promise === value) {
                throw new TypeError(TYPE_ERROR);
              }

              if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                var then = null;

                try {
                  if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                  }
                } catch (err) {
                  onceWrapper(function() {
                    resolvePromise(promise, false, err);
                  })();
                  return promise;
                } // if (value instanceof ZoneAwarePromise) {

                if (
                  state !== REJECTED &&
                  value instanceof ZoneAwarePromise &&
                  value.hasOwnProperty(symbolState) &&
                  value.hasOwnProperty(symbolValue) &&
                  value[symbolState] !== UNRESOLVED
                ) {
                  clearRejectedNoCatch(value);
                  resolvePromise(promise, value[symbolState], value[symbolValue]);
                } else if (state !== REJECTED && typeof then === 'function') {
                  try {
                    then.call(
                      value,
                      onceWrapper(makeResolver(promise, state)),
                      onceWrapper(makeResolver(promise, false))
                    );
                  } catch (err) {
                    onceWrapper(function() {
                      resolvePromise(promise, false, err);
                    })();
                  }
                } else {
                  promise[symbolState] = state;
                  var queue = promise[symbolValue];
                  promise[symbolValue] = value;

                  if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                      // the state is resolved, should ignore the value
                      // and use parent promise value
                      promise[symbolState] = promise[symbolParentPromiseState];
                      promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                  } // record task information in value when error occurs, so we can
                  // do some additional work such as render longStackTrace

                  if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace =
                      Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                    if (trace) {
                      // only keep the long stack trace into error when in longStackTraceZone
                      ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                        configurable: true,
                        enumerable: false,
                        writable: true,
                        value: trace,
                      });
                    }
                  }

                  for (var i = 0; i < queue.length; ) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                  }

                  if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;

                    try {
                      // try to print more readable error log
                      throw new Error(
                        'Uncaught (in promise): ' +
                          readableObjectToString(value) +
                          (value && value.stack ? '\n' + value.stack : '')
                      );
                    } catch (err) {
                      var error = err;
                      error.rejection = value;
                      error.promise = promise;
                      error.zone = Zone.current;
                      error.task = Zone.currentTask;

                      _uncaughtPromiseErrors.push(error);

                      api.scheduleMicroTask(); // to make sure that it is running
                    }
                  }
                }
              } // Resolving an already resolved promise is a noop.

              return promise;
            }

            var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

            function clearRejectedNoCatch(promise) {
              if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                  var handler = Zone[REJECTION_HANDLED_HANDLER];

                  if (handler && typeof handler === 'function') {
                    handler.call(this, {
                      rejection: promise[symbolValue],
                      promise: promise,
                    });
                  }
                } catch (err) {}

                promise[symbolState] = REJECTED;

                for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                  if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                  }
                }
              }
            }

            function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
              clearRejectedNoCatch(promise);
              var promiseState = promise[symbolState];
              var delegate = promiseState
                ? typeof onFulfilled === 'function'
                  ? onFulfilled
                  : forwardResolution
                : typeof onRejected === 'function'
                ? onRejected
                : forwardRejection;
              zone.scheduleMicroTask(
                source,
                function() {
                  try {
                    var parentPromiseValue = promise[symbolValue];
                    var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

                    if (isFinallyPromise) {
                      // if the promise is generated from finally call, keep parent promise's state and value
                      chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                      chainPromise[symbolParentPromiseState] = promiseState;
                    } // should not pass value to finally callback

                    var value = zone.run(
                      delegate,
                      undefined,
                      isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution
                        ? []
                        : [parentPromiseValue]
                    );
                    resolvePromise(chainPromise, true, value);
                  } catch (error) {
                    // if error occurs, should always return this error
                    resolvePromise(chainPromise, false, error);
                  }
                },
                chainPromise
              );
            }

            var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

            var ZoneAwarePromise =
              /*#__PURE__*/
              (function() {
                function ZoneAwarePromise(executor) {
                  _classCallCheck(this, ZoneAwarePromise);

                  var promise = this;

                  if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                  }

                  promise[symbolState] = UNRESOLVED;
                  promise[symbolValue] = []; // queue;

                  try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                  } catch (error) {
                    resolvePromise(promise, false, error);
                  }
                }

                _createClass(
                  ZoneAwarePromise,
                  [
                    {
                      key: 'then',
                      value: function then(onFulfilled, onRejected) {
                        var chainPromise = new this.constructor(null);
                        var zone = Zone.current;

                        if (this[symbolState] == UNRESOLVED) {
                          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                        } else {
                          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                        }

                        return chainPromise;
                      },
                    },
                    {
                      key: 'catch',
                      value: function _catch(onRejected) {
                        return this.then(null, onRejected);
                      },
                    },
                    {
                      key: 'finally',
                      value: function _finally(onFinally) {
                        var chainPromise = new this.constructor(null);
                        chainPromise[symbolFinally] = symbolFinally;
                        var zone = Zone.current;

                        if (this[symbolState] == UNRESOLVED) {
                          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                        } else {
                          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                        }

                        return chainPromise;
                      },
                    },
                    {
                      key: Symbol.toStringTag,
                      get: function get() {
                        return 'Promise';
                      },
                    },
                  ],
                  [
                    {
                      key: 'toString',
                      value: function toString() {
                        return ZONE_AWARE_PROMISE_TO_STRING;
                      },
                    },
                    {
                      key: 'resolve',
                      value: function resolve(value) {
                        return resolvePromise(new this(null), RESOLVED, value);
                      },
                    },
                    {
                      key: 'reject',
                      value: function reject(error) {
                        return resolvePromise(new this(null), REJECTED, error);
                      },
                    },
                    {
                      key: 'race',
                      value: function race(values) {
                        var resolve;
                        var reject;
                        var promise = new this(function(res, rej) {
                          resolve = res;
                          reject = rej;
                        });

                        function onResolve(value) {
                          resolve(value);
                        }

                        function onReject(error) {
                          reject(error);
                        }

                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                          for (
                            var _iterator = values[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = true
                          ) {
                            var value = _step.value;

                            if (!isThenable(value)) {
                              value = this.resolve(value);
                            }

                            value.then(onResolve, onReject);
                          }
                        } catch (err) {
                          _didIteratorError = true;
                          _iteratorError = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion && _iterator['return'] != null) {
                              _iterator['return']();
                            }
                          } finally {
                            if (_didIteratorError) {
                              throw _iteratorError;
                            }
                          }
                        }

                        return promise;
                      },
                    },
                    {
                      key: 'all',
                      value: function all(values) {
                        return ZoneAwarePromise.allWithCallback(values);
                      },
                    },
                    {
                      key: 'allSettled',
                      value: function allSettled(values) {
                        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                        return P.allWithCallback(values, {
                          thenCallback: function thenCallback(value) {
                            return {
                              status: 'fulfilled',
                              value: value,
                            };
                          },
                          errorCallback: function errorCallback(err) {
                            return {
                              status: 'rejected',
                              reason: err,
                            };
                          },
                        });
                      },
                    },
                    {
                      key: 'allWithCallback',
                      value: function allWithCallback(values, callback) {
                        var _this = this;

                        var resolve;
                        var reject;
                        var promise = new this(function(res, rej) {
                          resolve = res;
                          reject = rej;
                        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

                        var unresolvedCount = 2;
                        var valueIndex = 0;
                        var resolvedValues = [];
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                          var _loop2 = function _loop2() {
                            var value = _step2.value;

                            if (!isThenable(value)) {
                              value = _this.resolve(value);
                            }

                            var curValueIndex = valueIndex;

                            try {
                              value.then(
                                function(value) {
                                  resolvedValues[curValueIndex] = callback
                                    ? callback.thenCallback(value)
                                    : value;
                                  unresolvedCount--;

                                  if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                  }
                                },
                                function(err) {
                                  if (!callback) {
                                    reject(err);
                                  } else {
                                    resolvedValues[curValueIndex] = callback.errorCallback(err);
                                    unresolvedCount--;

                                    if (unresolvedCount === 0) {
                                      resolve(resolvedValues);
                                    }
                                  }
                                }
                              );
                            } catch (thenErr) {
                              reject(thenErr);
                            }

                            unresolvedCount++;
                            valueIndex++;
                          };

                          for (
                            var _iterator2 = values[Symbol.iterator](), _step2;
                            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                            _iteratorNormalCompletion2 = true
                          ) {
                            _loop2();
                          } // Make the unresolvedCount zero-based again.
                        } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion2 && _iterator2['return'] != null) {
                              _iterator2['return']();
                            }
                          } finally {
                            if (_didIteratorError2) {
                              throw _iteratorError2;
                            }
                          }
                        }

                        unresolvedCount -= 2;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }

                        return promise;
                      },
                    },
                  ]
                );

                return ZoneAwarePromise;
              })(); // Protect against aggressive optimizers dropping seemingly unused properties.
            // E.g. Closure Compiler in advanced mode.

            ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
            ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
            ZoneAwarePromise['race'] = ZoneAwarePromise.race;
            ZoneAwarePromise['all'] = ZoneAwarePromise.all;
            var NativePromise = (global[symbolPromise] = global['Promise']);

            var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

            var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

            if (!desc || desc.configurable) {
              desc && delete desc.writable;
              desc && delete desc.value;

              if (!desc) {
                desc = {
                  configurable: true,
                  enumerable: true,
                };
              }

              desc.get = function() {
                // if we already set ZoneAwarePromise, use patched one
                // otherwise return native one.
                return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
              };

              desc.set = function(NewNativePromise) {
                if (NewNativePromise === ZoneAwarePromise) {
                  // if the NewNativePromise is ZoneAwarePromise
                  // save to global
                  global[ZONE_AWARE_PROMISE] = NewNativePromise;
                } else {
                  // if the NewNativePromise is not ZoneAwarePromise
                  // for example: after load zone.js, some library just
                  // set es6-promise to global, if we set it to global
                  // directly, assertZonePatched will fail and angular
                  // will not loaded, so we just set the NewNativePromise
                  // to global[symbolPromise], so the result is just like
                  // we load ES6 Promise before zone.js
                  global[symbolPromise] = NewNativePromise;

                  if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                  }

                  api.setNativePromise(NewNativePromise);
                }
              };

              ObjectDefineProperty(global, 'Promise', desc);
            }

            global['Promise'] = ZoneAwarePromise;

            var symbolThenPatched = __symbol__('thenPatched');

            function patchThen(Ctor) {
              var proto = Ctor.prototype;
              var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

              if (prop && (prop.writable === false || !prop.configurable)) {
                // check Ctor.prototype.then propertyDescriptor is writable or not
                // in meteor env, writable is false, we should ignore such case
                return;
              }

              var originalThen = proto.then; // Keep a reference to the original method.

              proto[symbolThen] = originalThen;

              Ctor.prototype.then = function(onResolve, onReject) {
                var _this2 = this;

                var wrapped = new ZoneAwarePromise(function(resolve, reject) {
                  originalThen.call(_this2, resolve, reject);
                });
                return wrapped.then(onResolve, onReject);
              };

              Ctor[symbolThenPatched] = true;
            }

            api.patchThen = patchThen;

            function zoneify(fn) {
              return function() {
                var resultPromise = fn.apply(this, arguments);

                if (resultPromise instanceof ZoneAwarePromise) {
                  return resultPromise;
                }

                var ctor = resultPromise.constructor;

                if (!ctor[symbolThenPatched]) {
                  patchThen(ctor);
                }

                return resultPromise;
              };
            }

            if (NativePromise) {
              patchThen(NativePromise);
              var fetch = global['fetch'];

              if (typeof fetch == 'function') {
                global[api.symbol('fetch')] = fetch;
                global['fetch'] = zoneify(fetch);
              }
            } // This is not part of public API, but it is useful for tests, so we expose it.

            Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
            return ZoneAwarePromise;
          });
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          /**
           * Suppress closure compiler errors about unknown 'Zone' variable
           * @fileoverview
           * @suppress {undefinedVars,globalThis,missingRequire}
           */
          /// <reference types="node"/>
          // issue #989, to reduce bundle size, use short name

          /** Object.getOwnPropertyDescriptor */

          var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          /** Object.defineProperty */

          var ObjectDefineProperty = Object.defineProperty;
          /** Object.getPrototypeOf */

          var ObjectGetPrototypeOf = Object.getPrototypeOf;
          /** Object.create */

          var ObjectCreate = Object.create;
          /** Array.prototype.slice */

          var ArraySlice = Array.prototype.slice;
          /** addEventListener string const */

          var ADD_EVENT_LISTENER_STR = 'addEventListener';
          /** removeEventListener string const */

          var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
          /** zoneSymbol addEventListener */

          var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
          /** zoneSymbol removeEventListener */

          var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
          /** true string const */

          var TRUE_STR = 'true';
          /** false string const */

          var FALSE_STR = 'false';
          /** Zone symbol prefix string const. */

          var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

          function wrapWithCurrentZone(callback, source) {
            return Zone.current.wrap(callback, source);
          }

          function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
            return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
          }

          var zoneSymbol = Zone.__symbol__;
          var isWindowExists = typeof window !== 'undefined';
          var internalWindow = isWindowExists ? window : undefined;

          var _global = (isWindowExists && internalWindow) || (typeof self === 'object' && self) || global;

          var REMOVE_ATTRIBUTE = 'removeAttribute';
          var NULL_ON_PROP_VALUE = [null];

          function bindArguments(args, source) {
            for (var i = args.length - 1; i >= 0; i--) {
              if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
              }
            }

            return args;
          }

          function patchPrototype(prototype, fnNames) {
            var source = prototype.constructor['name'];

            var _loop3 = function _loop3(i) {
              var name = fnNames[i];
              var delegate = prototype[name];

              if (delegate) {
                var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

                if (!isPropertyWritable(prototypeDesc)) {
                  return 'continue';
                }

                prototype[name] = (function(delegate) {
                  var patched = function patched() {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                  };

                  attachOriginToPatched(patched, delegate);
                  return patched;
                })(delegate);
              }
            };

            for (var i = 0; i < fnNames.length; i++) {
              var _ret = _loop3(i);

              if (_ret === 'continue') continue;
            }
          }

          function isPropertyWritable(propertyDesc) {
            if (!propertyDesc) {
              return true;
            }

            if (propertyDesc.writable === false) {
              return false;
            }

            return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
          }

          var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
          // this code.

          var isNode =
            !('nw' in _global) &&
            typeof _global.process !== 'undefined' &&
            {}.toString.call(_global.process) === '[object process]';
          var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
          // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
          // this code.

          var isMix =
            typeof _global.process !== 'undefined' &&
            {}.toString.call(_global.process) === '[object process]' &&
            !isWebWorker &&
            !!(isWindowExists && internalWindow['HTMLElement']);
          var zoneSymbolEventNames = {};

          var wrapFn = function wrapFn(event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;

            if (!event) {
              return;
            }

            var eventNameSymbol = zoneSymbolEventNames[event.type];

            if (!eventNameSymbol) {
              eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
            }

            var target = this || event.target || _global;
            var listener = target[eventNameSymbol];
            var result;

            if (isBrowser && target === internalWindow && event.type === 'error') {
              // window.onerror have different signiture
              // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
              // and onerror callback will prevent default when callback return true
              var errorEvent = event;
              result =
                listener &&
                listener.call(
                  this,
                  errorEvent.message,
                  errorEvent.filename,
                  errorEvent.lineno,
                  errorEvent.colno,
                  errorEvent.error
                );

              if (result === true) {
                event.preventDefault();
              }
            } else {
              result = listener && listener.apply(this, arguments);

              if (result != undefined && !result) {
                event.preventDefault();
              }
            }

            return result;
          };

          function patchProperty(obj, prop, prototype) {
            var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

            if (!desc && prototype) {
              // when patch window object, use prototype to check prop exist or not
              var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

              if (prototypeDesc) {
                desc = {
                  enumerable: true,
                  configurable: true,
                };
              }
            } // if the descriptor not exists or is not configurable
            // just return

            if (!desc || !desc.configurable) {
              return;
            }

            var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

            if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
              return;
            } // A property descriptor cannot have getter/setter and be writable
            // deleting the writable and value properties avoids this error:
            //
            // TypeError: property descriptors must not specify a value or be writable when a
            // getter or setter has been specified

            delete desc.writable;
            delete desc.value;
            var originalDescGet = desc.get;
            var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

            var eventName = prop.substr(2);
            var eventNameSymbol = zoneSymbolEventNames[eventName];

            if (!eventNameSymbol) {
              eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
            }

            desc.set = function(newValue) {
              // in some of windows's onproperty callback, this is undefined
              // so we need to check it
              var target = this;

              if (!target && obj === _global) {
                target = _global;
              }

              if (!target) {
                return;
              }

              var previousValue = target[eventNameSymbol];

              if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
              } // issue #978, when onload handler was added before loading zone.js
              // we should remove it with originalDescSet

              if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
              }

              if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
              } else {
                target[eventNameSymbol] = null;
              }
            }; // The getter would return undefined for unassigned properties but the default value of an
            // unassigned property is null

            desc.get = function() {
              // in some of windows's onproperty callback, this is undefined
              // so we need to check it
              var target = this;

              if (!target && obj === _global) {
                target = _global;
              }

              if (!target) {
                return null;
              }

              var listener = target[eventNameSymbol];

              if (listener) {
                return listener;
              } else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                var value = originalDescGet && originalDescGet.call(this);

                if (value) {
                  desc.set.call(this, value);

                  if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                  }

                  return value;
                }
              }

              return null;
            };

            ObjectDefineProperty(obj, prop, desc);
            obj[onPropPatchedSymbol] = true;
          }

          function patchOnProperties(obj, properties, prototype) {
            if (properties) {
              for (var i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
              }
            } else {
              var onProperties = [];

              for (var prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                  onProperties.push(prop);
                }
              }

              for (var j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
              }
            }
          }

          var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

          function patchClass(className) {
            var OriginalClass = _global[className];
            if (!OriginalClass) return; // keep original class in global

            _global[zoneSymbol(className)] = OriginalClass;

            _global[className] = function() {
              var a = bindArguments(arguments, className);

              switch (a.length) {
                case 0:
                  this[originalInstanceKey] = new OriginalClass();
                  break;

                case 1:
                  this[originalInstanceKey] = new OriginalClass(a[0]);
                  break;

                case 2:
                  this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                  break;

                case 3:
                  this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                  break;

                case 4:
                  this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                  break;

                default:
                  throw new Error('Arg list too long.');
              }
            }; // attach original delegate to patched function

            attachOriginToPatched(_global[className], OriginalClass);
            var instance = new OriginalClass(function() {});
            var prop;

            for (prop in instance) {
              // https://bugs.webkit.org/show_bug.cgi?id=44721
              if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

              (function(prop) {
                if (typeof instance[prop] === 'function') {
                  _global[className].prototype[prop] = function() {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                  };
                } else {
                  ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function set(fn) {
                      if (typeof fn === 'function') {
                        this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                        // use it in Function.prototype.toString to return
                        // the native one.

                        attachOriginToPatched(this[originalInstanceKey][prop], fn);
                      } else {
                        this[originalInstanceKey][prop] = fn;
                      }
                    },
                    get: function get() {
                      return this[originalInstanceKey][prop];
                    },
                  });
                }
              })(prop);
            }

            for (prop in OriginalClass) {
              if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
              }
            }
          }

          function copySymbolProperties(src, dest) {
            if (typeof Object.getOwnPropertySymbols !== 'function') {
              return;
            }

            var symbols = Object.getOwnPropertySymbols(src);
            symbols.forEach(function(symbol) {
              var desc = Object.getOwnPropertyDescriptor(src, symbol);
              Object.defineProperty(dest, symbol, {
                get: function get() {
                  return src[symbol];
                },
                set: function set(value) {
                  if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                  }

                  src[symbol] = value;
                },
                enumerable: desc ? desc.enumerable : true,
                configurable: desc ? desc.configurable : true,
              });
            });
          }

          var shouldCopySymbolProperties = false;

          function patchMethod(target, name, patchFn) {
            var proto = target;

            while (proto && !proto.hasOwnProperty(name)) {
              proto = ObjectGetPrototypeOf(proto);
            }

            if (!proto && target[name]) {
              // somehow we did not find it, but we can see it. This happens on IE for Window properties.
              proto = target;
            }

            var delegateName = zoneSymbol(name);
            var delegate = null;

            if (proto && !(delegate = proto[delegateName])) {
              delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
              // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

              var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

              if (isPropertyWritable(desc)) {
                var patchDelegate = patchFn(delegate, delegateName, name);

                proto[name] = function() {
                  return patchDelegate(this, arguments);
                };

                attachOriginToPatched(proto[name], delegate);

                if (shouldCopySymbolProperties) {
                  copySymbolProperties(delegate, proto[name]);
                }
              }
            }

            return delegate;
          } // TODO: @JiaLiPassion, support cancel task later if necessary

          function patchMacroTask(obj, funcName, metaCreator) {
            var setNative = null;

            function scheduleTask(task) {
              var data = task.data;

              data.args[data.cbIdx] = function() {
                task.invoke.apply(this, arguments);
              };

              setNative.apply(data.target, data.args);
              return task;
            }

            setNative = patchMethod(obj, funcName, function(delegate) {
              return function(self, args) {
                var meta = metaCreator(self, args);

                if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                  return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
                } else {
                  // cause an error by calling it directly.
                  return delegate.apply(self, args);
                }
              };
            });
          }

          function attachOriginToPatched(patched, original) {
            patched[zoneSymbol('OriginalDelegate')] = original;
          }

          var isDetectedIEOrEdge = false;
          var ieOrEdge = false;

          function isIE() {
            try {
              var ua = internalWindow.navigator.userAgent;

              if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
              }
            } catch (error) {}

            return false;
          }

          function isIEOrEdge() {
            if (isDetectedIEOrEdge) {
              return ieOrEdge;
            }

            isDetectedIEOrEdge = true;

            try {
              var ua = internalWindow.navigator.userAgent;

              if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
              }
            } catch (error) {}

            return ieOrEdge;
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
          // override Function.prototype.toString to make zone.js patched function
          // look like native function

          Zone.__load_patch('toString', function(global) {
            // patch Func.prototype.toString to let them look like native
            var originalFunctionToString = Function.prototype.toString;
            var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
            var PROMISE_SYMBOL = zoneSymbol('Promise');
            var ERROR_SYMBOL = zoneSymbol('Error');

            var newFunctionToString = function toString() {
              if (typeof this === 'function') {
                var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

                if (originalDelegate) {
                  if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                  } else {
                    return Object.prototype.toString.call(originalDelegate);
                  }
                }

                if (this === Promise) {
                  var nativePromise = global[PROMISE_SYMBOL];

                  if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                  }
                }

                if (this === Error) {
                  var nativeError = global[ERROR_SYMBOL];

                  if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                  }
                }
              }

              return originalFunctionToString.call(this);
            };

            newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
            Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

            var originalObjectToString = Object.prototype.toString;
            var PROMISE_OBJECT_TO_STRING = '[object Promise]';

            Object.prototype.toString = function() {
              if (this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
              }

              return originalObjectToString.call(this);
            };
          });
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          var passiveSupported = false;

          if (typeof window !== 'undefined') {
            try {
              var options = Object.defineProperty({}, 'passive', {
                get: function get() {
                  passiveSupported = true;
                },
              });
              window.addEventListener('test', options, options);
              window.removeEventListener('test', options, options);
            } catch (err) {
              passiveSupported = false;
            }
          } // an identifier to tell ZoneTask do not create a new invoke closure

          var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
            useG: true,
          };
          var zoneSymbolEventNames$1 = {};
          var globalSources = {};
          var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
          var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

          function patchEventTarget(_global, apis, patchOptions) {
            var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
            var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
            var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
            var REMOVE_ALL_LISTENERS_EVENT_LISTENER =
              (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
            var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
            var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
            var PREPEND_EVENT_LISTENER = 'prependListener';
            var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

            var invokeTask = function invokeTask(task, target, event) {
              // for better performance, check isRemoved which is set
              // by removeEventListener
              if (task.isRemoved) {
                return;
              }

              var delegate = task.callback;

              if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = function(event) {
                  return delegate.handleEvent(event);
                };

                task.originalDelegate = delegate;
              } // invoke static task.invoke

              task.invoke(task, target, [event]);
              var options = task.options;

              if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

                target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
              }
            }; // global shared zoneAwareCallback to handle all event callback with capture = false

            var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
              // https://github.com/angular/zone.js/issues/911, in IE, sometimes
              // event will be undefined, so we need to use window.event
              event = event || _global.event;

              if (!event) {
                return;
              } // event.target is needed for Samsung TV and SourceBuffer
              // || global is needed https://github.com/angular/zone.js/issues/190

              var target = this || event.target || _global;
              var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

              if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                  invokeTask(tasks[0], target, event);
                } else {
                  // https://github.com/angular/zone.js/issues/836
                  // copy the tasks array before invoke, to avoid
                  // the callback will remove itself or other listener
                  var copyTasks = tasks.slice();

                  for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                      break;
                    }

                    invokeTask(copyTasks[i], target, event);
                  }
                }
              }
            }; // global shared zoneAwareCallback to handle all event callback with capture = true

            var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
              // https://github.com/angular/zone.js/issues/911, in IE, sometimes
              // event will be undefined, so we need to use window.event
              event = event || _global.event;

              if (!event) {
                return;
              } // event.target is needed for Samsung TV and SourceBuffer
              // || global is needed https://github.com/angular/zone.js/issues/190

              var target = this || event.target || _global;
              var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

              if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                  invokeTask(tasks[0], target, event);
                } else {
                  // https://github.com/angular/zone.js/issues/836
                  // copy the tasks array before invoke, to avoid
                  // the callback will remove itself or other listener
                  var copyTasks = tasks.slice();

                  for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                      break;
                    }

                    invokeTask(copyTasks[i], target, event);
                  }
                }
              }
            };

            function patchEventTargetMethods(obj, patchOptions) {
              if (!obj) {
                return false;
              }

              var useGlobalCallback = true;

              if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
              }

              var validateHandler = patchOptions && patchOptions.vh;
              var checkDuplicate = true;

              if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
              }

              var returnTarget = false;

              if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
              }

              var proto = obj;

              while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = ObjectGetPrototypeOf(proto);
              }

              if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
              }

              if (!proto) {
                return false;
              }

              if (proto[zoneSymbolAddEventListener]) {
                return false;
              }

              var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
              // so we do not need to create a new object just for pass some data

              var taskData = {};
              var nativeAddEventListener = (proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER]);
              var nativeRemoveEventListener = (proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER]);
              var nativeListeners = (proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER]);
              var nativeRemoveAllListeners = (proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER]);
              var nativePrependEventListener;

              if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                  proto[patchOptions.prepend];
              }

              function checkIsPassive(task) {
                if (
                  !passiveSupported &&
                  typeof taskData.options !== 'boolean' &&
                  typeof taskData.options !== 'undefined' &&
                  taskData.options !== null
                ) {
                  // options is a non-null non-undefined object
                  // passive is not supported
                  // don't pass options as object
                  // just pass capture as a boolean
                  task.options = !!taskData.options.capture;
                  taskData.options = task.options;
                }
              }

              var customScheduleGlobal = function customScheduleGlobal(task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                  return;
                }

                checkIsPassive(task);
                return nativeAddEventListener.call(
                  taskData.target,
                  taskData.eventName,
                  taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback,
                  taskData.options
                );
              };

              var customCancelGlobal = function customCancelGlobal(task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                  var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                  var symbolEventName;

                  if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                  }

                  var existingTasks = symbolEventName && task.target[symbolEventName];

                  if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                      var existingTask = existingTasks[i];

                      if (existingTask === task) {
                        existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                        task.isRemoved = true;

                        if (existingTasks.length === 0) {
                          // all tasks for the eventName + capture have gone,
                          // remove globalZoneAwareCallback and remove the task cache from target
                          task.allRemoved = true;
                          task.target[symbolEventName] = null;
                        }

                        break;
                      }
                    }
                  }
                } // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return

                if (!task.allRemoved) {
                  return;
                }

                return nativeRemoveEventListener.call(
                  task.target,
                  task.eventName,
                  task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback,
                  task.options
                );
              };

              var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
                checkIsPassive(task);
                return nativeAddEventListener.call(
                  taskData.target,
                  taskData.eventName,
                  task.invoke,
                  taskData.options
                );
              };

              var customSchedulePrepend = function customSchedulePrepend(task) {
                return nativePrependEventListener.call(
                  taskData.target,
                  taskData.eventName,
                  task.invoke,
                  taskData.options
                );
              };

              var customCancelNonGlobal = function customCancelNonGlobal(task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
              };

              var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
              var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

              var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
                var typeOfDelegate = typeof delegate;
                return (
                  (typeOfDelegate === 'function' && task.callback === delegate) ||
                  (typeOfDelegate === 'object' && task.originalDelegate === delegate)
                );
              };

              var compare =
                patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
              var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

              var makeAddListener = function makeAddListener(
                nativeListener,
                addSource,
                customScheduleFn,
                customCancelFn
              ) {
                var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
                return function() {
                  var target = this || _global;
                  var eventName = arguments[0];

                  if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                  }

                  var delegate = arguments[1];

                  if (!delegate) {
                    return nativeListener.apply(this, arguments);
                  }

                  if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                  } // don't create the bind delegate function for handleEvent
                  // case here to improve addEventListener performance
                  // we will create the bind delegate when invoke

                  var isHandleEvent = false;

                  if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                      return nativeListener.apply(this, arguments);
                    }

                    isHandleEvent = true;
                  }

                  if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                  }

                  var options = arguments[2];

                  if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                      if (eventName === blackListedEvents[i]) {
                        return nativeListener.apply(this, arguments);
                      }
                    }
                  }

                  var capture;
                  var once = false;

                  if (options === undefined) {
                    capture = false;
                  } else if (options === true) {
                    capture = true;
                  } else if (options === false) {
                    capture = false;
                  } else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                  }

                  var zone = Zone.current;
                  var symbolEventNames = zoneSymbolEventNames$1[eventName];
                  var symbolEventName;

                  if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName =
                      (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName =
                      (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                  } else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                  }

                  var existingTasks = target[symbolEventName];
                  var isExisting = false;

                  if (existingTasks) {
                    // already have task registered
                    isExisting = true;

                    if (checkDuplicate) {
                      for (var _i = 0; _i < existingTasks.length; _i++) {
                        if (compare(existingTasks[_i], delegate)) {
                          // same callback, same capture, same event name, just return
                          return;
                        }
                      }
                    }
                  } else {
                    existingTasks = target[symbolEventName] = [];
                  }

                  var source;
                  var constructorName = target.constructor['name'];
                  var targetSource = globalSources[constructorName];

                  if (targetSource) {
                    source = targetSource[eventName];
                  }

                  if (!source) {
                    source =
                      constructorName +
                      addSource +
                      (eventNameToString ? eventNameToString(eventName) : eventName);
                  } // do not create a new object as task.data to pass those things
                  // just use the global shared one

                  taskData.options = options;

                  if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                  }

                  taskData.target = target;
                  taskData.capture = capture;
                  taskData.eventName = eventName;
                  taskData.isExisting = isExisting;
                  var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

                  if (data) {
                    data.taskData = taskData;
                  }

                  var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
                  // issue, https://github.com/angular/angular/issues/20442

                  taskData.target = null; // need to clear up taskData because it is a global object

                  if (data) {
                    data.taskData = null;
                  } // have to save those information to task in case
                  // application may call task.zone.cancelTask() directly

                  if (once) {
                    options.once = true;
                  }

                  if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                  }

                  task.target = target;
                  task.capture = capture;
                  task.eventName = eventName;

                  if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                  }

                  if (!prepend) {
                    existingTasks.push(task);
                  } else {
                    existingTasks.unshift(task);
                  }

                  if (returnTarget) {
                    return target;
                  }
                };
              };

              proto[ADD_EVENT_LISTENER] = makeAddListener(
                nativeAddEventListener,
                ADD_EVENT_LISTENER_SOURCE,
                customSchedule,
                customCancel,
                returnTarget
              );

              if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(
                  nativePrependEventListener,
                  PREPEND_EVENT_LISTENER_SOURCE,
                  customSchedulePrepend,
                  customCancel,
                  returnTarget,
                  true
                );
              }

              proto[REMOVE_EVENT_LISTENER] = function() {
                var target = this || _global;
                var eventName = arguments[0];

                if (patchOptions && patchOptions.transferEventName) {
                  eventName = patchOptions.transferEventName(eventName);
                }

                var options = arguments[2];
                var capture;

                if (options === undefined) {
                  capture = false;
                } else if (options === true) {
                  capture = true;
                } else if (options === false) {
                  capture = false;
                } else {
                  capture = options ? !!options.capture : false;
                }

                var delegate = arguments[1];

                if (!delegate) {
                  return nativeRemoveEventListener.apply(this, arguments);
                }

                if (
                  validateHandler &&
                  !validateHandler(nativeRemoveEventListener, delegate, target, arguments)
                ) {
                  return;
                }

                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;

                if (symbolEventNames) {
                  symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }

                var existingTasks = symbolEventName && target[symbolEventName];

                if (existingTasks) {
                  for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];

                    if (compare(existingTask, delegate)) {
                      existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                      existingTask.isRemoved = true;

                      if (existingTasks.length === 0) {
                        // all tasks for the eventName + capture have gone,
                        // remove globalZoneAwareCallback and remove the task cache from target
                        existingTask.allRemoved = true;
                        target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                        // such as target.onclick = function() {}, so we need to clear this internal
                        // property too if all delegates all removed

                        if (typeof eventName === 'string') {
                          var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                          target[onPropertySymbol] = null;
                        }
                      }

                      existingTask.zone.cancelTask(existingTask);

                      if (returnTarget) {
                        return target;
                      }

                      return;
                    }
                  }
                } // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.

                return nativeRemoveEventListener.apply(this, arguments);
              };

              proto[LISTENERS_EVENT_LISTENER] = function() {
                var target = this || _global;
                var eventName = arguments[0];

                if (patchOptions && patchOptions.transferEventName) {
                  eventName = patchOptions.transferEventName(eventName);
                }

                var listeners = [];
                var tasks = findEventTasks(
                  target,
                  eventNameToString ? eventNameToString(eventName) : eventName
                );

                for (var i = 0; i < tasks.length; i++) {
                  var task = tasks[i];
                  var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                  listeners.push(delegate);
                }

                return listeners;
              };

              proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
                var target = this || _global;
                var eventName = arguments[0];

                if (!eventName) {
                  var keys = Object.keys(target);

                  for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed

                    if (evtName && evtName !== 'removeListener') {
                      this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                  } // remove removeListener listener finally

                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                } else {
                  if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                  }

                  var symbolEventNames = zoneSymbolEventNames$1[eventName];

                  if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];

                    if (tasks) {
                      var removeTasks = tasks.slice();

                      for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                        var task = removeTasks[_i2];
                        var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                        this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                      }
                    }

                    if (captureTasks) {
                      var _removeTasks = captureTasks.slice();

                      for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                        var _task = _removeTasks[_i3];

                        var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                        this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                      }
                    }
                  }
                }

                if (returnTarget) {
                  return this;
                }
              }; // for native toString patch

              attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
              attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

              if (nativeRemoveAllListeners) {
                attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
              }

              if (nativeListeners) {
                attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
              }

              return true;
            }

            var results = [];

            for (var i = 0; i < apis.length; i++) {
              results[i] = patchEventTargetMethods(apis[i], patchOptions);
            }

            return results;
          }

          function findEventTasks(target, eventName) {
            var foundTasks = [];

            for (var prop in target) {
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1];

              if (evtName && (!eventName || evtName === eventName)) {
                var tasks = target[prop];

                if (tasks) {
                  for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                  }
                }
              }
            }

            return foundTasks;
          }

          function patchEventPrototype(global, api) {
            var Event = global['Event'];

            if (Event && Event.prototype) {
              api.patchMethod(Event.prototype, 'stopImmediatePropagation', function(delegate) {
                return function(self, args) {
                  self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
                  // in case in some hybrid application, some part of
                  // application will be controlled by zone, some are not

                  delegate && delegate.apply(self, args);
                };
              });
            }
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          function patchCallbacks(api, target, targetName, method, callbacks) {
            var symbol = Zone.__symbol__(method);

            if (target[symbol]) {
              return;
            }

            var nativeDelegate = (target[symbol] = target[method]);

            target[method] = function(name, opts, options) {
              if (opts && opts.prototype) {
                callbacks.forEach(function(callback) {
                  var source = ''.concat(targetName, '.').concat(method, '::') + callback;
                  var prototype = opts.prototype;

                  if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                    if (descriptor && descriptor.value) {
                      descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                      api._redefineProperty(opts.prototype, callback, descriptor);
                    } else if (prototype[callback]) {
                      prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                  } else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                  }
                });
              }

              return nativeDelegate.call(target, name, opts, options);
            };

            api.attachOriginToPatched(target[method], nativeDelegate);
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          var globalEventHandlersEventNames = [
            'abort',
            'animationcancel',
            'animationend',
            'animationiteration',
            'auxclick',
            'beforeinput',
            'blur',
            'cancel',
            'canplay',
            'canplaythrough',
            'change',
            'compositionstart',
            'compositionupdate',
            'compositionend',
            'cuechange',
            'click',
            'close',
            'contextmenu',
            'curechange',
            'dblclick',
            'drag',
            'dragend',
            'dragenter',
            'dragexit',
            'dragleave',
            'dragover',
            'drop',
            'durationchange',
            'emptied',
            'ended',
            'error',
            'focus',
            'focusin',
            'focusout',
            'gotpointercapture',
            'input',
            'invalid',
            'keydown',
            'keypress',
            'keyup',
            'load',
            'loadstart',
            'loadeddata',
            'loadedmetadata',
            'lostpointercapture',
            'mousedown',
            'mouseenter',
            'mouseleave',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'mousewheel',
            'orientationchange',
            'pause',
            'play',
            'playing',
            'pointercancel',
            'pointerdown',
            'pointerenter',
            'pointerleave',
            'pointerlockchange',
            'mozpointerlockchange',
            'webkitpointerlockerchange',
            'pointerlockerror',
            'mozpointerlockerror',
            'webkitpointerlockerror',
            'pointermove',
            'pointout',
            'pointerover',
            'pointerup',
            'progress',
            'ratechange',
            'reset',
            'resize',
            'scroll',
            'seeked',
            'seeking',
            'select',
            'selectionchange',
            'selectstart',
            'show',
            'sort',
            'stalled',
            'submit',
            'suspend',
            'timeupdate',
            'volumechange',
            'touchcancel',
            'touchmove',
            'touchstart',
            'touchend',
            'transitioncancel',
            'transitionend',
            'waiting',
            'wheel',
          ];
          var documentEventNames = [
            'afterscriptexecute',
            'beforescriptexecute',
            'DOMContentLoaded',
            'freeze',
            'fullscreenchange',
            'mozfullscreenchange',
            'webkitfullscreenchange',
            'msfullscreenchange',
            'fullscreenerror',
            'mozfullscreenerror',
            'webkitfullscreenerror',
            'msfullscreenerror',
            'readystatechange',
            'visibilitychange',
            'resume',
          ];
          var windowEventNames = [
            'absolutedeviceorientation',
            'afterinput',
            'afterprint',
            'appinstalled',
            'beforeinstallprompt',
            'beforeprint',
            'beforeunload',
            'devicelight',
            'devicemotion',
            'deviceorientation',
            'deviceorientationabsolute',
            'deviceproximity',
            'hashchange',
            'languagechange',
            'message',
            'mozbeforepaint',
            'offline',
            'online',
            'paint',
            'pageshow',
            'pagehide',
            'popstate',
            'rejectionhandled',
            'storage',
            'unhandledrejection',
            'unload',
            'userproximity',
            'vrdisplyconnected',
            'vrdisplaydisconnected',
            'vrdisplaypresentchange',
          ];
          var htmlElementEventNames = [
            'beforecopy',
            'beforecut',
            'beforepaste',
            'copy',
            'cut',
            'paste',
            'dragstart',
            'loadend',
            'animationstart',
            'search',
            'transitionrun',
            'transitionstart',
            'webkitanimationend',
            'webkitanimationiteration',
            'webkitanimationstart',
            'webkittransitionend',
          ];
          var mediaElementEventNames = [
            'encrypted',
            'waitingforkey',
            'msneedkey',
            'mozinterruptbegin',
            'mozinterruptend',
          ];
          var ieElementEventNames = [
            'activate',
            'afterupdate',
            'ariarequest',
            'beforeactivate',
            'beforedeactivate',
            'beforeeditfocus',
            'beforeupdate',
            'cellchange',
            'controlselect',
            'dataavailable',
            'datasetchanged',
            'datasetcomplete',
            'errorupdate',
            'filterchange',
            'layoutcomplete',
            'losecapture',
            'move',
            'moveend',
            'movestart',
            'propertychange',
            'resizeend',
            'resizestart',
            'rowenter',
            'rowexit',
            'rowsdelete',
            'rowsinserted',
            'command',
            'compassneedscalibration',
            'deactivate',
            'help',
            'mscontentzoom',
            'msmanipulationstatechanged',
            'msgesturechange',
            'msgesturedoubletap',
            'msgestureend',
            'msgesturehold',
            'msgesturestart',
            'msgesturetap',
            'msgotpointercapture',
            'msinertiastart',
            'mslostpointercapture',
            'mspointercancel',
            'mspointerdown',
            'mspointerenter',
            'mspointerhover',
            'mspointerleave',
            'mspointermove',
            'mspointerout',
            'mspointerover',
            'mspointerup',
            'pointerout',
            'mssitemodejumplistitemremoved',
            'msthumbnailclick',
            'stop',
            'storagecommit',
          ];
          var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
          var formEventNames = ['autocomplete', 'autocompleteerror'];
          var detailEventNames = ['toggle'];
          var frameEventNames = ['load'];
          var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
          var marqueeEventNames = ['bounce', 'finish', 'start'];
          var XMLHttpRequestEventNames = [
            'loadstart',
            'progress',
            'abort',
            'error',
            'load',
            'progress',
            'timeout',
            'loadend',
            'readystatechange',
          ];
          var IDBIndexEventNames = [
            'upgradeneeded',
            'complete',
            'abort',
            'success',
            'error',
            'blocked',
            'versionchange',
            'close',
          ];
          var websocketEventNames = ['close', 'error', 'open', 'message'];
          var workerEventNames = ['error', 'message'];
          var eventNames = globalEventHandlersEventNames.concat(
            webglEventNames,
            formEventNames,
            detailEventNames,
            documentEventNames,
            windowEventNames,
            htmlElementEventNames,
            ieElementEventNames
          );

          function filterProperties(target, onProperties, ignoreProperties) {
            if (!ignoreProperties || ignoreProperties.length === 0) {
              return onProperties;
            }

            var tip = ignoreProperties.filter(function(ip) {
              return ip.target === target;
            });

            if (!tip || tip.length === 0) {
              return onProperties;
            }

            var targetIgnoreProperties = tip[0].ignoreProperties;
            return onProperties.filter(function(op) {
              return targetIgnoreProperties.indexOf(op) === -1;
            });
          }

          function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
            // check whether target is available, sometimes target will be undefined
            // because different browser or some 3rd party plugin.
            if (!target) {
              return;
            }

            var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
            patchOnProperties(target, filteredProperties, prototype);
          }

          function propertyDescriptorPatch(api, _global) {
            if (isNode && !isMix) {
              return;
            }

            if (Zone[api.symbol('patchEvents')]) {
              // events are already been patched by legacy patch.
              return;
            }

            var supportsWebSocket = typeof WebSocket !== 'undefined';
            var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

            if (isBrowser) {
              var _internalWindow = window;
              var ignoreErrorProperties = isIE
                ? [
                    {
                      target: _internalWindow,
                      ignoreProperties: ['error'],
                    },
                  ]
                : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
              // so we need to pass WindowPrototype to check onProp exist or not

              patchFilteredProperties(
                _internalWindow,
                eventNames.concat(['messageerror']),
                ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties,
                ObjectGetPrototypeOf(_internalWindow)
              );
              patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

              if (typeof _internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(
                  _internalWindow['SVGElement'].prototype,
                  eventNames,
                  ignoreProperties
                );
              }

              patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
              patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
              patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
              patchFilteredProperties(
                HTMLFrameSetElement.prototype,
                windowEventNames.concat(frameSetEventNames),
                ignoreProperties
              );
              patchFilteredProperties(
                HTMLBodyElement.prototype,
                windowEventNames.concat(frameSetEventNames),
                ignoreProperties
              );
              patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
              patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
              var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

              if (HTMLMarqueeElement) {
                patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
              }

              var Worker = _internalWindow['Worker'];

              if (Worker) {
                patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
              }
            }

            var XMLHttpRequest = _global['XMLHttpRequest'];

            if (XMLHttpRequest) {
              // XMLHttpRequest is not available in ServiceWorker, so we need to check here
              patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
            }

            var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              patchFilteredProperties(
                XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype,
                XMLHttpRequestEventNames,
                ignoreProperties
              );
            }

            if (typeof IDBIndex !== 'undefined') {
              patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
              patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
              patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
              patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
              patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
              patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
            }

            if (supportsWebSocket) {
              patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
            }
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          Zone.__load_patch('util', function(global, Zone, api) {
            api.patchOnProperties = patchOnProperties;
            api.patchMethod = patchMethod;
            api.bindArguments = bindArguments;
            api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
            // define which events will not be patched by `Zone.js`.
            // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
            // the name consistent with angular repo.
            // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
            // backwards compatibility.

            var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

            var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

            if (global[SYMBOL_UNPATCHED_EVENTS]) {
              global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
            }

            if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
              Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
            }

            api.patchEventPrototype = patchEventPrototype;
            api.patchEventTarget = patchEventTarget;
            api.isIEOrEdge = isIEOrEdge;
            api.ObjectDefineProperty = ObjectDefineProperty;
            api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
            api.ObjectCreate = ObjectCreate;
            api.ArraySlice = ArraySlice;
            api.patchClass = patchClass;
            api.wrapWithCurrentZone = wrapWithCurrentZone;
            api.filterProperties = filterProperties;
            api.attachOriginToPatched = attachOriginToPatched;
            api._redefineProperty = Object.defineProperty;
            api.patchCallbacks = patchCallbacks;

            api.getGlobalObjects = function() {
              return {
                globalSources: globalSources,
                zoneSymbolEventNames: zoneSymbolEventNames$1,
                eventNames: eventNames,
                isBrowser: isBrowser,
                isMix: isMix,
                isNode: isNode,
                TRUE_STR: TRUE_STR,
                FALSE_STR: FALSE_STR,
                ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
                ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
                REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR,
              };
            };
          });
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          var taskSymbol = zoneSymbol('zoneTask');

          function patchTimer(window, setName, cancelName, nameSuffix) {
            var setNative = null;
            var clearNative = null;
            setName += nameSuffix;
            cancelName += nameSuffix;
            var tasksByHandleId = {};

            function scheduleTask(task) {
              var data = task.data;

              function timer() {
                try {
                  task.invoke.apply(this, arguments);
                } finally {
                  // issue-934, task will be cancelled
                  // even it is a periodic task such as
                  // setInterval
                  if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                      // in non-nodejs env, we remove timerId
                      // from local cache
                      delete tasksByHandleId[data.handleId];
                    } else if (data.handleId) {
                      // Node returns complex objects as handleIds
                      // we remove task reference from timer object
                      data.handleId[taskSymbol] = null;
                    }
                  }
                }
              }

              data.args[0] = timer;
              data.handleId = setNative.apply(window, data.args);
              return task;
            }

            function clearTask(task) {
              return clearNative(task.data.handleId);
            }

            setNative = patchMethod(window, setName, function(delegate) {
              return function(self, args) {
                if (typeof args[0] === 'function') {
                  var _options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                    args: args,
                  };
                  var task = scheduleMacroTaskWithCurrentZone(
                    setName,
                    args[0],
                    _options,
                    scheduleTask,
                    clearTask
                  );

                  if (!task) {
                    return task;
                  } // Node.js must additionally support the ref and unref functions.

                  var handle = task.data.handleId;

                  if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                  } else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                  } // check whether handle is null, because some polyfill or browser
                  // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame

                  if (
                    handle &&
                    handle.ref &&
                    handle.unref &&
                    typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function'
                  ) {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                  }

                  if (typeof handle === 'number' || handle) {
                    return handle;
                  }

                  return task;
                } else {
                  // cause an error by calling it directly.
                  return delegate.apply(window, args);
                }
              };
            });
            clearNative = patchMethod(window, cancelName, function(delegate) {
              return function(self, args) {
                var id = args[0];
                var task;

                if (typeof id === 'number') {
                  // non nodejs env.
                  task = tasksByHandleId[id];
                } else {
                  // nodejs env.
                  task = id && id[taskSymbol]; // other environments.

                  if (!task) {
                    task = id;
                  }
                }

                if (task && typeof task.type === 'string') {
                  if (
                    task.state !== 'notScheduled' &&
                    ((task.cancelFn && task.data.isPeriodic) || task.runCount === 0)
                  ) {
                    if (typeof id === 'number') {
                      delete tasksByHandleId[id];
                    } else if (id) {
                      id[taskSymbol] = null;
                    } // Do not cancel already canceled functions

                    task.zone.cancelTask(task);
                  }
                } else {
                  // cause an error by calling it directly.
                  delegate.apply(window, args);
                }
              };
            });
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          function patchCustomElements(_global, api) {
            var _api$getGlobalObjects = api.getGlobalObjects(),
              isBrowser = _api$getGlobalObjects.isBrowser,
              isMix = _api$getGlobalObjects.isMix;

            if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
              return;
            }

            var callbacks = [
              'connectedCallback',
              'disconnectedCallback',
              'adoptedCallback',
              'attributeChangedCallback',
            ];
            api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          function eventTargetPatch(_global, api) {
            if (Zone[api.symbol('patchEventTarget')]) {
              // EventTarget is already patched.
              return;
            }

            var _api$getGlobalObjects2 = api.getGlobalObjects(),
              eventNames = _api$getGlobalObjects2.eventNames,
              zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
              TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
              FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
              ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string

            for (var i = 0; i < eventNames.length; i++) {
              var eventName = eventNames[i];
              var falseEventName = eventName + FALSE_STR;
              var trueEventName = eventName + TRUE_STR;
              var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
              var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
              zoneSymbolEventNames[eventName] = {};
              zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
              zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
            }

            var EVENT_TARGET = _global['EventTarget'];

            if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
              return;
            }

            api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
            return true;
          }

          function patchEvent(global, api) {
            api.patchEventPrototype(global, api);
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          Zone.__load_patch('legacy', function(global) {
            var legacyPatch = global[Zone.__symbol__('legacyPatch')];

            if (legacyPatch) {
              legacyPatch();
            }
          });

          Zone.__load_patch('timers', function(global) {
            var set = 'set';
            var clear = 'clear';
            patchTimer(global, set, clear, 'Timeout');
            patchTimer(global, set, clear, 'Interval');
            patchTimer(global, set, clear, 'Immediate');
          });

          Zone.__load_patch('requestAnimationFrame', function(global) {
            patchTimer(global, 'request', 'cancel', 'AnimationFrame');
            patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
            patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
          });

          Zone.__load_patch('blocking', function(global, Zone) {
            var blockingMethods = ['alert', 'prompt', 'confirm'];

            for (var i = 0; i < blockingMethods.length; i++) {
              var name = blockingMethods[i];
              patchMethod(global, name, function(delegate, symbol, name) {
                return function(s, args) {
                  return Zone.current.run(delegate, global, args, name);
                };
              });
            }
          });

          Zone.__load_patch('EventTarget', function(global, Zone, api) {
            patchEvent(global, api);
            eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

            var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
              api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
            }

            patchClass('MutationObserver');
            patchClass('WebKitMutationObserver');
            patchClass('IntersectionObserver');
            patchClass('FileReader');
          });

          Zone.__load_patch('on_property', function(global, Zone, api) {
            propertyDescriptorPatch(api, global);
          });

          Zone.__load_patch('customElements', function(global, Zone, api) {
            patchCustomElements(global, api);
          });

          Zone.__load_patch('XHR', function(global, Zone) {
            // Treat XMLHttpRequest as a macrotask.
            patchXHR(global);
            var XHR_TASK = zoneSymbol('xhrTask');
            var XHR_SYNC = zoneSymbol('xhrSync');
            var XHR_LISTENER = zoneSymbol('xhrListener');
            var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
            var XHR_URL = zoneSymbol('xhrURL');
            var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

            function patchXHR(window) {
              var XMLHttpRequest = window['XMLHttpRequest'];

              if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
              }

              var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

              function findPendingTask(target) {
                return target[XHR_TASK];
              }

              var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

              if (!oriAddListener) {
                var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

                if (XMLHttpRequestEventTarget) {
                  var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                  oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                  oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
              }

              var READY_STATE_CHANGE = 'readystatechange';
              var SCHEDULED = 'scheduled';

              function scheduleTask(task) {
                var data = task.data;
                var target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

                var listener = target[XHR_LISTENER];

                if (!oriAddListener) {
                  oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                  oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }

                if (listener) {
                  oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }

                var newListener = (target[XHR_LISTENER] = function() {
                  if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                      // check whether the xhr has registered onload listener
                      // if that is the case, the task should invoke after all
                      // onload listeners finish.
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      if (loadTasks && loadTasks.length > 0) {
                        var oriInvoke = task.invoke;

                        task.invoke = function() {
                          // need to load the tasks again, because in other
                          // load listener, they may remove themselves
                          var loadTasks = target[Zone.__symbol__('loadfalse')];

                          for (var i = 0; i < loadTasks.length; i++) {
                            if (loadTasks[i] === task) {
                              loadTasks.splice(i, 1);
                            }
                          }

                          if (!data.aborted && task.state === SCHEDULED) {
                            oriInvoke.call(task);
                          }
                        };

                        loadTasks.push(task);
                      } else {
                        task.invoke();
                      }
                    } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                      // error occurs when xhr.send()
                      target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                  }
                });

                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                var storedTask = target[XHR_TASK];

                if (!storedTask) {
                  target[XHR_TASK] = task;
                }

                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
              }

              function placeholderCallback() {}

              function clearTask(task) {
                var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.

                data.aborted = true;
                return abortNative.apply(data.target, data.args);
              }

              var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function() {
                return function(self, args) {
                  self[XHR_SYNC] = args[2] == false;
                  self[XHR_URL] = args[1];
                  return openNative.apply(self, args);
                };
              });
              var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
              var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
              var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
              var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function() {
                return function(self, args) {
                  if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                  }

                  if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                  } else {
                    var _options2 = {
                      target: self,
                      url: self[XHR_URL],
                      isPeriodic: false,
                      args: args,
                      aborted: false,
                    };
                    var task = scheduleMacroTaskWithCurrentZone(
                      XMLHTTPREQUEST_SOURCE,
                      placeholderCallback,
                      _options2,
                      scheduleTask,
                      clearTask
                    );

                    if (
                      self &&
                      self[XHR_ERROR_BEFORE_SCHEDULED] === true &&
                      !_options2.aborted &&
                      task.state === SCHEDULED
                    ) {
                      // xhr request throw error when send
                      // we should invoke task instead of leaving a scheduled
                      // pending macroTask
                      task.invoke();
                    }
                  }
                };
              });
              var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function() {
                return function(self, args) {
                  var task = findPendingTask(self);

                  if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                      return;
                    }

                    task.zone.cancelTask(task);
                  } else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                  } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                  // task
                  // to cancel. Do nothing.
                };
              });
            }
          });

          Zone.__load_patch('geolocation', function(global) {
            /// GEO_LOCATION
            if (global['navigator'] && global['navigator'].geolocation) {
              patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
            }
          });

          Zone.__load_patch('PromiseRejectionEvent', function(global, Zone) {
            // handle unhandled promise rejection
            function findPromiseRejectionHandler(evtName) {
              return function(e) {
                var eventTasks = findEventTasks(global, evtName);
                eventTasks.forEach(function(eventTask) {
                  // windows has added unhandledrejection event listener
                  // trigger the event listener
                  var PromiseRejectionEvent = global['PromiseRejectionEvent'];

                  if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, {
                      promise: e.promise,
                      reason: e.rejection,
                    });
                    eventTask.invoke(evt);
                  }
                });
              };
            }

            if (global['PromiseRejectionEvent']) {
              Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler(
                'unhandledrejection'
              );
              Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
            }
          });
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
        });
        /***/
      },

    /***/
    '../../node_modules/zone.js/dist/zone-legacy.js':
      /*!***********************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/node_modules/zone.js/dist/zone-legacy.js ***!
    \***********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesZoneJsDistZoneLegacyJs(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * @license Angular v0.10.2
         * (c) 2010-2019 Google LLC. https://angular.io/
         * License: MIT
         */

        (function(factory) {
          true
            ? !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            : undefined;
        })(function() {
          'use strict';
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          /*
           * This is necessary for Chrome and Chrome mobile, to enable
           * things like redefining `createdCallback` on an element.
           */

          var zoneSymbol;

          var _defineProperty;

          var _getOwnPropertyDescriptor;

          var _create;

          var unconfigurablesKey;

          function propertyPatch() {
            zoneSymbol = Zone.__symbol__;
            _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
            _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
              Object.getOwnPropertyDescriptor;
            _create = Object.create;
            unconfigurablesKey = zoneSymbol('unconfigurables');

            Object.defineProperty = function(obj, prop, desc) {
              if (isUnconfigurable(obj, prop)) {
                throw new TypeError("Cannot assign to read only property '" + prop + "' of " + obj);
              }

              var originalConfigurableFlag = desc.configurable;

              if (prop !== 'prototype') {
                desc = rewriteDescriptor(obj, prop, desc);
              }

              return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
            };

            Object.defineProperties = function(obj, props) {
              Object.keys(props).forEach(function(prop) {
                Object.defineProperty(obj, prop, props[prop]);
              });
              return obj;
            };

            Object.create = function(obj, proto) {
              if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                Object.keys(proto).forEach(function(prop) {
                  proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                });
              }

              return _create(obj, proto);
            };

            Object.getOwnPropertyDescriptor = function(obj, prop) {
              var desc = _getOwnPropertyDescriptor(obj, prop);

              if (desc && isUnconfigurable(obj, prop)) {
                desc.configurable = false;
              }

              return desc;
            };
          }

          function _redefineProperty(obj, prop, desc) {
            var originalConfigurableFlag = desc.configurable;
            desc = rewriteDescriptor(obj, prop, desc);
            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
          }

          function isUnconfigurable(obj, prop) {
            return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
          }

          function rewriteDescriptor(obj, prop, desc) {
            // issue-927, if the desc is frozen, don't try to change the desc
            if (!Object.isFrozen(desc)) {
              desc.configurable = true;
            }

            if (!desc.configurable) {
              // issue-927, if the obj is frozen, don't try to set the desc to obj
              if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
                _defineProperty(obj, unconfigurablesKey, {
                  writable: true,
                  value: {},
                });
              }

              if (obj[unconfigurablesKey]) {
                obj[unconfigurablesKey][prop] = true;
              }
            }

            return desc;
          }

          function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
            try {
              return _defineProperty(obj, prop, desc);
            } catch (error) {
              if (desc.configurable) {
                // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                // retry with the original flag value
                if (typeof originalConfigurableFlag == 'undefined') {
                  delete desc.configurable;
                } else {
                  desc.configurable = originalConfigurableFlag;
                }

                try {
                  return _defineProperty(obj, prop, desc);
                } catch (error) {
                  var descJson = null;

                  try {
                    descJson = JSON.stringify(desc);
                  } catch (error) {
                    descJson = desc.toString();
                  }

                  console.log(
                    "Attempting to configure '" +
                      prop +
                      "' with descriptor '" +
                      descJson +
                      "' on object '" +
                      obj +
                      "' and got error, giving up: " +
                      error
                  );
                }
              } else {
                throw error;
              }
            }
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          function eventTargetLegacyPatch(_global, api) {
            var _a = api.getGlobalObjects(),
              eventNames = _a.eventNames,
              globalSources = _a.globalSources,
              zoneSymbolEventNames = _a.zoneSymbolEventNames,
              TRUE_STR = _a.TRUE_STR,
              FALSE_STR = _a.FALSE_STR,
              ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;

            var WTF_ISSUE_555 =
              'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
            var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(
              ','
            );
            var EVENT_TARGET = 'EventTarget';
            var apis = [];
            var isWtf = _global['wtf'];
            var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

            if (isWtf) {
              // Workaround for: https://github.com/google/tracing-framework/issues/555
              apis = WTF_ISSUE_555_ARRAY.map(function(v) {
                return 'HTML' + v + 'Element';
              }).concat(NO_EVENT_TARGET);
            } else if (_global[EVENT_TARGET]) {
              apis.push(EVENT_TARGET);
            } else {
              // Note: EventTarget is not available in all browsers,
              // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
              apis = NO_EVENT_TARGET;
            }

            var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
            var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
            var ieOrEdge = api.isIEOrEdge();
            var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
            var FUNCTION_WRAPPER = '[object FunctionWrapper]';
            var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
            var pointerEventsMap = {
              MSPointerCancel: 'pointercancel',
              MSPointerDown: 'pointerdown',
              MSPointerEnter: 'pointerenter',
              MSPointerHover: 'pointerhover',
              MSPointerLeave: 'pointerleave',
              MSPointerMove: 'pointermove',
              MSPointerOut: 'pointerout',
              MSPointerOver: 'pointerover',
              MSPointerUp: 'pointerup',
            }; //  predefine all __zone_symbol__ + eventName + true/false string

            for (var i = 0; i < eventNames.length; i++) {
              var eventName = eventNames[i];
              var falseEventName = eventName + FALSE_STR;
              var trueEventName = eventName + TRUE_STR;
              var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
              var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
              zoneSymbolEventNames[eventName] = {};
              zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
              zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
            } //  predefine all task.source string

            for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
              var target = WTF_ISSUE_555_ARRAY[i];
              var targets = (globalSources[target] = {});

              for (var j = 0; j < eventNames.length; j++) {
                var eventName = eventNames[j];
                targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
              }
            }

            var checkIEAndCrossContext = function checkIEAndCrossContext(
              nativeDelegate,
              delegate,
              target,
              args
            ) {
              if (!isDisableIECheck && ieOrEdge) {
                if (isEnableCrossContextCheck) {
                  try {
                    var testString = delegate.toString();

                    if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
                      nativeDelegate.apply(target, args);
                      return false;
                    }
                  } catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                  }
                } else {
                  var testString = delegate.toString();

                  if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
                    nativeDelegate.apply(target, args);
                    return false;
                  }
                }
              } else if (isEnableCrossContextCheck) {
                try {
                  delegate.toString();
                } catch (error) {
                  nativeDelegate.apply(target, args);
                  return false;
                }
              }

              return true;
            };

            var apiTypes = [];

            for (var i = 0; i < apis.length; i++) {
              var type = _global[apis[i]];
              apiTypes.push(type && type.prototype);
            } // vh is validateHandler to check event handler
            // is valid or not(for security check)

            api.patchEventTarget(_global, apiTypes, {
              vh: checkIEAndCrossContext,
              transferEventName: function transferEventName(eventName) {
                var pointerEventName = pointerEventsMap[eventName];
                return pointerEventName || eventName;
              },
            });
            Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
            return true;
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
          // we have to patch the instance since the proto is non-configurable

          function apply(api, _global) {
            var _a = api.getGlobalObjects(),
              ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR,
              REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;

            var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
            // On older Chrome, no need since EventTarget was already patched

            if (!_global.EventTarget) {
              api.patchEventTarget(_global, [WS.prototype]);
            }

            _global.WebSocket = function(x, y) {
              var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
              var proxySocket;
              var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

              var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

              if (onmessageDesc && onmessageDesc.configurable === false) {
                proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
                // but proxySocket not, so we will keep socket as prototype and pass it to
                // patchOnProperties method

                proxySocketProto = socket;
                [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function(
                  propName
                ) {
                  proxySocket[propName] = function() {
                    var args = api.ArraySlice.call(arguments);

                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                      var eventName = args.length > 0 ? args[0] : undefined;

                      if (eventName) {
                        var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                        socket[propertySymbol] = proxySocket[propertySymbol];
                      }
                    }

                    return socket[propName].apply(socket, args);
                  };
                });
              } else {
                // we can patch the real socket
                proxySocket = socket;
              }

              api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
              return proxySocket;
            };

            var globalWebSocket = _global['WebSocket'];

            for (var prop in WS) {
              globalWebSocket[prop] = WS[prop];
            }
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          function propertyDescriptorLegacyPatch(api, _global) {
            var _a = api.getGlobalObjects(),
              isNode = _a.isNode,
              isMix = _a.isMix;

            if (isNode && !isMix) {
              return;
            }

            if (!canPatchViaPropertyDescriptor(api, _global)) {
              var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

              patchViaCapturingAllTheEvents(api);
              api.patchClass('XMLHttpRequest');

              if (supportsWebSocket) {
                apply(api, _global);
              }

              Zone[api.symbol('patchEvents')] = true;
            }
          }

          function canPatchViaPropertyDescriptor(api, _global) {
            var _a = api.getGlobalObjects(),
              isBrowser = _a.isBrowser,
              isMix = _a.isMix;

            if (
              (isBrowser || isMix) &&
              !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
              typeof Element !== 'undefined'
            ) {
              // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
              // IDL interface attributes are not configurable
              var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
              if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
              // because XMLHttpRequest is not available in service worker

              if (desc) {
                api.ObjectDefineProperty(Element.prototype, 'onclick', {
                  enumerable: true,
                  configurable: true,
                  get: function get() {
                    return true;
                  },
                });
                var div = document.createElement('div');
                var result = !!div.onclick;
                api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
                return result;
              }
            }

            var XMLHttpRequest = _global['XMLHttpRequest'];

            if (!XMLHttpRequest) {
              // XMLHttpRequest is not available in service worker
              return false;
            }

            var ON_READY_STATE_CHANGE = 'onreadystatechange';
            var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
            // by default XMLHttpRequest.prototype.onreadystatechange is undefined
            // without adding enumerable and configurable will cause onreadystatechange
            // non-configurable
            // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
            // we should set a real desc instead a fake one

            if (xhrDesc) {
              api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return true;
                },
              });
              var req = new XMLHttpRequest();
              var result = !!req.onreadystatechange; // restore original desc

              api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
              return result;
            } else {
              var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
              api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
                },
                set: function set(value) {
                  this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
                },
              });
              var req = new XMLHttpRequest();

              var detectFunc = function detectFunc() {};

              req.onreadystatechange = detectFunc;
              var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
              req.onreadystatechange = null;
              return result;
            }
          } // Whenever any eventListener fires, we check the eventListener target and all parents
          // for `onwhatever` properties and replace them with zone-bound functions
          // - Chrome (for now)

          function patchViaCapturingAllTheEvents(api) {
            var eventNames = api.getGlobalObjects().eventNames;
            var unboundKey = api.symbol('unbound');

            var _loop_1 = function _loop_1(i) {
              var property = eventNames[i];
              var onproperty = 'on' + property;
              self.addEventListener(
                property,
                function(event) {
                  var elt = event.target,
                    bound,
                    source;

                  if (elt) {
                    source = elt.constructor['name'] + '.' + onproperty;
                  } else {
                    source = 'unknown.' + onproperty;
                  }

                  while (elt) {
                    if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                      bound = api.wrapWithCurrentZone(elt[onproperty], source);
                      bound[unboundKey] = elt[onproperty];
                      elt[onproperty] = bound;
                    }

                    elt = elt.parentElement;
                  }
                },
                true
              );
            };

            for (var i = 0; i < eventNames.length; i++) {
              _loop_1(i);
            }
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          function registerElementPatch(_global, api) {
            var _a = api.getGlobalObjects(),
              isBrowser = _a.isBrowser,
              isMix = _a.isMix;

            if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
              return;
            }

            var callbacks = [
              'createdCallback',
              'attachedCallback',
              'detachedCallback',
              'attributeChangedCallback',
            ];
            api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
          }
          /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */

          (function(_global) {
            var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

            function __symbol__(name) {
              return symbolPrefix + name;
            }

            _global[__symbol__('legacyPatch')] = function() {
              var Zone = _global['Zone'];

              Zone.__load_patch('defineProperty', function(global, Zone, api) {
                api._redefineProperty = _redefineProperty;
                propertyPatch();
              });

              Zone.__load_patch('registerElement', function(global, Zone, api) {
                registerElementPatch(global, api);
              });

              Zone.__load_patch('EventTargetLegacy', function(global, Zone, api) {
                eventTargetLegacyPatch(global, api);
                propertyDescriptorLegacyPatch(api, global);
              });
            };
          })(
            typeof window !== 'undefined'
              ? window
              : typeof global !== 'undefined'
              ? global
              : typeof self !== 'undefined'
              ? self
              : {}
          );
        });
        /***/
      },

    /***/
    './src/polyfills.ts':
      /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

      /*! no exports provided */

      /***/
      function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! zone.js/dist/zone */
          '../../node_modules/zone.js/dist/zone-evergreen.js'
        );
        /* harmony import */

        var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */

        var zone_js_dist_task_tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! zone.js/dist/task-tracking */
          '../../node_modules/zone.js/dist/task-tracking.js'
        );
        /* harmony import */

        var zone_js_dist_task_tracking__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(zone_js_dist_task_tracking__WEBPACK_IMPORTED_MODULE_1__);
        /**
         * This file includes polyfills needed by Angular and is loaded before the app.
         * You can add your own extra polyfills to this file.
         *
         * This file is divided into 2 sections:
         *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
         *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
         *      file.
         *
         * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
         * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
         * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
         *
         * Learn more in https://angular.io/guide/browser-support
         */

        /***************************************************************************************************
         * BROWSER POLYFILLS
         */

        /** IE10 and IE11 requires the following for NgClass support on SVG elements */
        // import 'classlist.js';  // Run `npm install --save classlist.js`.

        /**
         * Web Animations `@angular/platform-browser/animations`
         * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
         * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
         */
        // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

        /**
         * By default, zone.js will patch all possible macroTask and DomEvents
         * user can disable parts of macroTask/DomEvents patch by setting following flags
         * because those flags need to be set before `zone.js` being loaded, and webpack
         * will put import in the top of bundle, so user need to create a separate file
         * in this directory (for example: zone-flags.ts), and put the following flags
         * into that file, and then add the following code before importing zone.js.
         * import './zone-flags.ts';
         *
         * The flags allowed in zone-flags.ts are listed here.
         *
         * The following flags will work for all browsers.
         *
         * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
         * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
         * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
         *
         *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
         *  with the following flag, it will bypass `zone.js` patch for IE/Edge
         *
         *  (window as any).__Zone_enable_cross_context_check = true;
         *
         */

        /***************************************************************************************************
         * Zone JS is required by default for Angular itself.
         */
        // Included with Angular CLI.
        // tslint:disable-next-line: ordered-imports

        /***************************************************************************************************
         * APPLICATION IMPORTS
         */

        /***/
      },

    /***/
    1:
      /*!*************************************************************************************************************************************************************************************!*\
    !*** multi /home/sander/Documents/werk/scully/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/es5-polyfills.js zone.js/dist/zone-legacy ./src/polyfills.ts ***!
    \*************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /home/sander/Documents/werk/scully/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/es5-polyfills.js */
          '../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/es5-polyfills.js'
        );

        __webpack_require__(
          /*! zone.js/dist/zone-legacy */
          '../../node_modules/zone.js/dist/zone-legacy.js'
        );

        module.exports = __webpack_require__(
          /*! /home/sander/Documents/werk/scully/projects/sampleBlog/src/polyfills.ts */
          './src/polyfills.ts'
        );
        /***/
      },
  },
  [[1, 'runtime']],
]);
//# sourceMappingURL=polyfills-es5.js.map
