import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module3ModuleForConfigFileService, Module3ModuleForRootService } from '../module3/module3.module';
import { ZeroComponentAComponent } from '../module0/components/zero-component-a/zero-component-a.component';
import { ZeroComponentBComponent } from '../module0/components/zero-component-b/zero-component-b.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<div #lazyRef>Very lazy component</div>',
})
export class ModuleLazy0Component implements AfterViewInit {
    @ViewChild('lazyRef', { read: ElementRef })
    public leref?: ElementRef;

    @ViewChild('lazyRef', { read: ViewContainerRef })
    public lvcref?: ViewContainerRef;

    constructor(
        //@Inject('MODULE_3_PROVIDE_FROM_CONFIG_SERVICE') public service: any,
        //public rootService: Module3ModuleForRootService,
        //public configService: Module3ModuleForConfigFileService

    ) {

    }
    ngAfterViewInit(): void {
        console.log(this.leref);
        console.log(this.lvcref);
        const result = this.lvcref?.createComponent(ZeroComponentAComponent);
        console.log(result)

    }


}