import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {

  constructor(private http: Http) { }

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get(`/api/courses/${courseId}`)
      .map(res => res.json());
  }

  findLessonDetailById(lessonId: number): Observable<Lesson> {
    return this.http.get(`/api/lessons/${lessonId}`)
      .map(res => res.json());
  }

}
