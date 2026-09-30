---
slug: real-world-development/cli
title: "GitHub Copilot CLI"
description: "Zbuduj, zweryfikuj i dowieź dwie zmiany w Tailspin Toys, poznając tryby agenta w Copilot CLI, własne instrukcje, narzędzia MCP i automatyzację pull requestów."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

**[GitHub Copilot CLI][about-copilot-cli]** wstawia GitHub Copilota do Twojego terminala jako agentowego asystenta programowania. Przegląda repozytoria, generuje kod, uruchamia komendy i łączy się z zewnętrznymi narzędziami — a wszystko z linii poleceń, więc nie musisz przełączać się do graficznego edytora.

Warsztat prowadzi przez jeden ciągły przepływ pracy na projekcie Tailspin Toys:

1. Przygotujesz projekt w GitHub Codespaces, zainstalujesz Copilot CLI i zorientujesz się w terenie.
2. Wprowadzisz niewielką zmianę z ocenami w gwiazdkach, obejrzysz ją w przeglądarce i ręcznie zmergujesz swojego pierwszego pull requesta (PR).
3. Wyjdziesz od zgłoszenia o filtrowaniu, ustalisz podejście w trybie Plan, zbudujesz je w trybie Autopilot, a potem przejrzysz w trybie interaktywnym.
4. Zaktualizujesz instrukcje repozytorium i zastosujesz je do pracy nad filtrowaniem.
5. Dostosujesz istniejący skill `quality-checks` i użyjesz go do uruchomienia kontroli w projekcie.
6. Dodasz serwer Playwright Model Context Protocol (MCP) i sprawdzisz nim filtrowanie w przeglądarce.
7. Stworzysz własnego agenta do kontroli jakości (QA) i przejrzysz nim wymagania, pokrycie i dowody weryfikacji.
8. Przejrzysz całą zmianę z filtrowaniem i użyjesz Agent Merge do jej pull requesta.
9. Poznasz przydatne komendy slash do kontekstu, modeli, udostępniania i opcjonalnego delegowania do chmury.

Żeby warsztat pozostał zwarty, utworzysz dwa PR-y: oceny w gwiazdkach, a potem filtrowanie wraz z aktualizacją instrukcji, zmianą skilla, profilem QA i testami. Praca nad filtrowaniem i jakością toczy się w jednej rozmowie i na jednej gałęzi, więc każde kolejne narzędzie buduje na tym, co już zrobiłeś.

## Lekcje

| Lekcja | Temat | Opis |
| ------ | ----- | ---- |
| [0. Wymagania wstępne][ex0] | Setup | Utworzenie repozytorium i codespace'a |
| [1. Instalacja Copilot CLI][ex1] | Instalacja | Instalacja i logowanie w Copilot CLI, pierwsze rozeznanie |
| [2. Oceny w gwiazdkach: szybka wygrana][ex2] | Pierwsza zmiana | Wyświetlenie istniejących ocen i obsługa braku danych, merge pierwszego PR-a |
| [3. Tryby agenta: Plan i Autopilot][ex3] | Tryby agenta | Zaplanowanie funkcji na podstawie zgłoszenia, budowa w Autopilocie, przegląd w trybie interaktywnym |
| [4. Sterowanie Copilotem przez własne instrukcje][ex4] | Kontekst | Przegląd i aktualizacja instrukcji, zastosowanie ich do filtrowania |
| [5. Skill do kontroli jakości][ex5] | Powtarzalne kontrole | Poznanie istniejącego skilla, zmiana formatu raportu i uruchomienie go |
| [6. Weryfikacja przez Playwright MCP][ex6] | Obserwacja w przeglądarce | Konfiguracja MCP w CLI i sprawdzenie działania filtrowania |
| [7. Własny agent QA][ex7] | Wymagania i pokrycie | Utworzenie i wybór profilu specjalisty, zebranie końcowych dowodów weryfikacji |
| [8. Pull request z funkcjonalnością][ex8] | Review i merge | Przegląd całej zmiany, utworzenie PR-a i użycie Agent Merge |
| [9. Komendy slash w GitHub Copilot CLI][ex9] | Możliwości CLI | Kontekst, modele, udostępnianie i opcjonalne delegowanie do agenta w chmurze |
| [10. Podsumowanie i co dalej][ex10] | Podsumowanie | Przegląd przepływu pracy, wielokrotnego użytku dostosowań i dalszych materiałów |

## Wymagania wstępne

Zanim zaczniesz warsztat, upewnij się, że masz:

- [ ] Konto GitHub z aktywnym planem **Copilot Student, Pro, Pro+, Business albo Enterprise**
- [ ] Uprawnienia do utworzenia repozytorium i codespace'a
- [ ] Podstawową znajomość pracy w terminalu

> [!TIP]
> Nie masz płatnego planu? Zweryfikowani studenci dostają GitHub Copilota za darmo przez [GitHub Education][student-plan]. Plan **Copilot Student** obejmuje agenta, MCP, code review i Copilot CLI — czyli wszystko, czego używamy na tym warsztacie.

> [!NOTE]
> Jeśli korzystasz z Copilot Business albo Copilot Enterprise, upewnij się, że administrator włączył u Was Copilot CLI.

## Zaczynamy

**[Zacznij od wymagań wstępnych →][ex0]**

[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[student-plan]: https://github.com/education/students
[ex0]: 0-prerequisites/
[ex1]: 1-install-copilot-cli/
[ex2]: 2-add-star-rating/
[ex3]: 3-agent-modes/
[ex4]: 4-custom-instructions/
[ex5]: 5-agent-skills/
[ex6]: 6-mcp-playwright/
[ex7]: 7-qa-agent/
[ex8]: 8-create-pull-request/
[ex9]: 9-cli-power-tools/
[ex10]: 10-review/
