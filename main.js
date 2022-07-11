function creditCalc() {
    let withdrawn, month; // Müşteri talebi tanımlandı
    let monthlyDebt, totalAmount; // Hesaplamalar tanımlandı
    let calcBtn = document.getElementById('calcBtn');
    withdrawn=document.getElementById('withdrawn').value; // Talep edilen kredi tutarı yakalandı
    let list =document.getElementById('month'); // Vade listesi yakalandı
    monthNumber=list.options[list.selectedIndex].value; // Vade listesi içerisinde seçili değer yakalandı

    
    // Vade sayısına göre faiz oranı ataması
    if(monthNumber==12){
        totalAmount=withdrawn*2.4; // %10 faiz
    } else if(monthNumber==24) {
        totalAmount=withdrawn*2.5; // %20 faiz
    } else if(monthNumber==36){
        totalAmount=withdrawn*3;
    } else if(monthNumber==48){
        totalAmount=withdrawn*3.2;
    }

    monthlyDebt=totalAmount/monthNumber; // Aylık taksit ödenecek toplam tutar ile vade sayisi bölünmesi işlemi ile hesaplandı
    document.querySelector("#sonuc").innerHTML="Geri ödeme toplamı: "+totalAmount.toFixed(2)+"<br>"+
    "Aylık taksit tutarınız: " +monthlyDebt.toFixed(2); // Sonuc adlı div'e yazdırıldı , toFixed(2) , virgülden sonra 2 basamak göster komutudur.
    sonuc.style.color="#000"
    sonuc.style.fontSize="18px"
    sonuc.style.fontWeight="700"
    sonuc.style.backgroundColor="#fff"
    sonuc.style.padding="40px 0"


    // Input boş ise butonu aktif et, yapamadım. tekrar bakacağım.

    // withdrawn.addEventListener('input', function(evt){
    //     if(withdrawn.value.lenght > 0) {
    //         calcBtn.disabled = true;
    //     } else {
    //         calcBtn.disabled = false;
    //     }
    // });
  

};

