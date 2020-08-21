export function getSelectionSortAnimation(array) {
  const animation = [];

  for (let i = 0; i < array.length; i++) {
    var min = array[i];
    var pos = i;
    var temp;

    for (let j = i + 1; j < array.length; j++) {
      animation.push([i, j]);
      animation.push([i, j]);
      if (array[j] < min) {
        min = array[j];
        pos = j;
      }
    }
    if (min !== array[i]) {
      animation.push([i, array[pos]]);
      animation.push([pos, array[i]]);
      temp = array[pos];
      array[pos] = array[i];
      array[i] = temp;
    }
    else{
        animation.push([i, array[i]]);

        animation.push([i, array[i]]);    }
  }
  return animation;
}
