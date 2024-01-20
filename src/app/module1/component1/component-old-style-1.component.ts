import { Component, Inject } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';

@Component({
  selector: 'app-component-old-style-1',
  templateUrl: './component-old-style-1.component.html',
  styleUrl: './component-old-style-1.component.scss'
})
export class ComponentOldStyle1Component {
  constructor(
    @Inject('MODULE_3_PROVIDE_FROM_ROOT_SERVICE')
    public module3RootService: any
  ) {
    console.log('ComponentOldStyle1Component constructor is exec')
  }
  public asyncSubject$: Observable<string> = new BehaviorSubject('first value').pipe(
    delay(10000)
  )
}
