import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { inject, observer } from "mobx-react";

// App.js 에서 props로 내린 market을 자손이 사용
function Product({ id, name, price, addProduct }) {
  console.log("Product.js");
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
        <Row>
          <Label>기능</Label>
        </Row>
        <Row>
          <Button
            onClick={() =>
              addProduct({
                id,
                name,
                price,
              })
            }
          >
            담기
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

// export default observer(Product);
export default inject(({ market }) => ({
  addProduct: market.addProduct,
}))(observer(Product));
