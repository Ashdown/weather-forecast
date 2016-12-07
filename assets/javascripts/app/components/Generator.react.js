(function (React, App) {
    App.Components.Generator = React.createClass({

        render: function () {

            return (
                <section>
                    <a href="#" onClick={this._onGenerateForecast}>Generate forecast</a>
                </section>
                );

        },

        _onGenerateForecast: function() {

            App.Actions.Generator.create();
        }
    });

})(React, App);