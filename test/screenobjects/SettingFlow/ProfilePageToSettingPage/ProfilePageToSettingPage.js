class ProfilePageToSettingPage{
    get menuBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/btn_menu"]`)
    }
    get settingBtn(){
        return $(`//*[@text="Settings"]`)
    }
    async goToProfilePageToSettingPage(){
        await this.menuBtn.click() 
        await this.settingBtn.click() 
    }
}
module.exports = new ProfilePageToSettingPage()