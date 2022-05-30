const iss_api_result_btn = document.getElementById('iss_api_result_btn');
const iss_api_longitude = document.getElementById('iss_api_longitude');
const iss_api_latitude = document.getElementById('iss_api_latitude');

iss_api_result_btn.addEventListener('click', getAPI);
let endPoint = 'http://api.open-notify.org/iss-now.json';

    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        iss_api_longitude.innerHTML='Longitude is: ' + data.iss_position.longitude;
        iss_api_latitude.innerHTML='Latitude is: ' + data.iss_position.latitude;
    });
}