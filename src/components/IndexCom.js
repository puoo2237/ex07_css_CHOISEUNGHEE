import imageFile from "../styles/images/test.jpg";
import "./css/IndexCom.css";

const products = [];
for (let i = 1; i <= 12; i++) {
  products.push({
    id: i,
    name: "멋진 사진",
    context: "화려하고 멋있고 아름답고...",
    price: "5000원",
    url: imageFile
  });
}

const IndexCom = () => {
  return (
    <div className="index-wrapper">
      <div className="product-grid">
        {products.map((pro) => (
          <div key={pro.id} className="product-card">
            <img src={pro.url} alt={pro.name} className="product-img" />
            <div className="product-name">{pro.name}</div>
            <div className="product-context">{pro.context}</div>
            <div className="product-price">{pro.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexCom;