import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TruncatePipesModule } from 'angular-truncate-pipes';
import { WebStorageModule } from 'ngx-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Globals } from './core/global/globals';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './modules/contato/contato.component';
import { InformacoesComponent } from './modules/informacoes/informacoes.component';
import { DocumentosComponent } from './modules/documentos/documentos.component';
import { CalendarioComponent } from './modules/calendario/calendario.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { ManualTecnicoComponent } from './modules/manual-tecnico/manual-tecnico.component';

@NgModule({
    declarations: [
        AppComponent,
        ContatoComponent,
        InformacoesComponent,
        DocumentosComponent,
        CalendarioComponent,
        NoticiasComponent,
        ManualTecnicoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        WebStorageModule,
        NgSelectModule,
        TruncatePipesModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        Globals
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
