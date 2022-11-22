function getWeather(zip, apikey, success) {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`

    fetch(path).then((res) => {
        return res.json()
    }).then((json) => {
        success(json)
    })
  }