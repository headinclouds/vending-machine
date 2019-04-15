import { Component } from '@angular/core';
import { Coins } from './coins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vending machine';
  total: number = 0;
  error: string = '';
  drinkNumber: number;
  yourChange: number = 0;
  drinkName: string;
  resultChangeArr: Array<number> = [];
  firstMatch: boolean = false;
  model = new Coins('', '');
  newDrink: number;

  listDrinks = [
    { name: 'Water', cost: 10, drinkNumber: 1, exist: true },
    { name: 'Cola', cost: 30, drinkNumber: 2, exist: true },
    { name: 'Pepsi', cost: 40, drinkNumber: 3, exist: true },
    { name: 'Cold Tea', cost: 90, drinkNumber: 4, exist: true },
    { name: 'Cold Tea1', cost: 120, drinkNumber: 5, exist: true },
    { name: 'Coffee', cost: 190, drinkNumber: 6, exist: false },
    { name: 'Latte', cost: 170, drinkNumber: 7, exist: true }
  ];
  listCoinsInMachine = [10, 20, 50, 100, 200];


  onSubmit() {
    this.resetValues();
    if (this.model.amount === 100 || this.model.amount === 200
      || this.model.amount === 10 || this.model.amount === 20 || this.model.amount === 50) {
      this.total = this.model.amount;
      this.model.amount = '';
      if (this.model.drinkNumber) {
        this.listDrinks.filter((drink) => {
          if (drink.drinkNumber === this.model.drinkNumber) {
            if (this.total >= drink.cost && drink.exist) {
              this.drinkName = drink.name;
              drink.exist = false;
              this.yourChange = this.total - drink.cost;
            }
            else if (this.total < drink.cost) {
              this.error = 'Input is not enough';
            }
            else if (!drink.exist) {
              this.error = 'Drink is sold out';
            }
          }
        })
        if (this.yourChange) {
          this.waysToReturnChange(this.listCoinsInMachine, this.listCoinsInMachine.length - 1, this.yourChange);
        }
      }
    }
    else {
      this.error = 'Not correct coin';
    }

  }

  onSubmitDrink(){
    this.listDrinks.filter((drink) => {
      if (drink.drinkNumber === this.newDrink) {
        drink.exist = true;
      }})
  }

  private resetValues() {
    this.firstMatch = false;
    this.resultChangeArr = [];
    this.error = '';
    this.yourChange = 0;
  }

  waysToReturnChange(denominations, numOfCoins, amount) {
    if (amount === 0) {
      this.firstMatch = true;
      return 1;
    }

    if (!this.firstMatch) {
      if (amount < 0) { return 0 };

      if (numOfCoins < 0 && amount > 0) {
        this.error = 'We don\'t have coins left!';
        return 0;
      }
      if (amount >= denominations.slice(numOfCoins)[0]) {
        this.resultChangeArr.push(denominations.slice(numOfCoins)[0]);
      }
      return this.waysToReturnChange(denominations, numOfCoins, amount - denominations[numOfCoins]) +
        this.waysToReturnChange(denominations, numOfCoins - 1, amount);
    }
  }
}
