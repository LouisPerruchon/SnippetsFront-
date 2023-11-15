import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursListComponent } from './components/cours-list/cours-list.component';
import { LearnPageComponent } from './components/learn-page/learn-page.component';

const routes: Routes = [
  { path: 'qcm/learnpage', component: LearnPageComponent },
  { path: 'courses', component: CoursListComponent },
  { path: 'learn', component: LearnPageComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
