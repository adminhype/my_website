import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', icon: './images/skills/Icons s2.png' },
    { name: 'TypeScript', icon: './images/skills/Icons s2 (1).png' },
    { name: 'JavaScript', icon: './images/skills/Icons s2 (2).png' },
    { name: 'HTML', icon: './images/skills/Icons s2 (3).png' },
    { name: 'Git', icon: './images/skills/git.png' },
    { name: 'CSS', icon: './images/skills/Icons s2 (6).png' },
    { name: 'REST-API', icon: './images/skills/Api.png' },
  ];
}
