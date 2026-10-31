/* @ds-bundle: {"format":4,"namespace":"MateoGarcADesignSystem_88efc5","components":[{"name":"LinkRow","sourcePath":"components/brand/LinkRow.jsx"},{"name":"Olitas","sourcePath":"components/brand/Olitas.jsx"},{"name":"Quote","sourcePath":"components/brand/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/LinkRow.jsx":"4db9d420d65c","components/brand/Olitas.jsx":"021f1733e138","components/brand/Quote.jsx":"090e4dfd0cc0","components/brand/SectionHeading.jsx":"12fed1615da3","components/core/Avatar.jsx":"2798305cb454","components/core/Badge.jsx":"06eb7f9b146d","components/core/Button.jsx":"0c6b27807ad3","components/core/Card.jsx":"70450e0328f4","components/core/Input.jsx":"750be7cadb9d","components/core/Tag.jsx":"d1f27ab4fbd6","ui_kits/entendernos-app/curvas-overlay.js":"5c88f5f192de","ui_kits/web/web-app-v2.jsx":"957aaa4b2bea","ui_kits/web/web-app-v3.jsx":"2ed8cfcf2ba8","ui_kits/web/web-app-v4.jsx":"c2c3c1b96c5e","ui_kits/web/web-app.jsx":"731116b19914"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MateoGarcADesignSystem_88efc5 = window.MateoGarcADesignSystem_88efc5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LinkRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LinkRow — botón de enlace ancho estilo linktree. Icono opcional, hover elevado.
 */
function LinkRow({
  children,
  href = "#",
  icon,
  meta,
  tone = "white",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    white: {
      bg: "var(--surface-card)",
      fg: "var(--azul-profundo)",
      border: "1px solid var(--border-default)"
    },
    deep: {
      bg: "var(--azul-profundo)",
      fg: "#fff",
      border: "1px solid transparent"
    },
    carmin: {
      bg: "var(--carmin)",
      fg: "#fff",
      border: "1px solid transparent"
    },
    teal: {
      bg: "var(--teal-500)",
      fg: "#fff",
      border: "1px solid transparent"
    }
  };
  const t = tones[tone] || tones.white;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      width: "100%",
      boxSizing: "border-box",
      textDecoration: "none",
      background: t.bg,
      color: t.fg,
      border: t.border,
      borderRadius: "var(--radius-pill)",
      padding: "15px 22px",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "16px",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: "26px",
      justifyContent: "center",
      flex: "none"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      opacity: 0.7,
      flex: "none"
    }
  }, meta) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      opacity: 0.55,
      fontSize: "18px"
    },
    "aria-hidden": true
  }, "\u203A"));
}
Object.assign(__ds_scope, { LinkRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LinkRow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Olitas.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Trazado autêntico de las olitas de la marca (3 olas rompientes con cresta enrollada). */
const OLITAS_PATH = "M153.66,9.18c1.06.04,1.68-1.41.88-2.12-7.55-6.71-15.53-8.96-25.02-5.34-7.1,2.69-13.11,7.06-16.64,13.77-2.07,3.88-4.24,7.59-7.28,10.81-4.15,4.37-10.24,4.28-15.84,4.37-4.85.09-8.03-4.19-8.47-8.87-1.06-11.12,10.19-13.5,18.76-13.06,1.06.04,1.68-1.41.88-2.12-11.08-9.66-30.8-7.15-39.72,4.9-4.72,6.4-7.28,14.25-15.58,17.08-8.74,2.96-20.39-1.02-17.17-12.09,2.38-8.3,10.77-8.56,17.87-8.16,1.06.04,1.68-1.41.88-2.12C29.92-8.87.49,7.28,0,29.21c-.04,1.59,2.43,1.59,2.47,0C2.84,10.74,26.66-3.81,42.5,5.75c-8.3.16-14.26,2.69-16.94,11.9-.93,3.22.04,7.63,2.29,10.06,4.32,4.72,8.96,3.97,14.87,3.66,8.43-.4,13.64-7.15,17.7-13.81,2.96-4.81,5.52-7.9,10.72-10.68,8.21-4.3,17.31-5.54,25.05-.71-8.58.28-16.99,3.37-17.33,13.86-.22,6.88,3.62,12.84,10.86,13.02,11.21.31,17.56-3.27,23.3-12.8,3.04-5.07,4.72-8.78,9.84-12.36,9.09-6.26,18.54-7.27,27.18-1.23-8.48.3-18.02,3.4-17.52,14.02.57,12.14,10.72,12.31,20.34,11.43,1.59-.13,1.59-2.6.04-2.43-7.81.71-19.37,1.5-17.7-10.5,1.32-9.58,10.72-10.41,18.45-10.02Z";

/**
 * Olitas — el recurso gráfico de marca (el mar, la profundidad humana).
 * Trazado oficial de tres olas rompientes con la cresta enrollada. Hereda color con `color`
 * (o currentColor). Úsalo como divisor o acento; no saturar.
 */
function Olitas({
  width = 130,
  color = "currentColor",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 154.9 33.07",
    width: width,
    role: "img",
    "aria-label": "Olitas",
    style: {
      display: "block",
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: OLITAS_PATH,
    fill: color
  }));
}
Object.assign(__ds_scope, { Olitas });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Olitas.jsx", error: String((e && e.message) || e) }); }

// components/brand/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quote — la voz de Mateo. Lora italic sobre superficie, con acento teal y olitas.
 */
function Quote({
  children,
  author,
  role,
  tone = "soft",
  style,
  ...rest
}) {
  const onDeep = tone === "deep";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: onDeep ? "var(--azul-profundo)" : "var(--celeste-claro)",
      borderRadius: "var(--radius-xl)",
      padding: "32px 34px",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: "clamp(20px, 2.6vw, 26px)",
      lineHeight: 1.4,
      color: onDeep ? "#fff" : "var(--azul-profundo)"
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "18px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "26px",
      height: "2px",
      background: "var(--teal)",
      borderRadius: "2px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "14px",
      color: onDeep ? "var(--celeste)" : "var(--text-strong)"
    }
  }, author), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: onDeep ? "var(--celeste-300)" : "var(--text-muted)"
    }
  }, "\xB7 ", role) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Quote.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow en mayúsculas + título display + bajada opcional.
 * Estructura de encabezado de sección estándar del sistema.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  eyebrowTone = "teal",
  onDark = false,
  style,
  ...rest
}) {
  const tones = {
    teal: "var(--teal-700)",
    coral: "var(--coral-700)",
    carmin: "var(--carmin)",
    azul: "var(--azul-600)"
  };
  const ebColor = onDark ? "var(--celeste)" : tones[eyebrowTone] || tones.teal;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: "640px",
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: ebColor
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px, 4vw, 44px)",
      lineHeight: 1.12,
      letterSpacing: "-0.02em",
      color: onDark ? "var(--text-inverse)" : "var(--text-strong)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontSize: "18px",
      lineHeight: 1.6,
      color: onDark ? "var(--celeste-300)" : "var(--text-body)"
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — foto circular o iniciales sobre celeste. Opción de anillo de marca.
 */
function Avatar({
  src,
  alt = "",
  name = "",
  size = 48,
  ring = false,
  style,
  ...rest
}) {
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase() : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      background: "var(--celeste)",
      color: "var(--azul-profundo)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: size * 0.38,
      overflow: "hidden",
      flex: "none",
      boxShadow: ring ? "0 0 0 3px var(--surface-page), 0 0 0 5px var(--teal)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — etiqueta de estado o categoría, en píldora suave.
 */
function Badge({
  children,
  tone = "azul",
  solid = false,
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    azul: {
      soft: ["var(--azul-100)", "var(--azul-700)"],
      solid: ["var(--azul-profundo)", "#fff"]
    },
    teal: {
      soft: ["var(--teal-100)", "var(--teal-700)"],
      solid: ["var(--teal-600)", "#fff"]
    },
    coral: {
      soft: ["var(--coral-100)", "var(--coral-700)"],
      solid: ["var(--coral-600)", "#fff"]
    },
    carmin: {
      soft: ["var(--carmin-100)", "var(--carmin-700)"],
      solid: ["var(--carmin)", "#fff"]
    },
    celeste: {
      soft: ["var(--celeste-200)", "var(--azul-700)"],
      solid: ["var(--celeste)", "var(--azul-profundo)"]
    },
    neutral: {
      soft: ["var(--gris-100)", "var(--gris-600)"],
      solid: ["var(--gris-600)", "#fff"]
    }
  };
  const t = tones[tone] || tones.azul;
  const [bg, fg] = solid ? t.solid : t.soft;
  const sizes = {
    sm: {
      fontSize: "11px",
      padding: "3px 9px"
    },
    md: {
      fontSize: "12px",
      padding: "5px 12px"
    },
    lg: {
      fontSize: "13px",
      padding: "6px 14px"
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: s.fontSize,
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      lineHeight: 1.2,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — la acción del sistema Mateo García.
 * Primary usa carmín (CTA, energía). Secondary es el azul profundo de marca.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  full = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px",
      radius: "var(--radius-pill)",
      gap: "7px"
    },
    md: {
      padding: "12px 22px",
      fontSize: "15px",
      radius: "var(--radius-pill)",
      gap: "9px"
    },
    lg: {
      padding: "16px 30px",
      fontSize: "17px",
      radius: "var(--radius-pill)",
      gap: "10px"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--accent-cta)",
      color: "#fff",
      border: "2px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--azul-profundo)",
      color: "#fff",
      border: "2px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "transparent",
      color: "var(--azul-profundo)",
      border: "2px solid var(--azul-profundo)",
      boxShadow: "none"
    },
    soft: {
      background: "var(--celeste-claro)",
      color: "var(--azul-profundo)",
      border: "2px solid transparent",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--azul-profundo)",
      border: "2px solid var(--celeste)",
      boxShadow: "none"
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: "var(--accent-cta-hover)",
    secondary: "var(--azul-800)",
    outline: "var(--azul-50)",
    soft: "var(--celeste-200)",
    ghost: "var(--teal-100)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      width: full ? "100%" : "auto",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      transform: active && !disabled ? "scale(0.97)" : "scale(1)",
      background: hover && !disabled ? hoverBg : v.background,
      color: v.color,
      border: v.border,
      boxShadow: v.boxShadow,
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — superficie blanca con esquinas generosas y sombra azul difusa.
 * Acepta media opcional arriba. Si `interactive`, eleva al hover.
 */
function Card({
  children,
  media,
  padding = "24px",
  interactive = false,
  tone = "white",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === "soft" ? "var(--celeste-claro)" : tone === "deep" ? "var(--azul-profundo)" : "var(--surface-card)";
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      borderRadius: "var(--radius-xl)",
      border: tone === "white" ? "1px solid var(--border-soft)" : "1px solid transparent",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      overflow: "hidden",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      transform: interactive && hover ? "translateY(-4px)" : "none",
      cursor: interactive ? "pointer" : "default",
      color: tone === "deep" ? "var(--text-inverse)" : "var(--text-body)",
      ...style
    }
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      lineHeight: 0
    }
  }, media) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — campo de texto con etiqueta opcional, en familia Montserrat.
 * Foco con anillo azul de marca.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  textarea = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? "var(--status-danger)" : focus ? "var(--azul-profundo)" : "var(--border-default)";
  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-ui)",
    fontSize: "15px",
    color: "var(--text-strong)",
    background: "var(--surface-page)",
    border: `2px solid ${borderColor}`,
    borderRadius: "var(--radius-md)",
    padding: "12px 14px",
    outline: "none",
    boxShadow: focus ? "var(--focus-ring)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    resize: textarea ? "vertical" : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "13px",
      color: "var(--text-strong)"
    }
  }, label) : null, textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      color: "var(--status-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — etiqueta de categoría en mayúsculas (Montserrat). Fondo celeste claro,
 * texto azul profundo, borde teal opcional. Para: Entendernos · Talleres · ONG · Charlas.
 */
