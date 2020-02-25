import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

const routes: Routes = [
    {path: 'empresa/:id', component: EmpresaComponent},
    {path: '', component: EmpresasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
