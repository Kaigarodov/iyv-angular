import { Injectable } from "@angular/core";

@Injectable()
export class ZeroWithInjectorService {
    constructor() {
        console.log('ZeroWithInjectorService init')
    }
}