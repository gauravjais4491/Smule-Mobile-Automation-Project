// import { config } from "./wdio.shared.conf";
const config = require('./wdio.shared.conf.js')
// import path from "path";
const path = require('path')



config.port = 4723,

config.capabilities = [
    {
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14 Pro Max',
        'appium:platformVersion': '16.4',
        // 'appium:deviceName': 'iPhone 12 Pro Max',
        // 'appium:platformVersion': '14.5',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/IOS/smule1.ipa'),
    }
]

config.specs = ['../test/specs/test.spec.js']



exports.config = config;