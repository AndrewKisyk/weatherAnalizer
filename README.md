# Weather Analizer
It is an app for finding best places to rest.

Currently under development.

This site is fully static.

## Usage
At first in input bar you write place or places with comma in between.

Then, after pressing the button you get list of places ranked based on weather in them during the week.

You can find specific formula for rank cumputing later.

List is created in the way that top first place is the best for visiting.

You can filter places by differnt days during the week.

## Formula for ranking

```javascript
Math.floor(1000-((Math.abs(feels_like-22) + Math.sqrt(100*((rain + snow))/24) + Math.pow(wind_speed/12, 2))*10 + clouds))
```

## Developers

This project was developed for **hackaton 2020** by
[ChaosGuru](https://github.com/ChaosGuru)
[AndrewKisyk](https://github.com/AndrewKisyk)
[lvivct](https://github.com/lvivct)