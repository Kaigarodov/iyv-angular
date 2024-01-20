import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPushComponentComponent } from './parent-push-component.component';

describe('ParentPushComponentComponent', () => {
  let component: ParentPushComponentComponent;
  let fixture: ComponentFixture<ParentPushComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentPushComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentPushComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
