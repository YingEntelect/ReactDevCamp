import "./App.css";
import sampleProductImage from "./assets/sample-product.png";
import { ProductDetails } from "./components";

export const App = () => {
  const sampleProduct = {
    id: 0,
    name: "Islamic Investment Product",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
    price: 350,
    imageUrl: sampleProductImage,
  };

  return (
    <div className="p-5 flex flex-col space-y-5">
      <ProductDetails product={sampleProduct} />
      <hr className="border-[#D9D9D9]" />
      <span className="text-xl font-bold">Related product</span>
    </div>
  );
};
