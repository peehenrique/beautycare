import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ArquivosComponent } from './pages/arquivos/arquivos.component';

const routes: Routes = [
    {path: 'noticias', component: NoticiasComponent},
    {path: 'arquivos', component: ArquivosComponent},
    {path: 'empresas', component: EmpresasComponent},
    {path: 'empresa/:id', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
