---
title: "Lekcja 4 — Sterowanie Copilotem przez własne instrukcje"
description: "Poznaj instrukcje repozytorium, dodaj standard dokumentowania kodu i zastosuj go do kodu filtrowania."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

Jeśli Copilot ma zrobić coś w konkretny sposób, musi o tym wiedzieć. Od tego są [pliki instrukcji][instruction-files]: opisują nie tylko *jaki* kod chcesz, ale też *jak* ma być napisany. Filtrowanie już masz, więc teraz zajrzysz do instrukcji, z których Copilot korzystał, dodasz standard dokumentowania i zastosujesz go do swojego kodu.

W tej lekcji:

- zobaczysz, jak instrukcje repozytorium i instrukcje przypisane do ścieżek trafiają do agenta,
- zaktualizujesz plik instrukcji, żeby wymusić przestrzeganie standardów kodowania,
- zobaczysz wpływ plików instrukcji na generowany kod.

## Scenariusz

Zespół Tailspin Toys ma swoje zasady pisania kodu. Między innymi:

- Komentarze powinny wyjaśniać intencję i nieoczywiste decyzje, a nie powtarzać to, co widać w kodzie.
- Eksportowane funkcje w `db/` i `src/lib/` powinny dokumentować swoje przeznaczenie, parametry i wartości zwracane w TSDoc/JSDoc, wraz z wstrzykiwanym argumentem `db`, jeśli występuje.
- Komponenty Astro wielokrotnego użytku powinny dokumentować swoje kontrakty `Props`, a komentarze powinny pozostawać aktualne, kiedy zmienia się powiązany kod.
- Istniejące wytyczne dotyczące formatowania i lintowania powinny zostać zachowane.

Pliki instrukcji sprawią, że Copilot będzie te zasady znał i stosował.

## Pliki instrukcji

W instrukcjach opisujesz konwencje, biblioteki, styl komentarzy, czyli wszystko, co Copilot powinien wiedzieć o projekcie, zanim zacznie pisać kod. Są dwa rodzaje plików:

- `.github/copilot-instructions.md` — pojedynczy plik wysyłany do Copilota przy **każdym** zapytaniu w tym repozytorium. Powinien zawierać informacje o projekcie istotne dla większości zapytań.
- `.github/instructions/*.instructions.md` — pliki z wytycznymi dla konkretnych języków, typów plików albo zadań.

> ℹ️ **Uwaga**  
> Inne formaty instrukcji i zakres ich wsparcia różnią się w zależności od środowiska. Zanim oprzesz się na konkretnym formacie, sprawdź [dokumentację wsparcia dla własnych instrukcji][custom-instructions-support].

## Poznaj pliki instrukcji w tym projekcie

Projekt ma już zestaw plików instrukcji. Zanim cokolwiek zmienisz, zobacz, co w nich jest.

1. Wróć do swojego codespace'a.
2. W edytorze Codespaces (nie w terminalu) otwórz `.github/copilot-instructions.md`.
3. Przejrzyj plik, zwracając uwagę na krótki opis projektu i wytyczne dotyczące kodu. Te instrukcje dotyczą każdej interakcji z Copilotem w tym repozytorium.
4. Otwórz katalog `.github/instructions` i przejrzyj pliki. Zauważ, że są tam instrukcje dla plików Astro, warstwy danych Drizzle, testów i innych obszarów.
5. Otwórz `.github/instructions/unit-tests.instructions.md`. Zwróć uwagę na pole `applyTo` na górze — ustawia glob decydujący o tym, których plików dotyczą te instrukcje.
6. Otwórz `.github/instructions/drizzle.instructions.md` i zwróć uwagę na odwołania do innych plików instrukcji i do istniejących plików projektu. Dzięki temu możesz rozbijać większe zestawy instrukcji na mniejsze pliki wielokrotnego użytku i wskazywać Copilotowi przykłady do naśladowania.

## Zaktualizuj instrukcje zgodnie z wytycznymi zespołu

Istniejące pliki to dobry początek, ale brakuje w nich jednej rzeczy: wymogu komentarzy TSDoc w nowym kodzie TypeScript. Dopiszesz go do głównego pliku `copilot-instructions.md`.

1. W `.github/copilot-instructions.md` znajdź sekcję **Wymagania formatowania kodu**, mniej więcej w okolicach linii 35.
2. Dodaj poniższy wpis jako jej ostatni punkt:

   ```markdown
   - Każdy nowy kod TypeScript ma zawierać komentarze TSDoc dokumentujące funkcje i typy.
   ```

Plik zapisze się automatycznie.

## Zastosuj nowe wytyczne

Copilot CLI wczytuje instrukcje przy starcie rozmowy. Wznów rozmowę o filtrowaniu (`copilot --resume`), żeby załadować nowe wytyczne bez utraty kontekstu.

1. Poproś Copilota o zastosowanie zaktualizowanych wytycznych:

   ```plaintext
   Właśnie zaktualizowaliśmy instrukcje i wytyczne dotyczące kodu. Zaktualizuj wygenerowany przez siebie kod, żeby był z nimi zgodny.
   ```

2. Wpisz `/diff` i przejrzyj zmienione pliki TypeScript. Zwróć uwagę na nowo wygenerowane komentarze TSDoc i sprawdź, czy rzetelnie opisują kod.

## Podsumowanie i co dalej

Wiesz już, skąd Copilot bierze zasady projektu, i dopisałeś do nich własną. W następnym kroku [dostosujesz i uruchomisz skill quality-checks][next-lesson], żeby lintowanie i testy uruchamiały się w powtarzalny sposób.

## Materiały

- [Dodawanie własnych instrukcji do Copilot CLI][instruction-files]
- [Wsparcie dla własnych instrukcji][custom-instructions-support]
- [Dobre praktyki tworzenia własnych instrukcji][instructions-best-practices]
- [Awesome Copilot — zbiór plików instrukcji i innych materiałów][awesome-copilot]

[instruction-files]: https://docs.github.com/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
[instructions-best-practices]: https://docs.github.com/copilot/concepts/prompting/response-customization#writing-effective-custom-instructions
[awesome-copilot]: https://awesome-copilot.github.com/
[custom-instructions-support]: https://docs.github.com/copilot/reference/custom-instructions-support
[previous-lesson]: ../3-agent-modes/
[next-lesson]: ../5-agent-skills/
