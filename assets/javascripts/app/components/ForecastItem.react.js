(function (React, App) {
    App.Components.ForecastItem = React.createClass({

        propTypes: {
            forecast: React.PropTypes.object.isRequired
        },

        render: function () {

            var forecast = this.props.forecast;

            return (
                <li key={forecast.id}>
                    <p>{forecast.basicDescription}</p>
                    <p>{forecast.detailedDescription}</p>
                </li>
                );
        }

    });
})(React, App);
