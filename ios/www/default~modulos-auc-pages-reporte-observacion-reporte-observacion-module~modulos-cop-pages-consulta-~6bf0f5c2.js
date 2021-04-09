(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modulos-auc-pages-reporte-observacion-reporte-observacion-module~modulos-cop-pages-consulta-~6bf0f5c2"],{

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item (click)=\"openModal()\">\r\n  <ion-label position=\"stacked\">Ubicación*</ion-label>\r\n  <p style=\"width: 100%;margin-top: 16px;margin-bottom: 16px;\"  *ngIf=\"areasCargadas == true\">{{value?.nombre}}</p>\r\n\r\n  <div *ngIf=\"loading == true\">\r\n    <ion-spinner slot=\"end\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"areasCargadas == false\">\r\n    <p style=\"color:#888;\">\r\n      No fue posible cargar el listado\r\n      <a *ngIf=\"areasCargadas == false\" (click)=\"cargarAreas()\">Reintentar</a>\r\n    </p>\r\n  </div>\r\n</ion-item>\r\n\r\n<div id=\"modalNode\" class=\"modal\" [style.display]=\"visibleModal == true ? 'block':'none'\">\r\n  <div class=\"modal-header radio-top-bordes\">\r\n    <ion-searchbar class=\"radio-top-bordes\" placeholder=\"Buscar ubicación\" debounce=\"500\" (ionChange)=\"filtrar($event)\"></ion-searchbar>\r\n  </div>\r\n  <div class=\"modal-container\">\r\n    <sm-tree *ngIf=\"areasFiltradas == null\" [nodes]=\"areas\" field=\"areaList\" label=\"nombre\" [single]=\"true\"></sm-tree>\r\n    <sm-tree *ngIf=\"areasFiltradas != null\" [nodes]=\"areasFiltradas\" field=\"areaList\" label=\"nombre\" [single]=\"true\"></sm-tree>\r\n  </div>\r\n  <div class=\"modal-footer radio-bottom-bordes\">\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"aceptar()\">\r\n      Aceptar\r\n    </ion-button>\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"cancelar()\" color=\"medium\">\r\n      Cancelar\r\n    </ion-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #00000077;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000; }\n\n.modal-container {\n  position: absolute;\n  width: 90%;\n  height: calc(90% - 102px);\n  background-color: #fff;\n  overflow: auto;\n  left: 5%;\n  top: calc(5% + 56px);\n  margin: auto;\n  padding: 10px; }\n\n.modal-header {\n  background-color: #fff;\n  height: 56px;\n  width: 90%;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 100; }\n\n.radio-top-bordes {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n\n.radio-bottom-bordes {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n\n.modal-footer {\n  background-color: #fff;\n  height: 46px;\n  width: 90%;\n  position: absolute;\n  bottom: 0px;\n  z-index: 100;\n  border-top: solid thin #ccc;\n  bottom: 5%;\n  left: 5%; }\n\n.modal-footer ion-button {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy9hcmVhLXNlbGVjdG9yL0M6XFxVc2Vyc1xcREVMTFxcRG93bmxvYWRzXFxvcmlnaW5hbFxcYXBwbGVvbmFyZG9cXGFwcC9zcmNcXGFwcFxcbW9kdWxvc1xcY29tXFxjb21wb25lbnRzXFxhcmVhLXNlbGVjdG9yXFxhcmVhLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsUUFBUTtFQUNSLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUVaLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsUUFBUSxFQUFBOztBQUVaO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy9hcmVhLXNlbGVjdG9yL2FyZWEtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDc3O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoOTAlIC0gMTAycHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB0b3A6IGNhbGMoNSUgKyA1NnB4KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnJhZGlvLXRvcC1ib3JkZXN7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJhZGlvLWJvdHRvbS1ib3JkZXN7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA4cHggI2FhYTtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIHRoaW4gI2NjYztcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG4ubW9kYWwtZm9vdGVyIGlvbi1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AreaSelectorComponent, AreaSelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSelectorComponent", function() { return AreaSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSelectorModule", function() { return AreaSelectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _emp_entities_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../emp/entities/area */ "./src/app/modulos/emp/entities/area.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/modulos/com/components/tree/tree.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AreaSelectorComponent = /** @class */ (function () {
    function AreaSelectorComponent(offlineService) {
        this.offlineService = offlineService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function (_) { };
    }
    AreaSelectorComponent_1 = AreaSelectorComponent;
    AreaSelectorComponent.prototype.ngOnInit = function () {
        var modal = document.getElementById("modalNode");
        document.getElementsByTagName(this.appendTo)[0].appendChild(modal);
        this.cargarAreas();
    };
    Object.defineProperty(AreaSelectorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.propagateChange(this._value);
            }
        },
        enumerable: true,
        configurable: true
    });
    AreaSelectorComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    AreaSelectorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AreaSelectorComponent.prototype.registerOnTouched = function () { };
    /* ********************************************* */
    AreaSelectorComponent.prototype.cargarAreas = function () {
        var _this = this;
        this.loading = true;
        this.areasCargadas = null;
        this.offlineService.queryArea()
            .then(function (resp) {
            _this.areas = resp['data'];
            _this.loading = false;
            _this.areasCargadas = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.areasCargadas = false;
        });
    };
    AreaSelectorComponent.prototype.openModal = function () {
        if (this.disabled == true || this.areasCargadas == false || this.loading == true) {
            return;
        }
        this.areasFiltradas = null;
        this.visibleModal = true;
        if (this.value != null) {
            this.cargarValor(this.areas, this.value);
        }
    };
    AreaSelectorComponent.prototype.cargarValor = function (areas, areaSelect) {
        var _this = this;
        areas.forEach(function (area) {
            area['selected'] = (area.id == _this.value.id);
            if (area.areaList != null) {
                _this.cargarValor(area.areaList, areaSelect);
            }
        });
    };
    AreaSelectorComponent.prototype.cancelar = function () {
        this.visibleModal = false;
    };
    AreaSelectorComponent.prototype.aceptar = function () {
        var seleccion = [];
        if (this.areasFiltradas != null) {
            _utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('areaList', this.areasFiltradas, seleccion, ['nombre']);
        }
        else {
            _utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('areaList', this.areas, seleccion, ['nombre']);
        }
        this.value = seleccion[0];
        this.visibleModal = false;
        this.valueChange.emit(this.value);
    };
    AreaSelectorComponent.prototype.filtrar = function (event) {
        var valor = event.detail.value;
        if (valor != null && valor != "") {
            this.areasFiltradas = [];
            this.busquedaRecursiva(this.areas, valor, this.areasFiltradas);
        }
        else {
            this.areasFiltradas = null;
        }
    };
    AreaSelectorComponent.prototype.busquedaRecursiva = function (arbol, criterio, listado) {
        var _this = this;
        arbol.forEach(function (area) {
            if (area.nombre.toLowerCase().includes(criterio.toLowerCase())) {
                listado.push(area);
            }
            if (area.areaList != null) {
                _this.busquedaRecursiva(area.areaList, criterio, listado);
            }
        });
    };
    var AreaSelectorComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("ngModel"),
        __metadata("design:type", _emp_entities_area__WEBPACK_IMPORTED_MODULE_2__["Area"])
    ], AreaSelectorComponent.prototype, "_value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("ngModelChange"),
        __metadata("design:type", Object)
    ], AreaSelectorComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("appendTo"),
        __metadata("design:type", String)
    ], AreaSelectorComponent.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], AreaSelectorComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("areas"),
        __metadata("design:type", Array)
    ], AreaSelectorComponent.prototype, "areas", void 0);
    AreaSelectorComponent = AreaSelectorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-areaSelector',
            template: __webpack_require__(/*! ./area-selector.component.html */ "./src/app/modulos/com/components/area-selector/area-selector.component.html"),
            providers: [
                _services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"],
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AreaSelectorComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./area-selector.component.scss */ "./src/app/modulos/com/components/area-selector/area-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"]])
    ], AreaSelectorComponent);
    return AreaSelectorComponent;
}());

