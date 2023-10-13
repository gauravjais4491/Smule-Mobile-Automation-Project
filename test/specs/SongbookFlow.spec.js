
const BasePaths = require('../screenobjects/Package/package')

const [{ SelectLanguage, LoginWithValidCredentials, ExploreCategory }] = [BasePaths.getPagePaths()]
const [{ SecurePageForExploreCategory }] = [BasePaths.getSecurePaths()]



describe('Songbook Flow', () => {

    it('should bookmark one song from free song category', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Bookmark song
            await ExploreCategory.bookmarkSongFromFreeCategory()

            // Assertion
            await expect(await SecurePageForExploreCategory.flashAlert).toBeExisting()
            await expect(await SecurePageForExploreCategory.flashAlert).toHaveTextContaining('Bookmarked songs are private. You can find them in your Profile under Bookmarks section.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongbookFlowDuringAddSongFromFreeCategory----->${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should bookmark one song from trending song category', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Bookmark song
            await ExploreCategory.bookmarkSongFromTrendingCategory()

            // Assertion
            await expect(await SecurePageForExploreCategory.flashAlert).toBeExisting()
            await expect(await SecurePageForExploreCategory.flashAlert).toHaveTextContaining('Bookmarked songs are private. You can find them in your Profile under Bookmarks section.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongbookFlowDuringAddSongFromTrendingCategory----->${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should bookmark one song from popular song category', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Bookmark song
            await ExploreCategory.bookmarkSongFromPopularCategory()

            // Assertion
            await expect(await SecurePageForExploreCategory.flashAlert).toBeExisting()
            await expect(await SecurePageForExploreCategory.flashAlert).toHaveTextContaining('Bookmarked songs are private. You can find them in your Profile under Bookmarks section.')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongbookFlowDuringAddSongFromPopularCategory----->${error}.png`)
            throw error;
        }
    }).timeout(300000);
})
afterEach(async () => {
    await browser.closeApp()
    await browser.launchApp()
})