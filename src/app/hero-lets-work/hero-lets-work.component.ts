import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-lets-work',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './hero-lets-work.component.html',
  styleUrl: './hero-lets-work.component.scss',
})
export class HeroLetsWorkComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
