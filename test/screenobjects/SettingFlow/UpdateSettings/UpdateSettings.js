class UpdateSettings {
    get usernameBtn() {
        return $(`//*[@resource-id="com.smule.singandroid:id/username_field"]`)
    }
    
    get newPasswordTextBox() {
        return $(`//*[@text="New Password"]`)
    }
    get confirmPasswordTextBox() {
        return $(`//*[@text="Confirm Password"]`)
    }
    get firstNameTextBox() {
        return $(`//*[@resource-id="com.smule.singandroid:id/firstname_field"]`)
    }
    get lastNameTextBox() {
        return $(`//*[@resource-id="com.smule.singandroid:id/lastname_field"]`)
    }
    get saveBtn() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Save")')
    }

    async updateUserName(newUsername) {
        await this.usernameBtn.setValue(newUsername)
    }
    async updateUserNameWithValidCredentials(newUsername, newPassword, confirmNewPassword, firstName, lastName) {
        await this.usernameBtn.setValue(newUsername)
        await this.newPasswordTextBox.setValue(newPassword)
        await this.confirmPasswordTextBox.setValue(confirmNewPassword)
        await this.firstNameTextBox.setValue(firstName)
        await this.lastNameTextBox.setValue(lastName)
        await this.saveBtn.click()
    }
    async updateUserNameWithSaveBtn(newUsername) {
        await this.usernameBtn.setValue(newUsername)
        await this.saveBtn.click()
    }
    async updatePassword(newPassword, confirmNewPassword) {
        await this.newPasswordTextBox.setValue(newPassword)
        await this.confirmPasswordTextBox.setValue(confirmNewPassword)
        await this.saveBtn.click()
    }
    async updateFirstAndLastName(firstName, lastName) {
        await this.firstNameTextBox.setValue(firstName)
        await this.lastNameTextBox.setValue(lastName)
        await this.saveBtn.click() 
    }
}
module.exports = new UpdateSettings()