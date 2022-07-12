/* @TODO replace with your variablesA
 * ensure all variables on this page match your project
 */
import {API_SERVER_URL, AUTH0_CLIENT_ID, API_AUTH0_AUDIENCE, AUTH0_DOMAIN, AUTH0_CALLBACK_URL} from '../../secret.js';

export const environment = {
  production: false,
  apiServerUrl: API_SERVER_URL, // the running FLASK api server url
  auth0: {
    url: AUTH0_DOMAIN, // the auth0 domain prefix
    audience: API_AUTH0_AUDIENCE, // the audience set for the auth0 app
    clientId: AUTH0_CLIENT_ID, // the client id generated for the auth0 app
    callbackURL: AUTH0_CALLBACK_URL, // the base url of the running ionic application. 
  }
};