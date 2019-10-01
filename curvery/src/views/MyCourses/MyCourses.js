import React,{Component} from 'react';
import Menu from '../../components/menu/Menu';
import Courses from '../../components/MyCourses/MyCourse';
import Filtro from '../../components/MyCourses/Filtro';
import Footer from '../../components/footer/Footer';


class MyCourses extends Component {
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
export default MyCourses;