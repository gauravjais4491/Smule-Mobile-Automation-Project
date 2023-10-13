
const BasePaths = require('../screenobjects/Package/package')

const [{ Language }] = [BasePaths.getPagePaths()]
const [{ SecurePageForLanguage }] = [BasePaths.getSecurePaths()]

class SelectLanguage {
    async selectLanguage() {
        await Language.selectLanguage()
        await Language.confirmLanguage()
        await expect(await SecurePageForLanguage.flashAlert).toBeExisting()
        await expect(await SecurePageForLanguage.flashAlert).toHaveTextContaining('Sign in with Email')
    }
}

module.exports = new SelectLanguage()