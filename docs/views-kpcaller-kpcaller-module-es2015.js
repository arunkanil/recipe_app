(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-kpcaller-kpcaller-module"],{

/***/ "/oiM":
/*!***************************************************!*\
  !*** ./src/app/views/kpcaller/kpcaller.module.ts ***!
  \***************************************************/
/*! exports provided: KpCallerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpCallerModule", function() { return KpCallerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _caller_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caller_list.component */ "K6r/");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _kpcaller_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kpcaller-routing.module */ "0JAA");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customerdetail.component */ "N1zO");





// Dropdowns Component

// Buttons Routing

// Angular



let KpCallerModule = class KpCallerModule {
};
KpCallerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([]),
            _kpcaller_routing_module__WEBPACK_IMPORTED_MODULE_6__["KpCallerRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _caller_list_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
            _customerdetail_component__WEBPACK_IMPORTED_MODULE_9__["KPCustomerDetailComponent"]
        ]
    })
], KpCallerModule);



/***/ }),

/***/ "0JAA":
/*!***********************************************************!*\
  !*** ./src/app/views/kpcaller/kpcaller-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: KpCallerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpCallerRoutingModule", function() { return KpCallerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _caller_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caller_list.component */ "K6r/");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerdetail.component */ "N1zO");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/auth.guard */ "nl+3");






const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'kpcaller'
            },
            {
                path: 'verification',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _caller_list_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Profile'
                }
            },
            {
                path: 'assigned',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _caller_list_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Assigned List'
                }
            },
            {
                path: 'dnf',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _caller_list_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'DNF'
                }
            },
            {
                path: 'kp_customer_details/:id/:from',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__["KPCustomerDetailComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Customer Details'
                }
            },
        ]
    }
];
let KpCallerRoutingModule = class KpCallerRoutingModule {
};
KpCallerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KpCallerRoutingModule);



/***/ }),

/***/ "K6r/":
/*!*********************************************************!*\
  !*** ./src/app/views/kpcaller/caller_list.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_caller_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./caller_list.component.html */ "z2NA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");






let ButtonsComponent = class ButtonsComponent {
    constructor(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.loading = true;
        this.btnLoading = false;
        this.title = "Verification";
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__["customersColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.getLists();
        console.log(this.router);
    }
    getLists() {
        this.loading = true;
        let filter = {};
        if (this.router.url === "/kpcaller/verification") {
            filter = {
                is_verified: false,
            };
            this.title = "Verification";
        }
        else if (this.router.url === "/kpcaller/assigned") {
            filter = {
                kp_id: localStorage.getItem("uid"),
            };
            this.title = "Assigned";
        }
        else {
            filter = {
                MarriageDate_null: true,
            };
            this.title = "Date Not Fixed";
        }
        this.dataservice.getCustomersFilter(filter).valueChanges.subscribe((result) => {
            console.log("getCustomersFilter", result.data.customers);
            this.rowData = result.data.customers;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows);
        this.router.navigate(["/kpcaller/kp_customer_details", selectedRows[0].id, this.router.url], {
            state: { data: selectedRows },
        });
    }
};
ButtonsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_caller_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ButtonsComponent);



/***/ }),

/***/ "N1zO":
/*!************************************************************!*\
  !*** ./src/app/views/kpcaller/customerdetail.component.ts ***!
  \************************************************************/
/*! exports provided: KPCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPCustomerDetailComponent", function() { return KPCustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customerdetail.component.html */ "svF1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








let KPCustomerDetailComponent = class KPCustomerDetailComponent {
    constructor(dataservice, activatedRouter, fb) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.fb = fb;
        this.from = false;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverter"];
        this.groups = [];
        this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            // event_date_time: ["", Validators.required],
            is_verified: [false],
        });
    }
    ngOnInit() {
        this.getLists();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
            if (params["from"] === "/kpcaller/verification") {
                this.from = true;
            }
        });
        this.dataservice.getSingleCustomer(this.id).valueChanges.subscribe((result) => {
            console.log("getSingleCustomer", result.data.customer);
            this.details = result.data.customer;
            this.loading = false;
        });
        console.log(this.from);
    }
    getLists() {
        this.loading = true;
        this.dataservice.getGroups().valueChanges.subscribe((result) => {
            console.log("getGroups", result.data.groups);
            this.groups = result.data.groups;
        });
    }
    CommentSubmit() {
        let resp = {};
        console.log(this.commentForm.value);
        this.dataservice
            .AddCustomerComment(this.details.id, this.commentForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCustomer) {
                alert("Comment added successfully!");
                this.commentModal.hide();
            }
            else {
                alert("Failed. Please check the fields!");
            }
        });
    }
};
KPCustomerDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
KPCustomerDetailComponent.propDecorators = {
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }]
};
KPCustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], KPCustomerDetailComponent);



