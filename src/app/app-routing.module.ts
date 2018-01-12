import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnitmasterComponent }      from './unitmaster/unitmaster.component';
import { UnitdetailComponent }   from './unitdetail/unitdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/master', pathMatch: 'full' },
  { path: 'master', component: UnitmasterComponent },
  { path: 'detail/:id', component: UnitdetailComponent },
  { path: 'detail', component: UnitdetailComponent },
  { path: '**', redirectTo: '/master', pathMatch: 'full' },

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}