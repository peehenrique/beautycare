(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/empresa/empresa.component */ "./src/app/modules/admin/pages/empresa/empresa.component.ts");
/* harmony import */ var _pages_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/empresas/empresas.component */ "./src/app/modules/admin/pages/empresas/empresas.component.ts");
/* harmony import */ var _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/noticias/noticias.component */ "./src/app/modules/admin/pages/noticias/noticias.component.ts");
/* harmony import */ var _pages_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/arquivos/arquivos.component */ "./src/app/modules/admin/pages/arquivos/arquivos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'noticias', component: _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"] },
    { path: 'arquivos', component: _pages_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_5__["ArquivosComponent"] },
    { path: 'empresas', component: _pages_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_3__["EmpresasComponent"] },
    { path: 'empresa/:id', component: _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_2__["EmpresaComponent"] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var angular_truncate_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-truncate-pipes */ "./node_modules/angular-truncate-pipes/modules/angular-truncate-pipes.es5.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var _pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/noticias/noticias.component */ "./src/app/modules/admin/pages/noticias/noticias.component.ts");
/* harmony import */ var _pages_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/empresas/empresas.component */ "./src/app/modules/admin/pages/empresas/empresas.component.ts");
/* harmony import */ var _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/empresa/empresa.component */ "./src/app/modules/admin/pages/empresa/empresa.component.ts");
/* harmony import */ var _pages_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/arquivos/arquivos.component */ "./src/app/modules/admin/pages/arquivos/arquivos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular_truncate_pipes__WEBPACK_IMPORTED_MODULE_5__["TruncatePipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"]
            ],
            declarations: [_pages_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_7__["NoticiasComponent"], _pages_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_8__["EmpresasComponent"], _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_9__["EmpresaComponent"], _pages_arquivos_arquivos_component__WEBPACK_IMPORTED_MODULE_10__["ArquivosComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/arquivos/arquivos.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/arquivos/arquivos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Arquivos</h1>\r\n\r\n\r\n<div class=\"row\">\r\n  <iframe src=\"http://beautycarebrazil.org.br/boletins/subir\" width=\"100%\" height=\"600\" frameBorder=\"0\"></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/admin/pages/arquivos/arquivos.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/arquivos/arquivos.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.p {\n  margin: 20px 169px;\n  font-family: \"Encode Sans\";\n  font-size: 16px; }\n\nh1 {\n  margin-left: 100px;\n  font-family: \"Encode Sans\";\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #026a82; }\n\nh4 {\n  margin-left: 100px;\n  font-family: \"Encode Sans\";\n  color: #026a82 !important; }\n"

/***/ }),

/***/ "./src/app/modules/admin/pages/arquivos/arquivos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/pages/arquivos/arquivos.component.ts ***!
  \********************************************************************/
