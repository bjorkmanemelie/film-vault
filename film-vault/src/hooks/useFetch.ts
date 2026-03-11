import { useState, useEffect } from "react";

type LoadState<T> =
  | { status: "idle"; data: null; error: null }
  | { status: "loading"; data: null; error: null }
  | { status: "success"; data: T; error: null }
  | { status: "error"; data: null; error: string };

export function useFetch<T>(apiCall: () => Promise<T>) {
  const [state, setState] = useState<LoadState<T>>({
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    async function LoadState() {
      try {
        setState({ status: "loading", data: null, error: null });

        const data = await apiCall();
        setState({ status: "success", data, error: null });
      } catch {
        setState({
          status: "error",
          data: null,
          error: "Something went wrong",
        });
      }
    }

    LoadState();
  }, []);
  return { state };
}
