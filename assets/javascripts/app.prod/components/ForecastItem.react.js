(function (React, App) {
    App.Components.ForecastItem = React.createClass({displayName: "ForecastItem",

        propTypes: {
            forecast: React.PropTypes.object.isRequired
        },

        render: function () {

            var forecast = this.props.forecast,
                date = new Date(forecast.id * 1000),
                days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

            return (
                React.createElement("li", {key: forecast.id, className: 'forecast-item ' + forecast.basicDescription.toLowerCase()}, 
                    React.createElement("h2", null, days[date.getDay()] + ' ' + date.getHours() + ':00'), 
                    React.createElement("p", null, forecast.detailedDescription)
                )
                );
        }

    });
})(React, App);
