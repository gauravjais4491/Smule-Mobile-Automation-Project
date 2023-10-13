class SignIn{
    get signInWithEmailBtn(){
        return $(`//*[@text="Sign in with Email"]`)
    }
    get email(){
        return $('//*[@text="Email Address"]')
    }
    get next(){
        return $(`//*[@text="Next"]`)
    }
    get existingEmailPassword(){
        return $(`//*[@text="your password"]`)
    }
    get newUserEmailPassword(){
        return $(`//*[@text="Enter Password"]`)
        
    }
    get photoBtn(){
        return $('//*[@resource-id="com.smule.singandroid:id/add_photo_enlarged_icon_cta"]')
    }

    get selectPhotoMode(){
        return $('//*[@text="Take Photo"]')
    }
    get takePhoto(){
        return $(`//*[@resource-id="com.android.camera2:id/shutter_button"]`)
    }
    get ok(){
        return $('//*[@text="OK"]')
    }
    get cameraAccess(){
        return $('//*[@text="Only this time"]')
        
    }
    get confirmPhoto(){
        return $(`~Done`)
    }
    get savePhoto(){
        return $(`//*[@text="Save"]`)
    }
    get error(){
        return $(`//*[@text="The password you entered is incorrect."]`)
    }
    get skipToConnetFriends(){
        return $(`//*[@text="Skip"]`)        
    }
    get firstGenres(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("India")')
    }
    get secondGenres(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Love Songs")')
    }
    get thirdGenres(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Bollywood")')
    }
    get fourthGenres(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Hindi")')
    }
    get rejectFreeTrial(){
        return $(`//*[@text="No thanks"]`) 
    }
    get skipToUnlockSongBtn(){
        return $(`//*[@text="Skip"]`) 
    }
    get conformationBtn(){
        return $(`//*[@text="Yes"]`)
    }

    async signInWithEmail(){
        await this.signInWithEmailBtn.click() 
    }

    async setEmail(email){
        await this.email.setValue(email)
        await this.next.click() 
    }
    async setEmailAndGoNextUsingEnterKeyboardButtom(email){
        await this.email.setValue(email)
        await browser.keys('Enter')
    }

    async setPasswordAndGoNextUsingEnterKeyboardButtom(email,password){
        await this.email.setValue(email)
        await this.next.click() 
        await this.existingEmailPassword.setValue(password)
        await browser.keys('Enter')
    }

    async setPasswordForExistingUser(password){
        await this.existingEmailPassword.setValue(password)
        await this.next.click() 
    }

    async setPasswordForNewUser(password){
        await this.newUserEmailPassword.setValue(password)
        await this.next.click() 
        await expect(this.next).toBeExisting()
        await this.next.click()
    }
    async setProfilePhoto(){
        await this.photoBtn.click()
        await this.selectPhotoMode.click()
        await expect(this.takePhoto).toBeExisting()
        await this.takePhoto.click() 
        await this.confirmPhoto.click() 
        await driver.pause(2000)
        await this.savePhoto.click() 
        await this.next.click() 
        await this.skipToConnetFriends.click()
    }
    async addGenres(){
        await this.fourthGenres.click()
        await this.secondGenres.click() 
        await this.thirdGenres.click() 
        await this.firstGenres.click() 
        await this.next.click() 
        await this.rejectFreeTrial.click() 
        await this.skipToUnlockSongBtn.click() 
        await this.conformationBtn.click() 
    }
}


module.exports = new SignIn()