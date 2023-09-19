import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Kumar Harsh'],
    ['DOB', '12/11/2001'],
    ['Work Exp', '2 months'],
    ['Education', 'B.Tech'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 2 months of experience in software industry.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, Working as Associate Software Engineer in Biz2credit.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
