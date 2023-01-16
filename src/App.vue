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
    
<section class="vh-100">
  <div class="container py-5 h-100">

    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-7 col-xl-5">

        <div class="card mb-4 gradient-custom" style="border-radius: 25px;">
          <div class="card-body p-4">

            <div id="demo1" class="carousel slide" data-ride="carousel">
              <!-- Carousel inner -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-between mb-4 pb-2">
                    <div>
                      <h2 class="display-2">{{weather.temperature}}</h2>
                      <p class="text-muted mb-0">{{ weather.cityName}}, {{ weather.country}}</p>
                      <span> {{ weather.description}}</span>
                    </div>
                    <div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                        width="150px">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="card mb-4" style="border-radius: 25px;">
          <div class="card-body p-4">

            <div id="demo2" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators mb-0">
                <li data-target="#demo2" data-slide-to="0"></li>
                <li data-target="#demo2" data-slide-to="1" class="active"></li>
                <li data-target="#demo2" data-slide-to="2"></li>
              </ul>
              <!-- Carousel inner -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div class="flex-column">
                      <p class="small"><strong>21°C</strong></p>
                      <i class="fas fa-sun fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>12:00</strong></p>
                      <p class="mb-0 text-muted" style="font-size: .65rem;">PM</p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>2°C</strong></p>
                      <i class="fas fa-sun fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>1:00</strong></p>
                      <p class="mb-0 text-muted" style="font-size: .65rem;">PM</p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>20°C</strong></p>
                      <i class="fas fa-cloud fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>2:00</strong></p>
                      <p class="mb-0 text-muted" style="font-size: .65rem;">PM</p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>19°C</strong></p>
                      <i class="fas fa-cloud fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>3:00</strong></p>
                      <p class="mb-0 text-muted" style="font-size: .65rem;">PM</p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>18°C</strong></p>
                      <i class="fas fa-cloud-showers-heavy fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>4:00</strong></p>
                      <p class="mb-0 text-muted" style="font-size: .65rem;">PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="card" style="border-radius: 25px;">
          <div class="card-body p-4">

            <div id="demo3" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators mb-0">
                <li data-target="#demo3" data-slide-to="0"></li>
                <li data-target="#demo3" data-slide-to="1"></li>
                <li data-target="#demo3" data-slide-to="2" class="active"></li>
              </ul>
              <!-- Carousel inner -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div class="flex-column">
                      <p class="small"><strong>21°C</strong></p>
                      <i class="fas fa-sun fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>Mon</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>20°C</strong></p>
                      <i class="fas fa-sun fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>Tue</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>16°C</strong></p>
                      <i class="fas fa-cloud fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>Wed</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>17°C</strong></p>
                      <i class="fas fa-cloud fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>Thu</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>18°C</strong></p>
                      <i class="fas fa-cloud-showers-heavy fa-2x mb-3" style="color: #ddd;"></i>
                      <p class="mb-0"><strong>Fri</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>

</div>
</template>


<script>
import moment from 'moment';
export default {
  data(){
    return{
      citySearch: "",
      weather:{
        cityName:"Amsterdam",
        country: "NL",
        temperature:"",
        description :"Chances of rain",
        lowTemp: "19",
        highTemp:"30",
        feelsLike: "15",
        humidity:"55",
        day:moment().format('dddd') ,
        date : moment().format('MMMM Do YYYY'),
        
      },
    };
  }, 
  methods:{
    getWeather: async function () {
      console.log(this.citySearch);
      const key ="725578c73a2f27671e556de5b5bba29a";
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
