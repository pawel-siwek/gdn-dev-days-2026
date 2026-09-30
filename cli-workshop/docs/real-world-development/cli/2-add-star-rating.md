---
title: "Lekcja 2 — Oceny w gwiazdkach: szybka wygrana"
description: "Użyj Copilot CLI, żeby wprowadzić drobną zmianę na kartach gier, obejrzyj ją w przekierowanej przeglądarce i zmerguj jako swojego pierwszego pull requesta."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Copilot CLI jest już zainstalowany i przetestowany w rozmowie — czas na pierwszą zmianę w projekcie. Zaczniemy od czegoś drobnego: gry mają już w danych ocenę w gwiazdkach, ale karty gier na stronie głównej jeszcze jej nie pokazują. Poprosisz agenta, żeby ją wyświetlił, przejrzysz zmianę i zmergujesz ją jako swojego pierwszego pull requesta.

W tej lekcji:

- rozpoczniesz osobną rozmowę z Copilotem na gałęzi funkcjonalności,
- poprosisz agenta o drobną zmianę w projekcie,
- przejrzysz zmianę przez `/diff`,
- uruchomisz aplikację, żeby potwierdzić efekt w przekierowanej przeglądarce,
- otworzysz i zmergujesz swojego pierwszego pull requesta.

## Scenariusz

Każda gra w Tailspin Toys może mieć ocenę w gwiazdkach i widać ją już na stronie szczegółów gry. Karty gier na stronie głównej pokazują natomiast tylko tytuł, kategorię, wydawcę i opis. Na rozgrzewkę zlecisz agentowi wyświetlenie istniejącej oceny na każdej karcie — to niewielka, samowystarczalna zmiana, idealna na pierwszą sesję.

## Anatomia rozmowy

**Rozmowa** to miejsce, w którym pracujesz z Copilot CLI nad zadaniem. W odróżnieniu od aplikacji Copilot, zwykła rozmowa w CLI korzysta z repozytorium i gałęzi Gita aktualnie wybranych w Twoim terminalu, zamiast tworzyć dedykowane worktree. Zapisane rozmowy pozwalają wrócić do tej samej dyskusji później, a pliki i gałąź pozostają zwykłym stanem Gita na dysku.

Wewnątrz rozmowy zobaczysz trzy rzeczy: swoje prompty i odpowiedzi agenta, aktywność narzędzi, gdy agent przegląda i edytuje pliki, oraz zmiany, które możesz obejrzeć przez `/diff`.

## Rozpocznij rozmowę i zleć zmianę

Zacznijmy nową rozmowę, żeby przystąpić do implementacji funkcjonalności.

1. Wróć do swojego codespace'a.
2. Jeśli terminal nie jest jeszcze otwarty, naciśnij <kbd>Ctrl</kbd>+<kbd>\`</kbd>.
3. Jeśli Copilot nie działa, uruchom go:

   ```bash
   copilot --yolo
   ```

4. Rozpocznij nową sesję komendą `/new` i naciśnij <kbd>Enter</kbd>.
5. Zleć zmianę tym promptem:

   ```plaintext
   Show each game's starRating out of 5 in the game cards on the list page. If the rating is null, show "No rating yet". Keep the card layout as it is, add tests, and run the relevant checks.
   ```

Copilot przegląda projekt, odnajduje pliki odpowiedzialne za wyświetlanie szczegółów gry i tworzy potrzebny kod. Właśnie dodałeś nową funkcjonalność za pomocą Copilot CLI!

## Przejrzyj diff

Każda zmiana wygenerowana przez AI zasługuje na przegląd przed mergem — nawet ta drobna. Obejrzyjmy ją od razu w Copilot CLI.

1. Wpisz `/diff` i przejrzyj każdy zmieniony plik.
2. Sprawdź, czy karta gry pokazuje liczbową ocenę, kiedy ta istnieje, oraz `No rating yet`, kiedy `starRating` ma wartość `null`.
3. Sprawdź, czy testy pokrywają oba przypadki.
4. Przejrzyj wyniki kontroli uruchomionych przez Copilota i poproś go o naprawienie ewentualnych błędów.
5. Po zakończeniu przeglądu naciśnij <kbd>Esc</kbd>, żeby wyjść z ekranu diffa.

> ℹ️ **Uwaga**  
> Copilot, jak wszystkie narzędzia generatywnej AI, jest probabilistyczny, a nie deterministyczny, więc Twój kod może wyglądać nieco inaczej. Oceniaj zachowanie aplikacji, a nie zgodność z jedną konkretną implementacją.

## Sprawdź zmiany w działaniu

Nie powinniśmy oczywiście poprzestać na przeczytaniu kodu i założeniu, że działa. Poprośmy Copilota o uruchomienie strony, żeby obejrzeć zaktualizowany interfejs w przeglądarce przekierowanej przez Codespaces.

1. Poproś Copilota o uruchomienie aplikacji:

   ```plaintext
   Start the app so I can inspect the star-rating change in my browser. Tell me the URL and leave the server running.
   ```

2. Kiedy Codespaces zgłosi, że port `4321` jest dostępny, wybierz **Open in Browser**.
3. Sprawdź, czy karty gier pokazują oceny w skali do pięciu.
4. Wróć do Copilota i poproś go o zatrzymanie uruchomionego serwera:

   ```plaintext
   Stop the development server you started.
   ```

## Otwórz i zmerguj swojego pierwszego pull requesta

Funkcjonalność gotowa! Czas utworzyć pull requesta (PR), żeby wlać nowy kod do projektu.

1. Poproś domyślnego agenta o zacommitowanie zmiany:

   ```plaintext
   Commit the reviewed star-rating changes with an appropriate commit message.
   ```

2. Wpisz `/pr create`. Copilot CLI wypchnie istniejący commit przy tworzeniu PR-a i pokaże jego URL.
3. Otwórz PR-a, przytrzymując <kbd>Command</kbd> (Mac) albo <kbd>Ctrl</kbd> (Windows/Linux) i klikając URL wyświetlony przez Copilot CLI.
4. Przejrzyj zmienione pliki i wyniki kontroli.
5. Gdy będzie gotowe, wybierz **Merge pull request** i potwierdź merge.
6. Wróć do codespace'a i wyjdź z Copilot CLI przez `/exit`.
7. Zaktualizuj lokalną gałąź `main`:

   ```bash
   git checkout main
   git pull
   ```

## Podsumowanie i co dalej

Gratulacje! Dowiozłeś swoją pierwszą zmianę przy pomocy GitHub Copilot CLI. Konkretnie:

- rozpocząłeś osobną rozmowę z Copilotem na gałęzi funkcjonalności,
- zleciłeś agentowi drobną zmianę na kartach gier,
- przejrzałeś zmianę przez `/diff`,
- uruchomiłeś aplikację i potwierdziłeś ocenę w gwiazdkach w przekierowanej przeglądarce,
- otworzyłeś i zmergowałeś swojego pierwszego pull requesta.

W następnym kroku [wyjdziesz od zgłoszenia o filtrowaniu i użyjesz trybów Plan oraz Autopilot][next-lesson], żeby zbudować większą funkcjonalność.

## Materiały

- [O GitHub Copilot CLI][about-copilot-cli]
- [Dokumentacja komend Copilot CLI][cli-reference]

[previous-lesson]: ../1-install-copilot-cli/
[next-lesson]: ../3-agent-modes/
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
