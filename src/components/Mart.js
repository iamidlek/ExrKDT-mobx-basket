import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import ProductList from "./Product/ProductList";
import CartList from "./Cart/CartList";
import { inject, observer } from "mobx-react";

// export때 observer 감싸주기
// function Mart(props) {

const Mart = ({ market }) => {
  console.log("Mart.js");
  return (
    <Container style={{ paddingTop: "30px" }}>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>상품목록</h3>
            </CardHeader>
            <CardBody>
              <ProductList />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardHeader>
              <h3>장바구니</h3>
            </CardHeader>
            <CardBody>
              <CartList />
            </CardBody>
            <CardFooter>Total : {market.totalCost}</CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// export default observer(Mart);
export default inject("market")(observer(Mart));
