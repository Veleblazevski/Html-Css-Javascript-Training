function prevrti(broj){
    let nov;
    let pomosna = broj;
    for(nov = 0;broj!=0; broj =parseInt(broj/10))
    {   console.log("nov broj=",nov, "broj=",broj);
        nov =parseInt( nov * 10 + broj%10);
    }
    return nov==pomosna;
}
prevrti(232);

