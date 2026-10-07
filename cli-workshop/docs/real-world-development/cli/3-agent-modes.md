---
title: "Lekcja 3 — Tryby agenta: Plan i Autopilot"
description: "Ustal podejście w trybie Plan, zbuduj filtrowanie ze zgłoszenia w trybie Autopilot i przejrzyj wynik w trybie interaktywnym."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Pierwsza zmiana była mała. Przy większych potrzebny jest porządniejszy proces, w który Copilot CLI ma się wpasować, a nie go zastąpić. To pierwsza z kilku lekcji, w których przejdziesz całą drogę: od zgłoszenia, przez wygenerowanie kodu i sprawdzenie, czy działa, aż po merge.

> ℹ️ **Uwaga**  
> Od tej lekcji aż do pull requesta pracujesz w jednej rozmowie i na jednej gałęzi. Normalnie różne rodzaje zmian trafiałyby do osobnych PR-ów, ale tu idziemy na skróty, żeby skupić się na narzędziach.

W tej lekcji:

- rozpoczniesz nową rozmowę z Copilotem, wychodząc od zgłoszenia na GitHubie,
- zdefiniujesz wymagania w trybie Plan,
- zaimplementujesz nową funkcjonalność w trybie Autopilot,
- przejrzysz kod,
- ręcznie sprawdzisz funkcjonalność w przekierowanej przeglądarce.

W kolejnych lekcjach, na tej samej funkcjonalności, zaktualizujesz instrukcje repozytorium, dostosujesz skill `quality-checks`, dodasz weryfikację przez MCP, stworzysz agenta QA i otworzysz pull requesta.

## Scenariusz

Katalog Tailspin Toys rośnie i odwiedzający chcą zawężać listę gier po kategorii i wydawcy. Zgłoszenie w backlogu opisuje tę funkcjonalność, ale szczegóły, na przykład łączenie kategorii, trzeba ustalić przed kodowaniem. Zrobisz to w trybie Plan, a implementację zlecisz Autopilotowi.

## Kontekst

Agenci AI nie zmieniają podstaw procesu, raczej czynią go ważniejszym. Większość zespołów pracuje mniej więcej tak:

1. Wyjście od zgłoszenia opisującego, co trzeba zrobić.
2. Stworzenie planu tego, co trzeba zbudować.
3. Zbudowanie kodu i jego przegląd.
4. Uruchomienie testów w celu weryfikacji kodu.
5. Ręczna weryfikacja nowej funkcjonalności.
6. Utworzenie pull requesta (PR).
7. Merge po przejściu code review i procesu ciągłej integracji.

Szczegóły różnią się między zespołami, ale schemat jest ten sam. Jeśli się go trzymasz, kod wygenerowany przez AI przechodzi tę samą weryfikację, co kod pisany ręcznie.

## Tryby rozmowy

**Tryb rozmowy** decyduje o tym, jak dużą autonomię ma agent. Naciskaj <kbd>Shift</kbd>+<kbd>Tab</kbd>, żeby przełączać się między trybami:

- **Interactive**: pracujecie razem. Agent proponuje zmiany i czeka na Twoją reakcję, zanim ruszy dalej.
- **Plan**: agent najpierw tworzy plan i ma zablokowaną możliwość edytowania plików projektu.
- **Autopilot**: agent pracuje samodzielnie — pisze kod, uruchamia testy i iteruje, aż uzna zadanie za ukończone.

Zacznij w trybie Plan, przejrzyj plan, a potem użyj Autopilota do jego wdrożenia.

## Wyjdź od zgłoszenia

Zanim zaczniesz pracę nad filtrowaniem, wróć do codespace'a i upewnij się, że repozytorium i terminal są gotowe.

1. Wróć do swojego codespace'a. Jeśli jest zatrzymany, uruchom go ponownie.
2. Potwierdź, że PR z ocenami w gwiazdkach został zmergowany.
3. Jeśli terminal nie jest otwarty, naciśnij <kbd>Control</kbd>+<kbd>\`</kbd> (Mac) albo <kbd>Ctrl</kbd>+<kbd>\`</kbd> (Windows/Linux).
4. Zaktualizuj `main`, a potem utwórz gałąź na pracę nad filtrowaniem:

   ```bash
   git checkout main
   git pull --ff-only
   git checkout -b game-filters-cli
   ```

5. Uruchom Copilot CLI:

   ```bash
   copilot --yolo
   ```

6. Naciśnij dwa razy <kbd>Tab</kbd>, żeby otworzyć zakładkę **Issues**.
7. Naciśnij <kbd>A</kbd>, żeby wyświetlić wszystkie zgłoszenia.
8. Strzałkami podświetl zgłoszenie zatytułowane **Umożliw filtrowanie gier po kategorii i wydawcy**.
9. Naciśnij <kbd>C</kbd>, żeby dodać zgłoszenie do promptu i wrócić do zakładki **Session**.

Zwróć uwagę, że prompt zaczyna się teraz od `#7` (albo podobnego numeru). Znak `#` pozwala wciągnąć do kontekstu zgłoszenie albo pull requesta z GitHuba.

