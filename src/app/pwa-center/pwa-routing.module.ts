import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwaCenterComponent } from './pwa-center.component';
import { PwaCenterDetailComponent } from './pwa-center-detail/pwa-center-detail.component';

const pwaRoutes: Routes = [
      {
        path: '',
        component: PwaCenterComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: PwaCenterDetailComponent
      }
];

@NgModule({
  imports: [ RouterModule.forChild(pwaRoutes) ],
  exports: [ RouterModule ]
})
export class PwaRoutingModule {}
