(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ayuda-ayuda-module"],{

/***/ "./src/app/ayuda/ayuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ayuda/ayuda.module.ts ***!
  \***************************************/
/*! exports provided: AyudaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaPageModule", function() { return AyudaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ayuda_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ayuda.page */ "./src/app/ayuda/ayuda.page.ts");
/* harmony import */ var _modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modulos/com/comun.module */ "./src/app/modulos/com/comun.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AyudaPageModule = /** @class */ (function () {
    function AyudaPageModule() {
    }
    AyudaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _ayuda_page__WEBPACK_IMPORTED_MODULE_5__["AyudaPage"]
                    }
                ])
            ],
            exports: [_modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"]],
            declarations: [_ayuda_page__WEBPACK_IMPORTED_MODULE_5__["AyudaPage"]]
        })
    ], AyudaPageModule);
    return AyudaPageModule;
}());



/***/ }),

/***/ "./src/app/ayuda/ayuda.page.html":
/*!***************************************!*\
  !*** ./src/app/ayuda/ayuda.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"navegar('/app/home')\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      MANUALES\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"loading == true\">\r\n    <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngIf=\"cargaExitosa == false\">\r\n    <p style=\"color:#888;padding:25px\">\r\n      No fue posible cargar los manuales.\r\n      <a (click)=\"cargarManuales()\">Reintentar</a>\r\n    </p>\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"cargaExitosa == true\">\r\n    <ion-item button *ngFor=\"let man of manuales;\" (click)=\"abrir(man)\">\r\n      <ion-icon slot=\"start\" [name]=\"man.tipo == 'mp4' || man.tipo == 'webm' ? 'videocam' : 'book'\"></ion-icon>\r\n      <div style=\"width: 100%;font-size: 14px;\">\r\n        <h4>{{man.nombre}}</h4>\r\n        <p>{{man.descripcion}}</p>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<div class=\"modal\" *ngIf=\"rutaVideo != null\">\r\n  <div class=\"content\">\r\n    <video controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\" class=\"videoPlayer\" controlsList=\"nodownload\">\r\n      <source [src]=\"rutaVideo | safeBypass:'resourceUrl'\" type=\"video/mp4\" />\r\n    </video>\r\n  </div>\r\n</div>\r\n\r\n<ion-footer color=\"light\" *ngIf=\"rutaVideo == null\">\r\n  <ion-item button (click)=\"actualizar()\" *ngIf=\"versionDisponible != version\">\r\n    <ion-icon slot=\"start\" name=\"arrow-round-up\" color=\"primary\"></ion-icon>\r\n    <div style=\"width: 100%;font-size: 14px;\">\r\n      <p style=\"float: left;color:#3ba2dc\">Versión {{versionDisponible}} disponible</p>\r\n      <p style=\"float: right;color:#aaa;\">v{{version}}</p>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"versionDisponible == version\">\r\n    <div style=\"width: 100%;font-size: 14px;\">\r\n      <p style=\"float: right;color:#aaa;\">v{{version}}</p>\r\n    </div>\r\n  </ion-item>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/ayuda/ayuda.page.scss":
/*!***************************************!*\
  !*** ./src/app/ayuda/ayuda.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoPlayer {\n  width: 100%;\n  height: 100%; }\n\n.modal {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #333333AA; }\n\n.modal .content {\n  background-color: transparent;\n  width: 90%;\n  height: calc(100% - 80px);\n  margin-top: 70px;\n  margin-left: 5%;\n  margin-bottom: 10px;\n  margin-right: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXl1ZGEvQzpcXFVzZXJzXFxERUxMXFxEb3dubG9hZHNcXG9yaWdpbmFsXFxhcHBsZW9uYXJkb1xcYXBwL3NyY1xcYXBwXFxheXVkYVxcYXl1ZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXl1ZGEvYXl1ZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvUGxheWVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzQUE7XHJcbn1cclxuXHJcbi5tb2RhbCAuY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ayuda/ayuda.page.ts":
/*!*************************************!*\
  !*** ./src/app/ayuda/ayuda.page.ts ***!
  \*************************************/
