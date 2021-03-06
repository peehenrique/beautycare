import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from 'ngx-store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private localStorageService: LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.localStorageService.get('token')) {
            console.log('User logged in');
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login']);
        return false;
    }
}