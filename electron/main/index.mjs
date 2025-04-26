const { app, BrowserWindow } = await import('electron')
const path = await import('node:path')
const isDev = (await import('electron-is-dev')).default
const { fileURLToPath } = await import('node:url')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 900,
    minHeight: 680,
    // titleBarStyle: 'hidden',
    icon: path.join(__dirname, '../../../public/icons/png/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
      preload: path.join(__dirname, '../preload/index.mjs'),
      contextIsolation: true,
    },
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:5173'
      : `file://${path.join(__dirname, '../../dist/index.html')}`
  )

  if (isDev) mainWindow.webContents.openDevTools({ mode: 'detach' })

  mainWindow.on('closed', () => {
    mainWindow = null
    app.quit()
  })
}

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
