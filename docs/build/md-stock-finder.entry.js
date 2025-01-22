import { r as registerInstance, a as createEvent, h } from './index-ac75c0d2.js';
import { A as AV_API_KEY } from './global-75b042d3.js';

const stockFinderCss = ":host{display:block;font-family:'Inter', sans-serif;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);margin:2rem auto;padding:1.5rem;max-width:400px;background-color:#ffffff;transition:transform 0.2s ease, box-shadow 0.2s ease}:host(:hover){transform:translateY(-2px);box-shadow:0 6px 12px rgba(0, 0, 0, 0.15)}form input{font:inherit;color:#333333;padding:0.5rem;margin-bottom:1rem;width:calc(100% - 1rem);border:1px solid #ccc;border-radius:6px;background-color:#f9f9f9;transition:border-color 0.2s ease, box-shadow 0.2s ease}form input:focus{outline:none;border-color:var(--color-primary);box-shadow:0 0 4px rgba(98, 0, 238, 0.4)}form button{font:inherit;padding:0.5rem 1rem;border:none;border-radius:6px;background-color:var(--color-primary);color:#ffffff;cursor:pointer;transition:background-color 0.3s ease, transform 0.2s ease;width:100%}form button:hover{background-color:var(--color-second);transform:translateY(-2px)}form button:focus{outline:none;box-shadow:0 0 6px rgba(98, 0, 238, 0.5)}form button:active{transform:translateY(1px)}form button:disabled{background-color:#ccc;cursor:not-allowed}.item{padding:1rem 0}.info{padding-top:1rem;display:grid;gap:15px}.item-card{padding:15px;border:1px solid #ddd;border-radius:8px;background-color:#fff;transition:transform 0.2s, box-shadow 0.2s}.item-card:hover{transform:translateY(-5px);box-shadow:0 6px 10px rgba(0, 0, 0, 0.15)}.item-header{display:flex;justify-content:space-between;margin-bottom:10px;font-size:18px;font-weight:bold}.item-symbol{color:var(--color-primary)}.item-name{color:#555}.item-details div{margin-bottom:5px;font-size:14px;color:#666}.no-results{font-size:16px;color:#999;text-align:center}";

const StockFinder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mdsymbolSelected = createEvent(this, "mdsymbolSelected", 7);
        this.searchResponse = [];
        this.error = '';
    }
    async onFindStocks(event) {
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
        }
        catch (err) {
            this.error = err.message;
            this.searchResponse = null;
        }
    }
    formatValue(value) {
        return value === 'null' || value === undefined ? 'N/A' : value;
    }
    onSelectSymbol(stock) {
        const stockSymbol = stock['1. symbol'];
        this.mdsymbolSelected.emit(stockSymbol);
    }
    clearSearchResponse() {
        if (this.stockNameInput.value.trim() === '') {
            this.searchResponse = null;
            this.error = '';
        }
    }
    render() {
        return [
            h("form", { key: '0d5bde11ed31c019c6903b6bad44224acaaedb60', onSubmit: this.onFindStocks.bind(this) }, h("input", { key: 'eb82df6349f954aa1d868ca4a45b88a6e3956b6c', id: "stock-symbol", ref: (el) => (this.stockNameInput = el), onInput: this.clearSearchResponse.bind(this), placeholder: "Stock Finder" }), h("button", { key: '377fe1c18af3ca559af88a0065d3bcf7de452191', type: "submit" }, "Fetch")),
            h("div", { key: '2413e90b863f9da9587b05d2d7f139e3b09d1420', class: "info" }, this.searchResponse && this.searchResponse.length > 0 ? (this.searchResponse.map(item => (h("div", { class: "item-card", onClick: this.onSelectSymbol.bind(this, item) }, h("div", { class: "item-header" }, h("span", { class: "item-symbol" }, " ", this.formatValue(item['1. symbol']), " "), h("span", { class: "item-name" }, " ", this.formatValue(item['2. name']), " ")), h("div", { class: "item-details" }, h("div", null, h("strong", null, "Type:"), " ", this.formatValue(item['3. type']), " "), h("div", null, h("strong", null, "Region:"), " ", this.formatValue(item['4. region']), " "), h("div", null, h("strong", null, "Currency:"), " ", this.formatValue(item['8. currency']), " ")))))) : (this.error && h("p", { class: "no-results" }, this.error)))
        ];
    }
};
StockFinder.style = stockFinderCss;

export { StockFinder as md_stock_finder };

//# sourceMappingURL=md-stock-finder.entry.js.map