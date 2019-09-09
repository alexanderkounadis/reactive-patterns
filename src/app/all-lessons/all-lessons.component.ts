import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'app/shared/model/course';
import { Lesson } from 'app/shared/model/lesson';
import { CoursesHttpService } from 'app/services/courses-http.service';
import { LessonsPagerService } from 'app/services/lessons-pager.service';
import { MessagesService } from 'app/services/messages.service';

@Component({
  selector: 'all-lessons',
  templateUrl: './all-lessons.component.html',
  styleUrls: ['./all-lessons.component.css']
})
export class AllLessonsComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
  }
  
}
