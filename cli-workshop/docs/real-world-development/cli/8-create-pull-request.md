---
title: "Lekcja 8 — Pull request z funkcjonalnością"
description: "Przejrzyj razem filtrowanie, instrukcje, zmianę skilla, profil QA i testy, a potem utwórz PR i użyj Agent Merge."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Implementacja filtrowania, aktualizacja instrukcji, zmiana skilla, profil kontroli jakości (QA) i testy są zapisane na jednej gałęzi. Czas przejrzeć je razem i otworzyć pull requesta. Pull requesta z ocenami w gwiazdkach zmergowałeś samodzielnie; tym razem pozwolisz, żeby procesem zarządził **Agent Merge**.

> ℹ️ **Uwaga**  
> Normalnie rozbilibyśmy funkcjonalność, aktualizację instrukcji, zmianę skilla i agenta QA na kilka osobnych PR-ów. Żeby uprościć warsztat, cały przepływ filtrowania i jakości trzymałeś w jednej rozmowie i na jednej gałęzi — i to wszystko trafi do tego PR-a.

W tej lekcji:

- dowiesz się, czym jest Agent Merge i jak automatyzuje cykl życia merge'a,
- przejrzysz całą zmianę wraz z dowodami weryfikacji,
- utworzysz pull requesta z filtrowaniem,
- włączysz Agent Merge dopiero po przeglądzie i potwierdzisz, że PR został zmergowany.

## Scenariusz

W całym przepływie pracy nad filtrowaniem używałeś Copilota do zaplanowania, zaimplementowania i zweryfikowania funkcjonalności. Tailspin Toys chce teraz zautomatyzować pozostałą pracę wokół pull requesta, zachowując jednocześnie decyzję o mergu w rękach programisty.

## Czym jest Agent Merge

**Agent Merge** automatyzuje resztę pracy potrzebnej do wprowadzenia pull requesta. Po włączeniu Copilot przerabia to, co blokuje PR-a — naprawia niezaliczone kontrole ciągłej integracji (CI), odpowiada na komentarze z review i w razie potrzeby wykonuje rebase — a potem włącza auto-merge GitHuba, jeśli repozytorium na to pozwala.

Do tej pory sam wybierałeś **Merge pull request**. Agent Merge może wziąć ten obowiązek na siebie. Przejrzyj pracę i uznaj ją za gotową, zanim włączysz Agent Merge.

## Zarządzaj PR-em przez Agent Merge

Cały kod jest gotowy — przejrzyjmy go razem, utwórzmy PR-a i pozwólmy Agent Merge poprowadzić resztę procesu.

1. Wróć do swojego codespace'a.
2. Otwórz okno wyboru agenta, wpisując `/agent`.
3. Wybierz z listy **Default** i naciśnij <kbd>Enter</kbd>.
4. Utwórz nowego PR-a komendą `/pr create`.
5. Włącz Agent Merge komendą `/pr agentmerge`.
6. Copilot będzie obserwował proces ciągłej integracji na PR-ze. Kiedy wszystko się powiedzie, wykona merge.
7. Upewnij się, że widzisz komunikat od Copilota w rodzaju „PR #14 was squash-merged successfully."

> ❗ **Ważne**  
> Agent Merge nie omija wymaganych akceptacji, ochrony gałęzi, kolejek merge'owania, ustawień repozytorium ani braku uprawnień. Jeśli zostanie zablokowany, przeczytaj podany powód i — o ile repozytorium na to pozwala — wykonaj przejrzany merge ręcznie.

## Podsumowanie i co dalej

Zautomatyzowałeś kilka części procesu wytwórczego: generowanie kodu, testowanie i weryfikację, a teraz także obsługę pull requesta. Konkretnie:

- dowiedziałeś się, czym jest Agent Merge i jak automatyzuje cykl życia merge'a,
- przejrzałeś całą zmianę wraz z dowodami weryfikacji,
- utworzyłeś pull requesta z filtrowaniem,
- włączyłeś Agent Merge dopiero po przeglądzie i potwierdziłeś merge.

W następnym kroku [poznasz więcej przydatnych komend slash w Copilot CLI][next-lesson] — do kontekstu, modeli, udostępniania i opcjonalnego delegowania do chmury.

## Materiały

- [Zarządzanie pull requestami w Copilot CLI][manage-prs]
- [Dokumentacja komend Copilot CLI][cli-reference]

[previous-lesson]: ../7-qa-agent/
[next-lesson]: ../9-cli-power-tools/
[manage-prs]: https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/manage-pull-requests
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
