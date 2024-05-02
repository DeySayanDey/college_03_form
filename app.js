import jsonData from './countries_details.json' assert {type: 'json'};

const details =jsonData;
// console.log(details[0].states);


window.onload = function(){
    const selectNationality = document.getElementById('nationality'),
        selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity =document.getElementById('city'),
        selects = document.querySelectorAll('select')


    selectState.disabled = true
    selectCity.disabled = true


    selects.forEach(select => {
        if(select.disabled == true){
            select.style.cursor = 'auto'
        }
    })

    for (let netion in details) {
        // Access the name of the country
        let netionName = details[netion].name;

        // Add the country name to the select dropdown
        selectNationality.options[selectNationality.options.length] = new Option(netionName, netion);
    }

   
    for (let country in details) {
        // Access the name of the country
        let countryName = details[country].name;

        // Add the country name to the select dropdown
        selectCountry.options[selectCountry.options.length] = new Option(countryName, country);
    }

    //country change
    selectCountry.onchange = (e) =>{
        selectState.disabled = false
        selectCity.disabled = true


        selectState.length = 1
        selectCity.length = 1

        
        // console.log(e.target.value)
      

        // Access the details of the selected country
        // let selectedCountryDetailss = details[e.target.value].states;
        // console.log(selectedCountryDetails)

        // Loop through each state in the states array
        for (let state in details[e.target.value].states) {
        
            // console.log(state);
            // console.log(details[e.target.value].states[state].name);

            let stateName=(details[e.target.value].states[state]).name;
            // console.log(stateName)


            selectState.options[selectState.options.length] = new Option(stateName,state);
        }


        }


        //select change

        selectState.onchange = (e) => {
            selectCity.disabled = false

            selectCity.length = 1
            // console.log(e.target.value)

            
            for(let city in details[selectCountry.value].states[e.target.value].cities){

                let cityName = details[selectCountry.value].states[e.target.value].cities[city].name

                selectCity.options[selectCity.options.length] = new Option(cityName,city);
            }

            // let selectStateDetailss = details[selectCountry.value][e.target.value].cities
            // console.log(selectStateDetailss)
        }
}