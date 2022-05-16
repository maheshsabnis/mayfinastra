import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HighlightDirective } from './app.highlight.directive';
import { HighLightComponent } from './../components/directiveusecomponent/app.about.component';

describe('THE DIRECTIVE MUST ACCEPT THE COLOR PASSED TO IT', () => {
  let component: HighLightComponent;
  let fixture: ComponentFixture<HighLightComponent>;
  beforeEach(() => {
    // get the NgModule for Testing Env
    TestBed.configureTestingModule({
      declarations: [HighLightComponent, HighlightDirective],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(HighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should have red <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('red');
  });

});
