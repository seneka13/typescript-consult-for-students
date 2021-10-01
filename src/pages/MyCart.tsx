import { cart } from '../data/cart';
import { Card, Col, Row } from 'antd';
import { Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

const { Meta } = Card;

export const MyCart = () => {
  const [cartArray, setCartArray] = useState(cart);
  const handleDeleteCart = (id: number) => {
    setCartArray((prev) => prev.filter((c) => c.prod.id !== id));
  };
  return (
    <>
      <h1>My Cart</h1>
      <Row gutter={16}>
        {cartArray.map((c) => {
          return (
            <Col span={8} key={c.prod.id}>
              <Badge count={c.quantity} color={'#87d068'}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={c.prod.imgUrl}
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        position: 'relative',
                        width: '300px',
                      }}
                    />
                  }
                >
                  <Meta title={c.prod.title} description={`${c.prod.price} som`} />
                  <DeleteButton onClick={() => handleDeleteCart(c.prod.id)}>
                    <DeleteOutlined style={{ fontSize: '25px', color: 'red' }} />
                  </DeleteButton>
                </Card>
              </Badge>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

const DeleteButton = styled.button`
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
