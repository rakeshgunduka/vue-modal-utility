/* jshint esversion: 6 */

import Vue from 'vue';
import Modal from './ModalWrapper';

export let modalVue = null;

export const modal = {
  init: () => {
    modalVue = new Vue({
      el: '#modal-container',
      template: `
        <div id="modal-container" :class="type + '-modal'">
          <div v-if="show" class="overlay ga-track" :data-label="'Clicked overlay from ' + type + ' modal'" @click="$emit('close')" key="1"></div>
          <modal v-if="show" :contentComponent="contentComponent" @close="hide()" :type="type" :htmlContent="htmlContent" :contentData="contentData">
          </modal>
        </div>
      `,
      components: {
        'modal': Modal
      },
      data: {
        currentView: 'modal',
        show: false,
        type: 'default',
        htmlContent: '',
        contentData: {},
        contentComponent: Object
      },
      methods: {
        hide () {
          modal.hide();
        }
      }
    });
  },
  hide () {
    if (modalVue !== null && modalVue.show) {
      modalVue.show = false;
      modalVue.htmlContent = '';
      modalVue.contentData = {};
      modalVue.contentComponent = Object;
      modalVue.$nextTick(function () {
        document.body.classList.remove('stop-scrolling');
      });
    }
  },
  show (modalData) {
    console.log(modalData);
    Object.assign(modalVue, modalData);
    modalVue.show = true;
    modalVue.$nextTick(function () {
      document.body.classList.add('stop-scrolling');
    });
  },
  shown () {
    return modalVue.show;
  }
};
