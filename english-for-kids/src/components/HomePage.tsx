import { CategoryItem } from './Category';
import { data } from '../shared/images';

export const HomePage = () => {
    return (
        <main>
            <div className='main-wrapper'> {data.map((x) =>
                <div className='main-card-container'>
                    <CategoryItem
                        imageSrc={x.image}
                        category={x.category}
                    />
                </div>)
            }
            </div>
        </main>
    );
};
