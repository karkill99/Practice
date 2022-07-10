const form =document.querySelector('form')
const search = document.getElementById('search');
const 
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

const getweather = async (city) =>{
    const urL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await fetch(urL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    showWeather(data);

};

form.addEventListener('submit', function(event) {
    // to get the user input from the search box
    console.log('city name', search.value); // fetch the user input

    // get the weather details of the city name given by user
    getweather(search.value);  
    event.preventDefault();

});
