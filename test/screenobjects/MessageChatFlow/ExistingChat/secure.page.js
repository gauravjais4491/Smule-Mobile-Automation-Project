class SecurePageForExistingChat{
    get flashAlert(){
        return $(`//*[@text="Hello, I am Gaurav"]`)
    }
}
module.exports = new SecurePageForExistingChat()