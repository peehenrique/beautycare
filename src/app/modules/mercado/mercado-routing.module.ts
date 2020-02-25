import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MercadoComponent } from './pages/mercado/mercado.component';

const routes: Routes = [{
    path: '', component: MercadoComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MercadoRoutingModule {}
