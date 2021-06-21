(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-manager-manager-module"],{

/***/ "5Q6f":
/*!*************************************************!*\
  !*** ./src/app/views/manager/manager.module.ts ***!
  \*************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _verified_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verified.component */ "Sx+e");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manager-routing.module */ "SOEm");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers.component */ "MPuI");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customerdetail.component */ "F9w6");

// Angular






// import { TypographyComponent } from './typography.component';
// Theme Routing



let ManagerModule = class ManagerModule {
};
ManagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _manager_routing_module__WEBPACK_IMPORTED_MODULE_7__["ManagerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _verified_component__WEBPACK_IMPORTED_MODULE_6__["VerifiedListComponent"],
            _customers_component__WEBPACK_IMPORTED_MODULE_8__["ManagerCustomerComponent"],
            _customerdetail_component__WEBPACK_IMPORTED_MODULE_9__["ManagerCustomerDetailComponent"]
        ]
    })
], ManagerModule);



/***/ }),

/***/ "F9w6":
/*!***********************************************************!*\
  !*** ./src/app/views/manager/customerdetail.component.ts ***!
  \***********************************************************/
/*! exports provided: ManagerCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerCustomerDetailComponent", function() { return ManagerCustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customerdetail.component.html */ "d7Xv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








let ManagerCustomerDetailComponent = class ManagerCustomerDetailComponent {
    constructor(dataservice, activatedRouter, router, fb) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverter"];
        this.users = [];
        this.agentForm = this.fb.group({
            agent: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.commentForm = this.fb.group({
            RemarksText: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getLists();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.dataservice
            .getSingleCustomer(this.id)
            .valueChanges.subscribe((result) => {
            console.log("getSingleCustomer", result.data.customer);
            this.details = result.data.customer;
            this.loading = false;
        });
    }
    getLists() {
        this.loading = true;
        this.dataservice
            .getUsers("FIELD_AGENT")
            .valueChanges.subscribe((result) => {
            console.log("getUsers", result.data.users);
            this.users = result.data.users;
        });
    }
    FormSubmit() {
        let resp = {};
        console.log(this.agentForm.value);
        this.dataservice
            .SetFieldAgent(this.agentForm.value.agent, this.details.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUser) {
                alert("Field Agent assigned successfully!");
                this.myModal.hide();
            }
            else {
                alert("Failed. Please check the fields!");
            }
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
    deleteAgent() {
        let resp = {};
        this.dataservice.DeleteAgent(this.id).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.deleteTeleCallerContact) {
                alert("Agent deleted successfully!");
                this.router.navigate(["/order/order_processing"]);
                this.deleteModal.hide();
            }
            else {
                alert("Failed. Please check again!");
            }
        });
    }
};
ManagerCustomerDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ManagerCustomerDetailComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }],
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }]
};
ManagerCustomerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customerdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], ManagerCustomerDetailComponent);



/***/ }),

/***/ "MPuI":
/*!******************************************************!*\
  !*** ./src/app/views/manager/customers.component.ts ***!
  \******************************************************/
/*! exports provided: ManagerCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerCustomerComponent", function() { return ManagerCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customers.component.html */ "iva1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








let ManagerCustomerComponent = class ManagerCustomerComponent {
    constructor(dataservice, router, fb) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.customerForm = this.fb.group({
            NameOfBride: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            NameOfFather: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            NameOfMother: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MarriageDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            MarriageMonth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            tele_caller_contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            HouseName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Landmark: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            locality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.loading = true;
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.agents = [];
        this.localities = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["customersColumn"]];
        this.Months = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["Months"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        this.dataservice.getCustomers().valueChanges.subscribe((result) => {
            console.log("getCustomers", result.data.customers);
            this.rowData = result.data.customers;
        });
        this.dataservice.getLocalities().valueChanges.subscribe((result) => {
            console.log("getLocalities", result.data.localities);
            this.localities = result.data.localities;
        });
        this.dataservice.getAgents().valueChanges.subscribe((result) => {
            console.log("getAgents", result.data.teleCallerContacts);
            this.agents = result.data.teleCallerContacts;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows);
        this.router.navigate(["/manager/customer_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    FormSubmit() {
        let resp = {};
        console.log(this.customerForm.value);
        this.dataservice.Addcustomer(this.customerForm.value).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createCustomer) {
                alert("customer added successfully!");
                this.getLists();
                this.myModal.hide();
            }
            else {
                alert("Failed. Please check the fields!");
            }
        });
    }
};
ManagerCustomerComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ManagerCustomerComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }]
};
ManagerCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_customers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], ManagerCustomerComponent);



