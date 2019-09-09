import { CoursesService } from 'app/services/courses.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailResolver implements Resolve<[Course, Lesson[]]>{

  constructor(private coursesService: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[Course, Lesson[]]> {
    return this.coursesService.findCourseByUrl(route.params['id']).switchMap(course =>
      this.coursesService.findLessonsForCourse(course.id).map(lessons => <any>[course, lessons]));
  }

}
