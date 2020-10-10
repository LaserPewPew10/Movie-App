import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";

// Containment
const SideMenu = (props) => {
  const { categories } = props;
  const Router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal();
      Router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={(elem) => (modal = elem)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((c) => (
          <a
            onClick={() => props.changeCategory(c.name)}
            key={c.id}
            href="#"
            className={`list-group-item ${
              props.activeCategory === c.name ? "active" : ""
            }`}
          >
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