function Tag({
  children,
  bordered = false,
  tone = "celeste",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    celeste: {
      bg: "var(--celeste-claro)",
      fg: "var(--azul-profundo)",
      bd: "var(--teal)"
    },
    teal: {
      bg: "var(--teal-100)",
      fg: "var(--teal-700)",
      bd: "var(--teal-600)"
    },
    coral: {
      bg: "var(--coral-100)",
      fg: "var(--coral-700)",
      bd: "var(--coral-600)"
    },
    carmin: {
      bg: "var(--carmin-100)",
      fg: "var(--carmin-700)",
      bd: "var(--carmin)"
    }
  };
  const t = tones[tone] || tones.celeste;
  const sizes = {
    sm: {
      fontSize: "10px",
      padding: "4px 9px"
    },
    md: {
      fontSize: "11px",
      padding: "5px 11px"
    },
    lg: {
      fontSize: "12px",
      padding: "6px 13px"
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: s.padding,
      borderRadius: "var(--radius-sm)",
      background: t.bg,
      color: t.fg,
      border: bordered ? `1px solid ${t.bd}` : "1px solid transparent",
      lineHeight: 1.2,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/entendernos-app/curvas-overlay.js
try { (() => {
/* ============================================================
   Overlay de texto a curvas — Entendernos frentes de cartas.
   NO recompone el texto: deja que el navegador haga el layout
   original (mismas fuentes, mismos saltos), MIDE cada línea ya
   compuesta (Range API) y superpone trazados vectoriales
   (glifos reales vía opentype.js) en esas posiciones exactas.
   El texto original queda transparente: ocupa el mismo espacio
   (layout idéntico) pero lo visible/imprimible son las curvas.
   ============================================================ */
window.applyTextCurves = async function (opts) {
  const loadFont = url => new Promise((res, rej) => opentype.load(url, (e, f) => e ? rej(e) : res(f)));
  const fonts = {};
  for (const t of opts.targets) if (!fonts[t.fontUrl]) fonts[t.fontUrl] = await loadFont(t.fontUrl);
  function linesOf(el) {
    const out = [];
    el.childNodes.forEach(node => {
      if (node.nodeType !== 3 || !node.textContent.trim()) return;
      const text = node.textContent;
      const range = document.createRange();
      let lineStart = 0,
        prevTop = null;
      for (let i = 0; i < text.length; i++) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const r = range.getClientRects()[0];
        if (!r || !r.width && text[i] === ' ') continue;
        if (prevTop === null) prevTop = r.top;else if (Math.abs(r.top - prevTop) > r.height * 0.6) {
          out.push({
            node,
            s: lineStart,
            e: i
          });
          lineStart = i;
          prevTop = r.top;
        }
      }
      out.push({
        node,
        s: lineStart,
        e: text.length
      });
    });
    return out.map(L => {
      const t = L.node.textContent;
      let s = L.s,
        e = L.e;
      while (s < e && t[s] === ' ') s++;
      while (e > s && t[e - 1] === ' ') e--;
      if (s >= e) return null;
      const range = document.createRange();
      range.setStart(L.node, s);
      range.setEnd(L.node, e);
      return {
        text: t.slice(s, e),
        rect: range.getBoundingClientRect()
      };
    }).filter(Boolean);
  }
  for (const sheet of document.querySelectorAll(opts.sheetSelector)) {
    const sRect = sheet.getBoundingClientRect();
    const pxPerMM = sRect.width / opts.sheetWmm;
    let parts = '',
      hide = [];
    for (const t of opts.targets) {
      const font = fonts[t.fontUrl];
      const upm = font.unitsPerEm,
        asc = font.ascender / upm,
        desc = -font.descender / upm;
      for (const el of sheet.querySelectorAll(t.selector)) {
        const color = getComputedStyle(el).color;
        const fs = t.fontSizeMM,
          ls = t.letterSpacingEm * fs;
        for (const L of linesOf(el)) {
          const chars = [...L.text];
          const advs = chars.map(ch => font.getAdvanceWidth(ch, fs));
          const n = chars.length;
          const otW = advs.reduce((a, b) => a + b, 0) + ls * (n - 1);
          const measuredW = L.rect.width / pxPerMM - Math.max(0, ls); // sin el spacing colgante final
          const extra = n > 1 ? (measuredW - otW) / (n - 1) : 0;
          const lineH = L.rect.height / pxPerMM;
          const baseline = (L.rect.top - sRect.top) / pxPerMM + (lineH - (asc + desc) * fs) / 2 + asc * fs;
          let x = (L.rect.left - sRect.left) / pxPerMM;
          chars.forEach((ch, i) => {
            const d = font.charToGlyph(ch).getPath(x, baseline, fs).toPathData(3);
            if (d) parts += '<path d="' + d + '" fill="' + color + '"/>';
            x += advs[i] + ls + extra;
          });
        }
        hide.push(el);
      }
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + opts.sheetWmm + ' ' + opts.sheetHmm);
    svg.setAttribute('style', 'position:absolute;left:0;top:0;width:' + opts.sheetWmm + 'mm;height:' + opts.sheetHmm + 'mm;pointer-events:none;');
    svg.innerHTML = parts;
    sheet.appendChild(svg);
    for (const el of hide) el.style.color = 'transparent'; // recién ahora: las curvas ya están en el DOM
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/entendernos-app/curvas-overlay.js", error: String((e && e.message) || e) }); }

// ui_kits/web/web-app-v2.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Card,
  Avatar,
  Input,
  Quote,
  LinkRow,
  Olitas
} = window.MateoGarcADesignSystem_88efc5;

/* ---------- iconos UI ---------- */
const IconWhatsApp = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 .1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
}));
const IconInstagram = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.3",
  cy: "6.7",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
const IconGlobe = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
}));
const IconArrow = ({
  s = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IconCards = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "6",
  width: "12",
  height: "15",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6l3-2.5 8 4.5-3 13-7-4"
}));
const IconHeart = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 20s-7-4.5-9-9c-1.3-3 .5-6 3.5-6 2 0 3.2 1.3 3.5 2.2.3-.9 1.5-2.2 3.5-2.2 3 0 4.8 3 3.5 6-2 4.5-8 9-8 9z"
}));
const IconMic = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "12",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11a7 7 0 0 0 14 0M12 18v3"
}));

/* ---------- escala editorial ---------- */
const ed = {
  maxWidth: "1140px",
  margin: "0 auto",
  padding: "0 40px"
};
const sans = {
  fontFamily: "var(--font-sans)"
};
const serifDisplay = {
  fontFamily: "var(--font-serif)",
  fontWeight: 600,
  letterSpacing: "-0.015em",
  color: "var(--azul-profundo)"
};

/* eyebrow numerado, estilo revista */
function Kicker({
  num,
  children,
  color = "var(--coral-700)",
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      display: "flex",
      alignItems: "baseline",
      gap: "12px",
      marginBottom: "18px"
    }
  }, num ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "13px",
      color,
      letterSpacing: "0.04em"
    }
  }, num) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: "12.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: onDark ? "var(--celeste)" : "var(--text-muted)"
    }
  }, children));
}

/* divisor: regla fina + olitas centradas */
function Divider({
  color = "var(--celeste-500)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "flex",
      alignItems: "center",
      gap: "22px",
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement(Olitas, {
    color: color,
    width: 88
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-default)"
    }
  }));
}
const go = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.offsetTop - 76,
    behavior: "smooth"
  });
};

/* ============================ NAV ============================ */
function Nav() {
  const links = [["Sobre mí", "v2-sobre"], ["Entendernos", "v2-entendernos"], ["Charlas", "v2-charlas"], ["Comunidad", "v2-ong"], ["Contacto", "v2-contacto"]];
  const [h, setH] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(250,252,253,0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      height: "76px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "var(--radius-circle)",
      background: "var(--azul-profundo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "27px",
      height: "27px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...serifDisplay,
      fontWeight: 700,
      fontSize: "19px"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px"
    }
  }, links.map(([t, id], i) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null),
    style: {
      ...sans,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "13.5px",
      color: h === i ? "var(--carmin)" : "var(--text-strong)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("v2-contacto")
  }, "Escribime"))));
}

/* ============================ HERO ============================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--marfil)",
      paddingTop: "72px",
      paddingBottom: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "60px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    num: "\u2014",
    color: "var(--coral-700)"
  }, "Psicolog\xEDa cercana \xB7 Uruguay"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...serifDisplay,
      margin: "0 0 26px",
      fontWeight: 600,
      fontSize: "clamp(44px, 5.6vw, 72px)",
      lineHeight: 1.04
    }
  }, "Una persona", /*#__PURE__*/React.createElement("br", null), "acompa\xF1ando", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 500,
      color: "var(--carmin)"
    }
  }, "a otra.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 34px",
      fontSize: "20px",
      lineHeight: 1.7,
      color: "var(--text-body)",
      maxWidth: "460px"
    }
  }, "Soy Mateo Garc\xEDa: psic\xF3logo y psicogeront\xF3logo. Acompa\xF1o personas, grupos y comunidades desde una mirada humana, sin juzgar y de igual a igual."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null),
    onClick: () => go("v2-entendernos")
  }, "Conoc\xE9 Entendernos"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("v2-charlas"),
    style: {
      ...sans,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--azul-profundo)",
      borderBottom: "2px solid var(--celeste)",
      paddingBottom: "3px"
    }
  }, "Charlas y talleres"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "360px",
      height: "460px",
      borderRadius: "180px 180px 24px 24px",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      border: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mateo-perfil.png",
    alt: "Mateo Garc\xEDa",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 0%",
      background: "#ABCAD7"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "26px",
      right: "-30px",
      background: "var(--blanco)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: "11px",
      border: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-circle)",
      background: "var(--coral-100)",
      color: "var(--coral-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconHeart, {
    s: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...serifDisplay,
      fontWeight: 700,
      fontSize: "15px"
    }
  }, "Premio INJU 2022"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontSize: "11px",
      color: "var(--text-muted)"
    }
  }, "Compromiso comunitario"))))));
}

/* ============================ STATS (regla tipográfica) ============================ */
function Stats() {
  const items = [["45", "cartas en Entendernos"], ["1.503", "adultos mayores beneficiados"], ["31", "instituciones beneficiadas"], ["+30", "charlas por el país"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...ed,
      padding: "40px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "0",
      borderTop: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, items.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "30px 24px",
      borderLeft: i === 0 ? "none" : "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...serifDisplay,
      fontWeight: 600,
      fontSize: "46px",
      lineHeight: 1,
      color: "var(--carmin)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "10px",
      lineHeight: 1.35
    }
  }, l)))));
}

/* ============================ SOBRE ============================ */
function Sobre() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v2-sobre",
    style: {
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    num: "01",
    color: "var(--teal-700)"
  }, "Sobre m\xED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...serifDisplay,
      margin: "0 0 24px",
      fontWeight: 600,
      fontSize: "clamp(30px,3.6vw,44px)",
      lineHeight: 1.12
    }
  }, "No me interesa ser el psic\xF3logo perfecto."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...serifDisplay,
      float: "left",
      fontSize: "62px",
      lineHeight: 0.86,
      fontWeight: 600,
      margin: "6px 14px 0 0",
      color: "var(--coral)"
    }
  }, "M"), "e interesa estar para el otro. Recorrer el pa\xEDs dando charlas, visitar hogares, crear herramientas y ayudar a m\xE1s personas a sentirse acompa\xF1adas."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)"
    }
  }, "Reconozco lo que logras y te aplaudo. No voy a juzgarte: te hablo de igual a igual.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "24px 24px 160px 160px",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-hogar.jpeg",
    alt: "Mateo en un hogar de personas mayores",
    style: {
      width: "100%",
      display: "block"
    }
  })))));
}

/* ======================== ENTENDERNOS ======================== */
function Entendernos() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v2-entendernos",
    style: {
      background: "var(--celeste-claro)",
      padding: "84px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "60px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "330px",
      height: "410px",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      border: "6px solid var(--blanco)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-entendernos.jpeg",
    alt: "Mateo sosteniendo el mazo Entendernos",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 120,
    style: {
      position: "absolute",
      bottom: "-26px",
      left: "-18px"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    num: "02",
    color: "var(--carmin)"
  }, "Proyecto destacado"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...serifDisplay,
      margin: "0 0 8px",
      fontWeight: 600,
      fontSize: "clamp(40px,5vw,60px)",
      lineHeight: 1
    }
  }, "Entendernos"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sans,
      margin: "0 0 22px",
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--teal-700)"
    }
  }, "Un juego de 45 cartas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)",
      maxWidth: "440px"
    }
  }, "Creado para algo simple pero esencial: hablar, escucharnos y conectar de verdad. Para familias, parejas, aulas o equipos. Un espacio donde no hay respuestas correctas, solo personas reales."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "9px",
      flexWrap: "wrap",
      marginBottom: "30px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "teal",
    bordered: true
  }, "Empat\xEDa"), /*#__PURE__*/React.createElement(Tag, {
    tone: "celeste"
  }, "45 cartas"), /*#__PURE__*/React.createElement(Tag, {
    tone: "coral",
    bordered: true
  }, "Sin respuestas correctas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(IconCards, null)
  }, "Comprar el mazo \xB7 $550"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, "Env\xEDos en Uruguay")))));
}

/* ========================= CHARLAS ========================= */
function Charlas() {
  const rows = [{
    n: "i",
    icon: /*#__PURE__*/React.createElement(IconMic, {
      s: 24
    }),
    t: "Charlas",
    d: "Salud mental, vínculos y bienestar emocional para instituciones, escuelas y empresas."
  }, {
    n: "ii",
    icon: /*#__PURE__*/React.createElement(IconCards, {
      s: 24
    }),
    t: "Talleres",
    d: "Espacios participativos con Entendernos para abrir conversaciones reales en grupo."
  }, {
    n: "iii",
    icon: /*#__PURE__*/React.createElement(IconHeart, {
      s: 24
    }),
    t: "Visitas a hogares",
    d: "Acompañamiento a personas mayores junto al Movimiento Nacional por el Bienestar del Anciano."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "v2-charlas",
    style: {
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ed
  }, /*#__PURE__*/React.createElement(Kicker, {
    num: "03",
    color: "var(--coral-700)"
  }, "Lo que hago"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...serifDisplay,
      margin: "0 0 44px",
      fontWeight: 600,
      fontSize: "clamp(30px,3.6vw,44px)",
      lineHeight: 1.1,
      maxWidth: "620px"
    }
  }, "Llevo la psicolog\xEDa fuera del consultorio: a las aulas, las plazas y los hogares."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "44px 64px 1fr auto",
      gap: "24px",
      alignItems: "center",
      padding: "26px 0",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...serifDisplay,
      fontSize: "20px",
      fontStyle: "italic",
      color: "var(--celeste-600)"
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      borderRadius: "var(--radius-circle)",
      background: "var(--celeste-claro)",
      color: "var(--teal-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...serifDisplay,
      margin: "0 0 4px",
      fontWeight: 600,
      fontSize: "24px"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "560px"
    }
  }, c.d)), /*#__PURE__*/React.createElement(IconArrow, {
    s: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)"
    }
  }))));
}

/* ===================== QUOTE BAND (deep) ===================== */
function QuoteBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--azul-profundo)",
      padding: "92px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Olitas, {
    color: "rgba(171,202,215,0.16)",
    width: 240,
    style: {
      position: "absolute",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      textAlign: "center",
      maxWidth: "880px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: "clamp(28px,4vw,46px)",
      lineHeight: 1.32,
      color: "#fff",
      margin: "0 0 28px"
    }
  }, "\u201CA veces, una sola pregunta bien hecha abre puertas que estaban cerradas hace tiempo.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "30px",
      height: "2px",
      background: "var(--teal)",
      borderRadius: "2px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontWeight: 700,
      fontSize: "14px",
      color: "var(--celeste)"
    }
  }, "Mateo Garc\xEDa"))));
}

/* =========================== ONG =========================== */
function ONG() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v2-ong",
    style: {
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "60px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    num: "04",
    color: "var(--coral-700)"
  }, "Compromiso comunitario"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...serifDisplay,
      margin: "0 0 22px",
      fontWeight: 600,
      fontSize: "clamp(28px,3.4vw,40px)",
      lineHeight: 1.14
    }
  }, "Movimiento Nacional por el Bienestar del Anciano"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)",
      maxWidth: "470px"
    }
  }, "Presido esta ONG que beneficia a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "1.503 adultos mayores"), " en ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "31 instituciones"), " de todo el pa\xEDs. Este a\xF1o vamos a llegar a m\xE1s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Conocer la ONG"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null)
  }, "C\xF3mo colaborar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "160px 24px 160px 24px",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-taller.jpeg",
    alt: "Mateo dando una charla",
    style: {
      width: "100%",
      display: "block"
    }
  }))));
}

