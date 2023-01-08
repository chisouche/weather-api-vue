<template>
<div id="main">
    <div class="container-fluid center-text">
      <h1 class="title">Weather App</h1> 
          <form class="search-location" v-on:submit.prevent="getWeather">
              <input 
                type="text"
                class="form-control text-muted form-rounded p-4 shadow-sm"
                placeholder="What City?"
                v-model="citySearch"
                autocomplete="off"
              />
            </form>
    </div>
    <div class="page-content page-container " id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-lg-8 grid-margin">
                  <!--weather card-->
                  <div class="card card-weather">
                    <div class="card-body">
                      <div class="weather-date-location">
                        <h3>{{weather.day}}</h3>
                        <p class="text-gray">
                          <span class="weather-date">{{weather.date}}</span><br>
                          <span class="weather-location">{{weather.cityName}}, {{weather.country}}</span>
                        </p>
                      </div>
                      <div class="weather-data d-flex">
                        <div class="mr-auto">
                          <h4 class="display-3">{{weather.temperature}}
                            <span class="symbol">&deg;</span>C</h4>
                          <p>
                            {{weather.description}}
                            <!--add icon-->
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body p-0">
                      <div class="d-flex weakly-weather">
                        <div class="weakly-weather-item">
                          <p class="mb-0">
                            Sun
                          </p>
                          <i class="mdi mdi-weather-cloudy"></i>
                          <p class="mb-0">
                            30&deg;
                          </p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">
                            Mon
                          </p>
                          <i class="mdi mdi-weather-hail"></i>
                          <p class="mb-0">
                            31&deg;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--weather card ends-->
                </div>
                </div>
                </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      citySearch: "",
      weather:{
        cityName:"Amsterdam",
        country: "NL",
        temperature:12,
        description :"Chances of rain",
        lowTemp: "19",
        highTemp:"30",
        feelsLike: "15",
        humidity:"55",
        day: "Tuesday",
        date : "8 january, 2023"
        
      },

    };
  }, 

  methods:{
    getWeather: async function () {
      console.log(this.citySearch);
      const key ="a91086b0c7c1845f0d772592b1d4136a";
      const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&exclude=current,hourly,minutely,alerts&units=metric`;
      
      const response = await fetch(baseURL)
      const data = await response.json()
      console.log(data);
      this.citySearch = "";
      this.weather.cityName = data.name;
      this.weather.country = data.sys.country;
      this.weather.temperature = Math.round(data.main.temp);
      this.weather.description= data.weather[0].description;
     

  }
  }
};
</script>

<style>
@import "./assets/custom.css";
</style>
