import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThoughtsFeelingsPage } from './thoughts-feelings.page';

describe('ThoughtsFeelingsPage', () => {
  let component: ThoughtsFeelingsPage;
  let fixture: ComponentFixture<ThoughtsFeelingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtsFeelingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThoughtsFeelingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
