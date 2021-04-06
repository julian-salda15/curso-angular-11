import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsComponent } from './credits/credits.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotifyComponent } from './notify/notify.component';



@NgModule({
  declarations: [
    CreditsComponent,
    PaymentsComponent,
    NotifyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreditsComponent,
    PaymentsComponent
  ]
})
export class ComponentsModule { }
