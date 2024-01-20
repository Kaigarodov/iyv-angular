import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Some1Service } from './some1.service';
import { ComponentOldStyle1Component } from './component1/component-old-style-1.component';
import { Module2Module } from '../module2/module2.module';
import { Module3Module } from '../module3/module3.module';



@NgModule({
  declarations: [
    ComponentOldStyle1Component
  ],
  imports: [
    CommonModule,
    //Module3Module.forRoot(),
  ],
  providers: [
    Some1Service
  ],
  exports: [
    ComponentOldStyle1Component
  ]
})
export class Module1Module { }
