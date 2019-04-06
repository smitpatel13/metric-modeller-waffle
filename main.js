
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

    document.getElementById("input-container").style.display = "none";
    document.getElementById("thinking-container").style.display = "inline-block";

    doCalculations(formValues);
    console.log(formValues);
    document.getElementById("output-container").style.display = "none";

    setTimeout(function(){
      document.getElementById("thinking-container").style.display = "none";
      document.getElementById("output-container").style.display = "inline-block";
    }, 3000);

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
    var point = DATA[language].point;

    document.getElementById("locresult").innerHTML = "Lines of Code: " + function_point * point;
    document.getElementById("timeresult").innerHTML 
                                                  = "\n Time: " + function_point * point / 2 + 
                                                  " Hours or " + ((function_point * point / 2) / 160).toFixed(2) + 
                                                  " months";
    document.getElementById("costresult").innerHTML 
                                                  = "Cost: $" + function_point * point * cost_per_hour / 2;
}
