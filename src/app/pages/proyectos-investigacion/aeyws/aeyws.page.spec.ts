import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AeywsPage } from './aeyws.page';

describe('AeywsPage', () => {
  let component: AeywsPage;
  let fixture: ComponentFixture<AeywsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeywsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AeywsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