/* ========================= CONTACTO ========================= */
function Contacto() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v2-contacto",
    style: {
      padding: "84px 0",
      background: "var(--celeste-claro)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    num: "05",
    color: "var(--teal-700)"
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...serifDisplay,
      margin: "0 0 18px",
      fontWeight: 600,
      fontSize: "clamp(34px,4.4vw,52px)",
      lineHeight: 1.06
    }
  }, "Hablemos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: "19px",
      lineHeight: 1.7,
      color: "var(--text-body)",
      maxWidth: "380px"
    }
  }, "\xBFQuer\xE9s invitarme a una charla, sumar un taller o conocer Entendernos? Escribime y te respondo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "360px"
    }
  }, /*#__PURE__*/React.createElement(LinkRow, {
    tone: "teal",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconWhatsApp, null)
  }, "+598 98 917 770"), /*#__PURE__*/React.createElement(LinkRow, {
    tone: "white",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconInstagram, null),
    meta: "@psico.mateogarcia"
  }, "Instagram"))), /*#__PURE__*/React.createElement(Card, {
    padding: "34px",
    style: {
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tu nombre",
    placeholder: "\xBFC\xF3mo te llam\xE1s?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email o tel\xE9fono",
    placeholder: "Para poder responderte"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mensaje",
    textarea: true,
    rows: 4,
    placeholder: "Contame en qu\xE9 puedo acompa\xF1arte"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true
  }, "Enviar mensaje")))));
}

/* ========================== FOOTER ========================== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--marfil)",
      color: "var(--text-body)",
      padding: "56px 0 40px",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "340px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "var(--radius-circle)",
      background: "var(--azul-profundo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "27px",
      height: "27px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...serifDisplay,
      fontWeight: 700,
      fontSize: "17px"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.65,
      color: "var(--text-muted)"
    }
  }, "Psicolog\xEDa cercana, humana y aut\xE9ntica. Una persona acompa\xF1ando a otra."), /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 104,
    style: {
      marginTop: "20px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, [/*#__PURE__*/React.createElement(IconInstagram, null), /*#__PURE__*/React.createElement(IconWhatsApp, null), /*#__PURE__*/React.createElement(IconGlobe, null)].map((ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "var(--blanco)",
      border: "1px solid var(--border-default)",
      color: "var(--azul-profundo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, ic)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ed,
      marginTop: "40px",
      paddingTop: "22px",
      borderTop: "1px solid var(--border-default)",
      ...sans,
      fontSize: "12.5px",
      color: "var(--text-subtle)"
    }
  }, "\xA9 2026 Lic. Mateo Garc\xEDa Moreno \xB7 Montevideo, Uruguay \xB7 Entendernos\xAE es marca registrada \xB7 Dise\xF1o de Aby"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Entendernos, null), /*#__PURE__*/React.createElement(Charlas, null), /*#__PURE__*/React.createElement(QuoteBand, null), /*#__PURE__*/React.createElement(ONG, null), /*#__PURE__*/React.createElement(Contacto, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/web-app-v2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/web-app-v3.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Card,
  Avatar,
  Input,
  Quote,
  LinkRow,
  Olitas
} = window.MateoGarcADesignSystem_88efc5;
const {
  useState,
  useRef,
  useEffect
} = React;

/* ---------- iconos ---------- */
const IconWhatsApp = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 .1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
}));
const IconInstagram = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.3",
  cy: "6.7",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
const IconGlobe = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
}));
const IconArrow = ({
  s = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IconCards = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "6",
  width: "12",
  height: "15",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6l3-2.5 8 4.5-3 13-7-4"
}));
const IconHeart = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 20s-7-4.5-9-9c-1.3-3 .5-6 3.5-6 2 0 3.2 1.3 3.5 2.2.3-.9 1.5-2.2 3.5-2.2 3 0 4.8 3 3.5 6-2 4.5-8 9-8 9z"
}));
const IconMic = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "12",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11a7 7 0 0 0 14 0M12 18v3"
}));
const wrap = {
  maxWidth: "1160px",
  margin: "0 auto",
  padding: "0 36px"
};
const sans = {
  fontFamily: "var(--font-sans)"
};
const go = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.offsetTop - 72,
    behavior: "smooth"
  });
};

/* ---------- helpers de animación ---------- */
function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }), {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}
function CountUp({
  to,
  prefix = "",
  dur = 1500
}) {
  const [ref, seen] = useInView(0.5);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf;
    const start = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(e * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, v.toLocaleString("es-UY"));
}

/* capa de ola para el parallax del mar */
function SeaLayer({
  color,
  dur,
  height,
  opacity = 1
}) {
  const tile = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 720 120",
    preserveAspectRatio: "none",
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,60 C 120,18 240,18 360,60 C 480,102 600,102 720,60 L720,120 L0,120 Z",
    fill: color
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "v3-sea",
    style: {
      height,
      opacity,
      animation: `v3-drift ${dur}s linear infinite`
    }
  }, tile, tile);
}

/* cinta de olitas que deriva (movimiento constante) */
function Ribbon({
  bg = "var(--celeste-claro)",
  color = "var(--teal)"
}) {
  const group = Array.from({
    length: 9
  }, (_, i) => /*#__PURE__*/React.createElement(Olitas, {
    key: i,
    color: color,
    width: 120,
    style: {
      flex: "none"
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      padding: "26px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-ribbon",
    style: {
      gap: "40px"
    }
  }, group, group));
}

/* ============================ NAV ============================ */
function Nav() {
  const links = [["Sobre mí", "v3-sobre"], ["Entendernos", "v3-entendernos"], ["Charlas", "v3-charlas"], ["Comunidad", "v3-ong"], ["Contacto", "v3-contacto"]];
  const [h, setH] = useState(null);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const onDark = !solid;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: solid ? "rgba(250,252,253,0.9)" : "transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
      borderBottom: solid ? "1px solid var(--border-soft)" : "1px solid transparent",
      transition: "background .3s, border-color .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: "72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "var(--radius-circle)",
      background: onDark ? "rgba(255,255,255,0.14)" : "var(--azul-profundo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .3s"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "27px",
      height: "27px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "15px",
      color: onDark ? "#fff" : "var(--azul-profundo)",
      transition: "color .3s"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "28px"
    }
  }, links.map(([t, id], i) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null),
    style: {
      ...sans,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "13.5px",
      color: h === i ? "var(--coral)" : onDark ? "rgba(255,255,255,0.92)" : "var(--text-strong)",
      transition: "color .2s"
    }
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("v3-contacto")
  }, "Escribime"))));
}

/* ============================ HERO ============================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "linear-gradient(165deg, var(--azul-700) 0%, var(--azul-900) 100%)",
      paddingTop: "150px",
      paddingBottom: "200px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-float",
    style: {
      position: "absolute",
      top: "12%",
      right: "8%",
      width: "260px",
      height: "260px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(105,192,190,0.35), transparent 70%)",
      filter: "blur(6px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-float",
    style: {
      position: "absolute",
      top: "40%",
      left: "4%",
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(241,129,102,0.22), transparent 70%)",
      animationDelay: "-3s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      gap: "56px",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-rise"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontWeight: 600,
      fontSize: "12.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--celeste)",
      marginBottom: "22px"
    }
  }, /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 40
  }), " Psicolog\xEDa cercana"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...sans,
      margin: "0 0 24px",
      fontWeight: 800,
      fontSize: "clamp(42px, 5.4vw, 68px)",
      lineHeight: 1.03,
      letterSpacing: "-0.025em",
      color: "#fff"
    }
  }, "Una persona", /*#__PURE__*/React.createElement("br", null), "acompa\xF1ando", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)"
    }
  }, "a otra.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 34px",
      fontSize: "20px",
      lineHeight: 1.65,
      color: "var(--celeste-300)",
      maxWidth: "460px",
      fontFamily: "var(--font-serif)"
    }
  }, "Soy Mateo Garc\xEDa: psic\xF3logo y psicogeront\xF3logo. Acompa\xF1o personas, grupos y comunidades desde una mirada humana, sin juzgar y de igual a igual."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null),
    onClick: () => go("v3-entendernos")
  }, "Conoc\xE9 Entendernos"), /*#__PURE__*/React.createElement(Button, {
    variant: "soft",
    size: "lg",
    onClick: () => go("v3-charlas"),
    style: {
      background: "rgba(255,255,255,0.12)",
      color: "#fff"
    }
  }, "Charlas y talleres"))), /*#__PURE__*/React.createElement("div", {
    className: "v3-rise",
    style: {
      position: "relative",
      justifySelf: "center",
      animationDelay: "0.15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-blob",
    style: {
      width: "380px",
      height: "440px",
      overflow: "hidden",
      boxShadow: "0 30px 70px rgba(9,31,48,0.5)",
      border: "5px solid rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mateo-perfil.png",
    alt: "Mateo Garc\xEDa",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 0%",
      background: "#ABCAD7"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "v3-float",
    style: {
      position: "absolute",
      bottom: "20px",
      left: "-34px",
      background: "var(--blanco)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "13px 17px",
      display: "flex",
      alignItems: "center",
      gap: "11px",
      animationDelay: "-2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-circle)",
      background: "var(--coral-100)",
      color: "var(--coral-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconHeart, {
    s: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "15px",
      color: "var(--azul-profundo)"
    }
  }, "Premio INJU 2022"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontSize: "11px",
      color: "var(--text-muted)"
    }
  }, "Compromiso comunitario"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "200px",
      zIndex: 1,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(SeaLayer, {
    color: "#69C0BE",
    dur: 32,
    height: 150,
    opacity: 0.28
  }), /*#__PURE__*/React.createElement(SeaLayer, {
    color: "#ABCAD7",
    dur: 24,
    height: 120,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement(SeaLayer, {
    color: "#EEF8FC",
    dur: 17,
    height: 88,
    opacity: 1
  })));
}

