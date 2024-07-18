array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1];

for (let array in array2 ) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

