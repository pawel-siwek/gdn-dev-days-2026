<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# Część 1: Setup i inżynieria kontekstu

---

W tej części skonfigurujesz środowisko **i** nauczysz Copilota Twojego repozytorium — tak, żeby każdy kolejny prompt startował z właściwym kontekstem.

## Sekcja 1: Konfiguracja początkowa

### Krok 1: Załóż własne repozytorium

1. Otwórz [github.com/pawel-siwek/mona-mayhem-starter](https://github.com/pawel-siwek/mona-mayhem-starter)
2. Utwórz własne repozytorium, klikając **Use this template** → **Create a new repository**
3. Nazwij je `moj-mayhem` i ustaw widoczność na **Public**

> 💡 To jest zamrożona kopia projektu przygotowana na Dev Days Gdańsk 2026 — dzięki temu wszyscy startujemy z identycznego kodu.

<!-- track:vscode:start -->
### Krok 2: Wybierz środowisko pracy

#### Opcja A: lokalny VS Code

1. Otwórz VS Code i uruchom **Git: Clone** → **Clone from GitHub**
2. Wybierz swoje repozytorium `moj-mayhem`
3. Gdy pojawi się pytanie, zainstaluj **rekomendowane rozszerzenia**

#### Opcja B: GitHub Codespaces

1. Otwórz swoje repozytorium na GitHubie
2. Kliknij **Code** → **Codespaces** → **Create codespace on main**
3. Poczekaj, aż środowisko wstanie i zainstalują się zależności

### Krok 3: Zainstaluj zależności i uruchom aplikację

1. Otwórz wbudowany terminal w swoim repozytorium.
2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Uruchom aplikację:

   ```bash
   npm run dev
   ```

> ✅ **Aplikacja działa w Twojej przeglądarce!**
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Krok 2: Zainstaluj GitHub Copilot CLI

Wybierz sposób instalacji pasujący do Twojej maszyny:

- **npm (wieloplatformowo, wymaga Node.js 22+)**

  ```bash
  npm install -g @github/copilot
  ```

- **Homebrew (macOS/Linux)**

  ```bash
  brew install copilot-cli
  ```

- **WinGet (Windows)**

  ```bash
  winget install GitHub.Copilot
  ```

### Krok 3: Uruchom aplikację i zaloguj się w CLI

1. Sklonuj repozytorium lokalnie i otwórz terminal w katalogu głównym projektu.
2. Zainstaluj zależności i uruchom aplikację:

   ```bash
   npm install
   npm run dev
   ```

3. Otwórz **drugi terminal** w tym samym repozytorium i uruchom Copilot CLI:

   ```bash
   copilot
   ```

4. W sesji interaktywnej wpisz:

   ```
   /login
   ```

5. Przejdź przez logowanie device flow, a potem potwierdź zaufanie do repozytorium, kiedy CLI o to poprosi.

> ✅ **Masz teraz podgląd aplikacji w jednym terminalu i gotowe Copilot CLI w drugim.**
<!-- track:cli:end -->

## Sekcja 2: Inżynieria kontekstu

Inżynieria kontekstu to sposób, w jaki uczysz AI swojego repozytorium. Im lepszy kontekst, tym lepsza każda kolejna odpowiedź.

<!-- track:vscode:start -->
### Zadanie 1: Wygeneruj instrukcje projektu przez /init

Użyjemy wbudowanej komendy `/init`, żeby wygenerować plik z instrukcjami dla Copilota:

1. Otwórz **Copilot Chat** i wpisz:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Przejrzyj wygenerowany plik — Copilot przeanalizuje projekt i utworzy `.github/copilot-instructions.md`.
3. Zaakceptuj zmiany, a potem **zacommituj** plik z instrukcjami.

> **Efekt:** każde kolejne zapytanie do Copilota ma już wbudowaną mapę Twojego projektu.

### Zadanie 2: Agenci w tle

**Lokalny agent w tle:**

1. W panelu Chat kliknij **+**, żeby otworzyć nowy czat
2. Na dole okna przestaw **Local** na **Copilot CLI**
3. Wpisz prompt:

   > „Dodaj reguły lintowania dla nieużywanych zmiennych i popraw styl kodu; napraw wszystkie błędy"

4. Kiedy skończy, użyj **Review and Apply**, a potem w razie potrzeby zarchiwizuj sesję.

**Agent w chmurze:**

1. W panelu Chat kliknij **+**, żeby otworzyć nowy czat
2. Na dole okna przestaw **Local** na **Cloud**

   > „Przerób README tak, żeby czytało się jak atrakcyjna strona projektu"

> **Efekt:** reguły lintowania dodane, błędy naprawione, README lepsze — i to bez wychodzenia z edytora.

### Zadanie 3: Poznaj projekt

Otwórz **Copilot Chat** w **trybie Ask** i wypróbuj te prompty:

- `„Wyjaśnij architekturę tego projektu"`
- `„Jakie pliki są w katalogu src i za co odpowiadają?"`
- `„Co trzeba zbudować, żeby przycisk Battle zaczął działać?"`

> 💡 Użyj **@workspace**, żeby dać Copilotowi kontekst całego projektu i dostać dokładniejsze odpowiedzi.
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Zadanie 1: Wygeneruj instrukcje repozytorium przez /init

Użyjemy `/init`, żeby wygenerować plik z instrukcjami dla Copilota:

1. W Copilot CLI wpisz:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Przejrzyj wygenerowany plik — Copilot przeanalizuje projekt i utworzy `.github/copilot-instructions.md`.
3. Zacommituj plik z instrukcjami.

> **Efekt:** kolejne sesje CLI automatycznie dziedziczą instrukcje specyficzne dla repozytorium z `.github/copilot-instructions.md`.

### Zadanie 2: Dostrój swoje środowisko CLI

Poćwicz mechanizmy CLI, które ułatwią Ci kolejne kroki:

1. Uruchom `/help`, żeby przejrzeć dostępne komendy slash.
2. Użyj `/model`, żeby sprawdzić, jakie modele masz do dyspozycji.
3. Jeśli podczas eksperymentów Copilot nazbierał zbyt wiele zgód, zresetuj je:

   ```
   /reset-allowed-tools
   ```

4. Jeśli Twoje repozytorium leży wewnątrz większego katalogu nadrzędnego, użyj `/add-dir ŚCIEŻKA`, żeby świadomie poszerzyć dozwolony obszar pracy.

> 💡 Dokumentacja CLI zaleca zwięzłe własne instrukcje plus jawne uprawnienia do narzędzi — dzięki temu Copilot pozostaje szybki i przewidywalny.

### Zadanie 3: Poznaj projekt z terminala

Wypróbuj te prompty w Copilot CLI:

- `Daj mi przegląd tego projektu.`
- `@src/pages/api/contributions/[username].ts Do czego służy ten plik i co trzeba tu dobudować?`
- `@src/pages/index.astro Co tu już jest i co musiałbym dodać, żeby zbudować stronę pojedynku?`

Jeśli chcesz szybką odpowiedź jednorazową, poza sesją interaktywną, spróbuj:

```bash
copilot -p "Podsumuj architekturę tego repozytorium w 5 punktach"
```

> **Efekt:** masz już instrukcje, orientację w komendach i wyczucie, jak podawać pliki do kontekstu Copilot CLI.
<!-- track:cli:end -->

## ✅ Część 1 zaliczona

Nauczyłeś się:

- **Konfigurować** repozytorium i lokalne środowisko pracy
- **Generować instrukcje** przez `/init`, żeby Copilot rozumiał Twój projekt i kierunek, w którym idziesz
- **Wyrabiać nawyk review** przed zastosowaniem wygenerowanych zmian
- **Zwiedzać repozytorium** promptami bogatymi w kontekst
