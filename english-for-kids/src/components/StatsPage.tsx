import { images } from '../shared/categoryImages';

interface Props {
    category: Category;
}

interface Category {
    images: Array<string>;
    category: string;
    rus: Array<string>;
}

export const StatsPage = ({ category }: Props) => {

    return (
        <main>
            <h2>Statistics</h2>
            <div className="stats-container">
                <table className="stats-table">
                    <thead className="table-header">
                        <tr className="stats-titles">
                            <th className="stats-item">
                                Category
                            </th>
                            <th className="stats-item">
                                Word
                            </th>
                            <th className="stats-item">
                                Translation
                            </th>
                            <th className="stats-item">
                                Trained
                            </th>
                            <th className="stats-item">
                                Correct
                            </th>
                            <th className="stats-item">
                                Incorrect
                            </th>
                            <th className="stats-item">
                                Percentage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            images.map(image => image.images.map((singleImg, index) => {
                                return <tr> 
                                        <td> { image.category } </td>
                                        <td> { singleImg } </td>
                                        <td> { image.rus[index] } </td>
                                    </tr>
                            }))
                        }
                        
                    </tbody>
                </table>
            </div>
        </main>
    )
}