// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const closeButton = document.getElementById('btn-close')
const minimizeButton = document.getElementById('btn-minimize')
const maximizeButton = document.getElementById('btn-maximize')

closeButton.addEventListener('click', () => {
  window.electronAPI.closeButton()
})

minimizeButton.addEventListener('click', () => {
  window.electronAPI.minimizeButton()
})

maximizeButton.addEventListener('click', () => {
  window.electronAPI.maximizeButton()
})
