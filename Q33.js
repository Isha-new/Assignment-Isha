var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_num.length; i++) {
    if (i == 0) {
        console.log("".concat(ordinal_num[i], "st"));
    }
    else if (i == 1) {
        console.log("".concat(ordinal_num[i], "nd"));
    }
    else if (i == 2) {
        console.log("".concat(ordinal_num[i], "rd"));
    }
    else {
        console.log("".concat(ordinal_num[i], "th"));
    }
}
