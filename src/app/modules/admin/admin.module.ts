import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TruncatePipesModule } from 'angular-truncate-pipes';

import { AdminRoutingModule } from './admin-routing.module';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TruncatePipesModule,
        NgbPaginationModule,
        NgSelectModule
    ],
    declarations: [NoticiasComponent, EmpresasComponent, EmpresaComponent]
})
export class AdminModule {}
