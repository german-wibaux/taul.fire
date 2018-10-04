import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditComponent } from './components/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertyService } from './services/property.service';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { PropertyComponent } from './components/property/property.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FooterComponent } from './components/footer/footer.component';
import { WaitingComponent } from './components/waiting/waiting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NewPropertyComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    EditComponent,
    ContactComponent,
    LoginPageComponent,
    PropertyComponent,
    FooterComponent,
    WaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'taul-fire'),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireModule,
    FormsModule,
    AngularFireStorageModule
    
  ],
  providers: [AuthService, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
