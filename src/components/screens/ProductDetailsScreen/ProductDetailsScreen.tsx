import type { FC } from "react";

import {
  ProductDetails,
  ProductTile,
  ShoppingFooter,
  type Product,
} from "@project/components";
import sampleProductImage from "@project/assets/sample-product.png";

export const ProductDetailsScreen: FC = () => {
  const sampleProduct: Product = {
    id: 0,
    name: "Islamic Investment Product",
    description:
      "Provides a way for Islamic customers to invest their money in a manner that is fully compliant with Shariah principles. Our comprehensive coverage ensures that your investment is managed according to ethical, interest-free guidelines from day one.\n\nFunds are allocated exclusively to Shariah-compliant assets, avoiding industries such as alcohol, gambling, and conventional interest-bearing instruments. A dedicated Shariah advisory board reviews the underlying portfolio on an ongoing basis to ensure continued compliance.\n\nCustomers can choose between fixed and flexible contribution terms, with returns distributed on a profit-sharing basis rather than fixed interest. Early withdrawal options are available, subject to standard notice periods.\n\nTo qualify, customers must be at least 18 years old, a South African resident, and hold an account with us in good standing. Additional documentation may be required to verify eligibility under Shariah investment guidelines.",
    price: 350,
    imageUrl: sampleProductImage,
  };

  const sampleProductArray: Product[] = [
    {
      id: 1,
      name: "Retail Short Term Insurance",
      description:
        "Provides cover for short-term products for individuals - Electronics, Household Items, Jewellery, Cars etc.",
      price: 500,
      imageUrl: sampleProductImage,
    },
    {
      id: 2,
      name: "Retail Long-Term Insurance",
      description:
        "Provides cover for longer term products individuals - household insurance, life insurance etc.",
      price: 1000,
      imageUrl: sampleProductImage,
    },
    {
      id: 3,
      name: "Commercial Short Term Insurance",
      description:
        "Provides cover for short-term products for commercial entities - Printers, Company Cars, Theft, etc.",
      price: 5000,
      imageUrl: sampleProductImage,
    },
    {
      id: 4,
      name: "Commercial Long-Term Insurance",
      description:
        "Provides cover for longer term products - office insurance, employee benefit insurance, etc.",
      price: 10000,
      imageUrl: sampleProductImage,
    },
    {
      id: 5,
      name: "Device Contract",
      description:
        "Allows the customer to take out a device on contract - such as a phone, laptop etc.",
      price: 850,
      imageUrl: sampleProductImage,
    },
    {
      id: 6,
      name: "Short-Term Investment Product",
      description:
        "Provides a way for customers to invest their money over a short period of time - 32 day fixed deposit etc.",
      price: 2500,
      imageUrl: sampleProductImage,
    },
    {
      id: 7,
      name: "Long-Term Investment Product",
      description:
        "Provides a way for users to invest their money over the long term - Retirement / Annuity Funds, Unit Trusts etc.",
      price: 5000,
      imageUrl: sampleProductImage,
    },
    {
      id: 8,
      name: "Islamic Investment Product",
      description:
        "Provides a way for Islamic customers to invest their money.",
      price: 5000,
      imageUrl: sampleProductImage,
    },
    {
      id: 9,
      name: "VIP Investment Product",
      description:
        "Provides an Investment product for VIP customers over 150 Million Net-Asset Value.",
      price: 20000,
      imageUrl: sampleProductImage,
    },
    {
      id: 10,
      name: "Home Loan Product",
      description:
        "Provides a way for customers to finance the purchase of residential property over an extended term.",
      price: 15000,
      imageUrl: sampleProductImage,
    },
  ];

  return (
    <div className="flex flex-col h-dvh">
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="p-5 flex flex-col space-y-5">
          <ProductDetails product={sampleProduct} />
          <hr className="border-[#D9D9D9]" />
          <h2 className="text-xl font-bold">Related product</h2>
          <div className="flex flex-row w-full overflow-x-auto space-x-3 snap-x snap-proximity">
            {sampleProductArray.map((product) => (
              <ProductTile product={product} key={product.id} />
            ))}
          </div>
        </div>
      </main>
      <ShoppingFooter />
    </div>
  );
};
