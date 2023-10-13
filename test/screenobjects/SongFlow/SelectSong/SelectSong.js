class SelectSong{
    get searchedsong(){
        return $(`//*[@text="Jitni Dafa - Raat Hamari Toh"]`)
    }
    async selectSong(){
        await this.searchedsong.click() 
    }
}

module.exports = new SelectSong()