## Zaplanuj filtrowanie

Plan pozwala ustalić podejście, zanim oddasz robotę Copilotowi. Przy czymkolwiek bardziej złożonym warto na to poświęcić chwilę.

1. Naciśnij <kbd>Shift</kbd>+<kbd>Tab</kbd>, żeby przełączyć się w tryb Plan. Sprawdź, czy wskaźnik trybu pod promptem pokazuje **Plan**.
2. Za odwołaniem do zgłoszenia dodanym w poprzednim kroku wpisz ten prompt:

   ```plaintext
   Przygotuj plan implementacji tej funkcjonalności.
   ```

   Copilot najpierw przejrzy projekt, a potem zaproponuje podejście.

3. Po drodze Copilot może dopytywać, jak filtrowanie ma działać. Odpowiadaj, jak uważasz, nie ma tu złych odpowiedzi.
4. Kiedy plan będzie gotowy, naciśnij <kbd>Control</kbd>+<kbd>E</kbd> (Mac) albo <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux), żeby go rozwinąć.
5. Przewiń plan w górę i w dół, żeby go przejrzeć.
6. Poproś Copilota o poprawienie każdego fragmentu planu, który nie zgadza się z Twoimi decyzjami.

## Zatwierdź Autopilota

Plan jest gotowy, czas go wdrożyć. W trybie Autopilot Copilot pracuje nad zadaniem samodzielnie, dopóki nie uzna go za skończone.

1. Wybierz **Accept plan and build on autopilot (recommended)** albo podobnie nazwaną opcję w Twojej wersji.
2. Sprawdź, czy wskaźnik trybu pod promptem pokazuje **Autopilot**.
3. Obserwuj, jak Copilot przechodzi przez ustalony plan, generuje kod i uruchamia testy.

> ℹ️ **Uwaga**  
> Zatwierdzenie może od razu uruchomić implementację, więc najpierw przejrzyj plan. Jeśli Copilot zgłosi brakujące zależności albo konflikt portu, rozwiąż problem konfiguracyjny, zanim uznasz kontrole za zaliczone.

## Przejrzyj i zweryfikuj implementację

Wygenerowany kod trzeba przejrzeć przed mergem, tak samo jak każdy inny. Najpierw kod, potem działająca strona.

1. Naciśnij <kbd>Shift</kbd>+<kbd>Tab</kbd>, żeby wejść w tryb Interactive. Sprawdź, czy wskaźnik trybu nie pokazuje już **Plan** ani **Autopilot**.
2. Wpisz `/diff` i przyjrzyj się implementacji filtrowania oraz testom.
3. Porównaj wynik ze zgłoszeniem i z decyzjami podjętymi podczas planowania.
4. Po przejrzeniu kodu naciśnij <kbd>Esc</kbd>, żeby wyjść z widoku diffa.
5. Przejrzyj wyniki kontroli projektu i poproś Copilota o naprawienie ewentualnych błędów.

## Sprawdź nową funkcjonalność

Kod wygląda dobrze, ale czy działa? Uruchom aplikację tak jak poprzednio.

1. Poproś Copilota o uruchomienie aplikacji:

   ```plaintext
   Uruchom aplikację, żebym mógł wypróbować filtrowanie w przeglądarce. Podaj mi URL i zostaw serwer włączony.
   ```

2. Kiedy Codespaces zgłosi, że port `4321` jest dostępny, wybierz **Open in Browser**.
3. Wypróbuj filtrowanie po kategorii, po wydawcy oraz kombinacje ustalone w planie.
4. Sprawdź, czy resetowanie filtrów i zachowanie przy braku wyników odpowiadają zgłoszeniu i Twoim decyzjom.
5. Wróć do codespace'a i poproś Copilota o zatrzymanie uruchomionego serwera deweloperskiego.

## Podsumowanie i co dalej

Filtrowanie jest zbudowane i sprawdzone: wymagania ustaliłeś w trybie Plan, implementację zrobił Autopilot, a Ty przejrzałeś kod i przeklikałeś stronę. W następnym kroku zadbasz, żeby wygenerowany kod trzymał się standardów zespołu, [przez własne instrukcje][next-lesson].

## Materiały

- [Autopilot w GitHub Copilot CLI][autopilot]
- [Dokumentacja komend Copilot CLI][cli-reference]

[autopilot]: https://docs.github.com/copilot/concepts/agents/copilot-cli/autopilot
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
[previous-lesson]: ../2-add-star-rating/
[next-lesson]: ../4-custom-instructions/
