"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = exports.modalVue = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ModalComponent = _interopRequireDefault(require("./ModalComponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
var modalVue = null;
exports.modalVue = modalVue;
var modal = {
  init: function init() {
    exports.modalVue = modalVue = new _vue.default({
      el: '#modal-container',
      template: "\n        <div id=\"modal-container\" :class=\"[type + '-modal', classList.join(' ')]\">\n          <div v-if=\"visible\" class=\"overlay ga-track\" :data-label=\"'Clicked overlay from ' + type + ' modal'\" @click=\"$emit('close')\" key=\"1\"></div>\n          <modal v-if=\"visible\" :contentComponent=\"contentComponent\" @close=\"hide()\" :type=\"type\" :htmlContent=\"htmlContent\" :contentData=\"contentData\">\n          </modal>\n        </div>\n      ",
      components: {
        'modal': _ModalComponent.default
      },
      data: {
        currentView: 'modal',
        visible: false,
        type: 'default',
        htmlContent: '',
        contentData: {},
        classList: [],
        contentComponent: {},
        onHide: null,
        onShow: null
      },
      updated: function updated() {
        var $modalOverlay = document.querySelector('.overlay:not(.modal)');

        if ($modalOverlay) {
          $modalOverlay.onclick = function () {
            modal.hide();
          };
        }

        ;
      },
      methods: {
        hide: function hide() {
          var onHide = this.onHide;
          Object.assign(this, {
            currentView: 'modal',
            visible: false,
            type: 'default',
            htmlContent: '',
            contentData: {},
            classList: [],
            contentComponent: {},
            onHide: null,
            onShow: null
          });
          this.$nextTick(function () {
            document.body.classList.remove('stop-scrolling');
          });

          if (onHide) {
            onHide();
          }
        },
        show: function show(modalData) {
          Object.assign(this, modalData, {
            visible: true
          });
          this.$nextTick(function () {
            document.body.classList.add('stop-scrolling');
          });

          if (this.onShow) {
            this.onShow();
          }
        }
      }
    });
  },
  hide: function hide() {
    modalVue.hide();
  },
  show: function show(modalData) {
    modalVue.show(modalData);
  }
};
exports.modal = modal;