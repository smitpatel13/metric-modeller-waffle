
/**
 * Populate languages select
 */
function getLanguages() {
    var select = document.querySelector("select");

    DATA.forEach((item, index) => {
        // console.log(element)
        var opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = item.language;

        select.appendChild(opt);
    });
}

function onSubmit() {
    var formValues = getFormValues();

    doCalculations(formValues);

    console.log(formValues);
}

/**
 * Get form input values
 */
function getFormValues() {
    let form = {};
    form.function_point = document.getElementById("function_point").value;
    form.language = document.getElementById("language").value;
    form.cost_per_hour = document.getElementById("cost_per_hour").value;

    return form;
}

function doCalculations(formValues) {
    var function_point = this.function_point.value;
    var language = this.language.value;
    var cost_per_hour = this.cost_per_hour.value;
    var point;
    if(language === "0"){
      point = 53;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else if(language === "1"){
      point = 54;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else if(language === "2"){
      point = 53;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else if(language === "3"){
      point = 67;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else if(language === "4"){
      point = 46;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else if(language === "5"){
      point = 22;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else if(language === "6"){
      point = 20;
      document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
      document.getElementById("timeresult").innerHTML = "\n Time: " + function_point * point / 2 + " Hours";
      document.getElementById("costresult").innerHTML = "Cost: $" + function_point * point * cost_per_hour / 2;
    }else{
      document.getElementById("locresult").innerHTML = "Something went wrong";
    }
}
