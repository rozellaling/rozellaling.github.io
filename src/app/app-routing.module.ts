import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/content/about/about.component';
import { HomeComponent } from './components/content/home/home.component';
import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
