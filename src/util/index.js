const axios = require("axios");
function request(data) {
    return axios({
        url: "https://v2.velog.io/graphql",
        method: "post",
        data,
    });
}
function koCheck(lang) {
    var check = /[¤¡-¤¾|¤¿-¤Ó|°¡-ÆR]/;
    return check.test(lang);
}
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

module.exports = {
    request,
    koCheck,
    replaceAll,
};
