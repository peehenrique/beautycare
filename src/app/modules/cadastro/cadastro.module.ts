import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ObrigadoComponent } from './pages/obrigado/obrigado.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { AguardeComponent } from './pages/aguarde/aguarde.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        CadastroRoutingModule,
        NgSelectModule
    ],
    declarations: [CadastroComponent, EditarComponent, PerfilComponent, ObrigadoComponent, UploadsComponent, AguardeComponent]
})
export class CadastroModule {}
