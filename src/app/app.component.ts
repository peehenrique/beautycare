import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-store';
import { Globals } from './core/global/globals';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'beauty-care';
    isPopState = false;

    constructor(private globals: Globals,
                private localStorageService: LocalStorageService,
                private router: Router,
                private locStrat: LocationStrategy) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                (<any>window).ga('set', 'page', event.urlAfterRedirects);
                (<any>window).ga('send', 'pageview');
            }
        });
    }

    ngOnInit() {
        this.locStrat.onPopState(() => {
            this.isPopState = true;
        });

        if (this.localStorageService.get('me')) {
            const me = this.localStorageService.get('me');
            this.globals.isSignedIn = true;
            this.globals.nameSignedIn = me.name;
            this.globals.role = me.role;
            this.globals.userId = me.id;
        }

        this.router.events.subscribe(event => {
            // Scroll to top if accessing a page, not via browser history stack
            if (event instanceof NavigationEnd && !this.isPopState) {
                window.scrollTo(0, 0);
                this.isPopState = false;
            }

            // Ensures that isPopState is reset
            if (event instanceof NavigationEnd) {
                this.isPopState = false;
            }
        });
    }
}
