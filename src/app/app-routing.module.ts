import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { PropertyComponent } from './components/property/property.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'private', canActivate:[AuthGuardService], component: AdminComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: PropertyComponent },
    { path: 'new-property', component: NewPropertyComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'edit', component: EditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }