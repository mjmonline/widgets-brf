export async function fetcher<T>(
  ...args: Parameters<typeof fetch>
): Promise<T> {
  const res = await fetch(...args);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json() as Promise<T>;
}
