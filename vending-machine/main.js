(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-6.form-group{\r\n    margin-top: 10px;\r\n}\r\n\r\n.col-6.form-group input{\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1 class=\"col-12\">\n      Welcome to {{ title }}!\n    </h1>\n    <h3 class=\"col-12\">Please make your choise</h3>\n    <div *ngFor=\"let drink of listDrinks\" class=\"col-12\">\n      {{drink.drinkNumber}}. <strong>{{drink.name}}:</strong> {{drink.cost}} cents\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <form (ngSubmit)=\"onSubmit()\" class=\"col-6 form-group\">\n      <input type=\"number\" #input class=\"form-control\" required [(ngModel)]=\"model.amount\" name=\"amount\"\n        placeholder=\"Please put coins\" />\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.drinkNumber\" name=\"drinkNumber\"\n        placeholder=\"Please put number of drink\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!model.amount\">Submit</button>\n    </form>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n      <div class=\"alert alert-primary\" *ngIf=\"total\">Submitted: <strong>{{total}} Cents</strong></div>\n      <div class=\"alert alert-primary\" *ngIf=\"drinkName && !error\">Please get a drink: <strong>{{drinkName}}</strong></div>\n      <div class=\"alert alert-primary\" *ngIf=\"yourChange && !error\">Please get a change: <strong>{{yourChange}} Cents</strong></div>\n      <div class=\"alert alert-primary\" *ngIf=\"resultChangeArr.length\">\n        <div> You will get a change :</div>\n        <ul>\n          <li *ngFor=\"let coin of resultChangeArr\">with <strong>{{coin}} cents</strong> Coin</li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coins */ "./src/app/coins.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Vending machine';
        this.total = 0;
        this.error = '';
        this.yourChange = 0;
        this.resultChangeArr = [];
        this.firstMatch = false;
        this.model = new _coins__WEBPACK_IMPORTED_MODULE_1__["Coins"]('', '');
        this.listDrinks = [
            { name: 'Cola', cost: 150, drinkNumber: 1, exist: true },
            { name: 'Pepsi', cost: 120, drinkNumber: 2, exist: true },
            { name: 'Cold Tea', cost: 90, drinkNumber: 3, exist: true },
            { name: 'Cold Tea1', cost: 80, drinkNumber: 4, exist: true },
            { name: 'Coffee', cost: 190, drinkNumber: 5, exist: true },
            { name: 'Latte', cost: 170, drinkNumber: 6, exist: false }
        ];
        this.listCoinsInMachine = [10, 20, 50, 100, 200];
    }
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.resetValues();
        if (this.model.amount === 100 || this.model.amount === 200
            || this.model.amount === 10 || this.model.amount === 20 || this.model.amount === 50) {
            this.total = this.model.amount;
            this.model.amount = '';
            if (this.model.drinkNumber) {
                this.listDrinks.filter(function (drink) {
                    if (drink.drinkNumber === _this.model.drinkNumber) {
                        if (_this.total >= drink.cost && drink.exist) {
                            _this.drinkName = drink.name;
                            _this.yourChange = _this.total - drink.cost;
                        }
                        else if (_this.total < drink.cost) {
                            _this.error = 'Input is not enough';
                        }
                        else if (!drink.exist) {
                            _this.error = 'Drink is sold out';
                        }
                    }
                });
                if (this.yourChange) {
                    this.waysToReturnChange(this.listCoinsInMachine, this.listCoinsInMachine.length - 1, this.yourChange);
                }
            }
        }
        else {
            this.error = 'Not correct coin';
        }
    };
    AppComponent.prototype.resetValues = function () {
        this.firstMatch = false;
        this.resultChangeArr = [];
        this.error = '';
        this.yourChange = 0;
    };
    AppComponent.prototype.waysToReturnChange = function (denominations, numOfCoins, amount) {
        if (amount === 0) {
            this.firstMatch = true;
            return 1;
        }
        if (!this.firstMatch) {
            if (amount < 0) {
                return 0;
            }
            ;
            if (numOfCoins < 0 && amount > 0) {
                this.error = 'We don\'t have coins left!';
                return 0;
            }
            if (amount >= denominations.slice(numOfCoins)[0]) {
                this.resultChangeArr.push(denominations.slice(numOfCoins)[0]);
            }
            return this.waysToReturnChange(denominations, numOfCoins, amount - denominations[numOfCoins]) +
                this.waysToReturnChange(denominations, numOfCoins - 1, amount);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coins.ts":
/*!**************************!*\
  !*** ./src/app/coins.ts ***!
  \**************************/
/*! exports provided: Coins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coins", function() { return Coins; });
var Coins = /** @class */ (function () {
    function Coins(amount, drinkNumber) {
        this.amount = amount;
        this.drinkNumber = drinkNumber;
    }
    return Coins;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\olena.deordiieva\Documents\vending-machine\vending-machine\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map