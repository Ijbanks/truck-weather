# truck-weather
## Endpoint
"https://api.open-meteo.com/v1/forecast?latitude=29.9547&longitude=-90.0751&current=temperature_2m,is_day,wind_speed_10m,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit";

## What I changed using the docs
I added wind_speed_unit from km/h to mph, timezone=auto, and Icon.
Before: Wind speed was km/h, timezone was GMT, and there was no icon
After: Wind speed is now mph, timezone is now America/Chicago, and there's icons in place based of the weather 🌞🌨️❄️🌫️

## Live site
https://ijbanks.github.io/truck-weather/