import { TestBed } from '@angular/core/testing';
import { PersistentTask } from './persistent-task';

describe('PersistentTask', () => {
  let service: PersistentTask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistentTask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
