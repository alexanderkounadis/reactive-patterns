/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LessonsPagerService } from './lessons-pager.service';

describe('Service: LessonsPager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonsPagerService]
    });
  });

  it('should ...', inject([LessonsPagerService], (service: LessonsPagerService) => {
    expect(service).toBeTruthy();
  }));
});
