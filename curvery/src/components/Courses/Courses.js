import React, { Component } from 'react';
import axios from 'axios';
import YoutubeApiAxios from '../../services/YoutubeApiAxios';
import {Link} from 'react-router-dom';
import style from './Course.css';

import recommendeds from './Courses.css'


class Courses extends Component {
    constructor() {
        super();
        this.state = {
          playlists: [],
          q:`the nature of code`,
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
            maxResults: 45,
            q:this.state.q,
            type: 'playlist'
          }
        });
        const someArray = response.data.items;
        this.setState({
    
          playlists: someArray
    
        });
        console.log(this.state.playlists);
    
      }
      handleClick(id,event) {
    
        /*this.setState({
            q:'Ilustracion'
          });*/
         // this.componentDidMount();
        console.log(id);
        document.getElementById(id).className="{style.active}";
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      Click(event) {
    
        this.setState({
            q:'Ilustracion'
          });
         this.componentDidMount();
        
      }
    
      render() {
        const { playlists, currentPage, todosPerPage } = this.state;
    
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = playlists.slice(indexOfFirstTodo, indexOfLastTodo);
    
        const renderTodos = currentTodos.map((todo, index) => {
          return (
    
            <div >
              <main className={recommendeds.grid}>
                <article key={Date.now()} className={recommendeds.card}>
                  <img src={todo.snippet.thumbnails.high.url} alt="Sample"></img>
                  <div className={recommendeds.text}>
                    <span>{todo.snippet.channelTitle}</span>
                    <h3>{todo.snippet.title}</h3>
                    <p>{todo.snippet.description}</p>
                    <Link to={"/player/" + todo.id.playlistId}>VER MÁS</Link>
                  </div>
                </article>
              </main>
            </div>
    
          );
        });
    
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(playlists.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
    
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <a
              key={number}
              id={number}
              onClick={(e) =>this.handleClick(number,e)}
            >
              {number}
            </a>
          );
        });
    
        return (
          <div className={recommendeds.container}>
            <main className={recommendeds.grid}>
              {renderTodos}
            </main>
            <div className={style.pag}>
              <a >&laquo;</a>
              {renderPageNumbers}
              <a>&raquo;</a>
            </div>
          </div>
    
        );
      }
}
export default Courses;