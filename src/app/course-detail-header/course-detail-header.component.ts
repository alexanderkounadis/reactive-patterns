import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';

@Component({
  selector: 'course-detail-header',
  templateUrl: './course-detail-header.component.html',
  styleUrls: ['./course-detail-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailHeaderComponent {

  @Input()
  course: Course;
  @Input()
  lessons: Lesson[];
 

  constructor() { }
  }
