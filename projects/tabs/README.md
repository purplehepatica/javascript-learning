# 1. TABS SCRIPT PROJECT

## 2. Ogólne założenia

### Wymagania biznesowe:
- komponent może przyjąć dowolną ilość zakładek
- nazwy zakładek powinny zawijać się do kolejnego wiersza jeżeli nie mieszczą się na ekranie
- po kliknięciu w komponent zakładkę pojawia się przypisany do niej kontent
- aktywna zakładka ma inny styl sugerujący, że wyświetla się jej kontent

### Wymagania techniczne:
- komponent będzie można stworzyć za pomocą klasy lub funkcji np. new Tabs(container, config) lub createTabsComponent(container, config)
- container to element html, do którego należy “wstrzyknąć” komponent zakładek
- config to dowolny obiekt lub tablica na podstawie, której należy wygenerować komponent. Przykładowa schemat:
- const tabs = [ {label: string, content: string} ]
- domyślnie aktywna jest pierwsza zakładka
- komponent wyświetla się poprawnie na mobile oraz desktop

---

## 3. Sposób użycia

### Dołączenie potrzebnych plików do strony

W celu użycia skryptu, należy dodać do części **head** poniższe linijki kodu:

- <link rel="stylesheet" href="tabs.css" />
- <script src="tabs.js"></script>

### Wywołanie funkcji z odpowiednim id oraz elementami "tab"

Aby dodać na stronie zakładki (z angielskiego "tabs"), należy dodać poniższy kod w części **footer** strony internetowej: createTabsComponent(container, config)

- createTabsComponent(container, config) to funkcja przyjmująca dwa argumenty: container oraz config.
- argument container to id elementu, do którego chcemy dodać nasze zakładki (tabs). Dobrze jest utworzyć nowy element div z id, np. <div id="tabs"></div>
- argument config przyjmuje obiekt, w którym kluczami jest tekst zakładki, a wartościami tekst, który pokazuje się po naciśnięciu wybranej zakładki.
