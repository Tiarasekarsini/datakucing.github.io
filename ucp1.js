//Nama
function updateName(){
    const name = prompt('Masukkan Nama: ');
    nama.textContent = name;
};
const nama = document.querySelector('#nama');
nama.addEventListener('click', updateName);
//Total
function updateTotal(){
    const total = prompt('Jumlah Total Kucing: ');
    tl.textContent = total;
};
const tl = document.querySelector('#total');
tl.addEventListener('click', updateTotal);

//Kucing Jantan
function updateKJ(){
    const kj = prompt('Jumlah Kucing Jantan: ');
    KJ.textContent = kj;
};
const KJ = document.querySelector('#kj');
KJ.addEventListener('click',updateKJ);

//Kucing Betina
function updateKB(){
    const kb = prompt('Jumlah Kucing Betina: ');
    KB.textContent = kb;
};
const KB = document.querySelector('#kb');
KB.addEventListener('click',updateKB);

//Apin
function updateAP(){
    const ap = prompt('Update Vaksin Ulang: ');
    AP.textContent = ap;
};
const AP = document.querySelector('.vaksin1');
AP.addEventListener('click',updateAP);

//Douglas
function updateDG(){
    const dg = prompt('Update Vaksin Ulang: ');
    DG.textContent = dg;
};
const DG = document.querySelector('.vaksin2');
DG.addEventListener('click',updateDG);

//Iput
function updateIP(){
    const ip = prompt('Update Vaksin Ulang: ');
    IP.textContent = ip;
};
const IP = document.querySelector('.vaksin3');
IP.addEventListener('click',updateIP);
//Aretha
function updateAT(){
    const at = prompt('Update Vaksin Ulang: ');
    AT.textContent = at;
};
const AT = document.querySelector('.vaksin4');
AT.addEventListener('click',updateAT);
//Mocca
function updateMC(){
    const mc = prompt('Update Vaksin Ulang: ');
    MC.textContent = mc;
};
const MC = document.querySelector('.vaksin5');
MC.addEventListener('click',updateMC);
//Miko
function updateMO(){
    const mo = prompt('Update Vaksin Ulang: ');
    MO.textContent = mo;
};
const MO = document.querySelector('.vaksin6');
MO.addEventListener('click',updateMO);
//Mika
function updateMA(){
    const ma = prompt('Update Vaksin Ulang: ');
    MA.textContent = ma;
};
const MA = document.querySelector('.vaksin7');
MA.addEventListener('click',updateMA);
//Mini
function updateMI(){
    const mi = prompt('Update Vaksin Ulang: ');
    MI.textContent = mi;
};
const MI = document.querySelector('.vaksin8');
MI.addEventListener('click',updateMI);




