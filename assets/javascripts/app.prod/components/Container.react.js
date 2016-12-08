(function (React, App) {

    function getForecastState() {
        return {
            weatherForecasts: App.Stores.ForecastStore.getAll()
        };
    }

    App.Components.Container = React.createClass({displayName: "Container",
        getInitialState: function () {
            return getForecastState();
        },

        componentDidMount: function () {
            App.Stores.ForecastStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function () {
            App.Stores.ForecastStore.removeChangeListener(this._onChange);
        },

        /**
         * @return {object}
         */
        render: function () {
            return (
                React.createElement("div", {className: "container"}, 
                    React.createElement(App.Components.ForecastList, {
                        weatherForecasts: this.state.weatherForecasts}), 
                    React.createElement(App.Components.Generator, null), 
                    React.createElement(App.Components.Footer, null)
                )
                );
        },

        _onChange: function () {
            this.setState(getForecastState());
        }

    });

})(React, App);