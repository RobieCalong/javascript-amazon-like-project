export const cart = [];

export function addToCart(productId) {
  let matachingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matachingItem = cartItem;
    }
  });

  if (matachingItem) {
    matachingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}