import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'ngx-store';
import { throwError } from 'rxjs';
import { Globals } from '../global/globals';

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService {

    constructor(private globals: Globals,
                private localStorageService: LocalStorageService) { }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            if (error.status === 401) {
                this.logout();
            }
        }
        // return an ErrorObservable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
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

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
