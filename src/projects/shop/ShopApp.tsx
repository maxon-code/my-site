import React, { useEffect, useState } from "react";
import {
    Button,
    Popover,
    Box,
    Flex,
    Text,
    Separator,
    ScrollArea,
    Card, Inset,
} from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui";
import {Navigation} from "../../Navigation.tsx";

type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
};

const products = [
    {
        id: 1,
        title: 'Ноутбук ASUS',
        description: 'Мощный ноутбук для работы и игр.',
        image: 'https://dlcdnwebimgs.asus.com/gain/30B02883-1847-4CA8-80AC-393A69BB7CD2/w185/fwebp',
        price: 999
    },
    {
        id: 2,
        title: 'iPhone 13',
        description: 'Смартфон нового поколения.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Uj8AXe__BKzgfJeCwtFpdrwG3Eu8lgl4oA&s',
        price: 799
    },
    {
        id: 3,
        title: 'Наушники Sony',
        description: 'Захватывающий звук.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEdiwXWypRdv-veXAUlYQlST5cB51x-jSYw&s',
        price: 199
    },
    {
        id: 4,
        title: 'Наушники Sony',
        description: 'Захватывающий звук.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEdiwXWypRdv-veXAUlYQlST5cB51x-jSYw&s',
        price: 199
    },
    {
        id: 5,
        title: 'iPhone 13',
        description: 'Смартфон нового поколения.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Uj8AXe__BKzgfJeCwtFpdrwG3Eu8lgl4oA&s',
        price: 799
    },
    {
        id: 6,
        title: 'Наушники Sony',
        description: 'Захватывающий звук.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEdiwXWypRdv-veXAUlYQlST5cB51x-jSYw&s',
        price: 199
    },
    {
        id: 7,
        title: 'iPhone 13',
        description: 'Смартфон нового поколения.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Uj8AXe__BKzgfJeCwtFpdrwG3Eu8lgl4oA&s',
        price: 799
    },
    {
        id: 8,
        title: 'Наушники Sony',
        description: 'Захватывающий звук.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEdiwXWypRdv-veXAUlYQlST5cB51x-jSYw&s',
        price: 199
    }
];


export default function App() {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: { id: number; title: string; price: number }) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const delFromCart = (id: number) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (


        <Box p="4" >
            <Navigation> </Navigation>
            <Popover.Root >
                <Popover.Trigger >
                    <Button>
                        Корзина ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
                    </Button>
                </Popover.Trigger>
                <Popover.Content sideOffset={5}>
                    <Box p="3" style={{ width: 250 }}>
                        <Text weight="bold">Корзина</Text>
                        <Separator my="2" />
                        <ScrollArea style={{ maxHeight: 200 }}>
                            {cartItems.length === 0 && <Text>Пусто</Text>}
                            {cartItems.map((item) => (
                                <Flex key={item.id} justify="between" align="center" mb="2" gap="2">
                                    <Text>
                                        {item.title} * {item.quantity}
                                    </Text>
                                    <Flex gap="2">
                                        <Button size="1" onClick={() => addToCart(item)}>
                                            +
                                        </Button>
                                        <Button size="1" onClick={() => delFromCart(item.id)}>
                                            -
                                        </Button>
                                    </Flex>
                                </Flex>
                            ))}
                        </ScrollArea>
                        <Separator my="2" />
                        <Text>Итого: {total}$</Text>
                    </Box>
                </Popover.Content>
            </Popover.Root>


            <Flex gap="4" mt="4">
                {products.map((p) => (
                    <Card key={p.id} style={{ width: 200, padding: 16 }}>
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                alt="Img"
                                src={p.image}
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: 140,
                                    backgroundColor: "var(--gray-5)",
                                }}
                            />
                        </Inset>
                        <Flex gap="2">
                        <Text weight="bold">{p.title}</Text>
                        <Text>{p.price}$</Text>
                        </Flex>
                        <Button mt="2" onClick={() => addToCart(p)}>
                            Добавить в корзину
                        </Button>
                    </Card>
                ))}

            </Flex>
        </Box>

    );
}
