"use strict";
// __________________1 item__________________________
//  Зачем нужны чистые функции? Ответьте своими словами =>{
// понятие Чистые функции - это функции которые принимают одни и теже 
//входные аргументы и на выходе получаем неизменяемый результат.да такие функции никак 
// никак не взаимодействуют с внешним кодом.Благодаря всему выше сказному такие функции проще теститровать
//и да и читабельность их в разы лучше
// }

//
// __________________4 item__________________________

// document.querySelector(".form__btn").addEventListener("click", (e) => {
//     alert(get_input_value())
//     e.preventDefault();
// })

// function get_input_value(){
//     let list_value = [];
//     document.querySelectorAll(".form__input").forEach((div_input) => {
//         list_value.push(div_input.value)
//     })
//     return `${list_value[0][0]}.${list_value[1][0]}`
// }

// ____________________5 item__________________________

// function number_of_vowels(word=prompt("Введите слово").toLowerCase()){
//     let counter        = 0,
//         vowels_letters = "аоуыэеёиюя";
    // простой вариант
    // for (let letter of word){
    //     if (vowels_letters.includes(letter)){
    //         ++counter 
    //     }
    // }

    // однострочный вариант
//     word.split("").map(item => {if (vowels_letters.includes(item)) ++counter})
//     return counter;
// };
// alert(`Кол-во гласных в слове: ${number_of_vowels()}`)

// ____________________6 item__________________________

// function bank(time_bank,investment_amount){
//     while (time_bank > 0){
//         investment_amount += investment_amount/100*10;
//         time_bank -= 1
//     }
//     console.log(`По итогу вы получите:${investment_amount}рубля`)
// }
// let time_bank         = prompt("на сколько лет хотите сделать вклад?"),
//     investment_amount = prompt("Введите сумму вклада");

// bank(time_bank,+investment_amount)

// ____________________7 item__________________________
// function palindrome(word){
//     let check_for_palindrome = (word) => word.split('').reverse().join('') == word;
//     if (check_for_palindrome(word)){
//         console.log(`Слово "${word}" является паллидромом`)
//     }else{
//         console.log(`Слово "${word}" не является паллидромом`)
//     }
// }

// palindrome("потоп") 

// ____________________8 item__________________________
function animals(number_animals){
    let last_digit      = +number_animals.toString().slice(-1);
    let last_two_digits = +number_animals.toString().slice(-2);
    if (last_two_digits >= 11 && last_two_digits < 15){
        return `Вот вам ${number_animals} кродилов`
    }
    return (last_digit == 1 ? `Вот вам ${number_animals} кродил`:
            last_digit >= 2 && last_digit <= 4 ? `Вот вам ${number_animals} кродила`:
            `Вот вам ${number_animals} кродилов`)
}
console.log(animals(+prompt("Сколько вам кродилов?")))
