export async function getSectionSwiper() {
    const res = await fetch ( process.env.NEXT_PUBLIC_BASE_URL + "/api/section", {
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return res.json()
} 