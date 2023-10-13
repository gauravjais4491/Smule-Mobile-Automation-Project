class Invites{
    get threeDotBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/mMoreIcon"]`)
    }
    get addTobookmarkBtn(){
        return $(`//*[@text="Bookmark Invite"]`)
    }
    get removebookmarkBtn(){
        return $(`//*[@text="Remove Bookmark"]`)
    }
    async addToBookmarkInvite(){
        await this.threeDotBtn.click() 
        await this.addTobookmarkBtn.click() 
    }
    async removeToBookmarkInvites(){
        await this.threeDotBtn.click() 
        await this.removebookmarkBtn.click() 
    }
}
module.exports = new Invites()