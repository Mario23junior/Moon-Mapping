import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoonsComponent } from './moons/moons.component';

const routes: Routes = [
  { path: '', component: MoonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoonsRoutingModule { }
