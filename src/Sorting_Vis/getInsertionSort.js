export function getInsertionSortAnimations(array) {
  const animation = [];
  const auxillary = array.slice();
 
  for (let i = 1; i < array.length; i++) {
    const key = auxillary[i];
    var j = i - 1;
    animation.push(["comparison1", i, j]);
    animation.push(["comparison2", i, j]);
    while (j >= 0 && auxillary[j] > key) {
      animation.push(["overwrite", j+1, auxillary[j]]);
      auxillary[j + 1] = auxillary[j];
     
      j = j - 1;
      if (j >= 0 ) {
        animation.push(["comparison1", i, j]);
        animation.push(["comparison2", i, j]);
      }
    }
    animation.push(["overwrite", j+1, key]);
    auxillary[j + 1] = key;
  }
  return animation;
}
