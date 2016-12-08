(function (React, App) {
    App.Components.Generator = React.createClass({displayName: "Generator",

        render: function () {

            return (
                React.createElement("a", {className: "generator", href: "#", onClick: this._onGenerateForecast}, "Generate forecast")
                );

        },

        _onGenerateForecast: function() {

            App.Actions.Generator.create();
        }
    });

})(React, App);