import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './design/header/header.component';
import { FooterComponent } from './design/footer/footer.component';
import { NavComponent } from './design/nav/nav.component';

import { CoverPageComponent } from './content/cover-page/cover-page.component';
import { CardComponent } from './content/card/card.component';
import { ContainerComponent } from './content/container/container.component';

// Add to routing
import { HomeComponent } from './common/home/home.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { PageNotFoundComponent } from './design/page-not-found/page-not-found.component';
import { ServicesComponent } from './common/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    CoverPageComponent,
    CardComponent,
    ContainerComponent,
    PageNotFoundComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
