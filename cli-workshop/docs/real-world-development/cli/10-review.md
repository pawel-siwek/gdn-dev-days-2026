---
title: "Lekcja 10 — Podsumowanie i co dalej"
description: "Przegląd przepływu pracy w Copilot CLI, dwóch pull requestów, dostosowań wielokrotnego użytku i dalszych materiałów."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Przeszedłeś z Copilot CLI całą drogę od zgłoszenia do merge'a, na prawdziwym projekcie.

## Co zrobiłeś

W Twoim repozytorium są dwa zmergowane pull requesty:

1. **Oceny w gwiazdkach:** mała zmiana na kartach gier. Rozgrzewka z rozmową, `/diff` i `/pr create`.
2. **Filtrowanie:** funkcjonalność ze zgłoszenia, zaplanowana w trybie Plan, zbudowana w Autopilocie, sprawdzona przez Playwright MCP i agenta QA, zmergowana przez Agent Merge. Razem z nią poszła zmiana instrukcji, skilla `quality-checks` i profil QA.

## Co zostaje na później

Instrukcje, skill, profil QA i konfiguracja MCP zostają w repozytorium. Będą działać przy każdej kolejnej zmianie, nie tylko tej warsztatowej. Instrukcje ustalają standardy, skille opisują powtarzalne zadania, własni agenci definiują role, a serwery MCP podłączają zewnętrzne narzędzia. Zmieniaj je razem z potrzebami zespołu.

## Co warto zapamiętać

- **Dopasuj tryb do zadania.** Plan, żeby przemyśleć podejście. Interactive, kiedy chcesz mieć kontrolę nad każdym krokiem. Autopilot przy dobrze opisanych zadaniach.
- **Dopasuj model.** Szybszy do rutynowych edycji, mocniejszy do złożonej pracy.
- **Przeglądaj zmiany, nie podsumowania.** Raport agenta to nie to samo, co diff i wynik testów.
- **Weryfikuj na kilka sposobów.** Testy, własne klikanie i przegląd przez agenta łapią różne rzeczy.
- **Opisuj, czego chcesz i dlaczego.** Dobry kontekst robi większą różnicę niż wybór modelu.

## Co jeszcze warto poznać

Kilka komend, których na warsztacie nie było:

- `/review` — poproś agenta code review o analizę zmian.
- `/rubber-duck` — omów problem na głos i uzyskaj inną perspektywę.
- `/fleet` — zorganizuj niezależne podzadania równolegle.
- `/worktree` — odizoluj osobne zadanie.
- `/delegate` — wyślij zadanie do agenta Copilota w chmurze.

## Kolejne kroki

Najlepiej po prostu zacząć używać Copilot CLI w codziennej pracy, na własnych projektach. Ten sam warsztat istnieje też w wersjach na inne środowiska (po angielsku): [VS Code][vscode], [aplikacja GitHub Copilot][app] i [agent w chmurze][cloud].

## Materiały

- [O GitHub Copilot CLI][about-cli]
- [Dokumentacja komend Copilot CLI][cli-reference]
- [Dostosowywanie Copilot CLI][customize-cli]
- [Zarządzanie pull requestami w Copilot CLI][manage-prs]

---

*Polska wersja przygotowana na GitHub Dev Days Gdańsk · 28.10.2026 · Capgemini, Olivia Six*

[previous-lesson]: ../9-cli-power-tools/
[vscode]: https://github-samples.github.io/copilot-workshops/real-world-development/vscode/
[app]: https://github-samples.github.io/copilot-workshops/real-world-development/app/
[cloud]: https://github-samples.github.io/copilot-workshops/real-world-development/cloud/
[about-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
[customize-cli]: https://docs.github.com/copilot/how-tos/copilot-cli/customize-copilot
[manage-prs]: https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/manage-pull-requests
