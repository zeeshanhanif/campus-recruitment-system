import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';
import {LoggedInGuard} from './providers/loggedin-guard'
import {environment} from '../environments/environment'



import { AppComponent } from './app.component';
//import {HomeComponent} from './components/home/home.component'
import {AppRoutes} from './routes'
import {Components} from './components'

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig,myFirebaseAuthConfig)
  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
