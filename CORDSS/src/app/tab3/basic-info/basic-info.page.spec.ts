import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicInfoPage } from './basic-info.page';

describe('BasicInfoPage', () => {
  let component: BasicInfoPage;
  let fixture: ComponentFixture<BasicInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
