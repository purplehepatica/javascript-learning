# Galeria zdjęć produktowych

## Story
Firma chciałaby otrzymać możliwość oglądania produktu za pomocą galerii tak jak w sklepie LEGO.
https://www.lego.com/pl-pl/product/colosseum-10276

### Wymagania biznesowe:
- do galarii można przłać dowolną ilość zdjęć
- zdjęcia wyświetlają się jako thumbnails po lewej stronie
- thumbnails można scrollować góra/dół
- domyślnie na podglądzie wyświtla się pierwsze zdjęcie
- po kliknięciu na thumbnail podmienia się zdjęcie w podlądzie
- po najechaniu na podgląd pokazują się strzałki do przewijania zdjęć
- galeria powinna poprawnie wyświetlać zdjęcia niezależnie od ich proporcji

### Wymagania techniczne:
- galerie będzie można utworzyć za pomocą klasy: new Gallery(containerHtmlElement, arrayOfImages) lub za pomocą funkcji createGallery(containerHtmlElement, arrayOfImages). Wybierz jeden z podanych sposobów.
- containerHtmlElement to dowolny elemnt pobrany z dom
- arrayOfImages to tablica stringów z ścieżkami do zdjęć
- jeżeli jestęsmy na 1 zdjęciu to strzałka do przewijania w lewo powinna być disabled i ostylowana tak aby user o tym wiedział
- analogicznie powinna działać prawa strzałka dla ostatniego zdjęcia
- galeria powinna wygenerować odpowiedni html i "wstrzyknąć" go do podanego kontenera
