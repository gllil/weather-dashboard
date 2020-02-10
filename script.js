// const apiKey = "d0a375328afdfa592d8c75ccd455a704";
// const apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid="+apiKey;
var cityName = "";
var unixtimestamp = "";
var searchValue = $(".search-click").val();
// var dateArr = ["0", "1", "2","3","4"];




$(document).ready(function(){

// cityName = $(".search").text();

// console.log(cityName)

$(".search").on("change", function(){
    cityName = $(this).val();
    history();
    // weatherInfo();

    // function weatherInfo(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=d0a375328afdfa592d8c75ccd455a704",
        method: "GET"
    }).then(function(res){
            $(".city").html(res.name)
            $(".temperature").html(Math.round(res.main.temp));
            $(".humidity").html(res.main.humidity);
            $(".wind").html(Math.round(res.wind.speed));
            var iconcode = res.weather[0].icon;
            longtitude = res.coord.lon;
            latitude = res.coord.lat;
            // console.log(iconcode)
            var iconurl = "http://openweathermap.org/img/w/" + iconcode+ ".png";
            $(".main-weather-icon").attr("src", iconurl);

            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/uvi?appid=d0a375328afdfa592d8c75ccd455a704&lat=" + latitude + "&lon=" + longtitude,
                method: "GET"
            }).then(function(res2){
                $(".uv-index").html(res2.value)
            })
            // var dateStamp = res.dt;
            dateConversion();
            function dateConversion(){
                var dateStamp = res.dt;
                var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                var date = new Date(dateStamp*1000);
                var year = date.getFullYear();
                var month = months[date.getMonth()];
                var day = date.getDate();
                console.log(date)
            
                var convertDate = month+'/'+day+'/'+year;
                $(".date").html(convertDate); 
            }
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=d0a375328afdfa592d8c75ccd455a704",
                method: "GET"
            }).then(function (res3){

                //weather icons for 5 day forecast
                var iconCode1 = res3.list[0].weather[0].icon
                var iconCode2 = res3.list[1].weather[0].icon
                var iconCode3 = res3.list[2].weather[0].icon
                var iconCode4 = res3.list[3].weather[0].icon
                var iconCode5 = res3.list[4].weather[0].icon
                var iconUrl1 = "http://openweathermap.org/img/w/" + iconCode1+ ".png";
                var iconUrl2= "http://openweathermap.org/img/w/" + iconCode2+ ".png";
                var iconUrl3 = "http://openweathermap.org/img/w/" + iconCode3+ ".png";
                var iconUrl4 = "http://openweathermap.org/img/w/" + iconCode4+ ".png";
                var iconUrl5 = "http://openweathermap.org/img/w/" + iconCode5+ ".png";
            $("#icon1").attr("src", iconUrl1);
            $("#icon2").attr("src", iconUrl2);
            $("#icon3").attr("src", iconUrl3);
            $("#icon4").attr("src", iconUrl4);
            $("#icon5").attr("src", iconUrl5);

                //temperature for 5 day forecast
            $(".forecastTemp1").html(Math.round(res3.list[0].main.temp));
            $(".forecastTemp2").html(Math.round(res3.list[1].main.temp));
            $(".forecastTemp3").html(Math.round(res3.list[2].main.temp));
            $(".forecastTemp4").html(Math.round(res3.list[3].main.temp));
            $(".forecastTemp5").html(Math.round(res3.list[4].main.temp));

                //humidity for 5 day forecast
            $(".foreHumidity1").html(res3.list[0].main.humidity);
            $(".foreHumidity2").html(res3.list[1].main.humidity);
            $(".foreHumidity3").html(res3.list[2].main.humidity);
            $(".foreHumidity4").html(res3.list[3].main.humidity);
            $(".foreHumidity5").html(res3.list[4].main.humidity);

                

                    
            dateConversion1();
            function dateConversion1(){
                var dateStamp = res3.list[0].dt;
                var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                var date = new Date(dateStamp*1000);
                var year = date.getFullYear();
                var month = months[date.getMonth()];
                var day = date.getDate() + 1;
                var convertDate = month+'/'+day+'/'+year;
                $(".day-date1").html(convertDate); 
                console.log(dateStamp)
            }
            console.log(dateConversion1());
                    
                    
        

            dateConversion2();
            function dateConversion2(){
                var dateStamp = res3.list[1].dt;
                var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                var date = new Date(dateStamp*1000);
                var year = date.getFullYear();
                var month = months[date.getMonth()];
                var day = date.getDate() + 2;
                var convertDate = month+'/'+day+'/'+year;
                $(".day-date2").html(convertDate); 
                console.log(dateStamp)
            }
            console.log(dateConversion2());
                    
                    
        

            dateConversion3();
            function dateConversion3(){
                var dateStamp = res3.list[2].dt;
                var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                var date = new Date(dateStamp*1000);
                var year = date.getFullYear();
                var month = months[date.getMonth()];
                var day = date.getDate() + 3;
            
                var convertDate = month+'/'+day+'/'+year;
                $(".day-date3").html(convertDate); 
                convertDate++
                console.log(dateStamp)
            }
            console.log(dateConversion3());
                    
                    
    

            dateConversion4();
            function dateConversion4(){
                var dateStamp = res3.list[3].dt;
                var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                var date = new Date(dateStamp*1000);
                var year = date.getFullYear();
                var month = months[date.getMonth()];
                var day = date.getDate() + 4;
            
                var convertDate = month+'/'+day+'/'+year;
                $(".day-date4").html(convertDate); 
                convertDate++
                console.log(dateStamp)
            }
            console.log(dateConversion4());
                    
                    


            dateConversion5();
            function dateConversion5(){
                var dateStamp = res3.list[4].dt;
                var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                var date = new Date(dateStamp*1000);
                var year = date.getFullYear();
                var month = months[date.getMonth()];
                var day = date.getDate() + 5;
            
                var convertDate = month+'/'+day+'/'+year;
                $(".day-date5").html(convertDate);
                convertDate++
                console.log(dateStamp) 
            }
            console.log(dateConversion5());
                    
                    
            })

            
            
    });



    // console.log(cityName)

            

    // $.ajax({
    //     url: "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=d0a375328afdfa592d8c75ccd455a704",
    //     method: "GET"
    // }).then(function(res3){
    //    for (var i = 0; i < res3.list.length; i++){
    //        var date = moment().format("mmddyyyy");
    //    }

    // });
});



    // $(".search-history").on("click", function(){
        
        
    // })
var counter = 0
function history(){
    counter++;
    if(counter <= 5)
    var searchHistory = $("<a>").html(cityName);
    $(".search-history").append(searchHistory);
    $(".search-history").show();
    // $(".search-history").addClass("collection")
    searchHistory.addClass("collection-item btn");
    searchHistory.attr("href", "#!");
}


// $(".search-click").on("submit", function(e){
//     e.preventDefault();
//     cityName = $(this).val();
// weatherInfo()
// })


});

