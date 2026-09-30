---
title: "Lekcja 10 — Podsumowanie i co dalej"
description: "Przegląd przepływu pracy w Copilot CLI, dwóch pull requestów, dostosowań wielokrotnego użytku i dalszych materiałów."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Przeszedłeś przez ciągły przepływ pracy na projekcie Tailspin Toys z GitHub Copilot CLI. Konkretnie:

- przygotowałeś codespace, zainstalowałeś Copilot CLI, poznałeś projekt i znalazłeś przygotowane zgłoszenie o filtrowaniu,
- dodałeś oceny w gwiazdkach, obejrzałeś wynik w przekierowanej przeglądarce i ręcznie zmergowałeś swojego pierwszego pull requesta (PR),
- wyszedłeś od zgłoszenia o filtrowaniu, ustaliłeś podejście w trybie Plan, zbudowałeś je w trybie Autopilot i przejrzałeś w trybie Interactive,
- pokierowałeś agentem przez własne instrukcje, a potem dostosowałeś istniejący skill `quality-checks` i uruchomiłeś nim testy jednostkowe, lintowanie i kontrolę typów,
- dodałeś serwer Playwright Model Context Protocol (MCP) i sprawdziłeś nim filtrowanie w prawdziwej przeglądarce,
- stworzyłeś i wybrałeś własnego agenta do kontroli jakości (QA), żeby ocenił wymagania, pokrycie testami, wyniki skilla i dowody z przeglądarki,
- przejrzałeś całą zmianę z filtrowaniem i autoryzowałeś Agent Merge dla jej pull requesta,
- poznałeś komendy slash do kontekstu, modeli, udostępniania i opcjonalnego delegowania do chmury.

## Co dowiozłeś

Warsztat ma dwa kamienie milowe w postaci PR-ów, każdy na osobnej gałęzi odbitej od zaktualizowanego `main`:

1. **Oceny w gwiazdkach:** wyświetlenie istniejącego `starRating` i jawnego stanu „brak oceny" na kartach gier.
2. **Filtrowanie i przepływ jakości:** implementacja filtrowania, aktualizacja instrukcji i zastosowanie ich do funkcjonalności, dostosowanie raportu `quality-checks`, utworzenie profilu QA oraz powiązane testy.

Od zaplanowania filtrowania aż po otwarcie jego PR-a korzystałeś z tej samej rozmowy i tej samej gałęzi. Złożyliśmy tę pracę w jeden PR, żeby uprościć warsztat.

## Różne rodzaje weryfikacji

Sprawdziłeś kod na kilka sposobów: automatycznymi testami, własnym przeglądem w przeglądarce oraz eksploracją przeglądarki wykonaną przez Copilota przez MCP. Skill `quality-checks` uruchomił testy jednostkowe, lintowanie i kontrolę typów, a wyniki zaraportował w Twoim nowym formacie. QA zebrał te wyniki razem z przeglądem wymagań i pokrycia testami przed PR-em.

Dodane testy powinny zamykać realne luki; przebieg QA, który nie potrzebuje nowych testów, też może być poprawny. Przeglądaj kod i dowody przed autoryzacją merge'a, a po zmianach odświeżaj dowody, których te zmiany dotyczą.

## Dobre praktyki

Kontekst i narzędzia, które dajesz Copilotowi, kształtują jego pracę. Na tym warsztacie zaktualizowałeś instrukcje, dostosowałeś skill, stworzyłeś profil QA i skonfigurowałeś serwer MCP. Wykorzystuj te dostosowania w kolejnych rozmowach i modyfikuj je wraz ze zmianą potrzeb zespołu. Instrukcje ustalają standardy, skille opisują powtarzalne zadania, własni agenci definiują wyspecjalizowane role, a serwery MCP podłączają zewnętrzne narzędzia. Przeglądaj faktyczne zmiany i wyniki narzędzi, nie tylko podsumowanie agenta.

Dopasuj **tryb i model** do zadania. Użyj **Plan**, żeby przemyśleć podejście przed budowaniem, **Interactive**, żeby pozostać w pętli przy precyzyjnych zmianach, i **Autopilot** przy dobrze zakreślonych zadaniach. Wybieraj szybszy model do rutynowych edycji, a mocniejszy do złożonej pracy.

Kontekst wciąż liczy się tak samo jak infrastruktura. Jasne opisanie, *co* chcesz zbudować, *dlaczego* i *w jaki sposób*, realnie zmienia wynik.

## Co jeszcze warto poznać

Główny przepływ masz za sobą. Kilka kolejnych funkcji CLI wartych uwagi:

- `/review` — poproś agenta code review o analizę zmian.
- `/rubber-duck` — omów problem na głos i uzyskaj inną perspektywę.
- `/fleet` — zorganizuj niezależne podzadania równolegle.
- `/worktree` — odizoluj osobne zadanie.
- `/delegate` — wyślij zadanie do agenta Copilota w chmurze.

## Kolejne kroki

Najlepszym sposobem na podniesienie poziomu w dowolnym narzędziu jest po prostu używanie go. Sięgaj po nie przy kodzie produkcyjnym, przy projektach hobbystycznych i przy tej małej aplikacji, o której myślisz od lat, ale nigdy nie było czasu jej zbudować. Dziel się wnioskami z zespołem i ucz się od innych. I jak zawsze — zaglądaj do dokumentacji.

Jeśli chcesz porównać inne środowiska, zajrzyj do oryginalnych, angielskich wersji: [warsztat VS Code][vscode], [warsztat z aplikacją GitHub Copilot][app] albo [warsztat z agentem w chmurze][cloud].

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
