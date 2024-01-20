import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken } from '@angular/core';
const token = new InjectionToken('some token');
const factory = new InjectionToken('some factory');

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  providers: [
    {
      provide: token, useValue: 'SOME_VALUE',
    },
    {
      provide: factory, useFactory: () => {
        console.log('log factory');
        return 'factory value'
      },
    }

  ]
})
export class CustomButtonComponent {
  incrementValue = 0;
  classMode = "mysuppermode";
  array = [1, 2, 3, 4, 5, 6, 7]
  constructor(
    @Inject(token) public someToken: string,
    @Inject(factory) public someFactory: string,
  ) {
    console.log('startTimer')
  }

  increment() {
    this.incrementValue++;
  }

  onClickButton() {
    console.log('fff')
    setTimeout(() => {
      console.log('fin')
    }, 5000)
  }
}
