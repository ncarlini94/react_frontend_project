export const apiNetflix = {
    access: {
        url: "https://api.themoviedb.org/3",
        apiKey: "?api_key=1c2f7680691e10d54b24248f220cccce",
        imageUrl: "https://image.tmdb.org/t/p",
        video: "/videos",
        pagination: "&page=",
    },
    entity: {
        movie: "/movie",
        series: "/tv",
    },
    state: {
        latest: "/latest",
        topRated: "/top_rated",
        popular: "/popular",
    },
    language: {
        english: "&language=en-US",
        spanish: "&language=es-ES",
        latin: "&language=la-LA",
        french: "&language=fr-FR",
        japanese: "&language=ja-JA",
        german: "&language=de-DE",
    },
    genersMovie: {
        action: "/action",
        adventure: "/adventure",
        animation: "/animation",
        comedy: "/comedy",
        crime: "/crime",
        documentary: "/documentary",
        drama: "/drama",
        family: "/family",
        fantasy: "/fantasy",
        history: "/history",
        horror: "/horror",
        music: "/music",
        mystery: "/mystery",
        romance: "/romance",
        scienceFiction: "/sciencefiction",
        tvmovie: "/tvmovie",
        thriller: "/thriller",
        war: "/war",
        western: "/western",
    },
    genersSeries: {
        actionAndAdventure: "/action&adventure",
        animation: "/animation",
        comedy: "/comedy",
        crime: "/crime",
        documentary: "/documentary",
        drama: "/drama",
        family: "/family",
        kids: "/kids",
        mystery: "/mystery",
        news: "/news",
        reality: "/reality",
        sciFiAndFantasy: "/sci-fi&fantasy",
        soap: "/soap",
        talk: "/talk",
        warAndPolitics: "/war&politics",
        western: "/western",
    },
    quality: {
        original: "/original",
        backdropw300: "/w300",
        backdropw500: "/w500",
        backdropw780: "/w780",
        backdropw1280: "/w1280",
        posterw300: "/w300",
        posterw500: "/w500",
        posterw780: "/w780",
        posterw1280: "/w1280",
    },
}