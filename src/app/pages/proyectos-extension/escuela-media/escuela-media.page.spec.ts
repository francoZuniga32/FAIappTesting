import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscuelaMediaPage } from './escuela-media.page';

describe('EscuelaMediaPage', () => {
  let component: EscuelaMediaPage;
  let fixture: ComponentFixture<EscuelaMediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelaMediaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscuelaMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
