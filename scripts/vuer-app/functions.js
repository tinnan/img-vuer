var selectDirectory = function() {
  const {dialog} = require('electron').remote

  var dirpath = dialog.showOpenDialog({
    properties: [ 'openDirectory' ]
  })
  
  if (typeof dirpath !== undefined
      && dirpath.length > 0) { 
    // If user select a fodler.
    this.imgDirPath = dirpath[0] // get selected folder path.
    var t = openAndLoadJson(this.imgDirPath)
    if (t !== undefined) {
      if (t[T_SITES] !== undefined) {
        this.sites = t[T_SITES]
      } else {
        this.sites = []
      }
      
      if (t[T_ACC] !== undefined) {
        this.actresses = t[T_ACC]
      } else {
        this.actresses = []
      }
      
      this.u_taglist = new Map()
      if (t[T_TAGLIST] !== undefined) {
        var tags = t[T_TAGLIST]
        this.taglist = tags.filter((item) => { return T_TYPE_TAG === item.Type }) // Filter only normal tag to display on select.
          .map((item) => { return item.Name })
        tags.forEach((item) => { this.u_taglist.set(item.Name, item) }) // set underlying tag list as Map.
      } else {
        this.taglist = []
      }
    }
  }
}

var openAndLoadJson = function(folderpath) {
  const {fs} = require('file-system'),
        path = require('path')
  
  var taglibpath = path.join(folderpath, F_TAG_LIB) // build path to tag library file.
  try {
    // get the tag library file.
    var f = fs.readFileSync(taglibpath, {
      encoding: 'utf-8',
      flag: 'r'
    })
    // check if the file is empth.
    if (!f) {
      alert('Tag library file is found but it is empty.')
    } else {
      // parse the file to java script object,
      try {
        return JSON.parse(f)
      } catch (e) {
        try {
          jsonlint.parse(f) // use jsonlint to parse the code again to get a more informative error.
        } catch (ep) {
          alert('Parsing of tags.json file failed: \n' + e)
        }
      }
    }
  } catch(e) {
    if (e.code === 'ENOENT') {
      alert('Tag library file cannot be found in this directory.')
    }
  }
  
  return undefined // when an exeption is raised, return an undefined
                  // maybe will be have to change how to handle exception and error message
                  // (not using alert)
}