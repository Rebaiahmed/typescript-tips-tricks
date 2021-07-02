interface Product {
  name: string;
  description: string;
}
let currentProduct: Product = {
  name: "FS2000",
  description: "Hippie Control",
};

function update(product: Product) {
  Object.assign(currentProduct, product);
}
function updateWithPartial(product: Partial<Product>) {
  Object.assign(currentProduct, product);
}

update({ name: "test" });
updateWithPartial({ name: "test" });
