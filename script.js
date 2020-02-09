// const apiKey = "d0a375328afdfa592d8c75ccd455a704";
// const apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid="+apiKey;
var cityName = "";
var unixtimestamp = "";



$(document).ready(function(){

// cityName = $(".search").text();

// console.log(cityName)

$(".search").on("change", function(){
    cityName = $(this).val();
    history();
   

    // console.log(cityName)
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
            console.log(iconcode)
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
            
                var convertDate = month+'/'+day+'/'+year;
                $(".date").html(convertDate); 
            }
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=d0a375328afdfa592d8c75ccd455a704",
                method: "GET"
            }).then(function (res3){
                    // var listNumber = ""
                for(var i = 0; i < res3.list.length; i++){
                    function dateConversion(){
                        var dateStamp = res3.list[i].dt;
                        var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
                        var date = new Date(dateStamp*1000);
                        var year = date.getFullYear();
                        var month = months[date.getMonth()];
                        var day = date.getDate();
                    
                        var convertDate = month+'/'+day+'/'+year;
                        convertDate++
                        $(".day-date").html(convertDate); 
                    }
                    // listNumber = 0;
                    
                var dateText = $("<div>").html(res3.list[i].dt);

                dateText.addClass("day-date");
                dateText.attr("data-index", i);
                dateText.dateConversion();

                $(".day").append(dateText);
                }  
                    
            })
            
    });
            

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

function history(){
    var searchHistory = $("<a>").html(cityName);
    $(".search-history").append(searchHistory);
    $(".search-history").addClass("collection")
    searchHistory.addClass("collection-item");
    searchHistory.attr("href", "#!");
}

});

