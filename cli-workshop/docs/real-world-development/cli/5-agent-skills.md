---
title: "Lekcja 5 — Skill do kontroli jakości"
description: "Poznaj istniejący skill quality-checks, dostosuj format jego raportu i użyj go do weryfikacji filtrowania."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Pisanie kodu to nie wszystko. Sprawdziliśmy już ręcznie, że kod działa, i użyliśmy plików instrukcji, żeby trzymał się naszych standardów. Ale co z testami? Lintowaniem? Całą resztą ciągłej integracji (CI)?

Do takich zadań najlepiej nadają się **agent skills**. Skille pomagają Copilotowi zrozumieć, jak poprawnie przeprowadzać tego typu operacje.

W tej lekcji:

- poznasz istniejący skill `quality-checks`,
- dostosujesz format jego wyników,
- przeładujesz i uruchomisz skill.

## Scenariusz

Tailspin Toys używa skilla `quality-checks` do testów jednostkowych, lintowania i kontroli typów. Zespół chce ulepszyć raport, żeby wyniki były czytelniejsze.

## Instrukcje, skrypty i zasoby

Agent skills pakują wielokrotnego użytku instrukcje zadań, wykonywalne skrypty i zasoby pomocnicze, które agent ładuje na żądanie. W najprostszej postaci to katalog o nazwie skilla z plikiem Markdown `SKILL.md`. Ten plik zawiera frontmatter z nazwą i opisem definiującym, czym skill jest, przegląd tego, co robi, oraz wskazówki, kiedy powinien zostać wywołany. Katalog może też zawierać podkatalogi ze skryptami i innymi zasobami, z których skill korzysta.

> ℹ️ **Uwaga**  
> Dodatkowe katalogi i pliki nie są wymagane. Skill `quality-checks` w Tailspin Toys zawiera wyłącznie `SKILL.md`, bo korzysta z istniejących komend projektu.

Skille mogą mieszkać w katalogu `.github/skills` projektu — stają się wtedy zasobem repozytorium współdzielonym przez zespół — albo w katalogu skilli użytkownika, czyli `~/.copilot/skills`.

## Poznaj skill

Przyjrzyjmy się skillowi, który zespół Tailspin Toys stworzył do uruchamiania testów jednostkowych, lintowania i kontroli typów — nazywa się `quality-checks`.

1. Wróć do swojego codespace'a. W edytorze Codespaces otwórz `.github/skills/quality-checks/SKILL.md`.
2. Przeczytaj pola `name` i `description` na górze. Opis pomaga Copilotowi zrozumieć, kiedy wywołać skill.
3. Przeczytaj instrukcje i zwróć uwagę, jak prowadzą Copilota przez proces testowania i lintowania.
4. Zauważ, że skill nie zawiera jeszcze sekcji **Results output formatting**.

## Uruchom skill przed zmianą

Skille wywołuje się bezpośrednio w Copilot CLI albo językiem naturalnym. Poprośmy Copilota o uruchomienie trzech kontroli ze skilla.

1. Wróć do rozmowy o filtrowaniu w trybie Interactive.
2. Użyj tego promptu:

   ```plaintext
   Run the quality-checks skill for unit tests, lint, and type checks.
   ```

3. Zwróć uwagę na raport na końcu.

## Dostosuj raport

Chcielibyśmy lepszego raportu — takiego, który mówi, co zostało uruchomione, czy się powiodło i co dokładnie zgłosiły narzędzia. Zaktualizujmy skill, żeby taki raport tworzył.

1. Wróć do `.github/skills/quality-checks/SKILL.md`.
2. Dodaj na końcu pliku poniższą sekcję:

   ```markdown
   ## Results output formatting

   Upon completion, report each command that ran and whether it passed, failed, or was blocked. Include test counts, durations, errors, warnings, and other metrics only when the tool reports them. Identify the next action for any failure or blocker, and never describe a skipped or incomplete check as passed.
   ```

3. Plik zapisze się automatycznie.

## Uruchom zaktualizowany skill

Zmiana wprowadzona — zobaczmy ją w akcji. Copilot CLI potrafi przeładować zmodyfikowane skille bez restartowania rozmowy.

1. Wpisz:

   ```plaintext
   /skills reload
   ```

2. Użyj dokładnie tego samego promptu co poprzednio:

   ```plaintext
   Run the quality-checks skill for unit tests, lint, and type checks.
   ```

3. Zwróć uwagę na raport na końcu i porównaj go z pierwszym.

## Podsumowanie i co dalej

Dostosowałeś i wykorzystałeś istniejący agent skill. W tej lekcji:

- poznałeś skill `quality-checks` do testów jednostkowych, lintowania i kontroli typów,
- dostosowałeś format jego wyników,
- przeładowałeś i uruchomiłeś skill.

Ta zmiana pojedzie razem z filtrowaniem w pull requeście funkcjonalności. W następnym kroku pozwolisz Copilotowi wejść w bezpośrednią interakcję ze stroną [przez serwer Playwright MCP][next-lesson].

## Więcej przykładów skilli

Te przykłady od społeczności są materiałem referencyjnym, nie dodatkowymi zadaniami:

- [Specyfikacja Agent Skills][skill-spec]
- [Przepływ kontrybucji: `make-repo-contribution`][contribution-example]
- [Dokumenty wymagań: `prd`][prd-example]
- [Diagramy i dołączony skrypt eksportu: `drawio`][drawio-example]
- [Testowanie w przeglądarce: `webapp-testing`][browser-example]

[previous-lesson]: ../4-custom-instructions/
[next-lesson]: ../6-mcp-playwright/
[skill-spec]: https://agentskills.io/specification
[contribution-example]: https://github.com/github/awesome-copilot/tree/main/skills/make-repo-contribution
[prd-example]: https://github.com/github/awesome-copilot/tree/main/skills/prd
[drawio-example]: https://github.com/github/awesome-copilot/tree/main/skills/drawio
[browser-example]: https://github.com/github/awesome-copilot/tree/main/skills/webapp-testing
