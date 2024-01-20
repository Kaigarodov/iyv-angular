import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { Module1Module } from './module1/module1.module';
import { Some1Service } from './module1/some1.service';
import { Module2Module } from './module2/module2.module';
import { Some2Service } from './module2/some2.service';
import { ModuleZero } from './module0/module-zero.module';
import { Module3Module } from './module3/module3.module';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //constructor(private _some1service: Some1Service, private _some2service: Some2Service) { }
  title = 'iyv-angular';
}
