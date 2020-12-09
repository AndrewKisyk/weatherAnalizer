# Weather Analizer
It is an app for finding best places to rest.

Currently under development.

This site is fully static.

Choosen category is traveling.

## Usage

Visit this [web site](https://hackaton-42a97.web.app/) 

At first in input bar you write place or places with comma in between.

Then, after pressing the button you get list of places ranked based on weather in them during the week.

You can find specific formula for rank cumputing later.

List is created in the way that top first place is the best for visiting.

You can filter places by differnt days during the week.

## Used API
[Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
[Weather API](https://openweathermap.org/api)

## Formula for ranking

```javascript
Math.floor(1000-((Math.abs(feels_like-22) + Math.sqrt(100*((rain + snow))/24) + Math.pow(wind_speed/12, 2))*10 + clouds))
```

## Developers

This project was developed for **hackaton 2020** by
[ChaosGuru](https://github.com/ChaosGuru) - api parsing and some logic  
[AndrewKisyk](https://github.com/AndrewKisyk) - api and front-end  
[lvivct](https://github.com/lvivct) - project logic  