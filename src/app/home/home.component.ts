import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroIntroComponent } from '../hero-intro/hero-intro.component';
import { HeroLetsWorkComponent } from '../hero-lets-work/hero-lets-work.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { WorkCardComponent } from './work/work-card/work-card.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroIntroComponent,
    HeroLetsWorkComponent,
    SkillsComponent,
    WorkComponent,
    WorkCardComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
