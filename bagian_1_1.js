const arr1 = [1, 2, 3];
const arr2 = ['x', 'y', 'z'];
const mergeArray = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray);
};
mergeArray(arr1, arr2);
