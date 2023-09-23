// JavaScript.info malumot olish uchun 

// 26 - test
{
  // // Garbage Collection butun ibj ni uzgartirganimizda faqat Stack dagi qismi uzgaradi 
  // // Heapdagi eski valuesini uchib ketishini Garbage Collection amalga oshiradi
  // // va shu narsaga Garbage Collection deyiladi
  
  let a = {
    name:'John'
  }
  // // bu hozir 'Call Stack' ga yozilyapdi 'Stack Memory' da linki buladi va qiymat 'Heap Space' da joylashadi 
  
  // //     Call Stack                     Stack Memory                          Heap Space
  
  // //         a                             Link...                              John 
  
  let b = a 
  // // bu holatda b ning link va valuesi a blan bir hil buldi
  
  // //     Call Stack                     Stack Memory                          Heap Space
  
  // //         a                                                                  'John'            
  // //                                      Link...                               
  // //         b                                                                  'John'
  
  // // misol - 1
  // a = null
  // // bu holatda a ning linki uchun null unga yangi link beradi 
  
  // //     Call Stack                     Stack Memory                          Heap Space
  
  // //         a                            NewLink                                Null  ('John')          
  // //                                                                
  // //         b                             Link.                                'John'
  
  // // misol - 2
  // a = 'salom'
  // // bu holatda string bulganligi uchun value birdan 'Stack Memory' da joylashadi Heap ga bormaydi
  // //     Call Stack                     Stack Memory                          Heap Space
  
  // //         a                             salom                               ('John')            
  // //                                                                
  // //         b                             Link.                                'John'
  
  // // 2 ta holatdaham heap da qolib ketgan qiymatni Garbage Collection uchiradi
  // // Garbage Collection deb shunga aytiladi
  
  // console.log(a,b)
  // // hozir b da avvalgi qiymat qolyapdi a da esa uchib ketti
  
  // /* JavaScriptda "Garbage Collection" (yoki qisqa ishlatilsa "GC") tushunarli xotira boshqaruv usuli hisoblanadi. 
  // Bu, dasturlash tillari, shu jumladan JavaScript tilida foydalaniladigan avtomatik xotira 
  // boshqaruv mekanizmi hisoblanadi.Garbage Collectionning asosiy maqsadi xotira egasini  aniqlab, undan foydalanilmasa, 
  // bo'sh bo'sh xotiraga o'tkazib berish orqali xotirani qayta ishlatishga imkon berishdir. */
  
  // // Ush lekn orqali yanada kuproq malumot olishingiz mumkun Rasmlar orqali tushintirilgan
  // // https://www.tutorialspoint.com/garbage-collection-gc-in-javascript

  // Biz ishlatolmaydigan malotimiz memoryda qolib ketishi ga Garbage Collakyion deyiladi 
}

// 29 - test 
{
  // new Set bulganda nmaga dubleketlarni chiqarib yuboradi
}

// 38 - test 
{
  // CRUD - bu arzon bajariladigan nufuzli dasturlash prinsiplaridan biri, yoki bir qator amallar to'plami,
  // masalan, ma'lumotlarni boshqarish uchun. "CRUD" hariflari ingliz tili so'zlarining bosh hariflarini tashkil
  // etadi: Create, Read, Update, va Delete.

  // Create (Yaratish): Yangi ma'lumotni (yozuv, obyekt, qator) tuzish.
  // Bu amalda ma'lumotlarni ma'lumotlar omboriga qo'shish yoki yaratishdan iborat.

  // Read (O'qish): Ma'lumotni o'qish. Bu amalda ma'lumotlarni o'qish yoki qidirishdan iborat.

  // Update (Yangilash): Ma'lumotni yangilash. Bu amalda mavjud ma'lumotni o'zgartirish yoki yangilashdan iborat.

  // Delete (O'chirish): Ma'lumotni o'chirish. Bu amalda ma'lumotni o'chirishdan iborat.

  // Bu prinsiplar dasturlashda, boshqaruv sistemalarda, veb saytlarda, mobil ilovalarda, 
  // ma'lumotlar omborlarida va boshqa bir qancha sohalarda qo'llaniladi. Misol uchun, bir foydalanuvchi profili yaratish, 
  // foydalanuvchining ma'lumotlarini ko'rish, foydalanuvchi profili ma'lumotlarini yangilash va foydalanuvchini tizimdan 
  // o'chirish - bu CRUD amallariga misol bo'lishi mumkin.

  // Misollar:

  // Create (Yaratish):

  // Yana bir foydalanuvchi ro'yxatga olish.
  // Yangi tovar qo'shish internet do'konida.
  // Yangi blog yozuvi tuzish.

  // Read (O'qish):

  // Foydalanuvchi profili ma'lumotlarini ko'rish.
  // Obyektlar ro'yxatini ko'rish (masalan, telefon modellari).
  // Blog yozuvlarini to'plu yig'ish va ko'rish.

  // Update (Yangilash):

  // Foydalanuvchi parolini o'zgartirish.
  // Telefon raqamini yangilash.
  // Blog yozuvi sarlavhasini o'zgartirish.

  // Delete (O'chirish):
  
  // Foydalanuvchini tizimdan o'chirish.
  // Tovarni do'kondan o'chirib tashlash.
  // Blog yozuvini o'chirish.

}

