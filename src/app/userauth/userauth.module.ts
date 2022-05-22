import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserauthComponent } from './userauth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { UserAuthRouting } from './userauth.routing.module';

@NgModule({
    declarations: [
        UserauthComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        UserAuthRouting
    ],
    exports: [
        UserauthComponent,
        LoginComponent,
        RegisterComponent
    ]

})
export class UserAuthModule {}