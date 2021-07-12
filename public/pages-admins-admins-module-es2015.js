(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admins-admins-module"],{

/***/ "./src/app/protected/pages/admins/admin-creation/admin-creation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/protected/pages/admins/admin-creation/admin-creation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCreationComponent", function() { return AdminCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/services/users-requests.service */ "./src/app/protected/services/users-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/user-form/user-form.component */ "./src/app/protected/components/user-form/user-form.component.ts");










class AdminCreationComponent {
    constructor(usersRequests, toastrService, router) {
        this.usersRequests = usersRequests;
        this.toastrService = toastrService;
        this.router = router;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__["adminsRoutes"].viewAll;
    }
    ngOnInit() { }
    onFormSubmission(adminToCreate) {
        this.usersRequests.createAdmin(adminToCreate).subscribe(({ body }) => {
            this.toastrService.successToastr('Administrador creado', `Administrador ${body.firstName} ${body.lastName} creado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_4__["adminsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
AdminCreationComponent.ɵfac = function AdminCreationComponent_Factory(t) { return new (t || AdminCreationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__["UsersRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminCreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminCreationComponent, selectors: [["ngx-admin-creation"]], decls: 1, vars: 1, consts: [["formTitle", "Nuevo administrador", 3, "redirectOnCancelRoute", "userCreation"]], template: function AdminCreationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-user-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userCreation", function AdminCreationComponent_Template_ngx_user_form_userCreation_0_listener($event) { return ctx.onFormSubmission($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("redirectOnCancelRoute", ctx.redirectOnCancelRoute);
    } }, directives: [_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__["UserFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9hZG1pbnMvYWRtaW4tY3JlYXRpb24vYWRtaW4tY3JlYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCreationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-admin-creation',
                templateUrl: './admin-creation.component.html',
                styleUrls: ['./admin-creation.component.scss'],
            }]
    }], function () { return [{ type: app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__["UsersRequestsService"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/admins/admin-inspection/admin-inspection.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/protected/pages/admins/admin-inspection/admin-inspection.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AdminInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInspectionComponent", function() { return AdminInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/services/users-requests.service */ "./src/app/protected/services/users-requests.service.ts");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user-form/user-form.component */ "./src/app/protected/components/user-form/user-form.component.ts");












function AdminInspectionComponent_ngx_user_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-user-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userCreation", function AdminInspectionComponent_ngx_user_form_0_Template_ngx_user_form_userCreation_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onFormSubmission($event); })("userDeletion", function AdminInspectionComponent_ngx_user_form_0_Template_ngx_user_form_userDeletion_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onAdminDeletion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passwordRequired", false)("user", ctx_r0.admin)("redirectOnCancelRoute", ctx_r0.redirectOnCancelRoute);
} }
function AdminInspectionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cargando usuario... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminInspectionComponent {
    constructor(activatedRoute, router, usersRequestsService, toastrService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersRequestsService = usersRequestsService;
        this.toastrService = toastrService;
        this.redirectOnCancelRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["adminsRoutes"].viewAll;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ id }) => this.usersRequestsService.getAdminById(id)))
            .subscribe((response) => {
            this.admin = response.body;
        }, (error) => {
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["adminsRoutes"].viewAll]);
        });
    }
    onFormSubmission(adminToUpdate) {
        this.usersRequestsService.modifyUser(adminToUpdate).subscribe((response) => {
            this.toastrService.successToastr('Administrador modificado', `Administrador modificado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["adminsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
    onAdminDeletion(id) {
        this.usersRequestsService.deleteAdmin(id).subscribe((response) => {
            this.toastrService.successToastr('Administrador eliminado', `Administrador eliminado exitosamente`);
            this.router.navigate([app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_2__["adminsRoutes"].viewAll]);
        }, (error) => {
            this.toastrService.errorToastr(error.error.error);
        });
    }
}
AdminInspectionComponent.ɵfac = function AdminInspectionComponent_Factory(t) { return new (t || AdminInspectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__["UsersRequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AdminInspectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminInspectionComponent, selectors: [["ngx-admin-inspection"]], decls: 3, vars: 2, consts: [["formTitle", "Editar administrador", "confirmationButtonMessage", "Editar", 3, "passwordRequired", "user", "redirectOnCancelRoute", "userCreation", "userDeletion", 4, "ngIf", "ngIfElse"], ["loaderDiv", ""], ["formTitle", "Editar administrador", "confirmationButtonMessage", "Editar", 3, "passwordRequired", "user", "redirectOnCancelRoute", "userCreation", "userDeletion"], ["nbSpinner", "true", "nbSpinnerSize", "large", "nbSpinnerStatus", "primary"]], template: function AdminInspectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminInspectionComponent_ngx_user_form_0_Template, 1, 3, "ngx-user-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminInspectionComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9hZG1pbnMvYWRtaW4taW5zcGVjdGlvbi9hZG1pbi1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminInspectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-admin-inspection',
                templateUrl: './admin-inspection.component.html',
                styleUrls: ['./admin-inspection.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_3__["UsersRequestsService"] }, { type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/admins/admins-list/admins-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/protected/pages/admins/admins-list/admins-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsListComponent", function() { return AdminsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/protected/services/users-requests.service */ "./src/app/protected/services/users-requests.service.ts");
/* harmony import */ var app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/protected/routes/protected.routes */ "./src/app/protected/routes/protected.routes.ts");
/* harmony import */ var _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/filter-bar/filter-bar.component */ "./src/app/protected/components/filter-bar/filter-bar.component.ts");
/* harmony import */ var _components_users_cards_users_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/users-cards/users-cards.component */ "./src/app/protected/components/users-cards/users-cards.component.ts");









class AdminsListComponent {
    constructor(toasterService, userRequests) {
        this.toasterService = toasterService;
        this.userRequests = userRequests;
        this.adminsBaseRoute = app_protected_routes_protected_routes__WEBPACK_IMPORTED_MODULE_3__["adminsRoutes"].main;
    }
    ngOnInit() {
        this.userRequests.listAdmins().subscribe((response) => {
            this.adminsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr(error.error.error);
        });
    }
    onNameSearch(queryParam) {
        this.userRequests.listAdmins(queryParam).subscribe((response) => {
            this.adminsList = response.body;
        }, (error) => {
            this.toasterService.errorToastr('Búsqueda inválida');
        });
    }
}
AdminsListComponent.ɵfac = function AdminsListComponent_Factory(t) { return new (t || AdminsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__["UsersRequestsService"])); };
AdminsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminsListComponent, selectors: [["ngx-admins-list"]], decls: 6, vars: 2, consts: [[1, "row"], [1, "offset-lg-1", "col-lg-10"], [3, "queryParam"], ["cardTitle", "Lista de administradores", 3, "baseRoute", "users"]], template: function AdminsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-filter-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("queryParam", function AdminsListComponent_Template_ngx_filter_bar_queryParam_2_listener($event) { return ctx.onNameSearch($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseRoute", ctx.adminsBaseRoute)("users", ctx.adminsList);
    } }, directives: [_components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_4__["FilterBarComponent"], _components_users_cards_users_cards_component__WEBPACK_IMPORTED_MODULE_5__["UsersCardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3RlY3RlZC9wYWdlcy9hZG1pbnMvYWRtaW5zLWxpc3QvYWRtaW5zLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-admins-list',
                templateUrl: './admins-list.component.html',
                styleUrls: ['./admins-list.component.scss'],
            }]
    }], function () { return [{ type: app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }, { type: app_protected_services_users_requests_service__WEBPACK_IMPORTED_MODULE_2__["UsersRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/pages/admins/admins-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/protected/pages/admins/admins-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsRoutingModule", function() { return AdminsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_creation_admin_creation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-creation/admin-creation.component */ "./src/app/protected/pages/admins/admin-creation/admin-creation.component.ts");
/* harmony import */ var _admin_inspection_admin_inspection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-inspection/admin-inspection.component */ "./src/app/protected/pages/admins/admin-inspection/admin-inspection.component.ts");
/* harmony import */ var _admins_list_admins_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admins-list/admins-list.component */ "./src/app/protected/pages/admins/admins-list/admins-list.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                component: _admin_creation_admin_creation_component__WEBPACK_IMPORTED_MODULE_2__["AdminCreationComponent"],
            },
            {
                path: 'view-all-admins',
                component: _admins_list_admins_list_component__WEBPACK_IMPORTED_MODULE_4__["AdminsListComponent"],
            },
            {
                path: ':id',
                component: _admin_inspection_admin_inspection_component__WEBPACK_IMPORTED_MODULE_3__["AdminInspectionComponent"],
            },
            {
                path: '**',
                redirectTo: 'view-all-admins',
            },
        ],
    },
];
class AdminsRoutingModule {
}
AdminsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminsRoutingModule });
AdminsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminsRoutingModule_Factory(t) { return new (t || AdminsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/protected/pages/admins/admins.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/protected/pages/admins/admins.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsModule", function() { return AdminsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admins_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admins-routing.module */ "./src/app/protected/pages/admins/admins-routing.module.ts");
/* harmony import */ var _admin_creation_admin_creation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-creation/admin-creation.component */ "./src/app/protected/pages/admins/admin-creation/admin-creation.component.ts");
/* harmony import */ var app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/protected/protected.module */ "./src/app/protected/protected.module.ts");
/* harmony import */ var _admins_list_admins_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admins-list/admins-list.component */ "./src/app/protected/pages/admins/admins-list/admins-list.component.ts");
/* harmony import */ var _admin_inspection_admin_inspection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-inspection/admin-inspection.component */ "./src/app/protected/pages/admins/admin-inspection/admin-inspection.component.ts");








class AdminsModule {
}
AdminsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminsModule });
AdminsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminsModule_Factory(t) { return new (t || AdminsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admins_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminsRoutingModule"],
            app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__["ProtectedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminsModule, { declarations: [_admin_creation_admin_creation_component__WEBPACK_IMPORTED_MODULE_3__["AdminCreationComponent"], _admins_list_admins_list_component__WEBPACK_IMPORTED_MODULE_5__["AdminsListComponent"], _admin_inspection_admin_inspection_component__WEBPACK_IMPORTED_MODULE_6__["AdminInspectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admins_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminsRoutingModule"],
        app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__["ProtectedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_creation_admin_creation_component__WEBPACK_IMPORTED_MODULE_3__["AdminCreationComponent"], _admins_list_admins_list_component__WEBPACK_IMPORTED_MODULE_5__["AdminsListComponent"], _admin_inspection_admin_inspection_component__WEBPACK_IMPORTED_MODULE_6__["AdminInspectionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admins_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminsRoutingModule"],
                    app_protected_protected_module__WEBPACK_IMPORTED_MODULE_4__["ProtectedModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admins-admins-module-es2015.js.map