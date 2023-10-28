function calculadora(num1, num2, operador) {
  switch (operador) {
    case '+':
      return parseInt(num1) + parseInt(num2);
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

export { calculadora };