/*! exports provided: ArquivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivosComponent", function() { return ArquivosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArquivosComponent = /** @class */ (function () {
    function ArquivosComponent() {
    }
    ArquivosComponent.prototype.ngOnInit = function () {
    };
    ArquivosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arquivos',
            template: __webpack_require__(/*! ./arquivos.component.html */ "./src/app/modules/admin/pages/arquivos/arquivos.component.html"),
            styles: [__webpack_require__(/*! ./arquivos.component.scss */ "./src/app/modules/admin/pages/arquivos/arquivos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArquivosComponent);
    return ArquivosComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/empresa/empresa.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/pages/empresa/empresa.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h2>\r\n        Cadastro\r\n      </h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form class=\"cadastro\" (ngSubmit)=\"submitCompanyInfo()\" [formGroup]=\"companyDataFormGroup\" enctype=\"multipart/form-data\" novalidate>\r\n        <h3 class=\"pt-3 pb-2\">Dados da Empresa</h3>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12\">\r\n            <label for=\"razao_social\">Razão Social</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"razao_social\"\r\n                   name=\"razao_social\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"razao_social\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('razao_social').invalid && (companyDataFormGroup.get('razao_social').dirty || companyDataFormGroup.get('razao_social').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('razao_social').errors.required\">Digite razão social da empresa.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"nome_fantasia\">Nome Fantasia</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"nome_fantasia\"\r\n                   name=\"nome_fantasia\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"nome_fantasia\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('nome_fantasia').invalid && (companyDataFormGroup.get('nome_fantasia').dirty || companyDataFormGroup.get('nome_fantasia').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('nome_fantasia').errors.required\">Digite o nome fantasia da empresa.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"website\">Website</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"website\"\r\n                   name=\"website\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"website\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('website').invalid && (companyDataFormGroup.get('website').dirty || companyDataFormGroup.get('website').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('website').errors.required\">Preencha o website da empresa.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12 col-sm-6 col-md-4\">\r\n            <label for=\"contato\">Pessoa de Contato</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"contato\"\r\n                   name=\"contato\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"contato\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('contato').invalid && (companyDataFormGroup.get('contato').dirty || companyDataFormGroup.get('contato').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('contato').errors.required\">Digite o nome de um responsável.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12 col-sm-6 col-md-4\">\r\n            <label for=\"contato\">E-mail</label>\r\n            <input value=\"\"\r\n                   type=\"email\"\r\n                   class=\"form-control\"\r\n                   id=\"email\"\r\n                   name=\"email\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"email\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('email').invalid && (companyDataFormGroup.get('email').dirty || companyDataFormGroup.get('email').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('email').errors.required\">Digite o email do responsável.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12 col-sm-12 col-md-4\">\r\n            <label for=\"contato\">Telefone de Contato</label>\r\n            <div>\r\n                            <span style=\"width: 120px; display: inline-block; vertical-align: bottom; margin-right: 15px;\">\r\n                                <ng-select\r\n                                        [items]=\"paises\"\r\n                                        [multiple]=\"false\"\r\n                                        bindLabel=\"pais\"\r\n                                        bindValue=\"prefixo\"\r\n                                        [clearable]=\"false\"\r\n                                        placeholder=\"País\"\r\n                                        formControlName=\"area_code\">\r\n\r\n                                    <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                                        <span class=\"ng-value-label\"><img *ngIf=\"item.iso\" [src]=\"'./assets/images/flags/' + item.iso.toLowerCase() + '.png'\" width=\"20px\" height=\"15px\"> {{item.prefixo}}</span>\r\n                                    </ng-template>\r\n\r\n                                    <ng-template ng-option-tmp let-item=\"item\">\r\n                                        <img [src]=\"'./assets/images/flags/' + item.iso.toLowerCase() + '.png'\" width=\"20px\" height=\"15px\"> {{item.pais}}\r\n                                    </ng-template>\r\n                                </ng-select>\r\n                            </span>\r\n              <input style=\"display: inline-block; max-width: calc(100% - 135px)\" value=\"\"\r\n                     type=\"text\"\r\n                     class=\"form-control\"\r\n                     id=\"telefone\"\r\n                     name=\"telefone\"\r\n                     maxlength=\"255\"\r\n                     appOnlyNumbers=\"\"\r\n                     formControlName=\"telefone\"\r\n                     required>\r\n            </div>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"(companyDataFormGroup.get('telefone').invalid && (companyDataFormGroup.get('telefone').dirty || companyDataFormGroup.get('telefone').touched)) || (companyDataFormGroup.get('area_code').invalid && (companyDataFormGroup.get('area_code').dirty || companyDataFormGroup.get('area_code').touched))\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('telefone').errors\">Digite o telefone do responsável.</div>\r\n                <div *ngIf=\"companyDataFormGroup.get('area_code').errors\">Escolha um código de área.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <h3 class=\"pt-3 pb-2\">Endereço</h3>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12\">\r\n            <label for=\"end_rua\">Endereço <small>(Exemplo: Rua, número, andar / sala, bairro)</small></label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"end_rua\"\r\n                   name=\"end_rua\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"end_rua\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('end_rua').invalid && (companyDataFormGroup.get('end_rua').dirty || companyDataFormGroup.get('end_rua').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('end_rua').errors.required\">Preencha a rua.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12 col-md-4\">\r\n            <label for=\"end_cidade\">Cidade</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"end_cidade\"\r\n                   name=\"end_cidade\"\r\n                   maxlength=\"255\"\r\n                   formControlName=\"end_cidade\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('end_cidade').invalid && (companyDataFormGroup.get('end_cidade').dirty || companyDataFormGroup.get('end_cidade').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('end_cidade').errors.required\">Preencha a cidade.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-6 col-md-2\">\r\n            <label for=\"end_estado\">Estado</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   placeholder=\"UF\"\r\n                   class=\"form-control\"\r\n                   id=\"end_estado\"\r\n                   name=\"end_estado\"\r\n                   maxlength=\"2\"\r\n                   formControlName=\"end_estado\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('end_estado').invalid && (companyDataFormGroup.get('end_estado').dirty || companyDataFormGroup.get('end_estado').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('end_estado').errors.required\">Preencha o estado.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-6 col-md-2\">\r\n            <label for=\"end_postal\">Cód. Postal</label>\r\n            <input value=\"\"\r\n                   type=\"text\"\r\n                   type=\"text\"\r\n                   placeholder=\"05865-001\"\r\n                   class=\"form-control\"\r\n                   id=\"end_postal\"\r\n                   name=\"end_postal\"\r\n                   formControlName=\"end_postal\"\r\n                   required>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('end_postal').invalid && (companyDataFormGroup.get('end_postal').dirty || companyDataFormGroup.get('end_postal').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('end_postal').errors.required\">Preencha o cód. postal.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12 col-md-4\">\r\n            <label for=\"end_pais\">País</label>\r\n            <ng-select\r\n                    [items]=\"paises\"\r\n                    [multiple]=\"false\"\r\n                    bindLabel=\"pais\"\r\n                    bindValue=\"iso\"\r\n                    labelForId=\"end_pais\"\r\n                    formControlName=\"end_pais\">\r\n\r\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                <span class=\"ng-value-label\"><img [src]=\"'./assets/images/flags/' + item.iso.toLowerCase() + '.png'\" width=\"20px\" height=\"15px\"> {{item.pais}}</span>\r\n              </ng-template>\r\n\r\n              <ng-template ng-option-tmp let-item=\"item\">\r\n                <img [src]=\"'./assets/images/flags/' + item.iso.toLowerCase() + '.png'\" width=\"20px\" height=\"15px\"> {{item.pais}}\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12 col-sm-6\">\r\n            <h4 class=\"pb-3\">Logomarca</h4>\r\n            <p>Envie um logo no formato JPG, GIF ou PNG</p>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" class=\"form-control-file\" (change)=\"getLogo($event)\" id=\"formfieldLogo\">\r\n                <div class=\"red-alert\">\r\n                  <div *ngIf=\"imageError\"\r\n                       class=\"small\">\r\n                    <div>Imagem inválida, somente é permitido jpg ou jpeg no formato {{imageWidth}} x {{imageHeight}}.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-12 col-sm-6\">\r\n            <h4 class=\"pb-3\">Arte</h4>\r\n            <p>Envie uma arte no formato JPG, GIF ou PNG com resolução (em pixels) recomendada de {{imageWidth}}px por {{imageHeight}}px. Esta arte será utilizada para gerar um PDF sobre a sua empresa, dispoível para usuários cadastrados na plataforma.\r\n              <a href=\"./assets/images/cadastro/exemplo.pdf\" target=\"_blank\">Clique aqui</a> para ver um exemplo.</p>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formfieldArte\"></label>\r\n                <input type=\"file\" class=\"form-control-file\" (change)=\"getArte($event)\" id=\"formfieldArte\">\r\n                <div class=\"red-alert\">\r\n                  <div *ngIf=\"imageError\"\r\n                       class=\"small\">\r\n                    <div>Imagem inválida, somente é permitido jpg, jpeg, giv ou png.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <h3 class=\"pt-3 pb-2\">Sobre</h3>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12\">\r\n            <label for=\"descricao\">Breve descrição da empresa <small></small></label>\r\n            <textarea name=\"descricao\" id=\"descricao\" formControlName=\"descricao\" maxlength=\"900\" cols=\"30\" rows=\"6\" class=\"form-control w-100\"></textarea>\r\n            <small class=\"d-block w-100\">{{900 - companyDataFormGroup.get('descricao').value.length}} caracteres restantes.</small>\r\n            <div class=\"red-alert\">\r\n              <div *ngIf=\"companyDataFormGroup.get('descricao').invalid && (companyDataFormGroup.get('descricao').dirty || companyDataFormGroup.get('descricao').touched)\"\r\n                   class=\"small\">\r\n                <div *ngIf=\"companyDataFormGroup.get('descricao').errors.required\">Preencha a descrição.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <h3 class=\"pt-3 pb-2\">Atuação</h3>\r\n\r\n        <h4 class=\"pb-3\">Produtos e Serviços</h4>\r\n\r\n        <div class=\"form-row mb-4 pl-md-4\">\r\n          <div class=\"form-group col-12\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos\" formControlName=\"produtos\" value=\"link\"><label class=\"form-check-label\" for=\"produtos\">Produtos Acabados</label></div>\r\n          <div class=\"row sub-category w-100 d-none\" [ngClass]=\"{'d-flex': companyDataFormGroup.get('produtos').value === true}\">\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_1\" formControlName=\"produtos_1\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_1\">Prod. Banho</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_2\" formControlName=\"produtos_2\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_2\">Prod. Cabelo</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_3\" formControlName=\"produtos_3\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_3\">Hig. Oral</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_4\" formControlName=\"produtos_4\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_4\">Prod. Pele</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_5\" formControlName=\"produtos_5\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_5\">Prod. Masculino</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_6\" formControlName=\"produtos_6\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_6\">Maquiagem</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_7\" formControlName=\"produtos_7\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_7\">Desodorante</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_8\" formControlName=\"produtos_8\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_8\">Prod. Infanfil</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_9\" formControlName=\"produtos_9\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_9\">Perfumaria</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_10\" formControlName=\"produtos_10\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_10\">Depilatórios</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"produtos_11\" formControlName=\"produtos_11\" value=\"1\"><label class=\"form-check-label\" for=\"produtos_11\">Cuid. Sol</label></div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-row mb-4 pl-md-4\">\r\n          <div class=\"form-group col-12\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes\" formControlName=\"ingredientes\" value=\"link\"><label class=\"form-check-label\" for=\"ingredientes\">Ingredientes</label></div>\r\n          <div class=\"row sub-category w-100 d-none\" [ngClass]=\"{'d-flex': companyDataFormGroup.get('ingredientes').value === true}\">\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_1\" formControlName=\"ingredientes_1\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_1\">Tensoativos</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_2\" formControlName=\"ingredientes_2\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_2\">Emulsionantes</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_3\" formControlName=\"ingredientes_3\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_3\">Emolientes</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_4\" formControlName=\"ingredientes_4\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_4\">Extratos Vegetais</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_5\" formControlName=\"ingredientes_5\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_5\">Proteínas</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_6\" formControlName=\"ingredientes_6\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_6\">Óleos e Gorduras</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_7\" formControlName=\"ingredientes_7\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_7\">Ativos Capilares</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_8\" formControlName=\"ingredientes_8\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_8\">Ativos de Pele</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_9\" formControlName=\"ingredientes_9\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_9\">Filtro solares</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_10\" formControlName=\"ingredientes_10\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_10\">Conservantes</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_11\" formControlName=\"ingredientes_11\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_11\">Corantes</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_12\" formControlName=\"ingredientes_12\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_12\">Fragancias</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_13\" formControlName=\"ingredientes_13\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_13\">Gomas e Espessantes</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_14\" formControlName=\"ingredientes_14\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_14\">Óleos Essenciais</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_15\" formControlName=\"ingredientes_15\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_15\">Polímeros</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_16\" formControlName=\"ingredientes_16\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_16\">Silicone</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"ingredientes_17\" formControlName=\"ingredientes_17\" value=\"1\"><label class=\"form-check-label\" for=\"ingredientes_17\">Modificadores Reológicos</label></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row mb-4 pl-md-4\">\r\n          <div class=\"form-group col-12\"><input class=\"form-check-input\" type=\"checkbox\" id=\"embalagens\" formControlName=\"embalagens\" value=\"link\"><label class=\"form-check-label\" for=\"embalagens\">Embalagens</label></div>\r\n          <div class=\"row sub-category w-100 d-none\" [ngClass]=\"{'d-flex': companyDataFormGroup.get('embalagens').value === true}\">\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"embalagens_1\" formControlName=\"embalagens_1\" value=\"1\"><label class=\"form-check-label\" for=\"embalagens_1\">Vidro</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"embalagens_2\" formControlName=\"embalagens_2\" value=\"1\"><label class=\"form-check-label\" for=\"embalagens_2\">Plastico</label></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row mb-4 pl-md-4\">\r\n          <div class=\"form-group col-12\"><input class=\"form-check-input\" type=\"checkbox\" id=\"servicos\" formControlName=\"servicos\" value=\"link\"><label class=\"form-check-label\" for=\"servicos\">Serviços de Pesquisa Clínica e Laboratorial</label></div>\r\n        </div>\r\n        <div class=\"form-row mb-4 pl-md-4\">\r\n          <div class=\"form-group col-12\"><input class=\"form-check-input\" type=\"checkbox\" id=\"acessorios\" formControlName=\"acessorios\" value=\"link\"><label class=\"form-check-label\" for=\"acessorios\">Acessórios e equipamentos de beleza</label></div>\r\n          <div class=\"row sub-category w-100 d-none\" [ngClass]=\"{'d-flex': companyDataFormGroup.get('acessorios').value === true}\">\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"acessorios_1\" formControlName=\"acessorios_1\" value=\"1\"><label class=\"form-check-label\" for=\"acessorios_1\">Material promocional</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"acessorios_2\" formControlName=\"acessorios_2\" value=\"1\"><label class=\"form-check-label\" for=\"acessorios_2\">Mobiliário</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"acessorios_3\" formControlName=\"acessorios_3\" value=\"1\"><label class=\"form-check-label\" for=\"acessorios_3\">Equipamentos</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"acessorios_4\" formControlName=\"acessorios_4\" value=\"1\"><label class=\"form-check-label\" for=\"acessorios_4\">Catálogo</label></div>\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"acessorios_5\" formControlName=\"acessorios_5\" value=\"1\"><label class=\"form-check-label\" for=\"acessorios_5\">Acessórios de beleza</label></div>\r\n          </div>\r\n        </div>\r\n\r\n        <h4 class=\"pb-3\">Países para onde exporta</h4>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12\">\r\n            <div class=\"form-group col-12 col-sm-6 col-md-4 fc\"><input class=\"form-check-input\" type=\"checkbox\" id=\"nao_exporta\" formControlName=\"nao_exporta\" value=\"1\"><label class=\"form-check-label\" for=\"nao_exporta\">Ainda não exporta</label></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12\">\r\n            <label for=\"exporta\">Escolha um ou mais países</label>\r\n            <ng-select\r\n                    [items]=\"paises\"\r\n                    [multiple]=\"true\"\r\n                    bindLabel=\"pais\"\r\n                    bindValue=\"iso\"\r\n                    labelForId=\"exporta\"\r\n                    formControlName=\"exporta\">\r\n\r\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                <span class=\"ng-value-label\"><img [src]=\"'./assets/images/flags/' + item.iso.toLowerCase() + '.png'\" width=\"20px\" height=\"15px\"> {{item.pais}}</span>\r\n                <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n              </ng-template>\r\n\r\n              <ng-template ng-option-tmp let-item=\"item\">\r\n                <img [src]=\"'./assets/images/flags/' + item.iso.toLowerCase() + '.png'\" width=\"20px\" height=\"15px\"> {{item.pais}}\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"alert alert-success text-center mt-5\" *ngIf=\"upd_success\">Seu cadastro foi atualizado com sucesso!</div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-12 text-center mt-5\">\r\n            <button type=\"submit\" class=\"btn btn-lg btn-primary px-5\" [disabled]=\"companyDataFormGroup.invalid\">Enviar</button>\r\n          </div>\r\n        </div>\r\n        <!--\r\n        {{companyDataFormGroup.status}}\r\n        {{findInvalidControls()}}\r\n        -->\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/admin/pages/empresa/empresa.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/pages/empresa/empresa.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/admin/pages/empresa/empresa.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/pages/empresa/empresa.component.ts ***!
  \******************************************************************/
/*! exports provided: EmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_global_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/global/globals */ "./src/app/core/global/globals.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_cadastro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/cadastro.service */ "./src/app/core/services/cadastro.service.ts");
/* harmony import */ var _core_services_empresas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/empresas.service */ "./src/app/core/services/empresas.service.ts");
/* harmony import */ var _core_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/utilities.service */ "./src/app/core/services/utilities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EmpresaComponent = /** @class */ (function () {
    function EmpresaComponent(cadastroService, empresasService, utilitiesService, cd, router, route, authService, globals) {
        this.cadastroService = cadastroService;
        this.empresasService = empresasService;
        this.utilitiesService = utilitiesService;
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.globals = globals;
        this.categorias = null;
        this.paises = null;
        this.fileData = null;
        this.imageError = false;
        this.empresa = null;
        this.error = null;
        this.tmpId = null;
        this.imageWidth = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].IMG_WIDTH;
        this.imageHeight = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].IMG_HEIGHT;
        this.logo_ext = null;
        this.arte_ext = null;
        this.empresaRawData = null;
        this.upd_success = false;
    }
    EmpresaComponent.prototype.ngOnInit = function () {
        this.getPaises();
        this.companyDataFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'razao_social': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'nome_fantasia': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'website': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'contato': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'area_code': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'telefone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'end_rua': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'end_cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'end_estado': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'end_pais': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'end_postal': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'logo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'arte': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'logo_ext': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'arte_ext': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'exporta': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'nao_exporta': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'descricao': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'ingredientes': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'acessorios': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'embalagens': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'embalagens_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'embalagens_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'servicos': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_4': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_5': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_6': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_7': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_8': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_9': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_10': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'produtos_11': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_4': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_5': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_6': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_7': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_8': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_9': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_10': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_11': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_12': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_13': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_14': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_15': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_16': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'ingredientes_17': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'acessorios_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'acessorios_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'acessorios_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'acessorios_4': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            'acessorios_5': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [])
        });
    };
    EmpresaComponent.prototype.getCompanyByEmpresaId = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.empresasService.loadEmpresaByEmpresaId(id).subscribe(function (response) {
            console.log('Response loadEmpresaByEmpresaId:', response);
            if (response.status) {
                _this.empresaRawData = response.output;
                Object.keys(response.output).forEach(function (k) {
                    var _this = this;
                    if (this.companyDataFormGroup.get(k)) {
                        if (k === 'end_pais') {
                            this.paises.map(function (p) {
                                if (+p.id === +response.output[k]) {
                                    _this.companyDataFormGroup.get(k).patchValue(p.iso);
                                    // console.log('-----');
                                }
                                else {
                                    // console.log(p.id);
                                }
                            }, this);
                        }
                        else if (k === 'area_code') {
                            this.paises.map(function (p) {
                                if (+p.prefixo === +response.output[k]) {
                                    _this.companyDataFormGroup.get(k).patchValue(p.prefixo);
                                }
                            }, this);
                        }
                        else {
                            this.companyDataFormGroup.get(k).patchValue(response.output[k]);
                        }
                    }
                    else if (k === 'paises') {
                        var fill = [];
                        for (var i = 0; i < response.output[k].length; i++) {
                            fill.push(response.output[k][i]['iso']);
                        }
                        this.companyDataFormGroup.get('exporta').patchValue(fill);
                    }
                    else if (k === 'categorias') {
                        response.output.categorias.map(function (c) {
                            _this.companyDataFormGroup.get(c.link).patchValue(true);
                            if (c.sub) {
                                c.sub.map(function (s) {
                                    _this.companyDataFormGroup.get(c.link + '_' + s.id).patchValue(true);
                                });
                            }
                        }, this);
                    }
                }, _this);
            }
            else {
                _this.error = true;
            }
        });
    };
    EmpresaComponent.prototype.submitCompanyInfo = function () {
        var _this = this;
        if (this.companyDataFormGroup.valid) {
            var formObj = this.companyDataFormGroup.getRawValue(); // {name: '', description: ''}
            formObj.id = this.route.snapshot.paramMap.get('id');
            formObj.user_id = this.empresaRawData.user_id;
            var serializedForm = JSON.stringify(formObj);
            console.log(serializedForm);
            this.cadastroService.admUpdateCompanyData(serializedForm).subscribe(function (response) {
                console.log('Response register:', response.output);
                if (response.status) {
                    _this.upd_success = true;
                }
            });
        }
        else {
            this.utilitiesService.validateAllFormFields(this.companyDataFormGroup);
        }
    };
    EmpresaComponent.prototype.getLogo = function (event) {
        var _this = this;
        var fileError = false;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            var regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$');
            if (regex.test(event.target.value.toLowerCase())) {
                reader.onload = function () {
                    var ext = (/[.]/.exec(event.target.value.toLowerCase())) ? /[^.]+$/.exec(event.target.value.toLowerCase()) : undefined;
                    _this.logo_ext = ext[0];
                    console.log(ext[0]);
                    _this.companyDataFormGroup.patchValue({
                        logo: reader.result,
                        logo_ext: ext[0]
                    });
                    // need to run CD since file load runs outside of zone
                    _this.cd.markForCheck();
                };
            }
            else {
                fileError = true;
            }
        }
        if (fileError) {
            this.imageError = true;
        }
    };
    EmpresaComponent.prototype.getArte = function (event) {
        var _this = this;
        var fileError = false;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            var regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$');
            if (regex.test(event.target.value.toLowerCase())) {
                reader.onload = function () {
                    var ext = (/[.]/.exec(event.target.value.toLowerCase())) ? /[^.]+$/.exec(event.target.value.toLowerCase()) : undefined;
                    _this.arte_ext = ext[0];
                    console.log(ext[0]);
                    _this.companyDataFormGroup.patchValue({
                        arte: reader.result,
                        arte_ext: ext[0]
                    });
                    // need to run CD since file load runs outside of zone
                    _this.cd.markForCheck();
                };
            }
            else {
                fileError = true;
            }
        }
        if (fileError) {
            this.imageError = true;
        }
    };
    EmpresaComponent.prototype.check = function (val) {
        console.log(val.value);
    };
    EmpresaComponent.prototype.getCategories = function () {
        var _this = this;
        this.cadastroService.getCategorias().subscribe(function (response) {
            if (response.status) {
                console.log('Response categorias:', response.output);
                _this.categorias = response.output;
                Object.keys(_this.categorias).forEach(function (key) {
                    // console.log('Key : ' + key + ', Value : ' + response.output[key]['categoria']);
                    //console.log('<div class="form-group col-12 col-sm-12 col-md-4 form-check"><input class="form-check-input" type="checkbox" id="' + key + '" value="link"><label class="form-check-label" for="' + key + '">' + response.output[key]['categoria'] + '</label></div>');
                    if (response.output[key]['tabela']) {
                        // console.log(response.output[key]['tabela']);
                        Object.keys(response.output[key]['tabela']).forEach(function (key2) {
                            // console.log(key2);
                            // console.log('<div class="form-group col-12 col-sm-12 col-md-4 form-check"><input class="form-check-input" type="checkbox" id="' + key + '_' + response.output[key]['tabela'][key2]['id'] + '" formControlName="' + key + '_' + response.output[key]['tabela'][key2]['id'] + '" value="1"><label class="form-check-label" for="' + key + '_' + response.output[key]['tabela'][key2]['id'] + '">' + response.output[key]['tabela'][key2]['categoria'] + '</label></div>');
                            // console.log('\'' + key + '_' + response.output[key]['tabela'][key2]['id'] + '\': new FormControl(\'\', []),');
                        });
                    }
                    //console.log('<div class="form-group col-12 col-sm-12 col-md-4 form-check"><input class="form-check-input" type="checkbox" id="' + key + '" value="link"><label class="form-check-label" for="' + key + '">' + response.output[key]['categoria'] + '</label></div>');
                });
                _this.getCompanyByEmpresaId();
            }
        });
    };
    EmpresaComponent.prototype.getPaises = function () {
        var _this = this;
        this.cadastroService.getPaises().subscribe(function (response) {
            console.log('Response paises:', response.output);
            if (response.status) {
                _this.paises = response.output;
                _this.getCategories();
            }
        });
    };
    EmpresaComponent.prototype.findInvalidControls = function () {
        var invalid = [];
        var controls = this.companyDataFormGroup.controls;
        for (var name_1 in controls) {
            if (controls[name_1].invalid) {
                invalid.push(name_1);
            }
        }
        return invalid;
    };
    EmpresaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empresa',
            template: __webpack_require__(/*! ./empresa.component.html */ "./src/app/modules/admin/pages/empresa/empresa.component.html"),
            styles: [__webpack_require__(/*! ./empresa.component.scss */ "./src/app/modules/admin/pages/empresa/empresa.component.scss")],
            providers: [_core_services_cadastro_service__WEBPACK_IMPORTED_MODULE_6__["CadastroService"], _core_services_empresas_service__WEBPACK_IMPORTED_MODULE_7__["EmpresasService"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _core_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]]
        }),
        __metadata("design:paramtypes", [_core_services_cadastro_service__WEBPACK_IMPORTED_MODULE_6__["CadastroService"],
            _core_services_empresas_service__WEBPACK_IMPORTED_MODULE_7__["EmpresasService"],
            _core_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _core_global_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
    ], EmpresaComponent);
    return EmpresaComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/empresas/empresas.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/empresas/empresas.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mb-5\">\r\n            <h2>\r\n                Empresas .\r\n            </h2>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"categorias && categorias.length > 0\">\r\n            <form (ngSubmit)=\"search()\" [formGroup]=\"searchFormGroup\">\r\n                <div class=\"row filters p-2\">\r\n                    <div class=\"form-row p-3 align-items-center\">\r\n                        <div class=\"col-auto\"><input type=\"text\" formControlName=\"terms\" class=\"form-control\" placeholder=\"Nome da empresa\" name=\"terms\"></div>\r\n                        <div class=\"col-auto\" *ngIf=\"categorias\">\r\n                            <select class=\"custom-select mr-sm-2\" formControlName=\"categoria\" name=\"categoria\" id=\"inlineFormCustomSelect\">\r\n                                <option value=\"\" selected>Escolha uma categoria...</option>\r\n                                <option value=\"{{c.id}}\" *ngFor=\"let c of categorias\">{{c.categoria}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-auto\">\r\n                            <button class=\"btn btn-primary\" (click)=\"serachBtn()\">Buscar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"res\">\r\n\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Empresa</th>\r\n                    <th scope=\"col\">Status</th>\r\n                    <th scope=\"col\">Ação</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let e of res.results\">\r\n                    <td>{{e.id}}</td>\r\n                    <td>{{e.razao_social}}</td>\r\n                    <td>{{e.role}}</td>\r\n                    <td>\r\n                      <a class=\"btn btn-slim btn-liberar pointer linky\" (click)=\"bloquear(e.user_id)\" *ngIf=\"e.role === 'user'\">bloquear</a>\r\n                      <a class=\"btn btn-slim btn-liberar pointer\" (click)=\"liberar(e.user_id)\" *ngIf=\"e.role === 'guest'\">liberar</a> |\r\n                      <a class=\"btn btn-open\" target=\"_blank\" routerLink=\"/admin/empresa/{{e.id}}\">ver</a> |\r\n                      <a class=\"btn btn-open\" target=\"_blank\" routerLink=\"/admin/empresa/{{e.id}}\">editar</a>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <div class=\"pagination\">\r\n                <ngb-pagination [collectionSize]=\"res.count\" [(page)]=\"page\" [pageSize]=\"res.perPage\" (pageChange)=\"paginate()\"\r\n                                aria-label=\"Default pagination\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/admin/pages/empresas/empresas.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/empresas/empresas.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/admin/pages/empresas/empresas.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/pages/empresas/empresas.component.ts ***!
  \********************************************************************/
