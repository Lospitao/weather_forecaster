function checkCityNameEvent(city_name) {

    let findCityWebService = API_DOMAIN +'/find_suggested_cities/' + city_name ;

    $.ajax({

        url : findCityWebService,
        data : {
            'cityName' : city_name,
        },
        type : 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        dataType : 'json',
        success: function (data) {
            console.log('Se han encontrado datos para la ciudad: '+ city_name);
            // $('.cities_suggested').show();
            // let findForecastWebService = API_DOMAIN +'/find_forecast/' + city_name
            // let city = `<li class="suggested_city" >${}<a href=${findForecastWebService}></a></li>`;
            // $( ".cities_suggested" ).append(city);
        },
        error: function (data) {
            console.log('No se han encontrado datos para la ciudad: '+ city_name);
        },
    })
}

function findCityEvent() {
    $('#city_finder').keyup(function() {
        let city_name = $(this).val();
        checkCityNameEvent(city_name);
    });
}
function displaySuggestionList(data) {
    const cities = []
    const filtered = data.filter(function(element){
        cities.push(element.name);
    });
}
$(document).ready(function() {
    findCityEvent();
    let data = [{"id":698677,"name":"Barajas","region":"Madrid","country":"Spain","lat":40.48,"lon":-3.58,"url":"barajas-madrid-spain"},{"id":698679,"name":"Barajas De Madrid","region":"Madrid","country":"Spain","lat":40.48,"lon":-3.58,"url":"barajas-de-madrid-madrid-spain"},{"id":698681,"name":"Barajas Madrid","region":"Madrid","country":"Spain","lat":40.48,"lon":-3.58,"url":"barajas-madrid-madrid-spain"},{"id":717711,"name":"Paracuellos De Jarama","region":"Madrid","country":"Spain","lat":40.5,"lon":-3.52,"url":"paracuellos-de-jarama-madrid-spain"},{"id":699106,"name":"Barrio La Alameda De Osuna","region":"Madrid","country":"Spain","lat":40.45,"lon":-3.58,"url":"barrio-la-alameda-de-osuna-madrid-spain"},{"id":696555,"name":"Alameda De Osuna","region":"Madrid","country":"Spain","lat":40.45,"lon":-3.58,"url":"alameda-de-osuna-madrid-spain"},{"id":711291,"name":"La Alameda De Osuna","region":"Madrid","country":"Spain","lat":40.45,"lon":-3.58,"url":"la-alameda-de-osuna-madrid-spain"},{"id":701838,"name":"Casa De Quintana","region":"Madrid","country":"Spain","lat":40.47,"lon":-3.52,"url":"casa-de-quintana-madrid-spain"},{"id":719470,"name":"Quintana","region":"Madrid","country":"Spain","lat":40.47,"lon":-3.52,"url":"quintana-madrid-spain"},{"id":699184,"name":"Barrio Puente-Viveros","region":"Madrid","country":"Spain","lat":40.45,"lon":-3.53,"url":"barrio-puente-viveros-madrid-spain"}];
    displaySuggestionList(data);
});
