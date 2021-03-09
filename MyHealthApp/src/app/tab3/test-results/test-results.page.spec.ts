import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestResultsPage } from './test-results.page';

describe('TestResultsPage', () => {
  let component: TestResultsPage;
  let fixture: ComponentFixture<TestResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
