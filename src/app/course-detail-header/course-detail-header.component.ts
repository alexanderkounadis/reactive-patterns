import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';

@Component({
  selector: 'course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.css']
})
export class CourseDetailHeaderComponent {

  @Input()
  course: Course;
  @Input()
  lessons: Lesson[];
  @Input()
  firstName: string;
  @Output()
  subscribe = new EventEmitter();

  constructor() { }

  onSubscribe(email: string){
    this.subscribe.emit(email);
  }
}
