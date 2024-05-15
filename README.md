# 🏦 Udlæsning af salgsindtægter fra MobilePay PoS & MyShop

Programmet kalder først auth-endpoints for at hente diverse tokens.
Derefter henter det forrige hverdags transaktioner.
Transaktionerne matches op mod konteringsregler og påføres kontering.
Konteringerne bliver lagt sammen i et omposteringsbilag i csv-format.
Transaktioner uden match påføres konteringsforslag i et seperat omposteringsbilag i csv-format.
Filen bliver derefter manuelt indlæst i Opus.

# Status

Projektet er nedlagt.
Frontend i projektet bruges i udviklingen af [dette projekt](https://github.com/Randers-Kommune-Digitalisering/auto-bankposteringer-nordea-kmdopus).

# Resources

[Dokumentation for MobilePay Reporting API](https://developer.mobilepay.dk/docs/reporting)
