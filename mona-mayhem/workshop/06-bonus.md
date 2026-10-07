<!-- l10n-sync: english-commit-sha="d376143ca3e6c0b3c63980402deaf1c4ac0a1b19" -->
# 🎉 Bonus i rozszerzenia

---

Aplikacja działa. Jeśli został Ci czas, poniżej kilka pomysłów na rozwinięcie jej dalej. Kolejność dowolna.

<!-- track:vscode:start -->
Do wszystkich poniższych użyj **trybu Agent** — opisz, czego chcesz, i pozwól Copilotowi to zbudować.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Używaj Copilot CLI tak, jak do tej pory: `@plik` do kontekstu, `/plan` przy większych zmianach, `/review` na koniec.
<!-- track:cli:end -->

---

## 🏆 Wyzwanie 1: Baner zwycięzcy

Kiedy oba wykresy kontrybucji się załadują, porównaj sumy i pokaż dynamiczne ogłoszenie zwycięzcy.

**Co zbudować:**
- Porównanie łącznej liczby kontrybucji obu użytkowników
- **„🏆 {username} WYGRYWA! 🏆"** w świątecznej oprawie, jeśli jest wyraźny zwycięzca
- **„🤝 REMIS! 🤝"**, jeśli liczby są równe
- Animacja albo konfetti dla efektu

**Propozycja promptu:**
> After both users' contribution data loads, compare total contributions and display a winner banner. Show "🏆 {username} WINS! 🏆" if one user has more contributions, or "🤝 IT'S A TIE! 🤝" if equal. Make it visually exciting with CSS animations.

---

## 🏆 Wyzwanie 2: Licznik serii

Policz i pokaż najdłuższą serię kolejnych dni z kontrybucjami dla każdego użytkownika.

**Co zbudować:**
- Analiza danych o kontrybucjach dzień po dniu
- Znalezienie najdłuższego ciągu kolejnych dni z co najmniej jedną kontrybucją
- Wyraźne wyświetlenie długości serii dla każdego użytkownika
- Wyróżnienie tego, kto ma dłuższą serię

**Propozycja promptu:**
> Add a streak counter feature that analyzes each user's contribution data to find their longest consecutive contribution streak. Display "🔥 Longest Streak: X days" for each user below their contribution graph.

---

## 🏆 Wyzwanie 3: Historia pojedynków

Zapisuj wyniki pojedynków, żeby użytkownicy widzieli swoje wcześniejsze starcia.

**Co zbudować:**
- Zapis każdego wyniku do `localStorage` (nazwy, sumy, zwycięzca, znacznik czasu)
- Sekcja **„Ostatnie pojedynki"** pod główną areną
- Pokazanie ostatnich 5–10 pojedynków z wynikami
- Przycisk „Wyczyść historię"

**Propozycja promptu:**
> Save battle results to localStorage after each comparison. Add a "Recent Battles" section that displays the last 10 battles with usernames, contribution totals, the winner, and when the battle happened. Include a "Clear History" button.

---

## 🏆 Wyzwanie 4: Efekty dźwiękowe

Dodaj retro efekty dźwiękowe przez Web Audio API — bez żadnych plików zewnętrznych.

**Co zbudować:**
- Dźwięk **wrzucanej monety** przy kliknięciu przycisku „Battle!"
- Dźwięk **power up** przy udanym załadowaniu wyników
- Dźwięk **eksplozji** przy błędzie (nie znaleziono użytkownika, awaria API)
- Przycisk wyciszania

**Propozycja promptu:**
> Add retro arcade sound effects using the Web Audio API (no audio files). Play a coin insert sound on battle start, a power-up sound when results load, and an explosion sound on errors. Generate the sounds programmatically with oscillators and gain nodes. Include a mute toggle.

> 💡 W klimacie stoczniowym możesz zamiast monety użyć **syreny okrętowej**, a zamiast power-upa — **dzwonu z nabrzeża**.

---

## 🏆 Wyzwanie 5: Animowana sekwencja pojedynku

Zbuduj napięcie efektownym odliczaniem przed pokazaniem wyników.

**Co zbudować:**
- Po kliknięciu „Battle!" pełnoekranowa nakładka
- Animacja: **„3..."** → **„2..."** → **„1..."** → **„⚡ WALCZ! ⚡"**
- Potem efektowne wejście wykresów kontrybucji
- Animacje CSS albo sterowanie czasem w JavaScripcie

