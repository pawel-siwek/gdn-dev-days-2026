<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
<!-- Motyw przepisany na Dev Days Gdańsk 2026: zamiast generycznego retro-arcade
     brief prowadzi do estetyki gdańskiej stoczni z plakatu wydarzenia. -->
# Część 4: Motyw wizualny — design first

---

W tej części zaprojektujesz i wdrożysz kompletną przebudowę wizualną, tą samą pętlą planu i implementacji. Zaczynasz od wizji, iterujesz na tym, co widzisz w przeglądarce, a robotę w CSS zostawiasz Copilotowi.

Na Dev Days Gdańsk nie budujemy generycznego automatu z salonu gier. Budujemy **noc nad gdańską stocznią**: zielone żurawie portowe na tle ciemnego nieba, bursztynowy dach Żurawia, ceglany gotyk Głównego Miasta i skrzynie na nabrzeżu — wszystko w pixel arcie 8/16-bit.

## Zadanie 1: Zaplanuj motyw stoczniowy

<!-- track:vscode:start -->
Przełącz się na tryb **Plan** w GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Użyj `/plan` w GitHub Copilot CLI albo naciskaj **Shift+Tab**, aż tryb plan będzie aktywny.
<!-- track:cli:end -->

Wpisz ten prompt:

> Chcę zamienić tę stronę w pixelartowy hołd dla gdańskiej stoczni nocą: retro, 8/16-bitowy klimat salonu gier, ale osadzony w bałtyckim porcie zamiast w generycznym automacie.
>
> Zaplanuj kompletną przebudowę wizualną, która obejmie:
> - ciemne tło nocnego nieba z delikatną siatką pikseli i ledwo widoczną, paralaksową panoramą Głównego Miasta (ceglane gotyckie wieże, iglice)
> - animowane zielone suwnice bramowe okalające karty graczy, z kratownicową konstrukcją
> - plakietkę „VS" jako kontener wiszący na haku dźwigu, z łagodną animacją wahadła
> - karty wyników graczy jako skrzynie magazynowe podświetlone bursztynem, ustawione na nabrzeżu
> - kwadraty kontrybucji jako skrzynie ładunkowe ułożone w stosy; hover lekko unosi skrzynię i podświetla ją na bursztynowo
> - stan ładowania jako hak dźwigu, który opuszcza się i podnosi
> - tytuł w grubym pikselowym foncie z ciepłą bursztynową poświatą, jak reflektor stoczniowy
>
> Użyj dokładnie tej palety jako zmiennych CSS:
> ```css
> --bg:        #0d1117;  /* noc nad stocznią */
> --crane:     #3fb950;  /* zieleń dźwigów */
> --crane-dim: #2ea043;
> --amber:     #e3b341;  /* dach Żurawia, skrzynie */
> --rust:      #b45309;  /* cegła, rdza */
> --steel:     #8b949e;  /* konstrukcje, nabrzeże */
> --text:      #e6edf3;
> ```
>
> Nagłówki w pikselowym foncie „Press Start 2P" z Google Fonts, tekst w JetBrains Mono. Animacje na tyle subtelne, żeby dane o kontrybucjach pozostały czytelne.

Copilot wygeneruje szczegółowy plan. **Nie akceptuj go od razu**, przejrzyj i popraw:

- Zaproponuj korekty czasów animacji (np. *„Spowolnij wahanie kontenera do jakichś 4 sekund"*)
- Dopytaj o konkretne efekty (np. *„Jak dokładnie zadziała podnoszenie skrzyni przy hover?"*)
- Poproś o zmianę podejścia, jeśli coś Ci nie leży

> 💡 **Wskazówka:** jeśli chcesz, żeby Copilot lepiej trafił w klimat, dorzuć do promptu zdanie o konkretnym motywie: *Żuraw* (średniowieczny dźwig portowy z bursztynowym dachem), fontanna Neptuna albo sylweta Bazyliki Mariackiej.

## Zadanie 2: Zaimplementuj motyw

Kiedy plan Ci odpowiada, zleć Copilotowi jego wdrożenie.

> Zaimplementuj plan motywu gdańskiej stoczni, który właśnie zaprojektowaliśmy.

Copilot doda wiele animacji CSS, pseudoelementów i przejść w arkuszu stylów. Może to obejmować:

- `@keyframes` dla wahania kontenera, opuszczania haka, świecenia reflektora i podnoszenia skrzyń
- Pseudoelementy (`::before`, `::after`) na kratownice żurawi i siatkę pikseli
- Zmienne CSS na kolory motywu
- Stany `transition` i `hover` dla elementów interaktywnych

<!-- track:cli:start -->
Kiedy zmiany wylądują, przejrzyj je przez `/diff`, zanim je zatwierdzisz.
<!-- track:cli:end -->

## Zadanie 3: Dopieszcz klimat

> **⚠️ Nie widzisz zmian?** Jeśli nowy motyw albo animacje się nie pojawiają, zatrzymaj serwer deweloperski (`Ctrl+C`), uruchom go ponownie przez `npm run dev`, a potem zrób twarde odświeżenie (`Ctrl+Shift+R`) w przeglądarce.

Trzymaj podgląd w przeglądarce otwarty i iteruj na designie. Wypróbuj prompty w rodzaju:

> Siatka pikseli jest za mocna, zmniejsz przezroczystość do 0.03

> Dodaj wolno migające czerwone światło ostrzegawcze na szczycie najwyższego dźwigu

> Kontener powinien wahać się mocniej, kiedy zaczyna się pojedynek

> Niech skrzynie rzucają krótki pikselowy cień na nabrzeże

Każdy prompt przybliża stronę do celu. Nie zadowalaj się „wystarczająco dobrze", dociśnij, aż będzie wyglądać jak kadr z gry o gdańskiej stoczni.

## Zadanie 4: Zaktualizuj instrukcje

Zapisz najważniejsze decyzje projektowe w instrukcjach, żeby kolejne prompty trzymały się tego samego stylu.

<!-- track:vscode:start -->
Poproś Copilot Chat:

> Dodaj do copilot-instructions.md sekcję z przewodnikiem po designie opisującą nasz motyw gdańskiej stoczni: dokładną paletę kolorów, pikselowe fonty, styl animacji i zasadę, że każdy nowy element interfejsu ma trzymać się estetyki stoczni.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Poproś Copilot CLI:

> Uzupełnij instrukcje repozytorium o krótki przewodnik po designie motywu gdańskiej stoczni: dokładną paletę kolorów, pikselowe fonty, styl animacji i zasadę, że każdy nowy element interfejsu ma trzymać się estetyki stoczni.
<!-- track:cli:end -->

Zacommituj zaktualizowane instrukcje i zmiany w designie, kiedy strona będzie już wyglądać jak trzeba.

## ✅ Część 4 zaliczona

**Czego się nauczyłeś:**

- **Projektować w trybie Plan**, zanim powstanie CSS
- **Iterować na tym, co widać**, krótkimi promptami
- **Zapisywać decyzje w instrukcjach**, żeby Copilot trzymał spójny styl
