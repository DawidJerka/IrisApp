from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import m2cgen as m2c

# Wczytanie danych
iris = load_iris()
X, y = iris.data, iris.target

# Trening modelu
model = RandomForestClassifier()
model.fit(X, y)

# Eksport do JavaScript
js_code = m2c.export_to_javascript(model)

# Zapisz do pliku
with open("iris_model.js", "w") as f:
    f.write(js_code)
