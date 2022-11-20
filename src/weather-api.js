function getWeather() {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`

    fetch(path).then((res) => {
        return res.json()
    }).then((json) => {
        console.log(json)
    })
  }