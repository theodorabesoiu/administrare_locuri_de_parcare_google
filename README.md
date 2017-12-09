# administrare_locuri_de_parcare
Administrarea locurilor de parcare integrat cu Google Maps
------------------------------------------------------

1. Design-ul interfetei cu user-ul

2. Identificarea componentelor
- lista locurilor de aprcare
- search pentru un anumit loc
- Keyboard pentru introducerea adresei locului de parcare
- Keyboard pentru introducerea codului locului de parcare
- lista cu locurile rezervate
- lista locurilor rezervate de utilizator
- data de la care locul va fi liber
- plata rezervarii
- modalitati de plata pentru rezervare

3. API 
- GET/CATEGORIES
- GET/CATEGORIES/:ADRESA
- GET/CATEGORIES/:ID/LOCURI
- GET/LOCURI/?SEARCH=
- POST/REZERVARE
- GET/REZERVARE
- PUT/REZERVARE
- POST/REZERVARE
- POST/DATA-REZERVARE
- GET/METODE-DE-PLATA
- POST/PLATA

4. Definirea actiunilor user-ului
- vede lista locurilor de parcare dintr-o anumita categorie
- cautare dupa adresa locului si dupa id
- adaugare rezervare loc de parcare
- vede data lacare se elibereaza un loc de parcare
- setare zona preferata
- checkout
