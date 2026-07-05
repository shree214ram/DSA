const obj = {
    category: {
        towel: "bath&body",
        denim: "bottomwear",
        bottomwear: "clothing",
        candle: "homedecor"
    },

    coupons: {
        "bath&body": "20",
        clothing: "30"
    }
};
const res = test(obj, "towel")
console.log(res)
function test(obj, key) {

    if (obj.category[key] && obj.coupons[obj.category[key]]) {
        return obj.coupons[obj.category[key]]
    } else if (obj.category[key] && obj.category[obj.category[key]]) {
        return test(obj, obj.category[key])
    } else {
        return null
    }
}
