import "./SearchForm.scss";

export default function SearchForm(props) {
  const handleChange = (event) => {
    const value = event.target.value;
    props.onSearch(value);
  };

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
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
