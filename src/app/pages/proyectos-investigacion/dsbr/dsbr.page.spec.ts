import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DsbrPage } from './dsbr.page';

describe('DsbrPage', () => {
  let component: DsbrPage;
  let fixture: ComponentFixture<DsbrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsbrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DsbrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
