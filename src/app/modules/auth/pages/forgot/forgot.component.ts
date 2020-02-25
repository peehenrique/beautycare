import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.scss'],
    providers: [AuthService]
})
export class ForgotComponent implements OnInit {

    public linkSent = false;
    public showError = false;

    public recoverPassFormGroup: FormGroup;

    constructor(private authService: AuthService) {}

    get email() { return this.recoverPassFormGroup.get('email'); }

    ngOnInit() {
        this.recoverPassFormGroup = new FormGroup({
            'email': new FormControl('', Validators.required)
        });
    }

    recuperarSenha() {
        const recoverData = {email: this.email.value};
        this.authService.recoverPassword(recoverData).subscribe(
            response => {
                console.log('Response login:', response);
                if (response.status) {
                    this.linkSent = true;
                } else {
                    this.showError = true;
                }
            });
    }

}
