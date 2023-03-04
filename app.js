const getCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then( data => displayCountries(data) );
};
getCountries();

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Name: ${country.name.official}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div); 
    })
};

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));    
};

const showCountryDetails = country => {
    const countryDetailsDiv = document.getElementById('country-details');
    countryDetailsDiv.innerHTML = `
    <h3>Name: ${country.name.official}</h3>
        <h4>Population: ${country.population}</h4>
        <p>Region: ${country.region}</p>
        <img style="width: 100px" src="${country.flags.png}"/>
        `;
    console.log(country)
};

