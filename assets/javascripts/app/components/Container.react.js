(function (React, App) {

    function getForecastState() {
        console.log(App.Stores.ForecastStore.getAll());

        return {
            weatherForecasts: App.Stores.ForecastStore.getAll()
        };
    }

    App.Components.Container = React.createClass({
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
                <div>
                    <App.Components.Generator />
                    <App.Components.Forecast
                        weatherForecasts={this.state.weatherForecasts} />
                    <App.Components.Footer />
                </div>
                );
        },

        _onChange: function () {
            console.log('on change in container');
            this.setState(getForecastState());
        }

    });

})(React, App);