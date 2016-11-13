// Image directory selector.
Vue.component('img-dir-selector', {
  template: '<input v-on:change="selectDir($event.target.value)" type="file" />',
  methods: {
    selectDir: function(val) {
      console.log(val)
    }
  }
})



