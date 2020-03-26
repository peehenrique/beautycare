import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { LogininfoComponent } from './pages/logininfo/logininfo.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'logininfo', component: LogininfoComponent},
    {path: 'recuperar-senha', component: ForgotComponent},
    {path: 'recuperar-senha/:token', component: RecoverPasswordComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
