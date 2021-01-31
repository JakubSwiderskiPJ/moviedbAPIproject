# Projekt XIV (50 pkt)

## Napisz aplikację, która będzie serwisem zbierającym bazę filmów. Aplikacja powinna korzystać z API serwisu https://www.themoviedb.org (dostęp do dokumentacji API pod adresem https://www.themoviedb.org/documentation/api).

### Aplikacja powinna spełniać następujące wymagania:

   - [x] (1 pkt) Aplikacja na początkowej stronie powinno wyświetlić panel do wyszukania filmów
   - [x] (1 pkt) Aplikacja na początkowej stronie powinno wyświetlić najbardziej popularne filmy w serwisie https://www.themoviedb.org
   - [x] (1 pkt) Podczas wpisania do panelu nazwy filmów, powinno wyświetlić nazwy filmów pobranych z serwisu https://www.themoviedb.org
   - [x] (13 pkt) Każdy z pobranych filmów przez wyszukiwania powinien zawierać:
        - [x] (0.5 pkt) Tytuł filmu
        - [x] (1 pkt) Zdjęcie/plakat filmu
        - [x] (1 pkt) Opis filmu
        - [x] (0.5 pkt) Data premiery
        - [x] (1 pkt) Wymieniony gatunek filmów
        - [x] (0.5 pkt) Wymienienie reżysera
        - [x] (1 pkt) Wyświetlenie głównych aktorów
        - [x] (0.5 pkt) Odnośnik do strony w serwisie https://www.themoviedb.org
        - [x] (1 pkt) Średnia ocen z tego filmu (z ilością oddanych głosów)
        - [x] (2 pkt) Możliwość obejrzenia galerii scen z tego filmu
        - [x] (4 pkt) Możliwość obejrzenia zwiastunu tego filmu
   - [x] (2 pkt) Aplikacja powinna zawierać panel w którym będziemy wyszukiwać filmy nie tylko po słowie kluczowym, ale również po gatunku
   - [x] ### (2 pkt) Wyszukane filmy powinny być wyświetlane z możliwością sortowania pól na przykład po roku wydania filmu
   - [ ] (2 pkt) Aplikacja powinna pozwalać na wystawienie oceny danemu filmowi. Wówczas ocena ta powinna zostać przekazana do serwisu https://www.themoviedb.org
   - [ ] (1 pkt) Oprócz wyszukiwania filmów z serwisu https://www.themoviedb.org aplikacja powinna zawierać panel, w którym sam można dodać film o podanych wyżej parametrach (bez galerii oraz odnośniku do serwisu https://www.themoviedb.org
   - [ ] (2 pkt) W dodanych przez siebie filmach, aplikacja powinna mieć możliwość dodania komentarzy (poza serwisem https://www.themoviedb.org). Komentarze te powinny być wyświetlone w szczegółach dodanego filmu
   - [ ] (2 pkt) W dodanych przez siebie filmach, aplikacja powinna mieć możliwość dodania oceny (poza serwisem https://www.themoviedb.org). Ocena ta powinny być widoczna w szczegółach dodanego filmu
   - [ ] (4 pkt) Aplikacja powinna zawierać panel administratora, dzięki któremu możemy dodawać/edytować/usuwać filmy oraz komentarze
   - [ ] (2 pkt) Aplikacja powinna wyświetlać statystyki dla danych filmów (w postaci tabeli na przykład najbardziej popularne, najbardziej popularny aktor). Im więcej statystyk tym większa liczba punktów
### Pod ocenę będą brane następujące elementy:

  - [x] (1 pkt) Skompilowanie oraz uruchomienie projektu
  - [ ] (33 pkt) Uwzględnienie powyższych wymagań z uwzględnieniem sytuacji wyjątkowych
  - [x] (12 pkt) Styl aplikacji pod względem CSS 
  - [ ] (1 pkt) Użycie frameworka CSS np. Bootstrap
  - [x] (3 pkt) Personalizacja stylu CSS za pomocą Less/SaaS
  - [ ] (5 pkt) Funkcjonalne ułożenie elementów aplikacji
  - [x] (1 pkt) Użycie React Rounting
  - [ ] (1 pkt) Użycie React Redux
  - [ ] (1 pkt) Użycie TypeScript
  - [ ] (2 pkt) Przetestowanie aplikacji
  - [x] (2 pkt) Styl i podział kodu
 
### Dodatkowe punkty można otrzymać za wykonanie następujących podpunktów:

  -[ ] (1 pkt) Logowanie administratora
  -[ ] (1 pkt) Internationalizacja aplikacji
  -[ ] (1 pkt) Deploy aplikacji na serwer zewnętrzny (na przykład w serwisie Heroku/Netlify).
  -[x] (2 pkt) Inne rzeczy, nie pokazane na wykładzie/zajęciach. // React player

### Ponadto pod ocenę jest brane również: (Brak tych elementów to ujemne punkty od obowiązkowej punktacji zadania!)

   - [x] (0 pkt)Historia projektu w repozytorium.
   - [x] (0 pkt)Ocenaopisu commitów
   - [x] (0 pkt)Stan repozytorium (żeby nie był śmietnikiem!!!)


# API 
   - https://www.themoviedb.org/
   - https://www.themoviedb.org/documentation/api