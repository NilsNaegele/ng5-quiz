import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { LoggerService } from './logger.service';
import { Error404Component } from './error404/error404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    SearchBarComponent,
    Error404Component
  ],
  providers: [
    LoggerService
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}



