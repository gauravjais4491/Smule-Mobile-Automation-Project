class HomePageToActivityPage{
    get activityBtn(){
        return $(`//*[@text="Activity"]`)
    }
    async goToHomePageToActivityPage(){
        await this.activityBtn.touchAction('longPress')
        await this.activityBtn.click()
        await this.activityBtn.click()
    }
}
module.exports = new HomePageToActivityPage()