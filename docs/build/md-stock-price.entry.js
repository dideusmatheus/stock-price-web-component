import { r as registerInstance, h } from './index-ac75c0d2.js';
import { A as AV_API_KEY } from './global-75b042d3.js';

const stockPriceCss = ":host{display:block;font-family:'Inter', sans-serif;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);margin:2rem auto;padding:1.5rem;max-width:400px;background-color:#ffffff;transition:transform 0.2s ease, box-shadow 0.2s ease}:host(:hover){transform:translateY(-2px);box-shadow:0 6px 12px rgba(0, 0, 0, 0.15)}form input{font:inherit;color:#333333;padding:0.5rem;margin-bottom:1rem;width:calc(100% - 1rem);border:1px solid #ccc;border-radius:6px;background-color:#f9f9f9;transition:border-color 0.2s ease, box-shadow 0.2s ease}form input:focus{outline:none;border-color:var(--color-primary);box-shadow:0 0 4px rgba(98, 0, 238, 0.4)}form button{font:inherit;padding:0.5rem 1rem;border:none;border-radius:6px;background-color:var(--color-primary);color:#ffffff;cursor:pointer;transition:background-color 0.3s ease, transform 0.2s ease;width:100%}form button:hover{background-color:var(--color-second);transform:translateY(-2px)}form button:focus{outline:none;box-shadow:0 0 6px rgba(98, 0, 238, 0.5)}form button:active{transform:translateY(1px)}form button:disabled{background-color:#ccc;cursor:not-allowed}.content{padding-top:1rem}.info{display:flex}.info-title{width:45%;margin:0;font-weight:bold;color:var(--color-primary)}.info-value{width:55%;margin:0;padding-left:1rem}.error{padding-top:1rem;color:red;font-weight:bold;font-size:1rem;text-align:center}";

const StockPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stockInput = null;
        this.objResponse = null;
        this.stockUserInput = '';
        this.stockInputValid = false;
        this.error = '';
        this.loading = false;
        this.stockSymbol = '';
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.stockInputValid = true;
            this.fetchStockPrice();
        }
    }
    validateInput(input) {
        return /^[a-zA-Z0-9]+$/.test(input.trim());
    }
    onUserInput(event) {
        this.stockUserInput = event.target.value;
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
    onFetchStockPrice(event) {
        event.preventDefault();
        if (!this.stockInputValid || !this.stockUserInput.trim()) {
            this.error = 'Please provide a stock symbol.';
            return;
        }
        this.loading = true;
        this.error = null;
        this.fetchStockPrice();
    }
    async fetchStockPrice() {
        try {
            const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockUserInput}&apikey=${AV_API_KEY}`);
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
        }
        catch (err) {
            this.error = err.message;
            this.objResponse = null;
            this.loading = false;
        }
        finally {
            this.loading = false;
        }
    }
    formatDollar(value) {
        const numericValue = parseFloat(value);
        if (!value) {
            return 'N/A';
        }
        const valueString = numericValue.toString();
        const [integerPart, decimalPart = ''] = valueString.split('.');
        const truncatedDecimal = decimalPart.substring(0, 2).padEnd(2, '0');
        return `$${integerPart},${truncatedDecimal}`;
    }
    formatDate(dateString) {
        if (!dateString) {
            return 'N/A';
        }
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
    // All lifecycle hooks
    //function is called before render()
    componentWillLoad() {
        console.log('componentWillLoad');
    }
    componentDidLoad() {
        if (this.stockSymbol) {
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = this.validateInput(this.stockSymbol);
            if (this.stockInputValid) {
                this.fetchStockPrice();
            }
            else {
                this.error = 'Invalid stock symbol.';
            }
        }
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    // componentDidUnload(){
    //   console.log('componentDidUpdate');
    // }
    onStockSymbolSelected(event) {
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    }
    render() {
        var _a, _b;
        let dataContent = null;
        if (this.error) {
            dataContent = h("p", { key: '1ed10321f99fd851dccf2eff13cebf316d9685aa', class: "error" }, this.error);
        }
        else if (this.objResponse) {
            const globalQuote = (_a = this.objResponse) === null || _a === void 0 ? void 0 : _a['Global Quote'];
            const symbol = (_b = globalQuote === null || globalQuote === void 0 ? void 0 : globalQuote['01. symbol']) !== null && _b !== void 0 ? _b : 'N/A';
            const price = this.formatDollar(globalQuote === null || globalQuote === void 0 ? void 0 : globalQuote['05. price']);
            const lastestDay = this.formatDate(globalQuote === null || globalQuote === void 0 ? void 0 : globalQuote['07. latest trading day']);
            const open = this.formatDollar(globalQuote === null || globalQuote === void 0 ? void 0 : globalQuote['02. open']);
            const high = this.formatDollar(globalQuote === null || globalQuote === void 0 ? void 0 : globalQuote['03. high']);
            const low = this.formatDollar(globalQuote === null || globalQuote === void 0 ? void 0 : globalQuote['04. low']);
            dataContent = (h("div", { key: '9b6b1eb31d734ceb8c199934dcd83ada377c4fc5', class: "content" }, h("div", { key: '342286c2837860d4e47918895b5a3219ec55004e', class: "info" }, h("p", { key: '054d76955428ae041f3d94eecb938a58cf2fb1f1', class: "info-title" }, "Symbol:"), h("p", { key: 'ae813a2c0fc6801851ebee2c650b762a281a753a', class: "info-value" }, symbol)), h("div", { key: 'ff612ed3eebf9a6caadfbee714ba6552e8b856b3', class: "info" }, h("p", { key: '315a8af19d41b83e945cc5c0cb07133afcc2614b', class: "info-title" }, "Price:"), h("p", { key: '7f3a2ba0b353f6b08af55d249d7c920d0de7b012', class: "info-value" }, price)), h("div", { key: '6eb77d720745856fca5fbf2744f0fb528bda2700', class: "info" }, h("p", { key: '90a1fd530388aadd10946b52441c97a8d770f891', class: "info-title" }, "Open:"), h("p", { key: '0a9adbd4a868d57bb4a242d4e91efe489a0c8e08', class: "info-value" }, open)), h("div", { key: 'ac8e7ad45c5802ee8bec452545921738644f80e3', class: "info" }, h("p", { key: 'b8641f4dbec65cb5a3e4ae031f9fa01fcbebf6da', class: "info-title" }, "High:"), h("p", { key: 'fe52c09add88374c996170805f3d0f8df61697a2', class: "info-value" }, high)), h("div", { key: '199604cd8016e422d5a383040ac4d4ba237ca5ac', class: "info" }, h("p", { key: 'f89f6a6aaffc74e1a52c7584e7f3ecca07fe80f7', class: "info-title" }, "Low:"), h("p", { key: '39767f8f0b14d610d142ec8f01c5cdecf536a264', class: "info-value" }, low)), h("div", { key: '7d479d34a131fdec81f8a804717f7a385389c717', class: "info" }, h("p", { key: '879f0b66520d67c5fc0fa43415de63bf7b838fc5', class: "info-title" }, "Latest trading day:"), h("p", { key: 'b8e4998258cb1e66d32c87f0ae02cc0ec0245e2b', class: "info-value" }, lastestDay))));
        }
        return (h("div", { key: '63c32d21fcf70992b49c040d02b082a174bea3d6' }, h("form", { key: 'aaae77b402d34c3ed8e8c29b6f6b5666bde1543c', onSubmit: this.onFetchStockPrice.bind(this) }, h("input", { key: '642c631323c78af98e1c4c7183949e96912cf72e', id: "stock-symbol", ref: (el) => (this.stockInput = el), value: this.stockUserInput, onInput: this.onUserInput.bind(this), placeholder: "Enter stock symbol" }), h("button", { key: 'f238ccda546dd26c42d724d055f74e0bb3bd9145', type: "submit", disabled: !this.stockInputValid || this.loading, "aria-busy": this.loading, "aria-disabled": !this.stockInputValid || this.loading }, this.loading ? 'Loading...' : 'Fetch')), h("div", { key: '09c7a30859c567608564e0bf9e53438e919777e2' }, dataContent)));
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
};
StockPrice.style = stockPriceCss;

export { StockPrice as md_stock_price };

//# sourceMappingURL=md-stock-price.entry.js.map