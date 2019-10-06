import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';
import { CoursesService } from 'app/services/courses.service';
import { NewsletterService } from 'app/services/newsletter.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute,
    private coursesService: CoursesService,
    private userService: UserService) { }

  ngOnInit() {
    this.course$ = this.route.params.switchMap(params =>
      this.coursesService.findCourseByUrl(params['id']))
      .first()
      .publishLast()
      .refCount();

    this.lessons$ = this.course$.switchMap(course =>
      this.coursesService.findLessonsForCourse(course.id))
      .first()
      .publishLast()
      .refCount();;
  }

  loginAsJohn() {
    this.userService.login('john@gmail.com', 'test123').subscribe();
  }

}
