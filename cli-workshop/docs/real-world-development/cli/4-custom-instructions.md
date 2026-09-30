---
title: "Lekcja 4 — Sterowanie Copilotem przez własne instrukcje"
description: "Poznaj instrukcje repozytorium, dodaj standard dokumentowania kodu i zastosuj go do kodu filtrowania."
lastUpdated: 2026-09-30
---

<!-- l10n-sync: english-commit-sha="0711e76fc68c8746bc70900525025cfb3dc57734" -->

W pracy z generatywną AI kluczowy jest kontekst. Jeśli zadanie ma być wykonane w konkretny sposób, ta wskazówka musi być dostępna dla Copilota. [Pliki instrukcji][instruction-files] opisują nie tylko *jaki* kod chcesz, ale też *jak* ma być zbudowany. Filtrowanie masz już zbudowane, więc teraz poznasz instrukcje, z których Copilot korzystał, dodasz standard dokumentowania i zastosujesz go do swojego kodu.

W tej lekcji:

- zobaczysz, jak instrukcje repozytorium i instrukcje przypisane do ścieżek trafiają do agenta,
- zaktualizujesz plik instrukcji, żeby wymusić przestrzeganie standardów kodowania,
- zobaczysz wpływ plików instrukcji na generowany kod.

## Scenariusz

Jak każdy porządny zespół, Tailspin Toys ma zestaw wytycznych i wymagań dotyczących praktyk wytwórczych. Należą do nich:

- Komentarze powinny wyjaśniać intencję i nieoczywiste decyzje, a nie powtarzać to, co widać w kodzie.
- Eksportowane funkcje w `db/` i `src/lib/` powinny dokumentować swoje przeznaczenie, parametry i wartości zwracane w TSDoc/JSDoc, wraz z wstrzykiwanym argumentem `db`, jeśli występuje.
- Komponenty Astro wielokrotnego użytku powinny dokumentować swoje kontrakty `Props`, a komentarze powinny pozostawać aktualne, kiedy zmienia się powiązany kod.
- Istniejące wytyczne dotyczące formatowania i lintowania powinny zostać zachowane.

Przy pomocy plików instrukcji zadbasz o to, żeby Copilot miał właściwe informacje i wykonywał zadania zgodnie z tymi praktykami.

## Pliki instrukcji

Własne instrukcje pozwalają przekazać Copilotowi kontekst i preferencje, dzięki czemu lepiej rozumie Twój styl kodowania i wymagania. To potężny mechanizm, który pomaga sterować Copilotem w stronę trafniejszych podpowiedzi i fragmentów kodu. Możesz określić preferowane konwencje, biblioteki, a nawet rodzaje komentarzy, jakie lubisz umieszczać w kodzie. Instrukcje możesz tworzyć dla całego repozytorium albo dla konkretnych typów plików, jako kontekst zadaniowy.

Są dwa rodzaje plików instrukcji:

- `.github/copilot-instructions.md` — pojedynczy plik wysyłany do Copilota przy **każdym** zapytaniu w tym repozytorium. Powinien zawierać informacje o projekcie istotne dla większości zapytań.
- `.github/instructions/*.instructions.md` — pliki z wytycznymi dla konkretnych języków, typów plików albo zadań.

> ℹ️ **Uwaga**  
> Inne formaty instrukcji i zakres ich wsparcia różnią się w zależności od środowiska. Zanim oprzesz się na konkretnym formacie, sprawdź [dokumentację wsparcia dla własnych instrukcji][custom-instructions-support].

## Poznaj pliki instrukcji w tym projekcie

Żeby ułatwić start, zestaw plików instrukcji jest już dołączony do projektu startowego. Zanim cokolwiek zmienimy, zobaczmy, co tam jest.

1. Wróć do swojego codespace'a.
2. W edytorze Codespaces (nie w terminalu) otwórz `.github/copilot-instructions.md`.
3. Przejrzyj plik, zwracając uwagę na krótki opis projektu i wytyczne dotyczące kodu. Te instrukcje dotyczą każdej interakcji z Copilotem w tym repozytorium.
4. Otwórz katalog `.github/instructions` i przejrzyj pliki. Zauważ, że są tam instrukcje dla plików Astro, warstwy danych Drizzle, testów i innych obszarów.
5. Otwórz `.github/instructions/unit-tests.instructions.md`. Zwróć uwagę na pole `applyTo` na górze — ustawia glob decydujący o tym, których plików dotyczą te instrukcje.
6. Otwórz `.github/instructions/drizzle.instructions.md` i zwróć uwagę na odwołania do innych plików instrukcji i do istniejących plików projektu. Dzięki temu możesz rozbijać większe zestawy instrukcji na mniejsze pliki wielokrotnego użytku i wskazywać Copilotowi przykłady do naśladowania.

## Zaktualizuj instrukcje zgodnie z wytycznymi zespołu

Istniejące pliki to dobry początek, ale jedna rzecz wciąż jest niedopowiedziana. Zmodyfikujmy główny plik `copilot-instructions.md`, żeby nowo generowany TypeScript zawierał komentarze TSDoc.

1. W `.github/copilot-instructions.md` znajdź sekcję **Code formatting guidance** — powinna być mniej więcej w okolicach linii 35.
2. Dodaj poniższy wpis jako jej ostatni punkt:

   ```markdown
   - All new TypeScript should contain TSDocs comments for documentation purposes.
   ```

Plik zapisze się automatycznie.

## Zastosuj nowe wytyczne

Copilot CLI wczytuje instrukcje repozytorium przy starcie rozmowy. Wznów rozmowę o filtrowaniu po tej edycji, żeby nowe wytyczne były dostępne, a kontekst funkcjonalności nie przepadł.

1. Poproś Copilota o zastosowanie zaktualizowanych wytycznych:

   ```plaintext
   We just updated our instructions and code guidance. Can you please update the code you generated to match that guidance?
   ```

2. Wpisz `/diff` i przejrzyj zmienione pliki TypeScript. Zwróć uwagę na nowo wygenerowane komentarze TSDoc i sprawdź, czy rzetelnie opisują kod.

## Podsumowanie i co dalej

Zobaczyłeś, jak Copilot CLI pobiera kontekst z plików instrukcji, i zastosowałeś nowy standard do swojej funkcjonalności. Konkretnie:

- zobaczyłeś, jak instrukcje repozytorium i instrukcje przypisane do ścieżek trafiają do agenta,
- zaktualizowałeś plik instrukcji, żeby wymusić przestrzeganie standardów kodowania,
- zobaczyłeś wpływ plików instrukcji na generowany kod.

W następnym kroku [dostosujesz i uruchomisz skill quality-checks][next-lesson], żeby lintowanie i testy uruchamiały się w powtarzalny sposób.

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
