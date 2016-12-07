(function (React, App) {
    App.Components.ForecastItem = React.createClass({

        propTypes: {
            forecast: React.PropTypes.object.isRequired
        },

        render: function () {

            var forecast = this.props.forecast;

            return (
                <li key={forecast.id}>
                    <label>
                    {forecast.text}
                    </label>
                </li>
                );
        }

    });
})(React, App);
