import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiTaskList } from './api-task-list';

describe('ApiTaskList', () => {
  let component: ApiTaskList;
  let fixture: ComponentFixture<ApiTaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTaskList],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
