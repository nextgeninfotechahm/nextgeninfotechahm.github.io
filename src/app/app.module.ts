import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TeamComponent } from './team/team.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes=[
  {path:'about',component:AboutusComponent},
  {path:'team',component:TeamComponent},
  {path:'philosophy',component:PhilosophyComponent},
  {path:'courses',component:CoursesComponent},
  {path:'',component:UpcomingComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    UpcomingComponent,
    AboutusComponent,
    TeamComponent,
    AchievementsComponent,
    PhilosophyComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
