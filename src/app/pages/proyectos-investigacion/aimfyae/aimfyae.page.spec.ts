import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AimfyaePage } from './aimfyae.page';

describe('AimfyaePage', () => {
  let component: AimfyaePage;
  let fixture: ComponentFixture<AimfyaePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimfyaePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AimfyaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
