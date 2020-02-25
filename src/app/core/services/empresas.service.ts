import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UtilitiesService } from './utilities.service';

@Injectable({
    providedIn: 'root'
})
export class EmpresasService {

    constructor(private http: HttpClient,
                private utilitiesService: UtilitiesService) {
    }

    public listaUltimasEmpresas(params: any): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresas/ultimas', {withCredentials: true, params: params })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public buscaEmpresas(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/empresa/busca', params, {withCredentials: true })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public admBuscaEmpresas(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/empresa/admin/busca', params, {withCredentials: true })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public admLiberarEmpresa(id: any): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa/liberar/' + id, {withCredentials: true })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public admBloquearEmpresa(id: any): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa/bloquear/' + id, {withCredentials: true })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public loadEmpresa(params: any): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa', {withCredentials: true, params: params })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public loadEmpresaByUserId(params: any): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa-user', {withCredentials: true , params: params })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public loadEmpresaByEmpresaId(id: any): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa-id/' + id, {withCredentials: true })
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public getCategorias(): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa/categorias', {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public async downloadResource(filename: string): Promise<Blob> {
        const file =  await this.http.get<Blob>(
            environment.API_URL + '/empresa/pdf/' + filename,
            {responseType: 'blob' as 'json'}).toPromise();
        return file;
    }
}
