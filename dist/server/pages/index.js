(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 579:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"menu": "Home_menu__2ncGe",
	"menu_group_heading": "Home_menu_group_heading__Hbl0f",
	"menu_group": "Home_menu_group__rIqD6",
	"menu_item": "Home_menu_item__w_dwB",
	"menu_item_image": "Home_menu_item_image__8i2V1",
	"menu_item_text": "Home_menu_item_text__7Tq0n",
	"menu_item_heading": "Home_menu_item_heading__N2Kat",
	"menu_item_heading_name": "Home_menu_item_heading_name__P9GBp",
	"menu_item_name": "Home_menu_item_name__98x1d",
	"menu_item_name_sub": "Home_menu_item_name_sub__4nTDq",
	"menu_item_description": "Home_menu_item_description__75_br",
	"menu_item_price": "Home_menu_item_price__p65R9",
	"menu_item_price_amount": "Home_menu_item_price_amount__SoZJ3",
	"menu_item_price_currency": "Home_menu_item_price_currency__WcxV0",
	"card": "Home_card___LpL1",
	"thirteen": "Home_thirteen__cMI_k",
	"grid": "Home_grid__GxQ85",
	"rotate": "Home_rotate____XsI"
};


/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(579);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./helpers/index.ts
const checkEnvironment = ()=>{
    let base_url =  false ? 0 : "mr-falafel.surge.sh"; // https://v2ds.netlify.app
    // : "palastinian-resturant-menu.surge.sh"; // https://v2ds.netlify.app
    return base_url;
};
// export const groupArrayBycategory:(arr: menuItem[])=> [{category:Categories,items:menuItem[]}] = (arr) => [...new Set(arr.map(e => e.category))].map(category => ({ category: category, items: Object.fromEntries(arr.filter(e => e.category === category).flatMap(e => Object.entries(e).filter(f => f[0] !== 'category')).map((e, i) => [`item${i + 1}`, e[1]])) }));
const groupArrayByCategory = (arr)=>{
    const categoriesSet = new Set(arr.map((e)=>e.category));
    const newMenu = [];
    categoriesSet.forEach((category)=>{
        newMenu.push({
            category: category,
            items: arr.filter((item)=>item.category === category)
        });
    });
    return newMenu;
} // [...new Set<any>(arr.map((e:menuItem) => e.category))].map((category:Categories) => ({ category: category, items: arr.filter(e => e.category === category)
 // .flatMap(e => Object.entries(e)
 // .filter(f => f[0] !== 'category')).map(e => e[1]) })));
;

;// CONCATENATED MODULE: ./models/menu.tsx
var Categories;
(function(Categories) {
    Categories[Categories["Mashawi"] = 0] = "Mashawi";
    Categories[Categories["Side Dishes"] = 1] = "Side Dishes";
    Categories[Categories["Drinks"] = 2] = "Drinks";
    Categories[Categories["Main"] = 3] = "Main";
})(Categories || (Categories = {}));

;// CONCATENATED MODULE: ./pages/index.tsx







function Home({ data  }) {
    const grouped = groupArrayByCategory(data);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Plastinian Resturant"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Plastinian resturant menu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Home_module_default()).container,
                children: grouped.map((cat)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).menu,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Home_module_default()).menu_group_heading,
                                children: Categories[cat.category]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Home_module_default()).menu_group,
                                children: cat.items.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).menu_item,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: (Home_module_default()).menu_item_image,
                                                src: `/Produkty/${item.img}`,
                                                alt: "Vercel Logo",
                                                width: 1000,
                                                height: 1000,
                                                priority: true
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (Home_module_default()).menu_item_text,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                        className: (Home_module_default()).menu_item_heading,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (Home_module_default()).menu_item_heading_name,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (Home_module_default()).menu_item_name,
                                                                        children: item.cz_name
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (Home_module_default()).menu_item_name_sub,
                                                                        children: item.en_name
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: (Home_module_default()).menu_item_price,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (Home_module_default()).menu_item_price_amount,
                                                                        children: item.price
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (Home_module_default()).menu_item_price_currency,
                                                                        children: "CZK"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (Home_module_default()).menu_item_description,
                                                        children: item.description
                                                    })
                                                ]
                                            })
                                        ]
                                    }, `menu_item_${item.id}`))
                            })
                        ]
                    }, `menu_category_${cat}`))
            })
        ]
    });
}
// This gets called on every request
async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`${checkEnvironment()}/data.json`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
    const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            data
        }
    };
}


/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675], () => (__webpack_exec__(106)));
module.exports = __webpack_exports__;

})();