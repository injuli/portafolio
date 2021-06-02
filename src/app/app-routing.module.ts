import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'portfolio', component: PortafolioComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
