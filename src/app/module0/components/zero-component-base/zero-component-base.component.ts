import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';

@Component({
    templateUrl: './zero-component-base.component.html',
    selector: 'zero-component-base'
})
export class ZeroComponentBaseComponent {
    constructor(
        @Optional()
        @Inject('MODULE_3_PROVIDE_FROM_CONFIG_SERVICE') public service: any,
        @Optional()
        @Inject('MODULE_3_PROVIDE_FROM_ROOT_SERVICE')
        public module3RootService: any
    ) {

    }
}