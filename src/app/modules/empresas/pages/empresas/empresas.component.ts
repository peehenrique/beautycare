import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { CadastroService } from '../../../../core/services/cadastro.service';
import { EmpresasService } from '../../../../core/services/empresas.service';

@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.scss'],
    providers: [EmpresasService, CadastroService]
})
export class EmpresasComponent implements OnInit {

    public searchFormGroup: FormGroup;
    public objectKeys = Object.keys;
    public categorias: any = null;
    public paises: any = null;
    public intervalo: any = null;
    public res: any = null;
    public environment = environment;
    public page = 1;
    public param = {
        page: 1,
        name: '',
        category: ''
    };

    constructor(private empresasService: EmpresasService,
                private cadastroService: CadastroService) { }

    ngOnInit() {
        this.getCategories();
        this.getPaises();
        this.search();
        this.searchFormGroup = new FormGroup({
            'terms': new FormControl(''),
            'categoria': new FormControl(''),
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
            'acessorios_5': new FormControl('', []),
            'exporta': new FormControl('', [])
        });

        this.searchFormGroup.valueChanges
            .subscribe(term => {
                const formObj = this.searchFormGroup.getRawValue(); // {name: '', description: ''}
                const serializedForm = JSON.stringify(formObj);
                this.param = formObj;
                //console.log(serializedForm);
                this.search();
            });
    }

    get terms() { return this.searchFormGroup.get('terms'); }
    get categoria() { return this.searchFormGroup.get('categoria'); }

    search() {
        this.empresasService.buscaEmpresas(this.param).subscribe(response => {
            //console.log('Response search:', response.output);
            if (response.status) {
                this.res = response.output;
            } else {

            }
        });
    }

    getCategories() {
        this.cadastroService.getCategorias().subscribe(
            response => {
                if (response.status) {
                    //console.log('Response categorias:', response.output);
                    const categorias = [];
                    Object.keys(response.output).forEach(function (key) {
                        //console.log(key);
                        categorias.push({
                            'id': response.output[key].id,
                            'link': key,
                            'categoria': response.output[key].categoria,
                            'tabela': response.output[key]['tabela']
                        });
                    });

                    this.categorias = categorias;
                    //console.log('cats: ', this.categorias.length);
                }
            }
        );
    }

    getPaises() {
        this.cadastroService.getPaises().subscribe(
            response => {
                //console.log('Response paises:', response.output);
                if (response.status) {
                    this.paises = response.output;
                }
            }
        );
    }

    serachBtn() {
        if (this.terms.value !== '') {
            this.param.name = this.terms.value;
        }

        if (this.categoria.value !== '') {
            this.param.category = this.categoria.value;
        }

        this.search();
    }

    paginate() {
        //console.log(this.page);
        this.param.page = this.page;
        this.search();
    }

}
