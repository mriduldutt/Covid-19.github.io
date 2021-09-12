function $(x){
    return document.querySelector(x);
}


fetch('https://corona.lmao.ninja/v2/countries/India')
.then((response) => {
  return response.json();
})
.then((data) => {
    $("#flag").src = data.countryInfo.flag;

    $("#country").innerHTML = data.country.toLocaleString();
    $("#cases").innerHTML = data.cases.toLocaleString();
    $("#critical").innerHTML = data.critical.toLocaleString();
    $("#death").innerHTML = data.deaths.toLocaleString();
    $("#recovered").innerHTML = data.recovered.toLocaleString();
    $("#tests").innerHTML = data.tests.toLocaleString();
    $("#active").innerHTML = data.active.toLocaleString();
})



