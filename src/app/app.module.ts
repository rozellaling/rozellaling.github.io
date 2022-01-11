import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { HomeComponent } from './components/content/home/home.component';
import { SliderComponent } from './components/content/slider/slider.component';
import { GalleryComponent } from './components/content/gallery/gallery.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    SliderComponent,
    GalleryComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
