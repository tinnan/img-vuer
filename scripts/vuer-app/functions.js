var _selectDirectory = function() {
  const {dialog} = require('electron').remote,
        {fs} = require('file-system'),
        path = require('path')

  this.pathErr = false;
  var dirpath = dialog.showOpenDialog({
    properties: [ 'openDirectory' ]
  })
  if (typeof dirpath !== 'undefined'
      && dirpath.length > 0) {
    this.imgDirPath = dirpath[0]
    var taglibpath = path.join(this.imgDirPath, F_TAG_LIB)
    try {
      var f = fs.readFileSync(taglibpath, {
        encoding: 'utf-8',
        flag: 'r'
      })
    } catch(e) {
      if (e.code === 'ENOENT') {
        alert('Tag library file cannot be found in this directory.')
      }
    }
  }
}