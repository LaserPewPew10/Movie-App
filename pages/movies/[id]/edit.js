import react from "react";
import Movie from ".";
import { getMovieById } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

class EditMovie extends React.Component {
  //   static getInitialProps({ query }) {
  //     return { query };
  //   }

  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);

    return { movie };
  }

  //   state = {
  //     movie: {
  //       name: "",
  //       description: "",
  //       rating: "",
  //       image: "",
  //       cover: "",
  //       longDesc: "",
  //     },
  //   };

  //   componentDidMount() {
  //     const { id } = this.props.query;
  //     getMovieById(id).then((movie) => {
  //       this.setState({ movie });
  //     });
  //   }

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm initialData={movie} />
      </div>
    );
  }
}

export default EditMovie;
