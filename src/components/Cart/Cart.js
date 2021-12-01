import React from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

// memo로 변하는 목록만 렌더링
function Cart({ id, name, price, count, func }) {
  console.log("Cart.js");
  return (
    <Row>
      <Col>
        <FormGroup inline>
          <Label>제품명</Label>
          <Input value={name} readOnly />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>가격</Label>
          <Input value={price} readOnly />
        </FormGroup>
      </Col>
      <Col>
        <Label>개수</Label>
        <Input value={count} readOnly />
      </Col>
      <Col>
        <Row>
          <Label>기능</Label>
        </Row>
        <Row>
          <Button onClick={() => func({ id })}>지우기</Button>
        </Row>
      </Col>
    </Row>
  );
}

export default React.memo(Cart);
