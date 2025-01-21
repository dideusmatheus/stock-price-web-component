import { Component, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'md-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  stockInput: HTMLInputElement | null = null;

  @State() objResponse: any = null;
  @State() stockUserInput: string = '';
  @State() stockInputValid: boolean = false;
  @State() error: string = '';
  @State() loading: boolean = false;

  validateInput(input: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(input.trim());
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;

    if (!this.stockUserInput.trim()) {
      this.stockInputValid = false;
      this.error = null;
      this.objResponse = null;
      return;
    }

    this.stockInputValid = this.validateInput(this.stockUserInput);
    this.error = this.stockInputValid ? null : 'The symbol must contain only letters and numbers.';
    this.objResponse = null;
  }

  async onFetchStockPrice(event: Event) {
    event.preventDefault();

    if (!this.stockInputValid || !this.stockUserInput.trim()) {
      this.error = 'Please provide a stock symbol.';
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockUserInput}&apikey=${AV_API_KEY}`
      );

      if (!res.ok) {
        throw new Error('Error fetching data. Please try again later.');
      }

      const parsedRes = await res.json();
      if (!parsedRes['Global Quote'] || Object.keys(parsedRes['Global Quote']).length === 0) {
        throw new Error('Invalid or not found symbol.');
      }

      this.objResponse = parsedRes;
      this.stockUserInput = '';
    } catch (err) {
      this.error = err.message;
      this.objResponse = null;
    } finally {
      this.loading = false;
    }
  }

  render() {
    let dataContent = null;
  
    if (this.error) {
      dataContent = <p class="error">{this.error}</p>;
    } else if (this.objResponse) {
      const globalQuote = this.objResponse?.['Global Quote'];
      const price = globalQuote?.['05. price'] ?? 'N/A';
      const symbol = globalQuote?.['01. symbol'] ?? 'N/A';
  
      dataContent = (
        <div class="content">
          <p>Symbol: {symbol}</p>
          <p>Price: ${price}</p>
        </div>
      );
    }
  
    return (
      <div>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input
            id="stock-symbol"
            ref={(el) => (this.stockInput = el)}
            value={this.stockUserInput}
            onInput={this.onUserInput.bind(this)}
            placeholder="Enter stock symbol"
          />
          <button
            type="submit"
            disabled={!this.stockInputValid || this.loading}
            aria-busy={this.loading}
            aria-disabled={!this.stockInputValid || this.loading}
          >
            {this.loading ? 'Loading...' : 'Fetch'}
          </button>
        </form>
        <div>
        {dataContent}
        </div>
      </div>
    );
  }
  
}
