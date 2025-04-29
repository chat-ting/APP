type Ok<Res> = { ok: true; data: Res }
type Err = { ok: false; status: number }

export const request = {
  get: <Res>(url: URL | RequestInfo) => http<undefined, Res>(url, 'GET'),
  post: <Req, Res>(url: URL | RequestInfo, body: Req) =>
    http<Req, Res>(url, 'POST', body),
  patch: <Req, Res>(url: URL | RequestInfo, body: Req) =>
    http<Req, Res>(url, 'PATCH', body),
  put: <Req, Res>(url: URL | RequestInfo, body: Req) => http<Req, Res>(url, 'PUT', body),
  delete: <Res>(url: URL | RequestInfo) => http<undefined, Res>(url, 'DELETE'),
}

async function http<Req = undefined, Res = unknown>(
  url: URL | RequestInfo,
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  body?: Req,
  opts?: Omit<RequestInit, 'body'>
): Promise<Ok<Res> | Err> {
  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...(body !== undefined && { body: JSON.stringify(body) }),
      ...opts,
    })

    if (!res.ok) return { ok: false, status: res.status }

    const data = (await res.json()) as Res
    return { ok: true, data }
  } catch (e) {
    return { ok: false, status: -1 }
  }
}
