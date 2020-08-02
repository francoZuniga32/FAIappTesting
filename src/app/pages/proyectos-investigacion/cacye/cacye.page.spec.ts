import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CacyePage } from './cacye.page';

describe('CacyePage', () => {
  let component: CacyePage;
  let fixture: ComponentFixture<CacyePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacyePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CacyePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
