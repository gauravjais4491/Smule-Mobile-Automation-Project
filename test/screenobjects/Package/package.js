const HomePageToMessagePage = require('../MessageChatFlow/HomePageToMessageBox/HomePageToMessagePage.js');

class BasePaths {
    static getPagePaths() {
        return {
            Language: require('../Language/Language.js'),
            login: require('../Login/LoginWithEmail.js'),
            SearchSongs: require('../SongFlow/SearchSong/SearchSongs.js'),
            SelectSong: require('../SongFlow/SelectSong/SelectSong.js'),
            SelectLanguage: require('../../specs/selectLanguage.spec.js'),
            LoginWithValidCredentials: require('../../specs/loginWithValidCredencials.spec.js'),
            Duet: require('../SongFlow/Duet/duet.js'),
            HomePageToMessagePage: require('../MessageChatFlow/HomePageToMessageBox/HomePageToMessagePage.js'),
            CreateNewChat: require('../MessageChatFlow/CreateNewChat/CreateNewChat.js'),
            ExistingChat: require('../MessageChatFlow/ExistingChat/ExistingChat.js'),
            HomePageToProfilePage: require('../SettingFlow/HomePageToProfilePage/HomePageToProfilePage.js'),
            ProfilePageToSettingPage: require('../SettingFlow/ProfilePageToSettingPage/ProfilePageToSettingPage.js'),
            UpdateSettings: require('../SettingFlow/UpdateSettings/UpdateSettings.js'),
            ExploreCategory: require('../SongbookFlow/ExploreCategory/ExploreCategory.js'),
            HomePageToActivityPage: require('../ActivityFlow/HomePageToActivityPage/HomePageToActivityPage.js'),
            Notification: require('../ActivityFlow/Notifications/Notification.js'),
            Invites: require('../ActivityFlow/Invites/Invites.js'),
            News: require('../ActivityFlow/News/News.js')

        }
    }
    static getSecurePaths() {
        return {
            SecurePageForLanguage: require('../Language/secure.page.js'),
            SecurePageForLogin: require('../Login/secure.page.js'),
            SecurePageForSearchSong: require('../SongFlow/SearchSong/secure.page.js'),
            SecurePageForSelectSong: require('../SongFlow/SelectSong/secure.page.js'),
            SecurePageForDuet: require('../SongFlow/Duet/secure.page.js'),
            SecurePageForHomePageToMessagePage: require('../MessageChatFlow/HomePageToMessageBox/secure.page.js'),
            SecurePageForCreateNewChat: require('../MessageChatFlow/CreateNewChat/secure.page.js'),
            SecurePageForExistingChat: require('../MessageChatFlow/ExistingChat/secure.page.js'),
            SecurePageForHomePageToProfilePage: require('../SettingFlow/HomePageToProfilePage/secure.page.js'),
            SecurePageForProfilePageToSettingPage: require('../SettingFlow/ProfilePageToSettingPage/secure.page.js'),
            SecurePageForUpdateSettings: require('../SettingFlow/UpdateSettings/secure.page.js'),
            SecurePageForExploreCategory: require('../SongbookFlow/ExploreCategory/secure.page.js'),
            SecurePageForHomePageToActivityPage: require('../ActivityFlow/HomePageToActivityPage/secure.page.js'),
            SecurePageForNotification: require('../ActivityFlow/Notifications/secure.page.js'),
            SecurePageForInvites: require('../ActivityFlow/Invites/secure.page.js'),
            SecurePageForNews: require('../ActivityFlow/News/secure.page.js'),

        }
    }
}

module.exports = BasePaths;