'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var faCat = require('@fortawesome/free-solid-svg-icons/faCat');
var faDog = require('@fortawesome/free-solid-svg-icons/faDog');
var faHandPeace = require('@fortawesome/free-solid-svg-icons/faHandPeace');
var faSpinner = require('@fortawesome/free-solid-svg-icons/faSpinner');
var faHeart = require('@fortawesome/free-solid-svg-icons/faHeart');
var cx = require('classnames');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var nanoid = require('nanoid');
var react = require('@headlessui/react');
var reactHookForm = require('react-hook-form');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var initializeIconList = function initializeIconList() {
  var iconList = [faHandPeace.faHandPeace, faDog.faDog, faCat.faCat, faSpinner.faSpinner, faHeart.faHeart]; // Set up icon libraries

  fontawesomeSvgCore.library.add.apply(fontawesomeSvgCore.library, iconList);
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded$2 = ["icon", "className"];
var Icon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      className = _ref.className,
      faProps = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return React__default["default"].createElement("div", {
    ref: ref,
    className: cx__default["default"]("icon", className)
  }, React__default["default"].createElement(reactFontawesome.FontAwesomeIcon, _extends({}, faProps, {
    icon: icon
  })));
});

var Badge = function Badge(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? "info" : _ref$status,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "filled" : _ref$type,
      iconClassName = _ref.iconClassName,
      className = _ref.className;
  return React__default["default"].createElement("div", {
    className: cx__default["default"]("badge", "badge--" + status, "badge--" + type, className)
  }, icon && React__default["default"].createElement(Icon, {
    icon: icon,
    className: cx__default["default"]("fa-fw", iconClassName)
  }), React__default["default"].createElement("p", null, text));
};

var _excluded$1 = ["borderType", "icon", "colorType", "iconClassName", "isLoading", "isRounded", "withBackground", "loadingIcon"];
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$borderType = _ref.borderType,
      borderType = _ref$borderType === void 0 ? "fill" : _ref$borderType,
      icon = _ref.icon,
      _ref$colorType = _ref.colorType,
      colorType = _ref$colorType === void 0 ? "normal" : _ref$colorType,
      iconClassName = _ref.iconClassName,
      isLoading = _ref.isLoading,
      isRounded = _ref.isRounded,
      withBackground = _ref.withBackground,
      loadingIcon = _ref.loadingIcon,
      buttonProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return React__default["default"].createElement("button", _extends({}, buttonProps, {
    ref: ref,
    className: cx__default["default"]("btn--" + borderType, "btn--" + colorType, {
      "btn--rounded": isRounded,
      "btn--with-background": withBackground
    }, buttonProps.className)
  }), !isLoading ? React__default["default"].createElement(React__default["default"].Fragment, null, icon && React__default["default"].createElement(Icon, {
    icon: icon,
    className: cx__default["default"]("fa-fw", "btn-icon", {
      "btn-icon--with-children": !!buttonProps.children
    }, iconClassName)
  }), buttonProps.children) : React__default["default"].createElement(Icon, {
    icon: loadingIcon != null ? loadingIcon : ["fas", "spinner"],
    spin: true
  }));
});

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return new Date().getTime();
};

