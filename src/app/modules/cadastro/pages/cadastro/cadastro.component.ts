import { utf8Encode } from '@angular/compiler/src/util';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';
import { environment } from '../../../../../environments/environment';
import { Globals } from '../../../../core/global/globals';
import { AuthService } from '../../../../core/services/auth.service';
import { CadastroService } from '../../../../core/services/cadastro.service';
import { UtilitiesService } from '../../../../core/services/utilities.service';
import { merge, Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
    providers: [CadastroService, AuthService, UtilitiesService]
})
export class CadastroComponent implements OnInit {

    public companyDataFormGroup: FormGroup;
    public categorias: any = null;
    public paises: any = null;
    public passwordError = false;

    // Sign up
    @LocalStorage() token: string = null;
    @LocalStorage() me: any = null;

    constructor(private cadastroService: CadastroService,
                private utilitiesService: UtilitiesService,
                private cd: ChangeDetectorRef,
                private router: Router,
                private authService: AuthService,
                private globals: Globals) {}

    ngOnInit() {
        this.getCategories();
        this.getPaises();

        this.companyDataFormGroup = new FormGroup({
            'name': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', [Validators.required]),
            'password_confirm': new FormControl('', [Validators.required]),
            'razao': new FormControl('', [Validators.required]),
            'marca': new FormControl('', [Validators.required]),
            'website': new FormControl('', [Validators.required]),
            'contato': new FormControl('', [Validators.required]),
            'email_contato': new FormControl('', [Validators.required, Validators.email]),
            'area_code': new FormControl(''),
            'telefone': new FormControl('', [Validators.required]),
            'end_rua': new FormControl('', [Validators.required]),
            'end_cidade': new FormControl('', [Validators.required]),
            'end_estado': new FormControl('', [Validators.required]),
            'end_pais': new FormControl(''),
            'end_postal': new FormControl('', [Validators.required]),
            'exporta': new FormControl(''),
            'nao_exporta': new FormControl(''),
            'descricao': new FormControl('', [Validators.required]),
            'ingredientes': new FormControl('', []),
            'acessorios': new FormControl('', []),
            'produtos': new FormControl('', []),
            'embalagens': new FormControl('', []),
            'embalagens_1': new FormControl('', []),
            'embalagens_2': new FormControl('', []),
            'servicos': new FormControl('', []),
            'produtos_1': new FormControl('', []),
            'produtos_2': new FormControl('', []),
            'produtos_3': new FormControl('', []),
            'produtos_4': new FormControl('', []),
            'produtos_5': new FormControl('', []),
            'produtos_6': new FormControl('', []),
            'produtos_7': new FormControl('', []),
            'produtos_8': new FormControl('', []),
            'produtos_9': new FormControl('', []),
            'produtos_10': new FormControl('', []),
            'produtos_11': new FormControl('', []),
            'ingredientes_1': new FormControl('', []),
            'ingredientes_2': new FormControl('', []),
            'ingredientes_3': new FormControl('', []),
            'ingredientes_4': new FormControl('', []),
            'ingredientes_5': new FormControl('', []),
            'ingredientes_6': new FormControl('', []),
            'ingredientes_7': new FormControl('', []),
            'ingredientes_8': new FormControl('', []),
            'ingredientes_9': new FormControl('', []),
            'ingredientes_10': new FormControl('', []),
            'ingredientes_11': new FormControl('', []),
            'ingredientes_12': new FormControl('', []),
            'ingredientes_13': new FormControl('', []),
            'ingredientes_14': new FormControl('', []),
            'ingredientes_15': new FormControl('', []),
            'ingredientes_16': new FormControl('', []),
            'ingredientes_17': new FormControl('', []),
            'acessorios_1': new FormControl('', []),
            'acessorios_2': new FormControl('', []),
            'acessorios_3': new FormControl('', []),
            'acessorios_4': new FormControl('', []),
            'acessorios_5': new FormControl('', [])
        });

        this.companyDataFormGroup.get('area_code').patchValue('55 ');
        this.companyDataFormGroup.get('end_pais').patchValue('BR');
    }

