import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ZeroRootService {
    constructor() {
        console.log('ZeroRootService init');
    }
}