import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyectosInvestigacionPage } from './proyectos-investigacion.page';

describe('ProyectosInvestigacionPage', () => {
  let component: ProyectosInvestigacionPage;
  let fixture: ComponentFixture<ProyectosInvestigacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosInvestigacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectosInvestigacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
