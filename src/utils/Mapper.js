export const Mapper = (data) => {
  return data.map(({ id, original_title, poster_path, vote_average }) => ({
    id,
    poster_path,
    original_title,
    vote_average,
  }));
};

export const MapperTV = (data) => {
  return data.map(({ id, name, poster_path, overview, vote_average }) => ({
    id,
    name,
    poster_path,
    vote_average,
    overview,
  }));
};
