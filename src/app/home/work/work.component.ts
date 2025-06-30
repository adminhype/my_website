import { Component } from '@angular/core';
import { Project, WorkCardComponent } from './work-card/work-card.component';

@Component({
  selector: 'app-work',
  imports: [WorkCardComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspiriert vom Kanban-System mit Drag-and-Drop.',
      imageUrl: '/assets/images/work/Property 1=join photo.png',
      githubUrl: 'https://www.google.com',
    },
    {
      id: 2,
      title: 'Crypto Converter',
      tech: 'Angular | RxJS | APIs',
      description: 'Live-Umrechnung von Krypto-Werten über externe APIs.',
      imageUrl: '/assets/images/work/Property 1=Crypto converter photo.png',
      githubUrl: 'https://www.google.com',
    },
  ];
}
