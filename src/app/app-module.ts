import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { Navbar } from './components/navbar/navbar.component';
import { Hero } from './components/hero/hero.component';
import { About } from './components/about/about.component';
import { Education } from './components/education/education.component';
import { Skills } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { Contact } from './components/contact/contact.component';
import { ShanAi } from './shan-ai/shan-ai.component';
import { Footer } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExperienceSection } from './components/experience-section/experience-section.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    About,
    Education,
    ExperienceSection,
    Skills,
    ProjectComponent,
    Contact,
    ShanAi,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
