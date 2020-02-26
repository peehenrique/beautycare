(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mercado-mercado-module"],{

/***/ "./src/app/modules/mercado/mercado-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/mercado/mercado-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MercadoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadoRoutingModule", function() { return MercadoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_mercado_mercado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mercado/mercado.component */ "./src/app/modules/mercado/pages/mercado/mercado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pages_mercado_mercado_component__WEBPACK_IMPORTED_MODULE_2__["MercadoComponent"]
    }];
var MercadoRoutingModule = /** @class */ (function () {
    function MercadoRoutingModule() {
    }
    MercadoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MercadoRoutingModule);
    return MercadoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/mercado/mercado.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/mercado/mercado.module.ts ***!
  \***************************************************/
/*! exports provided: MercadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadoModule", function() { return MercadoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mercado_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mercado-routing.module */ "./src/app/modules/mercado/mercado-routing.module.ts");
/* harmony import */ var _pages_mercado_mercado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/mercado/mercado.component */ "./src/app/modules/mercado/pages/mercado/mercado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MercadoModule = /** @class */ (function () {
    function MercadoModule() {
    }
    MercadoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mercado_routing_module__WEBPACK_IMPORTED_MODULE_2__["MercadoRoutingModule"]
            ],
            declarations: [_pages_mercado_mercado_component__WEBPACK_IMPORTED_MODULE_3__["MercadoComponent"]]
        })
    ], MercadoModule);
    return MercadoModule;
}());



/***/ }),

/***/ "./src/app/modules/mercado/pages/mercado/mercado.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/mercado/pages/mercado/mercado.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white\">\r\n  <div class=\"row noticias\">\r\n    <div class=\"col-12 my-5\">\r\n      <h2>\r\n        Notícias do mercado\r\n      </h2>\r\n      <h3>Leia as útimas noícias exclusivas para você!</h3><a class=\"download-link\" #downloadLink></a>\r\n      <div class=\"mt-4\"><a href=\"https://www.dropbox.com/sh/v9wibfjentwgho0/AAAptJmblRp1VCcgP62AM6Ifa?dl=0\" target=\"_blank\">Clique aqui para visualizar as informações de Inteligência de Mercado.</a></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/mercado/pages/mercado/mercado.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/mercado/pages/mercado/mercado.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/mercado/pages/mercado/mercado.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/mercado/pages/mercado/mercado.component.ts ***!
  \********************************************************************/
/*! exports provided: MercadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadoComponent", function() { return MercadoComponent; });
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

var MercadoComponent = /** @class */ (function () {
    function MercadoComponent() {
    }
    MercadoComponent.prototype.ngOnInit = function () {
    };
    MercadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mercado',
            template: __webpack_require__(/*! ./mercado.component.html */ "./src/app/modules/mercado/pages/mercado/mercado.component.html"),
            styles: [__webpack_require__(/*! ./mercado.component.scss */ "./src/app/modules/mercado/pages/mercado/mercado.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MercadoComponent);
    return MercadoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-mercado-mercado-module.js.map