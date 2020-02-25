import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { NoticiasService } from '../../../../core/services/noticias.service';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.scss'],
    providers: [NoticiasService]
})
export class NoticiasComponent implements OnInit {

    public uploadFileFormGroup: FormGroup;
    public fileData: string = null;
    public error = false;
    public fileError = false;
    public upError = false;
    public saved = false;
    public noticias: any = null;

    constructor(private noticiasService: NoticiasService,
                private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.uploadFileFormGroup = new FormGroup({
            'title': new FormControl('', [Validators.required]),
            'file': new FormControl(', ', [Validators.required]),
            'original': new FormControl(', ', [Validators.required])
        });

        this.getFileList();
    }

    remove(file) {
        const params = {
            id: file
        };
        this.noticiasService.remove(params).subscribe(
            response => {
                console.log('Response remove:', response.output);
                if (response.status) {
                    this.getFileList();
                }
            }
        );
    }

    uploadFile() {
        this.error = false;
        if (this.fileData) {
            const params = {
                title: this.uploadFileFormGroup.get('title').value,
                file: this.fileData,
                original: this.uploadFileFormGroup.get('original').value,
            };
            this.noticiasService.upload(params).subscribe(
                response => {
                    console.log('Response uploadFile:', response.output);
                    if (response.status) {
                        this.saved = true;
                        this.getFileList();
                    }
                }
            );
        } else {
            this.error = true;
        }
    }

    getFileList() {
        const param = {porPag: 5, pag: 1};
        this.noticiasService.getFileList(param).subscribe(
            response => {
                console.log('Response getFileList:', response.output);
                if (response.status) {
                    this.noticias = response.output.results;
                }
            }
        );
    }

    getfile(event) {
        let fileError = false;
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            const regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(.pdf|.doc|.xlsx|.xls)$');
            if (regex.test(event.target.value.toLowerCase())) {
                this.uploadFileFormGroup.patchValue({'original': event.target.value});
                reader.onload = () => {
                    this.fileData = reader.result;
                    // need to run CD since file load runs outside of zone
                    this.cd.markForCheck();
                };
            } else {
                fileError = true;
            }
        }
        if (fileError) {
            this.fileError = true;
        }
    }



}
