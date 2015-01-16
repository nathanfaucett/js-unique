var indexOf = require("index_of"),
    flattenArray = require("flatten_array"),
    fastSlice = require("fast_slice");


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


module.exports = function unique() {
    return baseUnique(flattenArray(fastSlice(arguments), 1));
};
