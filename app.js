function predict() {
    const inputs = [
        parseFloat(document.getElementById("sepal_length").value),
        parseFloat(document.getElementById("sepal_width").value),
        parseFloat(document.getElementById("petal_length").value),
        parseFloat(document.getElementById("petal_width").value)
    ];
    if (inputs.some(isNaN)) {
        document.getElementById("result").textContent = "Please enter all values correctly.";
        return;
    }
    const probs = score(inputs);
    console.log("Raw prediction vector:", probs);
    const maxIndex = probs.indexOf(Math.max(...probs));
    const label = ["Setosa", "Versicolor", "Virginica"][maxIndex];
    document.getElementById("result").textContent = `Prediction: ${label}`;
}