    submitCompanyInfo() {
        if (this.companyDataFormGroup.valid) {

            if (this.companyDataFormGroup.get('password').value !== this.companyDataFormGroup.get('password_confirm').value) {
                this.passwordError = true;
            } else {
                const formObj = this.companyDataFormGroup.getRawValue(); // {name: '', description: ''}
                const serializedForm = JSON.stringify(formObj);
                console.log(serializedForm);
                this.cadastroService.register(serializedForm).subscribe(
                    response => {
                        console.log('Response register:', response.output);
                        if (response.status) {
                            this.globals.registeredEmail = this.companyDataFormGroup.get('email').value;
                            this.router.navigate(['/cadastro/artes']);
                        }
                    }
                );
            }
        } else {
            this.utilitiesService.validateAllFormFields(this.companyDataFormGroup);
        }
    }

    check(val) {
        console.log(val.value);
    }

    getCategories() {
        this.cadastroService.getCategorias().subscribe(
            response => {
                if (response.status) {
                    console.log('Response categorias:', response.output);
                    this.categorias = response.output;
                    Object.keys(this.categorias).forEach(function (key) {
                        // console.log('Key : ' + key + ', Value : ' + response.output[key]['categoria']);
                        //console.log('<div class="form-group col-12 col-sm-12 col-md-4 form-check"><input class="form-check-input" type="checkbox" id="' + key + '" value="link"><label class="form-check-label" for="' + key + '">' + response.output[key]['categoria'] + '</label></div>');
                        if (response.output[key]['tabela']) {
                            // console.log(response.output[key]['tabela']);
                            Object.keys(response.output[key]['tabela']).forEach(function (key2) {
                                // console.log(key2);
                                // console.log('<div class="form-group col-12 col-sm-12 col-md-4 form-check"><input class="form-check-input" type="checkbox" id="' + key + '_' + response.output[key]['tabela'][key2]['id'] + '" formControlName="' + key + '_' + response.output[key]['tabela'][key2]['id'] + '" value="1"><label class="form-check-label" for="' + key + '_' + response.output[key]['tabela'][key2]['id'] + '">' + response.output[key]['tabela'][key2]['categoria'] + '</label></div>');
                                // console.log('\'' + key + '_' + response.output[key]['tabela'][key2]['id'] + '\': new FormControl(\'\', []),');
                            });
                        }

                        //console.log('<div class="form-group col-12 col-sm-12 col-md-4 form-check"><input class="form-check-input" type="checkbox" id="' + key + '" value="link"><label class="form-check-label" for="' + key + '">' + response.output[key]['categoria'] + '</label></div>');
                    });
                }
            }
        );
    }

    getPaises() {
        this.cadastroService.getPaises().subscribe(
            response => {
                console.log('Response paises:', response.output);
                if (response.status) {
                    this.paises = response.output;
                }
            }
        );
    }

    public findInvalidControls() {
        const invalid = [];
        const controls = this.companyDataFormGroup.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        return invalid;
    }


    /* *******************
     * SIGN IN FUNCTIONS
     * *******************/

    /**
     * Sign in method
     */
    signIn(email, password) {
        const signInData = {email: email, password: password};
        this.authService.signIn(signInData).subscribe(
            response => {
                console.log('Response login:', response);
                if (response.status) {
                    this.token = response.output.token;
                    this.getUserInfo();
                } else {
                    console.log('signIn() failed');
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
                    this.me = response.output;
                    console.log(this.me);
                    this.globals.isSignedIn = true;
                    this.globals.nameSignedIn = this.me.name;
                    this.globals.role = this.me.role;
                    this.globals.userId = this.me.id;

                    this.router.navigate(['/']);

                } else {
                    console.log('getUserInfo() failed');
                }
            });
    }

}
