import { accent2 } from "../styles/app-colors";

const pieConfig = {
  cutoutPercentage: 60,

  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke: false,

  //String - The colour of each segment stroke
  segmentStrokeColor: "#FFF",

  //Number - The width of each segment stroke
  segmentStrokeWidth: 1,

  //Number - Amount of animation steps
  animationSteps: 0,

  //String - Animation easing effect
  animationEasing: "easeOutBounce",

  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,

  fullWidth: false,

  responsive: true,

  rotation: 30,

  tooltips: false,

  elements: {
    arc: {
      roundedCornersFor: 0
    },
    center: {
      // the longest text that could appear in the center
      maxText: "100%",
      text: "0%",
      fontColor: accent2,
      //fontFamily: 'Source Sans Pro',
      fontStyle: "normal",
      // fontSize: 12,
      // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
      // if these are not specified either, we default to 1 and 256
      minFontSize: 1,
      maxFontSize: 256
    }
  },

  title: ""
};

export const registerTextCenter = Chart => {
  var commonFontSize = 1;

  Chart.pluginService.register({
    afterUpdate: function(chart) {
      if (chart.config.options.elements.center) {
        var helpers = Chart.helpers;
        var centerConfig = chart.config.options.elements.center;
        var globalConfig = Chart.defaults.global;
        var ctx = chart.chart.ctx;

        var fontStyle = helpers.getValueOrDefault(
          centerConfig.fontStyle,
          globalConfig.defaultFontStyle
        );
        var fontFamily = helpers.getValueOrDefault(
          centerConfig.fontFamily,
          globalConfig.defaultFontFamily
        );
        var value = chart.data.datasets[0].data[1] + "%";

        var fontSize = centerConfig.fontSize;
        if (centerConfig.fontSize) {
          fontSize = centerConfig.fontSize;
          commonFontSize = fontSize;
          // figure out the best font size, if one is not specified
        } else {
          ctx.save();
          fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
          var maxFontSize = helpers.getValueOrDefault(
            centerConfig.maxFontSize,
            256
          );
          var maxText = helpers.getValueOrDefault(centerConfig.maxText, value);

          do {
            ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
            var textWidth = ctx.measureText(maxText).width;

            // check if it fits, is within configured limits and that we are not simply toggling back and forth
            if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
              fontSize += 1;
            else {
              // reverse last step
              fontSize -= 1;
              break;
            }
          } while (true);

          commonFontSize = fontSize;

          ctx.restore();
        }

        // save properties
        chart.center = {
          font: helpers.fontString(fontSize, fontStyle, fontFamily),
          fillStyle: helpers.getValueOrDefault(
            centerConfig.fontColor,
            globalConfig.defaultFontColor
          )
        };
      }
    },
    afterDraw: function(chart) {
      if (chart.center) {
        var ctx = chart.chart.ctx;
        var value = chart.data.datasets[0].data[1] + "%";

        var txtWidth = chart.outerRadius;
        var txtHeight = commonFontSize;

        ctx.save();

        ctx.font = chart.center.font;
        ctx.fillStyle = chart.center.fillStyle;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        ctx.clearRect(
          centerX - txtWidth / 2,
          centerY - txtHeight / 2,
          txtWidth,
          txtHeight
        );

        ctx.fillText(value, centerX, centerY);
        ctx.restore();
      }
    }
  });
};

export default pieConfig;
