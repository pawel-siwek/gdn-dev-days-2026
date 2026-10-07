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
> Po załadowaniu danych o kontrybucjach obu użytkowników porównaj sumy i pokaż baner zwycięzcy: „🏆 {username} WYGRYWA! 🏆", jeśli jeden ma więcej kontrybucji, albo „🤝 REMIS! 🤝", jeśli tyle samo. Dodaj efektowne animacje CSS.

---

## 🏆 Wyzwanie 2: Licznik serii

Policz i pokaż najdłuższą serię kolejnych dni z kontrybucjami dla każdego użytkownika.

**Co zbudować:**
- Analiza danych o kontrybucjach dzień po dniu
- Znalezienie najdłuższego ciągu kolejnych dni z co najmniej jedną kontrybucją
- Wyraźne wyświetlenie długości serii dla każdego użytkownika
- Wyróżnienie tego, kto ma dłuższą serię

**Propozycja promptu:**
> Dodaj licznik serii, który przeanalizuje dane o kontrybucjach każdego użytkownika i znajdzie najdłuższy ciąg kolejnych dni z kontrybucją. Pod wykresem każdego użytkownika pokaż „🔥 Najdłuższa seria: X dni".

---

## 🏆 Wyzwanie 3: Historia pojedynków

Zapisuj wyniki pojedynków, żeby użytkownicy widzieli swoje wcześniejsze starcia.

**Co zbudować:**
- Zapis każdego wyniku do `localStorage` (nazwy, sumy, zwycięzca, znacznik czasu)
- Sekcja **„Ostatnie pojedynki"** pod główną areną
- Pokazanie ostatnich 5–10 pojedynków z wynikami
- Przycisk „Wyczyść historię"

**Propozycja promptu:**
> Po każdym porównaniu zapisuj wynik pojedynku w localStorage. Dodaj sekcję „Ostatnie pojedynki" z 10 ostatnimi starciami: nazwy użytkowników, sumy kontrybucji, zwycięzca i czas pojedynku. Dodaj przycisk „Wyczyść historię".

---

## 🏆 Wyzwanie 4: Efekty dźwiękowe

Dodaj retro efekty dźwiękowe przez Web Audio API — bez żadnych plików zewnętrznych.

**Co zbudować:**
- Dźwięk **wrzucanej monety** przy kliknięciu przycisku „Walcz!"
- Dźwięk **power up** przy udanym załadowaniu wyników
- Dźwięk **eksplozji** przy błędzie (nie znaleziono użytkownika, awaria API)
- Przycisk wyciszania

**Propozycja promptu:**
> Dodaj retro efekty dźwiękowe przez Web Audio API (bez plików audio). Dźwięk wrzucanej monety na start pojedynku, power-up po załadowaniu wyników i eksplozja przy błędzie. Generuj dźwięki programowo oscylatorami i węzłami gain. Dodaj przycisk wyciszenia.

> 💡 W klimacie stoczniowym możesz zamiast monety użyć **syreny okrętowej**, a zamiast power-upa — **dzwonu z nabrzeża**.

---

## 🏆 Wyzwanie 5: Animowana sekwencja pojedynku

Zbuduj napięcie efektownym odliczaniem przed pokazaniem wyników.

**Co zbudować:**
- Po kliknięciu „Walcz!" pełnoekranowa nakładka
- Animacja: **„3..."** → **„2..."** → **„1..."** → **„⚡ WALCZ! ⚡"**
- Potem efektowne wejście wykresów kontrybucji
- Animacje CSS albo sterowanie czasem w JavaScripcie

**Propozycja promptu:**
> Dodaj animowaną sekwencję pojedynku po kliknięciu „Walcz!". Pokaż nakładkę z odliczaniem: „3...", „2...", „1...", a potem „⚡ WALCZ! ⚡", każdy krok około sekundy. Po odliczaniu odsłoń wyniki animacją wjazdu.

---

## 🏆 Wyzwanie 6: Legenda kontrybucji

Dodaj legendę skali kolorów pasującą do palety wykresu kontrybucji.

**Co zbudować:**
- Poziomą legendę pokazującą poziomy intensywności kontrybucji
- Etykiety od **„Mniej"** do **„Więcej"**
- Użycie faktycznej palety z odpowiedzi API kontrybucji
- Umieszczenie legendy blisko wykresów

**Propozycja promptu:**
> Dodaj pod wykresami legendę kontrybucji ze skalą kolorów z palety API. Pokaż rząd kolorowych kwadratów od „Mniej" (najjaśniejszy) do „Więcej" (najciemniejszy), zgodnych z kolorami poziomów kontrybucji zwracanymi przez API.

---

## 🏆 Wyzwanie 7: Udostępnianie wyników

Pozwól użytkownikom udostępnić wynik pojedynku jednym kliknięciem.

**Co zbudować:**
- Przycisk **„📋 Udostępnij wynik"** pojawiający się po pojedynku
- Kopiowanie sformatowanego podsumowania do schowka
- Nazwy użytkowników, sumy kontrybucji i zwycięzca w treści
- Krótkie potwierdzenie „Skopiowano!"

**Propozycja promptu:**
> Dodaj przycisk „📋 Udostępnij wynik", który kopiuje sformatowane podsumowanie pojedynku do schowka: obie nazwy użytkowników, sumy kontrybucji i zwycięzcę. Użyj Clipboard API i pokaż krótkie potwierdzenie „Skopiowano!".

---

<!-- track:cli:start -->
## 💻 Dodatki dla CLI

Kilka komend Copilot CLI, których na warsztacie nie było:

- Użyj `copilot -p "Napisz komunikat commita dla bieżącego diffa w gicie"`, żeby dostać jednorazową odpowiedź, którą wkleisz do Gita.
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
