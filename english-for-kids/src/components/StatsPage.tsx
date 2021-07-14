import { images } from '../shared/categoryImages';

interface Category {
    images: Array<string>;
    category: string;
    rus: Array<string>;
}

export const StatsPage = () => {
    return (
        <main>
            <h2>Statistics</h2>
            <div className='stats-container'>
                <table className='stats-table'>
                    <thead className='table-header'>
                        <tr className='stats-titles'>
                            <th className='stats-item'>
                                Category
                            </th>
                            <th className='stats-item'>
                                Word
                            </th>
                            <th className='stats-item'>
                                Translation
                            </th>
                            <th className='stats-item'>
                                Trained
                            </th>
                            <th className='stats-item'>
                                Correct
                            </th>
                            <th className='stats-item'>
                                Incorrect
                            </th>
                            <th className='stats-item'>
                                Percentage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            images.map((image) => image.images.map((singleImg, index) => {
                                const object = JSON.parse(localStorage.getItem(singleImg)!);
                                const trained = (localStorage.getItem(singleImg)) ? +object.trained : 0;
                                const correct = (localStorage.getItem(singleImg)) ? +object.correct : 0;
                                const incorrect = (localStorage.getItem(singleImg)) ? +object.incorrect : 0;
                                const percentage = (correct === 0 && incorrect === 0) ? '0%' : `${((100 / (correct + incorrect)) * correct).toFixed(2)}%`;
                                return <tr>
                                    <td> {image.category} </td>
                                    <td> {singleImg} </td>
                                    <td> {image.rus[index]} </td>
                                    <td> {trained} </td>
                                    <td> {correct} </td>
                                    <td> {incorrect} </td>
                                    <td> {percentage} </td>
                                </tr>;
                            }))
                        }

                    </tbody>
                </table>
            </div>
        </main>
    );
};
