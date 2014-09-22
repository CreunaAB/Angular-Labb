# Angular Labbkväll - Förbättrad version av Timegrip

## Installation
- `git clone git@github.com:charlotteholmen/Angular-Test.git`
- Projektet måste köras på en HTTP-server. Om du inte vet hur man gör så kan du använda följande:
    - Om du ej har npm: `curl https://npmjs.org/install.sh | sh`
    - `npm install http-server -g`
    - `http-server`
    - Nu kan du komma åt applikationen på http://0.0.0.0:8080

## Minimikrav:
Applikationen ska förstås vara byggd i Angular och innehålla åtminstone vyn där vår tidsrapportering sker. Man kan utforma applikationen ungefär som den ser ut idag, men roligast är om vi får in lite idéer på hur den kan förbättras. 
![](http://f.cl.ly/items/0n2A3h2Z1b3F3i372Y0p/Image%202014-09-19%20at%206.06.48%20pm.png)

#### Följande ska finnas med:

- Möjlighet välja datum, projekt, aktivitet, timmar och ange beskrivning för timposter man vill lägga inn.
- Validering av data som användaren matar in.
- På något sätt visualisera en sammanställning över de timmar man rapporterat.
- Möjlighet att editera / ta bort timposter.

## Förslag på vidareutveckling om ni hinner:
- Plocka in listan över våra riktiga projekt som ligger under data/projecs.json *Tips: använd angulars inbyggda service [$http](https://docs.angularjs.org/api/ng/service/$http)*
- Förbättrad hantering av projektval (egen lista för "mina projetk", autocomplete eller motsv.)
- Lägga till flera vyer (t.ex. Min sida 4v framåt) *Tips: använd [angular-route](https://docs.angularjs.org/api/ngRoute/service/$route)*
- Koppla på en riktig databas där timposter synkas med klientens data.
- Animationer *Tips: använd [angular-animate](https://docs.angularjs.org/guide/animations)*
- Göra en datumväljare *Tips: det finns många färdiga komponenter man kan plocka in, t.ex [Angular-UI/bootstap](http://angular-ui.github.io/bootstrap/)*

## Tips & resurser
- Korta och pedagogiska screencasts på lika angularkoncept på [egghead](https://egghead.io/articles/new-to-angularjs-start-learning-here#directives)
- Angulars egna [snabbtutorial](https://docs.angularjs.org/tutorial/step_00)
- Code schools interaktiva [shaping up with angular](https://www.codeschool.com/courses/shaping-up-with-angular-js)
- Angaulars [Developer guide](https://docs.angularjs.org/guide) som går in lite mer på djupet.