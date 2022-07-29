import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoonsFormComponent } from './moons-form/moons-form.component';
import { MoonsComponent } from './moons/moons.component';

const routes: Routes = [
  { path: '', component: MoonsComponent },
  { path: 'moons-add', component: MoonsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoonsRoutingModule { }
