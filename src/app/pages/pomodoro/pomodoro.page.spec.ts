import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PomodoroPage } from './pomodoro.page';

describe('PomodoroPage', () => {
  let component: PomodoroPage;
  let fixture: ComponentFixture<PomodoroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PomodoroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
