class HomePageToMessagePage{
    get messageBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/messageIcon"]`)
    }
    async goToHomePageToMessagePage(){
        await this.messageBtn.touchAction('longPress');
        await this.messageBtn.click() 
        await this.messageBtn.click() 
    }
}
module.exports = new HomePageToMessagePage()