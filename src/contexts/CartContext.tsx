import { ReactNode, createContext, useEffect, useState } from "react";

export type CartContextDataProps = {
  quantityOfItemsInCart: number;
  items: ItemProps[];
  currentCounterValue: number;
  currentAmountOfCoffeeInMl: string;
  addItemToCart: (item: ItemProps) => void;
  incrementTheCounterValue: () => void;
  decrementTheCounterValue: () => void;
  selectAmountOfCoffeeInMl: (quantity: string) => void;
  removeItemFromCart: (id: number) => void;
  calculateTheTotalAmountPayable: () => void;
  clearCart: () => void;
  totalPayable: number;
};

export type ItemProps = {
  id: number;
  name: string;
  image: any;
  price: number;
  amountInMl: string;
  quantity: number;
};
type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextDataProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [currentCounterValue, setCurrentCounterValue] = useState(1);
  const [currentAmountOfCoffeeInMl, setCurrentAmountOfCoffeeInMl] =
    useState("114ml");
  const [totalPayable, setTotalPayable] = useState(0);

  const quantityOfItemsInCart = items.length;

  function addItemToCart(item: ItemProps) {
    const itemAlreadyInCart = items.find((coffe) => coffe.id === item.id);

    if (itemAlreadyInCart) {
      //Show toast component later
      console.log("Item já no carrinho");
      return;
    }
    setItems((prevState) => [...prevState, item]);

    //Reset default values
    setCurrentCounterValue(1);
    setCurrentAmountOfCoffeeInMl("114ml");
  }
  function removeItemFromCart(id: number) {
    const itemsWithoutTheSelected = items.filter((coffee) => coffee.id !== id);

    setItems(itemsWithoutTheSelected);
  }

  function incrementTheCounterValue() {
    if (currentCounterValue < 20) {
      setCurrentCounterValue((prevState) => prevState + 1);
    }
  }
  function decrementTheCounterValue() {
    if (currentCounterValue > 1) {
      setCurrentCounterValue((prevState) => prevState - 1);
    }
  }

  function selectAmountOfCoffeeInMl(quantity: string) {
    setCurrentAmountOfCoffeeInMl(quantity);
  }

  function calculateTheTotalAmountPayable() {
    const total = items.reduce(
      (accumulator, item) => {
        accumulator.value += item.price * item.quantity;
        return accumulator;
      },
      { value: 0 }
    );

    setTotalPayable(total.value);
  }
  function clearCart() {
    setItems([]);
  }
  useEffect(() => {
    calculateTheTotalAmountPayable();
  });
  return (
    <CartContext.Provider
      value={{
        quantityOfItemsInCart,
        items,
        addItemToCart,
        currentCounterValue,
        incrementTheCounterValue,
        decrementTheCounterValue,
        currentAmountOfCoffeeInMl,
        selectAmountOfCoffeeInMl,
        removeItemFromCart,
        calculateTheTotalAmountPayable,
        totalPayable,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
