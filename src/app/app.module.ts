import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserspostComponent } from './userspost/userspost.component';
import { AppRoutingModule } from './app-routing.module';

import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FooterComponent } from './footer/footer.component';

import { UserAuthModule } from './userauth/userauth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UploadComponent } from './upload/upload.component';
import { BasicAuthHtppInterceptorService } from './../shared/basic-auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    UserspostComponent,
    HomecomponentComponent,
    UserprofileComponent,
    UploadComponent,
    FooterComponent,
    WelcomeComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserAuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FlexLayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AuthGuardService,AuthService
