var indexOf = require("@nathanfaucett/index_of"),
    flattenArray = require("@nathanfaucett/flatten_array");


module.exports = unique;


function unique() {
    return baseUnique(flattenArray(arguments, 1));
}

function baseUnique(array) {
    var localIndexOf = indexOf,
        i = -1,
        il = array.length - 1,
        result = [],
        seen = [],
        value;

    while (i++ < il) {
        value = array[i];

        if (localIndexOf(seen, value) === -1) {
            result[result.length] = value;
            seen[seen.length] = value;
        }
    }

    return result;
}
