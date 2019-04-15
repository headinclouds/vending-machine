import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = new AppComponent();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Vending machine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Vending machine');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Vending machine!');
  });

  it(`should return correct change if all coins present`, () => {
    let listCoinsInMachine = [10, 20, 50, 100, 200];
    component.waysToReturnChange(listCoinsInMachine, listCoinsInMachine.length - 1, 80);
    expect(component.resultChangeArr).toEqual([50, 20, 10]);
  });

  it(`should throw an error if not enough coins`, () => {
    let listCoinsInMachine = [200];
    component.waysToReturnChange(listCoinsInMachine, listCoinsInMachine.length - 1, 30);
    expect(component.error).toEqual(`We don\'t have coins left!`);
  });

  it(`should throw an error if not correct coin inserted`, () => {
    component.model.amount = 150;
    component.onSubmit();
    expect(component.error).toEqual(`Not correct coin`);
  });

  it(`should throw an error if input is not enough`, () => {
    component.model.amount = 100;
    component.model.drinkNumber = 5;
    component.onSubmit();
    expect(component.error).toEqual(`Input is not enough`);
  });

  it(`should throw an error if drink is sold out`, () => {
    component.model.amount = 200;
    component.model.drinkNumber = 6;
    component.onSubmit();
    expect(component.error).toEqual(`Drink is sold out`);
  });

  
});
