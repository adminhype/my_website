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
      imageUrl: './images/work/Property 1=join photo.png',
      githubUrl: 'https://github.com/adminhype',
    },
    {
      id: 2,
      title: 'Crypto Converter',
      tech: 'Angular | RxJS | APIs',
      description: 'Live-Umrechnung von Krypto-Werten über externe APIs.',
      imageUrl: './images/work/Property 1=Crypto converter photo.png',
      githubUrl: 'https://github.com/adminhype',
    },
    {
      id: 3,
      title: 'Pokedex',
      tech: 'Javascript | HTML | CSS | API',
      description: 'Pokedex von Pokemon über externe APIs.',
      imageUrl: './images/work/Property 1=Pokédex photo.png',
      githubUrl: 'https://github.com/adminhype',
    },
    {
      id: 4,
      title: 'El-Polloco',
      tech: 'Javascript | HTML | CSS',
      description:
        '2D Jump & Run game aufgebaut auf objekt orientiertes programmieren',
      imageUrl: './images/work/Property 1=Pollo loco photo.png',
      githubUrl: 'https://github.com/adminhype',
    },
  ];
}
