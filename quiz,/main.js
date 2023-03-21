const futbolcular={
    messi:{
        soru:"Messi Kariyerinde Toplam Kaç Gol Atmıştır?",
        secenekler:["800","790"],
        cevap:"790"
    },
    ronaldo:{
        soru:"Ronaldo Kariyerinde Toplam Kaç Gol Atmıştır?",
        secenekler:["807","837"],
        cevap:"807"
    },
    quaresma:{
        soru:"Quaresma Kariyerinde Toplam Kaç Gol Atmıştır?",
        secenekler:["73","150"],
        cevap:"73"
    }
};
let oyuncular,bilgiler,soru,dogruCevap,secenekler,kullaniciCevap,secilenYildiz;

oyuncular=document.getElementsByTagName("img");
[...oyuncular].forEach((alan,index) => {
  alan.addEventListener("click",()=>{
    secilenYildiz=alan.getAttribute("title");
    soruyuGoster(secilenYildiz);
  });
});
function soruyuGoster(secilenYildiz){
    bilgiler=futbolcular[secilenYildiz];
    soru=bilgiler["soru"];
    secenekler=bilgiler["secenekler"];
    dogruCevap=bilgiler.cevap;
    

    document.getElementById("seceneklerListesi").innerHTML = "";
    document.getElementById("soruBaslik").textContent = soru;
}


secenekler.forEach((secenek) => {

    const yeniSecenek=document.createElement("li");
    const yeniRadio=document.createElement("input");

    yeniSecenek.innerHTML=secenek;
    yeniRadio.type="radio";
    yeniRadio.name="yeniSecenek";
    yeniRadio.value=secenek;

    yeniSecenek.appendChild(yeniRadio);
    document.getElementById("seceneklerListesi").appendChild(yeniSecenek);
});

function cevabiKontrolEt(){
    kullaniciCevap=document.querySelector('input[name="yeniSecenek"]:checked').value;

    if(kullaniciCevap===dogruCevap){
      alert("Tebrikler. Doğru cevap.");
    }
    else{
      alert("Yanlış cevap!!!");
    }
  }