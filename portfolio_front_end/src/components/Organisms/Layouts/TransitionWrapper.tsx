
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation, Outlet } from 'react-router-dom';


const TransitionWrapper = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
                <div>
                    <Outlet />
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionWrapper;
