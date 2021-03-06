import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { Globals } from '../../core/global/globals';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss']
})
export class InformacoesComponent implements OnInit {

  open = false;
  public name: string = null;
  public me: any = null;

  constructor(private localStorageService: LocalStorageService,
              private authService: AuthService,
              public globals: Globals) { }

  ngOnInit() {
      if (this.localStorageService.get('token')) {
          if (this.localStorageService.get('me')) {
              this.me = this.localStorageService.get('me');
          } else {
              // this.authService.me();
              console.log('no me');
          }

      }
  }

  logout() {
      this.authService.logout();
  }

}
