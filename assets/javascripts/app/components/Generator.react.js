(function (React, App) {
    App.Components.Generator = React.createClass({

        render: function () {

            return (
                <a className="generator" href="#" onClick={this._onGenerateForecast}>Generate forecast</a>
                );

        },

        _onGenerateForecast: function() {

            App.Actions.Generator.create();
        }
    });

})(React, App);