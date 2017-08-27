import { createStyleSheet } from 'material-ui/styles';
import { appPaletteColors, accent, accent2 } from "../styles/app-colors";
import { light, dark } from "material-ui/styles/palette";

const spacing = { unit: 8 };

export const columnFlex = {
      backgroundColor: appPaletteColors.primary[50],
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
      flex: 90,
      maxWidth: "100%",
      overflowX: "hidden"
    };

export const homeStyleSheet = createStyleSheet(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    flex: 90,
     backgroundColor: theme.palette.primary[100]
  },
  displayFlex: { 
    display: "flex",
    flexDirection: "column"
   }, 
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const  driveMainStyleSheet = createStyleSheet(theme => ({
  root: {
    height: "100%",
    flex: 90,
    backgroundColor: accent
  },
  sidePane: {
    borderRight: `1px solid ${appPaletteColors.accent[700]}`
  },
  box: {}
}));

export const driveStatsStyleSheet = createStyleSheet(theme => ({
  root: {},
  title: {
    textTransform: "uppercase",
    fontWeight: 300,
    color: light.text.secondary
  },
  titleIcon: {
    marginRight: theme.spacing.unit,
    fill: accent2
  },
  titleHeading: {
    paddingTop: theme.spacing.unit,
    color: accent2
  },
  box: {
    padding: theme.spacing.unit * 2
  },
  titleBox: {
    paddingTop: 0
  },
  bar: {},
  checked: {
    color: accent2,
    "& + $bar": {
      backgroundColor: accent2
    }
  },
  label: {
    color: light.text.secondary
  }
}));


export const driveStatsColors = ["white", accent2];

export const driveStatsMiniStyleSheet = createStyleSheet(theme => ({
  
  title: {
    textTransform: "uppercase",
    fontWeight: 300,
    color: light.text.secondary
  },

  miniMainBox: {
    position: "relative",
    minHeight: 300,
    textAlign: "center"
  },
  miniBox1: {
    position: "absolute",
    width: "90%",
    height: "70%",
    left: "-15%"
  },

  miniBox2: {
    top: "-15%",
    position: "absolute",
    left: "35%",
    width: "65%",
    height: "45%"
  },

  miniBox3: {
    top: "44%",
    width: "65%",
    height: "40%",
    position: "absolute",
    left: "35%"
  }

}));


export const sideNavStyles = {
  
  title: {
    textTransform: "uppercase",
    fontWeight: 300,
    color: light.text.secondary
  },
  titleIcon: {
    marginRight: spacing.unit,
    backgroundColor: accent2
  },
  box: {
    padding: spacing.unit * 2,
    paddingTop: 0,
    flex: 1
  }
}

const sideNavItemActiveStyle = {
      color: accent2,
      fill: accent2
    };

export const sideNavItemStyles = {
  activeStyle : sideNavItemActiveStyle,
  activeColor: accent2,
  defaultColor: light.text.secondary,

  avatarStyle: (active) => {
      return {
        backgroundColor: accent,
        color: active ? accent2 : light.text.secondary
      };
    },

  textStyle: (active) => {
    return {
      color: active ? accent2 : light.text.secondary,
      fontWeight: 400
    };
  }  

}

export const mainAppBarStyleSheet = createStyleSheet(theme => ({
  root: {
    marginTop: 0,
    width: "100%",
    flex: 1
  },
  flex: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    fontWeight: 400,
    alignItems: "center",
    justifyContent: "center"
  },

  img: {
    height: theme.spacing.unit * 6,
    align: "middle",
    marginLeft: theme.spacing.unit
  },
  progress: {
    color: appPaletteColors.primary[50],
    fill: appPaletteColors.primary[50]
  },
  avatarButton: {
    fontSize: "1rem",
    display: "flex",
    textAlign: "center",
    fontWeight: 400,
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    width: "40px",
    minWidth: "40px",
    borderRadius: "50%",
    color: "white",
    backgroundColor: appPaletteColors.primary[400],
    "&:hover": {
      backgroundColor: appPaletteColors.primary[600]
    }
  },
  avatar: { margin: theme.spacing.unit },
  menuHeader: {
    display: "flex",

    fontWeight: 400,
    alignItems: "center",
    color: "white",
    backgroundColor: accent,
    outline: 0,
    paddingLeft: theme.spacing.unit * 2
  }
}));