/* ============================ STATS ============================ */
function Stats() {
  const items = [{
    n: 45,
    p: "",
    l: "cartas en Entendernos"
  }, {
    n: 1503,
    p: "",
    l: "adultos mayores beneficiados"
  }, {
    n: 31,
    p: "",
    l: "instituciones beneficiadas"
  }, {
    n: 30,
    p: "+",
    l: "charlas por el país"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--celeste-claro)",
      paddingBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "24px",
      padding: "20px 36px 44px"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "46px",
      color: "var(--azul-profundo)",
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: it.n,
    prefix: it.p
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "9px",
      lineHeight: 1.35
    }
  }, it.l)))));
}

/* ====================== reveal wrapper ====================== */
function Reveal({
  children,
  delay = 0
}) {
  const [ref, seen] = useInView(0.18);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : "translateY(28px)",
      transition: `opacity .7s var(--ease-out), transform .7s var(--ease-out)`,
      transitionDelay: `${delay}s`
    }
  }, children);
}
function Eyebrow({
  children,
  color = "var(--teal-700)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      display: "block",
      fontWeight: 600,
      fontSize: "12.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color,
      marginBottom: "16px"
    }
  }, children);
}
const h2s = {
  ...sans,
  fontWeight: 800,
  letterSpacing: "-0.02em",
  color: "var(--azul-profundo)",
  lineHeight: 1.1
};

/* ============================ SOBRE ============================ */
function Sobre() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v3-sobre",
    style: {
      padding: "92px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "60px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "v3-blob",
    style: {
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-hogar.jpeg",
    alt: "Mateo en un hogar de personas mayores",
    style: {
      width: "100%",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sobre m\xED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2s,
      fontSize: "clamp(30px,3.8vw,46px)",
      margin: "0 0 22px"
    }
  }, "No me interesa ser el psic\xF3logo perfecto"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)",
      maxWidth: "480px"
    }
  }, "Me interesa estar para el otro. Recorrer el pa\xEDs dando charlas, visitar hogares, crear herramientas y ayudar a m\xE1s personas a sentirse acompa\xF1adas."), /*#__PURE__*/React.createElement(Quote, {
    author: "Mateo Garc\xEDa",
    role: "Psic\xF3logo \xB7 Psicogeront\xF3logo"
  }, "Reconozco lo que logras y te aplaudo. No voy a juzgarte."))));
}

/* ======================== ENTENDERNOS ======================== */
function Entendernos() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v3-entendernos",
    style: {
      background: "var(--azul-profundo)",
      padding: "92px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Olitas, {
    color: "rgba(171,202,215,0.14)",
    width: 300,
    style: {
      position: "absolute",
      top: "44px",
      right: "-40px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "v3-float",
    style: {
      position: "relative",
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "330px",
      height: "400px",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      border: "6px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-entendernos.jpeg",
    alt: "Mateo sosteniendo el mazo Entendernos",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--celeste)"
  }, "Proyecto destacado"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2s,
      color: "#fff",
      fontSize: "clamp(36px,4.6vw,56px)",
      margin: "0 0 16px"
    }
  }, "Entendernos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: "19px",
      lineHeight: 1.7,
      color: "var(--celeste-300)",
      maxWidth: "440px",
      fontFamily: "var(--font-serif)"
    }
  }, "Un juego de 45 cartas creado para algo simple pero esencial: hablar, escucharnos y conectar de verdad. Para familias, parejas, aulas o equipos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "9px",
      flexWrap: "wrap",
      marginBottom: "30px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "teal",
    bordered: true
  }, "Empat\xEDa"), /*#__PURE__*/React.createElement(Tag, {
    tone: "celeste"
  }, "45 cartas"), /*#__PURE__*/React.createElement(Tag, {
    tone: "coral",
    bordered: true
  }, "Sin respuestas correctas")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(IconCards, null)
  }, "Comprar el mazo \xB7 $550"))));
}

/* ========================= CHARLAS ========================= */
function Charlas() {
  const cards = [{
    icon: /*#__PURE__*/React.createElement(IconMic, {
      s: 24
    }),
    tone: ["var(--teal-100)", "var(--teal-700)"],
    t: "Charlas",
    d: "Salud mental, vínculos y bienestar emocional para instituciones, escuelas y empresas."
  }, {
    icon: /*#__PURE__*/React.createElement(IconCards, {
      s: 24
    }),
    tone: ["var(--coral-100)", "var(--coral-700)"],
    t: "Talleres",
    d: "Espacios participativos con Entendernos para abrir conversaciones reales en grupo."
  }, {
    icon: /*#__PURE__*/React.createElement(IconHeart, {
      s: 24
    }),
    tone: ["var(--carmin-100)", "var(--carmin-700)"],
    t: "Visitas a hogares",
    d: "Acompañamiento a personas mayores junto al Movimiento por el Bienestar del Anciano."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "v3-charlas",
    style: {
      padding: "92px 0",
      background: "var(--marfil)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: "640px",
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--coral-700)"
  }, "Lo que hago"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2s,
      fontSize: "clamp(30px,3.8vw,46px)",
      margin: 0
    }
  }, "Charlas, talleres y comunidad"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "24px"
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.1
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "30px",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-float",
    style: {
      width: "56px",
      height: "56px",
      borderRadius: "var(--radius-lg)",
      background: c.tone[0],
      color: c.tone[1],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
      animationDelay: `${-i}s`
    }
  }, c.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...sans,
      margin: "0 0 10px",
      fontWeight: 700,
      fontSize: "21px",
      color: "var(--azul-profundo)"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15.5px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, c.d)))))));
}

/* =========================== ONG =========================== */
function ONG() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v3-ong",
    style: {
      padding: "92px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "60px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--coral-700)"
  }, "Compromiso comunitario"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2s,
      fontSize: "clamp(28px,3.4vw,40px)",
      margin: "0 0 20px"
    }
  }, "Movimiento Nacional por el Bienestar del Anciano"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)",
      maxWidth: "470px"
    }
  }, "Presido esta ONG que beneficia a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "1.503 adultos mayores"), " en ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "31 instituciones"), " de todo el pa\xEDs. Este a\xF1o vamos a llegar a m\xE1s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Conocer la ONG"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null)
  }, "C\xF3mo colaborar"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-blob",
    style: {
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-taller.jpeg",
    alt: "Mateo dando una charla",
    style: {
      width: "100%",
      display: "block"
    }
  })))));
}

/* ========================= CONTACTO ========================= */
function Contacto() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v3-contacto",
    style: {
      padding: "92px 0",
      background: "var(--celeste-claro)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2s,
      fontSize: "clamp(34px,4.4vw,52px)",
      margin: "0 0 18px"
    }
  }, "Hablemos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: "19px",
      lineHeight: 1.7,
      color: "var(--text-body)",
      maxWidth: "380px"
    }
  }, "\xBFQuer\xE9s invitarme a una charla, sumar un taller o conocer Entendernos? Escribime y te respondo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "360px"
    }
  }, /*#__PURE__*/React.createElement(LinkRow, {
    tone: "teal",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconWhatsApp, null)
  }, "+598 98 917 770"), /*#__PURE__*/React.createElement(LinkRow, {
    tone: "white",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconInstagram, null),
    meta: "@psico.mateogarcia"
  }, "Instagram"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tu nombre",
    placeholder: "\xBFC\xF3mo te llam\xE1s?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email o tel\xE9fono",
    placeholder: "Para poder responderte"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mensaje",
    textarea: true,
    rows: 4,
    placeholder: "Contame en qu\xE9 puedo acompa\xF1arte"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true
  }, "Enviar mensaje"))))));
}

/* ========================== FOOTER ========================== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--azul-900)",
      color: "#fff",
      padding: "56px 0 36px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "28px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "340px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "42px",
      height: "42px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "27px",
      height: "27px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "16px"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "var(--celeste-300)"
    }
  }, "Psicolog\xEDa cercana, humana y aut\xE9ntica. Una persona acompa\xF1ando a otra."), /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 108,
    style: {
      marginTop: "20px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, [/*#__PURE__*/React.createElement(IconInstagram, null), /*#__PURE__*/React.createElement(IconWhatsApp, null), /*#__PURE__*/React.createElement(IconGlobe, null)].map((ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, ic)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: "40px",
      paddingTop: "22px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      ...sans,
      fontSize: "12.5px",
      color: "var(--celeste-500)"
    }
  }, "\xA9 2026 Lic. Mateo Garc\xEDa Moreno \xB7 Montevideo, Uruguay \xB7 Entendernos\xAE es marca registrada \xB7 Dise\xF1o de Aby"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Ribbon, null), /*#__PURE__*/React.createElement(Entendernos, null), /*#__PURE__*/React.createElement(Charlas, null), /*#__PURE__*/React.createElement(ONG, null), /*#__PURE__*/React.createElement(Contacto, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/web-app-v3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/web-app-v4.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Card,
  Avatar,
  Input,
  Quote,
  LinkRow,
  Olitas
} = window.MateoGarcADesignSystem_88efc5;
const {
  useState,
  useRef,
  useEffect
} = React;

