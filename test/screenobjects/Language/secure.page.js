class SecurePageForLanguage{
    get flashAlert(){
        return $(`//*[@text="Sign in with Email"]`)
    }
}
module.exports = new SecurePageForLanguage()

