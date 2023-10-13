class Language{
    get Language(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("English")')
    }
    get saveLanguage(){
        return $('//*[@resource-id="com.smule.singandroid:id/yesButton"]')
    }
    
    async selectLanguage(){
        await this.Language.click() 
    }
    async confirmLanguage(){
        await this.saveLanguage.click() 
    }
}
module.exports = new Language()
