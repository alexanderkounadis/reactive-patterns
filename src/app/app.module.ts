import { CoursesService } from './services/courses.service';
import { NewsletterService } from './services/newsletter.service';
import { MessagesService } from './services/messages.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {RouterModule} from '@angular/router';
import {routerConfig} from "./router.config";
import {SafeUrlPipe} from "./shared/pipes/safe-url.pipe";
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { UserService } from './services/user.service';
import { CoursesHttpService } from './services/courses-http.service';
import { LessonsPagerService } from './services/lessons-pager.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseComponent } from './course/course.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        SafeUrlPipe,
        TopMenuComponent,
        LoadingComponent,
        MessagesComponent,
        HomeComponent,
        LoginComponent,
        AllLessonsComponent,
        CourseDetailComponent,
        CreateLessonComponent,
        CoursesListComponent,
        LessonsListComponent,
        CourseComponent,
        LessonDetailComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(routerConfig),
        ReactiveFormsModule,
        AngularFireDatabaseModule
    ],
    providers: [
        UserService,
        MessagesService,
        NewsletterService,
        CoursesService,
        CoursesHttpService,
        LessonsPagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}






