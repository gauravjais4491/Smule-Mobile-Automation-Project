class SearchSongs{
    get searchBox(){
        return $('//*[@text="Search for songs, singers, invites…"]')
    }
    async searchSong(song){
        await this.searchBox.click() 
        await this.searchBox.click()
        await this.searchBox.addValue(song)
        await browser.keys("Enter")
    }
}


module.exports = new SearchSongs()