import { NgModule, ViewChild } from "@angular/core";
import { ModuleLazy0Component } from "./module-lazy0.component";
import { Module3Module } from "../module3/module3.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ModuleLazy0Component],
    imports: [
        //Module3Module,
        RouterModule.forChild([
            {
                path: '',
                component: ModuleLazy0Component
            }
        ])
    ],

})
export class ModuleLazy0Module { }