import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';
import { Globals } from '../../../../core/global/globals';
import { AuthService } from '../../../../core/services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './logininfo.component.html',
    styleUrls: ['./logininfo.component.scss'],
    providers: [AuthService]
})
export class LogininfoComponent implements OnInit {

    public loginFormGroup: FormGroup;
    public showSignInError = false;

    @LocalStorage() token: string = null;
    @LocalStorage() me: any = null;

    constructor(private authService: AuthService,
                private router: Router,
                private globals: Globals) { }

    ngOnInit() {
        this.loginFormGroup = new FormGroup({
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }

    get email() {
        return this.loginFormGroup.get('email');
    }

    get password() {
        return this.loginFormGroup.get('password');
    }

    /**
     * Sign in method
     */
    signIn() {
        const signInData = {email: this.email.value, password: this.password.value};
        this.authService.signIn(signInData).subscribe(
            response => {
                console.log('Response login:', response);
                if (response.status) {
                    this.token = response.output.token;
                    this.getUserInfo();
                } else {
                    this.showSignInError = true;
                }
            });
    }

    /**
     * Get user info
     */
    getUserInfo() {
        console.log('getUserInfo start');
        this.authService.me().subscribe(
            response => {
                console.log('Response me:', response.output);
                if (response.status) {

                    if (response.output.role === 'guest') {
                        this.authService.logoutNoRedirect();
                        this.router.navigate(['/cadastro/aguarde']);
                    } else {
                        this.me = response.output;
                        this.globals.isSignedIn = true;
                        this.globals.nameSignedIn = this.me.name;
                        this.globals.role = this.me.role;
                        this.globals.userId = this.me.id;
                        console.log('this.globals.urlAfterSignIn: ' + this.globals.urlAfterSignIn);

                        this.router.navigate(['/informacoes']);
                    }
                } else {
                    this.showSignInError = true;
                }
            });
    }

}
