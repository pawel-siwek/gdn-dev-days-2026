---
title: "Lekcja 0 — Wymagania wstępne"
description: "Utwórz własną kopię Tailspin Toys i przygotuj GitHub Codespace do warsztatu z Copilot CLI."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Zanim zaczniesz lekcje z Copilot CLI, przygotujesz sobie środowisko: utworzysz własną kopię repozytorium Tailspin Toys i postawisz [codespace][codespaces]. W jego terminalu zainstalujesz i uruchomisz Copilot CLI w następnej lekcji.

W tej lekcji:

- utworzysz własną kopię projektu Tailspin Toys z szablonu,
- utworzysz codespace i potwierdzisz, że projekt jest gotowy.

## Przygotuj repozytorium warsztatowe

Będziesz pracować na własnej kopii projektu Tailspin Toys. Utwórz ją teraz z [repozytorium szablonowego][tailspin-template].

1. W nowym oknie przeglądarki otwórz [szablon Tailspin Toys][tailspin-template].
2. Utwórz własną kopię repozytorium: wybierz **Use this template**, a następnie **Create a new repository**.
3. Jeśli robisz warsztat w ramach wydarzenia, trzymaj się wskazówek prowadzących. W innym przypadku utwórz repozytorium tam, gdzie masz dostęp do GitHub Copilota.
4. Zanotuj ścieżkę utworzonego repozytorium (`nazwa-organizacji-lub-użytkownika/nazwa-repozytorium`) — będziesz się do niej odwoływać w dalszej części warsztatu.

> ℹ️ **Uwaga**  
> Po utworzeniu repozytorium z szablonu backlog zgłoszeń powstaje automatycznie, po chwili pojawi się w zakładce **Issues**. Będziesz z niego korzystać przez cały warsztat, nie musisz niczego zakładać.

Nowe repozytorium zawiera wszystko, czego potrzebujesz: instrukcje repozytorium, kod aplikacji, testy, skill `quality-checks` i backlog.

## Utwórz codespace

Warsztat wykonasz w codespace.

[GitHub Codespaces][codespaces] to środowisko deweloperskie w chmurze, w którym piszesz, uruchamiasz i debugujesz kod bezpośrednio w przeglądarce. Dostajesz pełnoprawny edytor ze wsparciem dla wielu języków, rozszerzeń i narzędzi.

1. Przejdź do nowo utworzonego repozytorium.
2. Wybierz **Code**.
3. Przejdź na zakładkę **Codespaces** i wybierz **Create codespace on main**.
4. Poczekaj, aż codespace się przygotuje. Szablon sam instaluje zależności projektu, Playwright Chromium oraz lokalną bazę danych.
5. Jeśli pojawi się pytanie **Do you trust the authors of the files in this folder?**, wybierz **Trust Folder & Continue**.
6. Otwórz terminal w katalogu głównym repozytorium i uruchom aplikację:

   ```bash
   npm run dev
   ```

7. Kiedy Codespaces zgłosi, że port `4321` jest dostępny, wybierz **Open in Browser** i sprawdź, czy strona Tailspin Toys się ładuje.
8. Wróć do terminala i zatrzymaj serwer deweloperski przez <kbd>Ctrl</kbd>+<kbd>C</kbd>.

## Podsumowanie i co dalej

Masz własną kopię Tailspin Toys i działający codespace. W następnym kroku [zainstalujesz GitHub Copilot CLI][next-lesson] w swoim codespace i zalogujesz się na swoje konto GitHub.

## Materiały

- [GitHub Codespaces — przegląd][codespaces]
- [Tworzenie repozytorium z szablonu][template-repository]
- [Pierwsze kroki z Codespaces][codespaces-quickstart]

[tailspin-template]: https://github.com/pawel-siwek/tailspin-toys
[template-repository]: https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-template-repository
[codespaces-quickstart]: https://docs.github.com/codespaces/getting-started/quickstart
[next-lesson]: ../1-install-copilot-cli/
[codespaces]: https://github.com/features/codespaces
