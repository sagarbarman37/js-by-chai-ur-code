// Object value can't be change:

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log(`chai nehi bani`);
  },
};
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false, //Age cannot be changed && Makes 'name' property read-only
  enumerable: false, // Hides this property in enumeration
  configurable: false, // Locks the property && Cannot delete or redefine
});
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
chai.name = "masala chai";

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// enumerable: false, // Hidden from enumeration && hide the key value pair.
// enumerable: true, // Will show up in enumeration

//
