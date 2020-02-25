import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appOnlyLetters]'
})
export class OnlyLettersDirective {
// Allow decimal numbers and negative values
    private regex: RegExp = new RegExp(/^-?[a-zA-Z\u00C0-\u017F\s]+(\.[a-zA-Z\u00C0-\u017F\s]*){0,1}$/g);
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: Array<string> = ['Backspace', 'Delete', 'Tab', 'End', 'Home', '-'];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}
