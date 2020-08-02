import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArvrPage } from './arvr.page';

describe('ArvrPage', () => {
  let component: ArvrPage;
  let fixture: ComponentFixture<ArvrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArvrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArvrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