// 39 - test 
{
  // type Conversion bitta data turini ikkinchisiga (convert qilish) uzgartirishga aytiladi 
  let a = '2'
  console.log(Number(a))
  console.log(+a)
  console.log(parseInt(a))
  // true ni 'true' qilish bundaham bitta data type ni boshqasiga aylantiryapmiz 
  // Booleanni string qilyapmiz 
  let g = true

  // JavaScript-da, mantiqiy qiymatlarni (boolean) matn (string) ko'rinishiga o'girish uchun .toString() 
  // metodi yoki mantiqiy qiymatni matn ko'rinishiga aylantirish operatorini (String()) ishlatishingiz mumkin. 
  // Quyidagi misollar orqali bu amalni ko'rish mumkin:

  // Oddiy usul:
  console.log(true + '') // "true"

  // Metod bilan:
  let baho = true;
  console.log(baho.toString()); // "true"

  // function bilan: operator blan 
  let bah = true;
  console.log(String(bah)); // "true"

}

// 42 - test 
{
  console.log(null + 1) // 1 - null 0 ga teng yane bu karopka degandik 0 ga +1 ni qushsak 1 buladi 
  console.log(null + '1') // null1 - string bulganligi uchun null ga 1 ni yopishtirib quyadi
  console.log(null + true) // 1 - true 1 ga teng bulganligi uchun 1 chiqadi
  console.log(0 + true) // 1 - tepadagi null + true blan bir hil 0 _ true 1 ga teng shuning uchun 1 chiqadi 
}

// 49 - test 
{
  let arr = [1,2,3,4,5,6,7,8,9,10]
  let res = arr.filter((value,index) => {
    return value % 2 === 0
  })
  console.log(res) // [ 2, 4, 6, 8, 10 ]
}

// intervuew da dublikate bulgan malumotlarni chiqarib tashlashni kursat desak
// buni new Set daham qilsak buladi chunke bu yunik key qabul qilganligi uchun dublikate larni chiqarib qashlaydi 
// deb buniham qushib ketsak ajoyib buladi kiyin index holatini kursataverasiz

// 54 - test 
{
  let ar = [1,1,2,2,3,2,4,3,1,4,5,2,5,3,5]
  // usul 1
  let set = new Set(ar) // Set(5) { 1, 2, 3, 4, 5 } - endi biz buni arrayda utkazib olishimiz kerak
  let arr = [...set] // [1, 2, 3, 4, 5 ]

  // usul 2 qisqaroq (aptemal usul)
  let se = Array.from(new Set(ar)) // shu yirni uzida dubleketlarni yuq qilib birdan arrayga aylantirib yubordi 
}

// 64 - test 
{
// JavaScript'da necha xil Error(xatolik) turlari bor ?

// JS'da 7 ta Error turlari bor.
// Keling ularni 3 ta eng mashxurlari bilan tanishib chiqamiz.

// 1. ReferenceError
// - Bu xatolik, dasturda mavjud bo'lmagan o'zgaruvchiga kirishga urunishda kelib chiqadi. Masalan:

// console.log(someVar);
// 🚫 ReferenceError:  someVar is not defined

// 2. SyntaxError
// - Bu Error JavaScript sintaksiga mos bo'lmagan kod yozilsa kelib chiqadi. Parsing jarayonida(kod hali ishlashni boshlamasidan avval) bu xatolik topiladi. Masalan:

// const class 1231; 
// 🚫 SyntaxError: Unexpected token 'class'

// 3. TypeError
// - Bu xatolik ko'pincha biror qiymatni tipiga mos kelmagan amallar qilishga urunishda kelib chiqadi. Masalan:

// const boo = true;
// boo.sort();
// 🚫 TypeError: boo.sort is not a function

// Qolgan 4 ta unchalik mashxur bo'lmaganlarini esa siz azizlarni o'zingizga qoldiraman. Postimiz uzun bo'lmasligi uchun ularni yozib o'tirmadim.
}