// Lodash debounce --- https://www.jsdelivr.com/package/npm/lodash
var FUNC_ERROR_TEXT = "Argument func is not a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  if (wait === void 0) {
    wait = 0;
  }

  var lastArgs;
  var lastThis;
  var maxWait = -1;
  var result;
  var timerId;
  var lastCallTime;
  var lastInvokeTime = 0;
  var leading = false;
  var maxing = false;
  var trailing = true;

  if (typeof func !== "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if (options) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(Number(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time; // @ts-ignore

    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - (lastCallTime || 0),
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - (lastCallTime || 0),
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments; // @ts-ignore

    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var headlessTransitionData = {
  fadeInOut: {
    enter: "transition-opacity duration-75",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  },
  fadeAndSlide: {
    enter: "transition duration-75 transform",
    enterFrom: "opacity-0 translate-y-full",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition duration-150 transform",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-full"
  }
};

var FadeTransition = function FadeTransition(_ref) {
  var show = _ref.show,
      children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? React.Fragment : _ref$as;
  return React__default["default"].createElement(react.Transition, _extends({
    as: as,
    show: show,
    className: className
  }, headlessTransitionData.fadeInOut), children);
};

var _excluded = ["borderType", "caption", "captionIcon", "state", "label", "leadingAdornment", "leadingAdornmentOnClick", "trailingAdornment", "traillingAdornmentOnClick", "debounceParam", "className"];

var checkIsIcon = function checkIsIcon(prop) {
  return Array.isArray(prop) && prop.length === 2 && prop.every(function (entry) {
    return typeof entry === "string";
  });
};

var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _debounceParam$deboun;

  var _ref$borderType = _ref.borderType,
      borderType = _ref$borderType === void 0 ? "outline" : _ref$borderType,
      caption = _ref.caption,
      captionIcon = _ref.captionIcon,
      state = _ref.state,
      label = _ref.label,
      leadingAdornment = _ref.leadingAdornment,
      leadingAdornmentOnClick = _ref.leadingAdornmentOnClick,
      trailingAdornment = _ref.trailingAdornment,
      traillingAdornmentOnClick = _ref.traillingAdornmentOnClick,
      debounceParam = _ref.debounceParam,
      className = _ref.className,
      inputProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var myId = React.useRef("input---" + nanoid.nanoid());
  var hasError = state === "error";
  var debounceRef = React.useRef(debounce(function (event) {
    inputProps == null ? void 0 : inputProps.onChange == null ? void 0 : inputProps.onChange(event);
  }, (_debounceParam$deboun = debounceParam == null ? void 0 : debounceParam.debounceTime) != null ? _debounceParam$deboun : 0));

  var _useState = React.useState(false),
      hasContent = _useState[0],
      setHasContent = _useState[1];

  var renderAdornment = function renderAdornment(adornment, left) {
    if (left === void 0) {
      left = false;
    }

    if (!adornment) {
      return null;
    }

    var iconCN = cx__default["default"]("fa-fw adornment-icon", {
      "adornment-icon-left": left
    });
    var onClick = traillingAdornmentOnClick;

    if (left) {
      onClick = leadingAdornmentOnClick;
    }

    if (checkIsIcon(adornment)) {
      var renderIcon = function renderIcon() {
        return React__default["default"].createElement(Icon, {
          icon: adornment,
          className: iconCN
        });
      };

      return onClick ? React__default["default"].createElement("button", {
        className: "adornment-wrapper",
        type: "button",
        onClick: onClick
      }, renderIcon()) : renderIcon();
    }

    return React__default["default"].createElement("div", {
      className: iconCN
    }, adornment);
  };

  var onInputChange = function onInputChange(event) {
    setHasContent((inputProps == null ? void 0 : inputProps.placeholder) != null || event.target.value != null);
    debounceRef.current(event);
  };

  React.useEffect(function () {
    setHasContent((inputProps == null ? void 0 : inputProps.value) != null || (inputProps == null ? void 0 : inputProps.defaultValue) != null || (inputProps == null ? void 0 : inputProps.placeholder) != null);
  }, [inputProps == null ? void 0 : inputProps.value, inputProps == null ? void 0 : inputProps.placeholder, inputProps == null ? void 0 : inputProps.defaultValue]);
  React.useEffect(function () {
    var debouncer = debounceRef.current;
    return function () {
      if (debounceParam) {
        if (debounceParam.flushOnUnmount) {
          debouncer.flush();
        } else {
          debouncer.cancel();
        }
      }
    };
  }, [debounceParam]);
  return React__default["default"].createElement("div", {
    className: cx__default["default"]("form-input", className)
  }, React__default["default"].createElement("div", {
    className: cx__default["default"]("input-container", "input-container--" + borderType, {
      "input-container--error": hasError
    }, {
      "input-container--has-content": hasContent
    }, {
      "input-container--with-leading-icon": leadingAdornment
    }, {
      "input-container--with-trailing-icon": trailingAdornment
    }, {
      "input-container--read-only": inputProps == null ? void 0 : inputProps.readOnly
    })
  }, renderAdornment(trailingAdornment), renderAdornment(leadingAdornment, true), React__default["default"].createElement("label", {
    htmlFor: myId.current
  }, label), React__default["default"].createElement("input", _extends({
    id: myId.current
  }, inputProps, {
    ref: ref,
    onChange: onInputChange
  }))), React__default["default"].createElement(FadeTransition, {
    show: !!caption
  }, React__default["default"].createElement("div", {
    className: cx__default["default"]("caption-container", {
      "caption-container--error": hasError
    })
  }, (hasError || captionIcon) && React__default["default"].createElement(Icon, {
    icon: captionIcon || ["far", "info-circle"],
    className: "fa-fw icon"
  }), caption)));
});

var clamp = function clamp(min, max, actual) {
  return Math.max(min, Math.min(max, actual));
};

