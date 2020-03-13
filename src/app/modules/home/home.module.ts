import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipesModule } from 'angular-truncate-pipes';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { HometesteComponent } from './pages/hometeste/hometeste.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TruncatePipesModule,
        SharedModule
    ],
    declarations: [HomeComponent, InstitucionalComponent, SobreComponent, InicialComponent, HometesteComponent]
})
export class HomeModule {}
