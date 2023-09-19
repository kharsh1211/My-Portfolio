import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'React.js',
      level: 'Interbmidiate',
      rating: 60,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'JAVA',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'C++',
      level: 'Expert',
      rating: 90,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
