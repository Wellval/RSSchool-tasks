import { xor } from "lodash";
import React from "react";
import { images } from '../shared/categoryImages';

interface Props {
    name: string;
}

export const CategoryPage = (props: Props) => {
    const category = images.filter((x) => x.category === props.name);
    return (
    <div>
        <main>
            {
                category[0].images.map((x, index) => 
                    <a key={index} className="main-card" href="#">
                        <img src={'/' + category[0].category + '/' + x + '.png'} />
                        <p>{x}</p>
                    </a>
                )
            }
        </main>
    </div>
    );
}