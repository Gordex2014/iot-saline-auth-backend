(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doctors-doctors-module"],{

/***/ "./src/app/protected/pages/doctors/doctor-creation/doctor-creation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/protected/pages/doctors/doctor-creation/doctor-creation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DoctorCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorCreationComponent", function() { return DoctorCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/users-requests.service */ "./src/app/protected/services/users-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/user-form/user-form.component */ "./src/app/protected/components/user-form/user-form.component.ts");










class DoctorCreationComponent {
    constructor(usersRequests, toastrService, router) {
        this.usersRequests = usersRequests;
        this.toastrService = toastrService;
        this.router = router;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["doctorsRoutes"].viewAll;
    }
    ngOnInit() { }
    onFormSubmission(doctorToCreate) {
        this.usersRequests.createDoctor(doctorToCreate).subscribe(({ body }) => {
            this.toastrService.successToastr('Médico creado', `Médico ${body.firstName} ${body.lastName} creado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["doctorsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
DoctorCreationComponent.ɵfac = function DoctorCreationComponent_Factory(t) { return new (t || DoctorCreationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__["UsersRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DoctorCreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorCreationComponent, selectors: [["ngx-doctor-creation"]], decls: 1, vars: 1, consts: [["formTitle", "Nuevo m\u00E9dico", 3, "redirectOnCancelRoute", "userCreation"]], template: function DoctorCreationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-user-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userCreation", function DoctorCreationComponent_Template_ngx_user_form_userCreation_0_listener($event) { return ctx.onFormSubmission($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redirectOnCancelRoute", ctx.redirectOnCancelRoute);
    } }, directives: [_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__["UserFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9kb2N0b3JzL2RvY3Rvci1jcmVhdGlvbi9kb2N0b3ItY3JlYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorCreationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-doctor-creation',
                templateUrl: './doctor-creation.component.html',
                styleUrls: ['./doctor-creation.component.scss'],
            }]
    }], function () { return [{ type: app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__["UsersRequestsService"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/doctors/doctor-inspection/doctor-inspection.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/protected/pages/doctors/doctor-inspection/doctor-inspection.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DoctorInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorInspectionComponent", function() { return DoctorInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/users-requests.service */ "./src/app/protected/services/users-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user-form/user-form.component */ "./src/app/protected/components/user-form/user-form.component.ts");












function DoctorInspectionComponent_ngx_user_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-user-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userCreation", function DoctorInspectionComponent_ngx_user_form_0_Template_ngx_user_form_userCreation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onFormSubmission($event); })("userDeletion", function DoctorInspectionComponent_ngx_user_form_0_Template_ngx_user_form_userDeletion_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDoctorDeletion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passwordRequired", false)("user", ctx_r0.doctor)("redirectOnCancelRoute", ctx_r0.redirectOnCancelRoute);
} }
function DoctorInspectionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cargando usuario... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DoctorInspectionComponent {
    constructor(activatedRoute, router, usersRequestsService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersRequestsService = usersRequestsService;
        this.toastrService = toastrService;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["doctorsRoutes"].viewAll;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ id }) => this.usersRequestsService.getDoctorById(id)))
            .subscribe((response) => {
            this.doctor = response.body;
        }, (error) => {
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["doctorsRoutes"].viewAll]);
        });
    }
    onFormSubmission(doctorToUpdate) {
        this.usersRequestsService.modifyUser(doctorToUpdate).subscribe((response) => {
            this.toastrService.successToastr('Médico modificado', `Médico modificado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["doctorsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr('Acción no permitida');
        });
    }
    onDoctorDeletion(id) {
        this.usersRequestsService.deleteDoctor(id).subscribe((response) => {
            this.toastrService.successToastr('Médico eliminado', `Médico eliminado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["doctorsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr('Acción no permitida');
        });
    }
}
DoctorInspectionComponent.ɵfac = function DoctorInspectionComponent_Factory(t) { return new (t || DoctorInspectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__["UsersRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
DoctorInspectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorInspectionComponent, selectors: [["ngx-doctor-inspection"]], decls: 3, vars: 2, consts: [["formTitle", "Editar m\u00E9dico", "confirmationButtonMessage", "Editar", 3, "passwordRequired", "user", "redirectOnCancelRoute", "userCreation", "userDeletion", 4, "ngIf", "ngIfElse"], ["loaderDiv", ""], ["formTitle", "Editar m\u00E9dico", "confirmationButtonMessage", "Editar", 3, "passwordRequired", "user", "redirectOnCancelRoute", "userCreation", "userDeletion"], ["nbSpinner", "true", "nbSpinnerSize", "large", "nbSpinnerStatus", "primary"]], template: function DoctorInspectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DoctorInspectionComponent_ngx_user_form_0_Template, 1, 3, "ngx-user-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorInspectionComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctor)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9kb2N0b3JzL2RvY3Rvci1pbnNwZWN0aW9uL2RvY3Rvci1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorInspectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-doctor-inspection',
                templateUrl: './doctor-inspection.component.html',
                styleUrls: ['./doctor-inspection.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__["UsersRequestsService"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/doctors/doctors-list/doctors-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/protected/pages/doctors/doctors-list/doctors-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: DoctorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsListComponent", function() { return DoctorsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/services/users-requests.service */ "./src/app/protected/services/users-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/filter-bar/filter-bar.component */ "./src/app/protected/components/filter-bar/filter-bar.component.ts");
/* harmony import */ var _components_users_cards_users_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/users-cards/users-cards.component */ "./src/app/protected/components/users-cards/users-cards.component.ts");









class DoctorsListComponent {
    constructor(toasterService, userRequests) {
        this.toasterService = toasterService;
        this.userRequests = userRequests;
        this.doctorsBaseRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_1__["doctorsRoutes"].main;
    }
    ngOnInit() {
        this.userRequests.listDoctors().subscribe((response) => {
            this.doctorsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr(error.error.error);
        });
    }
    onNameSearch(queryParam) {
        this.userRequests.listDoctors(queryParam).subscribe((response) => {
            this.doctorsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr('Búsqueda inválida');
        });
    }
}
DoctorsListComponent.ɵfac = function DoctorsListComponent_Factory(t) { return new (t || DoctorsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__["UsersRequestsService"])); };
DoctorsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorsListComponent, selectors: [["ngx-doctors-list"]], decls: 6, vars: 2, consts: [[1, "row"], [1, "offset-lg-1", "col-lg-10"], [3, "queryParam"], ["cardTitle", "Lista de m\u00E9dicos", 3, "users", "baseRoute"]], template: function DoctorsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-filter-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("queryParam", function DoctorsListComponent_Template_ngx_filter_bar_queryParam_2_listener($event) { return ctx.onNameSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-users-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.doctorsList)("baseRoute", ctx.doctorsBaseRoute);
    } }, directives: [_components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__["FilterBarComponent"], _components_users_cards_users_cards_component__WEBPACK_IMPORTED_MODULE_5__["UsersCardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9kb2N0b3JzL2RvY3RvcnMtbGlzdC9kb2N0b3JzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-doctors-list',
                templateUrl: './doctors-list.component.html',
                styleUrls: ['./doctors-list.component.scss'],
            }]
    }], function () { return [{ type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__["UsersRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/doctors/doctors-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/protected/pages/doctors/doctors-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DoctorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsRoutingModule", function() { return DoctorsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctor_creation_doctor_creation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor-creation/doctor-creation.component */ "./src/app/protected/pages/doctors/doctor-creation/doctor-creation.component.ts");
/* harmony import */ var _doctor_inspection_doctor_inspection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-inspection/doctor-inspection.component */ "./src/app/protected/pages/doctors/doctor-inspection/doctor-inspection.component.ts");
/* harmony import */ var _doctors_list_doctors_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctors-list/doctors-list.component */ "./src/app/protected/pages/doctors/doctors-list/doctors-list.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                component: _doctor_creation_doctor_creation_component__WEBPACK_IMPORTED_MODULE_2__["DoctorCreationComponent"],
            },
            {
                path: 'view-all-doctors',
                component: _doctors_list_doctors_list_component__WEBPACK_IMPORTED_MODULE_4__["DoctorsListComponent"],
            },
            {
                path: ':id',
                component: _doctor_inspection_doctor_inspection_component__WEBPACK_IMPORTED_MODULE_3__["DoctorInspectionComponent"],
            },
            {
                path: '**',
                redirectTo: 'view-all-doctors',
            },
        ],
    },
];
class DoctorsRoutingModule {
}
DoctorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DoctorsRoutingModule });
DoctorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DoctorsRoutingModule_Factory(t) { return new (t || DoctorsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DoctorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/protected/pages/doctors/doctors.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/protected/pages/doctors/doctors.module.ts ***!
  \***********************************************************/
/*! exports provided: DoctorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsModule", function() { return DoctorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctors-routing.module */ "./src/app/protected/pages/doctors/doctors-routing.module.ts");
/* harmony import */ var app_protected_protected_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/protected.module */ "./src/app/protected/protected.module.ts");
/* harmony import */ var _doctor_creation_doctor_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor-creation/doctor-creation.component */ "./src/app/protected/pages/doctors/doctor-creation/doctor-creation.component.ts");
/* harmony import */ var _doctor_inspection_doctor_inspection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-inspection/doctor-inspection.component */ "./src/app/protected/pages/doctors/doctor-inspection/doctor-inspection.component.ts");
/* harmony import */ var _doctors_list_doctors_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctors-list/doctors-list.component */ "./src/app/protected/pages/doctors/doctors-list/doctors-list.component.ts");








class DoctorsModule {
}
DoctorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DoctorsModule });
DoctorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DoctorsModule_Factory(t) { return new (t || DoctorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorsRoutingModule"],
            app_protected_protected_module__WEBPACK_IMPORTED_MODULE_3__["ProtectedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DoctorsModule, { declarations: [_doctor_creation_doctor_creation_component__WEBPACK_IMPORTED_MODULE_4__["DoctorCreationComponent"], _doctor_inspection_doctor_inspection_component__WEBPACK_IMPORTED_MODULE_5__["DoctorInspectionComponent"], _doctors_list_doctors_list_component__WEBPACK_IMPORTED_MODULE_6__["DoctorsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorsRoutingModule"],
        app_protected_protected_module__WEBPACK_IMPORTED_MODULE_3__["ProtectedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_doctor_creation_doctor_creation_component__WEBPACK_IMPORTED_MODULE_4__["DoctorCreationComponent"], _doctor_inspection_doctor_inspection_component__WEBPACK_IMPORTED_MODULE_5__["DoctorInspectionComponent"], _doctors_list_doctors_list_component__WEBPACK_IMPORTED_MODULE_6__["DoctorsListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorsRoutingModule"],
                    app_protected_protected_module__WEBPACK_IMPORTED_MODULE_3__["ProtectedModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-doctors-doctors-module-es2015.js.map