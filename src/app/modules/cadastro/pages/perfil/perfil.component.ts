import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-store';
import { AuthService } from '../../../../core/services/auth.service';
import { CadastroService } from '../../../../core/services/cadastro.service';
import { UtilitiesService } from '../../../../core/services/utilities.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss'],
    providers: [CadastroService, AuthService, UtilitiesService, LocalStorageService]
})
export class PerfilComponent implements OnInit {

    public profileFormGroup: FormGroup;
    public passwordError = false;
    public profile: any = null;
    public saved = false;
    public error = false;

    constructor(private cadastroService: CadastroService,
                private authService: AuthService,
                private utilitiesService: UtilitiesService,
                private localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.profileFormGroup = new FormGroup({
            'name': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required]),
            'password': new FormControl(''),
            'password_confirm': new FormControl('')
        });

        this.profile = this.localStorageService.get('me');

        this.profileFormGroup.get('name').patchValue(this.profile.name);
        this.profileFormGroup.get('email').patchValue(this.profile.email);
    }


    updateProfile() {
        console.log('oi');
        this.passwordError = false;
        if ((this.profileFormGroup.get('password').value !== '' && this.profileFormGroup.get('password_confirm').value !== '')
            && this.profileFormGroup.get('password').value !== this.profileFormGroup.get('password_confirm').value) {
            this.passwordError = true;
            return false;
        } else {
            const params = {
                'name': this.profileFormGroup.get('name').value,
                'email': this.profileFormGroup.get('email').value,
                'password': this.profileFormGroup.get('password').value,
                'password_confirm': this.profileFormGroup.get('password_confirm').value
            }
            this.cadastroService.updateProfile(params).subscribe(
                response => {
                    console.log('Response register:', response.output);
                    if (response.status) {
                        this.saved = true;
                    } else {
                        this.error = true;
                    }
                }
            );
        }
    }
}
