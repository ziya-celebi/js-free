class token {
  type;
  value;
  constructor(type, value) {
    this.type = String(type);
    this.value = String(value);
  }
}

let token1 = new token("Number", "50");

if (token1.type === "Number") {
  console.log("Yes it is a " + token1.type);
} else {
  console.log("No it is an " + token1.type);
}

function createToken(type, value) {
  return {
    type: String(type),
    value: String(value),
  };
}

let token1 = createToken("Number", "50");

if (token1.type === "Number") {
  console.log("Yes it is a " + token1.type);
} else {
  console.log("No it is an " + token1.type);
}
