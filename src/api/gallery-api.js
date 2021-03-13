import axios from 'axios'; //для fetch запросов

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  const apiKey = '19870632-ff45bfcc8dee770edfcb419ec';

  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
