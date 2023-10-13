class SecurePageForExploreCategory{
    get flashAlert(){
        return $(`//*[@text="Bookmarked songs are private. You can find them in your Profile under Bookmarks section."]`)
    }
}
module.exports = new SecurePageForExploreCategory()