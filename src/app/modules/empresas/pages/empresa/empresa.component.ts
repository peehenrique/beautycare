import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { EmpresasService } from '../../../../core/services/empresas.service';

@Component({
    selector: 'app-empresa',
    templateUrl: './empresa.component.html',
    styleUrls: ['./empresa.component.scss'],
    providers: [EmpresasService]
})
export class EmpresaComponent implements OnInit {

    public empresa: any = null;
    public error = false;
    public environment = environment;
    @ViewChild('downloadPdfLink') private downloadPdfLink: ElementRef;

    constructor(private route: ActivatedRoute,
                private empresasService: EmpresasService) { }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get('id')) {
            this.loadEmpresa(this.route.snapshot.paramMap.get('id'));
        }
    }

    loadEmpresa(id) {
        const param = {id: id};
        this.empresasService.loadEmpresa(param).subscribe(
            response => {
                console.log('Response loadEmpresa:', response);
                if (response.status) {
                    this.empresa = response.output;
                } else {
                    this.error = true;
                }
            });
    }

    public async openfile(file): Promise<void> {
        const blob = await this.empresasService.downloadResource(file);
        const url = window.URL.createObjectURL(blob);
        const link = this.downloadPdfLink.nativeElement;
        link.href = url;
        link.download = file;
        link.click();
        window.URL.revokeObjectURL(url);
    }

}
