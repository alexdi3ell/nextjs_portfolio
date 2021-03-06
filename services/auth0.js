import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

    class Auth0 {

        constructor() {
            this.auth0 = new auth0.WebAuth({
                domain: 'dev-ie1nel7a.auth0.com',
                clientID: 'h40rOp1ImpP0Lirb4usseT01aXD1JQ0H',
                redirectUri: 'http://localhost:3000/callback',
                responseType: 'token id_token',
                scope: 'openid'
            });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
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
       
        setSession(authResult) {
            // Set the time that the Access Token will expire at
            const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
            Cookies.set('user', authResult.idTokenPayload);
            Cookies.set('jwt', authResult.idToken);
            Cookies.set('expiresAt', expiresAt);
          }

        logout() {
            Cookies.remove('user');
            Cookies.remove('jwt');
            Cookies.remove('expiresAt');

            this.auth0.logout({
            returnTo:'',
            clientId: 'h40rOp1ImpP0Lirb4usseT01aXD1JQ0H'
            })
        }

        login() {
            this.auth0.authorize();
        }


        isAuthenticated() {
            // Check whether the current time is past the
            // access token's expiry time
            let expiresAt = Cookies.getJSON('expiresAt');
            return new Date().getTime() < expiresAt;
        }
    }

const auth0Client = new Auth0();


export default auth0Client;