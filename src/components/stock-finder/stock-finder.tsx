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

      this.searchResponse = parsedRes['bestMatches'];
      // this.searchResponse = 
      //   [
      //     {
      //       "1. symbol": "BA",
      //       "2. name": "Boeing Company",
      //       "3. type": "Equity",
      //       "4. region": "United States",
      //       "5. marketOpen": "09:30",
      //       "6. marketClose": "16:00",
      //       "7. timezone": "UTC-04",
      //       "8. currency": "USD",
      //       "9. matchScore": "1.0000"
      //     },
      //     {
      //       "1. symbol": "BA.LON",
      //       "2. name": "BAE Systems plc",
      //       "3. type": "Equity",
      //       "4. region": "United Kingdom",
      //       "5. marketOpen": "08:00",
      //       "6. marketClose": "16:30",
      //       "7. timezone": "UTC+01",
      //       "8. currency": "GBX",
      //       "9. matchScore": "0.6667"
      //     },
      //     {
      //       "1. symbol": "BA05.LON",
      //       "2. name": "BA05",
      //       "3. type": "Equity",
      //       "4. region": "United Kingdom",
      //       "5. marketOpen": "08:00",
      //       "6. marketClose": "16:30",
      //       "7. timezone": "UTC+01",
      //       "8. currency": "GBP",
      //       "9. matchScore": "0.6667"
      //     },
      //     {
      //       "1. symbol": "BA29.LON",
      //       "2. name": "BA29",
      //       "3. type": "Equity",
      //       "4. region": "United Kingdom",
      //       "5. marketOpen": "08:00",
      //       "6. marketClose": "16:30",
      //       "7. timezone": "UTC+01",
      //       "8. currency": "GBP",
      //       "9. matchScore": "0.6667"
      //     },
      //     {
      //       "1. symbol": "BA69.LON",
      //       "2. name": "BA69",
      //       "3. type": "Equity",
      //       "4. region": "United Kingdom",
      //       "5. marketOpen": "08:00",
      //       "6. marketClose": "16:30",
      //       "7. timezone": "UTC+01",
      //       "8. currency": "GBP",
      //       "9. matchScore": "0.6667"
      //     },
      //     {
      //       "1. symbol": "BA3.FRK",
      //       "2. name": "Brooks Automation Inc",
      //       "3. type": "Equity",
      //       "4. region": "Frankfurt",
      //       "5. marketOpen": "08:00",
      //       "6. marketClose": "20:00",
      //       "7. timezone": "UTC+02",
      //       "8. currency": "EUR",
      //       "9. matchScore": "0.5714"
      //     },
      //     {
      //       "1. symbol": "BAAPL",
      //       "2. name": "null",
      //       "3. type": "Equity",
      //       "4. region": "United States",
      //       "5. marketOpen": "09:30",
      //       "6. marketClose": "16:00",
      //       "7. timezone": "UTC-04",
      //       "8. currency": "USD",
      //       "9. matchScore": "0.5714"
      //     },
      //     {
      //       "1. symbol": "BAAPV",
      //       "2. name": "null",
      //       "3. type": "Equity",
      //       "4. region": "United States",
      //       "5. marketOpen": "09:30",
      //       "6. marketClose": "16:00",
      //       "7. timezone": "UTC-04",
      //       "8. currency": "USD",
      //       "9. matchScore": "0.5714"
      //     },
      //     {
      //       "1. symbol": "BAAAAX",
      //       "2. name": "Building America Strategy Port CDA USD Ser 21/1Q MNT CASH",
      //       "3. type": "Mutual Fund",
      //       "4. region": "United States",
      //       "5. marketOpen": "09:30",
      //       "6. marketClose": "16:00",
      //       "7. timezone": "UTC-04",
      //       "8. currency": "USD",
      //       "9. matchScore": "0.5000"
      //     },
      //     {
      //       "1. symbol": "BAAAFX",
      //       "2. name": "Building America Strgy Portf CDA USD Ser 2022/2Q MNT CASH",
      //       "3. type": "Mutual Fund",
      //       "4. region": "United States",
      //       "5. marketOpen": "09:30",
      //       "6. marketClose": "16:00",
      //       "7. timezone": "UTC-04",
      //       "8. currency": "USD",
      //       "9. matchScore": "0.5000"
      //     }
      //   ];
      console.log('objResponse', this.searchResponse)
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

  render() {
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input id="stock-symbol" ref={(el) => (this.stockNameInput = el)}  placeholder="Stock Finder"/>
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
          <p class="no-results"> {this.error ? this.error : 'No results found'} </p>
        )}
      </div>
    ];
  }
  
}
