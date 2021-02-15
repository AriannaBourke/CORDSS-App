import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastMedicinesPage } from './past-medicines.page';

describe('PastMedicinesPage', () => {
  let component: PastMedicinesPage;
  let fixture: ComponentFixture<PastMedicinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastMedicinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastMedicinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
