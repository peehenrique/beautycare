import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncatePipesModule } from 'angular-truncate-pipes';
import { SharedModule } from '../../shared/shared.module';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

@NgModule({
    imports: [
        CommonModule,
        EmpresasRoutingModule,
        TruncatePipesModule,
        NgbPaginationModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [EmpresasComponent, EmpresaComponent]
})
export class EmpresasModule {}
