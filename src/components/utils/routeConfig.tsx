

export const ROUTES = [
  {
    path: "*",
    component: () => import("../pageNotFound/pageNotFound.tsx"),
    exact: false,
  },
  {
    path: "/",
    component: () => import("../content"),
    exact: true,
  },
  {
    path: "/comments",
    component: () => import("../comment/comment.tsx"),
    exact: true,

  },
  {
    path: "/calculatorReducer",
    component: () => import("../Calculator/CalculatorReducer.tsx"),
    exact: true,

  },
  {
    path: "/userspaces",
    component: () => import("../UserSpace/userSpace.tsx"),
    protected: true,
  },
  {
    path: "/login",
    component: () => import("../LogIn"),
    exact: true,
  },
  {
    path: "/recipes",
    component: () => import("../UserSpaceLayout.tsx"),
    exact: true,
    children: [{
      index: true,
      component: () => import("../Recipes/Recipes.tsx"),
      exact: true,
    },
    {
      path: ":id",
      component: () => import("../userDetails/userDetails.tsx"),
      protected: true,
    },

    ]
  }
]