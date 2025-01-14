`use session`;

import styles from "@/styles/Profile.module.css";
import { Restaurant, User, defaultUser } from "@/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

async function handleUserEditSubmit(props: {
  id: number;
  email: string;
  name: string;
  password: string;
  image: string;
}) {
  const res = await fetch(`http://localhost:3000/api/user/owner/${props.id}`, {
    method: "PUT",
    body: JSON.stringify(props),
    headers: { "Content-Type": "application/json" },
  });

  const message = await res.json();

  console.log(message);
  if (res.ok) {
    alert(message);
  }
}

async function handleRestaurantEditSubmit(props: {
  ownerEmail: string;
  name: string;
  location: string;
  phone: string;
  contacts: string;
  description: string;
  schedule: string;
}) {
  const res = await fetch(
    `http://localhost:3000/api/restaurant/${props.ownerEmail}`,
    {
      method: "PUT",
      body: JSON.stringify(props),
      headers: { "Content-Type": "application/json" },
    }
  );

  const message = await res.json();

  console.log(message);
  if (res.ok) {
    alert(message);
  }
}

export const getServerSideProps: GetServerSideProps<{
  user: User;
}> = async (context) => {
  const ownerId = context.query.id;
  const res = await fetch(`http://localhost:3000/api/user/owner/${ownerId}`, {
    method: "GET",
  });

  let user = defaultUser;
  if (res.ok) {
    user = await res.json();
  }

  return { props: { user } };
};

export default function UserMenuPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: session } = useSession();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Faça login para continuar!");
      router.push(`/api/auth/signin`);
    },
  });

  if (status === `loading`) {
    return (
      <div>
        <h1>Faça Login!</h1>
      </div>
    );
  } else {
    if (session && session.user) {
      const [modoEdicao, setModoEdicao] = useState(false);
      const isOwner = session.user.isOwner;

      const userId = user.id;
      const [email, setEmail] = useState(user.email);
      const [name, setName] = useState(user.name);
      const [password, setPassword] = useState(user.password);
      const [image, setImage] = useState(user.image);

      const [restaurantName, setRestaurantName] = useState(
        user.restaurant?.name
      );
      const [location, setLocation] = useState(user.restaurant?.location);
      const [phone, setPhone] = useState(user.restaurant?.phone);
      const [contact, setContact] = useState(user.restaurant?.contacts);
      const [description, setDescription] = useState(
        user.restaurant?.description
      );
      const [schedule, setSchedule] = useState(user.restaurant?.schedule);

      return (
        <div>
          <button
            className={styles.button_edit}
            onClick={() => {
              setModoEdicao((prev) => !prev);
            }}
          >
            <img src="/images/icons/edit.svg" alt="" />
          </button>
          {!modoEdicao ? (
            <div>
              <div>
                <h1>Dados Pessoais:</h1>
                <div className={styles.div_data}>
                  <span>
                    <img src={image} alt="" />
                  </span>
                  <span>{userId}</span>
                  <span>{email}</span>
                  <span>{name}</span>
                </div>
              </div>
              {isOwner && (
                <div>
                  <h1>Dados Restaurante:</h1>
                  <div className={styles.div_data}>
                    <span>{restaurantName}</span>
                    <span>{description}</span>
                    <span>{location}</span>
                    <span>{phone}</span>
                    <span>{contact}</span>
                    <span>{schedule}</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div>
                <form
                  action=""
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (confirm("Deseja confirmar alterações?")) {
                      handleUserEditSubmit({
                        id: userId,
                        email: email,
                        name: name,
                        password: password,
                        image: image,
                      });
                    }
                  }}
                >
                  <h1>Dados Pessoais:</h1>
                  <div className={styles.div_data}>
                    <span>
                      <img src={image} alt={name} />
                    </span>
                    <span>ID: {userId}</span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      <label htmlFor=""></label>
                      <input
                        type="text"
                        value={image}
                        onChange={(event) => {
                          setImage(event.target.value);
                        }}
                      />
                    </span>
                  </div>
                  <button type="submit">Salvar mudanças</button>
                </form>
              </div>

              {isOwner && (
                <div>
                  <h1>Dados Restaurante:</h1>
                  <form
                    action=""
                    onSubmit={(event) => {
                      event.preventDefault();
                      if (confirm("Deseja confirmar alterações?")) {
                        handleRestaurantEditSubmit({
                          ownerEmail: email,
                          name: String(restaurantName),
                          location: String(location),
                          phone: String(phone),
                          contacts: String(contact),
                          description: String(description),
                          schedule: String(schedule),
                        });
                      }
                    }}
                  >
                    <div className={styles.div_data}>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          value={restaurantName}
                          onChange={(event) => {
                            setRestaurantName(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          value={description}
                          onChange={(event) => {
                            setDescription(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          value={location}
                          onChange={(event) => {
                            setLocation(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          value={contact}
                          onChange={(event) => {
                            setContact(event.target.value);
                          }}
                        />
                      </span>
                      <span>
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          value={schedule}
                          onChange={(event) => {
                            setSchedule(event.target.value);
                          }}
                        />
                      </span>
                    </div>
                    <button type="submit">Salvar mudanças</button>
                  </form>
                </div>
              )}
            </div>
          )}
          ;
        </div>
      );
    }
  }
}
