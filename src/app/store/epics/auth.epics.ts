import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthActions } from '../actions';

@Injectable()
export class AuthEpics {

  constructor(private af: AngularFire) { }

  login = (action$) =>
    action$.ofType(AuthActions.LOGIN)
      .map(action => { return action; })
      .switchMap(({payload}) => {        
            // console.log('login: ', result)
            //if (result.statusCode) {
              console.log("payload in login epic",payload);
              
              return Observable.fromPromise(
                <Promise<any>> this.af.auth.login({ email:payload.email,password:payload.password})
                  .then(auth => {
                      console.log("auth sucess in epic fb",auth);
                    return {
                      type: AuthActions.LOGIN_SUCCESS,
                      payload: auth
                    };
                  })
              )
        })
        .catch(error => {
            
            return Observable.of({
              type: AuthActions.LOGIN_FAIL,
              payload: error
            })
          });
      
   getCurrentUserData = (action$) =>
    action$.ofType(AuthActions.LOGIN_SUCCESS)
      .switchMap(({payload}) => {
          console.log("payload in get current user data,"+payload)
          return this.af.database.object(`users/${payload.uid}`)
      })
        .catch(err => {
          console.log('users/ err ', err);
          return Observable.of(null)
        })
        .switchMap((user) => {
          if (user) {
             console.log("Login- getCurrentUserData ", user);     
            return Observable.of({
              type: AuthActions.SET_CURRENT_USER_DATA,
              payload: user
            });
          } else {
            return Observable.of({
              type: AuthActions.NULL
            });
          }
        });

    logout = (action$) =>
      action$.ofType(AuthActions.LOGOUT)
        .switchMap(() => {
          this.af.auth.logout();
          return Observable.of({
            type: AuthActions.LOGOUT_SUCCESS
          });
        });
}