var AreaSelectorModule = /** @class */ (function () {
    function AreaSelectorModule() {
    }
    AreaSelectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"]],
            exports: [AreaSelectorComponent],
            declarations: [AreaSelectorComponent]
        })
    ], AreaSelectorModule);
    return AreaSelectorModule;
}());



/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-node [ngForOf]=\"nodes\" let-i=\"index\">\r\n  <ul>\r\n    <div style=\"display: flex;flex-direction: row;border-bottom: solid thin #ccc;align-items: center;\">\r\n      <div (click)=\"toggle(node)\" *ngIf=\"node[field] && node[field].length > 0\" [ngClass]=\"node['expanded'] ? 'li-icon li-expanded':'li-icon'\"></div>\r\n      <li (click)=\"toggle(node)\">{{node[label]}}</li>\r\n      <div [ngClass]=\"node['selected'] ? 'li-selectable li-selected' : 'li-selectable'\" (click)=\"toggleSelect(node)\">\r\n        <div [ngClass]=\"node['childTouched'] ? 'child-touch' : 'child-untouch'\" class=\"\"></div>\r\n      </div>\r\n    </div>\r\n    <sm-tree *ngIf=\"node[field]\" [nodes]=\"node[field]\" [field]=\"field\" [label]=\"label\" [ngClass]=\"node['expanded'] ? 'ul-expanded ul-init' : 'ul-unexpanded ul-init'\"\r\n      [parent]=\"node\" [single]=\"single\" (onClear)=\"clearSelect()\" [isRoot]=\"false\"></sm-tree>\r\n  </ul>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-init {\n  height: inherit;\n  display: block; }\n\nsm-tree {\n  width: 100%; }\n\nul {\n  padding-left: 15px;\n  list-style-type: none;\n  font-size: 13px; }\n\n.li-icon {\n  background: url(/assets/images/arrow-right.svg) no-repeat;\n  background-position-y: 17px;\n  width: 20px;\n  height: 50px;\n  background-position: center;\n  background-size: 8px;\n  margin-right: 5px; }\n\n.li-expanded {\n  transform: rotate(90deg); }\n\n.li-selectable {\n  width: 35px;\n  height: 30px;\n  border-radius: 50%;\n  border: solid thin #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.li-selected {\n  background: url(/assets/images/check.svg) no-repeat;\n  background-size: 10px;\n  background-position: center; }\n\nli {\n  cursor: pointer;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%; }\n\n.ul-unexpanded {\n  height: 0px;\n  display: none; }\n\n.child-touch {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #555;\n  display: block; }\n\n.child-untouch {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy90cmVlL0M6XFxVc2Vyc1xcREVMTFxcRG93bmxvYWRzXFxvcmlnaW5hbFxcYXBwbGVvbmFyZG9cXGFwcC9zcmNcXGFwcFxcbW9kdWxvc1xcY29tXFxjb21wb25lbnRzXFx0cmVlXFx0cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx5REFBMEQ7RUFDMUQsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtREFBbUQ7RUFDbkQscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBT2pCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL2NvbS9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bC1pbml0e1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbnNtLXRyZWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudWx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5saS1pY29ue1xyXG4gICAgYmFja2dyb3VuZDogIHVybCgvYXNzZXRzL2ltYWdlcy9hcnJvdy1yaWdodC5zdmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxpLWV4cGFuZGVke1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4ubGktc2VsZWN0YWJsZXtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0aGluICNjY2M7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGktc2VsZWN0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2hlY2suc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5saXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVsLXVuZXhwYW5kZWR7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51bC1leHBhbmRlZHtcclxuXHJcbn1cclxuXHJcbi5jaGlsZC10b3VjaHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG4uY2hpbGQtdW50b3VjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.ts ***!
  \***************************************************************/
