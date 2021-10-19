import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import doc1 from '../../../images/mechanic/doc1.png'
import doc2 from '../../../images/mechanic/doc2.png'
import doc3 from '../../../images/mechanic/doc3.png'
import mac4 from '../../../images/mechanic/doc4.png'
import Expert from '../Expert/Expert';
// import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            img: doc1,
            name: 'Poka',
            expertize: 'Dermatologist'

        },
        {
            img: doc2,
            name: 'Samit',
            expertize: 'Sergeon'

        },
        {
            img: doc3,
            name: 'Adiba',
            expertize: 'Online Consuntant'

        },
        {
            img: mac4,
            name: 'Mush',
            expertize: 'Medic and Tools Expert'

        }
    ]

    // const [experts, setExperts] = useState([])
    // useEffect(() => {
    //     fetch('experts.json')
    //         .then(res => res.json())
    //         .then(data => setExperts(data));
    // }, [])

    return (
        <div id="experts" className="container">
            <h2 className="text-warning mt-5 fw-bold"> <Badge bg="secondary">Our Experts</Badge></h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;