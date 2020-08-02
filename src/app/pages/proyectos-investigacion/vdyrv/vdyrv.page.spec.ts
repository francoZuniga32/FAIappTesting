import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VdyrvPage } from './vdyrv.page';

describe('VdyrvPage', () => {
  let component: VdyrvPage;
  let fixture: ComponentFixture<VdyrvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdyrvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VdyrvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
