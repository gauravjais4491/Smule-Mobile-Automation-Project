class SecurePageForDuet{
    get notification(){
        return $(`//*[@text="Jitni Dafa - Raat Hamari Toh"]`)
        
    }
    async flashNotification(expectedText) {
        let NotificationText = null;
        await browser.waitUntil(async () => {
            NotificationText = await this.notification.getText()
            return NotificationText === expectedText
        },
        {
            timeout: 10000,
            timeoutMsg: 'Notification text did not match the expected text within the timeout',
        }
        );

    }
}
module.exports = new SecurePageForDuet()