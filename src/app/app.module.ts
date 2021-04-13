import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MensajeService } from './services/mensaje.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';





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
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule

  ],
  providers: [MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
