import { ReactNode, createContext, useEffect, useState } from "react";
import { Audio } from "expo-av";

export type CartContextDataProps = {
  quantityOfItemsInCart: number;
  items: ItemProps[];
  currentCounterValue: number;
  addItemToCart: (item: ItemProps) => void;
  incrementTheCounterValue: () => void;
  decrementTheCounterValue: () => void;
  removeItemFromCart: (id: number) => void;
  calculateTheTotalAmountPayable: () => void;
  clearCart: () => void;
  totalPayable: number;
  newItemAddedToCart: boolean;
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
  const [totalPayable, setTotalPayable] = useState(0);
  const [newItemAddedToCart, setNewItemAddedToCart] = useState(false);
  const quantityOfItemsInCart = items.length;

  async function addItemToCart(item: ItemProps) {
    const itemAlreadyInCart = items.find((coffe) => coffe.id === item.id);

    if (itemAlreadyInCart) {
      //Show toast component later
      console.log("Item já no carrinho");
      return;
    }
    setItems((prevState) => [...prevState, item]);

    playSound();
    showToastNotification();
    resetValues();
  }

  async function playSound() {
    const file = require("../assets/added.mp3");
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });
    await sound.setPositionAsync(0);
    await sound.playAsync();
  }
  function showToastNotification() {
    setNewItemAddedToCart(true);
  }
  function resetValues() {
    setCurrentCounterValue(1);

    setTimeout(() => {
      setNewItemAddedToCart(false);
    }, 5000);
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
        removeItemFromCart,
        calculateTheTotalAmountPayable,
        totalPayable,
        clearCart,
        newItemAddedToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
