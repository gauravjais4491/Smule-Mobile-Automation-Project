const BasePaths = require('../screenobjects/Package/package')

const [{ LoginWithValidCredentials, SelectLanguage, HomePageToProfilePage, ProfilePageToSettingPage, UpdateSettings }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToProfilePage, SecurePageForProfilePageToSettingPage, SecurePageForUpdateSettings }] = [BasePaths.getSecurePaths()]



describe('Songs', () => {
    it("should update setting with valid credentials", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home page to profile page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile page to setting page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update setting
            await UpdateSettings.updateUserNameWithValidCredentials('Noob_Gaurav', "Gaurav123", 'Gaurav123', 'Noob', 'Gaurav')
            // await expect(await SecurePageForUpdateSettings.flashAlertForLoginWithValidCredenstials).toBeExisting()
            // await expect(await SecurePageForUpdateSettings.flashAlertForLoginWithValidCredenstials).toHaveTextContaining('Profile Updated!')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithInvalidCredentials------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with different new password and confirm password", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updatePassword('Gaurav1234', 'Gaurav123456')
            await expect(await SecurePageForUpdateSettings.flashAlertForDifferentNewPasswordAndConfirmPassword).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForDifferentNewPasswordAndConfirmPassword).toHaveTextContaining(`New passwords don't match.`)

        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithDifferentPasswordAndConfirmPassword------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with easy password", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updatePassword('12345678', '12345678')
            await expect(await SecurePageForUpdateSettings.flashAlertForEasyPassword).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForEasyPassword).toHaveTextContaining(`Please consider a stronger password. Try a mix of letters, numbers and symbols.`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithEasyPassword------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting without follow the guidelines of password", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updatePassword('1223', '1223')
            await expect(await SecurePageForUpdateSettings.flashAlertForWithoutFollowingGuideLinesForPassword).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForWithoutFollowingGuideLinesForPassword).toHaveTextContaining('You need to use at least 8 characters for your password.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithoutFollowTheGuidelines------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with space as first name and last name", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updateFirstAndLastName(' ', ' ')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithSpaceAsFirstNameAndLastName------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with blank as username", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updateUserName("")
            await expect(await UpdateSettings.saveBtn).not.toBeEnabled()

        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithBlankAsUsername------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with space in between username", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updateUserNameWithSaveBtn("Noob Gaurav")
            await expect(await SecurePageForUpdateSettings.flashAlertForLoginWithSpaceOrSpecialCharacterInBetweenUsername).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForLoginWithSpaceOrSpecialCharacterInBetweenUsername).toHaveTextContaining('The Username you entered is invalid. Only letters and numbers are allowed.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithSpaceInbetweenUsername------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with space as username", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updateUserNameWithSaveBtn(" ")
            await expect(await SecurePageForUpdateSettings.flashAlertForUsernameContainsOnlySpace).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForUsernameContainsOnlySpace).toHaveTextContaining('You must enter a username')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithSpaceAsUsername------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with username is already taken", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // should update setting
            await UpdateSettings.updateUserNameWithSaveBtn("1234")
            await expect(await SecurePageForUpdateSettings.flashAlertForUsernameIsAlreadytaken).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForUsernameIsAlreadytaken).toHaveTextContaining('Sorry, this Username is already taken')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithUsernameAlreadyTaken------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with username less than 2 character", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updateUserNameWithSaveBtn("1")
            await expect(await SecurePageForUpdateSettings.flashAlertForUsernameLessThanOneCharacter).toBeExisting()
            await expect(await SecurePageForUpdateSettings.flashAlertForUsernameLessThanOneCharacter).toHaveTextContaining('The Username you entered is too short. Username must be at least 2 characters long.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithUsernameLessThanTwoCharacter------>${error}.png`)
            throw error;
        }
    }).timeout(100000);

    it("should update setting with enter first name and last name as number", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page to Profile Page
            await HomePageToProfilePage.goToHomePageToProfilePage()
            await expect(await SecurePageForHomePageToProfilePage.flashAlert).toBeExisting()
            await expect(await flashAlert).toHaveTextContaining('Edit Profile')

            // Profile Page to Setting Page
            await ProfilePageToSettingPage.goToProfilePageToSettingPage()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toBeExisting()
            await expect(await SecurePageForProfilePageToSettingPage.flashAlert).toHaveTextContaining('Account')

            // Update Setting
            await UpdateSettings.updateFirstAndLastName('1', '2')
            // await expect(await SecurePageForUpdateSettings.flashAlertForLoginWithValidCredenstials).toBeExisting()
            // await expect(await SecurePageForUpdateSettings.flashAlertForLoginWithValidCredenstials).toHaveTextContaining('Profile Updated!')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsWhileUpdateSettingsWithFirstnameAndLastnameAsNumber------>${error}.png`)
            throw error;
        }
    }).timeout(100000)
})

afterEach(async () => {
    await driver.closeApp()
    await driver.launchApp()
})