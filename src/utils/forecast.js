const request = require('request')
const { error } = require('console')

const forecast = (lat, long, callback) =>{
    
    const url = 'http://api.weatherstack.com/current?access_key=bb43692329d4f8b737326b1e8b21e2da&query='+encodeURIComponent(lat)+','+encodeURIComponent(long)

    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback('Not connected to weather service')
        }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined, {
                forecast: 'It is currently '+body.current.temperature+' degrees outside. It feels like '+body.current.feelslike+' degrees . Weather is '+ body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast