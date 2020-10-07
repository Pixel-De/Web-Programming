cs142MakeMultiFilter = (array) => {
  const originalArray = [...array]; //rest parametr
  const currentArray = array;

  function arrayFilterer(filterCriteria, callback) {
    if (typeof filterCriteria === "function")
      currentArray.forEach((el, index) => {
        if (filterCriteria(el) === false) currentArray.splice(index, 1);
      });
    else return currentArray;
    if (callback) callback.call(originalArray, currentArray); //callback(this.orginalArray, currentArray);
    return arrayFilterer;
  }
  return arrayFilterer;
};