/*! exports provided: EmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasComponent", function() { return EmpresasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/cadastro.service */ "./src/app/core/services/cadastro.service.ts");
/* harmony import */ var _core_services_empresas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/empresas.service */ "./src/app/core/services/empresas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmpresasComponent = /** @class */ (function () {
    function EmpresasComponent(empresasService, cadastroService) {
        this.empresasService = empresasService;
        this.cadastroService = cadastroService;
        this.objectKeys = Object.keys;
        this.categorias = null;
        this.res = null;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.page = 1;
        this.param = {
            page: 1,
            name: '',
            category: ''
        };
    }
    EmpresasComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.search();
        this.searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'categoria': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    Object.defineProperty(EmpresasComponent.prototype, "terms", {
        get: function () { return this.searchFormGroup.get('terms'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmpresasComponent.prototype, "categoria", {
        get: function () { return this.searchFormGroup.get('categoria'); },
        enumerable: true,
        configurable: true
    });
    EmpresasComponent.prototype.search = function () {
        var _this = this;
        this.empresasService.admBuscaEmpresas(this.param).subscribe(function (response) {
            console.log('Response search:', response.output);
            if (response.status) {
                _this.res = response.output;
            }
            else {
            }
        });
    };
    EmpresasComponent.prototype.liberar = function (id) {
        this.empresasService.admLiberarEmpresa(id).subscribe(function (response) {
            console.log('Response search:', response.output);
            if (response.status) {
                alert('Empresa liberada com exito');
            }
            else {
            }
        });
    };
    EmpresasComponent.prototype.bloquear = function (id) {
        this.empresasService.admBloquearEmpresa(id).subscribe(function (response) {
            console.log('Response search:', response.output);
            if (response.status) {
                alert('Empresa bloqueada com exito');
            }
            else {
            }
        });
    };
    EmpresasComponent.prototype.getCategories = function () {
        var _this = this;
        this.cadastroService.getCategorias().subscribe(function (response) {
            if (response.status) {
                console.log('Response categorias:', response.output);
                var categorias_1 = [];
                Object.keys(response.output).forEach(function (key) {
                    console.log(key);
                    categorias_1.push({
                        'id': response.output[key].id,
                        'link': key,
                        'categoria': response.output[key].categoria,
                        'tabela': response.output[key]['tabela']
                    });
                });
                _this.categorias = categorias_1;
                console.log('cats: ', _this.categorias.length);
            }
        });
    };
    EmpresasComponent.prototype.serachBtn = function () {
        if (this.terms.value !== '') {
            this.param.name = this.terms.value;
        }
        if (this.categoria.value !== '') {
            this.param.category = this.categoria.value;
        }
        this.search();
    };
    EmpresasComponent.prototype.paginate = function () {
        console.log(this.page);
        this.param.page = this.page;
        this.search();
    };
    EmpresasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empresas',
            template: __webpack_require__(/*! ./empresas.component.html */ "./src/app/modules/admin/pages/empresas/empresas.component.html"),
            styles: [__webpack_require__(/*! ./empresas.component.scss */ "./src/app/modules/admin/pages/empresas/empresas.component.scss")],
            providers: [_core_services_empresas_service__WEBPACK_IMPORTED_MODULE_4__["EmpresasService"], _core_services_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["CadastroService"]]
        }),
        __metadata("design:paramtypes", [_core_services_empresas_service__WEBPACK_IMPORTED_MODULE_4__["EmpresasService"],
            _core_services_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["CadastroService"]])
    ], EmpresasComponent);
    return EmpresasComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/pages/noticias/noticias.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/noticias/noticias.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h2>\r\n                Notícias do Mercado\r\n            </h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <form class=\"noticias\" (ngSubmit)=\"uploadFile()\" [formGroup]=\"uploadFileFormGroup\" enctype=\"multipart/form-data\" novalidate>\r\n                <h3 class=\"pt-3 pb-2\">Upload</h3>\r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-12 col-sm-6\">\r\n                        <label for=\"title\">Título</label>\r\n                        <input value=\"\"\r\n                               appOnlyLetters\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               id=\"title\"\r\n                               name=\"title\"\r\n                               maxlength=\"100\"\r\n                               formControlName=\"title\"\r\n                               required>\r\n                        <div class=\"red-alert\">\r\n                            <div *ngIf=\"uploadFileFormGroup.get('title').invalid && (uploadFileFormGroup.get('title').dirty || uploadFileFormGroup.get('title').touched)\"\r\n                                 class=\"small\">\r\n                                <div *ngIf=\"uploadFileFormGroup.get('title').errors\">Título do arquvio é obrigatório.</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-12 col-sm-3\">\r\n                        <label for=\"formfield\">Arquivo</label>\r\n                        <input type=\"file\" class=\"form-control-file\" (change)=\"getfile($event)\" id=\"formfield\" formControlName=\"file\">\r\n                        <input type=\"hidden\" name=\"original\" formControlName=\"original\">\r\n                        <div class=\"red-alert\">\r\n                            <div *ngIf=\"uploadFileFormGroup.get('file').invalid && (uploadFileFormGroup.get('file').dirty || uploadFileFormGroup.get('file').touched)\"\r\n                                 class=\"small\">\r\n                                <div *ngIf=\"uploadFileFormGroup.get('file').errors\">Arquivo inválido.</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-12 col-sm-3 d-flex align-items-center\">\r\n                        <button type=\"submit\" class=\"btn btn-light btn-primary enviar px-5 \">Enviar</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row mt-3\" *ngIf=\"saved\">\r\n                    <div class=\"col\">\r\n                        <div class=\"alert alert-success\" role=\"alert\">\r\n                            Arquivo enviado com sucesso.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"red-alert\" *ngIf=\"upError\">\r\n                    <div class=\"small\">\r\n                        <div>Houve algum problema ao enviar o arquivo.</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--\r\n                {{uploadFileFormGroup.status}}\r\n                {{findInvalidControls()}}\r\n                -->\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h3 class=\"pt-3 pb-2\">Notícias publicadas</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"row border p-4 m-1 d-flex align-items-center\" *ngFor=\"let n of noticias\">\r\n        <div class=\"col-5\">{{n.title}}</div>\r\n        <div class=\"col-5\">{{n.file}}</div>\r\n        <div class=\"col-2 text-right\"><button class=\"btn btn-light\" (click)=\"remove(n.hash_name)\">remover</button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/pages/noticias/noticias.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/noticias/noticias.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.enviar {\n  color: white;\n  border-radius: 4px; }\n"

