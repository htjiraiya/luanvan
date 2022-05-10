import './Main.scss';
import Menu from '../../partials/Main/Menu/Menu';
import Content from '../../partials/Main/Content/Content';



function Main() {
    return (
        <div className='main-component'>
            <Menu/>
            <Content/>
        </div>
    );
}

export default Main;