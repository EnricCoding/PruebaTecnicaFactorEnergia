Technical Test for Factor Energia
Technical Test Factor Energia
An application where you can check your billing from your computer or mobile device.

Versions used:

node -v: 20.11.0
"@angular/core": "^17.0.2"
"@ionic/angular": "^7.0.0"
Prerequisites:
Node.js
Angular CLI
Ionic CLI
Android Studio
Visual Studio Code
Configuration
Clone the repository:

bash
Copiar código
git clone https://github.com/EnricCoding/PruebaTecnicaFactorEnergia.git

Install dependencies:
Install Node: https://nodejs.org/en
Install Angular: npm install -g @angular/cli
Install Ionic: npm install -g @ionic/cli
Install Android Studio: https://developer.android.com/studio?hl=es-419
Install Visual Studio Code: https://code.visualstudio.com/

 bash

 cd PruebaTecnicaFactorEnergia
 npm install
Development

Run the application in the browser:

Copiar código
bash

ionic serve
To build the Angular application with Ionic:

bash

Copiar código
ionic serve
To run tests:

bash

bash
Copiar código
ng test
Build the application for mobile devices (Android):

bash

bash
Copiar código
npx cap add android
ionic capacitor sync android
Open Android Studio for Android:

bash

npx cap open android
