
        function AmountChange(){
            document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
            
        }
        function YearChange(){
            document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
            
        }
        function RateChange(){
            document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
        }

        function CalculateClick(){
            var P = parseInt(document.getElementById("txtAmount").value);
            var N = parseInt(document.getElementById("txtYears").value) * 12;
            var R = parseFloat(document.getElementById("txtRate").value)/12/100;
            var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);
            document.getElementById("lblEmi").innerHTML = "Your Monthy Installment Amount is " + EMI.toLocaleString('en-in', {style:'currency', currency:'INR'}) + " for next " + N + " months.";
        }
