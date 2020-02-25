import { Directive, ElementRef, AfterViewChecked, HostListener } from '@angular/core';

@Directive({
    selector: '[appFit]'
})
export class FitDirective implements AfterViewChecked {

    constructor(private el: ElementRef) { }

    ngAfterViewChecked() {
        // call our fitParent function here later
        this.fitParent(this.el.nativeElement);
    }

    @HostListener('window:resize')
    onResize() {
        // call our matchHeight function here later
        this.fitParent(this.el.nativeElement);
    }

    tryAgain() {
        setTimeout(function() { this.fitParent(this.el.nativeElement); }, 1000);
    }

    fitParent(el: HTMLImageElement) {
        // console.log(el.getBoundingClientRect().width + ' | ' + el.src);
        if (!el || el.getBoundingClientRect().width < 50) {
            this.tryAgain();
            return;
        }

        // step 1: find all the child elements with the selected class name
        const container = el.parentElement;

        const objectWidth = el.getBoundingClientRect().width;
        const objectHeight = el.getBoundingClientRect().height;

        const parentWidth = container.getBoundingClientRect().width;
        const parentHeight = container.getBoundingClientRect().height;

        if (objectWidth > parentWidth) {
            const newWidth = (parentWidth - 20);
            const newHeight = ((objectHeight * (parentWidth - 20)) / objectWidth);
            el.style.width = newWidth  + 'px';
            el.style.height = newHeight + 'px';

            if (newHeight < parentHeight) {
                el.style.marginTop = ((parentHeight - newHeight) / 2) - 10 + 'px';
            }
        } else if (objectHeight < parentHeight) {
            el.style.marginTop = ((parentHeight - objectHeight) / 2) - 10 + 'px';
        }


    }

}
