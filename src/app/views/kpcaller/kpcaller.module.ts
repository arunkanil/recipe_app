import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './caller_list.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { KpCallerRoutingModule } from './kpcaller-routing.module';

// Angular
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { KPCustomerDetailComponent } from './customerdetail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    KpCallerRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    KPCustomerDetailComponent
  ]
})
export class KpCallerModule { }
