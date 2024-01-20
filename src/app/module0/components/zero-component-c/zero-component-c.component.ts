import { TemplateBinding } from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterRenderRef, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './zero-component-c.component.html',
    selector: 'zero-component-c',
    providers: [
        {
            provide: "ZERO_COMPONENT_C_PROVIDE", useValue: 'ZERO_COMPONENT_C_VALUE'
        }
    ]
})
export class ZeroComponentCComponent implements
    OnInit, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, AfterRenderRef, OnChanges, DoCheck {

    @Input()
    some: number = 0;

    @HostBinding('style.color')
    public redColor() {
        //console.log('HB: style.backgroundColor')
        return 'red';
    }

    @HostListener('mouseenter')
    public mouseEnter(): void {
        //console.log('mouseenter')
    }

    ngDoCheck(): void {
        //console.log('ngDoCheck', 'call ngDoCheck method')
    }

    ngOnChanges(changes: SimpleChanges): void {
        //console.log('ngOnChanges', 'call ngOnChanges method')
    }

    destroy(): void {
        //console.log('AfterRenderRef', 'call destroy method')
    }

    constructor() {
        //console.log('AfterRenderRef', 'call destroy method')
    }

    ngOnInit(): void {
        //console.log('OnInit', 'call ngOnInit method')
    }

    ngAfterContentInit(): void {
        //console.log('AfterContentInit', 'call ngAfterContentInit method')
    }

    ngAfterContentChecked(): void {
        //console.log('AfterContentChecked', 'call ngAfterContentChecked method')
    }

    ngAfterViewInit(): void {
        //console.log('AfterViewInit', 'call ngAfterViewInit method')
    }

    ngAfterViewChecked(): void {
        //console.log('AfterViewChecked', 'call ngAfterViewChecked method')
    }

    ngOnDestroy(): void {
        //console.log('OnDestroy', 'call ngOnDestroy method')
    }

    buttonClick() {
        //console.log('asdf')
    }


}