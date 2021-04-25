import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrgentHealthPlanPage } from './urgent-health-plan.page';

describe('UrgentHealthPlanPage', () => {
  let component: UrgentHealthPlanPage;
  let fixture: ComponentFixture<UrgentHealthPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentHealthPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrgentHealthPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
