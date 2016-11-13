// Image directory selector.
Vue.component('img-dir-selector', {
  data: function () {
    return {
      imgDirPath: ''
    }
  },
  template: '<input type="text" value="{{imgDirPath}}" readonly /><button v-on:click></button>',
  methods: {
    selectDir: function(val) {
      console.log(val)
    }
  }
})