function RadioGroup(_ref) {
  var className = _ref.className,
      itemClassName = _ref.itemClassName,
      itemClassNameGetter = _ref.itemClassNameGetter,
      dataList = _ref.dataList,
      getValue = _ref.getValue,
      radioGroupLabel = _ref.radioGroupLabel,
      _ref$defaultSelectedI = _ref.defaultSelectedIndex,
      defaultSelectedIndex = _ref$defaultSelectedI === void 0 ? -1 : _ref$defaultSelectedI,
      selectedIndex = _ref.selectedIndex,
      disabled = _ref.disabled,
      renderOption = _ref.renderOption,
      onChange = _ref.onChange,
      checkOptionDisable = _ref.checkOptionDisable,
      getLabel = _ref.getLabel,
      getDescription = _ref.getDescription,
      leftLabel = _ref.leftLabel,
      formValidation = _ref.formValidation,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? "neutral" : _ref$status;

  var _useState = React.useState(function () {
    var attemptDefaultIndex = clamp(-1, dataList.length - 1, selectedIndex != null ? selectedIndex : defaultSelectedIndex);

    if (attemptDefaultIndex > -1 && checkOptionDisable != null && checkOptionDisable(dataList[attemptDefaultIndex], attemptDefaultIndex)) {
      attemptDefaultIndex = dataList.findIndex(function (entry, index) {
        var _checkOptionDisable;

        return (_checkOptionDisable = !(checkOptionDisable != null && checkOptionDisable(entry, index))) != null ? _checkOptionDisable : true;
      });
    }

    return attemptDefaultIndex;
  }()),
      _selectedIndex = _useState[0],
      setSelectedIndex = _useState[1];

  React.useEffect(function () {
    if (selectedIndex !== undefined) {
      setSelectedIndex(selectedIndex >= 0 && selectedIndex < dataList.length ? selectedIndex : -1);
    }
  }, [selectedIndex, dataList.length]);
  var dataMap = React.useMemo(function () {
    // @ts-ignore
    var returnMap = {};
    dataList.forEach(function (entry, index) {
      returnMap[getValue(entry)] = {
        data: entry,
        index: index
      };
    });
    return returnMap;
  }, [dataList, getValue]);
  var value = _selectedIndex > -1 && _selectedIndex < dataList.length ? getValue(dataList[_selectedIndex]) : undefined;

  var renderContent = function renderContent(formOnChange) {
    var onChangeWrapper = function onChangeWrapper(newValue) {
      var _ref2 = dataMap[newValue] || {},
          data = _ref2.data,
          index = _ref2.index;

      if (selectedIndex === undefined) {
        // Change on uncontrolled form only
        setSelectedIndex(index);
      }

      onChange == null ? void 0 : onChange(data, index);
      formOnChange == null ? void 0 : formOnChange(getValue(data));
    };

    var renderRadioLabel = function renderRadioLabel(label) {
      return React__default["default"].createElement(react.RadioGroup.Label, {
        className: cx__default["default"]("radio-label", {
          "radio-label--left": leftLabel
        })
      }, label);
    };

    return React__default["default"].createElement(react.RadioGroup, {
      disabled: disabled,
      defaultValue: value,
      value: value,
      onChange: onChangeWrapper,
      className: cx__default["default"]("form-radio-group-container", {
        "form-radio-group-container--disabled": disabled
      }, {
        "form-radio-group-container--default": !renderOption
      }, className)
    }, radioGroupLabel && React__default["default"].createElement(react.RadioGroup.Label, {
      className: "radio-main-label"
    }, radioGroupLabel), dataList.map(function (data, index) {
      var isDisabled = checkOptionDisable == null ? void 0 : checkOptionDisable(data, index);
      return React__default["default"].createElement(react.RadioGroup.Option, {
        value: getValue(data),
        key: index,
        className: cx__default["default"]("radio-container", {
          "radio-container--disabled": isDisabled
        }, itemClassName, itemClassNameGetter == null ? void 0 : itemClassNameGetter(data, index)),
        disabled: isDisabled
      }, function (_ref3) {
        var _renderOption;

        var checked = _ref3.checked,
            active = _ref3.active,
            disabled = _ref3.disabled;
        var option = {
          data: data,
          index: index,
          checked: checked,
          active: active,
          disabled: disabled
        };
        return (_renderOption = renderOption == null ? void 0 : renderOption(option)) != null ? _renderOption : React__default["default"].createElement(React__default["default"].Fragment, null, leftLabel && renderRadioLabel(getLabel == null ? void 0 : getLabel(option)), React__default["default"].createElement("div", {
          className: cx__default["default"]("form-radio-group__radio", "form-radio-group__radio--" + status, {
            "form-radio-group__radio--checked": checked
          }, {
            "form-radio-group__radio--active": active
          }, {
            "form-radio-group__radio--disabled": disabled
          })
        }, React__default["default"].createElement("div", {
          className: "inner"
        })), !leftLabel && renderRadioLabel(getLabel == null ? void 0 : getLabel(option)), getDescription && React__default["default"].createElement(react.RadioGroup.Description, null, getDescription(option)));
      });
    }));
  };

  if (!formValidation) {
    return renderContent();
  }

  var control = formValidation.control,
      name = formValidation.name,
      rules = formValidation.rules; // TODO: Figure out this ignore

  return React__default["default"].createElement(reactHookForm.Controller // @ts-ignore
  , {
    // @ts-ignore
    name: name,
    rules: rules,
    control: control,
    // @ts-ignore
    defaultValue: value,
    render: function render(_ref4) {
      var onChange = _ref4.field.onChange;
      return renderContent(onChange);
    }
  });
}

initializeIconList();
var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React__default["default"].createElement("div", {
    className: "flex items-center justify-center w-5/6 m-auto py-2 text-2xl text-center text-skin-success uppercase bg-skin-top shadow-xl rounded-3xl"
  }, children || "Hello World! (❁´◡`❁)");
};

exports.Badge = Badge;
exports.Button = Button;
exports.Icon = Icon;
exports.Input = Input;
exports.RadioGroup = RadioGroup;
exports.Thing = Thing;
//# sourceMappingURL=ducduchy-react-components.cjs.development.js.map
