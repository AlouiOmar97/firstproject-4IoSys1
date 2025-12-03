export interface Suggestion {
    id : number,
    title : string,
    description : string,
    category : string,
    date : String | Date,
    status : string,
    likes?: number,
    favorited?: boolean
}