/***/ }),

/***/ "./src/app/modules/admin/pages/noticias/noticias.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/pages/noticias/noticias.component.ts ***!
  \********************************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/noticias.service */ "./src/app/core/services/noticias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(noticiasService, cd) {
        this.noticiasService = noticiasService;
        this.cd = cd;
        this.fileData = null;
        this.error = false;
        this.fileError = false;
        this.upError = false;
        this.saved = false;
        this.noticias = null;
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        this.uploadFileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'file': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](', ', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'original': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](', ', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.getFileList();
    };
    NoticiasComponent.prototype.remove = function (file) {
        var _this = this;
        var params = {
            id: file
        };
        this.noticiasService.remove(params).subscribe(function (response) {
            console.log('Response remove:', response.output);
            if (response.status) {
                _this.getFileList();
            }
        });
    };
    NoticiasComponent.prototype.uploadFile = function () {
        var _this = this;
        this.error = false;
        if (this.fileData) {
            var params = {
                title: this.uploadFileFormGroup.get('title').value,
                file: this.fileData,
                original: this.uploadFileFormGroup.get('original').value,
            };
            this.noticiasService.upload(params).subscribe(function (response) {
                console.log('Response uploadFile:', response.output);
                if (response.status) {
                    _this.saved = true;
                    _this.getFileList();
                }
            });
        }
        else {
            this.error = true;
        }
    };
    NoticiasComponent.prototype.getFileList = function () {
        var _this = this;
        var param = { porPag: 5, pag: 1 };
        this.noticiasService.getFileList(param).subscribe(function (response) {
            console.log('Response getFileList:', response.output);
            if (response.status) {
                _this.noticias = response.output.results;
            }
        });
    };
    NoticiasComponent.prototype.getfile = function (event) {
        var _this = this;
        var fileError = false;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            var regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(.pdf|.doc|.xlsx|.xls)$');
            if (regex.test(event.target.value.toLowerCase())) {
                this.uploadFileFormGroup.patchValue({ 'original': event.target.value });
                reader.onload = function () {
                    _this.fileData = reader.result;
                    // need to run CD since file load runs outside of zone
                    _this.cd.markForCheck();
                };
            }
            else {
                fileError = true;
            }
        }
        if (fileError) {
            this.fileError = true;
        }
    };
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/modules/admin/pages/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.scss */ "./src/app/modules/admin/pages/noticias/noticias.component.scss")],
            providers: [_core_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]]
        }),
        __metadata("design:paramtypes", [_core_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module.js.map