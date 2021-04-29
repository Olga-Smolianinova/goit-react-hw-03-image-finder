import React, { useState, useEffect } from 'react';

// Components
import Searchbar from './components/Searchbar';

import ImageGallery from './components/ImageGallery';

import Loader from './components/Loader';

import Button from './components/Button';

// API
import galleryApi from './api/gallery-api';

export default function App() {
  // useState
  const [gallery, setGallery] = useState([]);
  const [totalHits, setTotalHits] = useState();
  const [currentPage, setCurrentPage] = useState(1); //чтобы при нажатии на Load more могли увеличивать currentPage, и отрисовать следующую часть запроса
  const [perPage, setPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState(''); //чтобы между разными запросами могли сохранить query, по которому делаем запрос и он же отрисовывался дальше при нажатии на  Load more
  const [isLoading, setIsLoading] = useState(false); //спиннер, состояние загрузки
  const [error, setError] = useState(null); //для catch

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Function
  //выносим http-запрос в отдельную функцию для удобства переиспользования
  const fetchImages = () => {
    //   выводим в отдельную переменную  searchQuery, currentPage для того, чтобы передать options в props в gallery-api.js;
    const options = { searchQuery, currentPage, perPage, error };

    //   сотояние загрузки, меняем значение
    setIsLoading(true);

    //проверка на то, если пользователь ничего не ввел в input, не отправлять http-запрос
    if (!searchQuery) {
      return;
    }
    //   по результатам того  query, который пользователь ввел в input делаем http-запрос

    // вызов функции из файла который прописывает логику настроек Api (gallery-api.js)
    galleryApi
      .fetchImages(options)

      .then(({ hits, totalHits }) => {
        // console.log(hits);
        // console.log(totalHits);

        // условие, если массив данных не пустой
        if (hits.length === 0) {
          throw new Error('No matches were found! Try again!');
        }

        setGallery([...gallery, ...hits]);

        setTotalHits(totalHits);

        // при нажатии на Load more увеличиваем currentPage, отрисовываем следующую часть запроса
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        // Для плавной прокрутки
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error))
      // убираем отображение спиннера, когда загрузились данные
      .finally(() => setIsLoading(false));
  };

  // метод, который будет отрабатываться при submit формы, когда будет изменяться query
  const changeQuery = query => {
    // console.log(query);

    // 1)  чтобы при нажатии на  Load more продолжался делаться запрос по предыдущему query
    // 2)  чтобы изменить термин поиска, когда при вводе нового query в input - currentPage снова начинал отрисовываться с 1-й страницы, а не продалжал увеличиваться +1
    //   3) articles при новом запросе перед начало обнулялся от предыдущих статей
    //   4) при каждом следующем запросе обнуляем error

    setSearchQuery(query);
    setCurrentPage(1);
    setGallery([]);
    setPerPage(12);

    setError(null);
  };

  //   должен ли отображаться Load more и спиннер, если закончились images
  const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;

  const hideLoadMoreButton = totalHits > (currentPage - 1) * perPage;
  // console.log('perPage:', perPage);
  // console.log('currentPage:', currentPage);

  return (
    <div className="App">
      {/* Searchbar. В props передаем метод, который будет отрабатываться при submit формы */}
      <Searchbar onSubmit={changeQuery} />
      {/* ImageGallery */}
      <ImageGallery gallery={gallery} />

      {/* Loader {/* появление спиннера, рендерим по условию  */}
      {isLoading && <Loader />}

      {/* Button Load more. Рендер по условию */}
      {shouldRenderLoadMoreButton && hideLoadMoreButton && (
        <Button onClick={fetchImages}>
          <Loader />
        </Button>
      )}

      {/* для обработки ошибок (error), рендер по условию. error.message = 'No matches were found! Try again!' */}
      {error && <h2 className="ErrorMessage">{error.message}</h2>}
    </div>
  );
}

// class App extends Component {
//   state = {
//     gallery: [],
//     currentPage: 1, //чтобы при нажатии на Load more могли увеличивать currentPage, и отрисовать следующую часть запроса
//     perPage: 12,

//     searchQuery: '', //чтобы между разными запросами могли сохранить query, по которому делаем запрос и он же отрисовывался дальше при нажатии на  Load more
//     isLoading: false, //спиннер, состояние загрузки
//     error: null, //для catch
//   };

//   // ЖИЗНЕННЫЕ ЦИКЛЫ
//   // componentDidMount() {
//   //   this.fetchImages();
//   // }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('update');
//     //  добавляем условие, что если компонент обновился и обновилось именно свойство searchQuery ({ searchQuery: query }) тогда в этом случае делаем http-запрос. (если этого не сделать http-запрос делается с пустой сторокой (searchQuery: '') и не возвращает результат)
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchImages();
//     }
//   }

//   // МЕТОДЫ
//   // метод, который будет отрабатываться при submit формы, когда будет изменяться query
//   changeQuery = query => {
//     // console.log(query);

//     // 1)  чтобы при нажатии на  Load more продолжался делаться запрос по предыдущему query
//     // 2)  чтобы изменить термин поиска, когда при вводе нового query в input - currentPage снова начинал отрисовываться с 1-й страницы, а не продалжал увеличиваться +1
//     //   3) articles при новом запросе перед начало обнулялся от предыдущих статей
//     //   4) при каждом следующем запросе обнуляем error
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       gallery: [],

//       error: null, //для catch
//     });
//   };

//   //выносим http-запрос в отдельный метод для удобства переиспользования
//   fetchImages = () => {
//     const { searchQuery, currentPage, perPage, error } = this.state;

//     //   выводим в отдельную переменную  searchQuery, currentPage для того, чтобы передать options в props в gallery-api.js;
//     const options = { searchQuery, currentPage, perPage, error };

//     //   сотояние загрузки, меняем значение
//     this.setState({ isLoading: true });

//     //проверка на то, если пользователь ничего не ввел в input, не отправлять http-запрос
//     if (!searchQuery) {
//       return;
//     }
//     //   по результатам того  query, который пользователь ввел в input делаем http-запрос

//     // вызов функции из файла который прописывает логику настроек Api (gallery-api.js)
//     galleryApi
//       .fetchImages(options)

//       .then(({ hits, totalHits }) => {
//         // console.log(hits);
//         // console.log(totalHits);

//         // условие, если массив данных не пустой
//         if (hits.length === 0) {
//           throw new Error('No matches were found! Try again!');
//         }

//         this.setState(prevState => ({
//           gallery: [...prevState.gallery, ...hits],
//           totalHits,

//           // при нажатии на Load more увеличиваем currentPage, отрисовываем следующую часть запроса
//           currentPage: prevState.currentPage + 1,
//         }));

//         // Для плавной прокрутки
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       })
//       .catch(error => this.setState({ error }))
//       // убираем отображение спиннера, когда загрузились данные
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const {
//       gallery,
//       currentPage,
//       perPage,
//       isLoading,
//       totalHits,
//       error,
//     } = this.state;

//     //   должен ли отображаться Load more и спиннер, если закончились images
//     const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;

//     const hideLoadMoreButton = totalHits > (currentPage - 1) * perPage;
//     // console.log('perPage:', perPage);
//     // console.log('currentPage:', currentPage);

//     return (
//       <div className="App">
//         {/* Searchbar. В props передаем метод, который будет отрабатываться при submit формы */}
//         <Searchbar onSubmit={this.changeQuery} />
//         {/* ImageGallery */}
//         <ImageGallery gallery={gallery} />

//         {/* Loader {/* появление спиннера, рендерим по условию  */}
//         {isLoading && <Loader />}

//         {/* Button Load more. Рендер по условию */}
//         {shouldRenderLoadMoreButton && hideLoadMoreButton && (
//           <Button onClick={this.fetchImages}>
//             <Loader />
//           </Button>
//         )}

//         {/* для обработки ошибок (error), рендер по условию. error.message = 'No matches were found! Try again!' */}
//         {error && <h2 className="ErrorMessage">{error.message}</h2>}
//       </div>
//     );
//   }
// }

// export default App;
