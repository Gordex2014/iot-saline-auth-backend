(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/protected/routes/protected.routes.ts":
/*!******************************************************!*\
  !*** ./src/app/protected/routes/protected.routes.ts ***!
  \******************************************************/
/*! exports provided: dashboardRoutes, adminsRoutes, doctorsRoutes, patientsRoutes, roomsRoutes, bedsRoutes, devicesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminsRoutes", function() { return adminsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doctorsRoutes", function() { return doctorsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsRoutes", function() { return patientsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomsRoutes", function() { return roomsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bedsRoutes", function() { return bedsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicesRoutes", function() { return devicesRoutes; });
const dashboardRoutes = {
    main: '/home/dashboard',
};
const adminsRoutes = {
    main: '/home/admins',
    registration: '/home/admins/register',
    viewAll: '/home/admins/view-all-admins',
};
const doctorsRoutes = {
    main: '/home/doctors',
    registration: '/home/doctors/register',
    viewAll: '/home/doctors/view-all-doctors',
};
const patientsRoutes = {
    main: '/home/patients',
    registration: '/home/patients/register',
    viewAll: '/home/patients/view-all-patients',
    addRecords: '/home/patients/add-patients-records',
    editPatientBase: '/home/patients/edit',
    addSinglePatientRecordBase: '/home/patients/add-patient-record',
    editSinglePatientRecordBase: '/home/patients/edit-patient-record',
    viewSinglePatientRecordBase: '/home/patients/view-patient-record',
    viewPatientHistoryBase: '/home/patients/patient-history',
};
const roomsRoutes = {
    main: '/home/rooms',
    registration: '/home/rooms/register',
    inspect: '/home/rooms/view-all-rooms',
};
const bedsRoutes = {
    main: '/home/beds',
    registration: '/home/beds/register',
    inspect: '/home/beds/view-all-beds',
};
const devicesRoutes = {
    main: '/home/devices',
    registration: '/home/devices/register',
    inspect: '/home/devices/view-all-devices',
};


/***/ }),

/***/ "./src/app/protected/services/token-header.service.ts":
/*!************************************************************!*\
  !*** ./src/app/protected/services/token-header.service.ts ***!
  \************************************************************/
/*! exports provided: TokenHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenHeaderService", function() { return TokenHeaderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class TokenHeaderService {
    constructor() { }
    get xTokenHeader() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'x-token': this.accessToken,
        });
    }
    get accessToken() {
        return localStorage.getItem('token') || '';
    }
}
TokenHeaderService.ɵfac = function TokenHeaderService_Factory(t) { return new (t || TokenHeaderService)(); };
TokenHeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenHeaderService, factory: TokenHeaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenHeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/protected/services/users-requests.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/protected/services/users-requests.service.ts ***!
  \**************************************************************/
/*! exports provided: UsersRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRequestsService", function() { return UsersRequestsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-header.service */ "./src/app/protected/services/token-header.service.ts");







class UsersRequestsService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    listDoctors(filter) {
        let url = this.baseUrl + '/users/doctors';
        if (filter)
            url += `?filter=${filter}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    listAdmins(filter) {
        let url = this.baseUrl + '/users/admins';
        if (filter)
            url += `?filter=${filter}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    getDoctorById(id) {
        const url = this.baseUrl + `/users/doctors/${id}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    getAdminById(id) {
        const url = this.baseUrl + `/users/admins/${id}`;
        return this.http.get(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    createDoctor(newDoctor) {
        const url = this.baseUrl + '/users';
        const newDoctorData = Object.assign({ firstName: newDoctor.firstName, lastName: newDoctor.lastName, email: newDoctor.email, mobileNumber: newDoctor.mobileNumber, username: newDoctor.username, password: newDoctor.password, roles: ['USER_DOCTOR_ROLE'] }, (newDoctor.imageURI && { imageURI: newDoctor.imageURI }));
        return this.http.post(url, newDoctorData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    createAdmin(newAdmin) {
        const url = this.baseUrl + '/users';
        const newAdminData = Object.assign({ firstName: newAdmin.firstName, lastName: newAdmin.lastName, email: newAdmin.email, mobileNumber: newAdmin.mobileNumber, username: newAdmin.username, password: newAdmin.password, roles: ['USER_ADMIN_ROLE'] }, (newAdmin.imageURI && { imageURI: newAdmin.imageURI }));
        return this.http.post(url, newAdminData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    modifyUser(user) {
        const url = this.baseUrl + `/users/${user.id}`;
        const userModifiedData = Object.assign(Object.assign({ firstName: user.firstName, lastName: user.lastName, email: user.email, mobileNumber: user.mobileNumber, username: user.username }, (user.password && { password: user.password })), (user.imageURI && { imageURI: user.imageURI }));
        return this.http.put(url, userModifiedData, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    deleteDoctor(doctorId) {
        const url = this.baseUrl + `/users/doctors/${doctorId}`;
        return this.http.delete(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
    deleteAdmin(adminId) {
        const url = this.baseUrl + `/users/admins/${adminId}`;
        return this.http.delete(url, {
            headers: this.tokenService.xTokenHeader,
        });
    }
}
UsersRequestsService.ɵfac = function UsersRequestsService_Factory(t) { return new (t || UsersRequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_header_service__WEBPACK_IMPORTED_MODULE_3__["TokenHeaderService"])); };
UsersRequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersRequestsService, factory: UsersRequestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersRequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _token_header_service__WEBPACK_IMPORTED_MODULE_3__["TokenHeaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/toastr.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/toastr.service.ts ***!
  \***************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




class ToastrService {
    constructor(nbToastrService) {
        this.nbToastrService = nbToastrService;
    }
    errorToastr(errorMessage) {
        this.nbToastrService.show(errorMessage, 'Error', {
            status: 'danger',
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT,
            duration: 6000,
            hasIcon: true,
        });
    }
    successToastr(toastrTitle, successMessage) {
        this.nbToastrService.show(successMessage, toastrTitle, {
            status: 'success',
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT,
            duration: 6000,
            hasIcon: true,
        });
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map