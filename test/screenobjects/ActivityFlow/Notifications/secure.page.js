class SecurePageForNotification{
    get flashAlert(){
        return $(`//*[@text="gauravjais4499 followed you"]`)
    }
    
}
module.exports = new SecurePageForNotification()