import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DesingComponent } from './pages/desing/desing.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    DesingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
