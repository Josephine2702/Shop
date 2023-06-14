
export const createArrayOfId = (function() {
  let arrOfProductId = [];
  
  return function getId(id) {
    arrOfProductId.push(+id);
    return arrOfProductId;
  }
})();

