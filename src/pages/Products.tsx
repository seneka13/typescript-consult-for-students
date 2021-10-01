import { Product, products } from '../data/products';
import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { cart } from '../data/cart';

const { Meta } = Card;

export const Products = () => {
  const handleAddCart = (prod: Product) => {
    const cartItem = { prod, quantity: 1 };
    const existingCartIndex = cart.length && cart.findIndex((c) => c.prod.id === prod.id);
    if (cart[existingCartIndex]) {
      cart[existingCartIndex].quantity += 1;
    } else {
      cart.push(cartItem);
    }

    console.log(cart);
  };

  return (
    <>
      <h1>Products</h1>
      <Row gutter={16}>
        {products.map((prod) => {
          return (
            <Col span={8} key={prod.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src={prod.imgUrl}
                    style={{ height: '250px', objectFit: 'cover', position: 'relative' }}
                  />
                }
              >
                <Meta title={prod.title} description={`${prod.price} som`} />
                <AddButton onClick={() => handleAddCart(prod)}>
                  <PlusCircleOutlined style={{ fontSize: '25px', color: 'green' }} />
                </AddButton>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

const AddButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 45%;
  bottom: 15px;
  transition: transform ease 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
