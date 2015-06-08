/*! dhx 2015-06-07 */
$dhx.ui.desktop.settings = {
    version: "1.0.3",
    base_path: "",
    application_path: "",
    icons_path: "",
    dhtmlx_codebase_path: "",
    menu_contextual: {
        icons_path: "",
        context: !0,
        onload: function() {},
        onclick: function(a) {},
        items: [{
            id: "settings",
            text: $dhx.ui.language.Settings,
            items: [{
                id: "idiom",
                text: $dhx.ui.language.SelectIdiom,
                img: "editor.png",
                items: [{
                    id: "portuguese",
                    text: $dhx.ui.language.Portuguese,
                    img: "flags/pt-br.png",
                    type: "radio",
                    group: "idiom",
                    checked: "pt-br" == $dhx.ui.i18n.getUserIdiom() ? !0 : "pt-br" == $dhx.ui.i18n.idiom ? !0 : !1
                }, {
                    id: "sep1670",
                    type: "separator"
                }, {
                    id: "english",
                    text: $dhx.ui.language.English,
                    img: "flags/en.png",
                    type: "radio",
                    group: "idiom",
                    checked: "en-us" == $dhx.ui.i18n.getUserIdiom() ? !0 : "en-us" == $dhx.ui.i18n.idiom ? !0 : !1
                }]
            }, {
                id: "skin",
                text: $dhx.ui.language.Selectskin,
                img: "skin.png",
                items: [{
                    id: "Unity",
                    text: "Unity",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() ? "dhx_skyblue" == $dhx.ui.getUserSkin().skin && "Unity" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1 : !0
                }, {
                    id: "sep1670911",
                    type: "separator"
                }, {
                    id: "dhx_skyblue",
                    text: "skyblue",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_skyblue" == $dhx.ui.getUserSkin().skin && "dhx_skyblue" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "light-green",
                    text: "light-green",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_skyblue" == $dhx.ui.getUserSkin().skin && "light-green" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "clouds",
                    text: "clouds",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_skyblue" == $dhx.ui.getUserSkin().skin && "clouds" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "pink-yellow",
                    text: "pink-yellow",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_skyblue" == $dhx.ui.getUserSkin().skin && "pink-yellow" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "sep16709",
                    type: "separator"
                }, {
                    id: "dhx_terrace",
                    text: "terrace",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_terrace" == $dhx.ui.getUserSkin().skin && "dhx_terrace" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "terrace-blue",
                    text: "terrace-blue",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_terrace" == $dhx.ui.getUserSkin().skin && "terrace-blue" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "sep167094",
                    type: "separator"
                }, {
                    id: "dhx_web",
                    text: "web",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_web" == $dhx.ui.getUserSkin().skin && "dhx_web" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }, {
                    id: "web-green",
                    text: "web-green",
                    type: "radio",
                    group: "skin",
                    checked: $dhx.ui.getUserSkin() && "dhx_web" == $dhx.ui.getUserSkin().skin && "web-green" == $dhx.ui.getUserSkin().skin_subset ? !0 : !1
                }]
            }]
        }, {
            id: "help",
            text: $dhx.ui.language.Help,
            items: [{
                id: "quick_help",
                text: $dhx.ui.language.QuickHelp,
                img: "help.gif"
            }, {
                id: "sep189000",
                type: "separator"
            }, {
                id: "bug_report",
                text: $dhx.ui.language.ReportBug,
                img: "bug_reporting.png"
            }]
        }, {
            id: "about",
            text: $dhx.ui.language.About,
            img: "about.png"
        }]
    },
    menu_contextual_idiom: {
        icons_path: "",
        context: !0,
        onload: function() {},
        onclick: function(a) {},
        items: [{
            id: "portuguese",
            text: $dhx.ui.language.Portuguese,
            img: "flags/pt-br.png",
            type: "radio",
            group: "idiom",
            checked: "pt-br" == $dhx.ui.i18n.getUserIdiom() ? !0 : "pt-br" == $dhx.ui.i18n.idiom ? !0 : !1
        }, {
            id: "sep1670",
            type: "separator"
        }, {
            id: "english",
            text: $dhx.ui.language.English,
            img: "flags/en.png",
            type: "radio",
            group: "idiom",
            checked: "en-us" == $dhx.ui.i18n.getUserIdiom() ? !0 : "en-us" == $dhx.ui.i18n.idiom ? !0 : !1
        }]
    },
    menu_contextual_programs: {
        icons_path: "",
        context: !0,
        onload: function() {},
        onclick: function(a) {},
        items: [{
            id: "open",
            text: $dhx.ui.language.open
        }, {
            id: "sep1670",
            type: "separator"
        }, {
            id: "close",
            text: $dhx.ui.language.close,
            disabled: !0
        }, {
            id: "sep1671",
            type: "separator"
        }, {
            id: "close_all",
            text: $dhx.ui.language.closeall
        }]
    },
    menu_contextual_windows: {
        icons_path: "",
        onload: function() {},
        onclick: function(a) {},
        items: [{
            id: "close",
            text: $dhx.ui.language.close
        }]
    },
    cruder: {
        window: {
            left: function() {
                return $dhx.getPagePosition("x", 940, 550)
            },
            top: $dhx.getPagePosition("y", 940, 550),
            width: 940,
            height: 550,
            icon: "form.png",
            icon_dis: "form.png",
            skin: $dhx.ui.skin
        }
    }
};