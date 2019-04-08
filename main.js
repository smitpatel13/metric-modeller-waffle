
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

  form.software_reliability = document.getElementById("software_reliability").value;
  form.database_size = document.getElementById("database_size").value;
  form.complexity = document.getElementById("complexity").value;
  form.run_time_restraints = document.getElementById("run_time_restraints").value;
  form.memory_constraints = document.getElementById("memory_constraints").value;
  form.analyst_capability = document.getElementById("analyst_capability").value;
  form.programmer_capability = document.getElementById("programmer_capability").value;
  form.employees = document.getElementById("employees").value;
  form.software_methods = document.getElementById("software_methods").value;
  form.software_tools = document.getElementById("software_tools").value;

  var spValues = document.getElementById("software_projects").value;
  var split = spValues.split(",");
  form.a = split[0];
  form.b = split[1];
  return form;
}

function doCalculations(formValues) {
  var function_point = this.function_point.value;
  var language = this.language.value;
  var cost_per_hour = this.cost_per_hour.value;
  var point = DATA[language].point;

  var software_reliability = this.software_reliability.value;
  var database_size = this.database_size.value;
  var complexity = this.complexity.value;
  var run_time_restraints = this.run_time_restraints.value;
  var memory_constraints = this.memory_constraints.value;
  var analyst_capability = this.analyst_capability.value;
  var programmer_capability = this.programmer_capability.value;
  var employees = this.employees.value;
  var software_methods = this.software_methods.value;
  var software_tools = this.software_tools.value;
  var employees = this.employees.value;
  var a = formValues.a;
  var b = formValues.b;

// calculations

  var eaf = software_reliability*database_size*complexity*run_time_restraints*memory_constraints*
  analyst_capability*programmer_capability*software_methods*software_tools;
  var loc = function_point * point;
  var timeHour = (function_point * point / 2)*eaf;
  var timeMonth = (function_point * point / 2 / 160)*eaf;
  var cost =  (function_point * point * cost_per_hour / 2)*eaf * employees;

  var effort = a*(Math.pow(loc),b)*eaf;


  document.getElementById("locresult").innerHTML = "Lines of Code: " + loc;
  document.getElementById("timeresult").innerHTML = "\n Time: " + timeHour.toFixed(0) + " Hours or " + timeMonth.toFixed(2) + " months";
  document.getElementById("costresult").innerHTML = "Cost: $" + cost.toFixed(2);
  document.getElementById("scheduleresult").innerHTML = "Effort: " + effort.toFixed(2);
}
