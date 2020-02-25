import { Component, OnInit } from '@angular/core';
import { s } from '@angular/core/src/render3';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

    public resetPassFormGroup: FormGroup;
    public token: string;
    public error = false;

    constructor(private authService: AuthService,
                private route: ActivatedRoute,
                private router: Router) {}

    get email() { return this.resetPassFormGroup.get('email'); }

    get password() { return this.resetPassFormGroup.get('password'); }

    get password_confirm() { return this.resetPassFormGroup.get('password_confirm'); }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get('token')) {
            this.token = this.route.snapshot.paramMap.get('token');

            this.resetPassFormGroup = new FormGroup({
                'email': new FormControl('', Validators.required),
                'password': new FormControl('', Validators.required),
                'password_confirm': new FormControl('', Validators.required)
            });
        } else {
            this.error = true;
        }

    }

    resetarSenha() {
        const recoverData = {email: this.email.value, password: this.password.value, passConfirm: this.password_confirm.value, token: this.token};
        this.authService.resetPassword(recoverData).subscribe(
            response => {
                console.log('Response login:', response);
                if (response.status) {
                    this.router.navigate(['/auth/login']);
                } else {
                    this.error = true;
                }
            });
    }

}
