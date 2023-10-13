class CreateNewChat {
    get newMessageIconBtn() {
        return $(`//*[@resource-id="com.smule.singandroid:id/start_new_chat_icon"]`)
    }

    get searchFriendsTextBox(){
        return $(`//*[@resource-id="com.smule.singandroid:id/search_edit_text"]`)
    }

    get selectProfile(){
        return $('//*[@resource-id="com.smule.singandroid:id/background"]')
    }
    
    get nextBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/new_chat_forward_chat"]`)
    }

    get writeMessageTextBox(){
        return $(`//*[@text="Type a message…"]`)
    }

    get sendBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/send_button"]`)
    }

    async touchAction(){
        await this.newMessageIconBtn.touchAction('longPress');
        await this.newMessageIconBtn.touchAction('longPress');
        await this.newMessageIconBtn.touchAction('longPress');
        await this.newMessageIconBtn.touchAction('longPress');
        await this.newMessageIconBtn.touchAction('longPress');
        await this.newMessageIconBtn.touchAction('longPress');
        await this.newMessageIconBtn.touchAction('longPress');
    }
    
    async createNewChat() {
        await this.touchAction()
        await this.newMessageIconBtn.click()
    }
    async findFriends(personName){
        await this.searchFriendsTextBox.setValue(personName) 
        await this.selectProfile.click() 
        await this.nextBtn.click() 
    }
    async sendMessage(message){
        await this.writeMessageTextBox.setValue(message)
        await this.sendBtn.click() 
    }
}
module.exports = new CreateNewChat()