/*! exports provided: TreeComponent, TreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        /**
         * Para saber cual es el nodo raiz se carga por defecto isRoot como true, y
         * en la plantilla, el componente hijo (tree) se marca con atributo isRoot = false
         */
        this.isRoot = true;
        /**
         * El evento permite notificar recursivamente al componente raiz en que momento
         * se debe realizar limpieza de los items seleccionados
         */
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._nodes != null) {
            this._nodes.forEach(function (node) {
                node['parent'] = _this._parent;
                //node['expanded'] = this.expanded === true;
            });
        }
    };
    TreeComponent.prototype.toggle = function (node) {
        node['expanded'] = !node['expanded'];
    };
    TreeComponent.prototype.toggleSelect = function (node) {
        if (node['selected'] == null) {
            node['selected'] = false;
        }
        if (this.single == true) {
            this.clearSelect();
        }
        node['selected'] = !node['selected'];
    };
    TreeComponent.prototype.clearSelect = function () {
        if (this.isRoot == true) {
            this.clearNodes(this._nodes);
        }
        this.onClear.emit();
    };
    TreeComponent.prototype.clearNodes = function (nodes) {
        var _this = this;
        nodes.forEach(function (node) {
            node['selected'] = false;
            if (node[_this.field] != null)
                _this.clearNodes(node[_this.field]);
        });
    };
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (nodes) {
            this._nodes = nodes;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("parent"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "_parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("nodes"),
        __metadata("design:type", Array)
    ], TreeComponent.prototype, "_nodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("field"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("label"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("expanded"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("single"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "single", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("isRoot"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "isRoot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onClear"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onClear", void 0);
    TreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/modulos/com/components/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/modulos/com/components/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());

var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [TreeComponent],
            declarations: [TreeComponent]
        })
    ], TreeModule);
    return TreeModule;
}());



/***/ }),

/***/ "./src/app/modulos/emp/entities/area.ts":
/*!**********************************************!*\
  !*** ./src/app/modulos/emp/entities/area.ts ***!
  \**********************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
var Area = /** @class */ (function () {
    function Area() {
    }
    return Area;
}());



/***/ })

}]);
//# sourceMappingURL=default~modulos-auc-pages-reporte-observacion-reporte-observacion-module~modulos-cop-pages-consulta-~6bf0f5c2.js.map