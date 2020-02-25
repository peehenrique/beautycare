import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
        this.search();
        this.searchFormGroup = new FormGroup({
            'terms': new FormControl(''),
            'categoria': new FormControl('')
        });
    }

    get terms() { return this.searchFormGroup.get('terms'); }

    get categoria() { return this.searchFormGroup.get('categoria'); }

    search() {
        this.empresasService.admBuscaEmpresas(this.param).subscribe(response => {
            console.log('Response search:', response.output);
            if (response.status) {
                this.res = response.output;
            } else {

            }
        });
    }

  liberar(id) {
    this.empresasService.admLiberarEmpresa(id).subscribe(response => {
      console.log('Response search:', response.output);
      if (response.status) {
        alert('Empresa liberada com exito');
      } else {

      }
    });
  }

  bloquear(id) {
    this.empresasService.admBloquearEmpresa(id).subscribe(response => {
      console.log('Response search:', response.output);
      if (response.status) {
        alert('Empresa bloqueada com exito');
      } else {

      }
    });
  }

    getCategories() {
        this.cadastroService.getCategorias().subscribe(
            response => {
                if (response.status) {
                    console.log('Response categorias:', response.output);
                    const categorias = [];
                    Object.keys(response.output).forEach(function (key) {
                        console.log(key);
                        categorias.push({
                            'id': response.output[key].id,
                            'link': key,
                            'categoria': response.output[key].categoria,
                            'tabela': response.output[key]['tabela']
                        });
                    });

                    this.categorias = categorias;
                    console.log('cats: ', this.categorias.length);
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
        console.log(this.page);
        this.param.page = this.page;
        this.search();
    }


}
