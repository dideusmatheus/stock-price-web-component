import { Component, h, State, Event, EventEmitter } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';


@Component({
  tag: 'md-stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true,
})
export class StockFinder {
  stockNameInput:  HTMLInputElement;

  @State() searchResponse: any[] = [];
  @State() error: string = '';

  @Event({bubbles: true, composed: true}) mdsymbolSelected: EventEmitter<any>;

  async onFindStocks(event: Event){
    event.preventDefault();

    const stockName = this.stockNameInput.value;

    try {
      const res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`);

      if (!res.ok) {
        throw new Error('Error fetching data. Please try again later.');
      }

      const parsedRes = await res.json();
      if (!parsedRes['bestMatches'] || Object.keys(parsedRes['bestMatches']).length === 0) {
        throw new Error('No results found.');
      }

      this.searchResponse = parsedRes['bestMatches'];
    } catch (err) {
      this.error = err.message;
      this.searchResponse = null;
    }
  }

  private formatValue(value: any): string {
    return value === 'null' || value === undefined ? 'N/A' : value;
  }

  onSelectSymbol(stock: any){
    const stockSymbol = stock['1. symbol'];
    this.mdsymbolSelected.emit(stockSymbol);
  }

  clearSearchResponse(){
    if (this.stockNameInput.value.trim() === '') {
      this.searchResponse = null;
    }
  }

  render() {
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input id="stock-symbol" ref={(el) => (this.stockNameInput = el)} onInput={this.clearSearchResponse.bind(this)} placeholder="Stock Finder"/>
        <button type="submit">Fetch</button>
      </form>,
      <div class="info">
        {this.searchResponse && this.searchResponse.length > 0 ? (this.searchResponse.map(item => (
            <div class="item-card" onClick={this.onSelectSymbol.bind(this, item)}>
              <div class="item-header">
                <span class="item-symbol"> {this.formatValue(item['1. symbol'])} </span>
                <span class="item-name"> {this.formatValue(item['2. name'])} </span>
              </div>
              <div class="item-details">
                <div><strong>Type:</strong> {this.formatValue(item['3. type'])} </div>
                <div><strong>Region:</strong> {this.formatValue(item['4. region'])} </div>
                <div><strong>Currency:</strong> {this.formatValue(item['8. currency'])} </div>
              </div>
            </div>
          ))
        ) : (
          this.error && <p class="no-results">{this.error}</p>
        )}
      </div>
    ];
  }
  
}