/***/ }),

/***/ "SOEm":
/*!*********************************************************!*\
  !*** ./src/app/views/manager/manager-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth.guard */ "nl+3");
/* harmony import */ var _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerdetail.component */ "F9w6");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers.component */ "MPuI");
/* harmony import */ var _verified_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verified.component */ "Sx+e");







const routes = [
    {
        path: '',
        // data: {
        //   title: 'Theme'
        // },
        children: [
            {
                path: '',
                redirectTo: 'manager'
            },
            {
                path: 'verified_list',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _verified_component__WEBPACK_IMPORTED_MODULE_6__["VerifiedListComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Verified List'
                }
            },
            {
                path: 'customers',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _customers_component__WEBPACK_IMPORTED_MODULE_5__["ManagerCustomerComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Customers'
                }
            },
            {
                path: 'customer_details/:id',
                canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                component: _customerdetail_component__WEBPACK_IMPORTED_MODULE_4__["ManagerCustomerDetailComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Customer Details'
                }
            },
        ]
    }
];
let ManagerRoutingModule = class ManagerRoutingModule {
};
ManagerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ManagerRoutingModule);



/***/ }),

/***/ "Sx+e":
/*!*****************************************************!*\
  !*** ./src/app/views/manager/verified.component.ts ***!
  \*****************************************************/
/*! exports provided: VerifiedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedListComponent", function() { return VerifiedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verified_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verified.component.html */ "cVY+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");








let VerifiedListComponent = class VerifiedListComponent {
    constructor(dataservice, router, fb) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.callerForm = this.fb.group({
            id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.loading = true;
        this.btnLoading = false;
        this.orders = {};
        this.columnDefs = [];
        this.rowData = [];
        this.users = [];
        this.btnDisabled = true;
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_5__["customersColumn"]];
        this.rowSelection = "multiple";
    }
    ngOnInit() {
        this.getLists();
    }
    getLists() {
        this.loading = true;
        let filter = {
            is_verified: true,
            kp_caller_assigned_null: true,
        };
        this.dataservice
            .getCustomersFilter(filter)
            .valueChanges.subscribe((result) => {
            console.log("getCustomersFilter", result.data.customers);
            this.rowData = result.data.customers;
        });
        this.dataservice
            .getUsers("KP_CALLER")
            .valueChanges.subscribe((result) => {
            console.log("getUsers", result.data.users);
            this.users = result.data.users;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        if (this.selectedRows.length > 0) {
            this.btnDisabled = false;
        }
        else {
            this.btnDisabled = true;
        }
        console.log(this.selectedRows);
        // this.router.navigate(
        //   ["/kpcaller/kp_customer_details", selectedRows[0].id],
        //   {
        //     state: { data: selectedRows },
        //   }
        // );
    }
    FormSubmit() {
        let resp = {};
        console.log(this.callerForm.value, Array.from(this.selectedRows, (x) => x.id));
        this.dataservice
            .SetKpCaller(this.callerForm.value.id, Array.from(this.selectedRows, (x) => x.id))
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUser) {
                alert("Assigned successfully!");
                this.getLists();
                this.myModal.hide();
            }
            else {
                alert("Failed. Please check the fields!");
            }
        });
    }
};
VerifiedListComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
VerifiedListComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }]
};
VerifiedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_verified_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], VerifiedListComponent);



/***/ }),

