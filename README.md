# Vue Modal Utility
Generic vue modal plugin.

# Installation
```
$ npm install vue-modal-utility
```

# Get Started
#### Add element to index file of the page.

    <div id="modal-container"></div>

#### Create your own Modal Vue Component
    <template>
        <div class="user-defined-modal-content {{type}}-modal" v-show="show">
          <h1>{{data.title}}</h1>
          <img :src="data.imageUrl"/>
          <h5>{{data.description}}</h5>
        </div>
    </template>
    <script>
    export default {
      name: 'MyModal',
      props: {
        show: Boolean,
        type: String,
        data: Object
      }
    }
    </script>

## Usage 
#### Using Component as Modal Content
    import MyModalComponent from 'MyModal.vue';
    import { modal } from 'vue-modal-utility';
    
    const modalData = {
        title: "This is my first modal",
        imageUrl: "http://image.url",
        description: "Cool Modal"
     }
    modal.show({
      type: 'my-modal',
      htmlContent: '',
      contentComponent: MyModalComponent,
      contentData: modalData
    });

#### Using HTML as Modal Content
    import { modal } from 'vue-modal-utility';
    
    modal.show({
      type: 'modal-type',
      classList: ['userdefined-class', 'another-class'],
      htmlContent: '<div><h1>Hello there!</h1></div>',
      contentData: {
        title: "Hey this is HTML content modal"
      }
    });

## To-Dos
- Test cases.
- Code Cleanup.
- Adding themes.
- Generalizing modal initialization.
