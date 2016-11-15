$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      imgDirPath: '',
      sites: [],
      actresses: [],
      taglist: [],
      _taglist: null, // Underlying tag list. Used for actual work process.
      // Selected values
      selectedSites: [],
      selectedActresses: [],
      selectedTags: []
    },
    methods: {
      selectDir: selectDirectory
    }
  })
})