var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Places = ["Turkey", "Makkah", "Madinah", "Paris"];
console.log(Places);
console.log(__spreadArray([], Places, true).sort());
console.log(Places);
console.log(__spreadArray([], Places, true).reverse());
console.log(Places);
console.log(Places.reverse());
console.log(Places.reverse());
console.log(Places.sort());
console.log(Places.reverse());
