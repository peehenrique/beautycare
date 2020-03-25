import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { Globals } from '../../../../core/global/globals';
import { AuthService } from '../../../../core/services/auth.service';
import { CadastroService } from '../../../../core/services/cadastro.service';
import { EmpresasService } from '../../../../core/services/empresas.service';
import { UtilitiesService } from '../../../../core/services/utilities.service';

@Component({
    selector: 'app-empresa',
    templateUrl: './empresa.component.html',
    styleUrls: ['./empresa.component.scss'],
    providers: [CadastroService, EmpresasService, AuthService, UtilitiesService]
})
export class EmpresaComponent implements OnInit {

    public companyDataFormGroup: FormGroup;
    public categorias: any = null;
    public paises: any = null;
    public fileData: any = null;
    public imageError = false;
    public empresa: any = null;
    public error: any = null;
    public tmpId: number = null;
    public imageWidth = environment.IMG_WIDTH;
    public imageHeight = environment.IMG_HEIGHT;
    public logo_ext: string = null;
    public arte_ext: string = null;
    private empresaRawData: any = null;

    public upd_success = false;

    constructor(private cadastroService: CadastroService,
                private empresasService: EmpresasService,
                private utilitiesService: UtilitiesService,
                private cd: ChangeDetectorRef,
                private router: Router,
                private route: ActivatedRoute,
                private authService: AuthService,
                private globals: Globals) { }

    ngOnInit() {
        this.getPaises();

        this.companyDataFormGroup = new FormGroup({
            'razao_social': new FormControl('', [Validators.required]),
            'nome_fantasia': new FormControl('', [Validators.required]),
            'website': new FormControl('', [Validators.required]),
            'contato': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'area_code': new FormControl(''),
            'telefone': new FormControl('', [Validators.required]),
            'end_rua': new FormControl('', [Validators.required]),
            'end_cidade': new FormControl('', [Validators.required]),
            'end_estado': new FormControl('', [Validators.required]),
            'end_pais': new FormControl(''),
            'end_postal': new FormControl('', [Validators.required]),
            'logo': new FormControl(''),
            'arte': new FormControl(''),
            'logo_ext': new FormControl(''),
            'arte_ext': new FormControl(''),
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
    }

    getCompanyByEmpresaId() {
        const id = this.route.snapshot.paramMap.get('id');
        this.empresasService.loadEmpresaByEmpresaId(id).subscribe(
            response => {
                console.log('Response loadEmpresaByEmpresaId:', response);
                if (response.status) {
                    this.empresaRawData = response.output;
                    Object.keys(response.output).forEach(function (k) {
                        if (this.companyDataFormGroup.get(k)) {
                            if (k === 'end_pais') {
                                this.paises.map(p => {
                                    if (+p.id === +response.output[k]) {
                                        this.companyDataFormGroup.get(k).patchValue(p.iso);
                                        // console.log('-----');

                                    } else {
                                        // console.log(p.id);

                                    }
                                }, this);
                            } else if (k === 'area_code') {
                                this.paises.map(p => {
                                    if (+p.prefixo === +response.output[k]) {
                                        this.companyDataFormGroup.get(k).patchValue(p.prefixo);
                                    }
                                }, this);
                            } else {
                                this.companyDataFormGroup.get(k).patchValue(response.output[k]);
                            }
                        } else if (k === 'paises') {
                            const fill = [];
                            for (let i = 0; i < response.output[k].length; i++) {
                                fill.push(response.output[k][i]['iso']);
                            }
                            this.companyDataFormGroup.get('exporta').patchValue(fill);
                        } else if (k === 'categorias') {
                            response.output.categorias.map(c => {
                                this.companyDataFormGroup.get(c.link).patchValue(true);
                                if (c.sub) {
                                    c.sub.map(s => {
                                        this.companyDataFormGroup.get(c.link + '_' + s.id).patchValue(true);
                                    });
                                }
                            }, this);
                        }
                    }, this);
                } else {
                    this.error = true;
                }
            });
    }

    submitCompanyInfo() {
        if (this.companyDataFormGroup.valid) {
            const formObj = this.companyDataFormGroup.getRawValue(); // {name: '', description: ''}
            formObj.id = this.route.snapshot.paramMap.get('id');
            formObj.user_id = this.empresaRawData.user_id;
            const serializedForm = JSON.stringify(formObj);
            console.log(serializedForm);
            this.cadastroService.admUpdateCompanyData(serializedForm).subscribe(
                response => {
                    console.log('Response register:', response.output);
                    if (response.status) {
                        this.upd_success = true;
                        console.log('cadastrou com sucesso');
                    }
                }
            );
            this.upd_success = true;
            console.log('cadastrou com sucesso 1');
        } else {
            this.utilitiesService.validateAllFormFields(this.companyDataFormGroup);
            console.log('cadastrou com sucesso 2');

        }
    }

    getLogo(event) {
        let fileError = false;
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            const regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$');
            if (regex.test(event.target.value.toLowerCase())) {
                reader.onload = () => {
                    const ext = (/[.]/.exec(event.target.value.toLowerCase())) ? /[^.]+$/.exec(event.target.value.toLowerCase()) : undefined;
                    this.logo_ext = ext[0];
                    console.log(ext[0]);
                    this.companyDataFormGroup.patchValue({
                        logo: reader.result,
                        logo_ext: ext[0]
                    });
                    // need to run CD since file load runs outside of zone
                    this.cd.markForCheck();
                };
            } else {
                fileError = true;
            }
        }
        if (fileError) {
            this.imageError = true;
        }
    }

    getArte(event) {
        let fileError = false;
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            const regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$');
            if (regex.test(event.target.value.toLowerCase())) {
                reader.onload = () => {
                    const ext = (/[.]/.exec(event.target.value.toLowerCase())) ? /[^.]+$/.exec(event.target.value.toLowerCase()) : undefined;
                    this.arte_ext = ext[0];
                    console.log(ext[0]);
                    this.companyDataFormGroup.patchValue({
                        arte: reader.result,
                        arte_ext: ext[0]
                    });

                    // need to run CD since file load runs outside of zone
                    this.cd.markForCheck();
                };
            } else {
                fileError = true;
            }
        }
        if (fileError) {
            this.imageError = true;
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
                    this.getCompanyByEmpresaId();
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
                    this.getCategories();
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

}
