const calctemp = () => {
  const numbertemp = document.getElementById("temp").value;
  // console.log(numbertemp);

  const tmpselected = document.getElementById("tempdiff");
  const valuetemp = tempdiff.options[tmpselected.selectedIndex].value;
  console.log(valuetemp);

  let result;

  const celtofar = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fartocel = (fahr) => {
    let celsius = Math.round(((fahr - 32) * 5) / 9);
    return celsius;
  };

  if (valuetemp == "cel") {
    result = celtofar(numbertemp);
    document.getElementById("resut").innerHTML = `${result}&#176;celsius`;
  } else {
    result = fartocel(numbertemp);
    document.getElementById("resut").innerHTML = `${result}&#176;fahrenheit`;
  }
};
