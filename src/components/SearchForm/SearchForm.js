import "./SearchForm.scss";

export default function SearchForm(props) {
  return (
    <div className="search p-3">
      <div className="input-group">
        <button className="btn bg-white" type="button">
          <i className="fa fa-search fa-fw"></i>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Search Pokémon"
        />
      </div>
    </div>
  );
}
