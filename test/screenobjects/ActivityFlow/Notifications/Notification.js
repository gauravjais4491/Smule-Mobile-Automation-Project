class Notification{
    get notificationBtn(){
        return $(`//*[@text="Notifications"]`)
    }

    async goToNotificationPage(){
        await this.notificationBtn.click() 
    }
    
}
module.exports = new Notification()