import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZeroWithInjectorService } from '../../services/zero-with-injector.service';

@Component({
    templateUrl: './zero-component-b.component.html',
    selector: 'zero-component-b'
})
export class ZeroComponentBComponent {
    constructor(_zeroBWithInjectorService: ZeroWithInjectorService) {

    }
}