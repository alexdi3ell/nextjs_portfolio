import auth0 from 'auth0-js';

 class Auth0 {

     constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-ie1nel7a.auth0.com',
            clientID: 'CQebVypFkIK8vuF4SxlY0v0YNj84T055',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid'
        });

        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);

        }

        handleAuthentication() {
            return new Promise((resolve, reject) => {
                this.auth0.parseHash((err, authResult) => {
                    if (authResult && authResult.accessToken && authResult.idToken) {
                        this.setSession(authResult);
                        resolve();
                    } else if (err) {
                        reject(err);
                        console.log(err);
                    }
                });
            })
        }
    
    setSession() {
        //Save tokens
    }

  login() {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();

export default auth0Client;