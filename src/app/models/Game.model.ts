export interface Game {
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: string;
  genres: Genre[];
  parent_platforms: Parent_platform[];
  publishers: Publishers[];
  ratings: Rating[];
  screenshots: Screenshots[];
  trailer: Trailer[];
}

interface Genre {
  name: string;
}

interface Parent_platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
