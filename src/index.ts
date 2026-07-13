import { merge } from "./merge";

// Example usage DESC, ASC
const collection_1 = [5, 3, 1];
const collection_2 = [2, 4];
const collection_3 = [0, 6];

const result = merge(collection_1, collection_2, collection_3);

// Expected: [0, 1, 2, 3, 4, 5, 6]
console.log("Result:", result);

export { merge };
