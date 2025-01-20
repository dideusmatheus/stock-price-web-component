import { Component, h , State} from '@stencil/core';

import { AV_API_KEY } from '../../global/global';
@Component({
  tag: 'md-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  stockInput : HTMLInputElement;

  @State() objResponse: any = null; // escuta as alterações dinamicamente
  @State()

  onFetchStockPrice(event: Event){
    event.preventDefault();

    const stockSymbol = this.stockInput.value;

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
    .then( res => {
      return res.json()
    })
    .then( parsedREs => {
      this.objResponse = parsedREs;
      console.log(this.objResponse);
    })
    .catch(error => {
      console.log('error: ', error);
    });
  }

  render() {
    const price = this.objResponse?.['Global Quote']?.['05. price'] ?? 'N/A';
    const symbol = this.objResponse?.['Global Quote']?.['01. symbol'] ?? 'N/A';
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol" type="text" ref={el => this.stockInput = el}/>
        <button type='submit'> Fetch </button>
      </form>,
      <div>
        <p> Symbol: { symbol } </p>
        <p> Price: ${ price } </p>
      </div>
    ];
  }
}
