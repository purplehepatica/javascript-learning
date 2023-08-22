# Pomysły:

1. Do walidacji isNaN... w funkcji validateInputs() możliwe byłoby dodanie, np. input.setAttribute("data-is-valid") z wartościami 0 lub 1. Wówczas możliwe byłoby pominięcie dodatkowej walidacji w funkcji validateEndValues(), a przynajmniej jej uproszczenie - potrzebne byłoby tylko zebranie "data-is-valid" z wszystkich inputów i np. dodanie? Przykładowo, jeśli ich suma wyniesie 3, to wtedy można iść dalej.

- Problemy:
    a) Bazowanie na "data-is-valid" dla inputu z sekcji procentów może być problematyczne - no bo...

- Rozwiązanie:
    a) Podczas naciskania na któryś z buttonów w sekcji procentów "data-is-valid" inputa z klasą custom zmienia się na dodatnie? Po naciśnięciu na input z klasą custom dokonuje się walidacja.

Spoko! :-)

2. Kod JS jeszcze raz do przejrzenia - na razie pozostawiłem maksymalnie funkcjonalnie taki, na jaki mnie stać.

3. Przegląd kodu CSS i jego oczyszczenie.

4. Poprawić kod pod kątem addEventListener(e) => e.target.

!Ciekawe: const [bill, tip, people] = document.querySelectorAll("input");

---

## Podsumowanie

Przy projekcie wiele się nauczyłem:
- między innymi to, w jaki sposób rozdzielać kod JS na pomniejsze funkcje,
- żeby wyrzucać na górę kodu wszystkie zmienne, a najlepiej to żeby trzymać je w obiektach, np. "states" oraz "elements",
- Zamiast funkcji Interval lepiej jest aktualizować wynik operacji TYLKO wtedy, gdy zajdzie taka potrzeba (np. gdy użytkownik naciśnie przycisk lub wprowadzi coś w polu input),

### Myśli

Końcówka działania przy kodzie nieco mnie przytłoczyła. Choć ogólną funkcjonalność byłem w stanie przygotować bardzo szybko, to ciągłe <perfekcjonizowanie> zaczęło być niezbyt łatwe. Koniec końców jestem zadowolony - następnym razem może lepiej będzie na samym początku zastanowić się, co i jak zrobić. A dopiero wtedy działać - tak, by później nie musieć całego kodu przepisywać od początku.

Pomocne może być narysowanie minimapy funkcjonalności, np. "Gdy użytkownik naciśnie na przycisk, ma się dziać to i to", itp. Mając taką mapę możemy rozpocząć tworzenie <rozsądnego> kodu.
