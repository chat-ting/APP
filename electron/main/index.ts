// main.ts
import { app, BrowserWindow, ipcMain } from 'electron'
import { dirname, join } from 'node:path'
import isDev from 'electron-is-dev'

const __dirname = dirname(__filename)

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 800,
    minHeight: 500,
    frame: false,
    titleBarStyle: 'hiddenInset',
    titleBarOverlay: {
      color: '#000000',
      symbolColor: '#000000',
      height: 40,
    },

    icon: join(__dirname, '../../../public/icons/png/icon.png'),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      devTools: isDev,
    },
  })

  const url = isDev
    ? 'http://localhost:5173'
    : `file://${join(__dirname, '../../dist/index.html')}`

  mainWindow.loadURL(url)

  if (isDev) mainWindow.webContents.openDevTools({ mode: 'detach' })

  mainWindow.on('closed', () => {
    mainWindow = null
    app.quit()
  })
}

/* ──────────────── app life-cycle ──────────────── */

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

/* ──────────────── IPC handlers ──────────────── */

ipcMain.on('minimizeApp', () => {
  mainWindow?.minimize()
})

ipcMain.on('maximizeApp', () => {
  if (!mainWindow) return
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
})

ipcMain.on('closeApp', () => {
  mainWindow?.close()
})
