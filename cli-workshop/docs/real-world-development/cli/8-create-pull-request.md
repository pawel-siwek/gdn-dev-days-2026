---
title: "Lekcja 8 — Pull request z funkcjonalnością"
description: "Przejrzyj razem filtrowanie, instrukcje, zmianę skilla, profil QA i testy, a potem utwórz PR i użyj Agent Merge."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Filtrowanie, zmiana instrukcji, zmiana skilla, profil QA i testy leżą na jednej gałęzi. Czas otworzyć pull requesta. Poprzedniego zmergowałeś ręcznie, tym razem zrobi to **Agent Merge**.

> ℹ️ **Uwaga**  
> Normalnie każda z tych zmian poszłaby osobnym PR-em. Na warsztacie wszystko trafia do jednego, żeby nie tracić czasu.

W tej lekcji:

- dowiesz się, czym jest Agent Merge i co automatyzuje,
- przejrzysz całą zmianę wraz z dowodami weryfikacji,
- utworzysz pull requesta z filtrowaniem,
- włączysz Agent Merge dopiero po przeglądzie i potwierdzisz, że PR został zmergowany.

## Scenariusz

Copilot zaplanował, zaimplementował i zweryfikował filtrowanie. Zespół chce, żeby zajął się też resztą pracy wokół pull requesta. Decyzja o mergu zostaje po stronie programisty.

## Czym jest Agent Merge

**Agent Merge** doprowadza pull requesta do merge'a. Po włączeniu Copilot usuwa to, co PR-a blokuje: naprawia niezaliczone kontrole CI, odpowiada na komentarze z review, w razie potrzeby robi rebase. Na końcu włącza auto-merge GitHuba, jeśli repozytorium na to pozwala.

Do tej pory sam klikałeś **Merge pull request**. Agent Merge może to przejąć, ale dopiero po Twoim przeglądzie.

## Zarządzaj PR-em przez Agent Merge

1. Wróć do swojego codespace'a.
2. Otwórz okno wyboru agenta, wpisując `/agent`.
3. Wybierz z listy **Default** i naciśnij <kbd>Enter</kbd>.
4. Utwórz nowego PR-a komendą `/pr create`.
5. Włącz Agent Merge komendą `/pr agentmerge`.
6. Copilot obserwuje CI na PR-ze. Kiedy wszystko przejdzie, wykona merge.
7. Poczekaj na komunikat w rodzaju „PR #14 was squash-merged successfully".

> ❗ **Ważne**  
> Agent Merge nie omija wymaganych akceptacji, ochrony gałęzi, kolejek merge ani braku uprawnień. Jeśli zostanie zablokowany, przeczytaj powód i, o ile repozytorium na to pozwala, zmerguj ręcznie.

## Podsumowanie i co dalej

Filtrowanie jest w `main`. Copilot zajął się całą drogą od zgłoszenia do merge'a, a Ty w kluczowych momentach przeglądałeś i decydowałeś. W następnym kroku [poznasz więcej przydatnych komend slash w Copilot CLI][next-lesson] — do kontekstu, modeli, udostępniania i opcjonalnego delegowania do chmury.

## Materiały

- [Zarządzanie pull requestami w Copilot CLI][manage-prs]
- [Dokumentacja komend Copilot CLI][cli-reference]

[previous-lesson]: ../7-qa-agent/
[next-lesson]: ../9-cli-power-tools/
[manage-prs]: https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/manage-pull-requests
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
