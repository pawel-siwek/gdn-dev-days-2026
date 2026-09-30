<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 3: Budowa gry w trybie agentowym

---

W tej części Copilot przestaje być planistą, a staje się wykonawcą. Zamiast pisać kod linijka po linijce, opisujesz czego chcesz, a Copilot przeprowadza pracę przez wszystkie pliki, które trzeba zmienić.

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

   > Add client-side JavaScript to the battle page that:
   > 1. When the Battle button is clicked, gets both usernames from the inputs
   > 2. Validates both are filled (show error if not)
   > 3. Fetches both users' contribution data in parallel from our API
   > 4. Renders contribution graphs as colored grids — each day is a colored square using GitHub's color palette
   > 5. Shows a VS badge between the two users
   > 6. Displays username, total contributions, and date range for each user
   > 7. Handles loading states and errors
   > 8. Also triggers on Enter key in input fields.
   > 9. Simple UI for now that is already scaffolded.
   >
   > Use TypeScript interfaces for the contribution data structure.

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

1. Wpisz `octocat` i `torvalds` jako dwie nazwy użytkowników, a potem kliknij **Battle**.
2. Powinieneś zobaczyć oba wykresy kontrybucji obok siebie, jako kolorowe siatki.
3. Przetestuj ścieżki błędów:
   - Zostaw jedno albo oba pola puste i kliknij Battle — powinien pojawić się błąd walidacji.
   - Wpisz nieistniejącą nazwę użytkownika — aplikacja powinna pokazać błąd z API.
4. Sprawdź **Enter** w polach tekstowych — powinien uruchamiać pojedynek tak samo jak kliknięcie przycisku.

## Zadanie 3: Iteruj razem z Copilotem

Jeśli coś nie do końca gra, po prostu daj Copilotowi informację zwrotną. Na przykład:

- *„Kwadraciki kontrybucji są za duże, zrób je 12x12px"*
- *„Dodaj tooltip pokazujący datę i liczbę kontrybucji po najechaniu myszą"*
- *„Stan ładowania potrzebuje animacji pulsowania"*

<!-- track:vscode:start -->
Tryb Agent naturalnie radzi sobie ze zmianami w wielu plikach i z iteracjami. Każdy kolejny prompt buduje na poprzedniej rozmowie, więc możesz doszlifowywać implementację przyrostowo, bez zaczynania od zera.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Sesje Copilot CLI zachowują historię, więc każdy kolejny prompt buduje na poprzednim. Użyj `/session` albo `/context`, żeby podejrzeć, co Copilot ze sobą niesie, a po większej iteracji uruchom `/review`, jeśli chcesz dodatkowego przebiegu pod kątem błędów i wykończenia.
<!-- track:cli:end -->

## Wskazówki do tej części

- **Mów konkretnie, czego chcesz** — jasne wymagania dają lepsze wyniki.
- **Rozbijaj duże zadania na mniejsze prompty**, jeśli Copilot zaczyna odpływać.
- **Przeglądaj zmiany przed akceptacją** — wygenerowany kod szybciej się sprawdza, niż potem przepisuje.
- **Testuj aplikację od razu po każdym przebiegu implementacji**, żeby problemy zostawały lokalne.

## ✅ Część 3 zaliczona

Nauczyłeś się:

- Używać Copilota do **implementacji obejmującej wiele plików**
- **Iterować na wynikach** za pomocą precyzyjnych promptów uzupełniających
- Prowadzić **pełną pętlę funkcjonalności** — implementacja, review, testy i dopracowanie