// 65 - test
{
  // IIFE - function ichidagi var function dan tashqaridaham 
  // ishlaydi bu bizga quyidagi mumommolarni keltirishi mumkun 
  // Misol: out verable blan scope verable nomi birhil bulsa valuesi bir biri blan almashib ketishi mumkun 


  // var
  var user = 10
  console.log(user) // 10
  function getUser () {
    var user = 40 // bu ishlaganda out use ning qiymatini yangilab yuboradi
    console.log(user) // 40 - hamma userning qiymati 40 ga teng buldi 
    // oddiy qiymatni uzgartirish bulyapdi var scope dan tashqarida ishlaganligi uchun 
  }
  getUser()
  console.log(user) // 40 - var global bulganligi uchun fnc ishlaganda user 10 {} ichidagi user 40 ga teng bulyapdi va qiymat 40 ga uzgaryapdi
  // bizga jaob 10 bulish kerak edi lekn var global bulganligi uchun scope tashqarisidagi qiymatni scope ichida uzgartirib uni tashqarida yana ishlatsak buladi

  // var da shunaqa holatlarda hatoliklar bulib turadi scope ichidagi verable blan tashqaridagini nomi birhil bulsa ikkalasi bittas verable hisoblanib ketadi 
  // var da kod yozibham buni tugi'rlash mumkun buning uchun IIFE dan foydalanamiz 

  // -=-=-=-=-= IIFE - immediately invoked function expression 

  // tepadagi varda bulgan hatoni tug'irlashda ishlatiladi 

  // biz functionni ()  ichiga olishimiz kerak buladi functionimiz nomiz expression function bulishi kerak 

  var us = 10
  // console.log(us)
  // (function () {
  //   var us = 30;
  //   console.log(us)
  // })() // 2 - () bu qavs bizga fnc ni chaqirish uchun  kerak buni nomi bulmaganligi uchun nomini yozib chaqirolmaymiz name(qilib)
  // () buni ichida bulgandan kiyin var bulsaham uzining scope dan tashqarida ishlolmaydi 
  console.log(us) // 10 chiqadi chunke fnc ishlagandaham uni ichidagi us faqat scope ichida ishlaydigan bulib qoladi 
  // va scope dagi us out dagi us ni qiymatini uzgartirmaydi 

  // varni Shu holatda scope dan tashqarida ishlamaydigan qilsak buladi 
  // IIFE - deb shunda aytiladi 

  // ChatGPT malumoti 
  {

    // IIFE, yoki "Immediately Invoked Function Expression," JavaScript dasturlash tilida 
    // odatda ishlatiladigan bir funktsiyani ifoda sifatida yaratishning bir usuli. 
    // Bu usul bilan funktsiyani tashkil etish va o'z ichida yaratish, shu sohada ishlatish va 
    // natijada tushunishni osonlashtiradi.

    // IIFE qisqa ko'rsatilganda, bu funktsiyani tashkil etish va bitta nechta 
    // qadamlarni bitta ifoda ichida bajarishni anglatadi. 
    // Bu, o'zgaruvchilar va funktsiyalar doimiy nomsiz bo'lishi va keng foydalanilmasi uchun 
    // ma'lum bir doimiy kontekstga ega bo'lishi mumkinligini ta'minlayadi.

    // Oddiy ko'rinishda IIFE quyidagicha ko'rsatilishi mumkin:

    (function() {
      // IIFE tarkibi
      // Bu joyda kod yoziladi
     })();

    //  Bu quyidagi nuqtai nazarlarni o'z ichiga oladi:
  
    // 1. (function() {...}): Funktsiya ifodasi.
    // 2. () oxiri: Shu qism ifodaning oxiri bo'lib, funktsiyani chaqirishni bildiradi.
    // 3. Barcha IIFE kodini funktsiya ifodasi ichida yozish.

    // Bu usulga misol:

    (function() {
      var x = 10;
      var y = 20;
      console.log(x + y);
    })();

    // Bu yerda, IIFE orqali x va y o'zgaruvchilari yaratiladi va ularni yig'indisini konsolga chiqaradi.
    // IIFE lar, alohida funktsiya nusxalari yaratishga yoki ma'lumotlarni o'zgaruvchilar yordamida joylashtirishga kerak bo'lmagan, 
    // lekin kodni murakkab ifodalardan tozalab olishga yordam berishi mumkin.
  
     }


}

