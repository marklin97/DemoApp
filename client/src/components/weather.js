import React, { useEffect, useState } from 'react'
import backgroundImage from '../Resources/background.jpg'
import leftArrow from '../Resources/leftArrow.png'
import rightArrow from '../Resources/rightArrow.png'
import refreshIcon from '../Resources/refresh.png'
import rainIcon from '../Resources/rain.png'
import snowIcon from '../Resources/snow.png'
import sunnyIcon from '../Resources/sunny.png'
import thunderStormIcon from '../Resources/thunderStorm.png'

import axios from 'axios'

var cities = ['Sydney', 'Brisbane', 'Melbourne']

const Weather = () => {
  const [weather, setWeather] = useState('')
  const [index, setIndex] = useState(0)
  const getWeather = async cityName => {
    console.log(cityName)
    const config = {
      params: {
        city: cityName
      }
    }
    try {
      const res = await axios.get('/weather', config)
      if (!weather[cityName]) {
        console.log('here you go')
        setWeather({
          ...weather,
          [cityName]: {
            description: res.data.result.description,
            lowestTemperature: res.data.result.lowestTemperature,
            highestTemperature: res.data.result.highestTemperature,
            currentTemperature: res.data.result.currentTemperature
          }
        })
      }
    } catch (err) {
      console.error(err)
    }
  }
  const handleImage = weather => {
    if (weather === 'Rain') {
      return <img src={rainIcon} alt={'Rain'} style={style.centerImage} />
    } else if (weather === 'Snow') {
      return <img src={snowIcon} alt={'Snow '} style={style.centerImage} />
    } else if (weather === 'Sunny') {
      return <img src={sunnyIcon} alt={'Sun'} style={style.centerImage} />
    } else {
      return (
        <img
          src={thunderStormIcon}
          alt={'ThunderStorm'}
          style={style.centerImage}
        />
      )
    }
  }
  const handleRightClick = () => {
    if (index >= 2) {
      setIndex(0)
      getWeather(cities[0])
    } else {
      setIndex(index + 1)
      getWeather(cities[index + 1])
    }
  }
  const handleLeftClick = () => {
    if (index <= 0) {
      setIndex(2)
      getWeather(cities[2])
    } else {
      setIndex(index - 1)
      getWeather(cities[index - 1])
    }
  }

  useEffect(() => {
    getWeather(cities[0])
  }, [])

  return (
    <div style={style.backgroundImage}>
      <h2 style={style.header}>{cities[index]}</h2>
      <div style={{ display: 'block', justifyContent: 'space-between' }}>
        <button style={style.leftArrow} onClick={handleLeftClick}>
          <img
            style={{ width: '100%' }}
            alt={'rightArrow'}
            src={leftArrow}
          ></img>
        </button>

        {weather[cities[index]] ? (
          handleImage(weather[cities[index]].description)
        ) : (
          <img src={refreshIcon} alt={'refresh'} style={style.centerImage} />
        )}
        <button style={style.rightArrow} onClick={handleRightClick}>
          <img
            style={{ width: '100%' }}
            alt={'rightArrow'}
            src={rightArrow}
          ></img>
        </button>
      </div>
      <div style={style.currentTemperature}>
        {weather[cities[index]]
          ? weather[cities[index]].currentTemperature + '°C'
          : ''}
      </div>
      <div style={{ display: 'block' }}>
        <div style={style.lowestTemperature}>
          {weather[cities[index]]
            ? weather[cities[index]].lowestTemperature + '°C'
            : ''}
        </div>
        <div style={style.highestTemperature}>
          {weather[cities[index]]
            ? weather[cities[index]].highestTemperature + '°C'
            : ''}
        </div>
      </div>
      <div style={style.description}>
        {weather[cities[index]] ? weather[cities[index]].description : ''}
      </div>
    </div>
  )
}

const style = {
  header: {
    position: 'absolute',
    marginTop: '25vh',
    fontSize: '25px',
    color: 'white',
    width: '100%',
    textAlign: 'center'
  },
  backgroundImage: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',

    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent'
  },

  leftArrow: {
    marginLeft: '30vw',
    marginTop: '40vh',
    float: 'left',
    maxWidth: '15%'
  },
  rightArrow: {
    marginRight: '30vw',
    marginTop: '40vh',
    float: 'right',
    maxWidth: '15%'
  },
  centerImage: {
    position: 'absolue',
    marginTop: '35vh',
    marginLeft: '2.5vw',
    maxWidth: '15%'
  },
  currentTemperature: {
    marginTop: '2vh',
    fontSize: '25px',
    color: 'white',
    width: '100%',
    textAlign: 'center'
  },
  lowestTemperature: {
    marginTop: '10vh',
    color: 'white',
    fontSize: '25px',
    float: 'left',
    marginLeft: '40vw'
  },
  highestTemperature: {
    marginTop: '10vh',
    color: 'white',
    fontSize: '25px',
    float: 'right',
    marginRight: '40vw'
  },
  description: {
    fontSize: '25px',
    color: 'white',
    marginTop: '20vh',
    textAlign: 'center'
  }
}
export default Weather
