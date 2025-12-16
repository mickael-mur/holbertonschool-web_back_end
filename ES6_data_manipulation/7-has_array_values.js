// TODO: Create a function hasValuesFromArray
// Returns true if all elements in array exist in the set
export default function hasValuesFromArray(set, array) {
    return array.every((element) => set.has(element));
}
