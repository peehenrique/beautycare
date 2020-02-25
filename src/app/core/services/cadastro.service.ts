import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient,
              private utilitiesService: UtilitiesService) { }

    public getCategorias(): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa/categorias', {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public getPaises(): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/empresa/paises', {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));

    }

    register(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/empresa/registro', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    updateCompanyData(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/empresa/update', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    admUpdateCompanyData(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/empresa/admUpdate', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    updateProfile(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/perfil/update', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    upload(params: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/empresa/upload', params, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }
}
