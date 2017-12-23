import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PwaRoutingModule } from './pwa-routing.module';
import { PwaCenterComponent } from './pwa-center.component';
import { PwaCenterDetailComponent } from './pwa-center-detail/pwa-center-detail.component';
import { PwaCenterShareComponent } from './pwa-center-share/pwa-center-share.component';

import { PwaService } from './pwa.service';
import { ShareService } from './pwa-share.service';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MaterialModule, PwaRoutingModule ],
  declarations: [ PwaCenterComponent, PwaCenterDetailComponent, PwaCenterShareComponent ],
  providers: [ PwaService, ShareService ]
})
export class PwaModule { }