/*! exports provided: AyudaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaPage", function() { return AyudaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modulos_com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modulos/com/services/sesion.service */ "./src/app/modulos/com/services/sesion.service.ts");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _modulos_com_services_manual_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modulos/com/services/manual.service */ "./src/app/modulos/com/services/manual.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _modulos_com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modulos/com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _modulos_com_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modulos/com/services/auth.service */ "./src/app/modulos/com/services/auth.service.ts");
/* harmony import */ var _modulos_com_services_offline_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modulos/com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var AyudaPage = /** @class */ (function () {
    function AyudaPage(offlineService, authService, msgService, file, fileOpener, loadingController, sessionService, router, manualService, market) {
        var _this = this;
        this.offlineService = offlineService;
        this.authService = authService;
        this.msgService = msgService;
        this.file = file;
        this.fileOpener = fileOpener;
        this.loadingController = loadingController;
        this.sessionService = sessionService;
        this.router = router;
        this.manualService = manualService;
        this.market = market;
        this.authService.consultarUpdateDisponible()
            .then(function (resp) {
            _this.version = resp['versionActual'];
            _this.versionDisponible = resp['versionDisponible'];
        });
        this.cargarManuales();
    }
    AyudaPage.prototype.cargarManuales = function () {
        var _this = this;
        this.loading = true;
        this.cargaExitosa = null;
        this.offlineService.queryManualesPorUsuario()
            .then(function (resp) {
            _this.manuales = resp.data;
            _this.loading = false;
            _this.cargaExitosa = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.cargaExitosa = false;
        });
    };
    AyudaPage.prototype.navegar = function (url) {
        if (this.rutaVideo == null) {
            this.router.navigate([url]);
        }
        else {
            this.rutaVideo = null;
        }
    };
    AyudaPage.prototype.abrir = function (man) {
        var _this = this;
        this.rutaVideo = null;
        var workingPath = this.file.dataDirectory;
        var fileName = man.id + "_" + man.codigo + "." + man.tipo;
        var loading = this.showLoading('Accediendo al manual...');
        var codManAnt = localStorage.getItem('man_' + man.id);
        if (man.codigo != codManAnt) {
            var oldFileName = man.id + "_" + codManAnt + "." + man.tipo;
            this.file.removeFile(workingPath, oldFileName)
                .then(function () {
                _this.descargarManual(man, workingPath, fileName, loading);
            })
                .catch(function (err) {
                _this.descargarManual(man, workingPath, fileName, loading);
            });
        }
        else {
            this.file.checkFile(workingPath, fileName)
                .then(function (exist) {
                return _this.file.resolveDirectoryUrl(workingPath);
            })
                .then(function (dirEntry) {
                return _this.file.getFile(dirEntry, fileName, null);
            })
                .then(function (fileEntry) {
                return fileEntry.file(function (fp) {
                    loading.then(function (loadPop) {
                        loadPop.dismiss();
                        _this.openFile(man, fileEntry, fp.type);
                    });
                });
            })
                .catch(function (err) {
                _this.descargarManual(man, workingPath, fileName, loading);
            });
        }
    };
    AyudaPage.prototype.descargarManual = function (man, workingPath, fileName, loading) {
        var _this = this;
        this.manualService.descargar(man)
            .then(function (resp) {
            var blob = new Blob([resp]);
            return _this.file.writeFile(workingPath, fileName, blob, { replace: true });
        })
            .then(function (fileEntry) {
            return fileEntry.file(function (file) {
                loading.then(function (loadPop) {
                    loadPop.dismiss();
                    localStorage.setItem('man_' + man.id, man.codigo);
                    _this.openFile(man, fileEntry, file.type);
                });
            });
        })
            .catch(function (err) {
            loading.then(function (loadPop) { return loadPop.dismiss(); });
        });
    };
    AyudaPage.prototype.openFile = function (man, fileEntry, type) {
        var _this = this;
        if (man.tipo == 'mp4' || man.tipo == 'webm') {
            this.rutaVideo = window.Ionic.WebView.convertFileSrc(fileEntry.toURL());
        }
        else {
            this.fileOpener.open(fileEntry.toURL(), type).catch(function (err) { return _this.msgService.showMessage({
                tipoMensaje: 'info', mensaje: 'No ha sido posible visualizar el manual',
                detalle: "No existe una aplicacion para abrir " + fileEntry.name + "."
            }); });
        }
    };
    AyudaPage.prototype.showLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            translucent: true,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    AyudaPage.prototype.actualizar = function () {
        var so = localStorage.getItem('plataforma');
        if (so == 'android') {
            this.market.open('co.sigess.app');
        }
        else if (so == 'ios') {
            this.market.open('1473016574');
        }
        else {
            alert("Plataforma no detectada");
        }
    };
    AyudaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-ayuda',
            template: __webpack_require__(/*! ./ayuda.page.html */ "./src/app/ayuda/ayuda.page.html"),
            providers: [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__["Market"], _modulos_com_services_manual_service__WEBPACK_IMPORTED_MODULE_4__["ManualService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"]],
            styles: [__webpack_require__(/*! ./ayuda.page.scss */ "./src/app/ayuda/ayuda.page.scss")]
        }),
        __metadata("design:paramtypes", [_modulos_com_services_offline_service__WEBPACK_IMPORTED_MODULE_10__["OfflineService"],
            _modulos_com_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _modulos_com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_8__["MensajeUsuarioService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _modulos_com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modulos_com_services_manual_service__WEBPACK_IMPORTED_MODULE_4__["ManualService"],
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__["Market"]])
    ], AyudaPage);
    return AyudaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ayuda-ayuda-module.js.map