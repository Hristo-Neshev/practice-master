import { useState } from 'react';

import AddRepertoireForm from '../../../components/componentElements/AddRepertoireForm/AddRepertoireForm';

const Repertoire = (props) => {
    return(
       <section className="repertoire-container">
           <AddRepertoireForm/>
           {/* <p>repertoire list</p> */}
       </section>
    );
};

export default Repertoire;