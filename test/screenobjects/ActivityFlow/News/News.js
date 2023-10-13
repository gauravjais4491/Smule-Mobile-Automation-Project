class News{
    get newsBtn(){
        return $(`//*[@text="News"]`)
    }
    async goToNewsPage(){
        await this.newsBtn.click() 
    }
}
module.exports = new News()