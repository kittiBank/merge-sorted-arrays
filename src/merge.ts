export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const result: number[] = [];

  // Declare pointers for each collection
  let i = collection_1.length - 1;
  let j = 0;
  let k = 0;

  // Loop for merging the collections
  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    let minValue: number | null = null;
    let sourceArray: number = -1;

    const val1 = i >= 0 ? collection_1[i] : null;
    const val2 = j < collection_2.length ? collection_2[j] : null;
    const val3 = k < collection_3.length ? collection_3[k] : null;

    // Find minimum value
    if (
      val1 !== null &&
      (val2 === null || val1 <= val2) &&
      (val3 === null || val1 <= val3)
    ) {
      minValue = val1;
      sourceArray = 1;
    } else if (val2 !== null && (val3 === null || val2 <= val3)) {
      minValue = val2;
      sourceArray = 2;
    } else if (val3 !== null) {
      minValue = val3;
      sourceArray = 3;
    }

    // If min value is found, push to result
    if (sourceArray === 1) {
      result.push(minValue!);
      i--;
    } else if (sourceArray === 2) {
      result.push(minValue!);
      j++;
    } else if (sourceArray === 3) {
      result.push(minValue!);
      k++;
    }
  }

  return result;
}
