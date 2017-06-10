'use strict'

var student = {
    imie: "Kaja",
    wzrost: 152,
    wyswietlDane: function() {
        console.log(this.imie)
    }
}
/* this odnosi sie do obiektu w pokreconym nawiasie  */

student.wyswietlDane();

console.log(student);
