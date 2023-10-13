class Duet{
    get duetBtn(){
        return $(`//*[@text="Duet"]`)
    }
    get part1Btn(){
        return $(`//*[@text="Part 1"]`)
    }
    get accessToMicrophone(){
        return $(`//*[@text="OK"]`)
    }
    get timeDurationOfMicrophone(){
        return $(`//*[@text="While using the app"]`)
    }
    get switchToAudio(){
        return $(`//*[@text="Audio"]`)
    }
    get singFullSong(){
        return $(`//*[@text="Sing Full Song"]`)
    }
    get acceptSuggestions(){
        return $(`//*[@text="Got It"]`)
    }
    get acceptSuggestionsforAudioPage(){
        return $(`//*[@text="Got it"]`)
    }
    get headphoneRecommandation(){
        return $(`//*[@text="OK"]`)
    }
    get pauseSongBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/left_button"]`)
    }
    get saveEarlyBtn(){
        return $(`//*[@text="Save early"]`)
    }
    get continueBtn(){
        return $(`//*[@text="Continue"]`)
    }
    get addLyricsInSong(){
        return $(`//*[@resource-id="com.smule.singandroid:id/lyrics_video_switch"]`)
    }
    get saveSongBtn(){
        return $(`//*[@text="Save"]`)
    }
    get nextBtn(){
        return $(`//*[@resource-id="com.smule.singandroid:id/button_next"]`)
    }
    get rejectSubscriptionBtn(){
        return $(`//*[@text="No thanks"]`)
    }
    get skipRatingToTheSong(){
        return $(`//*[@text="Skip"]`)
    }
    get okBtn(){
        return $(`//*[@text="OK"]`)
    }
    async recordDuetSOng(){
        await this.duetBtn.touchAction('longPress')
        await this.duetBtn.click() 
        await this.part1Btn.click()
        // await this.acceptSuggestionsforAudioPage.click()
        // await this.okBtn.click()
        await this.switchToAudio.click ()
        await this.singFullSong.click() 
        await this.acceptSuggestions.click() 
        await this.headphoneRecommandation.click() 
        await driver.pause(10000)
    }
    async saveDuetSong(){
        await this.pauseSongBtn.click() 
        await this.saveEarlyBtn.click() 
        await this.acceptSuggestions.click() 
        await this.continueBtn.click() 
        await this.addLyricsInSong.click() 
        await this.continueBtn.click() 
        await this.saveSongBtn.click()
        await this.nextBtn.click() 
        await this.rejectSubscriptionBtn.click() 
        await this.skipRatingToTheSong.click() 
    }
}
module.exports = new Duet()