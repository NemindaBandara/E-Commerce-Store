// Import necessary hooks and modules
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify"; // For showing error notifications
import { useNavigate } from "react-router-dom"; // For navigation

// Create a context that can be shared across components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  // Define constants used in the shop
  const currency = 'LKR ';        // Currency label
  const delivery_fee = 10;        // Flat delivery fee

  // State variables
  const [search, setSearch] = useState('');            // Search input value
  const [showSearch, setShowSearch] = useState(false); // Toggle for showing search bar
  const [cartItems, setCartItems] = useState({});      // Object to track cart items

  const navigate = useNavigate(); // For programmatic navigation

  // Function to add item to cart
  const addToCart = async (ItemId, size) => {
    // Show error if size is not selected
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    // Clone existing cart items
    let cartData = structuredClone(cartItems);

    // Add item to cart or update its quantity
    if (cartData[ItemId]) {
      if (cartData[ItemId][size]) {
        cartData[ItemId][size] += 1; // Increase quantity if already exists
      } else {
        cartData[ItemId][size] = 1; // Set initial quantity
      }
    } else {
      cartData[ItemId] = {};
      cartData[ItemId][size] = 1;
    }

    setCartItems(cartData); // Update cart state
  }

  // Function to get total number of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          // Ignore errors silently
        }
      }
    }
    return totalCount;
  }

  // Function to update quantity of a specific item and size
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  // Function to calculate total price of items in the cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items); // Get item details
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]; // Add price × quantity
          }
        } catch (error) {
          // Ignore errors silently
        }
      }
    }
    return totalAmount;
  }

  // Values to be provided to other components using this context
  const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  }

  // Provide the context to child components
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
