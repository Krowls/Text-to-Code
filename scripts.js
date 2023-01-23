var values = {
    V: "0",
    U: "0",
    T: "1",
    S: "2",
    R: "3",
    Q: "4",
    P: "5",
    O: "6",
    N: "7",
    M: "8",
    L: "9",
  };

  function updateValue() {

    var firstInput = document.getElementById("firstInput");
    var keys = firstInput.value.toUpperCase();
    var allKeys = keys.split("");
    console.log(allKeys,"all");
    var secondInput = document.getElementById("secondInput");
    var key = firstInput.value.toUpperCase();
    console.log(key,"key");
    const getValue = (obj, key) => obj[key];
    const getCombinedValues = (obj, allKeys) => {
        return allKeys.map(key => getValue(obj, key)).join('');
      };  
      const combinedValues = getCombinedValues(values, allKeys);
      secondInput.value = combinedValues;
      console.log(combinedValues,"combined");

  }

  