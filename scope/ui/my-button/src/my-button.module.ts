import { NgModule } from '@angular/core';
import { MyButtonComponent } from './my-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    MyButtonComponent
  ]
})
export class MyButtonModule { }
