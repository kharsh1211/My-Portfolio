import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Weather Application',
      technologies: 'HTML ,CSS, JavaScript and React.js',
      description: [
        'Used an API from open weather map website to get information about the weather of a particular place.',
        'Used React.js for frontend.',
      ]
    },
    {
      title: 'Face mask detection system',
      technologies: 'Python,Support Vector Machine(SVM)',
      description: [
        'A face mask detection system categorizes as an image classification problem.',
        'Got to learn about Training Datasets',
      ],
    },
    {
      title: 'Music Player App',
      technologies: 'Java',
      description: [
        'This Application makes you listen music.',
        'To implement this project, we need Android Studio..',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