// 67 - test 
{
  //         0 1 2 3 4 5 6 7 8 9
  let arr = [1,2,3,4,5,6,7,8,9,10]
  let res = arr.filter((value, index) => {
  return index%2 === 0?index:''
  })
  console.log(res)
  console.log(res.reduce((a,b) => a+b,0))
}


// Interveuw da sizga masala bergan bulsa birdan masala yishishga shoshib ketmang 
// birinchi intervuew olyotgan kishiga siz topgan yichim (qanday yichilishi)  haqaida aytib kiyin masalani ishlang 

// 70 - test
{
  // Bitwise operatorlar kompyuter dasturlash va ma'lumotlar bilan ishlashda foydalaniladigan amallardir. 
  // Bu operatorlar ma'lumotlar to'plamlari (bitlar) darajasidagi amallarni bajarish uchun ishlatiladi. 
  // Bitlar, kompyuterda ma'lumotlarni kuzatishning eng kichik yegindisidir va 0 yoki 1 qiymatini olishi mumkin bo'lgan eng yomon komponentlardan biridir.

  // Quyidagi bitwise operatorlar eng ko'p ishlatiladiganlaridan ba'zilari:

  // AND (&): Har bir bitni ikkala ma'lumotlarning mos bitlari bilan solishtiradi. Agar ikki bit ham 1 bo'lsa, natija 1 bo'ladi; aks holda natija 0 bo'ladi.
  // Agar u = 5 (0101) va v = 3 (0011) bo'lsa, u & v natijasi quyidagicha hisoblanadi:
  // 0101   (u)
  // & 0011   (v)
  // ---------
  // 0001   (Natija)
  // Natija: 0001 (1)


  // OR (|): Har bir bitni ikkala ma'lumotlarining bir yoki ikkalasi yoki  ularning ikkalasiga ham tegishli bo'lsa, natija 1 bo'ladi; aks holda natija 0 bo'ladi.
  // Agar p = 5 (0101) va q = 3 (0011) bo'lsa, p | q natijasi quyidagicha hisoblanadi:
  // 0101   (p)
  // | 0011   (q)
  // ---------
  // 0111   (Natija)
  // Natija: 0111 (7)


  // XOR (^): Har bir bitni ikkala ma'lumotdan faqat bittasi 1 bo'lsa, natija 1 bo'ladi; aks holda natija 0 bo'ladi.
  // Agar x = 5 (0101) va y = 3 (0011) bo'lsa, x ^ y natijasi quyidagicha hisoblanadi:
  // 0101   (x)
  // ^ 0011   (y)
  // ---------
  // 0110   (Natija)
  // Natija: 0110 (6)

  // NOT (~): Berilgan bitni o'zgartiradi: 0 ni 1 ga va 1 ni 0 ga aylantiradi.
  // Agar z = 5 (0101) bo'lsa, ~z natijasi quyidagicha hisoblanadi:
  // ~0101   (z)
  // ---------
  // 1010   (Natija)
  // Natija: 1010 (-6, 2-komplement formatda)


  // Shift operatorlari (<< va >>): Bitlarni bitta yoki bir nechta joylarga o'girish yoki chiqarish uchun ishlatiladi. << operatori bitlarni chapga, >> operatori esa o'ngga ko'chiradi.
  // Agar m = 5 (0101) bo'lsa, m << 1 va m >> 1 operatsiyalari quyidagicha hisoblanadi:
  // 0101   (m)
  // << 1
  // ---------
  // 1010   (Natija)
  // Natija: 1010 (10, bitta chapga o'girildi)


  // Natija: 1010 (10, bitta chapga o'girildi)
  // 0101   (m)
  // >> 1
  // ---------
  // 0010   (Natija)
  // Natija: 0010 (2, bitta o'ngga chiqarildi)

  // Bitwise operatorlar ko'p joyda kriptografiyada, dasturlarni optimallashtirishda, ma'lumotlarni sifatli saqlashda va 
  // boshqa yerdagi ma'lumotlar bilan ishlashda foydalaniladi. Bularni tushuntish uchun quyidagi misolga e'tibor bering:

  // Agar a = 5 va b = 3 bo'lsa:

  // a | b = 7; 
  // a ^ b = 6
  // ~a = -6 (Ushbu natija 2-komplement formatda hisoblanadi)
  // a << 1 = 10 (bitta chapga o'girildi)
  // b >> 1 = 1 (bitta o'ngga chiqarildi)

  // Shuningdek, bitlarning kuzatish va o'rganishning asosiy qismi sifatida, amaliyotda qanday maqsadlar uchun foydalanishlarini tushuntirish muhim.

  // Agar sizga "Bitwise operatorlar nima?" 
  // deb so'ralsa, quyidagi tafsilotlar bilan javob bera olishingiz yaxshi bo'ladi
  {
    // Bitwise operatorlar, JavaScriptda ma'lumotlar to'plamlari (bitlar) darajasidagi amallarni bajarish uchun foydalaniladigan amallardir. Bu operatorlar ma'lumotlar to'plamini 0 (false) va 1 (true) qiymatlari bilan mantiqiy qarashda ishlaydigan xususiyatlardir. Bu ma'lumotlarni bitta bittaga solishtirish, moslashish va amallar bajarish uchun ishlatiladi.

    // Quyidagi bitwise operatorlarni JavaScriptda foydalanishingiz mumkin:

    // AND (&): Har bir bitni ikkala operandning mos bitlari bilan solishtiradi. Agar ikki bit ham 1 bo'lsa, natija 1 bo'ladi; aks holda natija 0 bo'ladi.

    // OR (|): Har bir bitni ikkala operandning bir yoki ikkalasi yoki ham ularning ikkalasiga tegishli bo'lsa, natija 1 bo'ladi; aks holda natija 0 bo'ladi.

    // XOR (^): Har bir bitni ikkala operanddan faqat bittasi 1 bo'lsa, natija 1 bo'ladi; aks holda natija 0 bo'ladi.

    // NOT (~): Berilgan bitlarni o'zgartiradi: 0 ni 1 ga va 1 ni 0 ga aylantiradi.

    // Shift operatorlari (<< va >>): Bitlarni bitta yoki bir nechta joylarga o'girish yoki chiqarish uchun ishlatiladi.

    // Bitwise operatorlar, kriptografiya, dastur optimallashtirish, ma'lumotlarni sifatli saqlash va boshqa sohalarda foydalanishga imkon beradi.
  }

}

