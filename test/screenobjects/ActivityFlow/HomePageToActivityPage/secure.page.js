class SecurePageForHomePageToActivityPage{
    get flashAlert(){
        return $(`//*[@text="You can now message in Smule"]`)
    }
}
module.exports = new SecurePageForHomePageToActivityPage()