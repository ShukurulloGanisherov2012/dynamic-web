let ism = prompt("Ismingizni kiriting: "); // ism=Shukurullo
let length = ism.length; // ismning uzunligini topib beradi - 10
let char = ism.charAt(0); // ismning 0 chi yani 1-harfini topib beradi - S
let at = ism.at(1); // at ham charAt ga o'xshaydi faqat u manfiy sonlarda ishlaydi charat faqat musbat sonlarda ishlaydi - h
let array = ism[2]; // ismning 2 chi yani 3-harfini tpib beradi - u
let slice = ism.slice(0, 2); // ismning 0 yani 1-harfidan 2-harfigacha chiqaradi - Sh
let substring = ism.substring(0, 3);//ismning 1-harfidan 3-harfigacha chiqaradi - Shu
let substr = ism.substr(0,4);//ismning 1-harfidan boshlab 4-harfigacha chiqaradi - Shuk
let uppercase = ism.toUpperCase(); // ismning hamma harfini katta qilib beradi - SHUKURULLO
let lowerrcase = ism.toLowerCase();// ismning hama harfini kichik qilib beradi - shukurullo
let concat = ism.concat(" ", "Front_end") // ism ga Front_end ni birlashtiradi - Shukurullo Front_end
let padStart = ism.padStart(30, "Front_end developer ") // ismning uzunligi 30 bo'lguncha Front_end developer ni qo'shib beradi - Front_end developer Shukurullo 
let padEnd = ism.padEnd(56, " the best web developer in the acedemy IT_Live") // bu ham xuddi shunday faqat bu ismning old tomoniga qo'yib beradi Shukurullo the best web developer in the acedemy IT_Live
let repeat = ism.repeat(3) // ism ni 3 marta takrorlab chiqarib beradi - ShukurulloShukurulloShukurullo
let replace = ism.replace("Shukurullo", "Front_end developer") // ism Front_end developer ga o'zgaradi - Shukurullo=Front_end developer

console.log("Your name consists of", length, "letters;")
console.log("Your name starts with", char, ";")
console.log("The second letter of your name is", at, ";")
console.log("The third letter of your name is ", array, ";")
console.log("Your name starts with <<",slice,">>;")
console.log("Your name starts with <<",substring,">>;")
console.log("Your name starts with <<",substr,">>;")
console.log("The appearance of the capital letters of your name is", uppercase, ";")
console.log("The lower case letters of your name is", lowerrcase, ";")
console.log("Your name is",ism,"and you are Front_end developer;")
console.log("Your name and your degree -",padStart, ";")
console.log("The information about you -",padEnd, ";")
console.log("Your name (repeat 3) -",repeat, ";")
console.log("Your name has been changed to",replace, ";")

// 14 ta funksiyani ishlatdim     =>         {string methods}