// 71 - test 
{
const arr = [1, 2, 3];
const MappedArr = arr.map(element => [element, element * 2]);
// arr ichini map aylanganda [har bir elementni, va element * 2] ni chiqarsin deyapmiz

console.log(MappedArr); // [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]
// value shu holatda chiqadi  arra ichidagi ichi array bulib chiqyapdi 
// nistet (ichki) arraylarni arraydan chiqarish uchun .flat(),(1),(2) dan foydalanardik
console.log(MappedArr.flat()) // [ 1, 2, 2, 4, 3, 6 ]

// FlatMap bu ikkala methodening birlashgani hisoblanadi 
// bu birdan arr ni map qilib harbir malumotni  oladi va chiqyotgan javobda ichki arraylar bulsa hammasini 
// [] larini uchirib bitta array holiga keltiradi 

const flatMapedArr = arr.flatMap(element => [element, element * 2])
console.log(flatMapedArr) // [ 1, 2, 2, 4, 3, 6 ]

// bu faqat array ichidagi birinchi arraylarni uchiradi [1,[2],3,[4]]
// array [1,[2,[3]] [4]] bulsa bunga nevara hisoblangan [ididagi ichki 2] array larni uchirolmaydi
// value [1,2,[3],4] yane array ichidagi 1-arraylarning ichki arraylarini uchirolmaydi 

const Map = arr.map(element => [element, [element * 2]])
console.log(Map) // [ [ 1, [ 2 ] ], [ 2, [ 4 ] ], [ 3, [ 6 ] ] ]

// flatMap da qilganda
const flatMap = arr.flatMap(element => [element, [element * 2]])
console.log(flatMap) // [ 1, [ 2 ], 2, [ 4 ], 3, [ 6 ] ] - array ichidagi birinchi arraylarni uchirib beryapdi 

}

