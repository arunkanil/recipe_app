import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Months, dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "enquirydetails.component.html",
})
export class EnquiryDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.Months = [...Months];
  }
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("customerModal") public customerModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  Months;
  dateConverter = dateConverter;
  loading = true;
  details: any = [];
  btnLoading = false;
  groups: any = [];
  localities: any = [];
  postoffices: any = [];
  agents: any = [];
  customerForm = this.fb.group({
    NameOfBride: ["", Validators.required],
    NameOfFather: ["", Validators.required],
    NameOfMother: ["", Validators.required],
    MarriageDate: ["", Validators.required],
    Contact_Number_1: ["", Validators.required],
    Contact_Number_2: ["", Validators.required],
    MarriageMonth: ["", Validators.required],
    tele_caller_contact: ["", Validators.required],
    HouseName: ["", Validators.required],
    Landmark: ["", Validators.required],
    locality: ["", Validators.required],
    Post_office: ["", Validators.required],
    Latitude: [""],
    Longitude: [""],
    GoogleMapURL: [""],
    GoogleMapPlusCode: [""],
  });
  commentForm = this.fb.group({
    RemarksText: ["", Validators.required],
    // event_date_time: ["", Validators.required],
  });

  ngOnInit(): void {
    this.getLists();
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.dataservice
      .getSingleEnquiry(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getSingleAgent", result.data.customerEnquiry);
        this.details = result.data.customerEnquiry;
        this.customerForm = this.fb.group({
          NameOfBride: [this.details.Name, Validators.required],
          NameOfFather: ["", Validators.required],
          NameOfMother: ["", Validators.required],
          MarriageDate: [this.details.MarriageDate, Validators.required],
          Contact_Number_1: [this.details.PhoneNumber, Validators.required],
          Contact_Number_2: ["", Validators.required],
          MarriageMonth: ["", Validators.required],
          tele_caller_contact: ["", Validators.required],
          HouseName: [this.details.HouseName, Validators.required],
          Landmark: [this.details.Landmark, Validators.required],
          locality: ["", Validators.required],
          Post_office: ["", Validators.required],
          Latitude: [""],
          Longitude: [""],
          GoogleMapURL: [""],
          GoogleMapPlusCode: [""],
        });
        this.loading = false;
      });
  }
  getLists() {
    this.loading = true;
    this.dataservice.getLocalities().valueChanges.subscribe((result: any) => {
      console.log("getLocalities", result.data.localities);
      this.localities = result.data.localities;
    });
    this.dataservice.getPostOffices().valueChanges.subscribe((result: any) => {
      console.log("getPostOffices", result.data.postOffices);
      this.postoffices = result.data.postOffices;
    });
    this.dataservice.getAgents().valueChanges.subscribe((result: any) => {
      console.log("getAgents", result.data.teleCallerContacts);
      this.agents = result.data.teleCallerContacts;
    });
  }
  // dateConverter(date) {
  //   return new Date(date);
  // }
  FormSubmit() {
    let resp = {};
    console.log(this.customerForm.value);
    this.dataservice
      .Addcustomer(this.customerForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createCustomer) {
          this.toastr.success("Customer added successfully!");
          this.getLists();
          this.myModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  customerSubmit() {
    let resp = {};
    console.log(this.customerForm.value);
    this.dataservice
      .Addcustomer(this.customerForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createCustomer) {
          this.toastr.success("customer added successfully!");
          this.getLists();
          this.customerModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }

  deleteEnquiry() {
    let resp = {};
    this.dataservice.DeleteEnquiry(this.id).subscribe((result: any) => {
      resp = result.data;
      console.log("response", result);
      if (result.data.deleteCustomerEnquiry) {
        this.toastr.success("Enquiry deleted successfully!");
        this.router.navigate(["/manager/enquiries"]);
        this.deleteModal.hide();
      } else {
        this.toastr.error("Failed. Please check again!");
      }
    });
  }
}
