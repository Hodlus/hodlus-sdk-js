export class Client {
  _header_token_key = "api-token";
  baseUrl: string;
  publicKey: string;

  constructor(
    publicKey: string,
    baseUrl: string = "http://10.1.1.43:1338/api",
  ) {
    this.baseUrl = baseUrl;
    this.publicKey = publicKey;
  }

  async _GET(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
      headers: {
        [this._header_token_key]: this.publicKey,
      },
    });
    const data = await response.json();

    return data;
  }

  async _POST(url: string, body: Record<string, string | number> = {}) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        [this._header_token_key]: this.publicKey,
      },
    });
    const data = await response.json();

    return data;
  }

  async getStore() {
    const url = "/store";

    return this._GET(url);
  }

  async getAllCategories() {
    const url = "/store/categories";

    return this._GET(url);
  }

  async getOneCategory(categoryId: string) {
    const url = `/store/categories/${categoryId}`;

    return this._GET(url);
  }

  async getProducts() {
    const url = "/store/categories/products";

    return this._GET(url);
  }

  async getProductsByCategory(categoryId: string) {
    const url = `/store/categories/${categoryId}/products`;

    return this._GET(url);
  }

  async createOneCart() {
    const url = `/store/cart`;

    return this._POST(url);
  }

  async getOneCart(cartId: string) {
    const url = `/store/cart/${cartId}`;

    return this._GET(url);
  }
}
