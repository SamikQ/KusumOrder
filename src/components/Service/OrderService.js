export default class OrderService {
  getResource = async () => {
    let res = await fetch("../Data/data.json");

    if (!res.ok) {
      throw new Error(
        `Couldnt fetch ${"../Data/data.json"}, status ${res.status}`
      );
    }
    return res.json();
  };

  getAllProducts = () => {
    return this.getResource();
  };
}
