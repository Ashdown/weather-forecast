(function (React, App) {
    App.Components.ForecastList = React.createClass({displayName: "ForecastList",

        render: function () {

            var weatherForecasts = this.props.weatherForecasts,
                forecastItems = [];

            for (var key in weatherForecasts) {
                forecastItems.push(React.createElement(App.Components.ForecastItem, {key: key, forecast: weatherForecasts[key]}));
            }

            return (
                React.createElement("section", null, 
                    React.createElement("h1", null, "Forecast will go here"), 
                    React.createElement("ul", null, forecastItems)
                )
                );
        }
    });

})(React, App);