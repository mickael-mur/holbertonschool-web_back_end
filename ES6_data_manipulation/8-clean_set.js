// TODO: Create a function cleanSet
// Returns a string of set values that start with startString
// Values separated by '-', only append the rest of the string after startString
export default function cleanSet(set, startString) {
    if (startString === null || startString === '') {
        return ''
    }
    const result = []
    for (const value of set) {
       if (value.startsWith(startString)) {
        value.slice(startString.length)
        result.push(value.slice(startString.length))
       }
    }
    return result.join('-');
}
