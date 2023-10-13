const BasePaths = require('../screenobjects/Package/package')

const [{ login, SelectLanguage }] = [BasePaths.getPagePaths()]
const [{ SecurePageForLogin }] = [BasePaths.getSecurePaths()]


beforeEach(async () => {
    await SelectLanguage.selectLanguage()
})

describe('Login', () => {

    it('should login new user', async () => {
        try {
            await login.signInWithEmail()
            await login.setEmail('gaurav77@example.com')
            await expect(await login.newUserEmailPassword).toBeExisting()
            await login.setPasswordForNewUser('Gaurav123')
            await login.setProfilePhoto()
            await login.addGenres()
            await expect(await SecurePageForLogin.notification).toBeExisting()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInLoginWithNewUser------>${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should login with existing user', async () => {
        try {
            await login.signInWithEmail()
            await login.setEmail('gaurav@example.com')
            await expect(await login.existingEmailPassword).toBeExisting()
            await login.setPasswordForExistingUser('Gaurav123')
            await expect(await SecurePageForLogin.notification).toBeExisting()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInLoginWithExistingUser------>${error}.png`)
            throw error;
        }
    }).timeout(300000);

    it('should login with invalid email', async () => {
        try {
            await login.signInWithEmail()
            await login.setEmail('gaurav@example.cohshm')
            await expect(await login.next).not.toBeEnabled()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInLoginWithInvalidEmail------>${error}.png`)
            throw error;
        }
    });

    it('should login with invalid password', async () => {
        try {
            await login.signInWithEmail()
            await login.setEmail('gaurav@example.com')
            await expect(await login.existingEmailPassword).toBeExisting()
            await login.setPasswordForExistingUser('Gaurav1234')
            await expect(await login.error).toBeExisting()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInLoginWithInvalidPassword------>${error}.png`)
            throw error;
        }
    })

    it('should not go ahead using enter from keyboard from email', async () => {
        try {
            await login.signInWithEmail()
            await login.setEmailAndGoNextUsingEnterKeyboardButtom('gaurav@example.com')
            await expect(await SecurePageForLogin.flashAlertForsetEmailAndGoNextUsingEnterKeyboardButtom).not.toBeExisting()

        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInLoginWithKeyboardWithEmail------>${error}.png`)
            throw error;
        }
    })

    it('should go ahead using enter from keyboard from password', async () => {
        try {
            await login.signInWithEmail()
            await login.setPasswordAndGoNextUsingEnterKeyboardButtom('gaurav@example.com', 'Gaurav123')
            await expect(await SecurePageForLogin.notification).toBeExisting()
        } catch (error) {
            await browser.saveScreenshot(`./Screenshots/ErrorInLoginWithKeyboardWithPassword------>${error}.png`)
            throw error;
        }
    }).timeout(300000);

})

afterEach(async () => {
    await browser.closeApp()
    await browser.launchApp()
})