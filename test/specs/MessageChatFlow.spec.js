
const BasePaths = require('../screenobjects/Package/package')

const [{ LoginWithValidCredentials, SelectLanguage, HomePageToMessagePage, ExistingChat, CreateNewChat }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToMessagePage, SecurePageForExistingChat, SecurePageForCreateNewChat }] = [BasePaths.getSecurePaths()]



describe('Message Chat Flow', () => {
    it('should send a message to the existing chat', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // HomePage to message page
            await HomePageToMessagePage.goToHomePageToMessagePage()
            await expect(await SecurePageForHomePageToMessagePage.flashAlert).toBeExisting()
            await driver.pause(5000)
            await expect(await SecurePageForHomePageToMessagePage.flashAlert).toHaveTextContaining('Inbox')
            await driver.pause(5000 )

            // Send Message to Existing User
            await ExistingChat.messageExistingChat()
            await ExistingChat.sendMessage('Hello, I am Gaurav')
            await expect(await SecurePageForExistingChat.flashAlert).toBeExisting()
            await expect(await SecurePageForExistingChat.flashAlert).toHaveTextContaining(`Hello, I am Gaurav`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInMessageFlowWithExistingChat------>${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should send a message to the new chat', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // HomePage to message page
            await HomePageToMessagePage.goToHomePageToMessagePage()
            await expect(await SecurePageForHomePageToMessagePage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToMessagePage.flashAlert).toHaveTextContaining('Inbox')

            // Send Message to New User
            await CreateNewChat.createNewChat()
            await CreateNewChat.findFriends('gauravjais4499')
            await CreateNewChat.sendMessage('Hi')
            await expect(await SecurePageForCreateNewChat.flashAlert).toBeExisting()
            await expect(await SecurePageForCreateNewChat.flashAlert).toHaveTextContaining(`Hi`)
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInMessageFlowWithNewChat------>${error}.png`)
            throw error;
        }
    }).timeout(300000);
})

afterEach(async () => {
    await browser.closeApp()
    await browser.launchApp()
})