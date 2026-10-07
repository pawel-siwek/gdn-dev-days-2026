<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 3: Budowa gry w trybie agentowym

---

W tej części Copilot z planisty staje się wykonawcą. Opisujesz, czego chcesz, a on zmienia wszystkie pliki, które trzeba.

## Zadanie 1: Podłącz pojedynek

<!-- track:vscode:start -->
1. Przełącz się na tryb **Agent** w Copilot Chat.
2. Wpisz ten prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Wróć w Copilot CLI do standardowego trybu kodowania (albo zostań w autopilocie, jeśli chcesz, żeby Copilot pracował dalej, dopóki go nie zatrzymasz).
2. Dla dodatkowego kontekstu możesz wskazać plik strony: `@src/pages/index.astro`
3. Wpisz ten prompt:
<!-- track:cli:end -->

   > Dodaj do strony pojedynku JavaScript po stronie klienta, który:
   > 1. Po kliknięciu przycisku „Walcz!" pobiera obie nazwy użytkowników z pól
   > 2. Sprawdza, czy oba pola są wypełnione (jeśli nie, pokazuje błąd)
   > 3. Pobiera równolegle dane o kontrybucjach obu użytkowników z naszego API
   > 4. Renderuje wykresy kontrybucji jako kolorowe siatki: każdy dzień to kolorowy kwadrat w palecie GitHuba
   > 5. Pokazuje plakietkę „VS" między dwoma użytkownikami
   > 6. Wyświetla nazwę użytkownika, łączną liczbę kontrybucji i zakres dat dla każdego z nich
   > 7. Obsługuje stany ładowania i błędy
   > 8. Uruchamia pojedynek także po naciśnięciu Enter w polu tekstowym
   > 9. Korzysta z prostego interfejsu, który już jest w szkielecie
   >
   > Użyj interfejsów TypeScript do struktury danych o kontrybucjach. Komunikaty dla użytkownika po polsku.

<!-- track:vscode:start -->
3. Pozwól trybowi Agent przeprowadzić implementację w `index.astro`.
4. Przejrzyj proponowane zmiany w widoku diff, zanim je zaakceptujesz.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Pozwól Copilot CLI przeprowadzić implementację w `src/pages/index.astro`.
5. Obejrzyj wygenerowane zmiany przez `/diff`, a potem je zatwierdź.
<!-- track:cli:end -->

## Zadanie 2: Przetestuj pojedynek

> **⚠️ Nie widzisz zmian?** Jeśli strona pojedynku się nie odświeżyła, zatrzymaj serwer deweloperski (`Ctrl+C`), uruchom go ponownie przez `npm run dev` i odśwież przeglądarkę.

1. Wpisz `octocat` i `torvalds` jako dwie nazwy użytkowników, a potem kliknij **Walcz!**.
2. Powinieneś zobaczyć oba wykresy kontrybucji obok siebie, jako kolorowe siatki.
3. Przetestuj ścieżki błędów:
   - Zostaw jedno albo oba pola puste i kliknij Walcz!, powinien pojawić się błąd walidacji.
   - Wpisz nieistniejącą nazwę użytkownika — aplikacja powinna pokazać błąd z API.
4. Sprawdź **Enter** w polach tekstowych — powinien uruchamiać pojedynek tak samo jak kliknięcie przycisku.

## Zadanie 3: Iteruj razem z Copilotem

Jeśli coś nie do końca gra, po prostu daj Copilotowi informację zwrotną. Na przykład:

- *„Kwadraciki kontrybucji są za duże, zrób je 12x12 px"*
- *„Dodaj tooltip z datą i liczbą kontrybucji po najechaniu myszą"*
- *„Stan ładowania potrzebuje animacji pulsowania"*

<!-- track:vscode:start -->
Tryb Agent naturalnie radzi sobie ze zmianami w wielu plikach i z iteracjami. Każdy kolejny prompt buduje na poprzedniej rozmowie, więc możesz doszlifowywać implementację przyrostowo, bez zaczynania od zera.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Sesje Copilot CLI zachowują historię, więc każdy kolejny prompt buduje na poprzednim. Użyj `/session` albo `/context`, żeby podejrzeć, co Copilot ze sobą niesie, a po większej iteracji uruchom `/review`, jeśli chcesz dodatkowego przebiegu pod kątem błędów i wykończenia.
<!-- track:cli:end -->

## Wskazówki do tej części

- **Mów konkretnie, czego chcesz.** Jasne wymagania dają lepsze wyniki.
- **Rozbijaj duże zadania na mniejsze prompty**, jeśli Copilot zaczyna gubić wątek.
- **Przeglądaj zmiany przed akceptacją.** Szybciej sprawdzić niż potem przepisywać.
- **Testuj po każdej iteracji**, żeby od razu wiedzieć, która zmiana coś zepsuła.

## ✅ Część 3 zaliczona

Nauczyłeś się:

- Zlecać Copilotowi **zmiany w wielu plikach naraz**
- **Poprawiać wynik** krótkimi promptami uzupełniającymi
- Prowadzić **pełny cykl**: implementacja, przegląd, testy, poprawki
