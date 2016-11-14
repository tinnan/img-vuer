$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      imgDirPath: '',
      sites: [],
      actresses: [],
      taglist: [],
    },
    methods: {
      selectDir: _selectDirectory
    }
  })
})