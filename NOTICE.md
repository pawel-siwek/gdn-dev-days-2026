# NOTICE — pochodzenie i atrybucja materiałów

Te repozytorium zawiera **polskie tłumaczenia i adaptacje** materiałów warsztatowych
GitHuba, przygotowane na **GitHub Dev Days Gdańsk** (28.10.2026, Capgemini Olivia Six).

Wszystkie materiały źródłowe są objęte **licencją MIT**. Poniżej podano dokładne
commity, z których zrobiono kopię, oraz zakres wprowadzonych zmian. Pełne teksty
licencji znajdują się na końcu pliku.

> To nie jest oficjalny materiał GitHuba i nie jest przez GitHub wspierany.
> Oficjalne, aktualne wersje po angielsku znajdziesz pod linkami poniżej.

---

## Materiały źródłowe

| Katalog w tym repo | Repozytorium źródłowe | Commit | Co zmieniono |
|---|---|---|---|
| `site/` | [github/dev-days](https://github.com/github/dev-days) | `200ee63a12e90a8cc8fc349688b525879dd08d06` | Przetłumaczono na polski; przerobiono na stronę pojedynczego wydarzenia; usunięto Google Analytics, loader zgody na cookies GitHuba, stopkę korporacyjną, przełącznik locale i sekcję GitHub Copilot App; kafle przepięte na materiały w tym repozytorium |
| `mona-mayhem/` | [copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem) | `d376143ca3e6c0b3c63980402deaf1c4ac0a1b19` | Przetłumaczono 7 kroków warsztatu i całe chrome; **odpięto pobieranie treści z `raw.githubusercontent.com`**; usunięto Google Analytics; domyślna ścieżka zmieniona na CLI; krok 04 przepisany na motyw gdańskiej stoczni; pominięto locale `es`/`pt_BR` oraz szkielet aplikacji (ten jest w osobnym repozytorium szablonowym) |
| `cli-workshop/` | [github-samples/copilot-workshops](https://github.com/github-samples/copilot-workshops) | `0711e76fc68c8746bc70900525025cfb3dc57734` | Przetłumaczono 12 lekcji ścieżki `real-world-development/cli`; Starlight przestawiony na jeden język i podkatalog; callouty zamienione na cytaty (asides nie renderowały się ani tu, ani u upstreamu); pominięto ścieżki `first-steps`, `app`, `vscode`, `cloud`, sekcję opcjonalną `8-foundry-agent` oraz locale `es-es`/`ja-jp`/`ko-kr`/`pt-br`/`zh-cn` |
| `decks/copilot-CLI.pptx` | [github/dev-days](https://github.com/github/dev-days), release `2026-07-30` | asset release'u | Kopia bez zmian, zachowana jako oryginał odniesienia |

Powiązane repozytoria szablonowe, utrzymywane osobno, również wywodzą się z materiałów MIT:

| Repozytorium | Źródło | Commit |
|---|---|---|
| `pawel-siwek/mona-mayhem-starter` | [copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem) | `d376143ca3e6c0b3c63980402deaf1c4ac0a1b19` |
| `pawel-siwek/tailspin-toys` | [github-samples/tailspin-toys](https://github.com/github-samples/tailspin-toys) | `0b8cd7a7ba9f26b5b880ff773936860ec670ffcc` |

## Dlaczego kopia, a nie link

Treść warsztatów jest aktywnie rozwijana przez GitHub. W trakcie przygotowań
(2026-09-30) kafel „Copilot CLI Workshop" na `dev-days.github.com` prowadził przez
`gh.io/dev-days/workshop/cli` na stronę zwracającą **404** — trasa zniknęła przy
przebudowie repozytorium dzień wcześniej. Dodatkowo Mona Mayhem pobierała kroki
warsztatu z `raw.githubusercontent.com` **w przeglądarce uczestnika**, w czasie
rzeczywistym, więc edycja upstreamu w trakcie wydarzenia zmieniłaby warsztat na żywo.

Ta kopia zamraża treść na dzień wydarzenia i tłumaczy ją na polski.

---

## Teksty licencji

### github/dev-days

```
MIT License

Copyright GitHub, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
```

### copilot-dev-days/mona-mayhem

```
MIT License

Copyright (c) 2026 copilot-dev-days

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the \"Software\"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### github-samples/copilot-workshops

```
MIT License

Copyright (c) 2023 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### github-samples/tailspin-toys

```
MIT License

Copyright GitHub, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
