<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 2: Plan i szkielet projektu

---

Zanim powstanie choć linijka kodu, przemyślisz architekturę w trybie planowania. Dobry plan to lepszy projekt i lepszy kod od Copilota.

## Zadanie 1: Zaplanuj architekturę API

<!-- track:vscode:start -->
1. Przełącz się na tryb **Plan** w Copilot Chat (selektor trybu na dole panelu czatu)
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Wejdź w **tryb plan** w Copilot CLI, naciskając **Shift+Tab**, aż tryb się zmieni, albo komendą `/plan`.
<!-- track:cli:end -->

2. Wpisz ten prompt:

   ```
   Potrzebuję serwerowego proxy API, które pobiera dane o kontrybucjach z GitHuba
   dla dowolnej nazwy użytkownika. Endpoint to https://github.com/{username}.contribs
   i zwraca JSON. Musimy ominąć ograniczenia CORS. Zaplanuj implementację:
   strukturę trasy, obsługę błędów i strategię cache'owania.
   ```

3. **Przejrzyj plan.** Nie akceptuj pierwszej wersji w ciemno:
   - Dopytaj o wszystko, co niejasne
   - Zaproponuj zmiany, jeśli coś Ci nie pasuje
   - Iteruj, aż podejście będzie Ci odpowiadać

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
   Teraz potrzebuję strony głównej. Zaplanuj stronę pojedynku dla gry
   „Mayhem w Stoczni – arena pojedynków na kontrybucje z GitHuba" z: dwoma polami
   na nazwy użytkowników (Gracz 1 i Gracz 2), przyciskiem „Walcz!" i obszarem
   na wyniki. Interfejs ma być prosty, nie przekombinuj układu ani stylów na tym
   etapie. Zaplanuj strukturę HTML, podstawowe style i sposób działania pojedynku.
   Wszystkie napisy w interfejsie po polsku.
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

- **Planować przed kodowaniem** zamiast od razu rzucać się na implementację
- **Iterować plan**, aż architektura będzie miała sens
- **Przechodzić z planu do implementacji** z pełną kontrolą nad tym, co powstaje
