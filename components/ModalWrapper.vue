<template>
  <transition name="fade">
    <div class="modal">
      <div class="close ga-track" :data-label="'Clicked close from ' + type + ' modal'" @click="$emit('close')"></div>
      <template>
        <header>
          <h1 class="drop-modal-title" v-if="contentData.htmlTitle">
            <section v-html="contentData.htmlTitle"></section>
          </h1>
          <h1 class="drop-modal-title" v-else-if="contentData.title">{{contentData.title}}</h1>
        </header>
        <section v-if="htmlContent" v-html="htmlContent"></section>
        <component v-else v-bind:is="contentComponent" :contentData="contentData"></component>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: String,
    htmlContent: String,
    contentData: Object,
    contentComponent: Object
  }
};
</script>

<style>
  .modal {
    position: fixed;
    width: 90%;
    max-width: 450px;
    right: 0;
    left: 0;
    margin: 20px auto 0 auto;
    border-radius: 3px;
    padding: 20px;
    z-index: 1000;
    a {
      color: #111;
      font-size: 14px;
      display: block;
      padding: 12px 0;
      line-height: 1.5;
      text-decoration: none;
    }
    hr {
      display: none;
    }
    header {
      text-align: center;
      overflow: hidden;
      padding-bottom: 15px;
      min-height: 47px;
      h1 {
        float: left;
        margin: 0;
        text-align: left;
        font-size: 1.3em;
        font-weight: bold;
      }
    }

    section {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      max-height: 400px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      border-bottom: 1px solid #efefef;
      &:last-of-type {
        border: 0;
        a {
          padding-bottom: 0;
        }
      }
    }
  }
  .close {
    background:  url(../assets/close.png);
    position: absolute;
    right: -5px;
    top: 45px;
    cursor: pointer;
    height: 25px;
    width: 25px;
    background-size: 60%;
    background-repeat: no-repeat;
    z-index: 1001;
  }
  .overlay {
    background: rgba(255,255,255,.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
</style>
