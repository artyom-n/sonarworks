import React from 'react';
import style from "./statement.module.scss";

type Props = {
  text: string;
};

const Statement = ({text}: Props) => {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={style.statement}>
              {text}
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Statement;
