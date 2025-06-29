import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';
@Component({
  selector: 'app-hero-intro',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './hero-intro.component.html',
  styleUrl: './hero-intro.component.scss',
})
export class HeroIntroComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
