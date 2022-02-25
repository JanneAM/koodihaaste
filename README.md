# Koodihaaste

## Käytetyt teknologiat

- Projektin käyttöliittymä on toteutettu React-kirjastolla
- Projektissa käytettyjä kieliä on Javascript, HTML ja CSS.
- Käyttöjärjestelmänä minulla on Windows, minkä päällä pyöritän WSL2 - yhteyden kautta Ubuntua.

## Projektin pystytys

- Asenna NodeJS https://nodejs.org/en/download/
- Aja projektin juuressa komentoriviltä käsky `npm install` Tämä lataa tarvittavat koodipaketit projektille.
- Kun paketit on ladattu aja samassa kansiossa käsky `npm start` Tämä käynnistää virtuaalisen palvelimen jolla projekti pyörii
ja avaa projektin uudelle välilehdelle selaimeen.

## Kuvaus

- Käyttöliittymästä voi valita kolmen eri auton väliltä pudotusvalikosta.
- Käyttöliittymä ilmoittaa vastaukset kahden desimaalin tarkkuudella Laske-nappia painamalla, kun käyttäjä on syöttänyt tarvittavat arvot (nopeudet ja ajettavan matkan pituuden)
- Jos käyttäjä on syöttänyt kenttiin jotain muuta kuin numeerisia arvoja, niin sovellus ei toteuta laskuja ja ilmoittaa virheestä.
- Sovelluksen koodi on jaettu kahteen eri kansioon, käyttöliittymään ja funktioihin.
- Käyttöliittymän koodi sisältää React-koodin, jota apuna käyttäen käyttöliittymä renderöidään selaimeen.
- Funktio - kansio sisältää koodin laskutoimitusten tekemiseen, joita käytetään matka-aikojen, kulutusten ja erotusten laskemiseen.