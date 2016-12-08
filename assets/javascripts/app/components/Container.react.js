(function (React, App) {

    function getForecastState() {
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
                <div className="container">
                    <App.Components.ForecastList
                        weatherForecasts={this.state.weatherForecasts} />
                    <App.Components.Generator />
                    <App.Components.Footer />
                </div>
                );
        },

        _onChange: function () {
            this.setState(getForecastState());
        }

    });

})(React, App);