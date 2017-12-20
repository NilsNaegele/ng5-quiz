import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { HeroRoutingModule } from './heroes-routing.module';


import { HeroListComponent } from './hero-list/hero-list.component';
import { RemoveHeroDialogComponent } from './remove-hero-dialog/remove-hero-dialog.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HeroRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    RemoveHeroDialogComponent,
    HeroDetailComponent
  ],
  entryComponents: [
    RemoveHeroDialogComponent
  ],
  providers: [

  ]
})
export class HeroesModule {}
