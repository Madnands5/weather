import {FETCHDATA,FETCHFAIL} from './actiontypes';


export function fetchPosts() {
	return (dispatch) => {
		fetch('http://localhost:5000/api/all')
			.then(res => res.json())
			.then(weather => {
				console.log(weather.weatherdata);
				if (weather.status === 1) {
					console.log("gotit")

					dispatch({

						type: FETCHDATA,
						city: weather.weatherdata.name,
						humidity: weather.weatherdata.main.humidity,
						temprature: weather.weatherdata.main.temp,
            status:weather.status,
            message:""
					})
        }
        else{
          dispatch({

						type: FETCHFAIL,
						message:weather.weatherdata

					})
        }
			});
	}
}
