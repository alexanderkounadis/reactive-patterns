import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
courses$: Observable<Course[]>;
latestLessons$: Observable<Lesson[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.coursesService.findAllCourses();
    this.latestLessons$ = this.coursesService.findLatestLessons();
  }

}
