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
  course: Course;
  lessons: Lesson[];

  constructor(private route: ActivatedRoute, 
              private coursesService: CoursesService,
              private newsletterService: NewsletterService,
              private userService: UserService) { 
            
              }
    
    onSubscribe(email: string){
      this.newsletterService.subscribeToNewsletter(email)
      .subscribe(()=> {
        alert('Subscription successful...');
      }, error => console.error);
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const courseUrl = params['id'];
      this.coursesService.findCourseByUrl(courseUrl)
      .subscribe(data => {
        this.course = data;
        this.coursesService.findLessonsForCourse(this.course.id)
        .subscribe(lessons => this.lessons = lessons);
      });
    });
  }

}
