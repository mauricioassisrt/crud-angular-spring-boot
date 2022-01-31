import {Injectable} from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, first, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {
  }

  private readonly API = '/assets/courses.json';

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
