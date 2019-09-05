/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoursesHttpService } from './courses-http.service';

describe('Service: CoursesHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesHttpService]
    });
  });

  it('should ...', inject([CoursesHttpService], (service: CoursesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
