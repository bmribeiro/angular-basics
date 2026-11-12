import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersistentTaskList } from './persistent-task-list';

describe('PersistentTaskList', () => {
  let component: PersistentTaskList;
  let fixture: ComponentFixture<PersistentTaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistentTaskList],
    }).compileComponents();

    fixture = TestBed.createComponent(PersistentTaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
