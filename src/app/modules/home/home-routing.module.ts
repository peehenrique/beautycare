import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { InicialComponent } from './pages/inicial/inicial.component';

const routes: Routes = [
    {path: '', component: InicialComponent},
    {path: 'institucional', component: InstitucionalComponent},
    {path: 'sobre', component: SobreComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
