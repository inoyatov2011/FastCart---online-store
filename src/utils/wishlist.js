const WISHLIST_KEY = "wishlist";

export const getWishlist = () => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();

  const exists = wishlist.find(item => item.id === product.id);
  if (!exists) {
    wishlist.push(product);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id) => {
  const wishlist = getWishlist().filter(item => item.id !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};
export const isInWishlist = (id) => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === id);
};
