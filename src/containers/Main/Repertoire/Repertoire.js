import { useState } from 'react';

import './Repertoire.scss';

import AddRepertoireForm from '../../../components/componentElements/AddRepertoireForm/AddRepertoireForm';

const Repertoire = (props) => {
    return(
       <section className="repertoire-container">
           <h1>Репертоар</h1>
          <section className="repertoire-sections-container">
          <AddRepertoireForm/>
           <section className="repertoire-list-container">
               <h2>Текущ репертоар</h2>
               <p> list component</p>
           </section>
          </section>
       </section>
    );
};

export default Repertoire;