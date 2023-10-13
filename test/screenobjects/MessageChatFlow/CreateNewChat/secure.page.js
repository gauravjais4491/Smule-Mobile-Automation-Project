class SecurePageForCreateNewChat{
    get flashAlert(){
        return $(`//*[@text="Hi"]`)
    }
}
module.exports = new SecurePageForCreateNewChat()