/* ---------- iconos ---------- */
const IconWhatsApp = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 .1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
}));
const IconInstagram = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.3",
  cy: "6.7",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
const IconGlobe = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
}));
const IconArrow = ({
  s = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IconShuffle = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 3h5v5M4 20l16-16M21 16v5h-5M15 15l6 6M4 4l5 5"
}));
const IconCards = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "6",
  width: "12",
  height: "15",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6l3-2.5 8 4.5-3 13-7-4"
}));
const IconHeart = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 20s-7-4.5-9-9c-1.3-3 .5-6 3.5-6 2 0 3.2 1.3 3.5 2.2.3-.9 1.5-2.2 3.5-2.2 3 0 4.8 3 3.5 6-2 4.5-8 9-8 9z"
}));
const IconMic = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "12",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11a7 7 0 0 0 14 0M12 18v3"
}));
const wrap = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 36px"
};
const sans = {
  fontFamily: "var(--font-sans)"
};
const fred = {
  fontFamily: "var(--font-entendernos)"
};
const go = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.offsetTop - 70,
    behavior: "smooth"
  });
};
const black = {
  ...sans,
  fontWeight: 900,
  letterSpacing: "-0.035em",
  lineHeight: 0.92,
  color: "var(--azul-profundo)"
};
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }), {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}
function Reveal({
  children,
  delay = 0
}) {
  const [ref, seen] = useInView(0.18);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : "translateY(30px)",
      transition: "opacity .7s var(--ease-out), transform .7s var(--ease-out)",
      transitionDelay: `${delay}s`
    }
  }, children);
}

/* ===================== EL MAZO INTERACTIVO ===================== */
const QUESTIONS = [{
  cat: "Adultez",
  color: "#ABCAD7",
  q: "¿Qué conversación venís postergando hace tiempo?"
}, {
  cat: "Niñez",
  color: "#69C0BE",
  q: "¿Cuándo fue la última vez que te reíste muchísimo?"
}, {
  cat: "Adolescencia",
  color: "#F18166",
  q: "¿Qué te gustaría que los adultos entendieran de vos?"
}, {
  cat: "Adultez mayor",
  color: "#133A59",
  q: "¿Qué recuerdo te gustaría que nunca se borre?"
}, {
  cat: "Adultez",
  color: "#ABCAD7",
  q: "¿Cuándo fue la última vez que pediste ayuda?"
}, {
  cat: "Adolescencia",
  color: "#F18166",
  q: "¿Hay algo que te cueste decir en voz alta?"
}, {
  cat: "Adultez mayor",
  color: "#133A59",
  q: "¿Qué aprendiste de la vida que hoy querés transmitir?"
}];
function Deck() {
  const [i, setI] = useState(0);
  const [back, setBack] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const draw = () => {
    setBack(true);
    setDrawn(true);
    setTimeout(() => {
      setI(p => (p + 1 + Math.floor(Math.random() * (QUESTIONS.length - 1))) % QUESTIONS.length);
      setBack(false);
    }, 260);
  };
  const card = QUESTIONS[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "300px",
      height: "400px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "rotate(-9deg) translate(-14px,8px)",
      background: "var(--coral)",
      borderRadius: "26px",
      boxShadow: "var(--shadow-md)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "rotate(6deg) translate(14px,4px)",
      background: "var(--teal)",
      borderRadius: "26px",
      boxShadow: "var(--shadow-md)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "v4-deck",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-flip" + (back ? " is-back" : ""),
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-face",
    style: {
      background: "#fff",
      borderRadius: "26px",
      boxShadow: "var(--shadow-xl)",
      border: `3px solid ${card.color}`,
      padding: "30px 26px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...fred,
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: card.color === "#ABCAD7" ? "var(--azul-600)" : card.color
    }
  }, card.cat), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-azul.svg",
    alt: "",
    style: {
      width: "30px",
      height: "30px",
      opacity: 0.85
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      ...fred,
      margin: 0,
      fontWeight: 600,
      fontSize: "26px",
      lineHeight: 1.28,
      color: "var(--azul-profundo)"
    }
  }, card.q), /*#__PURE__*/React.createElement(Olitas, {
    color: card.color,
    width: 86
  })), /*#__PURE__*/React.createElement("div", {
    className: "v4-face v4-face--back",
    style: {
      background: "var(--azul-profundo)",
      borderRadius: "26px",
      boxShadow: "var(--shadow-xl)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/entendernos/logo-color.svg",
    alt: "",
    style: {
      width: "120px",
      height: "120px",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...fred,
      fontWeight: 700,
      fontSize: "22px",
      color: "#fff"
    }
  }, "Entendernos"))))), /*#__PURE__*/React.createElement("button", {
    onClick: draw,
    style: {
      ...sans,
      cursor: "pointer",
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "var(--carmin)",
      color: "#fff",
      fontWeight: 700,
      fontSize: "16px",
      padding: "15px 26px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement(IconShuffle, null), " ", drawn ? "Sacar otra carta" : "Sacá una carta"));
}

/* ============================ MARQUEE ============================ */
function Marquee({
  bg = "var(--azul-profundo)",
  color = "#fff"
}) {
  const words = ["Hablar", "Escuchar", "Entendernos", "Conectar", "Acompañar", "De igual a igual"];
  const group = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "26px",
      paddingRight: "26px"
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontWeight: 900,
      fontSize: "30px",
      letterSpacing: "-0.02em",
      color,
      textTransform: "uppercase"
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "var(--coral)",
      flex: "none"
    }
  }))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      padding: "20px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-marquee"
  }, group, group));
}

/* ============================ NAV ============================ */
function Nav() {
  const links = [["Sobre mí", "v4-sobre"], ["Entendernos", "v4-entendernos"], ["Charlas", "v4-charlas"], ["Comunidad", "v4-ong"], ["Contacto", "v4-contacto"]];
  const [h, setH] = useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(250,252,253,0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "2px solid var(--azul-profundo)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "11px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-circle)",
      background: "var(--azul-profundo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "26px",
      height: "26px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 900,
      fontSize: "15px",
      letterSpacing: "-0.02em"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "26px"
    }
  }, links.map(([t, id], i) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null),
    style: {
      ...sans,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "13.5px",
      color: h === i ? "var(--carmin)" : "var(--azul-profundo)",
      transition: "color .2s"
    }
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("v4-contacto")
  }, "Escribime"))));
}

/* ============================ HERO ============================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--celeste-claro)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-80px",
      right: "-120px",
      width: "640px",
      height: "640px",
      borderRadius: "50%",
      background: "radial-gradient(circle at 40% 40%, rgba(241,129,102,0.30), rgba(171,202,215,0))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "48px",
      alignItems: "center",
      padding: "70px 36px 84px",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v4-wobble",
    style: {
      "--rot": "-3deg",
      display: "inline-block",
      background: "var(--carmin)",
      color: "#fff",
      ...sans,
      fontWeight: 800,
      fontSize: "13px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      marginBottom: "26px"
    }
  }, "Psic\xF3logo \xB7 Psicogeront\xF3logo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...black,
      margin: "0 0 26px",
      fontSize: "clamp(54px, 8vw, 104px)"
    }
  }, "Hablemos", /*#__PURE__*/React.createElement("br", null), "de ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--carmin)"
    }
  }, "verdad.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 32px",
      fontSize: "21px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "440px"
    }
  }, "Soy Mateo Garc\xEDa. Acompa\xF1o personas y comunidades, y cre\xE9 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "Entendernos"), ": 45 cartas para conectar de verdad. Prob\xE1 una."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null),
    onClick: () => go("v4-entendernos")
  }, "Comprar el mazo \xB7 $550"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go("v4-sobre")
  }, "Conocer a Mateo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement(Deck, null))));
}

/* ============================ STATS BENTO ============================ */
function Bento() {
  const blocks = [{
    n: "45",
    l: "cartas en Entendernos",
    bg: "var(--teal-500)",
    fg: "#fff",
    rot: "-1.5deg"
  }, {
    n: "1.503",
    l: "adultos mayores beneficiados",
    bg: "var(--azul-profundo)",
    fg: "#fff",
    rot: "1.2deg"
  }, {
    n: "31",
    l: "instituciones beneficiadas",
    bg: "var(--coral)",
    fg: "#3a1208",
    rot: "-1deg"
  }, {
    n: "+30",
    l: "charlas por el país",
    bg: "var(--celeste)",
    fg: "var(--azul-profundo)",
    rot: "1.6deg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "64px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "18px"
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.08
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: b.bg,
      color: b.fg,
      borderRadius: "var(--radius-xl)",
      padding: "26px 22px",
      transform: `rotate(${b.rot})`,
      boxShadow: "var(--shadow-md)",
      minHeight: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...black,
      fontSize: "44px",
      color: b.fg
    }
  }, b.n), /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontWeight: 600,
      fontSize: "13px",
      lineHeight: 1.35,
      opacity: 0.92
    }
  }, b.l))))));
}

