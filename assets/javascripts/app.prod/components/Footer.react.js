(function (React, App) {

    App.Components.Footer = React.createClass({displayName: "Footer",
        render: function() {
            return(
                React.createElement("div", {className: "footer"}, 
                    React.createElement("a", {className: "link", href: "https://github.com/Ashdown/weather-forecast"}, "Weather Forecast on github")
                )
                );
        }
    });

})(React, App);