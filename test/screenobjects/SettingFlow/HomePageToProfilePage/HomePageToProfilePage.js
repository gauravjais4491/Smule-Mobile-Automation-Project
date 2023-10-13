class HomePageToProfilePage{
    get profileBtn() {
        return $(`//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]`)
    }
    async goToHomePageToProfilePage(){
        await this.profileBtn.touchAction('longPress');
        await this.profileBtn.click() 
        await this.profileBtn.click() 
    }
}

module.exports = new HomePageToProfilePage()