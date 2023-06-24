export const  starRating = (rating: number) => {
    let star = "";
    for (let i = 0; i < rating; i++) {
        star += "⭐";
    }
    return star;
}