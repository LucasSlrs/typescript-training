export interface GithubUsers {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
}
export interface cryto {
        id: number,
        uid: string,
        coin_name: string,
        acronym: string,
        logo: string
}
export interface RandomNation {
        id: number,
        uid: string,
        nationality: string,
        language: string,
        capital: string,
        national_sport:	string,
        flag: string
}
export interface AxiosReq {
        items?: [],
}
// export interface RestaurantList {
//         id:	number,
//         uid:	string,
//         name:	string
//         type:	string
//         description:	string,
//         review:	string,
//         logo:	string
//         phone_number:	string,
//         address:	string,
//         hours: []
// }
export interface Beers {
        id:	number,
        brand:	string,
        uid:	string,
        style:	string,
        name:	string,
        hop:	string,
        yeast:	string,
        malts:	string,
        ibu:	string,
        alcohol: string,
        blg:	string,
}