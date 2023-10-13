class ExistingChat{
    get otherChatBtn(){
        return $(`//*[@text="Other"]`)
    }
    get personProfile(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("gauravjais4499")')
    }
    get writeMessageTextBox(){
        return $(`//*[@text="Type a message…"]`)
    }
    get sendBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/send_button"]`)
    }
    async touchAction(){
        // to wait until other button won't visible
        await this.otherChatBtn.touchAction('longPress');
        await this.otherChatBtn.touchAction('longPress');
        await this.otherChatBtn.touchAction('longPress');
        await this.otherChatBtn.touchAction('longPress');
        await this.otherChatBtn.touchAction('longPress');
        await this.otherChatBtn.touchAction('longPress');
    }

    async messageExistingChat(){
        // await this.otherChatBtn.waitForExist({setTimeout:30000})
        await this.touchAction()
        await this.otherChatBtn.click() 
        await this.personProfile.click()
    }
    async sendMessage(message){
        await this.writeMessageTextBox.setValue(message)
        await this.sendBtn.click() 
    }
}
module.exports = new ExistingChat()