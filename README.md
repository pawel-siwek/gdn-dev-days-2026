# GitHub Dev Days Gdańsk 2026 — materiały po polsku

Polska, **zamrożona** wersja materiałów warsztatowych na GitHub Dev Days Gdańsk.

**28.10.2026 · środa · 18:00–21:00 · Capgemini, Olivia Six**
Prowadzą: Paweł Siwek · Pavel Agarkov · Izabela Betka
Rejestracja: [luma.com/tjq6i6s5](https://luma.com/tjq6i6s5)

📍 **Strona dla uczestników: https://pawel-siwek.github.io/gdn-dev-days-2026/**

## Co tu jest

| Ścieżka | Zawartość |
|---|---|
| `site/` | Strona wydarzenia (statyczny HTML) |
| `mona-mayhem/` | Warsztat „Mayhem w Stoczni" — 7 kroków, ~60 min |
| `cli-workshop/` | Warsztat Copilot CLI na Tailspin Toys — 12 lekcji, ~2 godz. (Astro + Starlight) |
| `decks/` | Prezentacja otwierająca, wersja PL i oryginał EN |

Repozytoria szablonowe, z których uczestnicy tworzą własne projekty:

- [`pawel-siwek/mona-mayhem-starter`](https://github.com/pawel-siwek/mona-mayhem-starter) — szkielet gry
- [`pawel-siwek/tailspin-toys`](https://github.com/pawel-siwek/tailspin-toys) — aplikacja + backlog 9 zgłoszeń po polsku

## Dlaczego kopia, a nie linki do GitHuba

Materiały GitHuba są aktywnie rozwijane i **potrafią się zmienić w dniu wydarzenia**:

- Kafel „Copilot CLI Workshop" na `dev-days.github.com` prowadził 30.09.2026 na **404** — trasa zniknęła przy przebudowie repozytorium dzień wcześniej.
- Mona Mayhem pobierała kroki warsztatu z `raw.githubusercontent.com` **w przeglądarce uczestnika**, w czasie rzeczywistym.

Ta kopia eliminuje obie zależności. Pilnuje tego bramka w `deploy.yml`, która wywala build, jeśli w opublikowanej treści pojawi się odwołanie do upstreamu.

Pochodzenie materiałów, przypięte commity i licencje: [NOTICE.md](NOTICE.md).

## Praca lokalna

```bash
# podgląd całej witryny dokładnie tak, jak zostanie opublikowana
./preview.sh          # buduje do _site/ i serwuje na http://localhost:8080

# sam warsztat CLI, z hot reloadem
cd cli-workshop/website && npm ci && npm run dev
```

> ⚠️ W `preview.sh` nawigacja **wewnątrz warsztatu CLI** nie zadziała: Starlight
> wypala w linkach absolutny prefiks produkcyjny `/gdn-dev-days-2026/cli-workshop/`.
> Strona wydarzenia i Mona Mayhem działają w podglądzie normalnie. Do pracy nad
> samym warsztatem CLI używaj `npm run dev`.

Układ katalogów w repozytorium jest **identyczny** z opublikowanym, więc ścieżki
względne działają tak samo lokalnie i na Pages. Mona Mayhem pobiera kroki z
`./workshop/` obok `step.html` — bez żadnej gałęzi specjalnej dla localhosta.

Publikacja: push na `main` → GitHub Actions → Pages.

## Przed wydarzeniem

- [ ] Próba generalna: przejść Mona Mayhem od zera na czystym koncie, po polsku
- [ ] Sprawdzić, że oba szablony tworzą poprawne repozytoria (`Use this template`)
- [x] Test odcięcia: `grep -rn 'copilot-dev-days\|github-samples\|gh\.io' .` — tylko trafienia z NOTICE.md i atrybucji (2026-10-07: pozostałe trafienia to świadome linki „czytaj dalej” do innych ścieżek upstreamu i organizacji copilot-dev-days)
- [ ] Otagować `gdansk-2026` we wszystkich trzech repozytoriach

## Licencja

MIT — zob. [LICENSE](LICENSE). Materiały źródłowe © GitHub, Inc. i współtwórcy, również MIT.
To nie jest oficjalny materiał GitHuba.
