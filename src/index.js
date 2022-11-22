const tempDisplay = document.getElementById('temp-display')  
          const cityName = 'St Louis'
          const apikey = '62ef1d4e9a1052d10b52a1e2ef1dc845'
          getWeather(cityName, apikey, (json) => {
            tempDisplay.innerHTML = json.main.temp
          })