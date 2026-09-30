<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 5: Szlify i praca równoległa

---

Aplikacja już działa i dobrze wygląda — czas na wykończenie. Ta część jest o rozbijaniu pracy tak, żeby poprawić responsywność, obsługę błędów i jakość bez przepychania wszystkiego przez jedną, szeregową pętlę.

<!-- track:vscode:start -->
## Zadanie 1: Agent w tle do responsywności

1. W panelu Chat kliknij **+**, żeby otworzyć nowy czat
2. Na dole okna przestaw **Local** na **Copilot CLI**
3. Wpisz ten prompt:

   ```
   Add responsive CSS media queries: at 1024px switch comparison to single column,
   at 768px reduce font sizes, stack inputs vertically, and make the layout
   mobile-friendly. Also improve keyboard accessibility — ensure tab order works,
   Enter triggers battle, and focus states are visible.
   ```

4. Pozwól mu pracować niezależnie — nie musisz go pilnować.
5. Kiedy skończy, użyj **Review**, a potem kliknij **Apply**.

## Zadanie 2: Agent w tle do obsługi błędów

1. Uruchom kolejnego agenta w tle.
2. Wpisz ten prompt:

   ```
   Improve the error experience: add a shake animation for errors, styled error
   messages with a warning-red (#f85149) glow that fits the Gdańsk shipyard
   theme, and better input validation feedback. Show clear error messages when
   usernames are empty or invalid.
   ```

3. Przejrzyj zmiany, kiedy agent skończy, i kliknij **Apply**.

## Zadanie 3: Agent w chmurze do wariantów (opcjonalnie)

1. W panelu Chat kliknij **+**, żeby otworzyć nowy czat
2. Na dole okna przestaw **Local** na **Cloud**
3. Wpisz ten prompt:

   ```
   Create an alternative colour theme for the battle page — keep the pixel-art
   shipyard style but shift it to a cold Baltic dawn: steel blue (#58a6ff) and
   pale amber (#f2cc60) instead of crane green. Implement it as a CSS custom
   property theme that could be toggled.
   ```

4. Zajrzyj do **agent sessions**, żeby śledzić postęp.
5. Przejrzyj wariant designu w pull requeście, który założy agent chmurowy.

## Zadanie 4: Sprawdź całość
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Zadanie 1: Rozbij pracę przez `/fleet`

W Copilot CLI użyj `/fleet`, żeby rozdzielić robotę na równoległych subagentów, a potem przejrzyj złożony wynik:

```text
/fleet Improve the app in parallel:
1. Add responsive CSS media queries so the comparison collapses to one column at 1024px and the inputs stack on small screens.
2. Improve keyboard accessibility and focus visibility.
3. Improve the error experience with stronger validation feedback and shipyard-style error states.
```

Pozwól CLI zorganizować pracę, a potem obejrzyj złożony efekt przez `/diff`, zanim cokolwiek zatwierdzisz.

## Zadanie 2: Zdeleguj wariant (opcjonalnie)

Jeśli chcesz sprawdzić asynchroniczny przepływ w chmurze, zdeleguj wariant designu:

```text
/delegate Create an alternative colour theme for the battle page that keeps the pixel-art shipyard look but shifts it to a cold Baltic dawn: steel blue (#58a6ff) and pale amber (#f2cc60). Make it easy to toggle.
```

Zdelegowane zadanie powinno założyć pull requesta, którego przejrzysz osobno, pracując dalej lokalnie.

## Zadanie 3: Uruchom agentowe review

Zanim domkniesz pracę, poproś Copilot CLI o przebieg recenzyjny:

```text
/review Focus on potential bugs, accessibility issues, and UX regressions in the current branch.
```

Przejrzyj znaleziska, popraw to, z czym się zgadzasz, a potem uruchom `/diff` jeszcze raz, żeby mieć jasność, co się zmieniło.

## Zadanie 4: Sprawdź całość
<!-- track:cli:end -->

> **⚠️ Nie widzisz zmian?** Jeśli któraś z poprawek się nie pojawia, zatrzymaj serwer deweloperski (`Ctrl+C`), uruchom go ponownie przez `npm run dev`, a potem zrób twarde odświeżenie (`Ctrl+Shift+R`) w przeglądarce.

Przejdź przez te scenariusze testowe, żeby upewnić się, że wszystko działa:

| Test | Oczekiwany wynik |
|------|------------------|
| Puste pola, kliknięcie Battle | Ostylowany błąd z animacją potrząśnięcia |
| Poprawne nazwy użytkowników | Wyświetlone wykresy kontrybucji |
| Nieistniejąca nazwa użytkownika | Błąd z API w stylistyce motywu |
| Enter w polu tekstowym | Uruchamia pojedynek |
| Szerokość mobilna | Responsywny układ jednokolumnowy |
| Hover na kwadratach kontrybucji | Tooltip z datą i liczbą |

Zbuduj wersję produkcyjną i sprawdź, że nie ma błędów:

```bash
npm run build && npm run preview
```

Kiedy wszystko wygląda dobrze, zacommituj działający kod.

---

## ✅ Część 5 zaliczona!

**Czego się nauczyłeś:**

- Rozbijać wykańczanie na **mniejsze, równoległe zadania**
- Przeglądać wygenerowane zmiany przed wlaniem ich do głównej gałęzi
- Używać Copilota do **przebiegów jakościowych i opcjonalnych eksploracji**, nie tylko do implementacji
