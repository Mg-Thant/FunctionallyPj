import React from "react";
import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 10.98,
    name: "Banana",
    description: "Fresh Banana from Thailand",
  },
  {
    id: 2,
    price: 40.98,
    name: "Kiwi",
    description: "Fresh Banana from Thailand",
  },
  {
    id: 3,
    price: 12.98,
    name: "Apple",
    description: "Fresh Apple from Thailand",
  },
  {
    id: 4,
    price: 10,
    name: "Avocado",
    description: "Fresh Avocado from Thailand",
  },
  {
    id: 5,
    price: 11.8,
    name: "Mango",
    description: "Fresh Mango from Thailand",
  },
];

const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;
