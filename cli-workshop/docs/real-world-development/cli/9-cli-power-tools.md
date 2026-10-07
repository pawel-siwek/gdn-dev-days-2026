---
title: "Lekcja 9 — Komendy slash w GitHub Copilot CLI"
description: "Poznaj komendy slash do zarządzania kontekstem, wyboru modelu, udostępniania sesji i opcjonalnego delegowania do chmury."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Używałeś już `/diff`, `/mcp`, `/skills`, `/agent` i `/pr`. Copilot CLI ma więcej komend slash, które warto znać.

W tej lekcji:

- użyjesz `/context` i `/compact`, żeby zobaczyć, jak Copilot zarządza kontekstem rozmowy,
- użyjesz `/model`, żeby przejrzeć dostępne dla Ciebie modele,
- dowiesz się, jak `/share` eksportuje albo udostępnia sesję,
- poznasz opcjonalne komendy do pracy równoległej, worktree i delegowania do agenta w chmurze.

## Kontekst rozmowy

Przy dłuższej pracy możesz natrafić na limit okna kontekstu modelu. Copilot CLI kompaktuje rozmowę automatycznie, kiedy trzeba, ale możesz też sam ją podejrzeć i skompaktować.

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
> `/compact` przydaje się, kiedy chcesz sam wybrać moment. `/clear` albo `/new`, kiedy przechodzisz do innego zadania i wolisz zacząć od zera.

## Wybierz model

Różne modele mają różne mocne strony. Copilot CLI pozwala sprawdzić, które masz dostępne, i przełączać się między nimi.

1. Wpisz:

   ```plaintext
   /model
   ```

2. Przejrzyj dostępne modele i informacje o zużyciu.
3. Zostań przy bieżącym modelu, wybierz inny albo naciśnij <kbd>Esc</kbd>, żeby zamknąć listę.

## Udostępnij sesję

Komenda `/share` eksportuje sesję do pliku Markdown albo HTML, tworzy link do udostępnienia albo publikuje gista na GitHubie. Przydaje się, kiedy chcesz pokazać zespołowi, jak coś zrobiłeś.

1. Wpisz `/help` i przejrzyj opcje `/share` dostępne w Twojej wersji.
2. Jeśli chcesz udostępnić tę sesję, wybierz pasujący cel — na przykład `/share file`, żeby wyeksportować lokalnie do Markdowna.
3. Przejrzyj wyeksportowaną treść, zanim komukolwiek ją wyślesz albo opublikujesz. Eksport sesji może zawierać prompty, odpowiedzi i szczegóły projektu.

Publikowanie linku albo gista jest opcjonalne. Nie publikuj treści repozytorium ani rozmowy, których Twój zespół nie zamierza udostępniać.

## Opcjonalnie: zrównoleglanie i delegowanie

Przy większych zadaniach przydają się jeszcze trzy komendy:

- `/fleet` rozdziela niezależne podzadania między subagentów i uruchamia je równolegle.
- `/worktree` tworzy osobne worktree Gita na odrębne zadanie.
- `/delegate` wysyła zadanie do agenta Copilota w chmurze, który pracuje w tle i może otworzyć pull requesta.

Nie są częścią warsztatu, bo tworzą dodatkowe gałęzie albo pracę po stronie GitHuba. Jeśli chcesz je wypróbować, zacznij od małego, dobrze opisanego zadania. Więcej o pracy z agentem w chmurze znajdziesz w [osobnym warsztacie][cloud-workshop] (po angielsku).

## Podsumowanie i co dalej

Pełną listę komend zobaczysz zawsze przez `/help`. Na koniec [krótkie podsumowanie warsztatu][next-lesson] i kilka pomysłów, co dalej.

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
