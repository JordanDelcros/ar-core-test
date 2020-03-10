const OFF = "off";
const WARNING = "warn";
const ERROR = "error";

const ALWAYS = "always";
const NEVER = "never";

const INLINE_ELEMENTS = ["a", "abbr", "audio", "b", "bdi", "bdo", "canvas", "cite", "code", "data", "del", "dfn", "em", "h1", "h2", "h3", "h4", "h5", "h6", "i", "iframe", "ins", "kbd", "label", "map", "mark", "noscript", "object", "output", "p", "picture", "q", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "svg", "time", "u", "var", "video"];

module.exports = {
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: "2017",
		sourceType: "module"
	},
	extends: [
		"plugin:vue/recommended",
		"plugin:vue-scoped-css/recommended"
	],
	rules: {
		semi: [WARNING, ALWAYS],
		quotes: [ERROR, "double"],
		eqeqeq: [ERROR, "always"],
		"one-var": [ERROR, "never"],
		"eol-last": [WARNING, ALWAYS],
		"no-unused-vars": WARNING,
		"semi-spacing": [ERROR, {
			before: false,
			after: true
		}],
		"space-before-function-paren": [ERROR, NEVER],
		"space-before-blocks": [ERROR, NEVER],
		"array-bracket-spacing": [ERROR, NEVER],
		"object-curly-spacing": [ERROR, ALWAYS],
		"array-bracket-spacing": [ERROR, NEVER],
		"keyword-spacing": [ERROR, {
			before: true,
			after: false,
			overrides: {
				import: {
					before: false,
					after: true
				},
				from: {
					before: true,
					after: true
				},
				else: {
					before: false,
					after: true
				},
				default: {
					before: false,
					after: true
				},
				return: {
					before: false,
					after: true
				},
				var: {
					before: false,
					after: true
				},
				let: {
					before: false,
					after: true
				},
				const: {
					before: false,
					after: true
				}
			}
		}],
		"brace-style": [ERROR, "stroustrup"],
		"use-isnan": ERROR,
		"vue-scoped-css/require-scoped": [OFF],
		"vue/html-indent": [ERROR, "tab"],
		"vue/singleline-html-element-content-newline": [WARNING, {
			ignoreWhenNoAttributes: true,
			ignoreWhenEmpty: true,
			ignores: INLINE_ELEMENTS
		}],
		"vue/multiline-html-element-content-newline": [ERROR, {
			allowEmptyLines: false
		}],
		"vue/html-self-closing": [ERROR, {
			html: {
				void: ALWAYS,
				normal: NEVER,
				component: ALWAYS
			}
		}],
		"vue/html-closing-bracket-spacing": [ERROR, {
			startTag: NEVER,
			endTag: NEVER,
			selfClosingTag: NEVER
		}],
		"vue/script-indent": [ERROR, "tab", {
			baseIndent: 1,
			switchCase: 1
		}],
		"vue/max-attributes-per-line": [OFF],
		"vue-scoped-css/no-unused-selector": [OFF]
	}
};