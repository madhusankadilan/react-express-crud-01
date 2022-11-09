import { useEffect } from "react";

export function useRunOnce(
    externalFunction: () => void,
    cleanupFunction?: () => void
) {
    useEffect(() => {
        if (externalFunction) externalFunction();

        return () => {
            if (cleanupFunction) cleanupFunction();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export function useRunWithDependencies(
    externalFunction: () => void,
    dependencies: unknown[],
    cleanupFunction?: () => void
) {
    useEffect(() => {
        if (externalFunction) externalFunction();

        return () => {
            if (cleanupFunction) cleanupFunction();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}
