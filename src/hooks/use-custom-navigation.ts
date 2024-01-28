import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export type Route = {
  link: string;
  next: string;
  prev: string;
  nextSession: string;
  prevSession: string;
};

const ROUTES_MAP: Route[] = [
  {
    link: "/",
    next: "/education",
    nextSession: "/education",
    prev: "/education",
    prevSession: "/education",
  },
  {
    link: "/education",
    next: "/education/details/1",
    prev: "/",
    prevSession: "/",
    nextSession: "/",
  },
  {
    link: "/education/details/1",
    next: "/education/details/2",
    prev: "/education",
    prevSession: "/",
    nextSession: "/",
  },
  {
    link: "/education/details/2",
    next: "/",
    prev: "/education/details/1",
    prevSession: "/",
    nextSession: "/",
  },
];

export enum NavigationAction {
  nextPage = "next",
  prevPage = "prev",
  nextSession = "nextSession",
  prevSession = "prevSession",
}

export default function useCustomNavigation() {
  const router = useRouter();
  const path = usePathname();

  const customNavigation = useCallback(
    (navigationAction: NavigationAction) => {
      console.log("start searching for route");
      console.log("path", path);
      const searchedRoute = ROUTES_MAP.find((route) => route.link === path);
      if (!searchedRoute) throw new Error("Route not found");
      console.log("search result", searchedRoute);
      console.log("start navigation");
      console.log("navigation action", navigationAction);
      console.log("navigation direction", searchedRoute[navigationAction]);
      console.log("old route", searchedRoute);
      router.replace(searchedRoute[navigationAction]);
    },
    [path, router]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // if (event.key in ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"])
      //   backgroundAnumation.callback(isOdd);
      // isOdd = !isOdd;
      switch (event.key) {
        case "ArrowUp":
          customNavigation(NavigationAction.prevSession);
          break;

        case "ArrowDown":
          customNavigation(NavigationAction.nextSession);
          break;
        case "ArrowRight":
          customNavigation(NavigationAction.nextPage);
          break;
        case "ArrowLeft":
          customNavigation(NavigationAction.prevPage);
          break;
      }
    };
    const handleWheel = (event: MouseEvent) => {
      if (event.screenY > 0) {
        customNavigation(NavigationAction.nextPage);
      } else {
        customNavigation(NavigationAction.prevPage);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [path, router, customNavigation]);
}
