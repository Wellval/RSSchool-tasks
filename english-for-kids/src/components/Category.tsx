import { NavLink } from 'react-router-dom';

interface Props {
    imageSrc: string;
    category: string
}
export const CategoryItem = ({ imageSrc, category }: Props) => {
    return (
        <NavLink to={`/category/${category}`} key={Math.random()} className={'pink-card'}>
            <img src={imageSrc} />
            <p>{category}</p>
        </NavLink>
    );
};
