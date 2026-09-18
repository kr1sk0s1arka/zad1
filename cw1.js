let a = prompt("wprowadź pierwszą liczbę: ");//pierwsza wprowadzona liczba
document.write(a + '<br>');

let b = prompt("wprowadź drugą liczbę ");//druga wprowadzona liczba
document.write(b + '<br>');

let c = prompt("wprowadź trzecią liczbę ");//trzecia wprowadzona liczba
document.write(c + '<br>');

let d = parseInt(a) + parseInt(b) + parseInt(c);//wynik wprowadzonych liczb
document.write('wynik dodawania liczby ' + a + ' + ' + b + ' + ' + c + ' = ' + d + '<br>');

let e = parseInt(d) / 3;//średnia
document.write('średnia z tych liczb wynosi ' + e + '<br>');

let f = prompt('wprowadź liczbę (pierwiastek)');//pierwiastek
document.write(Math.sqrt(f) + '<br>');

let g = prompt('wprowadź liczbę a ');//pole prostokąta
let h = prompt('wprowadź liczbę b');
let i = g * h;
document.write('pole prostokąta wynosi ' + i + '<br>');

let j = prompt('podaj długość pierwszego boku');//pole prostopadłościanu
let k = prompt('podaj długość drugiego boku');
let l = prompt('podaj długość trzeciego boku');

let pole = 2 * (j * k + j * l + k * l);
document.write('pole prostopadłościanu wynosi ' + pole + '<br>');

let r = prompt('podaj promień koła');//pole i obwód koła
let kpole = 3.14 * r * r;
let obw = 2 * 3.14 * r;

document.write("pole koła = " + kpole + "<br>");
document.write("obwód koła = " + obw + "<br>");

let cena = prompt('podaj cenę benzyny za litr');//koszt przejazdu Gdańsk-Szczecin
let trasa = 360;
let spalanie = 8;

let zuzycie2 = trasa * spalanie / 100;
let koszt = zuzycie2 * cena;

document.write("zużycie paliwa = " + zuzycie2 + " litrów" + "<br>");
document.write("koszt przejazdu = " + koszt + " zł" + "<br>");

let cena2 = prompt('podaj cenę benzyny za litr');//koszt przejazdu dla dowolnej trasy
let trasa2 = prompt('podaj długość trasy w km');
let spalanie2 = prompt('podaj spalanie samochodu na 100km');

let zuzycie3 = trasa2 * spalanie2 / 100;
let koszt2 = zuzycie3 * cena2;

document.write("Koszt przejazdu = " + koszt2 + " zł" + "<br>");

let kwota = parseFloat(prompt('podaj kwotę lokaty'));//lokata
let oprocentowanie = 0.08;
let podatek = 0.19;

let odsetkibrutto = kwota * oprocentowanie;
let podatekbelki = odsetkibrutto * podatek;
let zysknetto = odsetkibrutto - podatekbelki;

document.write("odsetki brutto = " + odsetkibrutto + " zł<br>");
document.write("podatek Belki = " + podatekbelki + " zł<br>");
document.write("zysk netto = " + zysknetto + " zł<br>");
document.write("kwota po roku = " + (kwota + zysknetto) + " zł");

