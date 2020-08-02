import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AciisPage } from './aciis.page';

describe('AciisPage', () => {
  let component: AciisPage;
  let fixture: ComponentFixture<AciisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AciisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AciisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
