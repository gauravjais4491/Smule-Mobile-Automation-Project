const BasePaths = require('../screenobjects/Package/package')

const [{ login }] = [BasePaths.getPagePaths()]
const [{ SecurePageForLogin }] = [BasePaths.getSecurePaths()]


class LoginWithValidCredentials {
    async loginWithValidCredentials() {
        await login.signInWithEmail()
        await login.setEmail('noob_hacker@KaliLinux.com')
        await login.setPasswordForExistingUser('Gaurav123')
        await expect(await SecurePageForLogin.notification).toBeExisting()
    }
}


module.exports = new LoginWithValidCredentials()