let $http = require("http");
const callback = (data) => {
console.log(data);
};

const exibir_pagina = (url) => {
    $http.get(url, callback);
}

exibir_pagina("http://www.google.com");