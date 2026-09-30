<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 2: Plan i szkielet projektu

---

Zanim napiszemy choć linijkę kodu, przemyślimy architekturę przy pomocy trybu planowania Copilota. Zaczynanie od planu pomaga projektować lepsze systemy i daje Copilotowi kontekst potrzebny do generowania kodu wyższej jakości.

## Zadanie 1: Zaplanuj architekturę API

<!-- track:vscode:start -->
1. Przełącz się na tryb **Plan** w Copilot Chat (selektor trybu na dole panelu czatu)
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Wejdź w **tryb plan** w Copilot CLI, naciskając **Shift+Tab**, aż tryb się zmieni, albo komendą `/plan`.
<!-- track:cli:end -->

2. Wpisz ten prompt:

   ```
   I need to build a server-side API proxy that fetches GitHub contribution data
   for any username. The endpoint is https://github.com/{username}.contribs which
   returns JSON. We need to bypass CORS restrictions. Plan the implementation
   including the route structure, error handling, and caching strategy.
   ```

3. **Przejrzyj plan** — to tutaj planowanie pokazuje swoją wartość. Nie akceptuj pierwszej odpowiedzi bezrefleksyjnie:
   - Dopytaj o wszystko, co jest niejasne
   - Zaproponuj zmiany, jeśli coś Ci nie pasuje
   - Iteruj, aż podejście będzie Cię satysfakcjonować

<!-- track:vscode:start -->
4. Kiedy plan Ci odpowiada, poproś Copilota o implementację — przełącz się na tryb **Agent** i daj zielone światło.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Kiedy plan Ci odpowiada, powiedz Copilot CLI, żeby przeszedł do implementacji.
5. Przejrzyj powstałe zmiany w plikach przez `/diff`, zanim je zatwierdzisz.
<!-- track:cli:end -->

6. **Efekt:** powinieneś mieć utworzoną trasę API w:

   ```
   src/pages/api/contributions/[username].ts
   ```

## Zadanie 2: Przetestuj API

> **⚠️ Nie widzisz zmian?** Jeśli serwer deweloperski nie podchwycił nowej trasy, zatrzymaj go (`Ctrl+C`) i uruchom ponownie przez `npm run dev`.

1. Upewnij się, że serwer deweloperski działa, a potem przetestuj endpoint:

   ```bash
   curl http://localhost:4321/api/contributions/octocat
   ```

2. Powinieneś zobaczyć JSON z danymi o kontrybucjach.
3. Przetestuj też ścieżkę błędu — podaj nieistniejącą nazwę użytkownika i sprawdź, czy wraca sensowna odpowiedź błędu.

## Zadanie 3: Zaplanuj stronę pojedynku

<!-- track:vscode:start -->
1. Zostań w trybie **Plan** i wpisz ten prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Zostań w trybie plan (albo uruchom `/plan`) i wpisz ten prompt:
<!-- track:cli:end -->

   ```
   Now I need the main page. Plan a battle page for "Mona Mayhem - GitHub
   Contribution Battle Arena" with: two username inputs (Player 1 and Player 2),
   a battle button, and a results area. Keep the UI simple — don't over-engineer
   the layout or styling at this stage. Plan the HTML structure, basic styling,
   and how the battle interaction will work.
   ```

2. **Przejrzyj plan i iteruj** — dopytuj, proponuj zmiany, doprecyzowuj podejście.

<!-- track:vscode:start -->
3. Kiedy będziesz zadowolony, przełącz się na tryb **Agent** i pozwól Copilotowi zbudować stronę.
<!-- track:vscode:end -->

<!-- track:cli:start -->
3. Kiedy będziesz zadowolony, zleć Copilot CLI implementację zatwierdzonego planu.
4. Ponownie użyj `/diff`, żeby obejrzeć szkielet HTML i CSS przed zatwierdzeniem.
<!-- track:cli:end -->

## Zadanie 4: Sprawdź szkielet

> **⚠️ Nie widzisz zmian?** Jeśli strona wygląda źle albo się nie odświeżyła, zatrzymaj serwer deweloperski (`Ctrl+C`), uruchom go ponownie przez `npm run dev` i odśwież przeglądarkę.

1. Otwórz http://localhost:4321 w przeglądarce.
2. Powinieneś zobaczyć:
   - Tytuł gry
   - Dwa pola na nazwy użytkowników (Gracz 1 i Gracz 2)
   - Przycisk rozpoczynający pojedynek
3. Przycisk jeszcze nie działa — i tak ma być! Nie podłączyliśmy logiki interakcji. To kolejny krok.

---

## ✅ Część 2 zaliczona!

Nauczyłeś się:

- **Planować przed kodowaniem** zamiast rzucać się od razu na implementację
- **Iterować plan**, aż architektura zacznie wyglądać sensownie
- **Przechodzić z planu do implementacji** w sposób bardziej przejrzysty i bezpieczny
