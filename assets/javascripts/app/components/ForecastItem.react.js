(function (React, App) {
    App.Components.ForecastItem = React.createClass({

        propTypes: {
            forecast: React.PropTypes.object.isRequired
        },

        render: function () {

            var forecast = this.props.forecast,
                date = new Date(forecast.id * 1000),
                days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

            return (
                <li key={forecast.id} className={'forecast-item ' + forecast.basicDescription.toLowerCase()}>
                    <h2>{days[date.getDay()] + ' ' + date.getHours() + ':00'}</h2>
                    <p>{forecast.detailedDescription}</p>
                </li>
                );
        }

    });
})(React, App);
