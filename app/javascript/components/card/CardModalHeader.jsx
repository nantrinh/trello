import React from "react";
import CardTitleContainer from "./CardTitleContainer";

const CardModalHeader = ({ cardTitle, listTitle }) => {
  return (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <CardTitleContainer title={cardTitle} />
      <p>
        in list <a className="link">{listTitle}</a>
        <i className="sub-icon sm-icon"></i>
      </p>
    </header>
  );
};

export default CardModalHeader;
