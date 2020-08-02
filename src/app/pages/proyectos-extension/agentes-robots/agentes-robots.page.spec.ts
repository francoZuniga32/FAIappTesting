import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentesRobotsPage } from './agentes-robots.page';

describe('AgentesRobotsPage', () => {
  let component: AgentesRobotsPage;
  let fixture: ComponentFixture<AgentesRobotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentesRobotsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentesRobotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
