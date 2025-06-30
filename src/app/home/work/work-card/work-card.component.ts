import { Component, Input } from '@angular/core';
export interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-work-card',
  imports: [],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
})
export class WorkCardComponent {
  @Input() project!: Project;
}
