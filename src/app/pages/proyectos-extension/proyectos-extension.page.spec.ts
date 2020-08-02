import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyectosExtensionPage } from './proyectos-extension.page';

describe('ProyectosExtensionPage', () => {
  let component: ProyectosExtensionPage;
  let fixture: ComponentFixture<ProyectosExtensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosExtensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectosExtensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
