import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyFamilyPage } from './my-family.page';

describe('MyFamilyPage', () => {
  let component: MyFamilyPage;
  let fixture: ComponentFixture<MyFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFamilyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
