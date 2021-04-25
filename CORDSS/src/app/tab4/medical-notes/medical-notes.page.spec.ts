import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalNotesPage } from './medical-notes.page';

describe('MedicalNotesPage', () => {
  let component: MedicalNotesPage;
  let fixture: ComponentFixture<MedicalNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