**Propozycja promptu:**
> Add an animated battle sequence when the user clicks "Battle!". Show a countdown overlay: "3..." then "2..." then "1..." then "⚡ FIGHT! ⚡" with each step lasting about 1 second. After the countdown, reveal the results with a slide-in animation.

---

## 🏆 Wyzwanie 6: Legenda kontrybucji

Dodaj legendę skali kolorów pasującą do palety wykresu kontrybucji.

**Co zbudować:**
- Poziomą legendę pokazującą poziomy intensywności kontrybucji
- Etykiety od **„Mniej"** do **„Więcej"**
- Użycie faktycznej palety z odpowiedzi API kontrybucji
- Umieszczenie legendy blisko wykresów

**Propozycja promptu:**
> Add a contribution legend below the graphs showing the color scale from the API's color palette. Display a row of colored squares ranging from "Less" (lightest) to "More" (darkest), matching the actual contribution level colors returned by the API.

---

## 🏆 Wyzwanie 7: Udostępnianie wyników

Pozwól użytkownikom udostępnić wynik pojedynku jednym kliknięciem.

**Co zbudować:**
- Przycisk **„📋 Udostępnij wynik"** pojawiający się po pojedynku
- Kopiowanie sformatowanego podsumowania do schowka
- Nazwy użytkowników, sumy kontrybucji i zwycięzca w treści
- Krótkie potwierdzenie „Skopiowano!"

**Propozycja promptu:**
> Add a "📋 Share Results" button that copies a formatted battle summary to the clipboard. The summary should include both usernames, their contribution totals, and who won. Use the Clipboard API and show a brief "Copied to clipboard!" confirmation.

---

<!-- track:cli:start -->
## 💻 Dodatki dla CLI

Kilka komend Copilot CLI, których na warsztacie nie było:

- Użyj `copilot -p "Write a conventional commit message for the current git diff"`, żeby dostać jednorazową odpowiedź, którą wkleisz do Gita.
- Uruchom `/share file`, żeby zapisać sesję jako Markdown na później.
- Użyj `/session` i `/session plan`, żeby zobaczyć, jak CLI śledzi Twoją bieżącą pracę.
<!-- track:cli:end -->

## 🎊 Podsumowanie

### Co zbudowałeś

- ✅ Kompletną **aplikację webową** na podstawie specyfikacji projektowej
- ✅ **Stronę główną** w motywie gdańskiej stoczni, z responsywnym układem
- ✅ **Arenę pojedynków**, która pobiera i porównuje prawdziwe dane o kontrybucjach z GitHuba
- ✅ **Interaktywne wykresy kontrybucji** z kolorowaniem wg poziomu aktywności
- ✅ Poprawioną **obsługę błędów, stany ładowania i dostępność**
- ✅ **Responsywny design** działający na różnych urządzeniach

### Co przećwiczyłeś

| Umiejętność | Co przećwiczyłeś |
|---|---|
| **Inżynieria kontekstu** | Podawanie Copilotowi właściwych plików, instrukcji i ograniczeń |
| **Planowanie** | Generowanie i dopracowywanie planów przed kodowaniem |
| **Kodowanie agentowe** | Oddawanie Copilotowi wieloplikowej, wieloetapowej pracy |
| **Iteracja designu** | Wyjście od kierunku wizualnego i dociąganie go do dopracowanego efektu |
| **Dyscyplina review** | Sprawdzanie zmian wygenerowanych przez AI przed commitem |

### 🚀 Co dalej

- 📺 [Kanał VS Code na YouTube](https://www.youtube.com/@code) — wskazówki, tutoriale i nowości
- 📖 [Dokumentacja GitHub Copilot](https://docs.github.com/en/copilot) — oficjalne materiały i przewodniki
- 💻 [Dokumentacja GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — instalacja, komendy slash i dobre praktyki
- 🌟 [Awesome GitHub Copilot](https://github.com/github/awesome-copilot) — materiały i przykłady od społeczności
- 🛠️ [Warsztaty Copilot Dev Days](https://github.com/copilot-dev-days) — więcej praktycznych warsztatów takich jak ten

---

## 🙏 Dzięki za udział

Wszystko, co tu przećwiczyłeś, działa tak samo w Twoich własnych projektach, niezależnie od frameworka i skali. Powodzenia!

*GitHub Dev Days Gdańsk · 28.10.2026 · Capgemini, Olivia Six*
