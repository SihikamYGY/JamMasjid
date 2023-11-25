const date = new Date() // Buat mendapatkan nilai tanggal, bulan, tahun, jam, detik, menit, DLL tentang waktu terkini+

let year = date.getFullYear() // untuk mendapatkan tahun sekarang
let month = date.getMonth() + 1 // untuk mendapatkan bulan sekarang dengan nilai nomor (+1 buat switch dibawah ini)
let day = date.getDate() // untuk mendapatkan tanggal sekarang

switch(month) { // switch buat mengganti nilai month yang dari nomor menjadi bulan
  case 1:
    month = "Januari"
    break;

  case 2:
    month = "Februari"
    break;

  case 3:
    month = "Maret"
    break;

  case 4:
    month = "April"
    break;

  case 5:
    month = "Mei"
    break;

  case 6:
    month = "Juni"
    break;

  case 7:
    month = "Juli"
    break;

  case 8:
    month = "Agustus"
    break;

  case 9:
    month = "September"
    break;

  case 10:
    month = "Oktober"
    break;

  case 11:
    month = "November"
    break;
  
  case 12:
    month = "Desember"
    break;
  default:
    month = "ERROR:404"
}

console.info(day + "|" + month + "|" + year) // ngecheck doang
document.getElementById("tanggal").innerText = day + "  " + month + " " + year // buat memasukkan nilai letnye kedalam html (h1)

// timer & detik mulai sini
const subuh = document.getElementById("subuh").innerText // untuk mengambil waktu azan subuh
const zuhur = document.getElementById("zuhur").innerText // untuk mengambil waktu azan zuhur
const ashar = document.getElementById("ashar").innerText // untuk mengambil waktu azan ashar
const maghrib = document.getElementById("maghrib").innerText // untuk mengambil waktu azan maghrib
const isya = document.getElementById("isya").innerText // untuk mengambil waktu azan isya
let timerrrr = 0 // untuk timer (menit) waktu iqomah (liat dibawah)
let secc = 0 // untuk timer (detik) waktu iqomah (liat dibawah)

function time() { // function buat detik
  const date = new Date() // bikin dua date karena gak tau kenapa detiknya gak jalan kalau cuma ada 1
  let hour = date.getHours() // untuk mendapatkan jam sekarang
  let min = date.getMinutes() // untuk mendapatkan menit sekarang
  let sec = date.getSeconds() // untuk mendapatkan detik sekarang
  let wib = "WIB" // buat pajangan text WIB
  hour = update(hour) // update function buat menambahkan 0 didepan jika valuenya hanya 1 digit (liat dibawah)
  min = update(min)
  sec = update(sec)
  document.getElementById("jam").innerText = hour + ":" + min + ":" + sec +" " + wib // buat memasukkan nilai letnye kedalam html (h1)
  let a = hour +":" + min // let ini buat mengtrigger waktu iqamah
  if (a == subuh || a == zuhur || a == ashar || a == maghrib || a == isya) { //mengtrigger waktu iqamah jika let a sama dengan waktu azan subuh, zuhur, ashar, maghrib, isya
    document.getElementById("body1").classList.add("hidden") // mengasih class hidden biar div yang isinya jam bisa menjadi hilang
    document.getElementById("body2").classList.remove("hidden") // mencabut class hidden biar div yang isinya timer bisa muncul
  timerrrr = 1 // mengasih menit 11
  secc = 0 // mengasih detik 0
    timerrr() // memanggil function biar timer jalan
  } else { // mengeksekusi else jika if pertama tidak dijalankan
    setTimeout(time, 1000);
  }


}


function timerrr() { // membuat function biar timer waktu iqamah jalan
  let h1 = document.getElementById("timerr") // mengambil h1 di dalam div timer

  function timerr() { // membuat function biar timer berjalan
    if (secc <= 0) { // membuat if jika let secc (detik) dibawah atau sama dengan 0 maka coding yang dibawah ini dijalankan
      secc = 59 // diulang detiknya
      timerrrr -= 1 // menitnya dikurangi 1
      console.info(secc) // buat ngecheck
    } else { // membuat else jika if nya tidak dijalankan
      secc-- // detiknya dikurangi 1
    }
    let timerrrrr = update(timerrrr) // memasukkan menit kedalam function
    let seccc = update(secc) // memasukkan detik kedalam function
    h1.innerText = timerrrrr + ":" + seccc // memasukkan menit kedalam function
  }

  if (timerrrr != "00" && secc != "00" || timerrrr == "00" && secc != "00" || timerrrr != "00" && secc == "00") { // membuat if biar diulang terus menjadi 0 timernya
    setTimeout(timerr, 1000) // diulang function timerr
    setTimeout(timerrr, 1000); // diulang function timerrr
  } else {
    document.getElementById("body1").classList.remove("hidden") // mencabut class hidden biar div yang isinya jam muncul
    document.getElementById("body2").classList.add("hidden") // memberi class hidden biar div yang isinya timer menjadi hilang
    time() // memanggil function detik biar detik jalan lagi
  }
}

function update(t) { // update function biar value yang digitnya hanya 1 ditambahkan 0 di depannya
   if (t < 10) { // jika param t lebih kecil dari 10 (digitnya hanya 1) maka "0" + t maksudnya nilai t ditambah 0 didepannya
   return "0" + t;
   }
   else { // jika param t lebih besar atau sama dengan 10 (digitnya lebih dari 1) maka return t (dibalikin dengan nilai yang sama)
   return t;
   }
  }

time() // memanggil function detik
//timer & detik akhir disini





// dibawah ini dari google jadi silahkan menerjemahkannya sendiri (gak mudeng 😅)
  function myHijriDateFormat(date) {
    let startDate= new Date(date),
        c= 'id-u-ca-islamic-umalqura-nu-latn',  // use 'islamic-umalqura' calendar for the islamic date
        n='numeric',
        iDay  =new Intl.DateTimeFormat(c,{day  :n}).format(startDate),
        iMonth=new Intl.DateTimeFormat(c,{month:'long'}).format(startDate),
        iYear =new Intl.DateTimeFormat(c,{year :n}).format(startDate).split(" ")[0];
    
        return iDay+" "+iMonth+", "+iYear;
    }
  document.getElementById("hijri").textContent = myHijriDateFormat(new Date(Date.now()));







