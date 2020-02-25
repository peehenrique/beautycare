import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MercadoRoutingModule } from './mercado-routing.module';
import { MercadoComponent } from './pages/mercado/mercado.component';

@NgModule({
  imports: [
    CommonModule,
    MercadoRoutingModule
  ],
  declarations: [MercadoComponent]
})
export class MercadoModule { }
