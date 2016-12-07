(function (React, App) {
    App.Components.Forecast = React.createClass({

        render: function () {

            var weatherForecasts = this.props.weatherForecasts,
                forecastItems = [];

            for (var key in forecastItems) {
                forecastItems.push(<App.Components.ForecastItem key={key} todo={forecastItems[key]} />);
            }

            return (
                <section>
                    <h1>Forecast will go here</h1>
                    <ul>{forecastItems}</ul>
                </section>
                );
        }
    });

})(React, App);