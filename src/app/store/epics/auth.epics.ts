import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthActions } from '../actions';

@Injectable()
export class AuthEpics {

  constructor(private af: AngularFire) { }

  register = (action$) =>
  action$.ofType(AuthActions.REGISTER)
  /*
  .switchMap(
            ({payload}) =>
                this.af.database.list("group-channel/hello")
                    .catch(err => {
                        return Observable.of(null);
                    })
                    .map((channels) => {
                        if (channels) {
                            return ({
                                type: AuthActions.LOGIN_SUCCESS,
                                payload: { channels, payload }
                            })
                        } else {
                            return ({
                                type: AuthActions.LOGIN_FAIL,
                                payload: {}
                            })
                        }
                    }))*/
  /*
    action$.ofType(AuthActions.REGISTER)
      .switchMap(({payload}) => {
          console.log("auth epic = ",payload);
          return Observable.fromPromise(
              <Promise<any>>
                this.af.auth.createUser({email:payload.email,password:payload.password})
                    .then(auth=>{
                        console.log("Auth in epic : ",auth);
                        return {
                            type: AuthActions.LOGIN_SUCCESS,
                            payload: auth
                        };
                    })
              
              )
        
        })
        .catch(error => {
            return Observable.of({
              type: AuthActions.REGISTER_FAILED
            })
          });
      */    


}