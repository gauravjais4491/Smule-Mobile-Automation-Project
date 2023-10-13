class SecurePageForHomePageToMessagePage{
    get flashAlert(){
        return $(`//*[@text="Inbox"]`)
    }
}
module.exports = new SecurePageForHomePageToMessagePage()