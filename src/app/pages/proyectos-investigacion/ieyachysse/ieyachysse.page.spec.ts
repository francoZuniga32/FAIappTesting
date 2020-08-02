import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IeyachyssePage } from './ieyachysse.page';

describe('IeyachyssePage', () => {
  let component: IeyachyssePage;
  let fixture: ComponentFixture<IeyachyssePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeyachyssePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IeyachyssePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
