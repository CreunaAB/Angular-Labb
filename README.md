# Angular Labbkväll - Förbättrad version av Timegrip

## Installation
- `git clone https://github.com/charlotteholmen/Angular-Labb.git`
- Starta en HTTP-server:
    - Om du ej har npm: `curl https://npmjs.org/install.sh | sh`
    - `npm install http-server -g`
    - `http-server`
    - Surfa till: http://0.0.0.0:8080
- Lägg upp repo på [CreunaLabs](https://git.creuna.se/projects/CRELA/repos?create)
    - Döp repot till Angular-Labb-dittnamn
    - Kör `git remote set-url origin ditt-repo`

## Uppdrag:
Såhär ser vår Timegrips rapporteringsvy ut idag. Bygg en likadan eller förbättrad version i AngularJS så långt du hinner. Försök på att få med så många Angulars funktioner som möjligt. 
![](http://f.cl.ly/items/0n2A3h2Z1b3F3i372Y0p/Image%202014-09-19%20at%206.06.48%20pm.png)

#### Minimikrav:

- Möjlighet att välja datum, projekt, aktivitet, timmar och ange beskrivning för timposter man vill lägga in.
- Möjlighet att lägga till / editera / ta bort timposter.
- Validering av data som användaren matar in.
- Visualisering av timposter.
- Läs in data i form av JSON. Använd exempelvis filen data/projecs.json *Tips: använd angulars inbyggda service [$http](https://docs.angularjs.org/api/ng/service/$http)*

#### Har du tid över?
- Möjlighet att toggla "mina projekt" eller "alla projekt"
- Lägga till flera vyer (t.ex. Min sida 4v framåt) - *Tips: använd [angular-route](https://docs.angularjs.org/api/ngRoute/service/$route)*
- Koppla på en riktig databas
- Animationer - *Tips: använd [angular-animate](https://docs.angularjs.org/guide/animations)*
- Datepicker - *Tips: det finns många färdiga komponenter man kan plocka in, t.ex [Angular-UI/bootstap](http://angular-ui.github.io/bootstrap/)*

#### Tips & resurser
- Korta och pedagogiska screencasts på lika angularkoncept på [egghead](https://egghead.io/articles/new-to-angularjs-start-learning-here#directives)
- Angulars egna [snabbtutorial](https://docs.angularjs.org/tutorial/step_00)
- Code schools interaktiva [shaping up with angular](https://www.codeschool.com/courses/shaping-up-with-angular-js)
- Angaulars [Developer guide](https://docs.angularjs.org/guide) som går in lite mer på djupet.