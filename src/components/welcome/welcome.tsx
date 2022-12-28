import {
    useSelector
} from '../../redux/store'
import ModalWelcome from '../modals/ModalWelcome';

export const Welcome = () => {
    const { isError } = useSelector((state: any) => state.auth);
    return (
        <div className="">
            <ModalWelcome open={true} />
        </div>
    )
}
export default Welcome
