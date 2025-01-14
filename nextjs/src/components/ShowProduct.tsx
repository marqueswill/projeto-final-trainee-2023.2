import styles from "@/styles/Menu.module.css";

import { Product, defaultUser } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AddToCart from "@/components/AddToCart";

import Image from "next/image";
import carrinho from "/public/images/carrinho.png";

export async function postCartProdut(props: {
  productId: number;
  cartId: number;
  restaurantId: number;
}) {
  const res = await fetch(`http://localhost:3000/api/user/cart/product/0`, {
    method: "POST",
    body: JSON.stringify({
      productId: props.productId,
      cartId: props.cartId,
      restaurantId: props.restaurantId,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    alert(JSON.stringify(data));
  }
}

export default function ShowProduct(props: {
  product: Product;
  restaurantId: number;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    // <section className={styles.tabelas}>
    <div className={styles.tabela}>
      <ul className={styles.ul}>
        <li className={styles.li}>{props.product.name}</li>
        <li className={styles.li2}>{props.product.description} </li>
        <li className={styles.li3}>{props.product.ingredients} </li>
      </ul>

      <ul className={styles.ul2}>
        <li className={styles.li}>Valor</li>
        <li className={styles.li2}>
          <span
            style={{
              textDecoration:
                props.product.discount === 0 ? "none" : "line-through",
            }}
          >
            {`R$ ${String(props.product.price.toFixed(2)).replace(".", ",")}`}
          </span>

          <br />
          <span style={{ color: "green" }}>
            {props.product.discount !== 0 &&
              `R$ ${String(
                (
                  props.product.price *
                  (1 - props.product.discount / 100)
                ).toFixed(2)
              ).replace(".", ",")}`}
          </span>
        </li>

        <AddToCart product={props.product} restaurantId={props.restaurantId} />
      </ul>
    </div>
  );

  {
    /* <div className={styles.tabela}>
        <ul className={styles.ul}>
          <li className={styles.li}>{props.product.name}</li>
          <li className={styles.li2}>{props.product.description} </li>
        </ul>

        <ul className={styles.ul2}>
          <li className={styles.li}>Valor</li>
          <li className={styles.li2}>
            R$ {String(props.product.price.toFixed(2)).replace(".", ",")}
          </li>

          <a>
            <Image src={carrinho} alt=""></Image>
          </a>
        </ul>
      </div> */
  }
  {
    /* </section> */
  }
  //   );
}
