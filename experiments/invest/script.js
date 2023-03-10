// Define global variables
var yearlyPrincipalArray = [];
var yearlyInterestArray = [];
var yearlyBalanceArray = [];
var yearlyInterestSumArray = [];

// add an event listener to the form to trigger the calculateResults function when the submit button is clicked
var form = document.getElementById("input_form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting and reloading the page
  calculateTableEvolution();
  updateTable();
  buildjson();
  buildGraph();
});

// Calculate outputs
function calculateTableEvolution() {
  yearlyBalanceArray.length = 0;
  yearlyPrincipalArray.length = 0;
  yearlyInterestArray.length = 0;
  yearlyInterestSumArray.length = 0;

  var form = document.getElementById("input_form");

  var interest_rate = Number(form.interest_rate.value);
  var starting_amount = Number(form.starting_amount.value);
  var monthly_contribution = Number(form.monthly_contribution.value);
  var years = form.years.value;

  yearlyPrincipalArray.push(Number(starting_amount));
  yearlyBalanceArray.push(Number(starting_amount));
  yearlyInterestArray.push(yearlyBalanceArray[0] * (interest_rate / 100));
  yearlyInterestSumArray.push(yearlyInterestArray[0]);

  console.log(yearlyPrincipalArray[0]);
  console.log(typeof yearlyPrincipalArray[0]);
  console.log(yearlyBalanceArray[0]);
  console.log(typeof yearlyBalanceArray[0]);

  for (let i = 1; i < years; i++) {
    yearlyPrincipalArray.push(
      yearlyPrincipalArray[i - 1] + Number(12 * monthly_contribution)
    );

    yearlyBalanceArray.push(
      yearlyBalanceArray[i - 1] +
        yearlyInterestArray[i - 1] +
        Number(12 * monthly_contribution)
    );

    yearlyInterestArray.push(yearlyBalanceArray[i] * (interest_rate / 100));

    yearlyInterestSumArray.push(
      yearlyInterestSumArray[i - 1] + yearlyInterestArray[i]
    );
  }
}

// Display outputs in table
function updateTable() {
  var table = document.getElementById("results_table");

  // Remove all existing rows from the table
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  // Insert new rows into the table
  var row = table.insertRow();
  row.insertCell().innerHTML = "Year";
  row.insertCell().innerHTML = "Start Principal";
  row.insertCell().innerHTML = "Start Balance";
  row.insertCell().innerHTML = "Interest";
  row.insertCell().innerHTML = "Interest Sum";
  /*
  row.insertCell().innerHTML = "End Principal";
  row.insertCell().innerHTML = "End Balance";
  */
  for (let i = 0; i < form.years.value; i++) {
    var row = table.insertRow();
    row.insertCell().innerHTML = i + 1;
    row.insertCell().innerHTML = yearlyPrincipalArray[i].toFixed(2);
    row.insertCell().innerHTML = yearlyBalanceArray[i].toFixed(2);
    row.insertCell().innerHTML = yearlyInterestArray[i].toFixed(2);
    row.insertCell().innerHTML = yearlyInterestSumArray[i].toFixed(2);
  }
}

// Display outputs in graph
let data;
function buildjson() {
  data = yearlyPrincipalArray.map((principal, index) => {
    const year = index + 1;
    const balance = yearlyBalanceArray[index];
    const interest = yearlyInterestArray[index];
    return { year, principal, balance, interest };
  });
  console.log(data);
}

function buildGraph() {
  // remove existing graph
  d3.select("#my_dataviz").select("svg").remove();

  /*
 // set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    */
  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = window.innerWidth * 0.6 - margin.left - margin.right;
  const height = window.innerHeight * 0.4 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select("#my_dataviz")
    .append("svg")
    /*
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    */
    .attr("width", "60vw")
    .attr("height", "40vh")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // group the data by property
  const principalData = data.map((d) => ({
    property: "principal",
    year: d.year,
    value: d.principal,
  }));
  const balanceData = data.map((d) => ({
    property: "balance",
    year: d.year,
    value: d.balance,
  }));
  const interestData = data.map((d) => ({
    property: "interest",
    year: d.year,
    value: d.interest,
  }));
  const propertyData = [...principalData, ...balanceData, ...interestData];

  // Add X axis --> it is a linear scale now
  const x = d3
    .scaleLinear()
    .domain(
      d3.extent(data, function (d) {
        return d.year;
      })
    )
    .range([0, width]);
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5));

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(propertyData, function (d) {
        return d.value;
      }),
    ])
    .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // color palette
  const color = d3
    .scaleOrdinal()
    .domain(["principal", "balance", "interest"])
    //.range(["#F44336", "#2196F3", "#4CAF50"]);
    .range(["#e41a1c", "#377eb8", "#4daf4a"]);

    
  // Draw the line
  svg
    .selectAll(".line")
    .data(["principal", "balance", "interest"])
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", function (d) {
      return color(d);
    })
    .attr("stroke-width", 3)
    .attr("d", function (property) {
      return d3
        .line()
        .x(function (d) {
          return x(d.year);
        })
        .y(function (d) {
          return y(d.value);
        })(propertyData.filter((d) => d.property === property));
    });
}
