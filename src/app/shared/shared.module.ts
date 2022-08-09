import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  providers: [DatePipe]
})
export class SharedModule { }
