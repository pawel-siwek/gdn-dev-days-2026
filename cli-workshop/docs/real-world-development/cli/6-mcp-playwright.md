---
title: "Lekcja 6 — Weryfikacja przez Playwright MCP"
description: "Skonfiguruj Playwright MCP w Copilot CLI i użyj go do sprawdzenia filtrowania w przeglądarce."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Jak już wspominaliśmy, pisanie kodu to nie wszystko. Musimy pracować z danymi, usługami zewnętrznymi, a nawet udostępniać Copilotowi dodatkowe automatyzacje. Tu do gry wchodzą serwery MCP. Pozwalają one Copilotowi wyjść poza to, co jest wbudowane w CLI, dając mu jeszcze więcej narzędzi i usług.

W tej lekcji:

- dowiesz się, czym jest Model Context Protocol (MCP) i jak Copilot CLI z niego korzysta,
- dodasz serwer Playwright MCP, jeśli nie jest jeszcze dostępny,
- poprosisz agenta, żeby sterował przeglądarką i sprawdził Twoje filtrowanie.

## Scenariusz

Testy jednostkowe i end-to-end są ważne, ale weryfikacja zmian w interfejsie wymaga faktycznej interakcji z tym interfejsem. Chcesz pozwolić Copilotowi korzystać ze strony tak, jak robiłby to użytkownik — żeby jeszcze bardziej zautomatyzować proces wprowadzania zmian i mieć większą pewność, że działają zgodnie z oczekiwaniami.

## Czym jest Model Context Protocol (MCP)?

[Model Context Protocol (MCP)][mcp-blog-post] daje agentom AI sposób komunikacji z zewnętrznymi narzędziami i usługami. Dzięki MCP agenci mogą rozmawiać z nimi w czasie rzeczywistym. Pozwala im to sięgać po aktualne informacje i wykonywać działania w Twoim imieniu.

Dostęp do tych narzędzi i zasobów odbywa się przez serwer MCP, który działa jak most między agentem AI a zewnętrznymi narzędziami i usługami. Każdy serwer MCP reprezentuje inny zestaw narzędzi i zasobów, po które agent może sięgnąć.

Dwa popularne serwery MCP to:

- **[GitHub MCP Server][github-mcp]**: daje dostęp do API zarządzania repozytoriami, zgłoszeniami i pull requestami na GitHubie.
- **[Playwright MCP Server][playwright-mcp-server]**: daje możliwość automatyzacji przeglądarki przez Playwrighta.

Dostępnych jest wiele innych serwerów MCP. GitHub prowadzi [rejestr MCP][mcp-registry], który ułatwia ich znajdowanie i rozwój całego ekosystemu.

> 🚨 **Uważaj**  
> Traktuj serwery MCP tak jak każdą inną zależność w projekcie. Zanim użyjesz któregoś, przejrzyj jego kod źródłowy, zweryfikuj wydawcę i rozważ konsekwencje dla bezpieczeństwa.

## Dodaj serwer Playwright MCP

Dodajmy serwer Playwright MCP, żeby Copilot mógł korzystać ze strony tak jak użytkownik.

1. Wróć do swojego codespace'a.
2. Otwórz okno dodawania serwera MCP, wpisując w Copilot CLI:

   ```plaintext
   /mcp add
   ```

3. Jako nazwę wpisz `playwright`, a potem naciśnij <kbd>Tab</kbd>.
4. Potwierdź typ serwera **STDIO**, naciskając <kbd>Enter</kbd>, a potem <kbd>Tab</kbd>.
5. Wklej poniższą komendę w polu **Command**:

   ```plaintext
   npx -y @playwright/mcp@latest --headless --no-sandbox
   ```

6. Naciśnij <kbd>Control</kbd>+<kbd>S</kbd> (Mac) albo <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux), żeby zapisać nowy serwer MCP.
7. Naciśnij <kbd>Esc</kbd>, żeby wyjść z okna MCP.

## Poproś Copilota o sprawdzenie funkcjonalności przez Playwrighta

Wcześniej ręcznie potwierdziłeś, że funkcjonalność działa jak trzeba. Teraz niech zrobi to Copilot — przy pomocy serwera Playwright, który właśnie dodałeś.

1. Użyj tego promptu, żeby polecić Copilotowi weryfikację przez Playwright MCP:

   ```plaintext
   Start the app and use Playwright MCP to check filtering against the issue and our plan. Tell me what works and what doesn't, without making changes. Stop the server you started when you're done.
   ```

   > ℹ️ **Uwaga**  
   > W praktyce nie musisz mówić Copilotowi, żeby użył serwera MCP — zwykle zorientuje się sam. Ale skoro wiesz, czego powinien użyć, nigdy nie zaszkodzi go naprowadzić. Wyniki będą bardziej powtarzalne, a przy okazji oszczędzisz trochę tokenów.

2. Obserwuj, jak Copilot wypisuje kolejne kroki wykonywane w przeglądarce, żeby potwierdzić działanie funkcjonalności.
3. Przeczytaj raport i upewnij się, że wszystko zachowuje się zgodnie z oczekiwaniami.

Copilot uruchomi serwer, użyje Playwrighta do interakcji ze stroną, zatrzyma serwer i przedstawi Ci raport.

## Podsumowanie i co dalej

Gratulacje — użyłeś serwera Playwright MCP, żeby z poziomu Copilot CLI sprawdzić swoją funkcjonalność w prawdziwej przeglądarce. Podsumowując:

- dowiedziałeś się, czym jest Model Context Protocol (MCP) i jak Copilot CLI z niego korzysta,
- dodałeś serwer Playwright MCP,
- poprosiłeś agenta, żeby sterował przeglądarką i sprawdził Twoje filtrowanie.

W następnym kroku [stworzysz własnego agenta QA][next-lesson], który połączy skill i narzędzia przeglądarkowe w jednej, wyspecjalizowanej roli.

## Materiały

- [What the heck is MCP and why is everyone talking about it?][mcp-blog-post]
- [Microsoft Playwright MCP Server][playwright-mcp-server]
- [Dodawanie serwerów MCP do Copilot CLI][add-mcp]

[previous-lesson]: ../5-agent-skills/
[next-lesson]: ../7-qa-agent/
[mcp-blog-post]: https://github.blog/ai-and-ml/llms/what-the-heck-is-mcp-and-why-is-everyone-talking-about-it/
[playwright-mcp-server]: https://github.com/microsoft/playwright-mcp
[github-mcp]: https://github.com/github/github-mcp-server
[mcp-registry]: https://github.com/mcp
[add-mcp]: https://docs.github.com/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
