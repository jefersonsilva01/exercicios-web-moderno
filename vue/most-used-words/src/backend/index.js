const { ipcMain } = require('electron')
const pathToRows = require('./pathsToRows')
const prepateData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on("process-subtitles", (event, paths) => { 
  pathToRows(paths)
    .then(rows => prepateData(rows))
    .then(prepateData => groupWords(prepateData))
    .then(groupedWords => {
      event.reply('process-subtitles', groupedWords)
    })
})