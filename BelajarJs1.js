function HitungAkar(x){
    if(x>0){
        if(x%2==0){
            const hasil = Math.sqrt(x);
            console.log(`Akar pangkat 2 dari ${x} adalah ${hasil}`);
        }else{
            console.log("Tidak bisa input bilangan ganjil");
        }
    }else{
        console.log("Tidak bisa input bilangan negatif");
    }
}


const prompt = require('prompt-sync')({sigint: true});
const input = parseInt(prompt("Masukkan bilangan genap: "));

HitungAkar(input);