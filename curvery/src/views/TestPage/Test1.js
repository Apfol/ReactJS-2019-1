import React,{Component} from 'react';
import YoutubeApiAxios from '../../services/YoutubeApiAxios';
import style from './Test1.css';
import {Link} from 'react-router-dom';
import recommendeds from '../../components/Courses/Courses.css'





class Test1 extends Component {
    constructor() {
      super();
      this.state = {
        playlists: [],
        todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        todosPerPage: 6
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount() {
        this.loadPlaylist();
    }

    loadPlaylist = async () => {
        const response = await YoutubeApiAxios.get("search", {
            params: {
                ...YoutubeApiAxios.defaults.params,
                part: "snippet",
                maxResults: 50,
                q: `the nature of code`,
                type: 'playlist'
            }
        });
        const someArray = response.data.items;
        this.setState({
            
          playlists: someArray

        });
        console.log(this.state.playlists);
        
    }
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { playlists, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = playlists.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((todo, index) => {
        return (
        <div className={recommendeds.container}>
        <main className={recommendeds.grid}>
               <article key={Date.now()} className={recommendeds.card}>
                    <img src={todo.snippet.thumbnails.high.url} alt="Sample"></img>
                    <div className={recommendeds.text}>
                        <span>{todo.snippet.channelTitle}</span>
                        <h3>{todo.snippet.title}</h3>
                        <p>{todo.snippet.description}</p>
                        <Link to={"/player/"+todo.id.playlistId}>VER MÁS</Link>
                    </div>
                </article>
         
        </main>
      </div>);
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(playlists.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <div className={style.pag}>
          <a href="#">&laquo;</a>
                <a href="#" className={style.active}>{renderPageNumbers}</a>
           
          </div>
        </div>
      );
    }
  }
  

export default Test1;