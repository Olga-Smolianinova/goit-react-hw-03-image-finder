import React, { Component } from 'react';

// Components
import Searchbar from './components/Searchbar';

import ImageGallery from './components/ImageGallery';

import Loader from './components/Loader';

import Button from './components/Button';

// API
import galleryApi from './api/gallery-api';

class App extends Component {
  state = {
    gallery: [],
    currentPage: 1, //чтобы при нажатии на Load more могли увеличивать currentPage, и отрисовать следующую часть запроса
    perPage: 12,

    searchQuery: 'spring', //чтобы между разными запросами могли сохранить query, по которому делаем запрос и он же отрисовывался дальше при нажатии на  Load more
    isLoading: false, //спиннер, состояние загрузки
    error: null, //для catch
  };

  // ЖИЗНЕННЫЕ ЦИКЛЫ
  componentDidMount() {
    this.fetchImages();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('update');
    //  добавляем условие, что если компонент обновился и обновилось именно свойство searchQuery ({ searchQuery: query }) тогда в этом случае делаем http-запрос. (если этого не сделать http-запрос делается с пустой сторокой (searchQuery: '') и не возвращает результат)
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  // МЕТОДЫ
  // метод, который будет отрабатываться при submit формы, когда будет изменяться query
  changeQuery = query => {
    // console.log(query);

    // 1)  чтобы при нажатии на  Load more продолжался делаться запрос по предыдущему query
    // 2)  чтобы изменить термин поиска, когда при вводе нового query в input - currentPage снова начинал отрисовываться с 1-й страницы, а не продалжал увеличиваться +1
    //   3) articles при новом запросе перед начало обнулялся от предыдущих статей
    //   4) при каждом следующем запросе обнуляем error
    this.setState({
      searchQuery: query,
      currentPage: 1,
      gallery: [],

      totalHits: null,
      error: null, //для catch
    });
  };

  //выносим http-запрос в отдельный метод для удобства переиспользования
  fetchImages = () => {
    const { searchQuery, currentPage, perPage } = this.state;

    //   выводим в отдельную переменную  searchQuery, currentPage для того, чтобы передать options в props в gallery-api.js;
    const options = { searchQuery, currentPage, perPage };

    //   сотояние загрузки, меняем значение
    this.setState({ isLoading: true });

    //   по результатам того  query, который пользователь ввел в input делаем http-запрос

    // вызов функции из файла который прописывает логику настроек Api (gallery-api.js)
    galleryApi
      .fetchImages(options)
      .then(({ hits, totalHits }) => {
        // console.log(hits);
        // console.log(totalHits);

        // условие, если массив данных не пустой
        if (hits.length === 0) {
          new Error('Error fetching data');
        }

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          totalHits,

          // при нажатии на Load more увеличиваем currentPage, отрисовываем следующую часть запроса
          currentPage: prevState.currentPage + 1,
        }));

        // Для плавной прокрутки
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      // убираем отображение спиннера, когда загрузились данные
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const {
      gallery,
      currentPage,
      perPage,
      isLoading,
      totalHits,
      error,
    } = this.state;

    //   должен ли отображаться Load more и спиннер, если закончились images
    const shouldRenderLoadMoreButton = gallery.length > 0 && !isLoading;

    const hideLoadMoreButton = totalHits > (currentPage - 1) * perPage;
    // console.log('perPage:', perPage);
    // console.log('currentPage:', currentPage);

    return (
      <div className="App">
        {/* Searchbar. В props передаем метод, который будет отрабатываться при submit формы */}
        <Searchbar onSubmit={this.changeQuery} />
        {/* ImageGallery */}
        <ImageGallery gallery={gallery} />

        {/* Loader {/* появление спиннера, рендерим по условию  */}
        {isLoading && <Loader />}

        {/* Button Load more. Рендер по условию */}
        {shouldRenderLoadMoreButton && hideLoadMoreButton && (
          <Button onClick={this.fetchImages}>
            <Loader />
          </Button>
        )}

        {/* для обработки ошибок (error), рендер по условию */}
        {error && (
          <h2 className="ErrorMessage">
            Something get wrong! Please, try again!
          </h2>
        )}
      </div>
    );
  }
}

export default App;
