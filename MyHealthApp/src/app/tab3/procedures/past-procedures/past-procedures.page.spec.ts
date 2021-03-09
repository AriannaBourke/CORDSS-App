import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastProceduresPage } from './past-procedures.page';

describe('PastProceduresPage', () => {
  let component: PastProceduresPage;
  let fixture: ComponentFixture<PastProceduresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastProceduresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastProceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
