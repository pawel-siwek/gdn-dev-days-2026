---
title: "Lekcja 6 — Weryfikacja przez Playwright MCP"
description: "Skonfiguruj Playwright MCP w Copilot CLI i użyj go do sprawdzenia filtrowania w przeglądarce."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Copilot CLI ma wbudowany zestaw narzędzi, ale czasem potrzeba czegoś więcej: dostępu do zewnętrznej usługi, bazy danych albo, jak tutaj, przeglądarki. Od tego są serwery MCP.

W tej lekcji:

- dowiesz się, czym jest Model Context Protocol (MCP) i jak Copilot CLI z niego korzysta,
- dodasz serwer Playwright MCP, jeśli nie jest jeszcze dostępny,
- poprosisz agenta, żeby sterował przeglądarką i sprawdził Twoje filtrowanie.

## Scenariusz

Testy jednostkowe i end-to-end to jedno, ale zmianę w interfejsie najlepiej sprawdzić, klikając w interfejs. W poprzedniej lekcji robiłeś to sam. Teraz zrobi to Copilot.

## Czym jest Model Context Protocol (MCP)?

[Model Context Protocol (MCP)][mcp-blog-post] to standard, przez który agent AI łączy się z zewnętrznymi narzędziami i usługami. Każdy serwer MCP udostępnia agentowi inny zestaw narzędzi. Dwa popularne to:

- **[GitHub MCP Server][github-mcp]**: daje dostęp do API zarządzania repozytoriami, zgłoszeniami i pull requestami na GitHubie.
- **[Playwright MCP Server][playwright-mcp-server]**: daje możliwość automatyzacji przeglądarki przez Playwrighta.

Innych serwerów są setki. GitHub prowadzi [rejestr MCP][mcp-registry], w którym można ich szukać.

> 🚨 **Uważaj**  
> Traktuj serwery MCP tak jak każdą inną zależność w projekcie. Zanim użyjesz któregoś, przejrzyj jego kod źródłowy, zweryfikuj wydawcę i rozważ konsekwencje dla bezpieczeństwa.

## Dodaj serwer Playwright MCP

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

1. Zleć Copilotowi weryfikację przez Playwright MCP:

   ```plaintext
   Uruchom aplikację i sprawdź przez Playwright MCP, czy filtrowanie działa zgodnie ze zgłoszeniem i naszym planem. Powiedz mi, co działa, a co nie, bez wprowadzania zmian. Na koniec zatrzymaj serwer, który uruchomiłeś.
   ```

   > ℹ️ **Uwaga**  
   > Copilot zwykle sam zorientuje się, że ma użyć serwera MCP. Ale skoro wiesz, czego ma użyć, warto mu to powiedzieć: wyniki będą bardziej powtarzalne i zaoszczędzisz trochę tokenów.

2. Obserwuj, jak Copilot wypisuje kolejne kroki wykonywane w przeglądarce.
3. Przeczytaj raport końcowy.

## Podsumowanie i co dalej

Copilot sprawdził Twoje filtrowanie w prawdziwej przeglądarce, przez serwer Playwright MCP. W następnym kroku [stworzysz własnego agenta QA][next-lesson], który połączy skill i narzędzia przeglądarkowe w jednej, wyspecjalizowanej roli.

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
