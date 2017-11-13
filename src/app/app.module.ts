import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
// import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
// import {HTTP_PROVIDERS} from 'angular2/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomepageRoutingModule }         from './homepage/homepage-routing.module';
import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { DialogService }        from './dialog.service';
import {ShareButtonsModule} from 'ngx-sharebuttons';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { RouterModule, Routes } from '@angular/router';

import { AccountComponent }           from './account/account.component';


import { MatDatepickerModule,MatNativeDateModule,MatDialogModule,  MatCheckboxModule,MatSelectModule,MatInputModule,MatButtonToggleModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,  MatProgressSpinnerModule,
    MatTableModule, MatExpansionModule,  MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule,MatSliderModule,MatGridListModule
} from '@angular/material';



// export const myFirebaseConfig = {

//   apiKey: "AIzaSyCleNPTW1m0VsF2V_sSuYJQ1pm5E356Ra8",
//     authDomain: "amazing-me-ac8b6.firebaseapp.com",
//     databaseURL: "https://amazing-me-ac8b6.firebaseio.com",
//     storageBucket: "amazing-me-ac8b6.appspot.com",
//     messagingSenderId: "582459982323"
import 'hammerjs';


export const myFirebaseConfig = {

  apiKey: "AIzaSyCleNPTW1m0VsF2V_sSuYJQ1pm5E356Ra8",
    authDomain: "amazing-me-ac8b6.firebaseapp.com",
    databaseURL: "https://amazing-me-ac8b6.firebaseio.com",
    storageBucket: "amazing-me-ac8b6.appspot.com",
    messagingSenderId: "582459982323"

 };
// };

// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyCleNPTW1m0VsF2V_sSuYJQ1pm5E356Ra8",
//     authDomain: "amazing-me-ac8b6.firebaseapp.com",
//     databaseURL: "https://amazing-me-ac8b6.firebaseio.com",
//     storageBucket: "amazing-me-ac8b6.appspot.com",
//     messagingSenderId: "582459982323"
//   }
// };

// const myFirebaseAuthConfig = {
 
//       provider: AuthProviders.Password,
//       method: AuthMethods.Password,
    
// };


@NgModule({
  imports: [
    // AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomepageRoutingModule,
    LoginRoutingModule,
    AppRoutingModule,
    // MaterialModule,
    ShareButtonsModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,  MatProgressSpinnerModule,
    MatTableModule, MatExpansionModule,  MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule,
    MatSliderModule,
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    // AccountComponent

  ],
  
  providers: [
    DialogService,
 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {


  
}

