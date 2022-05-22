import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UploadComponent } from './upload/upload.component';


const appRoutes: Routes = [
    { path: '', component: WelcomeComponent , pathMatch:'full'},
    { path: 'profile/:username', component: UserprofileComponent },
    { path: 'new-post', component: UploadComponent },
    { path: 'abtus', component:AboutusComponent},
    { path: 'home', component: HomecomponentComponent, 
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
