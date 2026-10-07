---
title: "Lekcja 1 — Instalacja GitHub Copilot CLI"
description: "Zainstaluj i zaloguj Copilot CLI w swoim codespace, rozejrzyj się i znajdź przygotowane zgłoszenie o filtrowaniu."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

[GitHub Copilot CLI][about-copilot-cli] to Copilot działający w terminalu: przegląda repozytorium, generuje kod, uruchamia komendy i korzysta z zewnętrznych narzędzi. Zaczniesz od instalacji.

W tej lekcji:

- zainstalujesz GitHub Copilot CLI przez npm,
- zalogujesz się na swoje konto GitHub,
- oznaczysz repozytorium warsztatowe jako zaufane i przeprowadzisz krótką rozmowę,
- znajdziesz zgłoszenie o filtrowaniu przez wbudowany serwer GitHub MCP.

## Zainstaluj Copilot CLI

Copilot CLI zainstalujesz przez [npm][install-cli], WinGet albo Homebrew. W Codespaces Node.js jest już zainstalowany, więc użyjesz npm.

1. Wróć do swojego codespace'a i otwórz terminal.
2. Sprawdź, czy Node.js jest zainstalowany i spełnia wymaganie wersji:

   ```bash
   node --version
   ```

   Powinieneś zobaczyć wersję 24 lub wyższą.

3. Zainstaluj Copilot CLI globalnie:

   ```bash
   npm install -g @github/copilot
   ```

4. Sprawdź instalację:

   ```bash
   copilot --version
   ```

   Powinien wyświetlić się numer wersji.

## Zaloguj się na konto GitHub

Przy pierwszym uruchomieniu Copilot CLI poprosi Cię o zalogowanie się na konto GitHub.

1. Uruchom Copilot CLI:

   ```bash
   copilot
   ```

2. Jeśli pojawi się prośba o logowanie, przejdź przez procedurę device code, żeby uwierzytelnić i autoryzować Copilot CLI.
3. Copilot CLI wyświetli taki komunikat:

   ```plaintext
   Copilot can read files in this folder and, with your permission, edit them or run code and shell commands. It will remember your permissions for the rest of this session.

   Do you trust the files in this folder?
   ```

4. Sprawdź, czy ścieżka wskazuje na Twoje repozytorium Tailspin Toys, a potem potwierdź, wybierając **Yes, and remember this folder for future sessions**.

> ℹ️ **Uwaga**  
> W codespace możesz być już zalogowany przez swoją sesję GitHuba. Jeśli Copilot CLI wystartuje bez pytania o logowanie, to w porządku.

## Rozejrzyj się

Komendy wpisywane w zwykłym prompcie powłoki wykonują się bezpośrednio w codespace. Po uruchomieniu Copilot CLI język naturalny trafia do agenta, a komendy slash sterują rozmową.

1. Wpisz `/model`, strzałkami wybierz **Auto**, naciśnij <kbd>Enter</kbd>, a potem jeszcze raz <kbd>Enter</kbd>, żeby potwierdzić.
2. Wpisz `/help`, żeby zobaczyć komendy dostępne w Twojej wersji, a potem naciśnij <kbd>Esc</kbd>, żeby zamknąć pomoc.
3. Zadaj Copilotowi proste pytanie, żeby sprawdzić, czy wszystko działa:

   ```plaintext
   What are the key files in this project?
   ```

4. Przeczytaj odpowiedź i zwróć uwagę, że Copilot najpierw przegląda repozytorium, a dopiero potem odpowiada.
5. Wpisz `/mcp list` i potwierdź, że wbudowany serwer GitHub MCP jest dostępny.
6. Poproś Copilota o znalezienie zgłoszenia o filtrowaniu:

   ```plaintext
   Using GitHub MCP, find the issue in this repository about filtering games by category and publisher. Give me its URL and a short summary. Don't change anything.
   ```

7. Otwórz podany URL i przeczytaj zgłoszenie. Wrócisz do niego po wykonaniu pierwszej, szybkiej zmiany.

> 💡 **Wskazówka**  
> Zwykła sesja Copilot CLI pracuje na gałęzi aktualnie wybranej w Twoim terminalu — nie tworzy automatycznie worktree. Przed każdą zmianą sam założysz gałąź funkcjonalności.

## Skrót na potrzeby warsztatu

Copilot CLI standardowo pyta o zgodę, zanim użyje narzędzia spoza ustalonych uprawnień. Na warsztacie uruchomisz go z flagą `--yolo`, która wyłącza te pytania. W codespace to bezpieczne, a oszczędza sporo klikania.

> 🚨 **Uważaj**  
> `--yolo` włącza pełne automatyczne uprawnienia (`--allow-all-tools`, `--allow-all-paths` i `--allow-all-urls`). Używaj tego **wyłącznie** w izolowanym środowisku, takim jak codespace albo maszyna wirtualna, i nigdy nie ustawiaj tego jako domyślnego aliasu do codziennej pracy. Szczegóły w [Allowing and denying tool use][allow-all-warning].

Druga flaga, `--enable-all-github-mcp-tools`, włącza narzędzia GitHub MCP do odczytu i zapisu. Będą potrzebne w dalszych lekcjach przy zgłoszeniach i pull requestach. Codespace jest odizolowany od Twojego komputera, ale repozytoria na GitHubie, do których jesteś zalogowany, są prawdziwe. Przeglądaj zmiany, zanim je opublikujesz albo zmergujesz.

1. Zamknij Copilot CLI komendą `/exit`.
2. Uruchom go ponownie z katalogu głównego repozytorium:

   ```bash
   copilot --yolo --enable-all-github-mcp-tools
   ```

3. Zadaj jeszcze jedno szybkie pytanie o projekt, żeby potwierdzić, że rozmowa działa, a potem wyjdź przez `/exit`.

Copilot zapisuje rozmowy automatycznie. Później, po zmianie instrukcji albo dodaniu agenta, użyjesz `copilot --resume`, żeby wrócić do tej samej rozmowy i gałęzi.

## Podsumowanie i co dalej

Copilot CLI jest zainstalowany, zalogowany i zna Twoje repozytorium. Znalazłeś też zgłoszenie o filtrowaniu, do którego wrócisz w lekcji 3. W następnym kroku [zaczniesz pierwszą, niewielką zmianę][next-lesson] i użyjesz Copilot CLI, żeby pokazać oceny w gwiazdkach na kartach gier.

## Materiały

- [Instalacja GitHub Copilot CLI][install-cli]
- [O GitHub Copilot CLI][about-copilot-cli]
- [Dokumentacja komend Copilot CLI][cli-reference]

[previous-lesson]: ../0-prerequisites/
[next-lesson]: ../2-add-star-rating/
[install-cli]: https://docs.github.com/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
[allow-all-warning]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli#allowing-and-denying-tool-use
