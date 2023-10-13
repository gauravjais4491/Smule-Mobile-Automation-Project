class SecurePageForSelectSong{
    get flashAlert(){
        return $(`//*[@text="Duet"]`)
    }
}
module.exports = new SecurePageForSelectSong()