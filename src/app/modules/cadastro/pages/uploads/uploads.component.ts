import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { Globals } from '../../../../core/global/globals';
import { CadastroService } from '../../../../core/services/cadastro.service';
import { UtilitiesService } from '../../../../core/services/utilities.service';

@Component({
    selector: 'app-uploads',
    templateUrl: './uploads.component.html',
    styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {

    public companyFilesFormGroup: FormGroup;
    public fileData: any = null;
    public imageError = false;
    public imageWidth = environment.IMG_WIDTH;
    public imageHeight = environment.IMG_HEIGHT;
    public logo_ext: string = null;
    public arte_ext: string = null;

    constructor(private cd: ChangeDetectorRef,
                private utilitiesService: UtilitiesService,
                private cadastroService: CadastroService,
                private router: Router,
                private globals: Globals) { }

    ngOnInit() {
        this.companyFilesFormGroup = new FormGroup({
            'logo': new FormControl('', [Validators.required]),
            'arte': new FormControl('', [Validators.required])
        });

        if (this.globals.registeredEmail === null) {
            this.router.navigate(['/auth/login']);
        } else {
            this.companyFilesFormGroup.patchValue({
                email: this.globals.registeredEmail
            });
        }
    }

    submitCompanyArt() {
        const params = {
            'logo': this.companyFilesFormGroup.get('logo').value,
            'logo_ext': this.logo_ext,
            'arte': this.companyFilesFormGroup.get('arte').value,
            'arte_ext': this.arte_ext,
            'email': this.globals.registeredEmail
        };
        console.log(' params: ', params);
        this.cadastroService.upload(params).subscribe(
            response => {
                console.log('Response uploads:', response.output);
                if (response.status) {
                    this.router.navigate(['/cadastro/obrigado']);
                }
            }
        );
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
                    this.companyFilesFormGroup.patchValue({
                        logo: reader.result
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
                    this.companyFilesFormGroup.patchValue({
                        arte: reader.result
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

}
