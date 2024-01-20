import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLazy0Module } from '../module-lazy0/module-lazy0.module';

@Injectable({ providedIn: ModuleLazy0Module })
export class Module3ModuleForRootService {
  constructor() {
    console.log('Module3ModuleForRootService constructor')
  }
}

@Injectable(
  { providedIn: ModuleLazy0Module }
)
export class Module3ModuleForConfigFileService {
  constructor() {
    console.log('Module3ModuleForConfigFileService constructor')
  }
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: 'MODULE_3_PROVIDE_FROM_CONFIG_SERVICE',
      useClass: Module3ModuleForConfigFileService
    }
  ]
})
export class Module3Module {
  public static forRoot(): ModuleWithProviders<Module3Module> {
    console.dir('Module3Module forRoot')
    return {
      ngModule: Module3Module,
      providers: [
        {
          provide: 'MODULE_3_PROVIDE_FROM_ROOT_SERVICE',
          useClass: Module3ModuleForRootService,
        }
      ]
    }
  }
}
