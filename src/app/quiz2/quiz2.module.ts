import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { Quiz2Component } from './quiz2.component';
import { Quiz2Service } from './quiz2.service';

import { Quiz2RoutingModule } from './quiz2-routing.module';


@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, Quiz2RoutingModule],
  declarations: [ Quiz2Component ]
})
export class Quiz2Module { }
