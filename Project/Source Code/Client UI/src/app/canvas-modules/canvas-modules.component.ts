import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-modules',
  templateUrl: './canvas-modules.component.html',
  styleUrls: ['./canvas-modules.component.scss']
})
export class CanvasModulesComponent implements OnInit {

  modules= [{
    "module":"Student Resources Getting started",
    "items":[{
      "name":"General Course Discussion",
    },{
      "name":"Tech Support",
    },{
      "name":"Plagiarism",
    },]
  },{
    "module":"Module One",
    "items":[{
      "name":"Web_Lesson1",
    },{
      "name":"ICP1_Presentation",
    },{
      "name":"Lesson_ICP1",
    },]
  },{
    "module":"Module Two",
    "items":[{
      "name":"Web_Lesson2",
    },{
      "name":"ICP2_Presentation",
    },{
      "name":"Lesson_ICP2",
    },]
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
