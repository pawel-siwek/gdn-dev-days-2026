---
title: "Lekcja 7 — Własny agent QA"
description: "Stwórz własnego agenta QA, który łączy wymagania ze zgłoszenia, skill quality-checks i Playwright MCP."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Użyłeś już skilla `quality-checks` do uruchomienia automatycznych kontroli i Playwright MCP do obejrzenia filtrowania w przeglądarce. Teraz połączysz te możliwości w jednym własnym agencie z jasno zdefiniowanym procesem QA.

W tej lekcji:

- zobaczysz, jak własny agent współpracuje z instrukcjami, skillami i narzędziami MCP,
- stworzysz i przejrzysz profil kontroli jakości wielokrotnego użytku,
- wybierzesz agenta QA i przeanalizujesz jego ustalenia w odniesieniu do zgłoszenia o filtrowaniu.

## Scenariusz

Tailspin Toys chce mieć spójny przegląd wymagań, jakości kodu, automatycznych kontroli, pokrycia testami i zachowania w przeglądarce — jeszcze przed otwarciem pull requesta (PR). Własny agent może skoordynować ten proces QA i dostarczyć powtarzalny raport.

## Czym jest własny agent?

Własny agent to wyspecjalizowana wersja Copilota zdefiniowana w profilu w Markdownie. Profil opisuje przeznaczenie agenta, jego instrukcje i dostępne narzędzia. Na potrzeby warsztatu zdefiniujesz rolę QA w `.github/agents/qa.agent.md` i wybierzesz ją w Copilot CLI.

Dostosowania, z których korzystałeś, mają różne zadania. Instrukcje repozytorium opisują standardy zespołu. Skill `quality-checks` pakuje powtarzalne kontrole. Playwright MCP dostarcza narzędzia przeglądarkowe. Profil QA mówi Copilotowi, jak użyć tych możliwości do oceny wymagań i zaraportowania ustaleń. Nie zastępuje ich ani nie wymaga osobnej rozmowy.

## Utwórz profil QA

Zanim otworzysz pull requesta z funkcjonalnością, poprosisz Copilota o stworzenie profilu QA wielokrotnego użytku. Profil zdefiniuje zarówno kontrole wykonywane przez QA, jak i granice, których agent musi przestrzegać.

1. Wróć do swojego codespace'a i upewnij się, że rozmowa o filtrowaniu jest w trybie Interactive.
2. Poproś domyślnego agenta o utworzenie nowego agenta:

   ```plaintext
   Create a custom agent named QA in .github/agents/qa.agent.md. It should check features against their issues and agreed requirements, follow the repository instructions, run the quality-checks skill, use Playwright MCP to verify behavior, and add tests when coverage is missing.

   Have it report each requirement as pass, fail, or blocked with supporting evidence. It must ask before changing implementation code, and it must not commit changes or open pull requests.

   Just create the profile for now so I can review it.
   ```

## Przejrzyj profil

Zanim użyjesz nowego agenta, przejrzyj jego profil i potwierdź, że Copilot uchwycił zamierzony proces QA oraz jego granice. Zapobiegnie to sytuacji, w której niekompletny albo zbyt szeroko zdefiniowany agent zacznie zmieniać funkcjonalność, którą chciałeś tylko zweryfikować.

1. Wpisz `/diff` i otwórz `.github/agents/qa.agent.md`.
2. Przeczytaj frontmatter. Pole `description` jest wymagane; `name` jest opcjonalne, ale dodanie go daje agentowi czytelną nazwę wyświetlaną.
3. Przeczytaj instrukcje profilu i potwierdź, że QA wychodzi od wymagań, stosuje się do instrukcji repozytorium, uruchamia skill `quality-checks` i korzysta z Playwright MCP.
4. Potwierdź, że QA raportuje dowody na poparcie swoich ustaleń, pyta przed zmianą kodu implementacji oraz nie commituje zmian ani nie otwiera pull requestów.
5. Jeśli wygenerowany profil pomija którykolwiek z tych obowiązków albo którąkolwiek z granic, poproś domyślnego agenta o poprawkę, zanim ruszysz dalej.

## Uruchom QA na zgłoszeniu

Copilot CLI ładuje agentów projektu przy starcie rozmowy. Wznów tę samą rozmowę o filtrowaniu po utworzeniu profilu, a potem wybierz QA, żeby mógł skorzystać ze zgłoszenia i decyzji projektowych, które są już w kontekście.

1. Włącz agenta tym poleceniem:

   ```plaintext
   /agent QA
   ```

   > ℹ️ **Uwaga**  
   > Ponieważ agent został dopiero co utworzony, może nie pojawiać się jeszcze na liście dostępnych agentów. Jest tam — powyższa komenda go aktywuje.

2. Poproś agenta QA o przegląd funkcjonalności:

   ```plaintext
   Review the filtering feature against the issue and the decisions in our plan. Is it ready for a PR?
   ```

3. Agent QA bierze się do pracy.
4. Kiedy skończy, przeczytaj raport, który przygotował.

## Podsumowanie i co dalej

Dodałeś do procesu wyspecjalizowaną rolę wielokrotnego użytku i przejrzałeś jej pracę. W tej lekcji:

- zobaczyłeś, jak własny agent współpracuje z instrukcjami, skillami i narzędziami MCP,
- stworzyłeś i przejrzałeś profil kontroli jakości wielokrotnego użytku,
- wybrałeś agenta QA i przeanalizowałeś jego ustalenia w odniesieniu do zgłoszenia o filtrowaniu.

Masz teraz gotowe do przeglądu: implementację, zmianę w skillu, profil QA, testy i raport weryfikacyjny. W następnym kroku [złożysz to w pull requesta i użyjesz Agent Merge][next-lesson].

## Materiały

- [Tworzenie własnych agentów dla Copilot CLI][create-agents]
- [Konfiguracja własnych agentów][agent-config]

[previous-lesson]: ../6-mcp-playwright/
[next-lesson]: ../8-create-pull-request/
[create-agents]: https://docs.github.com/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
[agent-config]: https://docs.github.com/copilot/reference/custom-agents-configuration