/* ============================ SOBRE ============================ */
function Sobre() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v4-sobre",
    style: {
      padding: "40px 0 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "12.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--teal-700)"
    }
  }, "Sobre m\xED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...black,
      fontSize: "clamp(36px,5vw,60px)",
      margin: "14px 0 24px"
    }
  }, "No quiero ser el psic\xF3logo ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--carmin)"
    }
  }, "perfecto.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 22px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)",
      maxWidth: "480px"
    }
  }, "Quiero estar para el otro. Recorrer el pa\xEDs dando charlas, visitar hogares, crear herramientas y ayudar a m\xE1s personas a sentirse acompa\xF1adas."), /*#__PURE__*/React.createElement(Quote, {
    author: "Mateo Garc\xEDa",
    role: "Psic\xF3logo \xB7 Psicogeront\xF3logo"
  }, "Reconozco lo que logras y te aplaudo. No voy a juzgarte.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-wobble",
    style: {
      "--rot": "2deg",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      border: "6px solid #fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-hogar.jpeg",
    alt: "Mateo en un hogar de personas mayores",
    style: {
      width: "100%",
      display: "block"
    }
  })))));
}

/* ======================== ENTENDERNOS (CTA) ======================== */
function Entendernos() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v4-entendernos",
    style: {
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--azul-profundo)",
      borderRadius: "var(--radius-2xl)",
      padding: "56px 52px",
      position: "relative",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "40px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Olitas, {
    color: "rgba(171,202,215,0.16)",
    width: 320,
    style: {
      position: "absolute",
      bottom: "-20px",
      left: "-30px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...fred,
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--celeste)"
    }
  }, "El juego"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...fred,
      fontWeight: 700,
      color: "#fff",
      fontSize: "clamp(40px,5.6vw,68px)",
      lineHeight: 1,
      margin: "12px 0 18px",
      letterSpacing: "-0.01em"
    }
  }, "Entendernos"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 26px",
      fontSize: "19px",
      lineHeight: 1.7,
      color: "var(--celeste-300)",
      maxWidth: "440px"
    }
  }, "45 cartas, sin respuestas correctas. Para familias, parejas, aulas o equipos. Llev\xE1 la conversaci\xF3n a la mesa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(IconCards, null)
  }, "Comprar \xB7 $550"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      alignSelf: "center",
      fontSize: "13px",
      color: "var(--celeste-300)"
    }
  }, "Env\xEDos en Uruguay"))), /*#__PURE__*/React.createElement("div", {
    className: "v4-wobble",
    style: {
      "--rot": "4deg",
      justifySelf: "center",
      width: "190px",
      height: "190px",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      border: "5px solid rgba(255,255,255,0.18)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/entendernos/logo-color.svg",
    alt: "Entendernos",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))))));
}

