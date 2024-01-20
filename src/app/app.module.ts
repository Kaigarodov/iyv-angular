import { CommonModule, NgClass } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, RouterOutlet, provideRouter } from "@angular/router";
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { ModuleZero } from "./module0/module-zero.module";
import { Module3Module } from "./module3/module3.module";
import { BrowserModule } from "@angular/platform-browser";
import { Module2Module } from "./module2/module2.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ModuleZero,
        //Module2Module,
        RouterModule,
        Module3Module.forRoot(),

        RouterOutlet,
        CustomButtonComponent
    ],
    providers: [
        provideRouter([
            {
                path: 'lazy',
                loadChildren: () => import('./module-lazy0/module-lazy0.module').then((m) => {
                    console.log('m object', m)
                    return m.ModuleLazy0Module
                })
            }
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }