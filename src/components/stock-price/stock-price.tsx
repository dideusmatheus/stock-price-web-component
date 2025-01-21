import { Component, h, State, Prop } from '@stencil/core';
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

  @Prop() stockSymbol: string = '';

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

    this.fetchStockPrice();
  }

  async fetchStockPrice(){
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
      // this.stockUserInput = '';
      // this.stockInputValid = true;
    } catch (err) {
      this.error = err.message;
      this.objResponse = null;
    } finally {
      this.loading = false;
    }
  }

  formatDollar(value: any): string {
    const numericValue = parseFloat(value);
    if(!value){
      return 'N/A';
    }

    const valueString = numericValue.toString();
    const [integerPart, decimalPart = ''] = valueString.split('.');

    const truncatedDecimal = decimalPart.substring(0, 2).padEnd(2, '0');
    return `$${integerPart},${truncatedDecimal}`;
  }

  formatDate(dateString: string): string {
    if(!dateString){
      return 'N/A';
    }
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  // All lifecycle hooks
  //function is called before render()
  componentWillLoad(){
    console.log('componentWillLoad');
  }
  componentDidLoad() {
    if (this.stockSymbol) {
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = this.validateInput(this.stockSymbol);
      if (this.stockInputValid) {
        this.fetchStockPrice();
      } else {
        this.error = 'Invalid stock symbol.';
      }
    }
  }
  
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }  
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  // componentDidUnload(){
  //   console.log('componentDidUpdate');
  // }

  render() {
    let dataContent = null;
  
    if (this.error) {
      dataContent = <p class="error">{this.error}</p>;
    } else if (this.objResponse) {
      const globalQuote = this.objResponse?.['Global Quote'];
      const symbol = globalQuote?.['01. symbol'] ?? 'N/A';
      const price = this.formatDollar(globalQuote?.['05. price']);
      const lastestDay = this.formatDate(globalQuote?.['07. latest trading day']);
      const open = this.formatDollar(globalQuote?.['02. open']);
      const high = this.formatDollar(globalQuote?.['03. high']);
      const low = this.formatDollar(globalQuote?.['04. low']);
  
      dataContent = (
        <div class="content">
          <div class="info">
            <p class="info-title">Symbol:</p>
            <p class="info-value">{symbol}</p>
          </div>
          <div class="info">
            <p class="info-title">Price:</p>
            <p class="info-value">{price}</p>
          </div>
          <div class="info">
            <p class="info-title">Open:</p>
            <p class="info-value">{open}</p>
          </div>
          <div class="info">
            <p class="info-title">High:</p>
            <p class="info-value">{high}</p>
          </div>
          <div class="info">
            <p class="info-title">Low:</p>
            <p class="info-value">{low}</p>
          </div>
          <div class="info">
            <p class="info-title">Latest trading day:</p>
            <p class="info-value">{lastestDay}</p>
          </div>
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
