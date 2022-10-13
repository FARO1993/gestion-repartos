import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { SuccessRepartoDirective } from './directives/success-reparto.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    SuccessRepartoDirective
  ],
  exports: [
    ErrorMsgDirective,
    SuccessRepartoDirective
  ]
})
export class SharedModule { }
