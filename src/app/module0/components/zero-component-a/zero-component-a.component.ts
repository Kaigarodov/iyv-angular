import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ZeroComponentService } from '../../services/zero-component.service';
import { ZeroRootService } from '../../services/zero-root.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './zero-component-a.component.html',
    selector: 'zero-component-a'
})
export class ZeroComponentAComponent {
    constructor(
        _zeroAComponentService: ZeroComponentService,
        _zeroARootService: ZeroRootService,
    ) {

    }
}