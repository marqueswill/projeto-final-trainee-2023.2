import { Restaurant } from "@/types/types";
import styles from "@/styles/RestaurantCard.module.css";

export default function restaurantCard(props: { restaurant: Restaurant }) {
  return (
    <div className={styles.div}>
      <span>
        <img
          src={`/images/restaurants/${props.restaurant.name
            .toLowerCase()
            .replaceAll(" ", "_")}.png`}
          alt={props.restaurant.name}
        />
      </span>
      <span>
        <h1>{props.restaurant.name}</h1>
        <p>{props.restaurant.description}</p>
        <p>{props.restaurant.contacts}</p>
        <p>{props.restaurant.location}</p>
        <p>{props.restaurant.phone}</p>
        <p>{props.restaurant.schedule}</p>
        <a href={`/restaurant/menu/${props.restaurant.id}`}>
          Visualizar cardápio
        </a>
      </span>
    </div>
  );
}