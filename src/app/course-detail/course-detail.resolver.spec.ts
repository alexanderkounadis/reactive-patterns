/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseDetailResolver } from './course-detail.resolver';

describe('Service: CourseDetail.resolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailResolver]
    });
  });

  it('should ...', inject([CourseDetailResolver], (service: CourseDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