/***/ }),

/***/ "svF1":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/kpcaller/customerdetail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n            <h2>Customer Details</h2>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <table class=\"table table-striped\">\n                        <tbody>\n                            <tr>\n                                <td>ID</td>\n                                <td>{{details?.id}}</td>\n                            </tr>\n                            <tr>\n                                <td>Name Of Bride</td>\n                                <td>{{details?.NameOfBride}}</td>\n                            </tr>\n                            <tr>\n                                <td>Name Of Father</td>\n                                <td>{{details?.NameOfFather}}</td>\n                            </tr>\n                            <tr>\n                                <td>Name Of Mother</td>\n                                <td>{{ details?.NameOfMother }}</td>\n                            </tr>\n                            <tr>\n                                <td>Marriage Date</td>\n                                <td>{{ details?.MarriageDate }}</td>\n                            </tr>\n                            <tr>\n                                <td>Marriage Month</td>\n                                <td>{{ details?.MarriageMonth }}</td>\n                            </tr>\n                            <tr>\n                                <td>Contact number 1</td>\n                                <td>{{ details?.ContactNumber_1 }}</td>\n                            </tr>\n                            <tr>\n                                <td>Contact number 2</td>\n                                <td>{{ details?.ContactNumber_2 }}</td>\n                            </tr>\n                            <tr>\n                                <td>Agent</td>\n                                <td>\n                                    <span class=\"badge badge-warning\">{{ details.tele_caller_contact?.Name }}</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>House Name</td>\n                                <td>{{ details.Address?.HouseName }}</td>\n                            </tr>\n                            <tr>\n                                <td>Landmark</td>\n                                <td>{{ details.Address?.Landmark }}</td>\n                            </tr>\n                            <tr>\n                                <td>Locality</td>\n                                <td>{{ details.Address?.locality?.Name }}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{dateConverter(item.CallHistory?.event_date_time)}}</h5>\n                            <p class=\"card-text\">{{item.RemarksText}}</p>\n                            <span\n                                class=\"badge badge-primary\">{{item.CallHistory.users_permissions_user?.username}}</span>\n                        </div>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"commentModal.show()\">\n                        Add Comment\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Add Comment</h4>\n                        <button type=\"button\" class=\"close\" (click)=\"commentModal.hide()\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Remarks</label>\n                                <textarea class=\"form-control\" maxlength=\"250\" id=\"RemarksText\" name=\"RemarksText\"\n                                    formControlName=\"RemarksText\" placeholder=\"Enter remarks\"></textarea>\n                            </div>\n                            <!-- <div class=\"form-group\">\n                                <label for=\"email\">Date</label>\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\n                            </div> -->\n                            <div *ngIf=\"from\" class=\"form-group\">\n                                <!-- <input type=\"checkbox\" class=\"form-control\" id=\"is_verified\" name=\"is_verified\"\n                                    formControlName=\"is_verified\" />\n                                <label for=\"is_verified\">Verification</label> -->\n                                <div class=\"checkbox\">\n                                    <label>\n                                        <input type=\"checkbox\" value=\"true\" id=\"is_verified\" name=\"is_verified\"\n                                            formControlName=\"is_verified\">\n                                        Customer Verified\n                                    </label>\n                                </div>\n                            </div>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"commentModal.hide()\">\n                                Close\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\n                                [disabled]=\"btnLoading || !commentForm.valid\">\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                    aria-hidden=\"true\"></span>\n                                Save changes\n                            </button>\n                        </form>\n                    </div>\n                </div>\n                <!-- /.modal-content -->\n            </div>\n            <!-- /.modal-dialog -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "z2NA":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/kpcaller/caller_list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>{{title}} List</h2>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-kpcaller-kpcaller-module-es2015.js.map