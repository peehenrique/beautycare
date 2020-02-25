import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent, ForgotComponent, RecoverPasswordComponent]
})
export class AuthModule {}
