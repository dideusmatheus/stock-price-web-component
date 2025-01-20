import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'md-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {

  onFetchStockPrice(event: Event){
    event.preventDefault();
    console.log('submitted!')
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice}>
        <input id="stock-synbol" type="text" />
        <button type='submit'> Fetch </button>
      </form>,
      <div>
        <p> Price: { 0 } </p>
      </div>
    ];
  }
}
