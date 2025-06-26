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
    { name: 'Angular', icon: '/assets/images/skills/Icons s2.png' },
    { name: 'TypeScript', icon: '/assets/images/skills/Icons s2 (1).png' },
    { name: 'JavaScript', icon: '/assets/images/skills/Icons s2 (2).png' },
    { name: 'HTML', icon: '/assets/images/skills/Icons s2 (3).png' },
    { name: 'Git', icon: '/assets/images/skills/git.png' },
    { name: 'CSS', icon: '/assets/images/skills/Icons s2 (6).png' },
    { name: 'REST-API', icon: '/assets/images/skills/Api.png' },
  ];
}
