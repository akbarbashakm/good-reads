import React from "react";
import Button from "./Button";
import { Text } from "./Text";
import styled from 'styled-components';


export const Card = styled.div`
    height: 370px;
    overflow: scroll;
    margin: 10px 10px;
    text-align: center;
    border: 2px solid #790572;
    padding: 10px;
    border-radius: 10px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 25px;
`

const SearchResult = ({ bookData, expandBook }) => {
  const bookTitle = bookData.best_book.title;
  let displayTitle = bookTitle
    .split(" ")
    .slice(0, 4)
    .join(" ");
  if (bookTitle.length > displayTitle.length) {
    displayTitle += "...";
  }

  return (
    <div className="col-lg-3 col-sm-4 col-md-3" onClick={() => expandBook(bookData)}>
      <Card className="card">
        <img
          className="card-img-top pl-2 pr-2 pt-2"
          src={bookData.best_book.image_url}
          alt="Book cover"
          height="200px"
        />
        <Footer className="card-body">
          <Text widthSize={'90%'}>{displayTitle}</Text>
          <Text>{bookData.best_book.author.name}</Text>
          <Button
            className="col-sm-2 btn btn-primary"
            buttonName={'More Info'}
          />
        </Footer>
      </Card>
    </div>
  );
};

export default SearchResult;
