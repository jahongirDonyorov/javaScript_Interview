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