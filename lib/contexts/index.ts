import { Result } from "lib/types";
import { createContext } from "react";

export const ResultContext = createContext<{
    result: Result | null;
    setResult: (result: Result) => void;
}>(
    {
        result: null,
        setResult: (result: Result) => {}
    }
);

export const ResultProvider = ResultContext.Provider;