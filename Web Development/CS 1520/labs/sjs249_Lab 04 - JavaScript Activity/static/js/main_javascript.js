// sjs249, lab 04

function plotMortgageCurves(principal, monthlyPayment, annualInterestRate, loanPeriod) {
    let plottingArrays = getLoanPaymentValues(principal, monthlyPayment, annualInterestRate, loanPeriod); // see note #6
    plotValues(plottingArrays); // see note #7
}

function main_driver() {
    let loanInformation = getLoanInformation();  // See Note #1
    let housePrice = loanInformation[0];
    let downPayment = loanInformation[1];
    let annualInterestRate = loanInformation[2];
    let loanPeriodInYears = loanInformation[3];

    // derived data from loan information
    let principal_P = housePrice - downPayment;  // See note #2
    let montlyInterestRate_r = (annualInterestRate / 12) / 100;  // See note #3
    let totalNumberOfPayments_n = loanPeriodInYears * 12;  // See note #4

    // compute monthly mortgage payments using the formula
    let monthlyMortgagePayments_M = computeMonthlyMortgagePayments(principal_P, montlyInterestRate_r, totalNumberOfPayments_n);

    displayResults(housePrice, downPayment, annualInterestRate, loanPeriodInYears, monthlyMortgagePayments_M);  // See note #5
    plotMortgageCurves(principal_P, monthlyMortgagePayments_M, annualInterestRate, loanPeriodInYears);
}

// compute monthly mortgage payments (M) using the standard mortgage formula
function computeMonthlyMortgagePayments(principal, monthlyInterestRate, numberOfPayments) {
    return principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
}

// retrieve loan information (house price, down payment, interest rate, loan period)
function getLoanInformation() {
    // hardcoded but  can be extended to take user input from HTML form fields
    return [600000, 100000, 5, 30];  // Example: House price = 600,000, down payment = 100,000, interest rate = 5%, loan period = 30 years
}

// calculate and display minimum monthly income
function displayResults(housePrice, downPayment, annualInterestRate, loanPeriodInYears, monthlyMortgagePayments_M) {
    const minimumMonthlyIncome = (monthlyMortgagePayments_M / 0.3).toFixed(2);

    const resultText = `
    House Price: $${housePrice}<br>
    Down Payment: $${downPayment}<br>
    Principal: $${housePrice - downPayment}<br>
    Annual Interest Rate: ${annualInterestRate}%<br>
    Loan Period: ${loanPeriodInYears} years<br>
    Monthly Mortgage Payments: $${monthlyMortgagePayments_M.toFixed(2)} per month<br>
    Minimum Monthly Income per Household: $${minimumMonthlyIncome} (30% of the house income)
    `;
    
    document.getElementById('mortgage-details').innerHTML = resultText;
}


// function to calculate loan payment breakdown (interest and principal) over the loan period
function getLoanPaymentValues(principal, monthlyPayment, annualInterestRate, loanPeriodInYears) {
    let monthlyInterestRate = (annualInterestRate / 12) / 100;
    let totalNumberOfPayments = loanPeriodInYears * 12;
    let paymentNumber = [];
    let interestPayments = [];
    let principalPayments = [];
    let outstandingPrincipal = [];

    let remainingPrincipal = principal;

    for (let i = 1; i <= totalNumberOfPayments; i++) {
        let interestPayment = remainingPrincipal * monthlyInterestRate;
        let principalPayment = monthlyPayment - interestPayment;
        remainingPrincipal -= principalPayment;

        paymentNumber.push(i);
        interestPayments.push(interestPayment);
        principalPayments.push(principalPayment);
        outstandingPrincipal.push(remainingPrincipal);
    }

    return [paymentNumber, interestPayments, principalPayments, outstandingPrincipal];  // Return 4 arrays as per Note #6
}

// plot values using Plotly.js
function plotValues(plottingArrays) {
    let paymentNumber = plottingArrays[0];
    let interestPayments = plottingArrays[1];
    let principalPayments = plottingArrays[2];
    let outstandingPrincipal = plottingArrays[3];

    // Plot Interest vs Principal Payments
    const data1 = [
        {
            x: paymentNumber,
            y: interestPayments,
            mode: "lines",
            name: "Interest Monthly Payment"
        },
        {
            x: paymentNumber,
            y: principalPayments,
            mode: "lines",
            name: "Principal Monthly Payment"
        }
    ];

    Plotly.newPlot("monthlyInterestRateAndPrincipalPayments", data1);

    // Plot Remaining Principal Balance
    const data2 = [
        {
            x: paymentNumber,
            y: outstandingPrincipal,
            mode: "lines",
            name: "Remaining Principal"
        }
    ];

    Plotly.newPlot("monthlyPrincipalValues", data2);
}
