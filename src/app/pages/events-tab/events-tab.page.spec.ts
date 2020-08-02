import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsTabPage } from './events-tab.page';

describe('EventsTabPage', () => {
  let component: EventsTabPage;
  let fixture: ComponentFixture<EventsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
