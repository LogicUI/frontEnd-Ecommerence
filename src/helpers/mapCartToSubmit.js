const mapCartToSubmit = (cart) => {
  const newMapped = Object.entries(cart)
    .map(([key, obj]) => {
      return {
        title: obj.item.title,
        quantity: obj.item.count,
        type: obj.item.type
      };
    })
  return newMapped;
};

export default mapCartToSubmit;


