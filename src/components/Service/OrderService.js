export default class OrderService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Couldnt fetch ${url}, status ${res.status}`
      );
    }
    return res.json();
  };

  getAllProducts = () => {
    return this.getResource();
  };
}
