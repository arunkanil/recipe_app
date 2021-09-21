import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

import { DataService } from "../../data.service";
import {
  customersColumn,
  DNFcustomersColumn,
} from "../../constants/columnMetadata";
import { filter } from "rxjs/operators";

@Component({
  templateUrl: "caller_list.component.html",
})
export class ButtonsComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.columnDefs = [...customersColumn];
    this.rowSelection = "single";
  }
  
  filterForm = this.fb.group({
    year: [new Date().getFullYear(), Validators.required],
  });

  loading = true;
  btnLoading = false;
  title = "Verification";
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  selectedYear: any = new Date().getFullYear();
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any ={};

  ngOnInit(): void {
    this.loading = true;
    if (this.router.url === "/kpcaller/verification") {
      this.filter = {
        is_verified: false,
      };
      this.title = "Verification";
    } else if (this.router.url === "/kpcaller/assigned") {
      this.filter = {
        kp_id: localStorage.getItem("uid"),
      };
      this.title = "Assigned";
    } else {
      this.filter = {
        MarriageDate_null: true,
      };
      this.title = "Date Not Fixed";
      this.columnDefs = [...DNFcustomersColumn];
    }
    this.getLists(this.filter);
    console.log(this.router);
    let max = new Date().getFullYear() + 10;
    var min = max - 20;
    for (var i = max; i >= min; i--) {
      this.years.push({ year: i });
    }
    console.log(this.selectedYear);
  }
  getLists(filter) {
    this.dataservice
      .getCustomersFilter(filter)
      .valueChanges.subscribe((result: any) => {
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
    this.router.navigate(
      ["/kpcaller/kp_customer_details", selectedRows[0].id, this.router.url],
      {
        state: { data: selectedRows },
      }
    );
  }
  filterSubmit(){
    this.filter = {
      ...this.filter,
      MarriageDate_gte : this.filterForm.value.year+"-01"+"-01",
      MarriageDate_lte : this.filterForm.value.year+"-12"+"-31"
    }
    console.log(this.filterForm.value,this.filter);
    this.getLists(this.filter);
  }
}
