import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Globals } from '../global/globals';
import { UtilitiesService } from './utilities.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient,
                private globals: Globals,
                private localStorageService: LocalStorageService,
                private utilitiesService: UtilitiesService) {
    }

    public signIn(login: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/auth/login', login, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    public recoverPassword(email: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/auth/recover-password', email, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    public resetPassword(data: any): Observable<any> {
        return this.http
            .post<any>(environment.API_URL + '/auth/reset-password', data, {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));
    }

    public me(): Observable<any> {
        return this.http
            .get<any>(environment.API_URL + '/me', {withCredentials: true})
            .pipe(catchError(this.utilitiesService.handleError));

    }

    public logout() {
        this.localStorageService.remove('token');
        this.localStorageService.remove('me');
        this.globals.userId = null;
        this.globals.nameSignedIn = null;
        this.globals.role = null;
        this.globals.emailSignedIn = null;
        this.globals.urlAfterSignIn = '/';
        location.reload(true);
    }
    public logoutNoRedirect() {
        this.localStorageService.remove('token');
        this.localStorageService.remove('me');
        this.globals.userId = null;
        this.globals.nameSignedIn = null;
        this.globals.role = null;
        this.globals.emailSignedIn = null;
        this.globals.urlAfterSignIn = '/';
    }

}
