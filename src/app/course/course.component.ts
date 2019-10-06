import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';
import { CoursesHttpService } from 'app/services/courses-http.service';
import { LessonsPagerService } from 'app/services/lessons-pager.service';
import { MessagesService } from 'app/services/messages.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [LessonsPagerService]
})
export class CourseComponent implements OnInit {

  @Input()
  id: number;

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  detail$: Observable<Lesson>;

  constructor(private coursesService: CoursesHttpService,
              private lessonsPager: LessonsPagerService,
              private messagesService: MessagesService) { }

  ngOnInit() {
    this.course$ = this.coursesService.findCourseById(this.id);
    this.lessons$ = this.lessonsPager.lessonsPage$;

    this.lessonsPager.loadFirstPage(this.id)
      .subscribe(() => {},
      err => this.messagesService.error('Could not load first page'));
  }

  nextLessonsPage() {
    this.lessonsPager.next().subscribe(
      () => {},
      err => this.messagesService.error('Could not load next page')
    );
  }

  previousLessonsPage() {
    this.lessonsPager.previous().subscribe(
      () => {},
      err => this.messagesService.error('Could not load previous page')
    );
  }

  selectDetail(lesson: Lesson) {
    this.detail$ = this.coursesService.findLessonDetailById(lesson.url);
  }

  backToMaster(){
    this.detail$ = undefined;
  }
  
  ngOnDestroy(): void {
    console.log('destroying course component');
  }


}
