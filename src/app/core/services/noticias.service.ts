import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UtilitiesService } from './utilities.service';

@Injectable({
    providedIn: 'root'
})
export class NoticiasService {

    constructor(private http: HttpClient,
                private utilitiesService: UtilitiesService) { }

    public upload(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/noticias/nova', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    public remove(params: any): Observable<any> {
        console.log(params);
        return this.http
            .post<any>(environment.API_URL + '/noticias/remove', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    public getFileList(param): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/noticias/lista', {withCredentials: true, params: param})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    public async downloadResource(filename: string): Promise<Blob> {
        const file =  await this.http.get<Blob>(
            environment.API_URL + '/noticia/' + filename,
            {responseType: 'blob' as 'json'}).toPromise();
        return file;
    }
}
