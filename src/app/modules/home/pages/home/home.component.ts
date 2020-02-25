import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { environment } from '../../../../../environments/environment';
import { EmpresasService } from '../../../../core/services/empresas.service';
import { NoticiasService } from '../../../../core/services/noticias.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [EmpresasService]
})
export class HomeComponent implements OnInit {

    public environment = environment;
    public ultimas: any = null;
    public noticias: any = null;
    public me: any = null;
    @ViewChild('downloadLink') private downloadLink: ElementRef;

    constructor(private empresasService: EmpresasService,
                private noticiasService: NoticiasService,
                private localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.getUltimas();
        // this.getUltimasNoticias();

        if (this.localStorageService.get('me')) {
            this.me = this.localStorageService.get('me');
        }
    }

    getUltimas() {
        const param = {num: 10};
        this.empresasService.listaUltimasEmpresas(param).subscribe(response => {
            console.log('Response listaUltimasEmpresas:', response.output);
            if (response.status) {
                this.ultimas = response.output;
            } else {

            }
        });
    }

    getUltimasNoticias() {
        const param = {porPag: 5, pag: 1};
        this.noticiasService.getFileList(param).subscribe(response => {
            console.log('Response listaUltimasEmpresas:', response.output);
            if (response.status) {
                this.noticias = response.output.results;
            } else {

            }
        });
    }

    public async openfile(file): Promise<void> {
        const blob = await this.noticiasService.downloadResource(file);
        const url = window.URL.createObjectURL(blob);
        const link = this.downloadLink.nativeElement;
        link.href = url;
        link.download = file;
        link.click();
        window.URL.revokeObjectURL(url);
    }
}
