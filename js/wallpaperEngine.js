var wallpaperEngine = {};

wallpaperEngine.init = function() {
    window.wallpaperPropertyListener = {
        applyUserProperties: (properties) => {
            if (properties.autoplayonsgfload) {
                settings.startTimerOnSGFLoad = properties.autoplayonsgfload.value;
            }

            if (properties.showsgfname) {
                if (properties.showsgfname.value) {
                    sgfController.sgfNameElement.style.color = "var(--color-primary)";
                } else {
                    sgfController.sgfNameElement.style.color = "var(--color-background)";
                }
            }

            if (properties.startingmovestoskip) {
                settings.startingMovesToSkip = properties.startingmovestoskip.value;
            }

            if (properties.primarycolor) {
                let color = properties.primarycolor.value.split(' ');
                color = color.map((c) => {
                    return Math.ceil(c * 255);
                });
                let colorRGB = 'rgb(' + color + ')';

                document.documentElement.style.setProperty("--color-primary", colorRGB);
            }
            
            if (properties.backgroundcolor) {
                let color = properties.backgroundcolor.value.split(' ');
                color = color.map((c) => {
                    return Math.ceil(c * 255);
                });
                let colorRGB = 'rgb(' + color + ')';

                document.documentElement.style.setProperty("--color-background", colorRGB);
            }
            
            if (properties.boardcolor) {
                let color = properties.boardcolor.value.split(' ');
                color = color.map((c) => {
                    return Math.ceil(c * 255);
                });
                let colorRGB = 'rgb(' + color + ')';

                document.documentElement.style.setProperty("--color-board", colorRGB);
            }

            if (properties.boardlinescolor) {
                let color = properties.boardlinescolor.value.split(' ');
                color = color.map((c) => {
                    return Math.ceil(c * 255);
                });
                let colorRGB = 'rgb(' + color + ')';

                document.documentElement.style.setProperty("--color-board-lines", colorRGB);
            }

            if (properties.currentstonecolor) {
                let color = properties.currentstonecolor.value.split(' ');
                color = color.map((c) => {
                    return Math.ceil(c * 255);
                });
                let colorRGB = 'rgb(' + color + ')';

                document.documentElement.style.setProperty("--color-current-stone", colorRGB);
            }
        }
    };
};
