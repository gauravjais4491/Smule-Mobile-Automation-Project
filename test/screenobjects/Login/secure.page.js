class SecurePageForLogin {
    get notification() {
        return $(`//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]`)
    }
    get flashAlertForsetEmailAndGoNextUsingEnterKeyboardButtom(){
        return $(`//*[@text="your password"]`)
    }
    // async flashNotification(expectedText) {
    //     let NotificationText = null;
    //     await driver.waitUntil(async () => {
    //         NotificationText = await this.notification.getText()
    //         console.log("--------------------"+NotificationText)
    //         return NotificationText === expectedText
    //     },
    //     {
    //         timeout: 100000,
    //         timeoutMsg: 'Notification text did not match the expected text within the timeout',
    //     }
    //     );

    // }
}
module.exports = new SecurePageForLogin()