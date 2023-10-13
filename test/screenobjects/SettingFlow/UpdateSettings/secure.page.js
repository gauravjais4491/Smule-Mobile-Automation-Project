class SecurePageForUpdateSettings{
    get flashAlertForUsernameLessThanOneCharacter(){
        // return $(`//*[@text="The Username you entered is too short. Username must be at least 2 characters long."]`)
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("The Username you entered is too short. Username must be at least 2 characters long.")')
    }
    get flashAlertForUsernameIsAlreadytaken(){
        // return $(`//*[@text="Sorry, this Username is already taken"]`)
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Sorry, this Username is already taken")')
    }
    get flashAlertForWithoutFollowingGuideLinesForPassword(){
        // return $(`//*[@text="New passwords don't match."]`)
        return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("You need to use at least 8 characters for your password.")`)
        // You need to use at least 8 characters for your password.
    }
    get flashAlertForDifferentNewPasswordAndConfirmPassword(){
        // return $(`//*[@text="You need to use at least 8 characters for your password."]`)
        return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("New passwords don't match.")`)
    }
    get flashAlertForLoginWithValidCredenstials(){
        // return $(`//*[@text="Profile Updated!"]`)
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Profile Updated!")')
    }
    get flashAlertForLoginWithSpaceOrSpecialCharacterInBetweenUsername(){
        // return $(`//*[@text="The Username you entered is invalid. Only letters and numbers are allowed."]`)
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("The Username you entered is invalid. Only letters and numbers are allowed.")')
    }
    get flashAlertForUsernameContainsOnlySpace(){
        // return $(`//*[@text="The Username you entered is invalid. Only letters and numbers are allowed."]`)
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("You must enter a username")')
    }
    get flashAlertForEasyPassword(){
        // return $(`//*[@text="The Username you entered is invalid. Only letters and numbers are allowed."]`)
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Please consider a stronger password. Try a mix of letters, numbers and symbols.")')
    }
    
    // Please consider a stronger password. Try a mix of letters, numbers and symbols.
}
module.exports = new SecurePageForUpdateSettings()