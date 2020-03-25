import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { ContatoComponent } from './modules/contato/contato.component';
import { InformacoesComponent } from './modules/informacoes/informacoes.component';
import { ManualTecnicoComponent } from './modules/manual-tecnico/manual-tecnico.component';
import { DocumentosComponent } from './modules/documentos/documentos.component';
import { CalendarioComponent } from './modules/calendario/calendario.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';

const routes: Routes = [
    {path: '', loadChildren: './modules/home/home.module#HomeModule'},
    {path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
    {path: 'cadastro', loadChildren: './modules/cadastro/cadastro.module#CadastroModule'},
    {path: 'empresas', loadChildren: './modules/empresas/empresas.module#EmpresasModule'},
    {path: 'contato', component:ContatoComponent},
    {path: 'informacoes', component:InformacoesComponent},
    {path: 'manual-tecnico', component:ManualTecnicoComponent},
    {path: 'documentos', component:DocumentosComponent},
    {path: 'documentos/manual-tecnico', component:ManualTecnicoComponent},
    {path: 'calendario', component:CalendarioComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [AuthGuard]},
    {path: 'mercado', loadChildren: './modules/mercado/mercado.module#MercadoModule', canActivate: [AuthGuard]},
    {path: '**', loadChildren: './modules/home/home.module#HomeModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
