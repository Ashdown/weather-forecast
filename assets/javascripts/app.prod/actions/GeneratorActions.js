(function(React, App) {

    App.Actions.Generator = {
        create: function () {

            var appId = '73a728007db1c6a51c1206378313c09f';

            //get current location

            navigator.geolocation.getCurrentPosition(function(position) {

                //ajax to open weather map

                fetch('http://api.openweathermap.org/data/2.5/forecast?lat='
                    + position.coords.latitude
                    + '&lon='
                    + position.coords.longitude
                    + '&mode=json'
                    + '&APPID=' + appId, {
                    method: 'get'
                }).then(function(response) {

                    //format into json
                    return response.json();

                }).then(function(responseAsJson) {

                    //extract the data we are interested in

                    var data = new Array(),
                        i;
                    for(i = 0;i < responseAsJson.list.length; i++) {
                        data.push({
                            id : responseAsJson.list[i].dt,
                            basicDescription : responseAsJson.list[i].weather[0].main,
                            detailedDescription : responseAsJson.list[i].weather[0].description
                        });
                    }
                    App.Dispatcher.handleViewAction({
                        actionType: App.Constants.GeneratorConstants.FORECAST_CREATE,
                        data: data
                    })

                }).catch(function(err) {
                    //handle error
                });

            });

        }
    };

})(React, App);