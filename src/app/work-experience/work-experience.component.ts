import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Associate Software Developer',
      company: 'Biz2Credit',
      duration: 'July 2023 - Now',
      description: [
        'Working to develop software for Biz2Credit',
        'Working to develop new technologies to make life easier.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
