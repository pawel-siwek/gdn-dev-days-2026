---
title: "Lekcja 7 — Własny agent QA"
description: "Stwórz własnego agenta QA, który łączy wymagania ze zgłoszenia, skill quality-checks i Playwright MCP."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Masz już skill `quality-checks` do automatycznych kontroli i Playwright MCP do sprawdzania strony w przeglądarce. Teraz połączysz je w jednym własnym agencie z jasno zdefiniowanym procesem QA.

W tej lekcji:

- zobaczysz, jak własny agent współpracuje z instrukcjami, skillami i narzędziami MCP,
- stworzysz i przejrzysz profil kontroli jakości wielokrotnego użytku,
- wybierzesz agenta QA i przeanalizujesz jego ustalenia w odniesieniu do zgłoszenia o filtrowaniu.

## Scenariusz

Zespół Tailspin Toys chce przed każdym pull requestem (PR) dostawać ten sam, powtarzalny przegląd: wymagania, jakość kodu, wyniki kontroli, pokrycie testami i zachowanie w przeglądarce. Własny agent może ten przegląd poprowadzić.

## Czym jest własny agent?

Własny agent to wyspecjalizowana wersja Copilota opisana w pliku Markdown: po co jest, jak ma działać i z jakich narzędzi korzystać. Zdefiniujesz rolę QA w `.github/agents/qa.agent.md` i wybierzesz ją w Copilot CLI.

Każde z dostosowań, których używałeś, robi co innego. Instrukcje repozytorium opisują standardy zespołu. Skill `quality-checks` pakuje powtarzalne kontrole. Playwright MCP daje dostęp do przeglądarki. Profil QA mówi Copilotowi, jak użyć tego wszystkiego do oceny wymagań i zaraportowania wyników.

## Utwórz profil QA

Profil zdefiniuje zarówno kontrole, które QA ma wykonać, jak i granice, których nie może przekroczyć.

1. Wróć do swojego codespace'a i upewnij się, że rozmowa o filtrowaniu jest w trybie Interactive.
2. Poproś domyślnego agenta o utworzenie nowego agenta:

   ```plaintext
   Utwórz własnego agenta o nazwie QA w .github/agents/qa.agent.md. Ma sprawdzać funkcjonalności względem ich zgłoszeń i ustalonych wymagań, stosować się do instrukcji repozytorium, uruchamiać skill quality-checks, weryfikować zachowanie przez Playwright MCP i dodawać testy tam, gdzie brakuje pokrycia.

   Każde wymaganie ma raportować jako zaliczone, niezaliczone albo zablokowane, z dowodami. Przed zmianą kodu implementacji musi pytać, i nie może commitować zmian ani otwierać pull requestów.

   Na razie tylko utwórz profil, żebym mógł go przejrzeć.
   ```

## Przejrzyj profil

Zanim użyjesz nowego agenta, sprawdź, czy Copilot dobrze zrozumiał proces QA i jego granice. Zbyt szeroko zdefiniowany agent mógłby zacząć zmieniać kod, który miał tylko sprawdzić.

1. Wpisz `/diff` i otwórz `.github/agents/qa.agent.md`.
2. Przeczytaj frontmatter. Pole `description` jest wymagane; `name` jest opcjonalne, ale dodanie go daje agentowi czytelną nazwę wyświetlaną.
3. Przeczytaj instrukcje profilu i potwierdź, że QA wychodzi od wymagań, stosuje się do instrukcji repozytorium, uruchamia skill `quality-checks` i korzysta z Playwright MCP.
4. Potwierdź, że QA raportuje dowody na poparcie swoich ustaleń, pyta przed zmianą kodu implementacji oraz nie commituje zmian ani nie otwiera pull requestów.
5. Jeśli wygenerowany profil pomija którykolwiek z tych obowiązków albo którąkolwiek z granic, poproś domyślnego agenta o poprawkę, zanim ruszysz dalej.

## Uruchom QA na zgłoszeniu

Copilot CLI ładuje agentów projektu przy starcie rozmowy. Wznów rozmowę o filtrowaniu (`copilot --resume`) i wybierz QA. Agent skorzysta ze zgłoszenia i decyzji z planu, które są już w kontekście.

1. Włącz agenta tym poleceniem:

   ```plaintext
   /agent QA
   ```

   > ℹ️ **Uwaga**  
   > Świeżo utworzony agent może jeszcze nie być widoczny na liście w `/agent`. Komenda z nazwą i tak go aktywuje.

2. Poproś agenta QA o przegląd funkcjonalności:

   ```plaintext
   Przejrzyj filtrowanie względem zgłoszenia i decyzji z naszego planu. Czy jest gotowe do PR-a?
   ```

3. Kiedy agent skończy, przeczytaj raport.

## Podsumowanie i co dalej

Masz agenta QA, który zostaje w repozytorium na kolejne zmiany, i jego raport z przeglądu filtrowania. Na gałęzi czekają: implementacja, zmiana w skillu, profil QA i testy. W następnym kroku [złożysz to w pull requesta i użyjesz Agent Merge][next-lesson].

## Materiały

- [Tworzenie własnych agentów dla Copilot CLI][create-agents]
- [Konfiguracja własnych agentów][agent-config]

[previous-lesson]: ../6-mcp-playwright/
[next-lesson]: ../8-create-pull-request/
[create-agents]: https://docs.github.com/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
[agent-config]: https://docs.github.com/copilot/reference/custom-agents-configuration
