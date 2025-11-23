

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
    path: "/blog",
    component: () => import("../Blog/blog.tsx"),

  },
  {
    path: "/blog",
    component: () => import("../Blog/blog.tsx"),

  },
  {
    path: "/createblog",
    component: () => import("../Blog/createBlog.tsx"),

  },
  {
    path: "/blogs/:id",
    component: () => import("../Blog/blogDetails.tsx"),

  },
  {
    path: "/userspaces",
    component: () => import("/Users/ruchi/Documents/React_JS/Project_1/practice2weeks/2weeksPractice/src/UserSpace/userSpace.tsx"),

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