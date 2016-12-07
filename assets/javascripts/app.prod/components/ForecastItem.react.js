(function (React, App) {
    App.Components.ForecastItem = React.createClass({displayName: "ForecastItem",

        propTypes: {
            forecast: React.PropTypes.object.isRequired
        },

        render: function () {

            var forecast = this.props.forecast;

            return (
                React.createElement("li", {key: forecast.id}, 
                    React.createElement("p", null, forecast.basicDescription), 
                    React.createElement("p", null, forecast.detailedDescription)
                )
                );
        }

    });
})(React, App);
