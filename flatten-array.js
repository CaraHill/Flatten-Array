function Flattener() {
  this.flatten = (nestedArray) => {
    let flattenedArray = [].concat.apply([], nestedArray);
    return flattenedArray.filter(function(item) {
      return item != undefined || item != null;
    });
  }
}

export { Flattener }
