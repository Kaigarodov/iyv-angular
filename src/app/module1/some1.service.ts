import { Injectable } from '@angular/core';
import { Some2Service } from '../module2/some2.service';

@Injectable()
export class Some1Service {

  constructor(private _some2service: Some2Service) {
    console.log('Some1ServiceCreated')
  }
}
