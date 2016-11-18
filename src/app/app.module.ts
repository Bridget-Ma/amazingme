import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';


import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomepageRoutingModule }         from './homepage/homepage-routing.module';
import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { DialogService }        from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomepageRoutingModule,
    LoginRoutingModule,
    AppRoutingModule,
    AlertModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

  
}

