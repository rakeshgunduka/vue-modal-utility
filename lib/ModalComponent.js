"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _vue.default.component('modal', {
  props: {
    type: String,
    htmlContent: String,
    contentData: Object,
    contentComponent: Object
  },
  template: "\n    <transition name=\"fade\">\n        <div class=\"modal\">\n          <div class=\"close ga-track\" :data-label=\"'Clicked close from ' + type + ' modal'\" @click=\"$emit('close')\"></div>\n          <template>\n            <header>\n              <h1 class=\"drop-modal-title\" v-if=\"contentData.htmlTitle\">\n                <section v-html=\"contentData.htmlTitle\"></section>\n              </h1>\n              <h1 class=\"drop-modal-title\" v-else-if=\"contentData.title\">{{contentData.title}}</h1>\n            </header>\n            <section v-if=\"htmlContent\" v-html=\"htmlContent\"></section>\n            <component v-else v-bind:is=\"contentComponent\" :contentData=\"contentData\"></component>\n          </template>\n        </div>\n      </transition>\n  "
});

exports.default = _default;