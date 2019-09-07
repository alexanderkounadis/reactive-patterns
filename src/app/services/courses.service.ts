import { map, first } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.db.list('courses')
      .valueChanges()
      .first()
      .do(console.log);
  }

  findLatestLessons(): Observable<Lesson[]> {
    return this.db.list('lessons', ref => ref.orderByKey().limitToLast(10))
      .valueChanges()
      .first()
      .do(console.log);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.list('courses', ref => ref.orderByChild('url')
      .equalTo(courseUrl))
      .snapshotChanges()
      .pipe(map(changes => {
        const snap = changes[0];
        return <Course>{
          id: snap.payload.key,
          ...snap.payload.val()
        };
      }),
        first()
      )
  }

  findLessonsForCourse(courseId: string): Observable<Lesson[]> {
    return <any>this.db.list('lessons', ref => ref.orderByChild('courseId').equalTo(courseId))
      .valueChanges()
      .first();
  }


}
