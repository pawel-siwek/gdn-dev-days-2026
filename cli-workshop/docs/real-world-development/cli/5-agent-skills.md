---
title: "Lekcja 5 — Skill do kontroli jakości"
description: "Poznaj istniejący skill quality-checks, dostosuj format jego raportu i użyj go do weryfikacji filtrowania."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Kod działa i trzyma się standardów. Zostają testy, lintowanie i reszta tego, co normalnie robi CI. Do takich powtarzalnych zadań służą **agent skills**: opisują Copilotowi, jak poprawnie je wykonać.

W tej lekcji:

- poznasz istniejący skill `quality-checks`,
- dostosujesz format jego wyników,
- przeładujesz i uruchomisz skill.

## Scenariusz

Tailspin Toys używa skilla `quality-checks` do testów jednostkowych, lintowania i kontroli typów. Jego raport końcowy jest mało czytelny i to poprawisz.

## Czym jest skill

Skill to instrukcja zadania, którą agent ładuje na żądanie, czasem razem ze skryptami i plikami pomocniczymi. W najprostszej postaci to katalog z jednym plikiem `SKILL.md`. Plik ma frontmatter z nazwą i opisem (z niego Copilot wnioskuje, kiedy skilla użyć) oraz treść z krokami do wykonania.

> ℹ️ **Uwaga**  
> Skill `quality-checks` zawiera wyłącznie `SKILL.md`, bo korzysta z komend zdefiniowanych już w projekcie.

Skille projektu leżą w `.github/skills` i są wspólne dla zespołu. Własne, prywatne skille możesz trzymać w `~/.copilot/skills`.

## Poznaj skill

1. Wróć do swojego codespace'a. W edytorze Codespaces otwórz `.github/skills/quality-checks/SKILL.md`.
2. Przeczytaj pola `name` i `description` na górze. Opis pomaga Copilotowi zrozumieć, kiedy wywołać skill.
3. Przeczytaj instrukcje i zwróć uwagę, jak prowadzą Copilota przez proces testowania i lintowania.
4. Zauważ, że skill nie ma jeszcze sekcji **Format raportu z wyników**.

## Uruchom skill przed zmianą

Skill możesz wywołać wprost albo po prostu poprosić o to, co robi. Najpierw uruchom go w obecnej postaci, żeby mieć punkt odniesienia.

1. Wróć do rozmowy o filtrowaniu w trybie Interactive.
2. Użyj tego promptu:

   ```plaintext
   Uruchom skill quality-checks: testy jednostkowe, lint i kontrolę typów.
   ```

3. Zwróć uwagę na raport na końcu.

## Dostosuj raport

Lepszy raport powinien mówić, co zostało uruchomione, czy przeszło i co dokładnie zgłosiły narzędzia. Dopisz to do skilla.

1. Wróć do `.github/skills/quality-checks/SKILL.md`.
2. Dodaj na końcu pliku poniższą sekcję:

   ```markdown
   ## Format raportu z wyników

   Po zakończeniu wypisz każdą uruchomioną komendę i podaj, czy przeszła, nie przeszła, czy została zablokowana. Liczbę testów, czasy, błędy, ostrzeżenia i inne metryki podawaj tylko wtedy, gdy narzędzie je zgłosiło. Dla każdego błędu lub blokady wskaż następny krok. Nigdy nie opisuj pominiętej albo niedokończonej kontroli jako zaliczonej.
   ```

3. Plik zapisze się automatycznie.

## Uruchom zaktualizowany skill

Copilot CLI potrafi przeładować zmienione skille bez restartowania rozmowy.

1. Wpisz:

   ```plaintext
   /skills reload
   ```

2. Użyj dokładnie tego samego promptu co poprzednio:

   ```plaintext
   Uruchom skill quality-checks: testy jednostkowe, lint i kontrolę typów.
   ```

3. Zwróć uwagę na raport na końcu i porównaj go z pierwszym.

## Podsumowanie i co dalej

Skill `quality-checks` raportuje teraz tak, jak chce zespół. Ta zmiana trafi do pull requesta razem z filtrowaniem. W następnym kroku pozwolisz Copilotowi wejść w bezpośrednią interakcję ze stroną [przez serwer Playwright MCP][next-lesson].

## Więcej przykładów skilli

Do poczytania po warsztacie, nie są częścią zadań:

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
