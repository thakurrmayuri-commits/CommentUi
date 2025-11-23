

export const ROUTES = [
  {
    path: "*",
    component: () => import("../pageNotFound/pageNotFound.tsx"),
  },
  {
    path: "/",
    component: () => import("../content"),
  },
  {
    path: "/comments",
    component: () => import("../comment/comment.tsx"),

  },
  {
    path: "/calculatorReducer",
    component: () => import("../Calculator/CalculatorReducer.tsx"),

  },
  {
    path: "/userspaces",
    component: () => import("../UserSpace/userSpace.tsx"),
  },
  {
    path: "/recipes",
    component: () => import("../UserSpaceLayout.tsx"),
    children: [{
      index: true,
      component: () => import("../Recipes/Recipes.tsx"),
    },
    {
      path: ":id",
      component: () => import("../userDetails/userDetails.tsx"),
    },

    ]
  }
]