import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
