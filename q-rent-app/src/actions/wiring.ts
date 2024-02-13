export async function getSectionSwiper() {
    const res = await fetch ("http://localhost:3000/api/section", {
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return res.json()
} 