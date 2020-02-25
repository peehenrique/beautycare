import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    isSignedIn = false;
    emailSignedIn: string = null;
    userId: number = null;
    urlAfterSignIn: string = null;
    nameSignedIn: string = null;
    registeredEmail: string = null;
    role = 'guest';
}
