import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { SwiperModule } from 'swiper/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/content/about/about.component';
import { MatInputModule } from '@angular/material/input';
import { ContactComponent } from './components/contact/contact.component';
// import { MatFormFieldModule } from '@angular/material/form-field';

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
    QuoteComponent,
    SocialMediaBarComponent,
    ContactFormComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    SwiperModule,
    FontAwesomeModule,
    // MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
