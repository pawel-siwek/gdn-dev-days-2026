---
title: "Lekcja 9 — Komendy slash w GitHub Copilot CLI"
description: "Poznaj komendy slash do zarządzania kontekstem, wyboru modelu, udostępniania sesji i opcjonalnego delegowania do chmury."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Jak każde porządne narzędzie CLI, GitHub Copilot CLI ma sporo komend slash do sterowania nim. Odsłaniają one zaawansowane funkcje, informacje o tym, co dzieje się pod spodem, i dodatkowe opcje konfiguracji. Używałeś już `/diff`, `/mcp`, `/skills`, `/agent` i `/pr`. Poznajmy kilka innych przydatnych.

W tej lekcji:

- użyjesz `/context` i `/compact`, żeby zobaczyć, jak Copilot zarządza kontekstem rozmowy,
- użyjesz `/model`, żeby przejrzeć dostępne dla Ciebie modele,
- dowiesz się, jak `/share` eksportuje albo udostępnia sesję,
- poznasz opcjonalne komendy do pracy równoległej, worktree i delegowania do agenta w chmurze.

## Scenariusz

Główny przepływ pracy w CLI masz już za sobą. Przyjrzyjmy się kilku dodatkowym możliwościom — zarządzaniu kontekstem, przełączaniu modeli, udostępnianiu sesji i opcjonalnemu delegowaniu pracy do [agenta Copilota w chmurze][about-cloud-agent].

## Poznaj kontekst w Copilot CLI

Przy większych albo bardziej złożonych zadaniach możesz natrafić na limit okna kontekstu modelu. Copilot CLI automatycznie kompaktuje rozmowę, kiedy trzeba, ale możesz też sam podejrzeć albo skompaktować kontekst komendami slash.

1. Wróć do codespace'a i uruchom Copilot CLI z katalogu głównego repozytorium, jeśli jeszcze nie działa.
2. Wpisz:

   ```plaintext
   /context
   ```

3. Zwróć uwagę na model, bieżące zużycie tokenów i na to, jak kontekst dzieli się między instrukcje systemowe, narzędzia, wiadomości i wolne miejsce.
4. Skompaktuj rozmowę:

   ```plaintext
   /compact
   ```

5. Wpisz `/context` ponownie i porównaj wynik. Jeśli rozmowa jest jeszcze krótka, różnica może nie być duża.

> ℹ️ **Uwaga**  
> Copilot CLI kompaktuje kontekst automatycznie, w miarę zapełniania się okna. Użyj `/compact`, kiedy chcesz sam wybrać moment. Użyj `/clear` albo `/new`, kiedy przechodzisz do niezwiązanego zadania i wolisz zacząć rozmowę od zera.

## Wybierz model

Różne modele mają różne mocne strony, a różni programiści — różne preferencje. Copilot CLI pozwala wylistować i wybrać model, z którego chcesz korzystać.

1. Wpisz:

   ```plaintext
   /model
   ```

2. Przejrzyj dostępne modele i informacje o zużyciu.
3. Zostań przy bieżącym modelu, wybierz inny albo naciśnij <kbd>Esc</kbd>, żeby zamknąć listę.

## Udostępnij sesję

Wspólna praca i dzielenie się wnioskami pomagają całemu zespołowi lepiej korzystać z narzędzi AI. Komenda `/share` potrafi wyeksportować sesję do pliku Markdown albo HTML, utworzyć link do udostępnienia albo opublikować gista na GitHubie.

1. Wpisz `/help` i przejrzyj opcje `/share` dostępne w Twojej wersji.
2. Jeśli chcesz udostępnić tę sesję, wybierz pasujący cel — na przykład `/share file`, żeby wyeksportować lokalnie do Markdowna.
3. Przejrzyj wyeksportowaną treść, zanim komukolwiek ją wyślesz albo opublikujesz. Eksport sesji może zawierać prompty, odpowiedzi i szczegóły projektu.

Publikowanie linku albo gista jest opcjonalne. Nie publikuj treści repozytorium ani rozmowy, których Twój zespół nie zamierza udostępniać.

## Opcjonalnie: zrównoleglanie i delegowanie

Główna część warsztatu jest zakończona. Copilot CLI udostępnia też komendy przydatne przy większych zadaniach:

- `/fleet` potrafi rozdzielić niezależne podzadania między subagentów i uruchomić je równolegle.
- `/worktree` potrafi utworzyć izolowane worktree Gita na osobne zadanie.
- `/delegate` potrafi wysłać zadanie do agenta Copilota w chmurze, który pracuje asynchronicznie i może otworzyć pull requesta.

Te komendy są opcjonalne, bo potrafią tworzyć dodatkowe worktree albo pracę po stronie zdalnej. Zanim ich spróbujesz, zacznij świeże, dobrze zakreślone zadanie i przejrzyj wynik w swoim zwykłym procesie. Jeśli chcesz zgłębić asynchroniczną pracę agentów, przejdź do [warsztatu z agentem w chmurze][cloud-workshop] (po angielsku).

## Podsumowanie i co dalej

Komendy slash w Copilot CLI pozwalają go konfigurować, udostępniać sesje i zaglądać pod maskę. W tej lekcji:

- użyłeś `/context` i `/compact`, żeby zobaczyć, jak Copilot zarządza kontekstem rozmowy,
- użyłeś `/model`, żeby przejrzeć dostępne dla Ciebie modele,
- dowiedziałeś się, jak `/share` eksportuje albo udostępnia sesję,
- poznałeś opcjonalne komendy do pracy równoległej, worktree i delegowania do agenta w chmurze.

Komend slash jest więcej i w Copilot CLI wciąż jest co odkrywać. Zamknijmy tę podróż [podsumowaniem tego, czego się nauczyliśmy][next-lesson], oraz pomysłami na dalszą naukę.

## Materiały

- [Dokumentacja komend Copilot CLI][cli-reference]
- [Zarządzanie kontekstem w Copilot CLI][context-management]
- [O agencie Copilota w chmurze][about-cloud-agent]

[previous-lesson]: ../8-create-pull-request/
[next-lesson]: ../10-review/
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
[context-management]: https://docs.github.com/copilot/concepts/agents/copilot-cli/context-management
[about-cloud-agent]: https://docs.github.com/copilot/concepts/agents/cloud-agent/about-cloud-agent
[cloud-workshop]: https://github-samples.github.io/copilot-workshops/real-world-development/cloud/
