const BasePaths = require('../screenobjects/Package/package')

const [{ SelectLanguage, LoginWithValidCredentials, HomePageToActivityPage, Notification, Invites, News }] = [BasePaths.getPagePaths()]
const [{ SecurePageForHomePageToActivityPage, SecurePageForNotification, SecurePageForInvites, SecurePageForNews }] = [BasePaths.getSecurePaths()]




describe("Activity Flow", async () => {
    it('should explore notifications', async () => {
        
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page To Activity Page
            await HomePageToActivityPage.goToHomePageToActivityPage()
            await expect(SecurePageForHomePageToActivityPage.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToActivityPage.flashAlert).toHaveTextContaining('You can now message in Smule')

            // Notification
            await SecurePageForHomePageToActivityPage.flashAlert.click()
            await Notification.goToNotificationPage()

            // Assertion
            await expect(SecurePageForNotification.flashAlert).toBeExisting()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInActivityFlowInExploreNotification------>${error}.png`)
            throw error;
        }
    }).timeout(3000000)

    it('should add to bookmark from invites', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page To Invites Page
            await HomePageToActivityPage.goToHomePageToActivityPage()
            await expect(SecurePageForHomePageToActivityPage.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToActivityPage.flashAlert).toHaveTextContaining('You can now message in Smule')

            // Notification
            await SecurePageForHomePageToActivityPage.flashAlert.click()
            await Invites.addToBookmarkInvite()

            // Assertion
            await expect(SecurePageForInvites.flashAlert).toBeExisting()
            await expect(SecurePageForInvites.flashAlert).toHaveTextContaining('Bookmarked invites are private. You can find them in your Profile under Bookmarks section.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInActivityFlowInAddBookmark------>${error}.png`)
            throw error;
        }

    }).timeout(3000000)

    it('should remove from bookmark from invites', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page To Invites Page
            await HomePageToActivityPage.goToHomePageToActivityPage()
            await expect(SecurePageForHomePageToActivityPage.flashAlert).toBeExisting()
            await expect(SecurePageForHomePageToActivityPage.flashAlert).toHaveTextContaining('You can now message in Smule')

            // Notification
            await SecurePageForHomePageToActivityPage.flashAlert.click()
            await Invites.removeToBookmarkInvites()

            // Assertion
            await expect(SecurePageForInvites.flashAlert).not.toBeExisting()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInActivityFlowInRemoveBookmark------>${error}.png`)
            throw error;
        }
    }).timeout(3000000)

    it('should explore news', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Home Page To Invites Page
            await HomePageToActivityPage.goToHomePageToActivityPage()
            await expect(await SecurePageForHomePageToActivityPage.flashAlert).toBeExisting()
            await expect(await SecurePageForHomePageToActivityPage.flashAlert).toHaveTextContaining('You can now message in Smule')

            // News
            await SecurePageForHomePageToActivityPage.flashAlert.click()
            await News.goToNewsPage()

            // Assertion
            await expect(await SecurePageForNews.flashAlert).toBeExisting()
            await expect(await SecurePageForNews.flashAlert).toHaveTextContaining('No news from Smule yet')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInActivityFlowInNews------>${error}.png`)
            throw error;
        }

    }).timeout(3000000)
})

afterEach(async () => {
    await browser.closeApp()
    await browser.launchApp()
})