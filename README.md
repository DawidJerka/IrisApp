# 🌸 Iris Classifier – Random Forest + JavaScript

## 📋 Opis projektu
Projekt **Iris Classifier** demonstruje integrację modelu **uczenia maszynowego (Random Forest)** stworzonego w Pythonie z prostym interfejsem webowym w **HTML + JavaScript**.  
Celem aplikacji jest klasyfikacja gatunków irysów (*Setosa*, *Versicolor*, *Virginica*) na podstawie czterech cech: długości i szerokości działki kielicha (sepal) oraz płatka (petal).

---

## ⚙️ Struktura projektu

| Plik | Opis |
|------|------|
| **RandomForest.py** | Trenuje model Random Forest na klasycznym zbiorze danych **Iris** i eksportuje go do pliku `iris_model.js`, zawierającego funkcję `score()` umożliwiającą predykcję w przeglądarce. |
| **iris_model.js** | Zserializowany model Random Forest w formacie JavaScript — umożliwia wykonywanie predykcji bezpośrednio po stronie klienta. |
| **app.js** | Obsługuje logikę aplikacji — pobiera dane z formularza, wywołuje `score(inputs)` i wyświetla wynik klasyfikacji. |
| **index.html** | Prosty interfejs użytkownika pozwalający wprowadzić dane i uruchomić predykcję jednym przyciskiem. |

---

## 🧠 Jak to działa
1. Użytkownik wpisuje cztery wartości cech kwiatu w formularzu.  
2. Po kliknięciu **Predict**, funkcja `predict()` z pliku `app.js`:
   - pobiera dane z pól,
   - przekazuje je do funkcji `score()` z `iris_model.js`,
   - wybiera gatunek z najwyższym prawdopodobieństwem i wyświetla wynik.  
3. Cała predykcja odbywa się **lokalnie w przeglądarce**, bez potrzeby backendu.

---

## 🚀 Uruchamianie projektu
1. Upewnij się, że wszystkie pliki (`index.html`, `app.js`, `iris_model.js`) znajdują się w tym samym folderze.  
2. Otwórz plik `index.html` w dowolnej przeglądarce.  
3. Wprowadź dane i kliknij **Predict**, aby zobaczyć wynik klasyfikacji.

---

## 🧩 Technologie
- Python (scikit-learn)  
- JavaScript (client-side inference)  
- HTML

---

## 📊 Zastosowanie
Projekt pokazuje, jak można:
- wytrenować model ML w Pythonie,  
- wyeksportować go do JavaScriptu,  
- oraz użyć go w lekkiej aplikacji działającej **offline** w przeglądarce.

---

## 👨‍💻 Autor
**Dawid Jerka**  
Projekt demonstracyjny integrujący Machine Learning z aplikacją webową.
