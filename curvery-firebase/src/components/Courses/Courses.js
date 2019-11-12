import React, { Component } from 'react';
import YoutubeApiAxios from '../../services/YoutubeApiAxios';
import { Link } from 'react-router-dom';
import style from './Active.css';

import './Courses.css'
import { connect } from 'react-redux';


class Courses extends Component {
    state = {
        playlists: [],
        q: 'ilutrator courses',
        currentPage: 1,
        todosPerPage: 6,
        pages: []
    };
    componentDidMount() {
        this.loadPlaylist();
    }
    componentWilldMount() {
        this.loadPlaylist();
    }
    componentWillReceiveProps(nextProps) {
        console.log("NEXT ",nextProps);
        
        this.setState(prevState =>{
            
            return { ...prevState,q:nextProps.searchTerm}
        },()=>{
            console.log("Nuevo state", this.state);
            this.loadPlaylist();
        });
    }

    componentDidUpdate(){
        console.log("Component did update ", this.state);
    }

    loadPlaylist = async () => {
        const response = await YoutubeApiAxios.get("search", {
            params: {
                ...YoutubeApiAxios.defaults.params,
                part: "snippet",
                maxResults: 45,
                q: this.state.q,
                type: 'playlist'
            }
        });
        const someArray = response.data.items;
        this.setState({

            playlists: someArray

        });
        console.log(this.state.playlists);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.playlists.length / this.state.todosPerPage); i++) {
            let page = [];
            if (i === 1) {
                page = {
                    pageIndex: i,
                    pageStatus: style.active
                }
            }
            else {
                page = {
                    pageIndex: i,
                    pageStatus: "style.active"
                }
            }
            pageNumbers.push(page);

        }
        this.setState({
            pages: pageNumbers
        })
        //console.log(this.state.pages);

    }

    handleClick = (id, event) => {

        const updatedPages = [...this.state.pages];
        for (let i = 0; i < updatedPages.length; i++) {
            if (i === (id - 1)) {
                updatedPages[i].pageStatus = "active";
            }
            else {
                updatedPages[i].pageStatus = "Unselected";
            }
        }

        this.setState({
            currentPage: Number(event.target.id),
            pages: updatedPages
        });
        console.log(this.state.pages);
    }

    Click(event) {
        this.setState({
            q: 'Ilustracion'
        });
        this.componentDidMount();

    }

    Cursos() {
        const { playlists, currentPage, todosPerPage } = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = playlists.slice(indexOfFirstTodo, indexOfLastTodo);

        const cursos = currentTodos.map((todo, index) => {
            return (
               
                <article className="article_CURSOS">
                <img className="img_CURSOS" src={todo.snippet.thumbnails.high.url} alt=""></img>
                <div className="text_CURSOS">
                <span>{todo.snippet.channelTitle}</span>
                  <h3 className="title_CURSOS">{todo.snippet.title}</h3>
                  <p className="paragraph_CURSOS">{todo.snippet.title}</p>
                  <Link className="button_CURSOS" to={"/player/" + todo.id.playlistId}>I want to see more</Link>
                 </div>
                </article>
           
               
            );
        });
        return cursos;
    }

// COMPOENNTE DE PAGINACION
    Pagina() {

        const paginas = this.state.pages.map(page => {
            return (
                //BOTONES DE PAGINACION
                <div className="numero_CURSOS">
                <h1
                key={page.pageIndex}
                id={page.pageIndex}
                onClick={(e) => this.handleClick(page.pageIndex, e)}
                className={page.pageStatus}
                >
                {page.pageIndex}
                </h1>
                </div>
                );
        });
        return paginas;
    }

    render() {
        return (
             <div>
             <main className="grid_CURSOS">
             {this.Cursos()}
             </main>
             <div className="barra_CURSOS">                    
             <div className="numero_CURSOS">{this.Pagina()}</div>
             </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchStore.searchTerm,
        filters: state.searchStore.filters
    }
}

export default connect(mapStateToProps)(Courses);