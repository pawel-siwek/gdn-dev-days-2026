<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 5: Szlify i praca równoległa

---

Aplikacja działa i dobrze wygląda, czas na wykończenie. W tej części rozbijesz pracę nad responsywnością, obsługą błędów i jakością na kilka równoległych zadań, zamiast robić wszystko po kolei.

<!-- track:vscode:start -->
## Zadanie 1: Agent w tle do responsywności

1. W panelu Chat kliknij **+**, żeby otworzyć nowy czat
2. Na dole okna przestaw **Local** na **Copilot CLI**
3. Wpisz ten prompt:

   ```
   Dodaj responsywne media queries w CSS: przy 1024px przełącz porównanie na jedną
   kolumnę, przy 768px zmniejsz fonty, ustaw pola jedno pod drugim i dopasuj układ
   do telefonów. Popraw też dostępność z klawiatury: kolejność tabulacji ma działać,
   Enter ma uruchamiać pojedynek, a stany fokusu mają być widoczne.
   ```

4. Pozwól mu pracować niezależnie — nie musisz go pilnować.
5. Kiedy skończy, użyj **Review**, a potem kliknij **Apply**.

## Zadanie 2: Agent w tle do obsługi błędów

1. Uruchom kolejnego agenta w tle.
2. Wpisz ten prompt:

   ```
   Popraw obsługę błędów: dodaj animację potrząśnięcia, ostylowane komunikaty
   błędów z ostrzegawczo-czerwoną poświatą (#f85149) pasującą do motywu gdańskiej
   stoczni i czytelniejszą walidację pól. Pokazuj jasne komunikaty po polsku,
   gdy nazwa użytkownika jest pusta albo nieprawidłowa.
   ```

3. Przejrzyj zmiany, kiedy agent skończy, i kliknij **Apply**.

## Zadanie 3: Agent w chmurze do wariantów (opcjonalnie)

1. W panelu Chat kliknij **+**, żeby otworzyć nowy czat
2. Na dole okna przestaw **Local** na **Cloud**
3. Wpisz ten prompt:

   ```
   Stwórz alternatywny motyw kolorystyczny strony pojedynku: zachowaj pixelartowy
   styl stoczni, ale przestaw go na chłodny bałtycki świt, stalowy błękit (#58a6ff)
   i blady bursztyn (#f2cc60) zamiast zieleni dźwigów. Zrób to jako motyw na
   zmiennych CSS, który da się przełączać.
   ```

4. Zajrzyj do **agent sessions**, żeby śledzić postęp.
5. Przejrzyj wariant designu w pull requeście, który założy agent chmurowy.

## Zadanie 4: Sprawdź całość
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Zadanie 1: Rozbij pracę przez `/fleet`

W Copilot CLI użyj `/fleet`, żeby rozdzielić robotę na równoległych subagentów, a potem przejrzyj złożony wynik:

```text
/fleet Popraw aplikację równolegle:
1. Dodaj responsywne media queries w CSS, żeby porównanie zwijało się do jednej kolumny przy 1024px, a pola ustawiały się jedno pod drugim na małych ekranach.
2. Popraw dostępność z klawiatury i widoczność fokusu.
3. Popraw obsługę błędów: wyraźniejsza walidacja i komunikaty błędów po polsku w stylistyce stoczni.
```

Pozwól CLI zorganizować pracę, a potem obejrzyj złożony efekt przez `/diff`, zanim cokolwiek zatwierdzisz.

## Zadanie 2: Zdeleguj wariant (opcjonalnie)

Jeśli chcesz sprawdzić asynchroniczny przepływ w chmurze, zdeleguj wariant designu:

```text
/delegate Stwórz alternatywny motyw kolorystyczny strony pojedynku: zachowaj pixelartowy styl stoczni, ale przestaw go na chłodny bałtycki świt, stalowy błękit (#58a6ff) i blady bursztyn (#f2cc60). Ma się dać łatwo przełączać.
```

Zdelegowane zadanie powinno założyć pull requesta, którego przejrzysz osobno, pracując dalej lokalnie.

## Zadanie 3: Uruchom agentowe review

Zanim domkniesz pracę, poproś Copilot CLI o przebieg recenzyjny:

```text
/review Skup się na potencjalnych błędach, problemach z dostępnością i regresjach UX na bieżącej gałęzi.
```

Przejrzyj uwagi, popraw to, z czym się zgadzasz, i sprawdź przez `/diff`, co się zmieniło.

## Zadanie 4: Sprawdź całość
<!-- track:cli:end -->

> **⚠️ Nie widzisz zmian?** Jeśli któraś z poprawek się nie pojawia, zatrzymaj serwer deweloperski (`Ctrl+C`), uruchom go ponownie przez `npm run dev`, a potem zrób twarde odświeżenie (`Ctrl+Shift+R`) w przeglądarce.

Przejdź przez te scenariusze testowe, żeby upewnić się, że wszystko działa:

| Test | Oczekiwany wynik |
|------|------------------|
| Puste pola, kliknięcie Walcz! | Ostylowany błąd z animacją potrząśnięcia |
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

- Rozbijać wykończenie na **mniejsze, równoległe zadania**
- Przeglądać wygenerowane zmiany, zanim trafią do głównej gałęzi
- Używać Copilota do **review i eksperymentów**, nie tylko do pisania kodu
