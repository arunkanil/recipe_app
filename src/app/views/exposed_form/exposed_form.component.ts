import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { DataService } from "../../data.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "exposed_form.component.html",
})
export class ExposedFormComponent {
  @ViewChild("usForm") usForm: NgForm;

  loginForm: any = {};
  result: any = {};
  returnUrl: string;
  error = "";
  loading = false;

  constructor(
    public dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  onSubmit() {
    this.loginForm = this.usForm.value;
    console.log(this.loginForm);
    this.loading = true;
    this.dataservice
      .AddEnquiry(this.loginForm)
      .pipe(first())
      .subscribe(
        (data:any) => {
          this.loading = false;
          this.toastr.success(data.message);
        },
        (error) => {
          this.error = error;
          this.loading = false;
          console.log(error);
          this.toastr.error(error.error.message);
        }
      );
  }
}
