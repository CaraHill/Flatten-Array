function Flattener() {
  this.flatten = (nestedArray) => {
    let result = [];
    let stack = nestedArray;
    let item;

    while (stack.length) {
      item = stack.shift();
      if (Array.isArray(item)) { [].unshift.apply(stack, item); }
      else { result.push(item); }
    }

    return result.filter(function(item) {
      return item != undefined || item != null;
    });
  }
}

export { Flattener }
