import './Main.scss';
import Menu from '../../Partials/Main/Menu/Menu';
import Content from '../../Partials/Main/Content/Content';



function Main() {
    return (
        <div className='main-component'>
            <Menu/>
            <Content/>
        </div>
    );
}

export default Main;