import { NgModule } from "@angular/core";
import { ZeroComponentAComponent } from "./components/zero-component-a/zero-component-a.component";
import { ZeroComponentBComponent } from "./components/zero-component-b/zero-component-b.component";
import { ZeroComponentCComponent } from "./components/zero-component-c/zero-component-c.component";
import { ZeroComponentBaseComponent } from "./components/zero-component-base/zero-component-base.component";
import { CommonModule } from "@angular/common";
import { ZeroComponentService } from "./services/zero-component.service";
import { ZeroWithInjectorService } from "./services/zero-with-injector.service";
import { Module3Module } from "../module3/module3.module";
import { Module1Module } from "../module1/module1.module";

@NgModule({
    declarations: [
        ZeroComponentAComponent,
        ZeroComponentBComponent,
        ZeroComponentCComponent,
        ZeroComponentBaseComponent,
    ],
    exports: [
        ZeroComponentBaseComponent
    ],
    imports: [
        CommonModule,
        Module1Module,
        Module3Module,
    ],
    providers: [
        {
            provide: 'MODULE_ZERO_PROVIDE', useValue: "MODULE_ZERO_PROVIDE_VALUE",
        },
        ZeroComponentService,
        ZeroWithInjectorService
    ]
})
export class ModuleZero {

}