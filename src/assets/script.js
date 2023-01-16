import moment from 'moment';

export default {
  data(){
    return{
      citySearch: "",
      weather:{
        cityName:"Amsterdam",
        country: "NL",
        temperature:"10",
        description :"Chances of rain",
        lowTemp: "19",
        highTemp:"30",
        feelsLike: "15",
        humidity:"55",
        day:moment().format('dddd') ,
        date : moment().format('MMMM Do YYYY'),
        icon: "",
        
      },
    };
  }, 
  methods:{
    getWeather: async function () {
      console.log(this.citySearch);
      const key ="725578c73a2f27671e556de5b5bba29a";
      const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&exclude=current,hourly,minutely,alerts&units=metric`;
      
      //fetch weather
      try{

      const response = await fetch(baseURL)
      const data = await response.json()
      console.log(data);
      this.citySearch = "";
      this.weather.cityName = data.name;
      this.weather.country = data.sys.country;
      this.weather.temperature = Math.round(data.main.temp);
      this.weather.description= data.weather[0].description;

  
        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
        this.cityFound = true;
        this.visible = false;
      }
    },
  },
};
