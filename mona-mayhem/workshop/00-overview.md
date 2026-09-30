<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# 🎮 Mayhem w Stoczni — warsztat GitHub Copilot

---

> **Czas trwania:** ~1 godzina  
> **Poziom:** średnio zaawansowany  
> **Stack:** Astro / Node.js / TypeScript

Zbudujesz retro-arcade aplikację porównującą wykresy kontrybucji z GitHuba — **Mayhem w Stoczni** — i przy okazji przejdziesz przez pełne spektrum sposobów pracy z GitHub Copilotem. Warsztat ma **dwie ścieżki**: w VS Code i w GitHub Copilot CLI.

---

## 🎯 Wybierz ścieżkę

- **Ścieżka VS Code** — zostajesz w edytorze i ćwiczysz Chat, tryb Plan, tryb agentowy, agentów w tle oraz wbudowaną pętlę review.
- **Ścieżka CLI** — zostajesz w terminalu i ćwiczysz `copilot`, kontekst przez `@file`, `/plan`, autonomiczne edycje, `/fleet`, `/delegate` i `/review`.

Na Dev Days Gdańsk idziemy **ścieżką CLI** — ale jeśli wolisz pracować w edytorze, przełącznik u góry strony przestawi całą instrukcję na VS Code.

---

## 📋 Szybka lista kontrolna

Zanim zaczniesz, sprawdź:

- [ ] GitHub Copilot jest włączony na Twoim koncie
- [ ] Node.js zainstalowany
- [ ] Git zainstalowany i skonfigurowany
- [ ] Przeglądarka i terminal gotowe do pracy

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (bez oczekujących aktualizacji)
- [ ] Zalogowany w rozszerzeniu **GitHub Copilot**
- [ ] Panel Chat otwarty, agent gotowy
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI zainstalowany i dostępny jako `copilot`
- [ ] Zalogowany w CLI przez `/login`
- [ ] Swobodnie posługujesz się komendami `/help`, `/plan` i `/review`
<!-- track:cli:end -->

> 💡 **Wskazówka:** jeśli chcesz szybko wystartować w VS Code, użyj gotowego DevContainera.

---

## 🧠 Czego się nauczysz

| # | Umiejętność | Opis |
|---|-------------|------|
| 1 | **Inżynieria kontekstu** | Nauczysz Copilota swojego repozytorium — instrukcjami, odwołaniami i jasnymi ograniczeniami |
| 2 | **Najpierw plan** | Zaprojektujesz architekturę przed implementacją |
| 3 | **Implementacja agentowa** | Pozwolisz Copilotowi prowadzić wieloetapową pracę pod Twoim nadzorem |
| 4 | **Iteracyjny design** | Użyjesz Copilota do przebudowy warstwy wizualnej i dopracowania interakcji |
| 5 | **Praca równoległa** | Rozbijesz zadania na agentów, sesje albo delegowane taski |

<!-- track:vscode:start -->
### Na czym skupiamy się w VS Code

- **Chat + tryb Ask** do eksploracji
- **Tryb Plan** do promptów o architekturę i design
- **Tryb agentowy** do implementacji w wielu plikach
- **Agenci w tle i w chmurze** do równoległych szlifów
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Na czym skupiamy się w Copilot CLI

- **Interaktywne sesje** z `copilot`
- **`/plan` i Shift+Tab** do uporządkowanego planowania
- **Autonomiczne edycje** z zatwierdzaniem w locie i `/diff`
- **`/fleet`, `/delegate` i `/review`** do zrównoleglania i kontroli jakości
<!-- track:cli:end -->

---

## 📚 Części laboratorium

| Część | Tytuł | Opis |
|-------|-------|------|
| [**01**](01-setup.md) | Setup i inżynieria kontekstu | Zakładasz repo, przygotowujesz środowisko i dajesz Copilotowi właściwy kontekst |
| [**02**](02-plan-and-scaffold.md) | Plan i szkielet projektu | Projektujesz API i architekturę strony, zanim cokolwiek zaimplementujesz |
| [**03**](03-agent-mode.md) | Budowa gry | Składasz stronę pojedynku i wykresy kontrybucji z pomocą agenta |
| [**04**](04-design-vibes.md) | Motyw wizualny — design first | Zamieniasz szkielet w retro-arcade doświadczenie w klimacie gdańskiej stoczni |
| [**05**](05-polish.md) | Szlify i praca równoległa | Poprawiasz UX, odporność i jakość, pracując wieloagentowo |
| [**06**](06-bonus.md) | Bonus i rozszerzenia | Otwarte wyzwania, dzielenie się efektem i dodatkowe eksperymenty |

---

## 💡 Rady praktyczne

1. **Trzymaj otwartą przeglądarkę** — obserwuj zmiany na żywo w trakcie kodowania.
2. **Commituj często** — zapisuj czyste punkty kontrolne między iteracjami.
3. **Dopracuj plan przed implementacją** — lepszy plan to lepszy wynik.
4. **Przeglądaj zmiany Copilota** — korzystaj z widoku diff albo narzędzi review w CLI zamiast akceptować w ciemno.

<!-- track:vscode:start -->
5. **Korzystaj z checkpointów i Undo** w czacie, jeśli iteracja pójdzie w złą stronę.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Korzystaj z `/session`, `/context` i `/share file`**, kiedy chcesz podejrzeć albo zachować swoją pracę.
<!-- track:cli:end -->
