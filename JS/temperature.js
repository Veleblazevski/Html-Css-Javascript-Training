    function conVerts(temperature, type) {
        if (type === "C") {
            return temperature * 1.8 + 32;
        } else if (type === "F") {
            return (5 / 9) * (temperature - 30);
        } else {
            return "Not correct";
        }
    }
    var result = conVerts(20, "C");
    alert(result);