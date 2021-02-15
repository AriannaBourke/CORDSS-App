import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyClinicalTeamPage } from './my-clinical-team.page';

describe('MyClinicalTeamPage', () => {
  let component: MyClinicalTeamPage;
  let fixture: ComponentFixture<MyClinicalTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClinicalTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyClinicalTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
