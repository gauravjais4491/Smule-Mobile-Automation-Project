class SecurePageForProfilePageToSettingPage{
    get flashAlert(){
        return $(`//*[@text="Account"]`)
    }
}

module.exports = new SecurePageForProfilePageToSettingPage()