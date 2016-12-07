(function(React, App) {

    App.Actions.Generator = {
        create: function () {

            var appId = '73a728007db1c6a51c1206378313c09f';

            //get current location

            console.log('test');

            navigator.geolocation.getCurrentPosition(function(position) {

                fetch('http://api.openweathermap.org/data/2.5/forecast?lat='
                    + position.coords.latitude
                    + '&lon='
                    + position.coords.longitude
                    + '&mode=json'
                    + '&APPID=' + appId, {
                    method: 'get'
                }).then(function(response) {

                    console.log('response');

                    return response.json();

                    //get only the data we are interested in
                }).then(function(responseAsJson) {
                    console.log(responseAsJson.list.length);
                    var data = new Array(),
                        i;
                    for(i = 0;i < responseAsJson.list.length; i++) {
                        data.push({
                            basicDescription : responseAsJson.list[i].weather[0].main,
                            detailedDescription : responseAsJson.list[i].weather[0].description
                        });
                    }
                    console.log(data);
                    App.Dispatcher.handleViewAction({
                        actionType: App.Constants.GeneratorConstants.GENERATE,
                        data: data
                    })

                }).catch(function(err) {
                    //handle error
                });

            });



            //make json request to this location

            //update app accordinglyF

//            App.Dispatcher.handleViewAction({
//                actionType: App.Constants.TodoConstants.TODO_CREATE,
//                text: text
//            });
        }
    };

})(React, App);