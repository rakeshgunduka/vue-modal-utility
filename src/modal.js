/* jshint esversion: 6 */
import Vue from 'vue';
import Modal from './ModalComponent.js';

export let modalVue = null;

export const modal = {
  init: () => {
    modalVue = new Vue({
      el: '#modal-container',
      template: `
        <div id="modal-container" :class="type + '-modal'">
          <div v-if="visible" class="overlay ga-track" :data-label="'Clicked overlay from ' + type + ' modal'" @click="$emit('close')" key="1"></div>
          <modal v-if="visible" :contentComponent="contentComponent" @close="hide()" :type="type" :htmlContent="htmlContent" :contentData="contentData">
          </modal>
        </div>
      `,
      components: {
        'modal': Modal
      },
      data: {
        currentView: 'modal',
        visible: false,
        type: 'default',
        htmlContent: '',
        contentData: {},
        contentComponent: {},
        onHide: null,
        onShow: null
      },
      updated () {
        const $modalOverlay = document.querySelector('.overlay:not(.modal)');
        if ($modalOverlay) {
          $modalOverlay.onclick = () => {
            modal.hide();
          };
        };
      },
      methods: {
        hide () {
          const onHide = this.onHide;
          Object.assign(this, {
            currentView: 'modal',
            visible: false,
            type: 'default',
            htmlContent: '',
            contentData: {},
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
        show (modalData) {
          Object.assign(this, modalData, {visible: true });
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
  hide () {
    modalVue.hide();
  },
  show (modalData) {
    modalVue.show(modalData);
  }
};
