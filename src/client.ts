export class Client {
  _header_token_key = "api-token";
  baseUrl: string;
  publicKey: string;

  constructor(
    publicKey: string,
    baseUrl: string = "http://10.1.1.43:1338/api"
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

  async getStore() {
    const url = "/store";
    const data = await this._GET(url);

    return data;
  }

  async getAllCategories() {
    const url = "/store/categories";
    const data = await this._GET(url);

    return data;
  }

  async getOneCategory(categoryId: string) {
    const url = `/store/categories/${categoryId}`;
    const data = await this._GET(url);

    return data;
  }

  async getProducts() {
    const url = "/store/categories/products";
    const data = await this._GET(url);

    return data;
  }

  async getProductsByCategory(categoryId: string) {
    const url = `/store/categories/${categoryId}/products`;
    const data = await this._GET(url);

    return data;
  }
}
