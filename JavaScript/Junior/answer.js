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
let a = 5
let b = 3
let v = 0111
console.log(a.toString(2))
console.log(v.toString(10))
console.log(a & b)