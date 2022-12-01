var request = new XMLHttpRequest();
        request.open('GET','https://restcountries.com/v3.1/all');
        request.send();
        request.onload = function(){
            var data = request.response
            var res = JSON.parse(data);
            

            //a
            //Countries from asia region using filter function
            let asia = res.filter((element) => element.region == "Asia")
            console.log(asia);

            //Countries from asia continent using filter function
            let asia1 = res.filter((element) => element.continents == "Asia")
            console.log(asia1);

            //b
            //Countries with population less than 2lakhs using filter function
            let population = res.filter((element) => element.population < 200000)
            console.log(population);

            //c
            //Details- name, capital and flag of the countries using forEach
            res.forEach(element => {
                console.log(element.name)
                console.log(element.capital)
                console.log(element.flag)
                
            });

            //d
            //Total population of countries using reduce       
            let totalPopulation = res.reduce((total, element) => element.population+total, 0 )
            console.log(`Total population: ${totalPopulation}`)

            //e
            //Countries which uses US dollar as currency
            var currency = res.map((element) => element.currencies)
            console.log(currency)
            

        }  