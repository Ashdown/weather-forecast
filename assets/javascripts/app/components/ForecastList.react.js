(function (React, App) {
    App.Components.ForecastList = React.createClass({

        render: function () {

            var weatherForecasts = this.props.weatherForecasts,
                forecastItems = [];

            for (var key in weatherForecasts) {
                forecastItems.push(<App.Components.ForecastItem key={key} forecast={weatherForecasts[key]} />);
            }

            return (
                <section>
                    <ul className="forecast-list">{forecastItems}</ul>
                </section>
                );
        }
    });

})(React, App);