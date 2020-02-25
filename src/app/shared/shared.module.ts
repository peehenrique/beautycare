import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FitDirective } from './directives/fit/fit.directive';
import { OnlyLettersAndPunctuationDirective } from './directives/form/only-letters-and-punctuation.directive';
import { OnlyLettersDirective } from './directives/form/only-letters.directive';
import { OnlyNumbersDirective } from './directives/form/only-numbers.directive';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbDropdownModule.forRoot(),
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        OnlyNumbersDirective,
        OnlyLettersDirective,
        OnlyLettersAndPunctuationDirective,
        FitDirective
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        OnlyNumbersDirective,
        OnlyLettersDirective,
        OnlyLettersAndPunctuationDirective,
        FitDirective
    ]
})
export class SharedModule {}
