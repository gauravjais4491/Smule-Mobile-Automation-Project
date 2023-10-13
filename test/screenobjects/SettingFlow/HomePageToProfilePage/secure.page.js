
class SecurePageForHomePageToProfilePage{
    get flashAlert(){
        return $(`//*[@text="Edit Profile"]`)
    }
}
module.exports = new SecurePageForHomePageToProfilePage()