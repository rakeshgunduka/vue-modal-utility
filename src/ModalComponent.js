import Vue from 'vue';

export default Vue.component('modal', {
  props: {
    type: String,
    htmlContent: String,
    contentData: Object,
    contentComponent: Object
  },
  template: `
    <transition name="fade">
        <div class="modal">
          <div class="close ga-track" :data-label="'Clicked close from ' + type + ' modal'" @click="$emit('close')"></div>
          <template>
            <header>
              <h1 class="drop-modal-title" v-if="contentData.title">
                <section v-html="contentData.title"></section>
              </h1>
            </header>
            <section v-if="htmlContent" v-html="htmlContent"></section>
            <component v-else v-bind:is="contentComponent" :data="contentData"></component>
          </template>
        </div>
      </transition>
  `
})
