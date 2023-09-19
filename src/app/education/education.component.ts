import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Netaji Subhas University Of Technology",
      course: 'Bachelor of Technology(CSE)',
      duration: '2019-2023',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
