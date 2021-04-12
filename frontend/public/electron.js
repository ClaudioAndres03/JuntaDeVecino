const electron = require('electron')
const { Menu } = electron;
const { autoUpdater } = require('electron-updater')
const { app, BrowserWindow, ipcMain } = require('electron')
app.name = 'JDV';
const log = require('electron-log')

const isMac = process.platform === 'darwin'
const path = require('path');
const isDev = require('electron-is-dev');

const nativeImage = require('electron').nativeImage;
var icon = nativeImage.createFromPath(__dirname + '/public/icon.png');


const menuTemplate = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    },
    // { role: 'editMenu' }
    {
        label: 'Edit',
        submenu: [
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
                { role: 'delete' },
                { role: 'selectAll' },
            ] : [
                    { role: 'delete' },
                    { role: 'selectAll' }
                ])
        ]
    },


    {
        label: 'Resolution',
        submenu: [
            {
                label: '896x504', click() {
                    mainWindow.setSize(896, 504);
                }
            },
            {
                label: '1024x576', click() {
                    mainWindow.setSize(1024, 576);
                }
            },
            {
                label: '1152x648', click() {
                    mainWindow.setSize(1152, 648);
                }
            },
            {
                label: '1280x720', click() {
                    mainWindow.setSize(1280, 720);
                }
            },
            {
                label: '1408x792', click() {
                    mainWindow.setSize(1408, 792);
                }
            },
            {
                label: '1664x936', click() {
                    mainWindow.setSize(1664, 936);
                }
            },
            {
                label: '1920x1080', click() {
                    mainWindow.setSize(1920, 1080);
                }
            },

        ]
    }
]
let mainWindow;
let resizeTimeout;
function createWindow() {
    icon.setTemplateImage(true);
    mainWindow = new BrowserWindow({
        width: 1664,
        height: 936,
        icon: './Icon.ico',
        center: true,
        minWidth: 896,
        minHeight: 504,
        webPreferences: {
            nodeIntegration: true
        }

    });
    //mainWindow.setIcon(path.join(__dirname, '/public/BunkerIcon.png'));

    //const menu = Menu.buildFromTemplate(menuTemplate);
    //Menu.setApplicationMenu(menu);

    mainWindow.setResizable(true);
    mainWindow.setFullScreenable(false);
    // mainWindow.maximize();


    mainWindow.on('resize', (e) => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            let size = mainWindow.getSize();
            mainWindow.setSize(size[0], parseInt(size[0] * 9 / 16));
            console.log(mainWindow.getSize());
        }, 60);
    });


    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    // mainWindow.on('closed', () => mainWindow = null)
    if (isDev) {
        // Open the DevTools.
        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => mainWindow = null);

}

app.on('ready', () => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})

ipcMain.on('app_version', (event) => {
    sendStatusToWindow('Getting App Version....')
    event.sender.send('app_version', { version: app.getVersion() })
})

///////////////////
// Auto upadater //
///////////////////
autoUpdater.requestHeaders = { 'PRIVATE-TOKEN': 'Fh_xwvT55Qdtt2yC46Dq' }
autoUpdater.autoDownload = true
autoUpdater.logger = log
autoUpdater.logger.transports.file.level = 'info'

sendStatusToWindow(autoUpdater)

autoUpdater.on('update-available', () => {
    sendStatusToWindow('An Update is available....')
    mainWindow.webContents.send('update_available')
})

autoUpdater.on('update-downloaded', () => {
    sendStatusToWindow('Update has been downloaded....')
    mainWindow.webContents.send('update_downloaded')
})

ipcMain.on('restart_app', () => {
    sendStatusToWindow('In onRestart_App')
    autoUpdater.quitAndInstall()
})

autoUpdater.on('checking-for-update', function () {
    sendStatusToWindow('Checking for update...')
})

autoUpdater.on('update-not-available', function (info) {
    sendStatusToWindow('Update not available.')
})

autoUpdater.on('error', function (err) {
    sendStatusToWindow('We have an error in auto-updater: ')
    sendStatusToWindow(String(err))
})

autoUpdater.on('download-progress', function (progressObj) {
    let log_message = 'Download speed: ' + progressObj.bytesPerSecond
    log_message =
        log_message + ' - Downloaded ' + parseInt(progressObj.percent) + '%'
    log_message =
        log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')'
    sendStatusToWindow(log_message)
})

// Check for an update 10sec after Program Starts
setTimeout(function () {
    sendStatusToWindow('We are checking for updates and notifying user...')
    autoUpdater.checkForUpdatesAndNotify()
}, 10000)

// Check for an update every 2min.
setInterval(function () {
    sendStatusToWindow('We are checking for updates and notifying user...')
    autoUpdater.checkForUpdatesAndNotify()
}, 120000)

function sendStatusToWindow(message) {
    log.info(message)
}
