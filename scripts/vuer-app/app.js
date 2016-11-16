$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      imgDirPath: '',
      sites: [],
      actresses: [],
      taglist: [],
      u_taglist: null, // Underlying tag list. Used for actual work process.
      selectedSites: [],
      selectedActresses: [],
      selectedTags: []
    },
    methods: {
      selectDir: selectDirectory
    },
    watch: {
      selectedSites: function() {
        console.log('Value of selected Sites has changed. New value: ' + this.selectedSites)
      }, 
      selectedActresses: function() {
        console.log('Value of selected Actresses has changed. New value: ' + this.selectedActresses)
      },
      selectedTags: function() {
        console.log('Value of selected Tags has changed. New value: ' + this.selectedTags)
      }
    },
    computed: {
      allSelectedTags: function() {
        var allSelectedTags = new Array()
        if (this.selectedSites !== undefined) {
          allSelectedTags = this.selectedSites
        }
        if (this.selectedActresses !== undefined) {
          allSelectedTags = allSelectedTags.concat(this.selectedActresses)
        }
        if (this.selectedTags !== undefined) {
          allSelectedTags = allSelectedTags.concat(this.selectedTags)
        }
        return allSelectedTags
      } 
    }
  })
})