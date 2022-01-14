function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,sass,scss}"],
  theme: {
    extend: {
      screens: {
        "2xl-max": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
        "xl-max": { max: "1279px" }, // => @media (max-width: 1279px) { ... }
        "lg-max": { max: "1023px" }, // => @media (max-width: 1023px) { ... }
        "md-max": { max: "767px" }, // => @media (max-width: 767px) { ... }
        "sm-max": { max: "639px" }, // => @media (max-width: 639px) { ... }
      },

      colors: {
        skin: {
          fill: withOpacity("--fill"),
          danger: withOpacity("--danger"),
          success: withOpacity("--success"),
          warning: withOpacity("--warning"),
          info: withOpacity("--info"),
          default: withOpacity("--default"),
          exquisite: withOpacity("--exquisite"),
          disabled: withOpacity("--disabled"),
          primary: withOpacity("--text-primary"),
          secondary: withOpacity("--text-secondary"),
          base: withOpacity("--text-base"),
          inverted: withOpacity("--text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          default: withOpacity("--background"),
          top: withOpacity("--background-top"),
          "overflow-menu": withOpacity("--background-overflow-menu"),
          active: withOpacity("--background-active"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