/* ========================= CHARLAS ========================= */
function Charlas() {
  const cards = [{
    icon: /*#__PURE__*/React.createElement(IconMic, {
      s: 26
    }),
    bg: "var(--teal-100)",
    fg: "var(--teal-700)",
    t: "Charlas",
    d: "Salud mental, vínculos y bienestar emocional para instituciones, escuelas y empresas.",
    rot: "-2deg"
  }, {
    icon: /*#__PURE__*/React.createElement(IconCards, {
      s: 26
    }),
    bg: "var(--coral-100)",
    fg: "var(--coral-700)",
    t: "Talleres",
    d: "Espacios participativos con Entendernos para abrir conversaciones reales en grupo.",
    rot: "1.5deg"
  }, {
    icon: /*#__PURE__*/React.createElement(IconHeart, {
      s: 26
    }),
    bg: "var(--carmin-100)",
    fg: "var(--carmin-700)",
    t: "Visitas a hogares",
    d: "Acompañamiento a personas mayores junto al Movimiento por el Bienestar del Anciano.",
    rot: "-1deg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "v4-charlas",
    style: {
      padding: "84px 0",
      background: "var(--celeste-claro)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...black,
      fontSize: "clamp(32px,4.4vw,52px)",
      margin: "0 0 44px",
      maxWidth: "640px"
    }
  }, "Psicolog\xEDa fuera del ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--carmin)"
    }
  }, "consultorio."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "22px"
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      padding: "30px",
      boxShadow: "var(--shadow-sm)",
      border: "1px solid var(--border-soft)",
      height: "100%",
      transform: `rotate(${c.rot})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "58px",
      height: "58px",
      borderRadius: "var(--radius-lg)",
      background: c.bg,
      color: c.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px"
    }
  }, c.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...sans,
      margin: "0 0 10px",
      fontWeight: 800,
      fontSize: "22px",
      color: "var(--azul-profundo)"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: 0,
      fontSize: "15.5px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, c.d)))))));
}

/* =========================== ONG =========================== */
function ONG() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v4-ong",
    style: {
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "v4-wobble",
    style: {
      "--rot": "-2deg",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      border: "6px solid #fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-taller.jpeg",
    alt: "Mateo dando una charla",
    style: {
      width: "100%",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "12.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--coral-700)"
    }
  }, "Compromiso comunitario"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...black,
      fontSize: "clamp(28px,3.6vw,42px)",
      margin: "14px 0 22px"
    }
  }, "Movimiento por el Bienestar del Anciano"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 26px",
      fontSize: "19px",
      lineHeight: 1.75,
      color: "var(--text-body)",
      maxWidth: "470px"
    }
  }, "Presido esta ONG que beneficia a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "1.503 adultos mayores"), " en ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--azul-profundo)"
    }
  }, "31 instituciones"), " de todo el pa\xEDs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Conocer la ONG"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null)
  }, "C\xF3mo colaborar")))));
}

/* ========================= CONTACTO ========================= */
function Contacto() {
  return /*#__PURE__*/React.createElement("section", {
    id: "v4-contacto",
    style: {
      padding: "84px 0",
      background: "var(--azul-profundo)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "12.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--celeste)"
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...black,
      color: "#fff",
      fontSize: "clamp(40px,6vw,76px)",
      margin: "14px 0 18px"
    }
  }, "Hablemos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 28px",
      fontSize: "19px",
      lineHeight: 1.7,
      color: "var(--celeste-300)",
      maxWidth: "380px"
    }
  }, "\xBFQuer\xE9s invitarme a una charla, sumar un taller o conocer Entendernos? Escribime y te respondo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "360px"
    }
  }, /*#__PURE__*/React.createElement(LinkRow, {
    tone: "teal",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconWhatsApp, null)
  }, "+598 98 917 770"), /*#__PURE__*/React.createElement(LinkRow, {
    tone: "white",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconInstagram, null),
    meta: "@psico.mateogarcia"
  }, "Instagram"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tu nombre",
    placeholder: "\xBFC\xF3mo te llam\xE1s?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email o tel\xE9fono",
    placeholder: "Para poder responderte"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mensaje",
    textarea: true,
    rows: 4,
    placeholder: "Contame en qu\xE9 puedo acompa\xF1arte"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true
  }, "Enviar mensaje"))))));
}

/* ========================== FOOTER ========================== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--azul-900)",
      color: "#fff",
      padding: "52px 0 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "340px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "11px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "26px",
      height: "26px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 900,
      fontSize: "16px"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: 0,
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "var(--celeste-300)"
    }
  }, "Psicolog\xEDa cercana, humana y aut\xE9ntica. Una persona acompa\xF1ando a otra."), /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 108,
    style: {
      marginTop: "20px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, [/*#__PURE__*/React.createElement(IconInstagram, null), /*#__PURE__*/React.createElement(IconWhatsApp, null), /*#__PURE__*/React.createElement(IconGlobe, null)].map((ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, ic)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: "38px",
      paddingTop: "22px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      ...sans,
      fontSize: "12.5px",
      color: "var(--celeste-500)"
    }
  }, "\xA9 2026 Lic. Mateo Garc\xEDa Moreno \xB7 Montevideo, Uruguay \xB7 Entendernos\xAE es marca registrada \xB7 Dise\xF1o de Aby"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(Bento, null), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Entendernos, null), /*#__PURE__*/React.createElement(Charlas, null), /*#__PURE__*/React.createElement(ONG, null), /*#__PURE__*/React.createElement(Contacto, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/web-app-v4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/web-app.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Avatar,
  Input,
  SectionHeading,
  Quote,
  LinkRow,
  Olitas
} = window.MateoGarcADesignSystem_88efc5;

/* ---------- iconos UI (glifos simples de marca social) ---------- */
const IconWhatsApp = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 .1-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
}));
const IconInstagram = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.3",
  cy: "6.7",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
const IconGlobe = ({
  s = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
}));
const IconArrow = ({
  s = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IconCards = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "6",
  width: "12",
  height: "15",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6l3-2.5 8 4.5-3 13-7-4"
}));
const IconHeart = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 20s-7-4.5-9-9c-1.3-3 .5-6 3.5-6 2 0 3.2 1.3 3.5 2.2.3-.9 1.5-2.2 3.5-2.2 3 0 4.8 3 3.5 6-2 4.5-8 9-8 9z"
}));
const IconMic = ({
  s = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "12",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11a7 7 0 0 0 14 0M12 18v3"
}));
const wrap = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "0 32px"
};
const sans = {
  fontFamily: "var(--font-sans)"
};
function NavLink({
  children,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: "var(--font-serif)",
      cursor: "pointer",
      fontWeight: 500,
      fontSize: "15px",
      color: h ? "var(--carmin)" : "var(--azul-profundo)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, children);
}

/* ============================ NAV ============================ */
function Nav() {
  const links = [["Sobre mí", "sobre"], ["Entendernos", "entendernos"], ["Charlas", "charlas"], ["Comunidad", "ong"], ["Contacto", "contacto"]];
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.86)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "var(--azul-profundo)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "28px",
      height: "28px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "15px",
      color: "var(--azul-profundo)"
    }
  }, "Mateo Garc\xEDa Moreno"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 600,
      fontSize: "10px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Psic\xF3logo \xB7 Psicogeront\xF3logo"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "28px"
    }
  }, links.map(([t, id]) => /*#__PURE__*/React.createElement(NavLink, {
    key: id,
    onClick: () => go(id)
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("contacto")
  }, "Escribime"))));
}

/* ============================ HERO ============================ */
function Hero() {
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg, var(--celeste-claro) 0%, #fff 100%)",
      paddingTop: "64px",
      paddingBottom: "72px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--teal-700)",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 36
  }), " Psicolog\xEDa cercana"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...sans,
      margin: "0 0 22px",
      fontWeight: 800,
      fontSize: "clamp(40px, 5.2vw, 64px)",
      lineHeight: 1.04,
      letterSpacing: "-0.025em",
      color: "var(--azul-profundo)"
    }
  }, "Una persona", /*#__PURE__*/React.createElement("br", null), "acompa\xF1ando a otra."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: "20px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "480px"
    }
  }, "Soy Mateo Garc\xEDa: psic\xF3logo y psicogeront\xF3logo. Acompa\xF1o personas, grupos y comunidades desde una mirada humana, sin juzgar y de igual a igual."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null),
    onClick: () => go("entendernos")
  }, "Conoc\xE9 Entendernos"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go("charlas")
  }, "Charlas y talleres"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-18px -18px auto auto",
      width: "320px",
      height: "380px",
      background: "var(--celeste)",
      borderRadius: "48% 52% 56% 44% / 54% 46% 54% 46%",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "350px",
      height: "420px",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mateo-perfil.png",
    alt: "Mateo Garc\xEDa",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 0%",
      background: "#ABCAD7"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-22px",
      left: "-26px",
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "var(--coral-100)",
      color: "var(--coral-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconHeart, {
    s: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "16px",
      color: "var(--azul-profundo)"
    }
  }, "Premio INJU 2022"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, "Compromiso comunitario"))))));
}

/* ============================ STATS ============================ */
function Stats() {
  const items = [["45", "cartas en Entendernos"], ["1.503", "adultos mayores beneficiados"], ["31", "instituciones beneficiadas"], ["+30", "charlas por todo el país"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--azul-profundo)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "24px",
      padding: "44px 32px"
    }
  }, items.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "44px",
      color: "#fff",
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontSize: "13px",
      color: "var(--celeste-300)",
      marginTop: "8px",
      lineHeight: 1.3
    }
  }, l)))));
}

/* ============================ SOBRE ============================ */
function Sobre() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-hogar.jpeg",
    alt: "Mateo en un hogar de personas mayores",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--celeste-500)",
    width: 120,
    style: {
      position: "absolute",
      bottom: "-30px",
      right: "10px"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sobre m\xED",
    title: "No me interesa ser el psic\xF3logo perfecto",
    subtitle: "Me interesa estar para el otro. Recorrer el pa\xEDs dando charlas, visitar hogares, crear herramientas y ayudar a m\xE1s personas a sentirse acompa\xF1adas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    author: "Mateo Garc\xEDa",
    role: "Psic\xF3logo \xB7 Psicogeront\xF3logo"
  }, "Reconozco lo que logras y te aplaudo. No voy a juzgarte.")))));
}

/* ======================== ENTENDERNOS ======================== */
function Entendernos() {
  return /*#__PURE__*/React.createElement("section", {
    id: "entendernos",
    style: {
      background: "var(--azul-profundo)",
      padding: "96px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Olitas, {
    color: "rgba(171,202,215,0.22)",
    width: 260,
    style: {
      position: "absolute",
      top: "40px",
      right: "-30px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-20px",
      background: "var(--teal)",
      borderRadius: "var(--radius-2xl)",
      opacity: 0.18,
      transform: "rotate(-4deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "330px",
      height: "400px",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-entendernos.jpeg",
    alt: "Mateo sosteniendo el mazo Entendernos",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--celeste)",
      marginBottom: "16px"
    }
  }, "Proyecto destacado"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sans,
      margin: "0 0 18px",
      fontWeight: 800,
      fontSize: "clamp(34px,4.5vw,52px)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, "Entendernos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: "19px",
      lineHeight: 1.65,
      color: "var(--celeste-300)",
      maxWidth: "440px"
    }
  }, "Un juego de 45 cartas creado para algo simple pero esencial: hablar, escucharnos y conectar de verdad. Para familias, parejas, aulas o equipos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "30px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "celeste"
  }, "Empat\xEDa"), /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    solid: true
  }, "45 cartas"), /*#__PURE__*/React.createElement(Badge, {
    tone: "celeste"
  }, "Sin respuestas correctas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(IconCards, null)
  }, "Comprar el mazo \xB7 $550"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...sans,
      fontSize: "13px",
      color: "var(--celeste-300)"
    }
  }, "Env\xEDos en Uruguay")))));
}

/* ========================= CHARLAS ========================= */
function Charlas() {
  const cards = [{
    icon: /*#__PURE__*/React.createElement(IconMic, {
      s: 24
    }),
    tone: "teal",
    t: "Charlas",
    d: "Salud mental, vínculos y bienestar emocional para instituciones, escuelas y empresas."
  }, {
    icon: /*#__PURE__*/React.createElement(IconCards, {
      s: 24
    }),
    tone: "coral",
    t: "Talleres",
    d: "Espacios participativos con Entendernos para abrir conversaciones reales en grupo."
  }, {
    icon: /*#__PURE__*/React.createElement(IconHeart, {
      s: 24
    }),
    tone: "carmin",
    t: "Visitas a hogares",
    d: "Acompañamiento a personas mayores junto al Movimiento Nacional por el Bienestar del Anciano."
  }];
  const toneBg = {
    teal: ["var(--teal-100)", "var(--teal-700)"],
    coral: ["var(--coral-100)", "var(--coral-700)"],
    carmin: ["var(--carmin-100)", "var(--carmin-700)"]
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "charlas",
    style: {
      padding: "96px 0",
      background: "var(--celeste-claro)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 48px"
    },
    eyebrow: "Lo que hago",
    title: "Charlas, talleres y comunidad",
    subtitle: "Llevo la psicolog\xEDa fuera del consultorio: a las aulas, las plazas y los hogares."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "24px"
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: "28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "54px",
      height: "54px",
      borderRadius: "var(--radius-lg)",
      background: toneBg[c.tone][0],
      color: toneBg[c.tone][1],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px"
    }
  }, c.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...sans,
      margin: "0 0 10px",
      fontWeight: 700,
      fontSize: "21px",
      color: "var(--azul-profundo)"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15.5px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, c.d))))));
}

/* =========================== ONG =========================== */
function ONG() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ong",
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Compromiso comunitario",
    eyebrowTone: "coral",
    title: "Movimiento Nacional por el Bienestar del Anciano",
    subtitle: "Presido esta ONG que beneficia a 1.503 adultos mayores en 31 instituciones de todo el pa\xEDs. Este a\xF1o vamos a llegar a m\xE1s."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      marginTop: "28px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Conocer la ONG"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, null)
  }, "C\xF3mo colaborar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/mateo-taller.jpeg",
    alt: "Mateo dando una charla",
    style: {
      width: "100%",
      display: "block"
    }
  }))));
}

/* ========================= CONTACTO ========================= */
function Contacto() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      padding: "96px 0",
      background: "var(--celeste-claro)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contacto",
    title: "Hablemos",
    subtitle: "\xBFQuer\xE9s invitarme a una charla, sumar un taller o conocer Entendernos? Escribime y te respondo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "28px",
      maxWidth: "360px"
    }
  }, /*#__PURE__*/React.createElement(LinkRow, {
    tone: "teal",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconWhatsApp, null)
  }, "+598 98 917 770"), /*#__PURE__*/React.createElement(LinkRow, {
    tone: "white",
    href: "#",
    icon: /*#__PURE__*/React.createElement(IconInstagram, null),
    meta: "@psico.mateogarcia"
  }, "Instagram"))), /*#__PURE__*/React.createElement(Card, {
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tu nombre",
    placeholder: "\xBFC\xF3mo te llam\xE1s?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email o tel\xE9fono",
    placeholder: "Para poder responderte"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mensaje",
    textarea: true,
    rows: 4,
    placeholder: "Contame en qu\xE9 puedo acompa\xF1arte"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true
  }, "Enviar mensaje")))));
}

/* ========================== FOOTER ========================== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--azul-900)",
      color: "#fff",
      padding: "56px 0 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "320px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-mateo-negativo.svg",
    alt: "",
    style: {
      width: "28px",
      height: "28px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sans,
      fontWeight: 800,
      fontSize: "16px"
    }
  }, "Mateo Garc\xEDa Moreno")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "var(--celeste-300)"
    }
  }, "Psicolog\xEDa cercana, humana y aut\xE9ntica. Una persona acompa\xF1ando a otra."), /*#__PURE__*/React.createElement(Olitas, {
    color: "var(--teal)",
    width: 110,
    style: {
      marginTop: "20px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconInstagram, null)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconWhatsApp, null)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconGlobe, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: "40px",
      paddingTop: "22px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      ...sans,
      fontSize: "12.5px",
      color: "var(--celeste-500)"
    }
  }, "\xA9 2026 Lic. Mateo Garc\xEDa Moreno \xB7 Montevideo, Uruguay \xB7 Entendernos\xAE es marca registrada \xB7 Dise\xF1o de Aby"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Entendernos, null), /*#__PURE__*/React.createElement(Charlas, null), /*#__PURE__*/React.createElement(ONG, null), /*#__PURE__*/React.createElement(Contacto, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/web-app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LinkRow = __ds_scope.LinkRow;

__ds_ns.Olitas = __ds_scope.Olitas;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
