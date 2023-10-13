class SecurePageForInvites{
    get flashAlert(){
        return $(`//*[@text="Bookmarked invites are private. You can find them in your Profile under Bookmarks section."]`)
        
    }
}
module.exports = new SecurePageForInvites()