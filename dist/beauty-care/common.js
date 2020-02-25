(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/services/cadastro.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/cadastro.service.ts ***!
  \***************************************************/
/*! exports provided: CadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroService", function() { return CadastroService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.service */ "./src/app/core/services/utilities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroService = /** @class */ (function () {
    function CadastroService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
    }
    CadastroService.prototype.getCategorias = function () {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/empresa/categorias', { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService.prototype.getPaises = function () {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/empresa/paises', { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService.prototype.register = function (params) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/empresa/registro', params, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService.prototype.updateCompanyData = function (params) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/empresa/update', params, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService.prototype.admUpdateCompanyData = function (params) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/empresa/admUpdate', params, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService.prototype.updateProfile = function (params) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/perfil/update', params, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService.prototype.upload = function (params) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/empresa/upload', params, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.utilitiesService.handleError));
    };
    CadastroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]])
    ], CadastroService);
    return CadastroService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map