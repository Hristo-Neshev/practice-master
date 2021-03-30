import { useState } from 'react';

import './Repertoire.scss';
import List from '../../../components/List/List';
import AddRepertoireForm from '../../../components/componentElements/AddRepertoireForm/AddRepertoireForm';

const Repertoire = (props) => {
// add state, fetch data

    return(
       <section className="repertoire-container">
           <h1>Репертоар</h1>
          <section className="repertoire-sections-container">
          <AddRepertoireForm/>
           <section className="repertoire-list-container">
               <h2>Текущ репертоар</h2>
              <List repertoire={null}/>
           </section>
          </section>
       </section>
    );
};

export default Repertoire;