import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenere = () => ({ data: genres, error: null, isLoading: false });

export default useGenere;
