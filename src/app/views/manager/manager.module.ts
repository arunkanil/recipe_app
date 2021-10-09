// Angular
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { VerifiedListComponent } from './verified.component';

// import { TypographyComponent } from './typography.component';

// Theme Routing
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerCustomerComponent } from './customers.component';
import { ManagerCustomerDetailComponent } from './customerdetail.component';
import { EnquiriesComponent } from './enquiries.component';
import { EnquiryDetailComponent } from './enquirydetails.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    VerifiedListComponent,
    ManagerCustomerComponent,
    ManagerCustomerDetailComponent,
    EnquiriesComponent,
    EnquiryDetailComponent
  ]
})
export class ManagerModule { }
