// import { config } from "./wdio.shared.conf";
const config = require('./wdio.shared.conf.js')
const path = require('path')

config.port = 4723;

    config.capabilities = [
        {
            platformName: 'Android',
            'appium:deviceName': 'Pixel 4',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': path.join(process.cwd(), './app/Android/smule.apk'),
            'appium:autoGrantPermissions': true
        }
        
    ]
config.specs = [
    // '../test/specs/SongFlow.spec.js'
    // '../test/specs/MessageChatFlow.spec.js'
    // '../test/specs/SettingFlow.spec.js'
    '../test/specs/Login.spec.js',
    // '../test/specs/SongbookFlow.spec.js'
    // '../test/specs/ActivityFlow.spec.js'

]

exports.config = config;