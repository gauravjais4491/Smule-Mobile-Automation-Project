class SecurePageForNews{
    get flashAlert(){
        return $(`//*[@text="No news from Smule yet"]`)
    }
}
module.exports = new SecurePageForNews()