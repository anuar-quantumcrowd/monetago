export default class Authentication {
  static accessToken = ''
  static UserObject = {}

  // the method signature will be same
  static saveAccessToken(accessToken) {
    sessionStorage.setItem('accessToken', accessToken)
  }

  static saveTokenExpiration(expiration) {
    sessionStorage.setItem('tokenExpiration', expiration)
  }

  // static userLoad(userObject) {
  //     console.log("userObject>>authentication", userObject);
  //     Authentication.UserObject = userObject;
  // }

  static load() {
    return sessionStorage.getItem('accessToken')
  }

  static remove() {
    sessionStorage.removeItem('accessToken', '')
    sessionStorage.removeItem('tokenExpiration', '')
  }

  // static saveUserId(userId) {
  //   sessionStorage.setItem('xUserId', userId)
  // }

  // static loadUserId() {
  //   return sessionStorage.getItem('xUserId')
  // }

  // static removeUserId() {
  //   sessionStorage.removeItem('xUserId')
  // }

  static saveUserProfile(profile) {
    sessionStorage.setItem('userProfile', profile)
  }

  static loadUserProfile() {
    return sessionStorage.getItem('userProfile')
  }

  static reset() {
    // sessionStorage.setItem('xUserId', '')
    // sessionStorage.setItem('userProfile', {})
    sessionStorage.setItem('accessToken', '')
    sessionStorage.setItem('authUser', '')
  }
}
