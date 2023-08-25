

/** TEST FUNKCJONALNOŚCI WYSZUKIWANIA 
1.Naciśnij na pole tekstowe, np. Imię, Adres e-mail, Zawartość (i ID?)
2. Dane pole zmieni się na input
3. Wpisz interesującą zawartość
4. ? - rzędy tabeli upraszczają się do danej zawartości, np. if (name === ...), then pozostaw dany rząd. Tylko w jaki sposób mają się ładować dynamicznie? Może na bazie display: none?

document.querySelectorAll("[data-id]")
> mogę po prostu dodać jeden input zamiast kilku osobnych funkcjonalności wyszukiwania dla każdego z pól

Widzę dwie opcje:

1. By użyć search input i po przeładowaniu ładować wyniki,
2. Lub użyć zwykłego buttona jako search oraz inputa, by ładować wyniki bez przeładowania strony.