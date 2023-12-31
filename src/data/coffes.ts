import americano from "../assets/americano.png";
import arabe from "../assets/arabe.png";
import cafeComLeite from "../assets/cafe-com-leite.png";
import cafeComGelado from "../assets/cafe-gelado.png";
import capuccino from "../assets/capuccino.png";
import chocolateQuente from "../assets/chocolate-quente.png";
import cubano from "../assets/cubano.png";
import expressoCremoso from "../assets/expresso-cremoso.png";
import expressoTradicional from "../assets/expresso-tradicional.png";
import havaiano from "../assets/havaiano.png";
import irlandes from "../assets/irlandes.png";
import latte from "../assets/latte.png";
import macchiato from "../assets/macchiato.png";
import mochaccino from "../assets/mochaccino.png";

export const COFFES_SECTIONS = [
  {
    title: "Tradicional",
    data: [
      {
        id: 1,
        name: "Expresso Tradicional",
        image: expressoTradicional,
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 100,
      },
      {
        id: 2,
        name: "Americano",
        image: americano,
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 100,
      },
      {
        id: 3,
        name: "Expresso Cremoso",
        image: expressoCremoso,
        description: "Café expresso tradicional com espuma cremosa",
        price: 100,
      },
      {
        id: 4,
        name: "Latte",
        image: latte,
        description: "Café expresso com o dobro de leite e espuma cremosa",
        price: 100,
      },
      {
        id: 5,
        name: "Expresso Gelado",
        image: cafeComGelado,
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 100,
      },
    ],
  },

  {
    title: "Doce",
    data: [
      {
        id: 6,
        name: "Capuccino",
        image: capuccino,
        description: "Bebida com canela feita de doses de café, leite e espuma",
        price: 100,
      },
      {
        id: 7,
        name: "Mochaccino",
        image: mochaccino,
        description:
          "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 100,
      },
      {
        id: 8,
        name: "Chocolate Quente",
        image: chocolateQuente,
        description:
          "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 100,
      },
    ],
  },

  {
    title: "Especiais",
    data: [
      {
        id: 9,
        name: "Cubano",
        image: cubano,
        description:
          "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 100,
      },
      {
        id: 10,
        name: "Havaiano",
        image: havaiano,
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 100,
      },
      {
        id: 11,
        name: "Árabe",
        image: arabe,
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 100,
      },
      {
        id: 12,
        name: "Irlandês",
        image: irlandes,
        description:
          "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 100,
      },
    ],
  },
];

export const COFFES = [
  {
    id: 1,
    name: "Expresso Tradicional",
    image: expressoTradicional,
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 100,
    category: "Tradicional",
  },
  {
    id: 2,
    name: "Expresso Americano",
    image: americano,
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 100,
    category: "Tradicional",
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    image: expressoCremoso,
    description: "Café expresso tradicional com espuma cremosa",
    price: 100,
    category: "Tradicional",
  },
  {
    id: 4,
    name: "Latte",
    image: latte,
    description: "Café expresso com o dobro de leite e espuma cremosa",
    price: 100,
    category: "Tradicional",
  },
  {
    id: 5,
    name: "Expresso Gelado",
    image: cafeComGelado,
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 100,
    category: "Tradicional",
  },

  {
    id: 6,
    name: "Capuccino",
    image: capuccino,
    description: "Bebida com canela feita de doses de café, leite e espuma",
    price: 100,
    category: "Doce",
  },
  {
    id: 7,
    name: "Mochaccino",
    image: mochaccino,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 100,
    category: "Doce",
  },
  {
    id: 8,
    name: "Chocolate Quente",
    image: chocolateQuente,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 100,
    category: "Doce",
  },

  {
    id: 9,
    name: "Cubano",
    image: cubano,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 100,
    category: "Especial",
  },
  {
    id: 10,
    name: "Havaiano",
    image: havaiano,
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 100,
    category: "Especial",
  },
  {
    id: 11,
    name: "Árabe",
    image: arabe,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 100,
    category: "Especial",
  },
  {
    id: 12,
    name: "Irlandês",
    image: irlandes,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 100,
    category: "Especial",
  },
];
