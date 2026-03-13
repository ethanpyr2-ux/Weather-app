# Weather App

A simple weather application that displays current weather conditions for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search for weather by city name
- Displays temperature, weather description, humidity, and wind speed
- Weather icons change based on current conditions
- "City not found" feedback when the city is unknown
- Keyboard support (press **Enter** to search)

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ethanpyr2-ux/Weather-app.git
   cd Weather-app
   ```

2. **Create your configuration file**

   ```bash
   cp config.example.js config.js
   ```

3. **Add your OpenWeatherMap API key**

   Open `config.js` and replace `YOUR_API_KEY_HERE` with your actual key:

   ```js
   const CONFIG = {
       API_KEY: 'your_actual_api_key'
   };
   ```

   You can get a free API key by signing up at [openweathermap.org](https://openweathermap.org/api).

4. **Open `index.html` in your browser**

   No build step required — just open the file directly.

   > **Note:** Before you create `config.js`, the browser console will show a network error for the missing file — this is expected.

> **Note:** `config.js` is listed in `.gitignore` and will never be committed, keeping your API key private.
