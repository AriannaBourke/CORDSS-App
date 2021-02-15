import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentMedicinesPage } from './current-medicines.page';

describe('CurrentMedicinesPage', () => {
  let component: CurrentMedicinesPage;
  let fixture: ComponentFixture<CurrentMedicinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMedicinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentMedicinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
