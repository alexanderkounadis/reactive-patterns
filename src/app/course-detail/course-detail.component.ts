import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
course$: Observable<Course>;
lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.course$ = this.route.data.map(data => data['detail'][0]);
    this.lessons$ = this.route.data.map(data => data['detail'][1]);
  }

}
