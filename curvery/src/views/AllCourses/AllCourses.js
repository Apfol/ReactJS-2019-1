import React,{Component} from 'react';
import Menu from '../../components/menu/Menu';
import Courses from '../../components/Courses/Course';
import Filtro from '../../components/Courses/Filtro';
import Footer from '../../components/footer/Footer';
import "./AllCourses.css";

class AllCourses extends Component {
    render() {
        return (
            <div>
            <Menu></Menu>

                <Filtro></Filtro>
                <Courses></Courses>
            <Footer></Footer>

            </div>
        );
    }
}
export default AllCourses;

