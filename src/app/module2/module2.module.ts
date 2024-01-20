import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Some2Service } from './some2.service';
import { Component2Component } from './component2/component2.component';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { Module3Module } from '../module3/module3.module';



@NgModule({
  declarations: [
    Component2Component
  ],
  imports: [
    CommonModule,
    CustomButtonComponent,
    //Module3Module,
    //Module3Module.forRoot()
  ],
  providers: [
    Some2Service
  ],
  exports: [
    Component2Component
  ]
})
export class Module2Module { }
