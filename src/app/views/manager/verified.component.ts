import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../data.service";
import { AgentsColumn, customersColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  templateUrl: "verified.component.html",
})
export class VerifiedListComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    if (this.route.snapshot.data.title === "Agents List") {
      this.columnDefs = [...AgentsColumn];
    } else {
      this.columnDefs = [...customersColumn];
    }
    this.rowSelection = "multiple";
  }
  @ViewChild("myModal") public myModal: ModalDirective;
  callerForm = this.fb.group({
    id: ["", Validators.required],
  });
  loading = true;
  btnLoading = false;
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  users: any = [];
  selectedRows: any[];
  btnDisabled = true;
  routerData: any = {};
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
    this.routerData = this.route.snapshot.data;
    console.log(this.route.snapshot.data);
  }
  getLists() {
    this.loading = true;
    let filter = {
      is_verified: true,
      kp_caller_assigned_null: true,
    };
    if (this.route.snapshot.data.title === "Agents List") {
      this.dataservice.getAgents().valueChanges.subscribe((result: any) => {
        console.log("getAgents", result.data.teleCallerContacts);
        this.rowData = result.data.teleCallerContacts;
      });
      this.dataservice
        .getUsers("TELE_CALLER")
        .valueChanges.subscribe((result: any) => {
          console.log("getUsers", result.data.users);
          this.users = result.data.users;
        });
    } else {
      this.dataservice
        .getCustomersFilter(filter)
        .valueChanges.subscribe((result: any) => {
          console.log("getCustomersFilter", result.data.customers);
          this.rowData = result.data.customers;
        });
      this.dataservice
        .getUsers("KP_CALLER")
        .valueChanges.subscribe((result: any) => {
          console.log("getUsers", result.data.users);
          this.users = result.data.users;
        });
    }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectedRows.length > 0) {
      this.btnDisabled = false;
    } else {
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
    console.log(
      this.callerForm.value,
      Array.from(this.selectedRows, (x) => x.id)
    );
    if (this.route.snapshot.data.title === "Agents List") {
      this.dataservice
        .SetTeleCaller(
          this.callerForm.value.id,
          Array.from(this.selectedRows, (x) => x.id)
        )
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateUser) {
            alert("Assigned successfully!");
            this.getLists();
            this.myModal.hide();
          } else {
            alert("Failed. Please check the fields!");
          }
        });
    } else {
      this.dataservice
        .SetKpCaller(
          this.callerForm.value.id,
          Array.from(this.selectedRows, (x) => x.id)
        )
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateUser) {
            alert("Assigned successfully!");
            this.getLists();
            this.myModal.hide();
          } else {
            alert("Failed. Please check the fields!");
          }
        });
    }
  }
}
