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

> I want to transform this page into a pixel-art tribute to the Gdańsk shipyard at night — a retro 8/16-bit arcade look, but themed around a Baltic port instead of a generic arcade cabinet.
>
> Plan a comprehensive visual overhaul that includes:
> - a dark night-sky background with a subtle pixel-grid overlay and a faint parallax skyline of Gdańsk Old Town (brick Gothic towers, spires)
> - animated green gantry cranes framing the two player cards, with lattice/truss detailing
> - the VS badge styled as a swinging shipping container suspended from a crane hook, with a gentle pendulum animation
> - player result cards styled as amber-lit warehouse crates stacked on a quay
> - contribution squares rendered as stacked cargo crates; hover raises the crate slightly and lights it amber
> - loading state shown as a crane hook lowering and raising
> - the title rendered in a chunky pixel font with a warm amber glow, like a shipyard floodlight
>
> Use exactly this palette as CSS custom properties:
> ```css
> --bg:        #0d1117;  /* night over the shipyard */
> --crane:     #3fb950;  /* crane green */
> --crane-dim: #2ea043;
> --amber:     #e3b341;  /* Żuraw roof, crates */
> --rust:      #b45309;  /* brick, rust */
> --steel:     #8b949e;  /* structures, quay */
> --text:      #e6edf3;
> ```
>
> Use the "Press Start 2P" pixel font from Google Fonts for headings and JetBrains Mono for body text. Keep all animation subtle enough that the contribution data stays readable.

Copilot wygeneruje szczegółowy plan. **Nie akceptuj go od razu**, przejrzyj i popraw:

- Zaproponuj korekty czasów animacji (np. *„Spowolnij wahanie kontenera do jakichś 4 sekund"*)
- Dopytaj o konkretne efekty (np. *„Jak dokładnie zadziała podnoszenie skrzyni przy hover?"*)
- Poproś o zmianę podejścia, jeśli coś Ci nie leży

> 💡 **Wskazówka:** jeśli chcesz, żeby Copilot lepiej trafił w klimat, dorzuć do promptu zdanie o konkretnym motywie: *Żuraw* (średniowieczny dźwig portowy z bursztynowym dachem), fontanna Neptuna albo sylweta Bazyliki Mariackiej.

## Zadanie 2: Zaimplementuj motyw

Kiedy plan Ci odpowiada, zleć Copilotowi jego wdrożenie.

> Implement the Gdańsk shipyard theme plan we just designed.

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

> The pixel grid overlay is too strong, reduce opacity to 0.03

> Add a slow blinking red aircraft warning light on top of the tallest crane

> The container should swing more dramatically when the battle starts

> Make the crates cast a short pixel shadow on the quay

Każdy prompt przybliża stronę do celu. Nie zadowalaj się „wystarczająco dobrze", dociśnij, aż będzie wyglądać jak kadr z gry o gdańskiej stoczni.

## Zadanie 4: Zaktualizuj instrukcje

Zapisz najważniejsze decyzje projektowe w instrukcjach, żeby kolejne prompty trzymały się tego samego stylu.

<!-- track:vscode:start -->
Poproś Copilot Chat:

> Add a design guide section to copilot-instructions.md describing our Gdańsk shipyard theme: the exact colour palette, pixel fonts, animation style, and the rule that any new UI must keep the shipyard aesthetic.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Poproś Copilot CLI:

> Update our repository instructions with a short design guide for the Gdańsk shipyard theme: the exact colour palette, pixel fonts, animation style, and the rule that any new UI must keep the shipyard aesthetic.
<!-- track:cli:end -->

Zacommituj zaktualizowane instrukcje i zmiany w designie, kiedy strona będzie już wyglądać jak trzeba.

## ✅ Część 4 zaliczona

**Czego się nauczyłeś:**

- **Projektować w trybie Plan**, zanim powstanie CSS
- **Iterować na tym, co widać**, krótkimi promptami
- **Zapisywać decyzje w instrukcjach**, żeby Copilot trzymał spójny styl