export const systemSummaryStyleSheet = createStyleSheet(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    flex: 1,
    backgroundColor: accent
  },
  flex: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    textTransform: "uppercase",
    color: dark.text.primary
  },
  titleIcon: {
    marginRight: theme.spacing.unit,
    backgroundColor: accent2
  },
  specsText: {
    color: light.text.secondary,
    fontSize: "1rem",
    lineHeight: 1.6
  },
  specsValue: {
    paddingTop: theme.spacing.unit * 2,
    color: accent2,
    fontWeight: 400,
    fontSize: "1rem"
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start"
  },
  cell: {
    whiteSpace: "normal"
  },
  cell2: {
    whiteSpace: "normal",
    minWidth: "10%"
  }
}));

export const indexDriveFunctionsStyles = {
  activeStyle : {
    fill: accent2,
    fontWeight: 400
  },

  altIconStyle : {
    fontWeight : 400
  }

};

export const driveCardButtonsStyles = {
  bgAccent:{
    backgroundColor: accent
  },
  activeStyle : {
    fill: accent2,
    fontWeight: 400
  },
  altIconStyle : {
    fontWeight : 400
  }
};


export const seatingCardButtonsStyleSheet = createStyleSheet(theme => ({
  root: {},
  bar: {},
  checked: {
    color: accent2,
    "& + $bar": {
      backgroundColor: accent2
    }
  },
  label: {
    color: light.text.secondary
  },
  iconColor: {
    color: accent2,
    fill: accent2
  }
}));


export const homeCardStyleSheet = createStyleSheet(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100% !important",
    flex: 1
  },

  card: {
    backgroundColor: appPaletteColors.primary[50],
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    flexGrow: 1
  },

  title: { textTransform: "uppercase", color: accent2 },

  icon: { marginRight: theme.spacing.unit },
  cardContent: {
    flex: 1,
    flexGrow: 1,
    textTransform: "propercase"
  },

  button: {
    width: "100%"
  },
  img: {
    margin: "auto",
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    maxWidth: 200
  },
  imgMedia: {
    textAlign: "center",
    backgroundColor: appPaletteColors.primary[50]
  },
  btnNav: {
    /*backgroundColor: appPaletteColors.primary[300], */
    color: "#fefefe"
  },
  headline: {
    color: accent2
  }
}));


export const formStyleSheet = createStyleSheet(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: "100%"
  },
  button: {
    padding: theme.spacing.unit * 2,
    width: "100%"
  },
  progress: {
    margin: "auto",
    fill: accent2
  },
  btnWrapper: {
    textAlign: "center",
    height: 50
  },
  error: {
    paddingTop: theme.spacing.unit * 2,
    color: "red",
    height: 45
  },
  primary: {
    color: accent2
  }
}));


export const soloCardStyleSheet = createStyleSheet(theme => ({
  root: {
    flex: 1,
    height: "100%",
    padding: theme.spacing.unit * 2
  },

  card: {
    backgroundColor: appPaletteColors.primary[50],
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%"
  },

  cardGutters: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 32
  }),

  flex: {
    display: "flex",
    flex: 1,
    textAlign: "center",
    fontWeight: 400,
    alignItems: "center",
    justifyContent: "center"
  },

  img: {
    height: theme.spacing.unit * 4,
    align: "middle"
  },
  avatar: {
    margin: "auto",
    height: theme.spacing.unit * 6,
    width: theme.spacing.unit * 6,
    backgroundColor: appPaletteColors.primary[500],
    padding: 10
  },
  displayFlex: {
    display: "flex",
    flexDirection: "column"
  }
}));



