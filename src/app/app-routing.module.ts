import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { PropertyComponent } from './components/property/property.component';
import { AboutComponent } from './components/about/about.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';


const routes: Routes = [
    {path: '', component: HomeComponent  },
    {path: 'login', component: LoginPageComponent},
    {path: 'private', canActivate:[AuthGuardService], component: AdminComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    //{ path: 'details', component: PropertyComponent },
    { path: 'new-property', component: NewPropertyComponent },
    { path: 'details/:id', component: PropertyComponent },
    { path: 'update-prop/:id', component: UpdatePropertyComponent },
    { path: 'edit', canActivate:[AuthGuardService], component: EditComponent },
    { path: 'wait', component: WaitingComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})

export class AppRoutingModule { }