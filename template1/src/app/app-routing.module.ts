import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './common/home/home.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { PageNotFoundComponent } from './design/page-not-found/page-not-found.component';
import { ServicesComponent } from './common/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
