import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { PwaRoutingModule } from './pwa-routing.module';
import { PwaCenterComponent } from './pwa-center.component';

import { PwaService } from './pwa.service';
import { PwaCenterDetailComponent } from './pwa-center-detail/pwa-center-detail.component';

@NgModule({
  imports: [ CommonModule, MaterialModule, PwaRoutingModule ],
  declarations: [ PwaCenterComponent, PwaCenterDetailComponent ],
  providers: [ PwaService ]
})
export class PwaModule { }
