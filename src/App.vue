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
                              <h3>{{weather.day }}</h3>
                              <h4> {{weather.date}}</h4>
                              <div id="demo1" class="carousel slide" data-ride="carousel">
                                <!-- Carousel inner -->
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                    <div class="d-flex justify-content-between mb-4 pb-2">
                                      <div>
                                        <h2 class="display-2">{{weather.temperature}}&deg;C</h2>
                                        <p class="text-muted mb-0">{{ weather.cityName}}, {{ weather.country}}</p>
                                        <span> {{ weather.description}}</span>
                                      </div>
                                      <div class="icon">
                                          <img src="`http://openweathermap.org/img/w/${d.weather[0].icon}.png`">
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
                          <!-- Carousel inner -->
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <div class="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                <div class="flex-column">
                                  <p class="small"><strong>21°C</strong></p>
                                  <i class="fas fa-sun fa-2x mb-3" style="color: #ddd;"></i>
                                  <p class="mb-0"><strong>
                                      <span></span>
                                    </strong>
                                  </p>
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


<script src="./assets/script.js"></script>

<style>
@import "./assets/custom.css";
</style>