// 72 - test 
{
  // Rekursiya, dasturlashda bir funksiyaning o'zini chaqirib yuborish konsepti hisoblanadi. 
  // Bu, funksiya ichida o'zini qayta chaqirib yuborish imkonini beradi. 
  // JavaScript dasturlash tilida rekursiv funksiyalar yaratish oson.

  // Rekursiv funksiya quyidagi xususiyatlarni o'z ichiga oladi:

  // 1. Base Case (Asosiy holat): Bu, rekursiv funksiyani to'xtatish uchun kerak bo'lgan shartni 
  //    ifodalaydi. Agar bu shart bajarilmasa, funksiya o'zini qayta chaqiradi.

  // 2. Recursive Case (Qayta chaqirish holati): Bu qismida funksiya o'zini o'z ichiga chaqiradi, 
  //    lekin boshqa argumentlar bilan.Bu qismi bajarilgandan so'ng funksiya yana o'zini chaqirib yuboradi.

  // Quyidagi misol JavaScript'da rekursiv funksiyani ifodalaydi. 
  // Ushbu misolda faktorial hisoblaydigan rekursiv funksiya ko'rsatilgan:

  function factorial(n) {
    // Base case
    if (n === 0) {
      return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Natija: 5 * 4 * 3 * 2 * 1 = 120

  // Bu misolda factorial funksiyasi o'zini chaqirish orqali faktorialni hisoblayadi. 
  // 5 faktoriali 5 * 4 * 3 * 2 * 1 = 120 ga teng.

  // Rekursiv funksiyalar yaratishda ehtiyotkor bo'lish kerak, chunki boshqarishi qiyin bo'lishi mumkin.
  // Har qanday rekursiv funksiya n ko'rsatkichlarida o'zini chaqirish natijasida "call stack" 
  // ta'sir qilishi mumkin, va agar funksiya juda ko'p marta chaqirilsa, "stack overflow" 
  // xatosi yuzaga kelishi mumkin.

  // Siz rekursiv funksiyalarni yaxshi tushuntirib, ularni yaratishda va 
  // qo'llab-quvvatlashda ehtiyotkor bo'lishingiz kerak.

}



// 84 - test
{
  // -=-=-=- Event Loop
  // JavaScript codni tepadan psaga bittalab uqiydi
  // cod uqish jarayonida kup vah olaydigan functionlar  ni kutib utirmaydi ularni web AP ga utkazadi va 
  // uyirda berilgan vahtni tugatib brdan Call Stack ga utolmaydi u birinchi kutishga Callback Queue ga tushadi
  // va uyirdan hamma sinxron code ishlab bulgandan kiyin call Stack ga utadi Shu jarayonga Event Loop deyiladi 

  // Misol:
  console.log(1)

  setTimeout(()=> {
    console.log(2)
  },1000)

  console.log(3)
  // aslida javob 1,2,3 chiqish kerak edi bizga, lekn setTimeout asinxron bulganligi uchun uni uqimasdan Web AP ga yuboradi 
  // uyirda berilgan vahtini tugatib kutishga Callback Queue ga tushadi endi bu hamma code ishlab bulgandan 
  // kiyin navbati keladi va call Stack ga tushadi va 3 dan kiyin chiqadi. 
  // value: 1,3,2 

  // shu link orqali biz event loop qanday ishlashini ishlatib kurishimiz mumkun 
  // http://latentflip.com/loupe/
  // jarayon qanday bulishini yaqqol kurasiz 
}






// 140 - test 
{
  // ArrayBuffer bu uzunligi aniq bulgan bitelar qatori hisoblanadi  
  // eleon qilish 
  let buffer = new ArrayBuffer(4) // [00000000  00000000  00000000 00000000] - shu holatda buladi har bir bit da 8 ta bet buladi bizda 4 ta bit bor 
  // elon qilingan paytda buning barcha betlari 0 ga teng buladi 

}



let a = 5
let b = 3
let v = 0111
console.log(a.toString(2))
console.log(v.toString(10))
console.log(a & b)

// console.log('salom')
// const x = '' || 1909 /
// const x = '' && 1909 /
// console.log(x)