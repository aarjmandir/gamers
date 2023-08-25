import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGenere = () => useData<Genre>("/genres");

export default useGenere;
