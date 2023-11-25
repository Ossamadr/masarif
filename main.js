let s1 = document.getElementById('s1')
let s2 = document.getElementById('s2')
let s3 = document.getElementById('s3')
let main = document.getElementById('main')
let home = document.getElementById('home')
let fac = document.getElementById('fac')
let sav = document.getElementById('sav')


function create() {
    let s1Total  = +main.value - (+home.value + +fac.value + +sav.value);
    let s2Total  = +home.value + +fac.value;
    let s3Total  = +sav.value * 4;
    s1.innerHTML = `الباقي: ${s1Total}`
    s2.innerHTML = `المصاريف: ${s2Total}`
    s3.innerHTML = `الادخار الشهري: ${s3Total}`
}