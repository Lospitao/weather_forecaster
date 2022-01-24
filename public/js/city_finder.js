function checkCityNameEvent(city_name) {

    let findCityWebService = API_DOMAIN +'/find/city/forecast/' + city_name ;

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

$(document).ready(function() {
    findCityEvent();
});