/***/ "cVY+":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/verified.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Verified List</h2>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" [disabled]=\"btnDisabled\"\n        (click)=\"myModal.show()\">\n        Assign to caller\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n    <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n      aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Assign to Caller</h4>\n            <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form [formGroup]=\"callerForm\" (ngSubmit)=\"FormSubmit()\">\n              <div class=\"form-group\">\n                <label for=\"id\">KP Caller</label>\n                <select class=\"form-control\" id=\"id\" required ngModel name=\"group\" formControlName=\"id\">\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\n                    {{ item.username }}\n                  </option>\n                </select>\n              </div>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                Close\n              </button>\n              <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !callerForm.valid\">\n                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                  aria-hidden=\"true\"></span>\n                Save changes\n              </button>\n            </form>\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "d7Xv":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/customerdetail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n            <div class=\"modal-content\">\n                <div class=\"modal-body text-center\">\n                    Do you want to delete this agent?\n                </div>\n                <div class=\"modal-footer justify-content-around\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\n                        No! Cancel.\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\n                        Yes! Delete.\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n            <h2>Customer Details</h2>\n            <span>\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n                Assign to field agent\n            </button>\n                <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\n                Delete\n            </button> -->\n            </span>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"row\">\n                        <div style=\"display: flex; justify-content: space-between\">\n                            <h4>Basic details</h4>\n                        </div>\n                        <table class=\"table table-striped\">\n                            <tbody>\n                                <tr>\n                                    <td>ID</td>\n                                    <td>{{details?.id}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Name Of Father</td>\n                                    <td>{{details?.NameOfBride}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Name Of Father</td>\n                                    <td>{{details?.NameOfFather}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Name Of Mother</td>\n                                    <td>{{ details?.NameOfMother }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Marriage Date</td>\n                                    <td>{{ details?.MarriageDate }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Marriage Month</td>\n                                    <td>{{ details?.MarriageMonth }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Agent</td>\n                                    <td>\n                                        <span class=\"badge badge-warning\">{{ details.tele_caller_contact?.Name }}</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>KP Caller</td>\n                                    <td>\n                                        <span class=\"badge badge-primary\">{{ details.kp_caller_assigned?.username\n                                            }}</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>House Name</td>\n                                    <td>{{ details.Address?.HouseName }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Landmark</td>\n                                    <td>{{ details.Address?.Landmark }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Locality</td>\n                                    <td>{{ details.Address?.locality?.Name }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"row\">\n                        <div style=\"display: flex; justify-content: space-between\">\n                            <h4>Field Report</h4>\n                        </div>\n                        <table class=\"table table-striped\">\n                            <tbody>\n                                <tr>\n                                    <td>Financial category</td>\n                                    <td>{{details.FieldReport?.FinancialBackground}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Quantity of intended purchase</td>\n                                    <td>{{details.FieldReport?.QtyOfGold}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Suitable set</td>\n                                    <td>{{details.FieldReport?.PreferredWeddingSet}}</td>\n                                </tr>\n                                <tr>\n                                    <td>Whether planning to exchange after marriage?</td>\n                                    <td>{{ details.FieldReport?.PlanningForReplacementAfterWedding }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Quantity of old gold for exchange</td>\n                                    <td>{{ details.FieldReport?.OldGoldExchangeQty }}</td>\n                                </tr>\n                                <tr>\n                                    <td>No cost emi needed?</td>\n                                    <td>{{ details.FieldReport?.NoCostEmiRequired }}</td>\n                                </tr>\n                                <tr>\n                                    <td>EMI tenure</td>\n                                    <td>\n                                        <span class=\"badge badge-warning\">{{ details.FieldReport?.EmiTenure }}</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Number of repayments</td>\n                                    <td>\n                                        <span class=\"badge badge-primary\">{{ details.FieldReport?.EmiIntervals\n                                            }}</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Token advance</td>\n                                    <td>{{ details.FieldReport?.TokenAdvance }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Rate advance</td>\n                                    <td>{{ details.FieldReport?.RateAdvance }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Whether approached by other jewelleries?</td>\n                                    <td>{{ details.FieldReport?.EnquiriesFromOthers }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Advance paid to other jewellery</td>\n                                    <td>{{ details.FieldReport?.AdvancePaidToOtherJewellery }}</td>\n                                </tr>\n                                <tr>\n                                    <td>Whether received any fresh leads?</td>\n                                    <td>{{ details.FieldReport?.NumberOfNewMarriageAddress }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div style=\"display: flex; justify-content: space-between\">\n                        <h4>Remarks</h4>\n                    </div>\n                    <div class=\"card\" *ngFor=\"let item of details.TelecallerRemarks\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{dateConverter(item.CallHistory?.event_date_time)}}</h5>\n                            <p class=\"card-text\">{{item.RemarksText}}</p>\n                            <span\n                                class=\"badge badge-primary\">{{item.CallHistory.users_permissions_user?.username}}</span>\n                        </div>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"commentModal.show()\">\n                        Add Comment\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Assign to field Agent</h4>\n                        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">                            \n                            <div class=\"form-group\">\n                                <label for=\"group\">Field agent</label>\n                                <select class=\"form-control\" id=\"agent\" required ngModel name=\"agent\"\n                                    formControlName=\"agent\">\n                                    <option value=\"\" disabled selected hidden>Choose...</option>\n                                    <option *ngFor=\"let item of users\" value=\"{{ item.id }}\">\n                                        {{ item.username }}\n                                    </option>\n                                </select>\n                            </div>\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                                Close\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\n                                [disabled]=\"btnLoading || !agentForm.valid\">\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                    aria-hidden=\"true\"></span>\n                                Save changes\n                            </button>\n                        </form>\n                    </div>\n                </div>\n                <!-- /.modal-content -->\n            </div>\n            <!-- /.modal-dialog -->\n        </div>\n        <div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Add Comment</h4>\n                        <button type=\"button\" class=\"close\" (click)=\"commentModal.hide()\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form [formGroup]=\"commentForm\" (ngSubmit)=\"CommentSubmit()\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Remarks</label>\n                                <textarea class=\"form-control\" maxlength=\"250\" id=\"RemarksText\" name=\"RemarksText\"\n                                    formControlName=\"RemarksText\" placeholder=\"Enter remarks\"></textarea>\n                            </div>\n                            <!-- <div class=\"form-group\">\n                                <label for=\"email\">Date</label>\n                                <input type=\"datetime-local\" class=\"form-control\" id=\"event_date_time\"\n                                    name=\"event_date_time\" formControlName=\"event_date_time\" />\n                            </div> -->\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                                Close\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-primary ml-2\"\n                                [disabled]=\"btnLoading || !commentForm.valid\">\n                                <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                    aria-hidden=\"true\"></span>\n                                Save changes\n                            </button>\n                        </form>\n                    </div>\n                </div>\n                <!-- /.modal-content -->\n            </div>\n            <!-- /.modal-dialog -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "iva1":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manager/customers.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Customers</h2>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n        New\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 500px\" id=\"myGrid\" class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\" (selectionChanged)=\"onSelectionChanged($event)\" animateRows=\"true\">\n          </ag-grid-angular>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add New Customer</h4>\n          <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form [formGroup]=\"customerForm\" (ngSubmit)=\"FormSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name of Bride</label>\n              <input type=\"text\" class=\"form-control\" id=\"NameOfBride\" name=\"NameOfBride\" formControlName=\"NameOfBride\"\n                placeholder=\"Enter bride's name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Name of Father</label>\n              <input type=\"text\" class=\"form-control\" id=\"NameOfFather\" name=\"NameOfFather\"\n                formControlName=\"NameOfFather\" placeholder=\"Enter father's name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Name of Mother</label>\n              <input type=\"text\" class=\"form-control\" id=\"NameOfMother\" name=\"NameOfMother\"\n                formControlName=\"NameOfMother\" placeholder=\"Enter mother's name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Marriage date</label>\n              <input type=\"date\" class=\"form-control\" id=\"MarriageDate\" name=\"MarriageDate\"\n                formControlName=\"MarriageDate\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"group\">Marriage month</label>\n              <select class=\"form-control\" id=\"MarriageMonth\" required ngModel name=\"MarriageMonth\" formControlName=\"MarriageMonth\">\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of Months\" value=\"{{ item.id }}\">\n                  {{ item.Name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"group\">Agent</label>\n              <select class=\"form-control\" id=\"tele_caller_contact\" required ngModel name=\"tele_caller_contact\" formControlName=\"tele_caller_contact\">\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of agents\" value=\"{{ item.id }}\">\n                  {{ item.Name }}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">House Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"HouseName\" name=\"HouseName\"\n                formControlName=\"HouseName\" placeholder=\"Enter House Name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Landmark</label>\n              <input type=\"text\" class=\"form-control\" id=\"Landmark\" name=\"Landmark\"\n                formControlName=\"Landmark\" placeholder=\"Enter Landmark\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"locality\">Name of locality</label>\n              <!-- <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\" formControlName=\"locality\"\n                placeholder=\"Enter locality\" /> -->\n                <select class=\"form-control\" id=\"locality\" required ngModel name=\"locality\" formControlName=\"locality\">\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of localities\" value=\"{{ item.id }}\">\n                    {{ item.Name }}\n                  </option>\n                </select>\n            </div>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n              Close\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !customerForm.valid\">\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n              Save changes\n            </button>\n          </form>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-manager-manager-module-es2015.js.map