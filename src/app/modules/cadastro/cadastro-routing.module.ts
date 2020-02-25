import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { AguardeComponent } from './pages/aguarde/aguarde.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ObrigadoComponent } from './pages/obrigado/obrigado.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { UploadsComponent } from './pages/uploads/uploads.component';

const routes: Routes = [
    {path: '', component: CadastroComponent},
    {path: 'artes', component: UploadsComponent},
    {path: 'edit', component: EditarComponent, canActivate: [AuthGuard]},
    {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
    {path: 'obrigado', component: ObrigadoComponent},
    {path: 'aguarde', component: AguardeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule {}
