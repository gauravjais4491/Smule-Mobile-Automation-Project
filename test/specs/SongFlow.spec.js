const BasePaths = require('../screenobjects/Package/package')

const [{ LoginWithValidCredentials, SelectLanguage, SearchSongs, SelectSong, Duet }] = [BasePaths.getPagePaths()]
const [{ SecurePageForSearchSong, SecurePageForSelectSong, SecurePageForDuet }] = [BasePaths.getSecurePaths()]



describe('Songs', () => {
    it("should search song", async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Search Song
            await SearchSongs.searchSong('Jitni Dafa - raat hamari toh')

            // Assertion
            await SecurePageForSearchSong.flashNotification('Jitni Dafa - Raat Hamari Toh')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsDuringSearchSong------>${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should select song', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Search Song
            await SearchSongs.searchSong('Jitni Dafa - raat hamari toh')
            await SecurePageForSearchSong.flashNotification('Jitni Dafa - Raat Hamari Toh')

            // Select Song
            await SelectSong.selectSong()

            // Assertion
            await expect(await SecurePageForSelectSong.flashAlert).toBeDisplayed()
            await expect(await SecurePageForSelectSong.flashAlert).toHaveTextContaining('Duet')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsDuringSelectSong------>${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should sing duet', async () => {
        try {
            // Login
            await SelectLanguage.selectLanguage()
            await LoginWithValidCredentials.loginWithValidCredentials()

            // Search Song
            await SearchSongs.searchSong('Jitni Dafa - raat hamari toh')
            await SecurePageForSearchSong.flashNotification('Jitni Dafa - Raat Hamari Toh')

            // Select Song
            await SelectSong.selectSong()
            await expect(await SecurePageForSelectSong.flashAlert).toBeDisplayed()
            await expect(await SecurePageForSelectSong.flashAlert).toHaveTextContaining('Duet')

            // Duet
            await Duet.recordDuetSOng()
            await Duet.saveDuetSong()

            // Assertion
            await SecurePageForDuet.flashNotification('Jitni Dafa - Raat Hamari Toh')
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInSongsDuringSingSong------>${error}.png`)
            throw error;
        }
    }).timeout(300000);
})

afterEach(async () => {
    await browser.closeApp()
    await browser.launchApp()
})