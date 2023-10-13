class ExploreFreeCategory{
    get profileBtn() {
        return $(`//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]`)
    }
    get bookmarkSongBtn(){
        return $(`//*[@text="Bookmark Song"]`)
    }

    

    get selectsongFromFreeCategory(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Jitni Dafa - Raat Hamari Toh")')
    }
    get freeCategoryBtn(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().text("Free"))'
        )
    }
    async bookmarkSongFromFreeCategory(){
        await this.profileBtn.touchAction('longPress');
        await this.profileBtn.click() 
        await this.freeCategoryBtn.click() 
        await this.selectsongFromFreeCategory.touchAction('longPress')
        await this.bookmarkSongBtn.click() 
    }




    get trendingCategoryBtn(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().text("Trending Now"))'
        )
    }
    get selectsongFromTrendingCategory(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Bheege honth tere (Short)")')
    }
    async bookmarkSongFromTrendingCategory(){
        await this.profileBtn.touchAction('longPress');
        await this.profileBtn.click() 
        await this.trendingCategoryBtn.click() 
        await this.selectsongFromTrendingCategory.touchAction('longPress')
        await this.bookmarkSongBtn.click() 
    }



    get popularCategoryBtn(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().text("Popular"))'
        )
    }
    get selectsongFromPopularCategory(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Chaleya")')
    }
    async bookmarkSongFromPopularCategory(){
        await this.profileBtn.touchAction('longPress');
        await this.profileBtn.click() 
        await this.popularCategoryBtn.click() 
        await this.selectsongFromPopularCategory.touchAction('longPress')
        await this.bookmarkSongBtn.click() 
    }
    
    
}
module.exports = new ExploreFreeCategory()