const sumAll = function(a, b) {
    // 1) Comprobar que los valores son números enteros positivos
    if ((Number.isInteger(a) && a > 0) && (Number.isInteger(b) && b > 0)) {
        // 2) Ordenar los números de menor a mayor
        if (a > b) {
            const temp = a;
            a = b;
            b = temp
        }
        // 3) Implementar el bucle de suma
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
        // 5) Devolver resultado
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
