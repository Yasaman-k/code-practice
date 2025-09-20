let declaredBeforeDefinition;
let expressedBeforeDefinition;

// Try to use declaredBeforeDefinition before declaration
try {
  expressedBeforeDefinition = expressedFunction;
} catch (error) {
  expressedBeforeDefinition = error;
}

// Try to use expressedBeforeDefinition before declaration
try {
  declaredBeforeDefinition = declaredFunction();
} catch (error) {}

// Function Declaration
function declaredFunction() {
  return 'This is a declared function';
}

// Function Expression
const expressedFunction = function () {
  return 'This is an expressed function';
};
console.log(expressedBeforeDefinition, 'hi');

// Exports for testing
module.exports = {
  declaredFunction,
  expressedFunction,
  declaredBeforeDefinition,
  expressedBeforeDefinition,
};
