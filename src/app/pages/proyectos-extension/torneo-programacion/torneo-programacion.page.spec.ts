import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TorneoProgramacionPage } from './torneo-programacion.page';

describe('TorneoProgramacionPage', () => {
  let component: TorneoProgramacionPage;
  let fixture: ComponentFixture<TorneoProgramacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneoProgramacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TorneoProgramacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
