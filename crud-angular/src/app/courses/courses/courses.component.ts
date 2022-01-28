import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns = ['name', 'category']

  //courseService: CoursesService;

  constructor
  (
    private httpCliente: HttpClient,
    private courseService: CoursesService
  ) {
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {
  }

}
