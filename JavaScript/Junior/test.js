// 1. Booleandagi operatorlar qaysilar? 
// 2. JavaScriptdagi Data Typelar qaysilar?
// 3. Number va BigInt farqi nimada?
// 4. Booleandagi operatorlar qaysilar?
// 5. Undeclared, Undefined va Null o'rtasidagi farq nima?
// 6.  let, const va var farqi nima?
// 7. "=", "==" va "===" operatorlari nima vazifa bajaradi?
// 8. Kompilyator va interpreter farqi nimada?
// 9. High-level va low-level dasturlash tillari nima degani?
// 10. Funksiyalar nima uchun kerak? JSdagi funksiya turlari qaysilar?
// 11.Function expression, function declaration va arrow functionni farqi nimada?
// 12. Pop va push metodlari nima vazifa bajaradi?
// 13. JavaScript Engine qanday ishlaydi?
// obj  
// 14. Obj ichidagi malumotni necha xil usulda chaqirib olsak buladi?
// 15. keylarni . blan va [] da chaqirishni nma farqlari bor
// 16. 2 ta bir birga (a = b) qilib tenglashtirilgan obj blan a = structuredClone(b) qilib tenglashtirilgan objlarning nma farqlari  bor+
// 17. obj ing faqat key larini qonday qilib olsak buladi 
// 17. obj ichida malum bir key bor yuqligini qanday aniqlash mumkun 
// 18. obj ichidagi qiymatni qanday uzgartirish mumkun 
// 19. obj key va valuning qisqartirma shakli ????? 
// 20. JavaScript Engine nma

// 21. PREMITIVE va NOPRIMITIVE type lar nima+
// 22. nmaga 2 ta NOPRIMITIVE data type  valusi bir xil bulsaham bir biriga teng bulmaydi va ularning Stack va Heap da joylashishini ayting ?
// 23. a = b bir biriga tenglashtirilgan 2 ta obj. a.name = 'john' qilsa nma buladi va a = {hello} qilsa nma buladi ?
// 24. Spread operator haqida malumot bering
// 25. for in nma
// 26. Garbage Collection nma ?
// 27. .map() nma
// 28. construktor function nma 
// 29. new Set bulganda nmaga dubleketlarni chiqarib yuboradi
// 30. new Set new Map lar blan weakSet WeakMap ning farqi nmada 
// 31.  Symbol nma va nma vazifa bajaradi
// 32. return blan va retun siz yozilgan function ni farqi?
// 33. for loop, while, do while farqlari nmada?
// 34. shadow verable nma ?
// 35. functionlarni nechi hil usulda yaratda buladi?
// 36. This haqida malumot bering
// 37. Obj ichidagi keylarni thes.key qilb chaqirganimiz blan obj.key qilib chaqirganimizni nma farqi bor
// 38. CRUD nma
// Josh 2 intervuew
// 39. Type Conversion nma ?
// 40. parseInt nma
// 41. Operator va Methode nma ? -
// 42. null +1, null + '1', null + true, true + 0 javoblari qanday chiqadi
// 43. hoisting nma
// 44. a = ; // qilsak nma buladi let va varni uzidan pasta chaqirib // let, var a = 123 
// 45. ulig zona nma
// 46. Scoblar nma va ular haqida malumot bering 
// 47. uzingiz bilgan Array Methodelarini sanab tushintirib bering bering 
// 48. {map, forEach,} {filter, find,} some, every, reduce, {splice, slice},{push, pop, shift, unshint} methodelari haqida gapirib bering va {} ichidagilarning bir biridan farqini tushintirib bering  
// 49. filterdan foydalanib array ichida 10 gacha bulgan sonlar orasidan faqat fuftlarini chiqarisng
// 50. let ar = [1,2,3,4,5] ar.splice(0,2) shu holatda tepadagi array qanaqa holatga keladi ----
// 51. Set, WeakSet, Map WeakMap lar nima va ularning farqlari qanday
// 52. Obj ga qanday keylar bersak buladi 
// 53. Obj key ga qanday qiymatlarni bersak buladi 
// 54. new Set orqali arraydagi deblikate valuelarni olib tashlang va value ni array ga uzgartirirng
// 55. this nma ?
// 56. this body, obj, function, ichlarida yozilsa nmalar chiqadi. 
// 57. this qanday functionlarda ishkamaydi va ularni ishlatish uchun nma qilish kerak.
// 58. this function ichida ishlatilganda tug'ri malumot chiqaishi uchun nma qilishimiz kerak 
// 59. costructor function nma va qanday ishlaydi 
// 60. .call(), .apply(), .bind()
// 61. first class functions
// 62. Hegher Order function
// 63. Closuer
// 64. Error types ?
// 65. IIFE // Immediately invoked function 
// 66. Currying
// 67. arr[1,2...,10] Juft sonli indexdagi qiymatlar yigi'ndisini top (indexsi juft bulgan sonlar)
// 68. Optional chaining nma ? 
// 69. Lexical Envirmonment nma ?
// 70. Bitwise Operator ?
// 71. FlatMap ?
// 72. 
// 73. 
// 74. 
// 75. 
// 76. 
// 77. 
// 78. 
// 79. 
// 80. 
// 81. 
// 82. 
// 83. 
// 84. 
// 85. 
// 86. 
// 87. 
// 88. 
// 89. 
// 90. 
// 91. 
// 92. 
// 93. 
// 94. 
// 95. 
// 96. 
// 97. 
// 98. 
// 99. 
// 100. 

let a = { 1: 0, 2: 1, 3: 2 };
let b = { 1: 0, 2: 1, 3: 2 };

console.log(a == b);
console.log(a === b);

let g = 32;
let h = 32;

console.log(typeof 1)
console.log(typeof null)
console.log(typeof 'null')
console.log(typeof 23n)
console.log(typeof {})
console.log(typeof Symbol())
