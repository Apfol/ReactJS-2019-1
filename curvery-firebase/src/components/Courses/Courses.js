import React, { Component } from 'react';
import YoutubeApiAxios from '../../services/YoutubeApiAxios';
import { Link } from 'react-router-dom';
import style from './Active.css';

import recommendeds from './Courses.css'
import { connect } from 'react-redux';


class Courses extends Component {
    state = {
        playlists: [],
        q: 'ilustracion',
        currentPage: 1,
        todosPerPage: 6,
        pages: []
    };

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
                updatedPages[i].pageStatus = style.active;
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
        return cursos;
    }

// COMPOENNTE DE PAGINACION
    Pagina() {

        const paginas = this.state.pages.map(page => {
            return (
                //BOTONES DE PAGINACION
                <h1
                    key={page.pageIndex}
                    id={page.pageIndex}
                    onClick={(e) => this.handleClick(page.pageIndex, e)}
                    className={page.pageStatus}
                >
                    {page.pageIndex}
                </h1>
            );
        });
        return paginas;
    }

    render() {
        return (
            <div className={recommendeds.container}>
                <main className={recommendeds.grid}>
                    {this.Cursos()}
                </main>
                <div className={style.pag}>
                    <button>&laquo;</button>
                    {this.Pagina()}
                    <button onClick={(e) => this.Click(e)}>&raquo;</button>
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