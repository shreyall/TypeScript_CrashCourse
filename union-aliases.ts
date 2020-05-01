function combine(input1: number | string, input2: number | string) {
  // this makes the parameters flexible to both numbers and strings (union type)
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

// type aliases

type Combinable = number | string; // this in turn can be used to define union types
